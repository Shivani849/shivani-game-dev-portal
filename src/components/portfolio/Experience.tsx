import { motion } from "framer-motion";
import { Briefcase, MapPin, CalendarDays } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const timeline = [
  {
    role: "Unity Game Developer",
    company: "PurpleTalk",
    location: "Hyderabad, India",
    date: "2022 — Present",
    points: [
      "Developed cross-platform 2D & 3D mobile games using Unity & C#.",
      "Built and shipped multiple commercial titles — Bigg Boss, Fusebox & YesGnome projects.",
      "Implemented real-time multiplayer systems and Firebase-backed live features.",
      "Integrated REST APIs, monetization SDKs and analytics across game builds.",
      "Designed reusable UI systems and optimised performance for low-end devices.",
      "Bridged Unity with React Native frameworks for hybrid app experiences.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeader tag="Experience" title="Career Timeline" subtitle="Where I've levelled up." />

        <div className="relative">
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

          {timeline.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative pl-14 sm:pl-20 pb-10"
            >
              <div className="absolute left-0 sm:left-1 top-2 size-8 sm:size-10 rounded-xl bg-gradient-to-br from-primary to-accent grid place-items-center neon-glow">
                <Briefcase className="size-4 text-primary-foreground" />
              </div>

              <div className="glass-strong rounded-2xl p-6">
                <div className="flex flex-wrap items-center gap-3 justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{t.role}</h3>
                    <div className="text-primary font-medium">{t.company}</div>
                  </div>
                  <div className="flex flex-col sm:items-end gap-1 text-xs font-mono text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5"><CalendarDays className="size-3" /> {t.date}</span>
                    <span className="inline-flex items-center gap-1.5"><MapPin className="size-3" /> {t.location}</span>
                  </div>
                </div>
                <ul className="mt-5 space-y-2">
                  {t.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-2 size-1.5 rounded-full bg-primary shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
