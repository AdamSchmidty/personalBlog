/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "#374151",
            h1: {
              color: "#111827",
              fontWeight: "700",
              fontSize: "2.25rem",
              lineHeight: "2.5rem",
              marginTop: "2rem",
              marginBottom: "1rem",
            },
            h2: {
              color: "#111827",
              fontWeight: "600",
              fontSize: "1.875rem",
              lineHeight: "2.25rem",
              marginTop: "1.5rem",
              marginBottom: "0.75rem",
            },
            h3: {
              color: "#111827",
              fontWeight: "600",
              fontSize: "1.5rem",
              lineHeight: "2rem",
              marginTop: "1.25rem",
              marginBottom: "0.5rem",
            },
            p: {
              marginTop: "1.25rem",
              marginBottom: "1.25rem",
              lineHeight: "1.75",
            },
            ul: {
              marginTop: "1.25rem",
              marginBottom: "1.25rem",
            },
            li: {
              marginTop: "0.5rem",
              marginBottom: "0.5rem",
            },
            code: {
              backgroundColor: "#f3f4f6",
              padding: "0.25rem 0.375rem",
              borderRadius: "0.375rem",
              fontSize: "0.875rem",
              fontWeight: "500",
            },
            "pre code": {
              backgroundColor: "transparent",
              padding: "0",
              borderRadius: "0",
              fontSize: "inherit",
              fontWeight: "inherit",
            },
            pre: {
              backgroundColor: "#1f2937",
              color: "#f9fafb",
              padding: "1rem",
              borderRadius: "0.5rem",
              overflow: "auto",
            },
            blockquote: {
              borderLeftColor: "#d1d5db",
              fontStyle: "italic",
              color: "#6b7280",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  // Add this for debugging
  safelist: [
    "bg-white",
    "text-gray-900",
    "shadow-sm",
    "border-b",
    "border-gray-200",
  ],
};
