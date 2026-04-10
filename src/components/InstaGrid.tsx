"use client";

import { useState } from "react";

interface InstaPost {
  image: string;
  caption?: string;
}

interface InstaGridProps {
  posts: InstaPost[];
  username: string;
  instagramUrl: string;
}

export default function InstaGrid({ posts, username, instagramUrl }: InstaGridProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-4 gap-1.5 md:gap-3">
      {posts.slice(0, 8).map((post, i) => (
        <a
          key={i}
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group aspect-square rounded-xl overflow-hidden"
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <img loading="lazy" decoding="async"             src={post.image}
            alt={post.caption || `Post ${i + 1}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Hover overlay */}
          <div className={`absolute inset-0 bg-black/50 flex flex-col items-center justify-center transition-opacity duration-300 ${hoveredIndex === i ? "opacity-100" : "opacity-0"}`}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" className="mb-2">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
            <span className="text-white text-xs font-medium tracking-wider uppercase">View on Instagram</span>
          </div>

          {/* Gradient border glow on hover */}
          <div className={`absolute inset-0 rounded-xl ring-2 transition-opacity duration-300 ${hoveredIndex === i ? "ring-[var(--color-gold)] opacity-100" : "ring-transparent opacity-0"}`} />
        </a>
      ))}
    </div>
  );
}
