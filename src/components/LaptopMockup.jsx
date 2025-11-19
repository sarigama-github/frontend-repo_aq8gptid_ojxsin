import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Simple MacBook Pro looking frame (CSS-based)
function MacbookProFrame({ children }) {
  return (
    <div className="relative mx-auto w-full max-w-2xl">
      {/* Glow */}
      <div className="absolute -inset-10 -z-10 blur-3xl opacity-60 bg-[conic-gradient(at_30%_20%,rgba(16,185,129,0.25),rgba(59,130,246,0.15),transparent_70%)]" />

      {/* Lid */}
      <div className="relative rounded-[22px] bg-slate-900 border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
        {/* Bezel with camera notch */}
        <div className="relative rounded-t-[22px] bg-slate-950">
          <div className="mx-auto h-6" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-slate-900 rounded-b-xl border-x border-b border-white/10" />
          {/* Screen */}
          <div className="px-4 pb-4">
            <div className="rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-950 to-slate-900">
              {children}
            </div>
          </div>
        </div>
        {/* Hinge */}
        <div className="h-2 bg-gradient-to-b from-slate-800 to-slate-700" />
      </div>

      {/* Base */}
      <div className="mx-auto -mt-2 h-5 w-[95%] rounded-b-2xl bg-gradient-to-b from-slate-400 to-slate-200 border-x border-b border-slate-500/40 shadow-[inset_0_1px_2px_rgba(255,255,255,0.6)]" />
      <div className="mx-auto -mt-1 h-1.5 w-[70%] rounded-b-md bg-slate-500/60" />
    </div>
  );
}

