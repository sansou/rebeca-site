import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import Location from "@/components/sections/Location";
import CTA from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <main className="bg-light text-dark">
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Location />
      <CTA />
    </main>
  );
}