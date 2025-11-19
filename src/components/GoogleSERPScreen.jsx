import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Colors inspired by brightlocal: emerald/green accents, rich blue, clean whites
const brand = {
  primary: "#0BB04C", // green
  primarySoft: "rgba(11,176,76,0.12)",
  blue: "#0C4AB8",
  blueSoft: "rgba(12,74,184,0.1)",
  slate: "#0b1020",
};

function SERPRow({ i, isTarget, highlight }) {
  return (
    <motion.div
      layout
      transition={{ type: "spring", stiffness: 700, damping: 38 }}
      className={`group relative flex items-start gap-3 rounded-lg px-4 py-2.5 text-[13px] border ${
        isTarget
          ? highlight
            ? "border-emerald-500/90 bg-emerald-500/5 shadow-[0_10px_30px_rgba(16,185,129,0.25)]"
            : "border-rose-500/90 bg-rose-500/5 shadow-[0_10px_30px_rgba(244,63,94,0.25)]"
          : "border-slate-200 bg-white"
      }`}
      style={{ zIndex: isTarget ? 20 : 1 }}
    >
      <div className={`mt-1 w-4 h-4 rounded ${isTarget ? (highlight ? "bg-emerald-400" : "bg-rose-400") : "bg-slate-300"}`} />
      <div className="flex-1 min-w-0">
        <div className="text-[#1a0dab] truncate">Sample result title for keyword</div>
        <div className="text-[#006621] text-xs truncate">www.example{i}.com › services</div>
        <div className="text-slate-500 text-[12px] truncate">This is a short meta description preview that mimics Google SERP snippet.</div>
      </div>
      <div className="text-xs text-slate-500">{i}</div>
    </motion.div>
  );
}

function LocalPackItem({ idx, active }) {
  return (
    <motion.div
      layout
      transition={{ type: "spring", stiffness: 700, damping: 38 }}
      className={`flex items-center gap-3 rounded-lg border p-2.5 ${active ? "border-emerald-500/80 bg-emerald-50" : "border-slate-200 bg-white"}`}
      style={{ zIndex: active ? 10 : 1 }}
    >
      <div className="w-12 h-12 rounded-md overflow-hidden bg-slate-100 flex-shrink-0">
        <img alt="biz" className="w-full h-full object-cover" src={`https://picsum.photos/seed/local-${idx}/80/80`} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <div className="font-medium text-slate-800 truncate">Local Business {idx}</div>
          <div className="text-[11px] text-slate-500">• Open</div>
        </div>
        <div className="flex items-center gap-1 text-amber-500 text-xs">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill={i < 4 ? "currentColor" : "none"} stroke="currentColor">
              <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
          <span className="ml-1 text-[11px] text-slate-600">4.0 (213)</span>
        </div>
        <div className="text-[11px] text-slate-500 truncate">Plumber • 1.2 mi • Closes 6PM</div>
      </div>
      <div className="text-xs text-blue-700 font-semibold">Website</div>
    </motion.div>
  );
}

