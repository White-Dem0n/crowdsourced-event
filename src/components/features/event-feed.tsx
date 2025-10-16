"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SearchFilterPanel } from "./search-filter-panel";
import Link from "next/link";
import React, { useState, useMemo, useEffect } from "react";
import { RxChevronRight } from "react-icons/rx";
import { Event } from "@/types";
import { EventsService } from "@/lib/events";

interface EventFeedProps {
  events?: Event[];
}

export function EventFeed({ events = [] }: EventFeedProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [publishedEvents, setPublishedEvents] = useState<Event[]>([]);

  const handleEventClick = (e: React.MouseEvent) => {
    // Prevent event bubbling to avoid triggering mobile menu
    e.stopPropagation();
  };

  // Default events if none provided
  const defaultEvents = [
    {
      id: "1",
      title: "Free Burgur & Fries",
      description: "Join hundreds of students for a night of free food and networking",
      category: "free-food" as const,
      readTime: 5,
      imageUrl: "https://images.unsplash.com/photo-1551782450-17144efb9c50?auto=format&fit=crop&w=600&h=400&q=80",
    },
    {
      id: "2", 
      title: "Weekend soccer tournament",
      description: "Compete with teams from across the university in an exciting match",
      category: "sports" as const,
      readTime: 5,
      imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&h=400&q=80",
    },
    {
      id: "3",
      title: "International music festival", 
      description: "Experience global sounds and connect with diverse student communities",
      category: "music" as const,
      readTime: 5,
      imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&h=400&q=80",
    },
    {
      id: "4",
      title: "Cultural Heritage Exhibition",
      description: "Explore diverse cultures through art, food, and traditions",
      category: "cultural" as const,
      readTime: 3,
      imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&h=400&q=80",
    },
    {
      id: "5",
      title: "Study Group Session",
      description: "Join fellow students for collaborative study sessions",
      category: "study" as const,
      readTime: 4,
      imageUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=600&h=400&q=80",
    },
    {
      id: "6",
      title: "Free Pizza Night",
      description: "Delicious pizza and great company at the student center",
      category: "free-food" as const,
      readTime: 2,
      imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&h=400&q=80",
    }
  ];

  useEffect(() => {
    // Load published events from local storage
    const stored = EventsService.listPublished();
    setPublishedEvents(stored);
  }, []);

  // Merge published events (user-created) with defaults
  const displayEvents: Event[] = useMemo(() => {
    const combined = [...publishedEvents, ...(events.length > 0 ? events : defaultEvents)];
    const dedupedById = new Map<string, Event>();
    for (const ev of combined) {
      dedupedById.set(ev.id, ev);
    }
    // Show newest first if metadata exists
    return Array.from(dedupedById.values()).sort((a, b) => {
      const aTime = a.createdAt ? Date.parse(a.createdAt) : 0;
      const bTime = b.createdAt ? Date.parse(b.createdAt) : 0;
      return bTime - aTime;
    });
  }, [publishedEvents, events]);

  // Filter and search logic
  const filteredEvents = useMemo(() => {
    let filtered: Event[] = displayEvents;

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(event =>
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply category filters
    if (selectedFilters.length > 0) {
      filtered = filtered.filter(event =>
        selectedFilters.includes(event.category)
      );
    }

    return filtered;
  }, [displayEvents, searchQuery, selectedFilters]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilter = (filters: string[]) => {
    setSelectedFilters(filters);
  };

  const handleClear = () => {
    setSearchQuery("");
    setSelectedFilters([]);
  };

  return (
    <div className="relative z-10">
      {/* Search and Filter Panel */}
      <SearchFilterPanel
        onSearch={handleSearch}
        onFilter={handleFilter}
        onClear={handleClear}
      />

      <section className="px-[5%] py-16 md:py-24 lg:py-28" onClick={handleEventClick}>
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Events</p>
            <h2 className="heading-h2 mb-5 font-bold md:mb-6">
              What's happening on campus
            </h2>
            <p className="text-medium">
              Discover the pulse of student life through crowdsourced events
            </p>
            {(searchQuery || selectedFilters.length > 0) && (
              <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-800">
                  Showing {filteredEvents.length} of {displayEvents.length} events
                </p>
              </div>
            )}
          </div>
        </div>
        
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
            {filteredEvents.map((event) => (
            <Card key={event.id} className="group flex size-full flex-col items-center justify-start overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <Link href={`/events/${event.id}`} className="w-full relative overflow-hidden">
                <img
                  src={event.imageUrl || "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"}
                  alt={event.title}
                  className="aspect-[3/2] size-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <div className="px-6 py-6 md:p-6 flex-1 flex flex-col">
                <div className="mb-4 flex w-full items-center justify-start">
                  <Badge className={`mr-4 capitalize ${
                    event.category === 'free-food' ? 'bg-orange-100 text-orange-800 hover:bg-orange-200' :
                    event.category === 'music' ? 'bg-purple-100 text-purple-800 hover:bg-purple-200' :
                    event.category === 'cultural' ? 'bg-blue-100 text-blue-800 hover:bg-blue-200' :
                    event.category === 'study' ? 'bg-green-100 text-green-800 hover:bg-green-200' :
                    event.category === 'sports' ? 'bg-red-100 text-red-800 hover:bg-red-200' :
                    'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}>
                    {event.category.replace('-', ' ')}
                  </Badge>
                  <p className="text-small inline font-semibold text-gray-500">{event.readTime} min read</p>
                </div>
                <Link className="mb-3 group" href={`/events/${event.id}`}>
                  <h2 className="heading-h5 font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                    {event.title}
                  </h2>
                </Link>
                <p className="text-gray-600 flex-1 mb-4">{event.description}</p>
                <Link href={`/events/${event.id}`}>
                  <Button
                    title="Read more"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                    className="mt-auto flex items-center justify-start gap-x-2 text-blue-600 hover:text-blue-700 p-0 h-auto"
                  >
                    Read more
                  </Button>
                </Link>
              </div>
            </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No events found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search terms or filters to find more events.
              </p>
              <Button 
                variant="outline" 
                onClick={handleClear}
                className="px-6 py-2"
              >
                Clear all filters
              </Button>
            </div>
          </div>
        )}
        
        <div className="flex items-center justify-end">
          <Button variant="secondary" className="mt-10 md:mt-14 lg:mt-16">
            View all
          </Button>
        </div>
      </div>
    </section>
    </div>
  );
}
