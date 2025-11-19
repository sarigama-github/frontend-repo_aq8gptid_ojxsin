import React from "react";
import LaptopMockup from "./LaptopMockup";

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 -z-10 opacity-40 bg-[radial-gradient(800px_400px_at_20%_20%,rgba(59,130,246,0.25),transparent),radial-gradient(600px_300px_at_80%_30%,rgba(16,185,129,0.2),transparent)]" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Copy */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 text-xs text-emerald-300/90 bg-white/5 mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Win Local Search. Convert More Foot Traffic.
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Local SEO that turns red alerts into green wins
            </h1>
            <p className="mt-5 text-lg text-slate-300 max-w-xl">
              We fix citations, optimize your Google Business Profile, and push you to the top of maps and local results — fast.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#get-audit"
                className="group inline-flex items-center justify-center rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold px-5 py-3 transition-colors shadow-[0_10px_30px_rgba(16,185,129,0.35)]"
              >
                Get a Free Local SEO Audit
                <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </a>
              <a
                href="#demo"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 text-white px-5 py-3 hover:bg-white/5 transition-colors"
              >
                See How It Works
              </a>
            </div>

            <ul className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400"/>GBP Optimization</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400"/>Citations & NAP</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400"/>Reviews & Reputation</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400"/>On‑Page Fixes</li>
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
