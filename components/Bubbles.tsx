import type { CSSProperties } from "react";
const BUBBLES = [
  { left: 6, size: 14, dur: 19, delay: 0, sway: 24 },
  { left: 13, size: 8, dur: 15, delay: -6, sway: -18 },
  { left: 21, size: 20, dur: 24, delay: -11, sway: 30 },
  { left: 29, size: 10, dur: 17, delay: -3, sway: -22 },
  { left: 37, size: 16, dur: 22, delay: -14, sway: 16 },
  { left: 46, size: 7, dur: 14, delay: -8, sway: -12 },
  { left: 54, size: 22, dur: 26, delay: -2, sway: 28 },
  { left: 62, size: 11, dur: 18, delay: -16, sway: -26 },
  { left: 70, size: 15, dur: 21, delay: -9, sway: 20 },
  { left: 78, size: 9, dur: 16, delay: -5, sway: -16 },
  { left: 85, size: 18, dur: 25, delay: -13, sway: 26 },
  { left: 92, size: 12, dur: 20, delay: -7, sway: -20 },
];

export default function Bubbles() {
  return (
    <div className="bubbles" aria-hidden="true">
      {BUBBLES.map((b, i) => (
        <span
          key={i}
          className="bubble"
          style={
            {
              left: `${b.left}%`,
              width: b.size,
              height: b.size,
              animationDuration: `${b.dur}s`,
              animationDelay: `${b.delay}s`,
              "--sway": `${b.sway}px`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
