import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { ExternalLink } from "./ExternalLink";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Animated grid */}
      <div className="absolute inset-0 grid-bg animate-grid opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      {/* Glow orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-float" />
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-accent/20 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-mono text-primary mb-6"
          >
            <span className="size-1.5 rounded-full bg-primary animate-pulse" />
            AVAILABLE FOR FREELANCE & FULL-TIME
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]"
          >
            Shivani <br />
            <span className="text-gradient">Mandoddi</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 text-2xl sm:text-3xl font-light text-foreground/90"
          >
            <span className="font-mono text-primary">&gt;</span> Unity Game Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-5 text-base sm:text-lg text-muted-foreground max-w-2xl"
          >
            Crafting immersive 2D & 3D experiences with 3+ years building commercial mobile games.
            Specialised in Unity, real-time systems, monetization & cross-platform deployment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold px-6 py-3 hover:opacity-90 transition neon-glow"
            >
              View Projects
              <ArrowRight className="size-4 group-hover:translate-x-1 transition" />
            </a>
            <a
              href="mailto:shivani.mandoddi@gmail.com"
              className="inline-flex items-center gap-2 rounded-xl glass hover:bg-white/10 font-semibold px-6 py-3 transition"
            >
              <Sparkles className="size-4 text-primary" /> Contact Me
            </a>
            <ExternalLink
              href="https://www.linkedin.com/in/shivani-m-32487619b/"
              className="inline-flex items-center gap-2 rounded-xl border border-border hover:border-primary/60 font-semibold px-6 py-3 transition"
            >
              <Download className="size-4" /> LinkedIn
            </ExternalLink>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-12 grid grid-cols-3 gap-4 max-w-lg"
          >
            {[
              { v: "3+", l: "Years Exp" },
              { v: "10+", l: "Games Shipped" },
              { v: "15+", l: "Technologies" },
            ].map((s) => (
              <div key={s.l} className="glass rounded-xl px-4 py-4">
                <div className="text-3xl font-bold text-gradient">{s.v}</div>
                <div className="text-xs text-muted-foreground mt-1 font-mono uppercase tracking-wider">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

