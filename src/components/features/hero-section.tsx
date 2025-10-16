"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function HeroSection() {
  return (
    <section className="relative px-[5%] py-20 md:py-32 lg:py-40 overflow-hidden">
      {/* Background with geometric patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="absolute inset-0 hero-pattern opacity-20"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center md:gap-16 lg:gap-20">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800 mb-6">
              🎉 Discover Campus Life
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Connect Through
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Campus Events
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
              Join thousands of students discovering amazing events, from free food nights to cultural festivals. 
              Your campus community is waiting!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="/events">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg"
                >
                  Explore Events
                  <RxChevronRight className="ml-2" />
                </Button>
              </Link>
              <Link href="/create-event">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="px-8 py-3 text-lg border-2 hover:bg-gray-50"
                >
                  Create Event
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Image showcase */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1551782450-17144efb9c50?auto=format&fit=crop&w=400&h=300&q=80"
                    alt="Students at campus event"
                    className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&h=300&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-2 left-2 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Free Food Night
                  </div>
                </div>
                <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&h=200&q=80"
                    alt="Soccer tournament"
                    className="w-full h-24 object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=400&h=200&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-2 left-2 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Sports Tournament
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=400&h=200&q=80"
                    alt="Music festival"
                    className="w-full h-24 object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=400&h=200&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-2 left-2 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Music Festival
                  </div>
                </div>
                <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=400&h=300&q=80"
                    alt="Cultural event"
                    className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=400&h=300&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-2 left-2 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Cultural Event
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
