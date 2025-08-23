import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { allPosts } from ".contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";

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

  // Display the raw markdown content
  const content = post.body.raw || "Content not available";

  return (
    <div className="min-h-screen bg-gray-50">
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString()}
            </time>
            {post.tags.length > 0 && (
              <div className="ml-4 flex gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          {post.excerpt && (
            <p className="text-xl text-gray-600">{post.excerpt}</p>
          )}
        </header>

        {/* Post Content */}
        <article className="prose prose-lg max-w-none">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <pre className="whitespace-pre-wrap text-sm">{content}</pre>
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
