"use client";

import { useState, useMemo } from "react";

interface TagFilterProps {
  allTags: string[];
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
  onClearFilters: () => void;
  className?: string;
}

export default function TagFilter({
  allTags,
  selectedTags,
  onTagToggle,
  onClearFilters,
  className = "",
}: TagFilterProps) {
  const hasActiveFilters = selectedTags.length > 0;

  const handleTagClick = (tag: string) => {
    console.log("TagFilter: Tag clicked:", tag);
    onTagToggle(tag);
  };

  const handleClearClick = () => {
    onClearFilters();
  };

  return (
    <div className={`${className}`}>
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <span className="text-sm font-medium text-gray-700">
          Filter by tags:
        </span>
        {hasActiveFilters && (
          <button
            onClick={handleClearClick}
            className="text-sm text-blue-600 hover:text-blue-800 font-medium px-3 py-1 rounded-md hover:bg-blue-50 transition-colors"
          >
            Clear filters
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {allTags.map((tag) => {
          const isSelected = selectedTags.includes(tag);
          return (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className={`
                px-3 py-2 text-sm font-medium rounded-full transition-all duration-200
                ${
                  isSelected
                    ? "bg-blue-600 text-white shadow-md hover:bg-blue-700 hover:shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900"
                }
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
              `}
            >
              {tag}
            </button>
          );
        })}
      </div>

      {hasActiveFilters && (
        <div className="mt-3 text-sm text-gray-600">
          Showing posts with tags:{" "}
          <span className="font-medium text-blue-600">
            {selectedTags.join(", ")}
          </span>
        </div>
      )}
    </div>
  );
}
