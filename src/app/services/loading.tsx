import { SkeletonBlock, SkeletonCard } from "@/components/Skeleton";

export default function ServicesLoading() {
  return (
    <div className="min-h-screen bg-[var(--color-off-white)]">
      {/* Header */}
      <div className="pt-20 pb-3 bg-[var(--color-cream)] px-5 text-center">
        <SkeletonBlock className="h-7 w-60 mx-auto rounded" />
      </div>

      {/* Grid */}
      <div className="py-3 px-3 md:px-6">
        <div className="grid grid-cols-2 gap-2 md:gap-8 max-w-7xl mx-auto">
          {[...Array(8)].map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
