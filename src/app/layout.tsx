import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Markdown Blog",
  description:
    "A modern blog built with Next.js, Contentlayer, and Tailwind CSS",
  keywords: ["blog", "nextjs", "contentlayer", "markdown", "web development"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "My Markdown Blog",
    description:
      "A modern blog built with Next.js, Contentlayer, and Tailwind CSS",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <footer className="bg-gray-800 text-white py-8 mt-16">
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
