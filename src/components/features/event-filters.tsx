"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function EventFilters() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Filters</p>
            <h1 className="heading-h2 mb-5 font-bold md:mb-6">
              What's happening now
            </h1>
            <p className="text-medium">
              Quick browse through campus events. Find what matters to you.
            </p>
            <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
              <Button title="Filter" variant="secondary">
                Filter
              </Button>
              <Button
                title="Sort"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Sort
              </Button>
            </div>
          </div>
        </div>
        <Tabs defaultValue="free-food" className="flex flex-col items-center">
          <TabsList className="relative mb-12 no-scrollbar flex w-screen flex-nowrap items-center gap-x-6 overflow-auto px-[5vw] md:mb-16 md:w-auto md:max-w-full md:px-0">
            <TabsTrigger
              value="free-food"
              className="rounded-none border-0 border-b bg-transparent px-0 py-2 data-[state=active]:bg-transparent data-[state=inactive]:border-transparent"
            >
              Free food
            </TabsTrigger>
            <TabsTrigger
              value="sports"
              className="rounded-none border-0 border-b bg-transparent px-0 py-2 data-[state=active]:bg-transparent data-[state=inactive]:border-transparent"
            >
              Sports
            </TabsTrigger>
            <TabsTrigger
              value="cultural"
              className="rounded-none border-0 border-b bg-transparent px-0 py-2 data-[state=active]:bg-transparent data-[state=inactive]:border-transparent"
            >
              Cultural
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="free-food"
            className="data-[state=active]:animate-tabs"
          >
            <Card className="grid grid-cols-1 md:grid-cols-2 md:items-center">
              <div className="aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1551782450-17144efb9c50?auto=format&fit=crop&w=600&h=600&q=80"
                  className="w-full object-cover"
                  alt="Free food events"
                />
              </div>
              <div className="p-6 md:p-8 lg:p-12">
                <p className="mb-3 font-semibold md:mb-4">Categories</p>
                <h2 className="heading-h3 mb-5 font-bold md:mb-6">
                  Discover events that match your interests
                </h2>
                <p>
                  Browse through curated event categories tailored for students.
                </p>
                <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                  <Button title="Explore" variant="secondary">
                    Explore
                  </Button>
                  <Button
                    title="Learn more"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Learn more
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>
          <TabsContent
            value="sports"
            className="data-[state=active]:animate-tabs"
          >
            <Card className="grid grid-cols-1 md:grid-cols-2 md:items-center">
              <div className="aspect-square">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  className="w-full object-cover"
                  alt="Sports events"
                />
              </div>
              <div className="p-6 md:p-8 lg:p-12">
                <p className="mb-3 font-semibold md:mb-4">Categories</p>
                <h2 className="heading-h3 mb-5 font-bold md:mb-6">
                  Discover events that match your interests
                </h2>
                <p>
                  Browse through curated event categories tailored for students.
                </p>
                <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                  <Button title="Explore" variant="secondary">
                    Explore
                  </Button>
                  <Button
                    title="Learn more"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Learn more
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>
          <TabsContent
            value="cultural"
            className="data-[state=active]:animate-tabs"
          >
            <Card className="grid grid-cols-1 md:grid-cols-2 md:items-center">
              <div className="aspect-square">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  className="w-full object-cover"
                  alt="Cultural events"
                />
              </div>
              <div className="p-6 md:p-8 lg:p-12">
                <p className="mb-3 font-semibold md:mb-4">Categories</p>
                <h2 className="heading-h3 mb-5 font-bold md:mb-6">
                  Discover events that match your interests
                </h2>
                <p>
                  Browse through curated event categories tailored for students.
                </p>
                <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                  <Button title="Explore" variant="secondary">
                    Explore
                  </Button>
                  <Button
                    title="Learn more"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Learn more
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
