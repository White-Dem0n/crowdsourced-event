"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Event } from "@/types";
import { RxCheck, RxCross2, RxCalendar, RxPerson } from "react-icons/rx";
import { useState } from "react";

interface BookingModalProps {
  event: Event | null;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export function BookingModal({ event, isOpen, onClose, onConfirm }: BookingModalProps) {
  const [isBooking, setIsBooking] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  if (!isOpen || !event) return null;

  const handleConfirm = async () => {
    setIsBooking(true);
    
    // Simulate booking process
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsBooking(false);
    setIsBooked(true);
    
    // Auto close after showing success
    setTimeout(() => {
      setIsBooked(false);
      onConfirm();
      onClose();
    }, 2000);
  };

  const handleClose = () => {
    if (!isBooking && !isBooked) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="border-0 shadow-2xl bg-white">
          {!isBooked ? (
            <>
              {/* Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-gray-900">Book Event</h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleClose}
                    disabled={isBooking}
                    className="h-8 w-8 p-0 hover:bg-gray-100"
                  >
                    <RxCross2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Event Details */}
              <div className="p-6">
                <div className="mb-4">
                  <img
                    src={event.imageUrl || "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"}
                    alt={event.title}
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className={`capitalize ${
                      event.category === 'free-food' ? 'bg-orange-100 text-orange-800' :
                      event.category === 'music' ? 'bg-purple-100 text-purple-800' :
                      event.category === 'cultural' ? 'bg-blue-100 text-blue-800' :
                      event.category === 'study' ? 'bg-green-100 text-green-800' :
                      event.category === 'sports' ? 'bg-red-100 text-red-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {event.category.replace('-', ' ')}
                    </Badge>
                    {event.isVerified && (
                      <Badge className="bg-green-100 text-green-800">
                        ✓ Verified
                      </Badge>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {event.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-4">
                    {event.description}
                  </p>
                </div>

                {/* Event Info */}
                <div className="space-y-3 mb-6">
                  {event.date && (
                    <div className="flex items-center gap-3 text-sm">
                      <RxCalendar className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-600">
                        {new Date(event.date).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                  )}
                  
                  {event.location && (
                    <div className="flex items-center gap-3 text-sm">
                      <span className="text-gray-500">📍</span>
                      <span className="text-gray-600">{event.location}</span>
                    </div>
                  )}
                  
                  {event.organizer && (
                    <div className="flex items-center gap-3 text-sm">
                      <RxPerson className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-600">Organized by {event.organizer}</span>
                    </div>
                  )}
                </div>

                {/* Confirmation Message */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <p className="text-sm text-blue-800">
                    <strong>Confirm your booking:</strong> You're about to join this event. 
                    You'll receive a confirmation email and can manage your bookings in your profile.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    onClick={handleClose}
                    disabled={isBooking}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleConfirm}
                    disabled={isBooking}
                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                  >
                    {isBooking ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Booking...
                      </div>
                    ) : (
                      "Confirm Booking"
                    )}
                  </Button>
                </div>
              </div>
            </>
          ) : (
            /* Success State */
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <RxCheck className="h-8 w-8 text-green-600" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Booking Confirmed!
              </h3>
              
              <p className="text-gray-600 mb-6">
                You've successfully joined <strong>{event.title}</strong>. 
                Check your email for confirmation details.
              </p>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-sm text-green-800">
                  <strong>What's next?</strong><br />
                  • You'll receive an email confirmation<br />
                  • Check your profile for event updates<br />
                  • Join the event community chat
                </p>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
