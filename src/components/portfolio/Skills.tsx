import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const skills = [
  { name: "Unity", level: 95, cat: "Engine" },
  { name: "C#", level: 92, cat: "Language" },
  { name: "Game Development", level: 94, cat: "Core" },
  { name: "2D Games", level: 90, cat: "Core" },
  { name: "3D Games", level: 88, cat: "Core" },
  { name: "React Native", level: 80, cat: "Mobile" },
  { name: "Firebase", level: 88, cat: "Backend" },
  { name: "REST APIs", level: 85, cat: "Backend" },
  { name: "Python", level: 80, cat: "Language" },
  { name: "Machine Learning", level: 72, cat: "AI" },
  { name: "AI Tools", level: 78, cat: "AI" },
  { name: "Git", level: 90, cat: "Tools" },
  { name: "Mobile Optimization", level: 88, cat: "Performance" },
  { name: "Multiplayer Systems", level: 82, cat: "Realtime" },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader tag="Skills" title="Technical Skills" subtitle="Core competencies across engines, languages and platforms." />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 8) * 0.04 }}
              className="group relative glass rounded-2xl p-5 overflow-hidden hover-lift"
            >
              <div className="absolute -top-px right-0 font-mono text-[10px] text-primary/70 px-2 py-1 glass rounded-bl-lg">
                {s.cat}
              </div>
              <div className="font-semibold mt-2">{s.name}</div>
              <div className="mt-3 h-1.5 rounded-full bg-white/5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-primary to-accent"
                />
              </div>
              <div className="mt-2 font-mono text-xs text-muted-foreground">{s.level}%</div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-br from-primary/10 to-accent/10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
