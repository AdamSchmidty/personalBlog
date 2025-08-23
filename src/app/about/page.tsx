export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About</h1>
          <p className="text-xl text-gray-600">
            Learn more about this blog and the technologies behind it
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="prose prose-lg max-w-none">
            <h2>About This Blog</h2>
            <p>
              Welcome to my personal blog! This is a space where I share my
              thoughts, experiences, and insights about web development,
              technology, and everything in between.
            </p>

            <h3>What I Write About</h3>
            <ul>
              <li>
                <strong>Web Development:</strong> Next.js, React, JavaScript,
                and modern web technologies
              </li>
              <li>
                <strong>Content Management:</strong> Using Contentlayer for
                structured content
              </li>
              <li>
                <strong>Styling & Design:</strong> Tailwind CSS and modern
                design practices
              </li>
              <li>
                <strong>Performance:</strong> Optimization techniques and best
                practices
              </li>
              <li>
                <strong>Technology Trends:</strong> Industry insights and
                emerging technologies
              </li>
            </ul>

            <h3>Technology Stack</h3>
            <p>
              This blog is built with modern web technologies to ensure fast
              performance, great user experience, and easy content management:
            </p>

            <h4>Frontend</h4>
            <ul>
              <li>
                <strong>Next.js 14:</strong> React framework with App Router for
                optimal performance
              </li>
              <li>
                <strong>TypeScript:</strong> For type safety and better
                development experience
              </li>
              <li>
                <strong>Tailwind CSS:</strong> Utility-first CSS framework for
                rapid UI development
              </li>
            </ul>

            <h4>Content Management</h4>
            <ul>
              <li>
                <strong>Contentlayer 2:</strong> Content SDK for type-safe
                content
              </li>
              <li>
                <strong>MDX:</strong> Enhanced Markdown with React components
              </li>
              <li>
                <strong>Static Generation:</strong> Pre-built pages for optimal
                performance
              </li>
            </ul>

            <h4>Features</h4>
            <ul>
              <li>
                <strong>Search Functionality:</strong> Powered by Fuse.js for
                fast, fuzzy search
              </li>
              <li>
                <strong>Responsive Design:</strong> Works perfectly on all
                devices
              </li>
              <li>
                <strong>SEO Optimized:</strong> Built with search engines in
                mind
              </li>
              <li>
                <strong>Fast Loading:</strong> Static generation and optimized
                assets
              </li>
            </ul>

            <h3>Why This Stack?</h3>
            <p>
              I chose this technology stack because it provides the perfect
              balance of developer experience, performance, and maintainability.
              Next.js with the App Router offers excellent performance out of
              the box, while Contentlayer makes content management a breeze.
              Tailwind CSS ensures consistent, beautiful styling without the
              overhead of custom CSS.
            </p>

            <h3>Get in Touch</h3>
            <p>
              Have questions about the blog, want to discuss technology, or just
              want to say hello? Feel free to reach out through the{" "}
              <a href="/contact" className="text-blue-600 hover:text-blue-800">
                contact form
              </a>
              .
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-8">
              <p className="text-blue-800">
                <strong>Note:</strong> This blog is open source and serves as
                both a personal blog and a demonstration of modern web
                development practices. Feel free to explore the code and use it
                as inspiration for your own projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
