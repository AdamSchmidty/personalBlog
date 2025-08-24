export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            About
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Learn more about this blog and the technologies behind it
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-100">
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-ul:text-gray-700 prose-li:text-gray-700">
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-100">
                About This Blog
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Welcome to my personal blog! This is a space where I share my
                thoughts, experiences, and insights about web development,
                technology, and everything in between.
              </p>
            </div>

            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <span className="w-2 h-8 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full mr-3"></span>
                What I Write About
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-100">
                  <strong className="text-blue-700">Web Development:</strong>
                  <span className="text-gray-700">
                    {" "}
                    Next.js, React, JavaScript, and modern web technologies
                  </span>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-100">
                  <strong className="text-green-700">
                    Content Management:
                  </strong>
                  <span className="text-gray-700">
                    {" "}
                    Using Contentlayer for structured content
                  </span>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-4 rounded-lg border border-purple-100">
                  <strong className="text-purple-700">Styling & Design:</strong>
                  <span className="text-gray-700">
                    {" "}
                    Tailwind CSS and modern design practices
                  </span>
                </div>
                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-lg border border-orange-100">
                  <strong className="text-orange-700">Performance:</strong>
                  <span className="text-gray-700">
                    {" "}
                    Optimization techniques and best practices
                  </span>
                </div>
                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-4 rounded-lg border border-teal-100 md:col-span-2">
                  <strong className="text-teal-700">Technology Trends:</strong>
                  <span className="text-gray-700">
                    {" "}
                    Industry insights and emerging technologies
                  </span>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <span className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-600 rounded-full mr-3"></span>
                Technology Stack
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                This blog is built with modern web technologies to ensure fast
                performance, great user experience, and easy content management:
              </p>

              <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl p-6 mb-8 border border-gray-200">
                <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="w-6 h-6 bg-blue-500 rounded-full mr-3 flex items-center justify-center">
                    <span className="w-3 h-3 bg-white rounded-full"></span>
                  </span>
                  Frontend
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <strong className="text-gray-900">Next.js 14:</strong>
                      <span className="text-gray-700">
                        {" "}
                        React framework with App Router for optimal performance
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <strong className="text-gray-900">TypeScript:</strong>
                      <span className="text-gray-700">
                        {" "}
                        For type safety and better development experience
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <strong className="text-gray-900">Tailwind CSS:</strong>
                      <span className="text-gray-700">
                        {" "}
                        Utility-first CSS framework for rapid UI development
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 mb-8 border border-green-200">
                <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="w-6 h-6 bg-green-500 rounded-full mr-3 flex items-center justify-center">
                    <span className="w-3 h-3 bg-white rounded-full"></span>
                  </span>
                  Content Management
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <strong className="text-gray-900">Contentlayer 2:</strong>
                      <span className="text-gray-700">
                        {" "}
                        Content SDK for type-safe content
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <strong className="text-gray-900">MDX:</strong>
                      <span className="text-gray-700">
                        {" "}
                        Enhanced Markdown with React components
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <strong className="text-gray-900">
                        Static Generation:
                      </strong>
                      <span className="text-gray-700">
                        {" "}
                        Pre-built pages for optimal performance
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl p-6 mb-8 border border-purple-200">
                <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="w-6 h-6 bg-purple-500 rounded-full mr-3 flex items-center justify-center">
                    <span className="w-3 h-3 bg-white rounded-full"></span>
                  </span>
                  Features
                </h4>
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <strong className="text-gray-900">
                        Search Functionality:
                      </strong>
                      <span className="text-gray-700">
                        {" "}
                        Powered by Fuse.js for fast, fuzzy search
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <strong className="text-gray-900">
                        Responsive Design:
                      </strong>
                      <span className="text-gray-700">
                        {" "}
                        Works perfectly on all devices
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <strong className="text-gray-900">SEO Optimized:</strong>
                      <span className="text-gray-700">
                        {" "}
                        Built with search engines in mind
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <strong className="text-gray-900">Fast Loading:</strong>
                      <span className="text-gray-700">
                        {" "}
                        Static generation and optimized assets
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <span className="w-2 h-8 bg-gradient-to-b from-emerald-500 to-teal-600 rounded-full mr-3"></span>
                Why This Stack?
              </h3>
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-200">
                <p className="text-lg text-gray-700 leading-relaxed">
                  I chose this technology stack because it provides the perfect
                  balance of developer experience, performance, and
                  maintainability. Next.js with the App Router offers excellent
                  performance out of the box, while Contentlayer makes content
                  management a breeze. Tailwind CSS ensures consistent,
                  beautiful styling without the overhead of custom CSS.
                </p>
              </div>
            </div>

            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <span className="w-2 h-8 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full mr-3"></span>
                Get in Touch
              </h3>
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-200">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Have questions about the blog, want to discuss technology, or
                  just want to say hello? Feel free to reach out through the{" "}
                  <a
                    href="/contact"
                    className="text-indigo-600 hover:text-purple-700 font-semibold underline decoration-2 underline-offset-2"
                  >
                    contact form
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-50 via-yellow-50 to-orange-50 border-l-4 border-amber-400 rounded-r-xl p-6 shadow-lg">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center">
                    <span className="text-amber-900 font-bold text-sm">!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
