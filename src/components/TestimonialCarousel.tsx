"use client";

interface Review {
  name: string;
  text: string;
  rating: number;
  event: string;
}

interface TestimonialCarouselProps {
  reviews: Review[];
}

export default function TestimonialCarousel({ reviews }: TestimonialCarouselProps) {
  return (
    <div
      className="flex gap-4 md:gap-6 overflow-x-auto pb-3 snap-x snap-mandatory"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
    >
      {reviews.map((review, i) => (
        <div
          key={i}
          className="flex-shrink-0 w-[260px] sm:w-[350px] md:w-[380px] bg-white rounded-2xl p-4 md:p-7 border border-[var(--color-cream-dark)] hover:border-[var(--color-gold-glow)] hover:shadow-xl transition-all duration-300 snap-start"
        >
          {/* Quote mark */}
          <div className="text-[var(--color-gold)] opacity-20 font-[var(--font-heading)] text-6xl leading-none -mt-2 -mb-4">&ldquo;</div>

          {/* Stars */}
          <div className="flex gap-0.5 mb-3">
            {[...Array(review.rating)].map((_, j) => (
              <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill="var(--color-gold)">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>

          {/* Text */}
          <p className="text-sm text-[var(--color-text-mid)] leading-relaxed line-clamp-4">
            &ldquo;{review.text}&rdquo;
          </p>

          {/* Author */}
          <div className="flex items-center gap-3 mt-3 md:mt-5 pt-3 md:pt-4 border-t border-[var(--color-cream-dark)]">
            <div className="w-11 h-11 rounded-full bg-[var(--color-gold)] flex items-center justify-center ring-2 ring-[var(--color-gold-glow)] text-white font-semibold text-sm">
              {review.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
            </div>
            <div>
              <div className="font-semibold text-sm text-[var(--color-text)]">{review.name}</div>
              <div className="text-xs text-[var(--color-text-light)] flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                Verified &middot; {review.event}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
