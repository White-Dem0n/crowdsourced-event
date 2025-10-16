import { Navbar } from "@/components/layout/navbar";
import { EventFeed } from "@/components/features/event-feed";
import { EventFilters } from "@/components/features/event-filters";
import { FAQSection } from "@/components/features/faq-section";
import { Footer } from "@/components/layout/footer";

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20">
        <EventFeed />
        <EventFilters />
        <FAQSection />
      </div>
      <Footer />
    </div>
  );
}
