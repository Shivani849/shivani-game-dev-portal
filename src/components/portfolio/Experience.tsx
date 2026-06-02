import { motion } from "framer-motion";
import { Briefcase, MapPin, CalendarDays } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const timeline = [
  {
    role: "Game Engineer",
    company: "PurpleTalk",
    location: "Hyderabad, Telangana, India · On-site",
    date: "Oct 2025 — Present",
    points: [
      "Building and shipping game features primarily in C#.",
      "Developing performant 2D & 3D gameplay systems for mobile titles.",
      "Optimising game performance and memory usage across devices.",
    ],
  },
  {
    role: "Associate Analyst — Game Engineer",
    company: "PurpleTalk · Full-time",
    location: "Hyderabad, Telangana, India · On-site",
    date: "Nov 2023 — Present",
    points: [
      "Developed cross-platform mobile games using Unity, C# & React Native.",
      "Implemented gameplay, UI systems and backend integrations.",
      "Bridged Unity with React Native frameworks for hybrid app experiences.",
    ],
  },
  {
    role: "Software Trainee",
    company: "PurpleTalk · Full-time",
    location: "Hyderabad, Telangana, India · On-site",
    date: "Aug 2022 — Nov 2023",
    points: [
      "Trained in game development fundamentals with Unity & C#.",
      "Contributed to live game projects and feature implementation.",
      "Built foundational skills in gameplay programming and UI.",
    ],
  },
];


export function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeader tag="Experience" title="Career Timeline" subtitle="Professional journey and key contributions." />

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
              <div className="absolute left-0 sm:left-1 top-2 size-8 sm:size-10 rounded-xl bg-gradient-to-br from-primary to-accent grid place-items-center soft-glow">
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
