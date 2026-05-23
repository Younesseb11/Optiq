import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Services from "@/components/Services";
import Process from "@/components/Process";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground relative selection:bg-accent selection:text-background">
      {/* Background cinematic grid overlays */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c0c0c_1px,transparent_1px),linear-gradient(to_bottom,#0c0c0c_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none -z-10" />

      {/* Navigation */}
      <Navbar />

      {/* Main Sections */}
      <Hero />
      <Work />
      <Services />
      <Process />
      <About />
      <Testimonials />
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
