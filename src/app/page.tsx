import Navbar from "@/components/layout/Navbar";

export const dynamic = "force-dynamic";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import Hero from "@/components/home/Hero";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FounderSection from "@/components/home/FounderSection";
import AreasWeServe from "@/components/home/AreasWeServe";
import Testimonials from "@/components/home/Testimonials";
import ContactSection from "@/components/home/ContactSection";
import { getFeaturedProperties } from "@/lib/api/properties";

export default async function Home() {
  const featuredProperties = await getFeaturedProperties();

  return (
    <main className="relative min-h-screen bg-brand-blue overflow-hidden">
      <Navbar />

      {/* Sections */}
      <Hero properties={featuredProperties} />
      <FeaturedProperties properties={featuredProperties} />
      <WhyChooseUs />
      <FounderSection />
      <AreasWeServe />
      <Testimonials />
      <ContactSection />

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
