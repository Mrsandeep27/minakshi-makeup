import { SkeletonBlock, SkeletonCard, SkeletonText } from "@/components/Skeleton";

export default function HomeLoading() {
  return (
    <div className="min-h-screen bg-[var(--color-off-white)]">
      {/* Hero skeleton */}
      <SkeletonBlock className="w-full h-[60vh] md:h-screen rounded-none" />

      {/* Marquee skeleton */}
      <SkeletonBlock className="w-full h-8 rounded-none" />

      {/* Trust bar */}
      <div className="px-5 py-3">
        <SkeletonBlock className="h-6 w-48 mx-auto rounded" />
      </div>

      {/* Stats */}
      <div className="bg-[var(--color-dark)] py-6 px-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="text-center space-y-2">
              <SkeletonBlock className="h-8 w-16 mx-auto rounded bg-white/10" />
              <SkeletonBlock className="h-3 w-20 mx-auto rounded bg-white/10" />
            </div>
          ))}
        </div>
      </div>

      {/* Gallery grid skeleton */}
      <div className="py-3 px-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 max-w-7xl mx-auto">
          {[...Array(4)].map((_, i) => (
            <SkeletonBlock key={i} className="h-[120px] md:h-[250px]" />
          ))}
        </div>
      </div>

      {/* Services skeleton */}
      <div className="py-3 px-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 max-w-7xl mx-auto">
          {[...Array(4)].map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
