import Link from "next/link";
import Search from "@/components/Search";
import { allPosts } from ".contentlayer/generated";
import { compareDesc } from "date-fns";

export default function BlogPage() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about web development and
            technology
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-12">
          <Search className="w-full" />
        </div>

        {/* Posts Grid */}
        {posts.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post._id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-500 mb-2 gap-1 sm:gap-0">
                    <time dateTime={post.date} className="shrink-0">
                      {new Date(post.date).toLocaleDateString()}
                    </time>
                    {post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 sm:gap-2 sm:ml-2">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full whitespace-nowrap"
                          >
                            {tag}
                          </span>
                        ))}
                        {post.tags.length > 2 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full whitespace-nowrap">
                            +{post.tags.length - 2}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    <Link href={post.url} className="hover:text-blue-600">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link
                    href={post.url}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <svg
                className="mx-auto h-12 w-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No posts yet
            </h3>
            <p className="text-gray-600 mb-6">
              Posts will appear here once you add them to the content/posts
              folder.
            </p>
            <div className="text-sm text-gray-500">
              <p>To add a post:</p>
              <ol className="list-decimal list-inside mt-2 space-y-1">
                <li>Create a new .mdx file in the content/posts folder</li>
                <li>Add frontmatter with title, date, excerpt, and slug</li>
                <li>Write your content in Markdown/MDX format</li>
                <li>Build the project to generate the post</li>
              </ol>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
