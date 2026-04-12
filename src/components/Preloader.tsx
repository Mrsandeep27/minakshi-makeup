"use client";

import { useState, useEffect } from "react";

export default function Preloader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (hidden) return null;

  return (
    <div className={`preloader ${hidden ? "hidden" : ""}`}>
      <div className="flex flex-col items-center">
        <img src="/images/logo.webp" alt="Minakshi Makeup & Hair" className="w-24 h-24 rounded-full object-cover" style={{animation: 'preloaderPulse 1.5s ease-in-out infinite'}} />
        <div className="preloader-bar">
          <div className="preloader-fill" />
        </div>
      </div>
    </div>
  );
}
