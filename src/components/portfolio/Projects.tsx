import { motion } from "framer-motion";
import { ExternalLink, Play, Smartphone } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const projects = [
  {
    title: "Bigg Boss — Official Game",
    studio: "PurpleTalk × Endemol",
    desc: "Live-event mobile game tied to the iconic reality TV franchise. Real-time voting, mini-games, social features and live ops.",
    tech: ["Unity", "C#", "Firebase", "REST APIs"],
    platforms: ["Android", "iOS"],
    accent: "from-fuchsia-500/30 to-cyan-500/20",
  },
  {
    title: "Fusebox Games — Casual Titles",
    studio: "Fusebox Games",
    desc: "Casual narrative-driven mobile games with rich UI flows, monetization, IAP and analytics integrations.",
    tech: ["Unity", "C#", "IAP", "Analytics"],
    platforms: ["Android", "iOS"],
    accent: "from-cyan-500/30 to-violet-500/20",
  },
  {
    title: "YesGnome LLC — Multiplayer Suite",
    studio: "YesGnome",
    desc: "Multi-platform multiplayer game features — networking, matchmaking, real-time gameplay loops and live leaderboards.",
    tech: ["Unity", "Multiplayer", "Firebase", "C#"],
    platforms: ["Android", "iOS", "Web"],
    accent: "from-emerald-500/30 to-cyan-500/20",
  },
  {
    title: "Hybrid RN × Unity App",
    studio: "Internal R&D",
    desc: "React Native shell embedding Unity gameplay modules — seamless navigation between native UI and 3D scenes.",
    tech: ["React Native", "Unity", "Bridge", "TypeScript"],
    platforms: ["Android", "iOS"],
    accent: "from-amber-500/30 to-pink-500/20",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader tag="Projects" title="Featured Builds" subtitle="A selection of shipped games and experiments." />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative glass-strong rounded-3xl overflow-hidden hover-lift"
            >
              {/* Cover */}
              <div className={`relative aspect-[16/9] bg-gradient-to-br ${p.accent} overflow-hidden`}>
                <div className="absolute inset-0 grid-bg opacity-40" />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="text-center">
                    <div className="font-mono text-[10px] text-white/60 tracking-[0.3em]">{p.studio.toUpperCase()}</div>
                    <div className="text-2xl font-bold mt-2 px-6">{p.title}</div>
                  </div>
                </div>
                <button
                  className="absolute inset-0 grid place-items-center bg-black/40 opacity-0 group-hover:opacity-100 transition"
                  aria-label="Play preview"
                >
                  <span className="size-16 rounded-full bg-primary/90 grid place-items-center neon-glow">
                    <Play className="size-6 text-primary-foreground fill-primary-foreground" />
                  </span>
                </button>
              </div>

              <div className="p-6">
                <p className="text-sm text-muted-foreground">{p.desc}</p>

                <div className="mt-4 flex flex-wrap gap-1.5 font-mono text-[11px]">
                  {p.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20">{t}</span>
                  ))}
                </div>

                <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex gap-1.5 font-mono text-[10px]">
                    {p.platforms.map((pl) => (
                      <span key={pl} className="px-2 py-0.5 rounded glass text-muted-foreground">{pl}</span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <a href="#" className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg glass hover:bg-white/10 transition">
                      <Smartphone className="size-3.5" /> Play Store
                    </a>
                    <a href="#" className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:opacity-90 transition">
                      <ExternalLink className="size-3.5" /> Visit
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
