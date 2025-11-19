import React from "react";

// SVG-based MacBook Pro frame with a true-looking bezel, notch and base.
// Children are rendered inside the screen via foreignObject for pixel-perfect layout.
function MacbookProFrame({ children }) {
  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {/* Outer glow */}
      <div className="absolute -inset-12 -z-10 blur-3xl opacity-60 bg-[radial-gradient(600px_300px_at_20%_10%,rgba(12,201,85,0.25),transparent),radial-gradient(500px_260px_at_80%_30%,rgba(59,130,246,0.25),transparent)]" />

      <svg viewBox="0 0 1440 940" className="w-full h-auto drop-shadow-2xl">
        {/* Lid body */}
        <defs>
          <linearGradient id="bezel" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0b1020" />
            <stop offset="100%" stopColor="#0a0f1a" />
          </linearGradient>
          <linearGradient id="baseMetal" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#cfd5da" />
            <stop offset="100%" stopColor="#aeb5bb" />
          </linearGradient>
        </defs>

        {/* Bezel with rounded corners */}
        <g>
          <rect x="80" y="40" width="1280" height="780" rx="38" fill="url(#bezel)" stroke="rgba(255,255,255,0.08)" />
          {/* Notch */}
          <rect x="710" y="40" width="120" height="24" rx="10" fill="#0b1020" />
          {/* Screen area mask */}
          <clipPath id="screenClip">
            <rect x="116" y="84" width="1208" height="708" rx="22" />
          </clipPath>

          {/* Screen content */}
          <foreignObject x="116" y="84" width="1208" height="708" clipPath="url(#screenClip)">
            <div xmlns="http://www.w3.org/1999/xhtml" className="h-full w-full bg-slate-950/90">
              {children}
            </div>
          </foreignObject>
        </g>

        {/* Hinge */}
        <rect x="80" y="820" width="1280" height="14" rx="6" fill="#3b3f46" />

        {/* Base */}
        <g>
          <rect x="160" y="834" width="1120" height="62" rx="18" fill="url(#baseMetal)" stroke="#a1a8ae" strokeOpacity="0.5" />
          <rect x="440" y="896" width="560" height="20" rx="8" fill="#98a0a6" />
        </g>
      </svg>
    </div>
  );
}

export default MacbookProFrame;
