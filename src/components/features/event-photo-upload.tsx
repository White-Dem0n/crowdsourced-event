"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function EventPhotoUpload() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <p className="mb-3 font-semibold md:mb-4">Photo</p>
        <p className="heading-h5 mb-5 font-bold md:mb-6">
          A picture speaks a thousand words. Capture the event's spirit with a
          compelling image.
        </p>
        <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
          <Button title="Upload" variant="secondary">
            Upload
          </Button>
          <Button
            title="Browse"
            variant="link"
            size="link"
            iconRight={<RxChevronRight />}
          >
            Browse
          </Button>
        </div>
      </div>
    </section>
  );
}
