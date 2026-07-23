"use client";

import { useEffect, useState } from "react";

export default function Loading() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500" style={{ opacity: visible ? 1 : 0 }}>
      <div className="relative">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple to-pink flex items-center justify-center animate-pulse">
          <span className="text-3xl font-bold text-white">KN</span>
        </div>
        <div className="absolute inset-0 w-20 h-20 rounded-2xl border-2 border-purple/50 animate-ping" />
      </div>
    </div>
  );
}
