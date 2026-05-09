import { motion } from "framer-motion";
import { Code2, Cpu, Gamepad2, Layers, Rocket, Zap } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const features = [
  { icon: Gamepad2, title: "Unity Specialist", desc: "Production-grade 2D & 3D game development with 3+ years experience." },
  { icon: Layers, title: "Cross-Platform", desc: "Mobile, console & PC deployment via Unity + React Native bridges." },
  { icon: Zap, title: "Real-Time Systems", desc: "Multiplayer, live ops, Firebase integrations & networking." },
  { icon: Cpu, title: "AI & ML", desc: "Python, machine learning and AI tooling integrated into game pipelines." },
  { icon: Code2, title: "Architecture", desc: "Scalable game architecture, UI systems and clean code patterns." },
  { icon: Rocket, title: "Optimization", desc: "Performance profiling, memory & rendering optimisation for mobile." },
];

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader tag="About" title="Player Bio" subtitle="The story behind the code, the games, and the late-night build sessions." />

        <div className="grid lg:grid-cols-12 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 glass-strong rounded-3xl p-8"
          >
            <div className="font-mono text-xs text-primary mb-3">// CURRENTLY @ PURPLETALK · HYDERABAD</div>
            <h3 className="text-2xl font-semibold leading-snug">
              Game Developer building immersive, performant experiences across mobile and beyond.
            </h3>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              I'm a Unity Game Developer with 3+ years of hands-on experience shipping commercial 2D and 3D games.
              At PurpleTalk Hyderabad, I work across the full game pipeline — from gameplay programming and
              UI/UX implementation to backend integration with Firebase, REST APIs, monetization SDKs and
              real-time multiplayer features.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Beyond Unity, I bridge games with React Native frameworks for hybrid app experiences and
              experiment with Python, Machine Learning and AI tools to push gameplay further.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 font-mono text-xs">
              {["Unity", "C#", "React Native", "Firebase", "Python", "ML/AI"].map((t) => (
                <span key={t} className="px-3 py-1 rounded-full glass text-foreground/80">{t}</span>
              ))}
            </div>
          </motion.div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="glass rounded-2xl p-6 hover-lift group"
              >
                <div className="size-10 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 grid place-items-center mb-4 group-hover:neon-glow transition">
                  <f.icon className="size-5 text-primary" />
                </div>
                <h4 className="font-semibold">{f.title}</h4>
                <p className="text-sm text-muted-foreground mt-1.5">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
