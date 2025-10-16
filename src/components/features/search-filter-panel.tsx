"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import React, { useState } from "react";
import { BiSearch, BiFilter, BiX } from "react-icons/bi";

interface SearchFilterPanelProps {
  onSearch: (query: string) => void;
  onFilter: (filters: string[]) => void;
  onClear: () => void;
}

const filterOptions = [
  { id: "free-food", label: "Free Food", color: "bg-orange-100 text-orange-800 hover:bg-orange-200" },
  { id: "music", label: "Music", color: "bg-purple-100 text-purple-800 hover:bg-purple-200" },
  { id: "cultural", label: "Cultural", color: "bg-blue-100 text-blue-800 hover:bg-blue-200" },
  { id: "study", label: "Study", color: "bg-green-100 text-green-800 hover:bg-green-200" },
];

export function SearchFilterPanel({ onSearch, onFilter, onClear }: SearchFilterPanelProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const handleFilterToggle = (filterId: string) => {
    const newFilters = selectedFilters.includes(filterId)
      ? selectedFilters.filter(f => f !== filterId)
      : [...selectedFilters, filterId];
    
    setSelectedFilters(newFilters);
    onFilter(newFilters);
  };

  const handleClearAll = () => {
    setSearchQuery("");
    setSelectedFilters([]);
    onClear();
  };

  const hasActiveFilters = searchQuery || selectedFilters.length > 0;

  return (
    <section className="px-[5%] py-12 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 border-b border-gray-200">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="mb-8">
            <div className="relative group">
              <BiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl group-focus-within:text-blue-600 transition-colors" />
              <Input
                type="text"
                placeholder="Search events by title, description, or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-14 pr-32 py-4 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 bg-white/80 backdrop-blur-sm"
              />
              <Button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                size="sm"
              >
                Search
              </Button>
            </div>
          </form>

          {/* Filter Toggle and Active Filters */}
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-3 px-6 py-3 border-2 border-gray-300 hover:border-blue-500 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all duration-200 group"
              >
                <BiFilter className="text-lg group-hover:text-blue-600 transition-colors" />
                <span className="font-medium">Filters</span>
                {selectedFilters.length > 0 && (
                  <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs px-2 py-1 rounded-full shadow-sm">
                    {selectedFilters.length}
                  </Badge>
                )}
              </Button>

              {hasActiveFilters && (
                <Button
                  variant="ghost"
                  onClick={handleClearAll}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-800 px-4 py-2 rounded-lg hover:bg-white/60 transition-all duration-200"
                >
                  <BiX className="text-lg" />
                  <span className="font-medium">Clear All</span>
                </Button>
              )}
            </div>

            {/* Active Filters Display */}
            {selectedFilters.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {selectedFilters.map(filterId => {
                  const filter = filterOptions.find(f => f.id === filterId);
                  return filter ? (
                    <Badge
                      key={filterId}
                      className={`${filter.color} cursor-pointer px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105`}
                      onClick={() => handleFilterToggle(filterId)}
                    >
                      <span className="font-medium">{filter.label}</span>
                      <BiX className="ml-2 text-sm" />
                    </Badge>
                  ) : null;
                })}
              </div>
            )}
          </div>

          {/* Filter Options */}
          {showFilters && (
            <div className="mt-8 p-6 bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <BiFilter className="text-blue-600" />
                Filter by Category
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {filterOptions.map((filter) => (
                  <Badge
                    key={filter.id}
                    className={`${filter.color} cursor-pointer px-6 py-4 rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 text-center font-medium ${
                      selectedFilters.includes(filter.id) 
                        ? 'ring-2 ring-blue-500 ring-offset-2 scale-105' 
                        : 'hover:scale-105'
                    }`}
                    onClick={() => handleFilterToggle(filter.id)}
                  >
                    {filter.label}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Results Summary */}
          {hasActiveFilters && (
            <div className="mt-6 p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-gray-200">
              <div className="text-sm text-gray-700">
                {searchQuery && (
                  <div className="flex items-center gap-2 mb-2">
                    <BiSearch className="text-blue-600" />
                    <span>Searching for: <strong className="text-blue-800">"{searchQuery}"</strong></span>
                  </div>
                )}
                {selectedFilters.length > 0 && (
                  <div className="flex items-center gap-2">
                    <BiFilter className="text-purple-600" />
                    <span>
                      Filtered by: <strong className="text-purple-800">{selectedFilters.map(id => 
                        filterOptions.find(f => f.id === id)?.label
                      ).join(", ")}</strong>
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
