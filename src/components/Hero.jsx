import React from "react";
import LaptopMockup from "./LaptopMockup";

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background inspired by BrightLocal vibes: confident dark with green + blue accents */}
      <div className="absolute inset-0 -z-10 bg-slate-950" />
      <div className="absolute inset-0 -z-10 opacity-50 bg-[radial-gradient(900px_500px_at_15%_15%,rgba(11,176,76,0.15),transparent),radial-gradient(700px_340px_at_85%_25%,rgba(12,74,184,0.18),transparent)]" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-20 pb-16">
        <div className="grid xl:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 text-xs text-emerald-300/90 bg-white/5 mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Local SEO that wins in Maps & Organic
            </div>
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight leading-tight" style={{
              color: "#F8FAFC"
            }}>
              Turn red alerts into green results
            </h1>
            <p className="mt-5 text-lg text-slate-300 max-w-xl">
              We fix citations, optimize your Google Business Profile, and push you to the top of local search — fast.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#get-audit"
                className="group inline-flex items-center justify-center rounded-xl font-semibold px-5 py-3 transition-colors shadow-[0_10px_30px_rgba(11,176,76,0.35)]"
                style={{ backgroundColor: "#0BB04C", color: "#07100f" }}
              >
                Get a Free Local SEO Audit
                <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </a>
              <a
                href="#demo"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 px-5 py-3 hover:bg-white/5 transition-colors"
                style={{ color: "#DCE7F8" }}
              >
                See How It Works
              </a>
            </div>

            <ul className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm" style={{ color: "#A5B4C6" }}>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#0BB04C" }}/>
                GBP Optimization</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#0BB04C" }}/>
                Citations & NAP</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#0BB04C" }}/>
                Reviews & Reputation</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#0BB04C" }}/>
                On‑Page Fixes</li>
            </ul>
          </div>

          {/* Visual */}
          <div className="relative">
            <LaptopMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
