import { EventsService } from "@/lib/events";
import { Event } from "@/types";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { RxChevronLeft, RxChevronRight } from "react-icons/rx";

interface EventDetailPageProps {
  params: {
    id: string;
  };
}

export default function EventDetailPage({ params }: EventDetailPageProps) {
  // Try to load the event from local storage first, else show a lightweight fallback
  const stored = EventsService.getById(params.id);
  const event: Event = stored || {
    id: params.id,
    title: "Campus Event",
    description: "Details for this event are not available locally. This is a sample event.",
    category: "cultural",
    imageUrl: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
    date: new Date().toISOString(),
    location: "Student Center, Main Hall",
    organizer: "Campus Activities Board",
    isVerified: true,
    readTime: 4,
    status: "published",
  } as Event;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20">
        <div className="container px-[5%] py-16">
          <div className="mb-8">
            <Link 
              href="/events" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
            >
              <RxChevronLeft className="mr-1" />
              Back to Events
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="overflow-hidden border-0 shadow-lg">
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="p-6 md:p-8">
                  <div className="mb-4 flex items-center gap-4">
                    <Badge className={`capitalize ${
                      event.category === 'free-food' ? 'bg-orange-100 text-orange-800' :
                      event.category === 'sports' ? 'bg-green-100 text-green-800' :
                      event.category === 'cultural' ? 'bg-purple-100 text-purple-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {event.category.replace('-', ' ')}
                    </Badge>
                    {event.isVerified && (
                      <Badge className="bg-green-100 text-green-800">
                        ✓ Verified
                      </Badge>
                    )}
                  </div>
                  
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {event.title}
                  </h1>
                  
                  <p className="text-lg text-gray-600 mb-6">
                    {event.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Date & Time</h3>
                      <p className="text-gray-600">
                        {event.date ? new Date(event.date).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        }) : 'TBD'}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                      <p className="text-gray-600">{event.location}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Organizer</h3>
                      <p className="text-gray-600">{event.organizer}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Read Time</h3>
                      <p className="text-gray-600">{event.readTime} minutes</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
                      Join Event
                    </Button>
                    <Button variant="outline" className="px-6 py-3">
                      Share Event
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="p-6 border-0 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Related Events</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=80&fit=crop&crop=center"
                      alt="Soccer tournament"
                      className="w-20 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <Link href="/events/2" className="text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors">
                        Weekend Soccer Tournament
                      </Link>
                      <p className="text-xs text-gray-500 mt-1">Sports • Tomorrow</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100&h=80&fit=crop&crop=center"
                      alt="Music festival"
                      className="w-20 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <Link href="/events/3" className="text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors">
                        International Music Festival
                      </Link>
                      <p className="text-xs text-gray-500 mt-1">Cultural • Next Week</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-0 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Link href="/create-event">
                    <Button variant="outline" className="w-full justify-start">
                      Create Similar Event
                    </Button>
                  </Link>
                  <Button variant="outline" className="w-full justify-start">
                    Report Event
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Save for Later
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
