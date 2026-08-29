export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1A1714]">
      <div className="flex flex-col items-center gap-6">
        {/* JM Monogram */}
        <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-bold text-amber-500">
          JM
        </h1>

        {/* Animated progress bar */}
        <div className="w-48 h-1 rounded-full bg-white/10 shimmer-bar overflow-hidden">
          <div
            className="h-full rounded-full"
            style={{
              background: "linear-gradient(90deg, #C2703E, #D4A574, #C2703E)",
              backgroundSize: "200% 100%",
              animation: "shimmer 1.5s ease-in-out infinite",
            }}
          />
        </div>

        {/* Text */}
        <p className="text-sm text-[#B0AAA4] font-medium">
          Setting up your experience…
        </p>
      </div>
    </div>
  );
}
