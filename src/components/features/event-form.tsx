"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function EventForm() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Event</p>
            <h1 className="heading-h2 mb-5 font-bold md:mb-6">
              Give your event a clear and compelling title
            </h1>
            <p className="text-medium">
              Capture the essence of your event in a few words. Make it
              interesting and informative.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Add" variant="secondary">
                Add
              </Button>
              <Button
                title="Edit"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Edit
              </Button>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&h=600&q=80"
              className="w-full rounded-image object-cover"
              alt="Event creation image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
