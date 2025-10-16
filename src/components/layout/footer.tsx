"use client";

import Link from "next/link";
import React from "react";

export function Footer() {
  return (
    <footer className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 gap-x-12 gap-y-12 md:mb-20 md:grid-cols-2 md:gap-x-20 md:gap-y-16 lg:grid-cols-4">
          <div className="max-w-lg">
            <img
              src="/VICINITY.png"
              alt="VICINITY Logo"
              className="mb-6 h-12 w-auto"
            />
            <p className="text-medium">
              Connecting campus communities through crowdsourced events and
              activities.
            </p>
          </div>
          <div>
            <h3 className="heading-h6 mb-6 font-bold">Events</h3>
            <div className="flex flex-col gap-y-4">
              <Link href="/events" className="text-regular hover:text-primary transition-colors">
                Browse Events
              </Link>
              <Link href="/create-event" className="text-regular hover:text-primary transition-colors">
                Create Event
              </Link>
              <Link href="/events" className="text-regular hover:text-primary transition-colors">
                Event Categories
              </Link>
            </div>
          </div>
          <div>
            <h3 className="heading-h6 mb-6 font-bold">Community</h3>
            <div className="flex flex-col gap-y-4">
              <Link href="/events" className="text-regular hover:text-primary transition-colors">
                Groups
              </Link>
              <Link href="/" className="text-regular hover:text-primary transition-colors">
                Campus Life
              </Link>
              <Link href="/" className="text-regular hover:text-primary transition-colors">
                Student Resources
              </Link>
            </div>
          </div>
          <div>
            <h3 className="heading-h6 mb-6 font-bold">Support</h3>
            <div className="flex flex-col gap-y-4">
              <Link href="/help" className="text-regular hover:text-primary transition-colors">
                Help Center
              </Link>
              <Link href="/" className="text-regular hover:text-primary transition-colors">
                Contact Us
              </Link>
              <Link href="/" className="text-regular hover:text-primary transition-colors">
                FAQ
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-scheme-border pt-8">
          <p className="text-center text-regular">
            © 2024 Crowdsourced Events. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
