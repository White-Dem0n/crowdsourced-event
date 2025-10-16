import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/features/hero-section";
import { ContactSection } from "@/components/features/contact-section";
import { FAQSection } from "@/components/features/faq-section";
import { Footer } from "@/components/layout/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ContactSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
