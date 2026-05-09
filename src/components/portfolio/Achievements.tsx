import { motion } from "framer-motion";
import { Award, Globe, Layers3, Radio, Trophy, Wand2 } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const items = [
  { icon: Trophy, title: "Published Mobile Games", desc: "Multiple Unity titles live on Play Store & App Store." },
  { icon: Award, title: "Commercial Game Products", desc: "Shipped IP-backed games for major brands & studios." },
  { icon: Globe, title: "Multi-Platform Deployment", desc: "Android, iOS and web builds from a single Unity codebase." },
  { icon: Radio, title: "Real-Time Integrations", desc: "Firebase, multiplayer & live ops in production at scale." },
  { icon: Layers3, title: "Interactive Gameplay Systems", desc: "Designed reusable mechanics, UI flows & state machines." },
  { icon: Wand2, title: "Cross-Tech Bridges", desc: "Embedded Unity into React Native shells for hybrid apps." },
];

export function Achievements() {
  return (
    <section id="achievements" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader tag="Achievements" title="Trophy Case" subtitle="Milestones unlocked along the way." />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass rounded-2xl p-6 hover-lift relative overflow-hidden"
            >
              <div className="size-12 rounded-xl bg-gradient-to-br from-primary to-accent grid place-items-center mb-4 neon-glow">
                <it.icon className="size-5 text-primary-foreground" />
              </div>
              <h4 className="font-semibold">{it.title}</h4>
              <p className="text-sm text-muted-foreground mt-1.5">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
