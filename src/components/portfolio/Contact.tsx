import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { GithubIcon, LinkedinIcon } from "./icons";
import { ExternalLink } from "./ExternalLink";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader tag="Contact" title="Get In Touch" subtitle="Open to collaborations, full-time roles and freelance projects." />

        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 space-y-3">
            {[
              { icon: Mail, label: "Email", value: "shivani.mandoddi@gmail.com", href: "mailto:shivani.mandoddi@gmail.com" },
              { icon: LinkedinIcon, label: "LinkedIn", value: "/in/shivani-m-32487619b", href: "https://www.linkedin.com/in/shivani-m-32487619b/" },
              { icon: GithubIcon, label: "Play Store", value: "Fusebox & YesGnome titles", href: "https://play.google.com/store/apps/developer?id=YesGnome+LLC" },
            ].map((c) => (
              <ExternalLink
                key={c.label}
                href={c.href}
                className="flex items-center gap-4 glass rounded-2xl p-4 hover-lift group"
              >
                <div className="size-11 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 grid place-items-center group-hover:soft-glow transition">
                  <c.icon className="size-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">{c.label}</div>
                  <div className="font-medium">{c.value}</div>
                </div>
              </ExternalLink>
            ))}
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="lg:col-span-3 glass-strong rounded-3xl p-6 sm:p-8 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name" name="name" />
              <Field label="Email" name="email" type="email" />
            </div>
            <Field label="Subject" name="subject" />
            <div>
              <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Message</label>
              <textarea
                required rows={5}
                className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/30 transition resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold px-6 py-3 soft-glow"
            >
              <Send className="size-4" />
              {sent ? "Message Sent — Thank you!" : "Send Message"}
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">{label}</label>
      <input
        required
        name={name}
        type={type}
        className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/30 transition"
      />
    </div>
  );
}
