"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import Fuse from "fuse.js";
import { SearchResult } from "@/types/blog";

interface SearchProps {
  className?: string;
}

interface SearchPost {
  title: string;
  excerpt: string;
  tags: string[];
  slug: string;
  date: string;
  url: string;
  _raw?: Record<string, unknown>;
  featured?: boolean;
  body?: Record<string, unknown>;
}

export default function Search({ className = "" }: SearchProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchIndex, setSearchIndex] = useState<{
    posts: SearchPost[];
  } | null>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load search index
    fetch("/search-index.json")
      .then((res) => res.json())
      .then((data) => setSearchIndex(data))
      .catch((err) => console.error("Failed to load search index:", err));
  }, []);

  useEffect(() => {
    // Handle click outside to close search results
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setQuery("");
        setResults([]);
      }
    };

    // Handle escape key to close search results
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setQuery("");
        setResults([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const fuse = useMemo(() => {
    if (!searchIndex?.posts) return null;

    return new Fuse(searchIndex.posts, {
      keys: [
        { name: "title", weight: 0.5 },
        { name: "tags", weight: 0.3 },
        { name: "excerpt", weight: 0.2 },
      ],
      threshold: 0.4,
      includeScore: true,
      includeMatches: true,
      minMatchCharLength: 2,
    });
  }, [searchIndex]);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);

    if (!fuse || !searchQuery.trim()) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    const searchResults = fuse.search(searchQuery);
    // Transform the results to match our SearchResult type
    const transformedResults: SearchResult[] = searchResults
      .slice(0, 5)
      .map((result) => ({
        item: {
          _id: result.item.slug, // Use slug as ID for now
          _raw: result.item._raw || {},
          type: "Post" as const,
          title: result.item.title,
          date: result.item.date,
          excerpt: result.item.excerpt,
          slug: result.item.slug,
          tags: result.item.tags,
          featured: result.item.featured || false,
          url: result.item.url,
          body: result.item.body || {},
        },
        refIndex: result.refIndex,
        score: result.score || 0,
      }));
    setResults(transformedResults);
    setIsLoading(false);
  };

  const handleResultClick = () => {
    // Clear search query and results when a result is clicked
    setQuery("");
    setResults([]);
  };

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      <div className="relative">
        <input
          type="text"
          placeholder="Search posts..."
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full px-3 md:px-4 py-2 pl-8 md:pl-10 pr-8 md:pr-4 text-sm md:text-base text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <svg
          className="absolute left-2 md:left-3 top-2.5 h-4 md:h-5 w-4 md:w-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        {query && (
          <button
            onClick={() => {
              setQuery("");
              setResults([]);
            }}
            className="absolute right-2 md:right-3 top-2.5 h-4 md:h-5 w-4 md:w-5 text-gray-400 hover:text-gray-600"
            type="button"
          >
            <svg
              className="h-4 md:h-5 w-4 md:w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Search Results */}
      {query && (
        <div className="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-xl animate-in fade-in-0 slide-in-from-top-2 duration-200 md:max-w-lg">
          {isLoading ? (
            <div className="p-4 text-center text-gray-500">Searching...</div>
          ) : results.length > 0 ? (
            <div className="max-h-80 md:max-h-96 overflow-y-auto">
              {results.map((result, index) => (
                <Link
                  key={index}
                  href={result.item.url}
                  onClick={handleResultClick}
                  className="block p-3 md:p-4 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors duration-150"
                >
                  <div className="font-medium text-gray-900 text-sm md:text-base line-clamp-2">
                    {result.item.title}
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 mt-1 line-clamp-2">
                    {result.item.excerpt}
                  </div>
                  {result.item.tags && result.item.tags.length > 0 && (
                    <div className="flex gap-1 md:gap-2 mt-2 flex-wrap">
                      {result.item.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-1.5 md:px-2 py-0.5 md:py-1 bg-blue-100 text-blue-800 text-xs rounded-full whitespace-nowrap"
                        >
                          {tag}
                        </span>
                      ))}
                      {result.item.tags.length > 3 && (
                        <span className="px-1.5 md:px-2 py-0.5 md:py-1 bg-gray-100 text-gray-600 text-xs rounded-full whitespace-nowrap">
                          +{result.item.tags.length - 3}
                        </span>
                      )}
                    </div>
                  )}
                  <div className="text-xs text-gray-400 mt-1 md:mt-2">
                    {new Date(result.item.date).toLocaleDateString()}
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-3 md:p-4 text-center text-gray-500 text-sm">
              No results found
            </div>
          )}
        </div>
      )}
    </div>
  );
}
