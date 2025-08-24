import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adam Schmidt's Blog",
  description:
    "Adam Schmidt's essays on all things technology, life, productivity, and language-learning.",
  keywords: [
    "blog",
    "web development",
    "technology",
    "life",
    "productivity",
    "language-learning",
  ],
  authors: [{ name: "Adam Schmidt" }],
  openGraph: {
    title: "Adam Schmidt's Blog",
    description:
      "Adam Schmidt's essays on all things technology, life, productivity, and language-learning.",
    type: "website",
    url: "https://adam-schmidt.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body
        className={inter.className}
        style={{ overscrollBehaviorY: "none", overscrollBehaviorX: "none" }}
      >
        <Navigation />
        <main>{children}</main>
        <footer className="bg-gray-800 text-white py-8 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-300">
              © {new Date().getFullYear()} My Markdown Blog. Built with Next.js
              and Contentlayer.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
