import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cream px-6 text-center">
      <h1 className="font-[family-name:var(--font-display)] text-6xl sm:text-8xl font-bold text-warm-charcoal">
        404
      </h1>
      <p className="mt-4 text-lg text-warm-gray max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center px-6 py-3 rounded-lg bg-amber-500 text-white font-medium hover:bg-amber-600 transition-colors"
      >
        Back to home
      </Link>
    </div>
  );
}
