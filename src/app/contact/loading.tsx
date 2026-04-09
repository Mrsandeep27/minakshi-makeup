import { SkeletonBlock } from "@/components/Skeleton";

export default function ContactLoading() {
  return (
    <div className="min-h-screen bg-[var(--color-off-white)]">
      {/* Header */}
      <div className="pt-20 pb-3 bg-[var(--color-cream)] px-5 text-center">
        <SkeletonBlock className="h-7 w-52 mx-auto rounded" />
      </div>

      {/* Form skeleton */}
      <div className="py-6 px-5 max-w-2xl mx-auto space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <SkeletonBlock className="h-12 rounded-xl" />
          <SkeletonBlock className="h-12 rounded-xl" />
        </div>
        <SkeletonBlock className="h-12 rounded-xl" />
        <SkeletonBlock className="h-12 rounded-xl" />
        <SkeletonBlock className="h-12 rounded-xl" />
        <SkeletonBlock className="h-32 rounded-xl" />
        <SkeletonBlock className="h-12 w-40 rounded-full mx-auto" />
      </div>
    </div>
  );
}
