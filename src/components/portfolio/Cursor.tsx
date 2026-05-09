import { useEffect, useState } from "react";

export function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a, button, [data-cursor='hover']"));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div
        className="pointer-events-none fixed z-[100] hidden md:block rounded-full mix-blend-screen transition-[width,height,background] duration-200"
        style={{
          left: pos.x,
          top: pos.y,
          width: hover ? 48 : 18,
          height: hover ? 48 : 18,
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(80,220,255,0.6), rgba(220,90,255,0.2) 60%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none fixed z-[100] hidden md:block w-1.5 h-1.5 rounded-full bg-white"
        style={{ left: pos.x, top: pos.y, transform: "translate(-50%, -50%)" }}
      />
    </>
  );
}
