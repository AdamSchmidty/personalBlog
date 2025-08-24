import Link from "next/link";
import { compareDesc } from "date-fns";
import { allPosts } from ".contentlayer/generated";

export default function Home() {
  const posts = allPosts
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .slice(0, 3); // Show only 3 latest posts

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Adam&apos;s Blog
          </h1>
          <div className="mt-6 max-w-3xl mx-auto text-center">
            <p className="text-xl text-gray-600 leading-relaxed font-medium">
              Adam Schmidt&apos;s essays on all things technology, life,
            </p>
            <p className="text-xl text-gray-600 leading-relaxed font-medium mt-1">
              productivity, and language-learning.
            </p>
          </div>
          <div className="mt-10">
            <Link
              href="/blog"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Read the Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Latest Posts
          </h2>
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
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      <Link href={post.url} className="hover:text-blue-600">
                        {post.title}
                      </Link>
                    </h3>
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
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg mb-4">
                No posts yet. Check back soon!
              </p>
              <p className="text-gray-500">
                Posts will appear here once you add them to the content/posts
                folder.
              </p>
            </div>
          )}
          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              View All Posts
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      {/* <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              About This Blog
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              This blog is built with modern web technologies including Next.js
              14, Contentlayer 2, and Tailwind CSS. It features a clean,
              responsive design with search functionality and static generation
              for optimal performance.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section> */}
    </div>
  );
}
