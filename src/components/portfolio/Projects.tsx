import { motion } from "framer-motion";
import { ExternalLink, Smartphone } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const projects = [
  {
    title: "Bigg Boss: The Game",
    studio: "Fusebox Games",
    desc: "Official mobile game for the Bigg Boss reality TV franchise. Interactive story-driven gameplay with rich UI flows, IAP and live ops.",
    tech: ["Unity", "C#", "IAP", "Analytics"],
    downloads: "1M+ downloads",
    icon: "https://play-lh.googleusercontent.com/KS2juLZ897h66RUKgXRI1aO8fIxbD21BJ64I-98kFj8ikyqmJ3ZbNe2STBLgd0HNNc72aZEhk5_EOT7unDAU=w240-h480-rw",
    url: "https://play.google.com/store/apps/details?id=com.fuseboxgames.biggboss&hl=en_IN",
  },
  {
    title: "JigSolitaire: Picture Puzzle",
    studio: "YesGnome LLC",
    desc: "Casual picture puzzle game combining jigsaw and solitaire mechanics. Smooth gameplay loops, level progression and monetization.",
    tech: ["Unity", "C#", "Firebase"],
    downloads: "5K+ downloads",
    icon: "https://play-lh.googleusercontent.com/jD7Vpug_d_DkZ5fbp0rV5d-0sGhZoac6Iwr-nqLg8FxPatTBHQTzQcLo8DGmb-KWZOSX5QWNHbwVjVkxnd7HCA=w240-h480-rw",
    url: "https://play.google.com/store/apps/details?id=com.yesgnome.jigsolitaire&hl=en",
  },
  {
    title: "YesGnome Game Suite",
    studio: "YesGnome LLC",
    desc: "Contributed to multiple casual mobile titles including Word Reels, Match Triple 3D, Dragon Master and more — all live on the Play Store.",
    tech: ["Unity", "C#", "Multiplayer"],
    downloads: "Multiple titles",
    icon: "https://play-lh.googleusercontent.com/GWDdw9n9VVY8g7hdTddQla_TWXnB9o5MIbtjgGCfMfFcU4bgDjtpUiAO2BYVo8-KFlk=s64-rw",
    url: "https://play.google.com/store/apps/developer?id=YesGnome+LLC",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader tag="Projects" title="Shipped Games" subtitle="Live mobile titles I have worked on." />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass-strong rounded-2xl p-6 hover-lift flex flex-col"
            >
              <div className="flex items-start gap-4">
                <img
                  src={p.icon}
                  alt={`${p.title} icon`}
                  loading="lazy"
                  className="size-16 rounded-xl object-cover border border-white/10 shadow-lg"
                />
                <div className="min-w-0">
                  <div className="font-mono text-[10px] text-muted-foreground tracking-[0.2em] uppercase">{p.studio}</div>
                  <h3 className="font-semibold text-lg leading-tight mt-1">{p.title}</h3>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mt-4 flex-1">{p.desc}</p>

              <div className="mt-4 flex flex-wrap gap-1.5 font-mono text-[11px]">
                {p.tech.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20">{t}</span>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Smartphone className="size-3.5" /> {p.downloads}
                </span>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:opacity-90 transition"
                >
                  <ExternalLink className="size-3.5" /> Play Store
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
