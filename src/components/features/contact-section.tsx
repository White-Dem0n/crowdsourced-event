"use client";

import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";

export function ContactSection() {
  const handleContactClick = (e: React.MouseEvent) => {
    // Prevent event bubbling to avoid triggering mobile menu
    e.stopPropagation();
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 relative z-10" onClick={handleContactClick}>
      <div className="container">
        <div>
          <div className="mb-12 grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:mb-20 md:grid-cols-[1fr_.75fr] md:gap-x-20 md:gap-y-16">
            <div className="max-w-lg">
              <p className="mb-3 font-semibold md:mb-4">Connect</p>
              <h2 className="heading-h2 mb-5 font-bold md:mb-6">Contact us</h2>
              <p className="text-medium">
                We're here to help you navigate your campus experience and
                answer any questions.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="grid auto-cols-fr grid-cols-1 gap-x-4 gap-y-6 py-2">
                <div className="flex flex-row">
                  <div className="mr-4 md:mb-4">
                    <BiEnvelope className="size-6" />
                  </div>
                  <div>
                    <h3 className="heading-h6 mb-2 font-bold">Email</h3>
                    <a className="underline" href="mailto:support@VICINITY.io">
                      support@VICINITY.io
                    </a>
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="mr-4 md:mb-4">
                    <BiPhone className="size-6" />
                  </div>
                  <div>
                    <h3 className="heading-h6 mb-2 font-bold">Phone</h3>
                    <a className="underline" href="tel:+61280000000">
                      +61 (02) 8000 0000
                    </a>
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="mr-4 md:mb-4">
                    <BiMap className="size-6" />
                  </div>
                  <div>
                    <h3 className="heading-h6 mb-2 font-bold">Office</h3>
                    <p>Level 3, QUT s block.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&h=400&q=80"
            className="w-full rounded-image object-cover"
            alt="Campus contact image"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&h=400&q=80";
            }}
          />
        </div>
      </div>
    </section>
  );
}
