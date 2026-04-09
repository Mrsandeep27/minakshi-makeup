import { SkeletonBlock } from "@/components/Skeleton";

export default function ReviewsLoading() {
  return (
    <div className="min-h-screen bg-[var(--color-off-white)]">
      {/* Header */}
      <div className="pt-20 pb-3 bg-[var(--color-cream)] px-5 text-center">
        <SkeletonBlock className="h-7 w-48 mx-auto rounded" />
        <SkeletonBlock className="h-4 w-32 mx-auto rounded mt-2" />
      </div>

      {/* Review cards */}
      <div className="py-3 px-5 space-y-3 max-w-3xl mx-auto">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="rounded-xl border border-[var(--color-cream-dark)] p-4 space-y-3">
            <div className="flex gap-3 items-center">
              <SkeletonBlock className="w-10 h-10 rounded-full flex-shrink-0" />
              <div className="space-y-1.5 flex-1">
                <SkeletonBlock className="h-4 w-28 rounded" />
                <SkeletonBlock className="h-3 w-20 rounded" />
              </div>
            </div>
            <SkeletonBlock className="h-3 w-24 rounded" />
            <div className="space-y-1.5">
              <SkeletonBlock className="h-3 w-full rounded" />
              <SkeletonBlock className="h-3 w-full rounded" />
              <SkeletonBlock className="h-3 w-3/4 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
