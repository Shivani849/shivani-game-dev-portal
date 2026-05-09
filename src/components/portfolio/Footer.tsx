import { Gamepad2, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10 mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Gamepad2 className="size-5 text-primary" />
          <span className="font-semibold">Shivani<span className="text-primary">.dev</span></span>
        </div>
        <div className="text-xs font-mono text-muted-foreground">
          © {new Date().getFullYear()} Shivani Mandoddi. Crafted with Unity-grade attention to detail.
        </div>
        <div className="flex gap-3">
          {[LinkedinIcon, GithubIcon, Mail].map((Icon, i) => (
            <a key={i} href="#" className="size-9 grid place-items-center rounded-lg glass hover:neon-glow transition">
              <Icon className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
