import { createFileRoute } from "@tanstack/react-router";
import { Loader } from "@/components/portfolio/Loader";
import { Cursor } from "@/components/portfolio/Cursor";
import { ParticleBackground } from "@/components/portfolio/ParticleBackground";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Achievements } from "@/components/portfolio/Achievements";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shivani Mandoddi — Unity Game Developer Portfolio" },
      { name: "description", content: "Unity Game Developer with 3+ years experience building 2D/3D mobile games, real-time systems and React Native × Unity hybrid apps. Based in Hyderabad." },
      { property: "og:title", content: "Shivani Mandoddi — Unity Game Developer" },
      { property: "og:description", content: "Premium portfolio of a Unity Game Developer specialising in 2D/3D mobile games, multiplayer, Firebase, React Native bridges and AI tooling." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen">
      <Loader />
      <Cursor />
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
