import { motion } from "framer-motion";

export function SectionHeader({ tag, title, subtitle }: { tag: string; title: string; subtitle?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mb-12 text-center"
    >
      <div className="inline-flex items-center gap-2 font-mono text-xs text-primary tracking-[0.3em] uppercase">
        <span className="h-px w-8 bg-primary" /> {tag} <span className="h-px w-8 bg-primary" />
      </div>
      <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight">
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
    </motion.div>
  );
}
