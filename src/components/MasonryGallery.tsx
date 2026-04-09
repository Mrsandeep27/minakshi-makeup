"use client";

import { useState, useEffect } from "react";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

interface Category {
  id: string;
  label: string;
}

interface MasonryGalleryProps {
  items: PortfolioItem[];
  categories: Category[];
}

export default function MasonryGallery({ items, categories }: MasonryGalleryProps) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filtered, setFiltered] = useState(items);
  const [animating, setAnimating] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    setAnimating(true);
    const timeout = setTimeout(() => {
      setFiltered(
        activeFilter === "all" ? items : items.filter((p) => p.category === activeFilter)
      );
      setTimeout(() => setAnimating(false), 50);
    }, 300);
    return () => clearTimeout(timeout);
  }, [activeFilter, items]);

  const currentItem = items.find((p) => p.id === lightbox);
  const currentIndex = items.findIndex((p) => p.id === lightbox);
  const goNext = () => setLightbox(items[(currentIndex + 1) % items.length].id);
  const goPrev = () => setLightbox(items[(currentIndex - 1 + items.length) % items.length].id);

  useEffect(() => {
    if (lightbox === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", handleKey); document.body.style.overflow = ""; };
  });

  const renderCard = (item: PortfolioItem, isBig = false) => (
    <div
      key={item.id}
      className="group cursor-pointer relative rounded-2xl overflow-hidden border border-[var(--color-cream-dark)] hover:border-[var(--color-gold-glow)] shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 h-full"
      onClick={() => setLightbox(item.id)}
    >
      <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" style={{objectPosition: 'center 30%'}} />

      {/* Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent ${isBig ? "opacity-100" : "opacity-0 group-hover:opacity-100"} transition-opacity duration-300`}>
        <div className="absolute bottom-3 left-3 right-3">
          {isBig && <span className="px-2.5 py-1 bg-[var(--color-gold)]/80 text-white text-[9px] font-bold tracking-wider uppercase rounded-full capitalize">{item.category}</span>}
          <h3 className={`font-[var(--font-heading)] text-white font-semibold ${isBig ? "text-lg mt-1.5" : "text-sm"}`}>{item.title}</h3>
          <p className="text-xs text-white/70 mt-0.5 line-clamp-1">{item.description}</p>
        </div>
      </div>

      {/* Expand icon */}
      <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" /></svg>
      </div>
    </div>
  );

  // Simple repeating patterns that always fill full width
  const renderGrid = () => {
    const rows: React.ReactNode[] = [];
    let i = 0;
    let pattern = 0;

    while (i < filtered.length) {
      const r = filtered.length - i;

      if (pattern % 4 === 0 && r >= 3) {
        // Row: 1 big left (60%) + 2 stacked right (40%)
        rows.push(
          <div key={`r${i}`} className="grid grid-cols-1 md:grid-cols-5 gap-3" style={{height: 'auto'}}>
            <div className="md:col-span-3 h-[280px] md:h-[486px]">{renderCard(filtered[i], true)}</div>
            <div className="md:col-span-2 flex flex-col gap-3">
              <div className="h-[200px] md:h-[240px]">{renderCard(filtered[i+1])}</div>
              <div className="h-[200px] md:h-[240px]">{renderCard(filtered[i+2])}</div>
            </div>
          </div>
        );
        i += 3;
      } else if (pattern % 4 === 1 && r >= 3) {
        // Row: 3 equal
        rows.push(
          <div key={`r${i}`} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="h-[280px] md:h-[350px]">{renderCard(filtered[i])}</div>
            <div className="h-[280px] md:h-[350px]">{renderCard(filtered[i+1])}</div>
            <div className="h-[280px] md:h-[350px]">{renderCard(filtered[i+2])}</div>
          </div>
        );
        i += 3;
      } else if (pattern % 4 === 2 && r >= 3) {
        // Row: 2 stacked left (40%) + 1 big right (60%)
        rows.push(
          <div key={`r${i}`} className="grid grid-cols-1 md:grid-cols-5 gap-3" style={{height: 'auto'}}>
            <div className="md:col-span-2 flex flex-col gap-3">
              <div className="h-[200px] md:h-[240px]">{renderCard(filtered[i])}</div>
              <div className="h-[200px] md:h-[240px]">{renderCard(filtered[i+1])}</div>
            </div>
            <div className="md:col-span-3 h-[280px] md:h-[486px]">{renderCard(filtered[i+2], true)}</div>
          </div>
        );
        i += 3;
      } else if (pattern % 4 === 3 && r >= 2) {
        // Row: 2 equal wide
        rows.push(
          <div key={`r${i}`} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="h-[280px] md:h-[380px]">{renderCard(filtered[i], true)}</div>
            <div className="h-[280px] md:h-[380px]">{renderCard(filtered[i+1])}</div>
          </div>
        );
        i += 2;
      } else {
        // Fallback: fill remaining into 2 or 3 cols
        const cols = r >= 3 ? 3 : r >= 2 ? 2 : 1;
        rows.push(
          <div key={`r${i}`} className={`grid grid-cols-1 ${cols >= 3 ? "sm:grid-cols-3" : cols >= 2 ? "sm:grid-cols-2" : ""} gap-3`}>
            {filtered.slice(i, i + cols).map((item) => (
              <div key={item.id} className="h-[280px] md:h-[350px]">{renderCard(item)}</div>
            ))}
          </div>
        );
        i += cols;
      }
      pattern++;
    }
    return rows;
  };

  return (
    <>
      {/* Filters */}
      <div className="flex items-center justify-center gap-2 md:gap-3 flex-wrap mb-6">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveFilter(cat.id)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
              activeFilter === cat.id
                ? "bg-gradient-to-r from-[var(--color-gold-dark)] to-[var(--color-gold)] text-white shadow-lg shadow-[var(--color-gold)]/20"
                : "bg-white text-[var(--color-text-mid)] hover:bg-[var(--color-cream)] border border-[var(--color-cream-dark)]"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className={`flex flex-col gap-3 transition-opacity duration-300 ${animating ? "opacity-0" : "opacity-100"}`}>
        {renderGrid()}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-[var(--color-text-mid)]">Is category mein abhi kuch nahi hai.</div>
      )}

      {/* Lightbox */}
      {lightbox !== null && currentItem && (
        <div className="fixed inset-0 z-[10000] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button onClick={() => setLightbox(null)} className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
          </button>
          <div className="absolute top-5 left-5 text-white/50 text-sm">{currentIndex + 1} / {items.length}</div>
          <button onClick={(e) => { e.stopPropagation(); goPrev(); }} className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          <button onClick={(e) => { e.stopPropagation(); goNext(); }} className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
          </button>
          <div className="max-w-5xl max-h-[85vh]" onClick={(e) => e.stopPropagation()}>
            <img src={currentItem.image} alt={currentItem.title} className="max-w-full max-h-[75vh] object-contain rounded-lg" />
            <div className="text-center mt-3">
              <h3 className="font-[var(--font-heading)] text-xl text-white font-semibold">{currentItem.title}</h3>
              <p className="text-white/50 text-sm mt-1">{currentItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
