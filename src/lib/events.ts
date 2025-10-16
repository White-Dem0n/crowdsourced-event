"use client";

import { Event } from "@/types";

const STORAGE_KEY = "vicinity.events";

function loadAll(): Event[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as Event[];
  } catch {
    return [];
  }
}

function saveAll(events: Event[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
}

export const EventsService = {
  list(): Event[] {
    return loadAll();
  },

  listPublished(): Event[] {
    return loadAll().filter((e) => e.status === "published");
  },

  getById(id: string): Event | undefined {
    return loadAll().find((e) => e.id === id);
  },

  create(input: Omit<Event, "id" | "createdAt" | "updatedAt">): Event {
    const now = new Date().toISOString();
    const newEvent: Event = {
      ...input,
      id: crypto.randomUUID(),
      createdAt: now,
      updatedAt: now,
    };
    const events = loadAll();
    events.unshift(newEvent);
    saveAll(events);
    return newEvent;
  },

  update(id: string, updates: Partial<Event>): Event | undefined {
    const events = loadAll();
    const idx = events.findIndex((e) => e.id === id);
    if (idx === -1) return undefined;
    const updated: Event = { ...events[idx], ...updates, updatedAt: new Date().toISOString() };
    events[idx] = updated;
    saveAll(events);
    return updated;
  },

  publish(id: string): Event | undefined {
    return this.update(id, { status: "published" });
  },

  remove(id: string) {
    const events = loadAll().filter((e) => e.id !== id);
    saveAll(events);
  },
};


