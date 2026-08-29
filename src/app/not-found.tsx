import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#1A1714] px-6 text-center relative overflow-hidden">
      {/* Ambient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="ambient-blob absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-amber-500/8 blur-[120px]" />
        <div className="ambient-blob absolute bottom-1/3 left-1/3 w-[300px] h-[300px] rounded-full bg-amber-700/5 blur-[100px]" style={{ animationDelay: "-20s" }} />
      </div>

      {/* Broken workflow graphic */}
      <div className="relative mb-8" aria-hidden="true">
        <svg viewBox="0 0 200 120" fill="none" className="w-48 h-28 opacity-30">
          <circle cx="40" cy="30" r="6" fill="#C2703E" fillOpacity="0.5" />
          <circle cx="100" cy="60" r="6" fill="#7A8B6F" fillOpacity="0.35" />
          <circle cx="160" cy="30" r="6" fill="#C2703E" fillOpacity="0.5" />
          <circle cx="100" cy="100" r="4" fill="#7A8B6F" fillOpacity="0.2" />
          {/* Connected lines */}
          <line x1="46" y1="30" x2="80" y2="55" stroke="#C2703E" strokeWidth="1.5" strokeOpacity="0.25" />
          <line x1="120" y1="55" x2="154" y2="30" stroke="#C2703E" strokeWidth="1.5" strokeOpacity="0.25" />
          {/* Broken/disconnected lines */}
          <line x1="94" y1="66" x2="94" y2="80" stroke="#C2703E" strokeWidth="1.5" strokeOpacity="0.15" strokeDasharray="4 4" />
          <line x1="106" y1="66" x2="106" y2="80" stroke="#7A8B6F" strokeWidth="1.5" strokeOpacity="0.15" strokeDasharray="4 4" />
        </svg>
      </div>

      {/* 404 with glitch */}
      <h1
        className="glitch-text font-[family-name:var(--font-display)] text-7xl sm:text-9xl font-bold text-cream/90 relative z-10"
        data-text="404"
      >
        404
      </h1>

      <p className="mt-4 text-lg text-[#B0AAA4] max-w-md relative z-10">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 relative z-10">
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-amber-600 transition-colors"
        >
          Back to home
        </Link>
        <Link
          href="/#contact"
          className="inline-flex items-center px-6 py-3 rounded-lg border border-cream/20 text-cream font-medium hover:bg-cream/10 transition-colors"
        >
          Or reach out to me →
        </Link>
      </div>
    </div>
  );
}