export default function GoogleSERPScreen() {
  const competitors = useMemo(() => Array.from({ length: 6 }).map((_, i) => ({ id: `c-${i}` })), []);
  const [targetIndex, setTargetIndex] = useState(5);
  const [highlight, setHighlight] = useState(false);

  // Local pack state for 3-pack
  const [packIndex, setPackIndex] = useState(2); // start last, climb to top

  useEffect(() => {
    let dir = -1; // climb up
    const loop = setInterval(() => {
      setTargetIndex((idx) => {
        const next = idx + dir;
        if (next <= 0) {
          setHighlight(true);
          return 0;
        }
        return next;
      });
      setPackIndex((idx) => (idx <= 0 ? 0 : idx - 1));
    }, 950);

    // reset to loop after a pause on #1
    const reset = setInterval(() => {
      setHighlight(false);
      setTargetIndex(5);
      setPackIndex(2);
    }, 950 * 9);

    return () => {
      clearInterval(loop);
      clearInterval(reset);
    };
  }, []);

  const rows = useMemo(() => {
    const list = [...competitors.map((c, i) => ({ key: c.id, isTarget: false, labelIndex: i + 1 }))];
    list.splice(targetIndex, 0, { key: "you", isTarget: true, labelIndex: 0 });
    return list;
  }, [competitors, targetIndex]);

  return (
    <div className="h-full w-full bg-white text-slate-900 flex flex-col">
      {/* Chrome-like top bar */}
      <div className="h-12 border-b border-slate-200 flex items-center px-4 gap-3 bg-slate-50/70">
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-full bg-red-400" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 max-w-3xl mx-auto">
          <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-full pl-3 pr-2 py-1.5 shadow-sm">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" className="-ml-1">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input className="flex-1 bg-transparent outline-none text-sm" defaultValue="Your Target keyword!" />
            <button className="text-white text-xs font-semibold px-3 py-1.5 rounded-full" style={{ backgroundColor: brand.primary }}>Search</button>
          </div>
        </div>
      </div>

      {/* Google header tabs */}
      <div className="h-10 border-b border-slate-200 flex items-center px-6 gap-6 text-sm">
        {[
          ["All", true],
          ["Maps", false],
          ["Images", false],
          ["Shopping", false],
          ["News", false],
          ["More", false],
        ].map(([label, active]) => (
          <div key={label} className={`px-2 py-1 rounded-full ${active ? "text-blue-700 bg-blue-50" : "text-slate-500 hover:text-slate-700"}`}>{label}</div>
        ))}
      </div>

      {/* Results area */}
      <div className="flex-1 overflow-hidden p-4">
        <div className="h-full grid grid-cols-12 gap-4">
          {/* Left: results */}
          <div className="col-span-8 pr-2">
            <div className="text-xs text-slate-500 mb-3">About 2,410,000 results (0.35 seconds)</div>

            {/* Local pack */}
            <div className="mb-4">
              <div className="rounded-xl border border-slate-200 bg-white p-3">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[0, 1, 2].map((i) => (
                    <LocalPackItem key={i} idx={i + 1} active={packIndex === i} />
                  ))}
                </div>
              </div>
            </div>

            <div className="relative grid gap-2">
              <AnimatePresence initial={false}>
                {rows.map((row, idx) => (
                  <SERPRow key={row.key} i={idx + 1} isTarget={row.isTarget} highlight={highlight} />
                ))}
              </AnimatePresence>

              {/* Floating badge */}
              <motion.div
                className="pointer-events-none absolute left-2 -top-3"
                animate={{ y: targetIndex * 70 }}
                transition={{ type: "spring", stiffness: 700, damping: 38 }}
                style={{ zIndex: 30 }}
              >
                <motion.div
                  className="inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-[11px] font-semibold border"
                  animate={{
                    borderColor: highlight ? "rgb(16,185,129)" : "rgb(244,63,94)",
                    color: highlight ? "rgb(5,150,105)" : "rgb(190,18,60)",
                    backgroundColor: highlight ? "rgba(16,185,129,0.10)" : "rgba(244,63,94,0.10)",
                  }}
                >
                  Your website position: #{targetIndex + 1}
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Right: knowledge-like column with padding */}
          <div className="col-span-4 pl-2">
            <div className="rounded-xl border border-slate-200 p-3 bg-white shadow-sm">
              <div className="text-sm font-semibold text-slate-700 mb-2">Sponsored</div>
              <div className="space-y-2">
                {[1,2].map((n)=> (
                  <div key={n} className="p-2 rounded-lg border border-slate-200 flex items-center gap-3">
                    <div className="w-12 h-12 bg-slate-100 rounded-md" />
                    <div className="min-w-0 flex-1">
                      <div className="text-[#1a0dab] text-sm truncate">Ad Headline {n}</div>
                      <div className="text-[11px] text-slate-500 truncate">www.adexample{n}.com</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-slate-200 p-3 bg-white shadow-sm">
              <div className="text-sm font-semibold text-slate-700 mb-2">Related searches</div>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>best local seo tools</li>
                <li>how to rank in google maps</li>
                <li>google business profile tips</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
