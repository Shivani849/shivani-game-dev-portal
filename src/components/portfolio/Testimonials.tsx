import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const testimonials = [
  { name: "Project Lead", role: "PurpleTalk", quote: "Shivani consistently ships polished gameplay features and owns the full Unity pipeline end-to-end." },
  { name: "Studio Producer", role: "Game Studio", quote: "A reliable Unity engineer with strong instincts for performance and UX on mobile." },
  { name: "Backend Engineer", role: "Live Ops Team", quote: "Easy to collaborate with — handles Firebase, APIs and real-time features without friction." },
];

export function Testimonials() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader tag="Testimonials" title="What Teams Say" />

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-strong rounded-2xl p-6 hover-lift"
            >
              <Quote className="size-7 text-primary mb-3" />
              <blockquote className="text-foreground/90 leading-relaxed">"{t.quote}"</blockquote>
              <figcaption className="mt-5 pt-4 border-t border-white/5">
                <div className="font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground font-mono">{t.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
