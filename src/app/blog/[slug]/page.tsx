import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { allPosts } from ".contentlayer/generated";
import Markdown from "markdown-to-jsx";

interface PostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = allPosts.find((post) => post.slug === params.slug);
  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function PostPage({ params }: PostPageProps) {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Use markdown-to-jsx for proper rendering
  const content = post.body.raw || "Content not available";

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back to blog */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            ← Back to Blog
          </Link>
        </div>

        {/* Post Header */}
        <header className="mb-8">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-500 mb-4 gap-2 sm:gap-0">
            <time dateTime={post.date} className="shrink-0">
              {new Date(post.date).toLocaleDateString()}
            </time>
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 sm:gap-2 sm:ml-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full whitespace-nowrap"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          {post.excerpt && (
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              {post.excerpt}
            </p>
          )}
        </header>

        {/* Post Content with Typography */}
        <article className="bg-white rounded-lg shadow-md p-4 md:p-8 border border-gray-200">
          <div className="prose prose-lg max-w-none prose-headings:text-black prose-h1:text-3xl prose-h1:font-bold prose-h2:text-2xl prose-h2:font-semibold prose-h3:text-xl prose-h3:font-semibold prose-p:text-black prose-p:leading-relaxed prose-strong:text-black prose-strong:font-semibold prose-ul:text-black prose-li:text-black prose-code:bg-gray-200 prose-code:text-black prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:font-mono prose-pre:bg-gray-900 prose-pre:text-white prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto">
            <Markdown
              options={{
                overrides: {
                  h1: {
                    component: "h1",
                    props: { className: "text-3xl font-bold text-black mb-4" },
                  },
                  h2: {
                    component: "h2",
                    props: {
                      className: "text-2xl font-semibold text-black mb-3 mt-6",
                    },
                  },
                  h3: {
                    component: "h3",
                    props: {
                      className: "text-xl font-semibold text-black mb-2 mt-4",
                    },
                  },
                  p: {
                    component: "p",
                    props: { className: "text-black mb-4 leading-relaxed" },
                  },
                  strong: {
                    component: "strong",
                    props: { className: "font-semibold text-black" },
                  },
                  ul: {
                    component: "ul",
                    props: {
                      className:
                        "list-disc list-inside text-black mb-4 space-y-2",
                    },
                  },
                  li: {
                    component: "li",
                    props: { className: "text-black" },
                  },
                  // code: {
                  //   component: "code",
                  //   props: {
                  //     className:
                  //       "bg-gray-200 text-black px-2 py-1 rounded font-mono text-sm",
                  //   },
                  // },
                  pre: {
                    component: "pre",
                    props: {
                      className:
                        "bg-gray-900 text-white p-4 rounded-lg overflow-x-auto mb-4",
                    },
                  },
                },
              }}
            >
              {content}
            </Markdown>
          </div>
        </article>

        {/* Navigation */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex justify-between">
            <Link
              href="/blog"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              ← All Posts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
