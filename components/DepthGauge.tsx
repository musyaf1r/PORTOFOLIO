"use client";

import { useEffect, useRef, useState } from "react";

const MAX_DEPTH = 11000; 

export default function DepthGauge() {
  const [depth, setDepth] = useState(0);
  const markerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const p = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
      setDepth(Math.round((p * MAX_DEPTH) / 10) * 10);
      markerRef.current?.style.setProperty("--p", String(p));
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <aside className="gauge" aria-hidden="true">
      <span className="gauge-value">{depth.toLocaleString("id-ID")} m</span>
      <div className="gauge-track">
        <div className="gauge-marker" ref={markerRef} />
      </div>
    </aside>
  );
}
