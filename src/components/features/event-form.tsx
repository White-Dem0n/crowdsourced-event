"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import React, { useMemo, useState } from "react";
import { RxChevronRight } from "react-icons/rx";
import { EventsService } from "@/lib/events";
import { Event, EventCategory } from "@/types";

export function EventForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState<EventCategory>("free-food");
  const [imageUrl, setImageUrl] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [saving, setSaving] = useState(false);
  const [lastSavedId, setLastSavedId] = useState<string | null>(null);

  const canSubmit = useMemo(() => title.trim().length > 0 && description.trim().length > 0, [title, description]);

  const basePayload = (): Omit<Event, "id" | "createdAt" | "updatedAt"> => ({
    title: title.trim(),
    description: description.trim(),
    category,
    imageUrl: imageUrl.trim() || undefined,
    location: location.trim() || undefined,
    date: date ? new Date(date).toISOString() : undefined,
    organizer: "You",
    isVerified: false,
    readTime: 3,
    status: "draft",
  });

  const handleSaveDraft = async () => {
    if (!canSubmit) return;
    setSaving(true);
    try {
      const created = EventsService.create(basePayload());
      setLastSavedId(created.id);
    } finally {
      setSaving(false);
    }
  };

  const handlePublish = async () => {
    if (!canSubmit) return;
    setSaving(true);
    try {
      const created = EventsService.create({ ...basePayload(), status: "published" });
      setLastSavedId(created.id);
    } finally {
      setSaving(false);
    }
  };

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
            <div className="mt-6 grid grid-cols-1 gap-4 md:mt-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Event title" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe your event"
                  className="w-full min-h-28 rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <div className="flex flex-wrap gap-2">
                    {["free-food","music","cultural","study","sports"].map((c) => (
                      <Badge
                        key={c}
                        className={`${
                          c === "free-food" ? 'bg-orange-100 text-orange-800' :
                          c === "music" ? 'bg-purple-100 text-purple-800' :
                          c === "cultural" ? 'bg-blue-100 text-blue-800' :
                          c === "study" ? 'bg-green-100 text-green-800' :
                          'bg-red-100 text-red-800'
                        } cursor-pointer ${category === c ? 'ring-2 ring-blue-500 ring-offset-2' : ''}`}
                        onClick={() => setCategory(c as EventCategory)}
                      >
                        {c.replace('-', ' ')}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
                  <Input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="https://..." />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <Input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Building / Room" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date & Time</label>
                  <Input type="datetime-local" value={date} onChange={(e) => setDate(e.target.value)} />
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Button title="Save Draft" variant="secondary" disabled={!canSubmit || saving} onClick={handleSaveDraft}>
                  {saving ? 'Saving…' : 'Save Draft'}
                </Button>
                <Button title="Publish" className="bg-blue-600 hover:bg-blue-700 text-white" disabled={!canSubmit || saving} onClick={handlePublish}>
                  {saving ? 'Publishing…' : 'Publish'}
                </Button>
                {lastSavedId && (
                  <a href={`/events/${lastSavedId}`} className="text-blue-600 hover:text-blue-700 text-sm">View created event →</a>
                )}
              </div>
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
