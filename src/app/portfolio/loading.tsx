import { SkeletonBlock } from "@/components/Skeleton";

export default function PortfolioLoading() {
  return (
    <div className="min-h-screen bg-[var(--color-off-white)]">
      {/* Header */}
      <div className="pt-20 pb-3 bg-[var(--color-cream)] px-5 text-center">
        <SkeletonBlock className="h-7 w-56 mx-auto rounded" />
        <SkeletonBlock className="h-4 w-36 mx-auto rounded mt-2" />
      </div>

      {/* Filter pills */}
      <div className="flex justify-center gap-2 py-3 px-5">
        {[...Array(5)].map((_, i) => (
          <SkeletonBlock key={i} className="h-7 w-16 md:w-20 rounded-full" />
        ))}
      </div>

      {/* Grid */}
      <div className="px-3 grid grid-cols-2 md:grid-cols-4 gap-2">
        {[180, 240, 200, 160, 220, 180, 240, 200].map((h, i) => (
          <SkeletonBlock key={i} style={{ height: h }} />
        ))}
      </div>
    </div>
  );
}
