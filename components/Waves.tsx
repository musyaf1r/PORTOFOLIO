const PATH = "M0 100 Q360 20 720 100 T1440 100 T2160 100 T2880 100 V200 H0Z";

export default function Waves() {
  return (
    <div className="waves" aria-hidden="true">
      {[1, 2, 3].map((n) => (
        <svg key={n} className={`wave wave-${n}`} viewBox="0 0 2880 200" preserveAspectRatio="none">
          <path d={PATH} />
        </svg>
      ))}
    </div>
  );
}
