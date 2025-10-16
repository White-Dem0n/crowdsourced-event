import { Navbar } from "@/components/layout/navbar";
import { EventCreationHeader } from "@/components/features/event-creation-header";
import { EventForm } from "@/components/features/event-form";
import { EventPhotoUpload } from "@/components/features/event-photo-upload";
import { Footer } from "@/components/layout/footer";

export default function CreateEventPage() {
  return (
    <div>
      <Navbar />
      <EventCreationHeader />
      <EventForm />
      <EventPhotoUpload />
      <Footer />
    </div>
  );
}
