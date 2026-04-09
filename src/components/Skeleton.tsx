export function SkeletonBlock({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`animate-pulse bg-[var(--color-cream-dark)]/50 rounded-xl ${className}`} style={style} />
  );
}

export function SkeletonText({ lines = 3, className = "" }: { lines?: number; className?: string }) {
  return (
    <div className={`space-y-2 ${className}`}>
      {[...Array(lines)].map((_, i) => (
        <div
          key={i}
          className="animate-pulse bg-[var(--color-cream-dark)]/50 rounded h-3"
          style={{ width: i === lines - 1 ? "60%" : "100%" }}
        />
      ))}
    </div>
  );
}

export function SkeletonCard({ className = "" }: { className?: string }) {
  return (
    <div className={`rounded-xl overflow-hidden border border-[var(--color-cream-dark)] ${className}`}>
      <SkeletonBlock className="h-32 md:h-48 rounded-none" />
      <div className="p-3 md:p-5 space-y-2">
        <SkeletonBlock className="h-4 w-3/4 rounded" />
        <SkeletonBlock className="h-3 w-full rounded" />
        <SkeletonBlock className="h-3 w-1/2 rounded" />
      </div>
    </div>
  );
}
