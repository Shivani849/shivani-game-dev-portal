import { Gamepad2, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

const socials = [
  { Icon: LinkedinIcon, href: "https://www.linkedin.com/in/shivani-m-32487619b/", label: "LinkedIn" },
  { Icon: GithubIcon, href: "https://play.google.com/store/apps/developer?id=YesGnome+LLC", label: "Play Store" },
  { Icon: Mail, href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10 mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Gamepad2 className="size-5 text-primary" />
          <span className="font-semibold">Shivani<span className="text-primary">.dev</span></span>
        </div>
        <div className="text-xs font-mono text-muted-foreground">
          © {new Date().getFullYear()} Shivani Mandoddi. Unity Game Developer.
        </div>
        <div className="flex gap-3">
          {socials.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={label}
              className="size-9 grid place-items-center rounded-lg glass hover:neon-glow transition"
            >
              <Icon className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
