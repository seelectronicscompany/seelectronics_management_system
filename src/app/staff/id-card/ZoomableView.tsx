"use client";

import { useState, useEffect } from "react";
import { Maximize, Minus, Plus } from "lucide-react";

export default function ZoomableView({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setScale(0.5);
      } else if (window.innerWidth < 768) {
        setScale(0.6);
      } else if (window.innerWidth < 1024) {
        setScale(0.8);
      } else {
        setScale(1);
      }
    };
    handleResize(); // set initial scale
  }, []);

  const handleZoomIn = () => setScale((s) => Math.min(s + 0.1, 2.5));
  const handleZoomOut = () => setScale((s) => Math.max(s - 0.1, 0.3));
  const handleReset = () => {
    if (window.innerWidth < 640) setScale(0.5);
    else if (window.innerWidth < 768) setScale(0.6);
    else if (window.innerWidth < 1024) setScale(0.8);
    else setScale(1);
  };

  return (
    <div className="flex flex-col items-center w-full h-full relative">
      <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white border border-slate-200 shadow-sm p-1.5 rounded-full z-20">
        <button
          onClick={handleZoomOut}
          className="p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 rounded-full transition-colors"
          title="Zoom Out"
        >
          <Minus className="size-4" />
        </button>
        <span className="text-sm font-semibold w-12 text-center text-slate-700">
          {Math.round(scale * 100)}%
        </span>
        <button
          onClick={handleZoomIn}
          className="p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 rounded-full transition-colors"
          title="Zoom In"
        >
          <Plus className="size-4" />
        </button>
        <div className="w-px h-5 bg-slate-200 mx-1"></div>
        <button
          onClick={handleReset}
          className="p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 rounded-full transition-colors"
          title="Reset Zoom"
        >
          <Maximize className="size-4" />
        </button>
      </div>

      <div className="flex-1 w-full h-full overflow-auto relative rounded-2xl bg-slate-200/50 p-4 pt-20 sm:p-8 sm:pt-24 flex">
        <div className="m-auto w-max h-max">
          <div
            className="origin-center transition-transform duration-200 ease-out"
            style={{ transform: `scale(${scale})` }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
