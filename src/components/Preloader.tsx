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
        <div className="preloader-logo">M</div>
        <div className="preloader-bar">
          <div className="preloader-fill" />
        </div>
      </div>
    </div>
  );
}
