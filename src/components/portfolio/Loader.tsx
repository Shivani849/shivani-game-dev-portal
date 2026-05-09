import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let p = 0;
    const id = setInterval(() => {
      p += Math.random() * 18 + 6;
      if (p >= 100) { p = 100; clearInterval(id); setTimeout(() => setDone(true), 350); }
      setProgress(Math.min(100, Math.floor(p)));
    }, 120);
    return () => clearInterval(id);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[200] grid place-items-center bg-background"
        >
          <div className="text-center w-72">
            <div className="font-mono text-xs text-primary tracking-[0.3em] mb-4">INITIALISING ENGINE</div>
            <div className="text-5xl font-bold text-gradient mb-6">SM</div>
            <div className="h-1 rounded-full bg-white/5 overflow-hidden">
              <motion.div
                animate={{ width: `${progress}%` }}
                className="h-full bg-gradient-to-r from-primary to-accent"
              />
            </div>
            <div className="font-mono text-xs text-muted-foreground mt-3">{progress}% LOADED</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
