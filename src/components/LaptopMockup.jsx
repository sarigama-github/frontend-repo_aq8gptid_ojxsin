import React, { useEffect, useState } from "react";

const Row = ({ i, highlight }) => {
  const isTarget = i === 1; // our site ranked to the top
  const border = isTarget ? (highlight ? "border-emerald-500" : "border-rose-500") : "border-transparent";
  const dot = isTarget ? (highlight ? "bg-emerald-400" : "bg-rose-400") : "bg-slate-400/40";
  return (
    <div className={`flex items-center justify-between rounded-lg border ${border} px-3 py-2 text-sm transition-colors`}
      style={{background: isTarget? "linear-gradient(90deg, rgba(16,185,129,0.10), transparent)" : "transparent"}}
    >
      <div className="flex items-center gap-3">
        <div className={`w-2 h-2 rounded-full ${dot}`} />
        <div className="w-28 h-3 rounded bg-slate-300/30" />
        <div className="w-16 h-3 rounded bg-slate-300/20" />
      </div>
      <div className="text-xs text-slate-400">www.example{i}.com</div>
    </div>
  );
};

function LaptopMockup() {
  const [healthGreen, setHealthGreen] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setHealthGreen((v) => !v), 1600);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative">
      {/* Glow */}
      <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-tr from-emerald-500/20 via-blue-500/10 to-transparent blur-2xl" />

      {/* Laptop frame */}
      <div className="mx-auto w-full max-w-xl rounded-[22px] border border-white/10 bg-slate-900 shadow-2xl">
        {/* Bezel */}
        <div className="rounded-t-[22px] border-b border-white/10 bg-slate-950/60 p-3">
          <div className="mx-auto h-1 w-20 rounded-full bg-slate-600/40" />
        </div>

        {/* Screen split into two halves */}
        <div className="grid grid-cols-2">
          {/* Left: Local SEO status turning red -> green */}
          <div className="p-4 bg-slate-900">
            <div className="text-xs font-medium text-slate-300 mb-2">Local SEO Health</div>
            <div className="aspect-[4/3] rounded-xl border border-white/10 p-4 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-400">Citations</span>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded ${healthGreen ? "bg-emerald-500/20 text-emerald-300" : "bg-rose-500/20 text-rose-300"}`}>
                  {healthGreen ? "Good" : "Fix"}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-400">GBP</span>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded ${healthGreen ? "bg-emerald-500/20 text-emerald-300" : "bg-rose-500/20 text-rose-300"}`}>
                  {healthGreen ? "Optimized" : "Needs Work"}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-400">On-Page</span>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded ${healthGreen ? "bg-emerald-500/20 text-emerald-300" : "bg-rose-500/20 text-rose-300"}`}>
                  {healthGreen ? "Aligned" : "Issues"}
                </span>
              </div>
              <div className="mt-auto">
                <div className="h-2 w-full rounded bg-rose-500/30 overflow-hidden">
                  <div className={`h-full transition-all duration-700 ${healthGreen ? "w-[85%] bg-emerald-400" : "w-[35%] bg-rose-400"}`} />
                </div>
                <div className="mt-1 text-[10px] text-slate-400">Overall score</div>
              </div>
            </div>
          </div>

          {/* Right: Google SERP with our site moving to top and border turning green */}
          <div className="p-4 bg-slate-900 border-l border-white/10">
            <div className="text-xs font-medium text-slate-300 mb-2">Google Results</div>
            <div className="aspect-[4/3] rounded-xl border border-white/10 p-3 flex flex-col gap-2 bg-slate-950/50">
              <div className="flex items-center gap-2 text-[10px] text-slate-400">
                <div className="w-28 h-3 rounded bg-slate-300/20" />
                <div className="w-16 h-3 rounded bg-slate-300/10" />
              </div>
              <div className="grid gap-2 mt-1">
                {Array.from({ length: 6 }).map((_, idx) => (
                  <Row key={idx} i={idx} highlight={healthGreen} />
                ))}
              </div>
              <div className="mt-auto">
                <div className="text-xs text-slate-300 mb-1">Your Website Position</div>
                <div className={`rounded-lg px-3 py-2 text-xs font-semibold inline-flex items-center gap-2 border ${healthGreen ? "border-emerald-500 text-emerald-300" : "border-rose-500 text-rose-300"}`}>
                  {healthGreen ? "Ranked #1" : "Ranked #7"}
                  <span className={`w-2 h-2 rounded-full ${healthGreen ? "bg-emerald-400" : "bg-rose-400"}`} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom frame */}
        <div className="rounded-b-[22px] border-t border-white/10 bg-slate-950/60 p-3">
          <div className="mx-auto h-1.5 w-40 rounded-full bg-slate-600/30" />
        </div>
      </div>
    </div>
  );
}

export default LaptopMockup;