function SERPRow({ i, isTarget, highlight }) {
  return (
    <motion.div
      layout
      transition={{ type: "spring", stiffness: 600, damping: 40 }}
      className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm border backdrop-blur-sm ${
        isTarget
          ? highlight
            ? "border-emerald-500/90 bg-emerald-500/5 shadow-[0_10px_30px_rgba(16,185,129,0.25)]"
            : "border-rose-500/90 bg-rose-500/5 shadow-[0_10px_30px_rgba(244,63,94,0.25)]"
          : "border-white/10 bg-white/2"
      }`}
      style={{ zIndex: isTarget ? 20 : 1 }}
    >
      <div className="flex items-center gap-3 overflow-hidden">
        <div
          className={`w-2 h-2 rounded-full ${
            isTarget ? (highlight ? "bg-emerald-400" : "bg-rose-400") : "bg-slate-400/40"
          }`}
        />
        <div className="w-40 max-w-[50%] h-3 rounded bg-slate-300/30" />
        <div className="w-20 h-3 rounded bg-slate-300/20" />
      </div>
      <div className="text-xs text-slate-400 truncate">www.example{i}.com</div>
    </motion.div>
  );
}

function LaptopMockup() {
  const competitors = useMemo(() => Array.from({ length: 6 }).map((_, i) => ({ id: `c-${i}` })), []);
  const [targetIndex, setTargetIndex] = useState(5); // starts near bottom
  const [highlight, setHighlight] = useState(false);

  useEffect(() => {
    const stepMs = 1200;
    const interval = setInterval(() => {
      setTargetIndex((idx) => {
        if (idx <= 0) {
          setHighlight(true);
          return 0;
        }
        return idx - 1;
      });
    }, stepMs);
    return () => clearInterval(interval);
  }, []);

  // Build list with target injected at targetIndex
  const rows = useMemo(() => {
    const list = [...competitors.map((c, i) => ({ key: c.id, isTarget: false, labelIndex: i + 1 }))];
    list.splice(targetIndex, 0, { key: "you", isTarget: true, labelIndex: 0 });
    return list;
  }, [competitors, targetIndex]);

  return (
    <MacbookProFrame>
      {/* Screen content */}
      <div className="grid grid-cols-2">
        {/* Left: Local SEO Health status pulsing red -> green */}
        <div className="p-4">
          <div className="text-xs font-medium text-slate-300 mb-2">Local SEO Health</div>
          <div className="aspect-[4/3] rounded-xl border border-white/10 p-4 flex flex-col gap-3 bg-slate-950/60">
            {[
              ["Citations", highlight ? "Good" : "Fix"],
              ["GBP", highlight ? "Optimized" : "Needs Work"],
              ["On-Page", highlight ? "Aligned" : "Issues"],
            ].map(([label, val]) => (
              <div key={label} className="flex items-center justify-between">
                <span className="text-sm text-slate-400">{label}</span>
                <motion.span
                  animate={{ backgroundColor: highlight ? "rgba(16,185,129,0.20)" : "rgba(244,63,94,0.20)", color: highlight ? "rgb(167,243,208)" : "rgb(252,165,165)" }}
                  transition={{ duration: 0.6 }}
                  className="text-xs font-semibold px-2 py-0.5 rounded"
                >
                  {val}
                </motion.span>
              </div>
            ))}
            <div className="mt-auto">
              <div className="h-2 w-full rounded bg-rose-500/30 overflow-hidden">
                <motion.div
                  className="h-full"
                  animate={{ width: highlight ? "85%" : `${30 + (5 - targetIndex) * 8}%`, backgroundColor: highlight ? "rgb(52,211,153)" : "rgb(244,63,94)" }}
                  transition={{ type: "spring", stiffness: 150, damping: 20 }}
                />
              </div>
              <div className="mt-1 text-[10px] text-slate-400">Overall score</div>
            </div>
          </div>
        </div>

        {/* Right: SERP where our row climbs to the top, overlapping above while moving */}
        <div className="p-4 border-l border-white/10">
          <div className="text-xs font-medium text-slate-300 mb-2">Google Results</div>
          <div className="aspect-[4/3] rounded-xl border border-white/10 p-3 flex flex-col gap-2 bg-slate-950/50 overflow-hidden">
            {/* Fake search bar */}
            <div className="flex items-center gap-2 text-[10px] text-slate-400 mb-1">
              <div className="w-28 h-3 rounded bg-slate-300/20" />
              <div className="w-16 h-3 rounded bg-slate-300/10" />
            </div>

            <div className="relative grid gap-2 mt-1">
              <AnimatePresence initial={false}>
                {rows.map((row, idx) => (
                  <SERPRow key={row.key} i={idx + 1} isTarget={row.isTarget} highlight={highlight} />
                ))}
              </AnimatePresence>

              {/* Floating badge that follows the target and overlaps above others while moving */}
              <motion.div
                className="pointer-events-none absolute left-2 -top-4"
                animate={{ y: targetIndex * 44 }}
                transition={{ type: "spring", stiffness: 600, damping: 40 }}
                style={{ zIndex: 30 }}
              >
                <motion.div
                  className="inline-flex items-center gap-2 rounded-md px-2 py-1 text-[10px] font-semibold border backdrop-blur-sm"
                  animate={{
                    borderColor: highlight ? "rgb(16,185,129)" : "rgb(244,63,94)",
                    color: highlight ? "rgb(110,231,183)" : "rgb(252,165,165)",
                    backgroundColor: highlight ? "rgba(16,185,129,0.10)" : "rgba(244,63,94,0.10)",
                  }}
                >
                  Your website position: #{targetIndex + 1}
                </motion.div>
              </motion.div>
            </div>

            <div className="mt-auto">
              <div className="text-xs text-slate-300 mb-1">Your Website Position</div>
              <motion.div
                className="rounded-lg px-3 py-2 text-xs font-semibold inline-flex items-center gap-2 border"
                animate={{
                  borderColor: highlight ? "rgb(16,185,129)" : "rgb(244,63,94)",
                  color: highlight ? "rgb(110,231,183)" : "rgb(252,165,165)",
                  backgroundColor: highlight ? "rgba(16,185,129,0.10)" : "rgba(244,63,94,0.10)",
                }}
                transition={{ duration: 0.4 }}
              >
                {highlight ? "Ranked #1" : `Ranked #${targetIndex + 1}`}
                <span className={`w-2 h-2 rounded-full ${highlight ? "bg-emerald-400" : "bg-rose-400"}`} />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </MacbookProFrame>
  );
}

export default LaptopMockup;
