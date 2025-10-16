"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import React from "react";

export function FAQSection() {
  const handleFAQClick = (e: React.MouseEvent) => {
    // Prevent event bubbling to avoid triggering mobile menu
    e.stopPropagation();
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 relative z-10" onClick={handleFAQClick}>
      <div className="container max-w-lg">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="heading-h2 mb-5 font-bold md:mb-6">FAQs</h2>
          <p className="text-medium">
            Get answers to common questions about our event feed and posting
            process
          </p>
        </div>
        <Accordion type="multiple" className="relative z-20">
          <AccordionItem value="item-0">
            <AccordionTrigger className="text-medium md:py-5">
              How do I post an event on VICINITY?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              <div className="space-y-3">
                <p>Posting an event on VICINITY is simple and takes just a few minutes:</p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>Click the "Create Event" button in the navigation or on the home page</li>
                  <li>Fill in your event details including title, description, date, time, and location</li>
                  <li>Upload an eye-catching image to attract more attendees</li>
                  <li>Select the appropriate category (Free Food, Sports, Cultural, etc.)</li>
                  <li>Review your event details and submit for approval</li>
                </ol>
                <p className="text-sm text-gray-600">Your event will be reviewed by our moderators and published within 24 hours.</p>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-medium md:py-5">
              How does event verification work?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              <div className="space-y-3">
                <p>All events on VICINITY go through a verification process to ensure quality and safety:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Automated Check:</strong> Basic information validation and spam detection</li>
                  <li><strong>Moderator Review:</strong> Our team reviews each event for accuracy and appropriateness</li>
                  <li><strong>Community Reports:</strong> Users can report suspicious or inappropriate events</li>
                  <li><strong>Verified Badge:</strong> Events from trusted organizations get a verified badge</li>
                </ul>
                <p className="text-sm text-gray-600">This process typically takes 2-24 hours depending on the time of submission.</p>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-medium md:py-5">
              Who can create and post events?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              <div className="space-y-3">
                <p>VICINITY is designed for the campus community. You can post events if you are:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Current Students:</strong> With a valid university email address</li>
                  <li><strong>Student Organizations:</strong> Registered clubs, societies, and groups</li>
                  <li><strong>University Departments:</strong> Official campus departments and offices</li>
                  <li><strong>Event Organizers:</strong> With proper campus affiliation</li>
                </ul>
                <p className="text-sm text-gray-600">We may require additional verification for certain types of events or organizations.</p>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-medium md:py-5">
              Is VICINITY completely free to use?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              <div className="space-y-3">
                <p>Yes! VICINITY is completely free for all campus community members:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Free Event Posting:</strong> Create unlimited events at no cost</li>
                  <li><strong>Free Event Discovery:</strong> Browse and attend events without any fees</li>
                  <li><strong>Free Features:</strong> All current features are available to everyone</li>
                  <li><strong>No Hidden Costs:</strong> No premium tiers or paid features</li>
                </ul>
                <p className="text-sm text-gray-600">We're committed to keeping campus event discovery free and accessible for all students.</p>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-medium md:py-5">
              How can I find events that interest me?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              <div className="space-y-3">
                <p>VICINITY offers several ways to discover events that match your interests:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Category Filters:</strong> Browse by Free Food, Sports, Cultural, Academic, and more</li>
                  <li><strong>Date & Time:</strong> Filter events by today, this week, or upcoming dates</li>
                  <li><strong>Location:</strong> Find events happening in specific campus areas</li>
                  <li><strong>Search:</strong> Use keywords to find specific types of events</li>
                  <li><strong>Popular Events:</strong> See what's trending on campus</li>
                </ul>
                <p className="text-sm text-gray-600">You can also follow specific organizations to get notified about their events.</p>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-medium md:py-5">
              What types of events can I post on VICINITY?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              <div className="space-y-3">
                <p>VICINITY welcomes a wide variety of campus events including:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Social Events:</strong> Parties, mixers, game nights, and social gatherings</li>
                  <li><strong>Academic Events:</strong> Study groups, workshops, lectures, and seminars</li>
                  <li><strong>Sports & Recreation:</strong> Tournaments, fitness classes, and recreational activities</li>
                  <li><strong>Cultural Events:</strong> Festivals, performances, art shows, and cultural celebrations</li>
                  <li><strong>Free Food Events:</strong> Campus dining events, food trucks, and community meals</li>
                  <li><strong>Career Events:</strong> Job fairs, networking events, and professional development</li>
                </ul>
                <p className="text-sm text-gray-600">All events must be appropriate for the campus community and follow university guidelines.</p>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-6">
            <AccordionTrigger className="text-medium md:py-5">
              How do I get help or report an issue?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              <div className="space-y-3">
                <p>We're here to help! You can reach out to us through several channels:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Email Support:</strong> Contact us at support@VICINITY.io for general inquiries</li>
                  <li><strong>Report Events:</strong> Use the "Report" button on any event page for inappropriate content</li>
                  <li><strong>Technical Issues:</strong> Email us with details about any bugs or technical problems</li>
                  <li><strong>Feature Requests:</strong> Share your ideas for improving VICINITY</li>
                </ul>
                <p className="text-sm text-gray-600">We typically respond to all inquiries within 24 hours during business days.</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="heading-h4 mb-3 font-bold md:mb-4">
            Still have questions?
          </h4>
          <p className="text-medium">
            Reach out to our support team for more information
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
