import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[88vh] min-h-[640px] w-full overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/70" />

      <header className="relative z-10">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-300 to-emerald-300 flex items-center justify-center shadow-sm">
              <Rocket className="h-5 w-5 text-slate-800" />
            </div>
            <span className="font-semibold tracking-tight text-slate-800">PastelPay</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-slate-700">
            <a href="#pricing" className="hover:text-slate-900 transition">Pricing</a>
            <a href="#auth" className="hover:text-slate-900 transition">Sign in</a>
            <a href="#blog" className="hover:text-slate-900 transition">Blog</a>
            <a href="#contact" className="hover:text-slate-900 transition">Contact</a>
          </nav>
        </div>
      </header>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-sm text-slate-700 shadow-sm ring-1 ring-white/60">
              <Star className="h-4 w-4 text-amber-500" />
              Trusted by modern fintech teams
            </div>
            <h1 className="mt-6 text-4xl md:text-5xl/tight font-extrabold tracking-tight text-slate-900">
              Simple payments for digital businesses
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              A clean, minimalist toolkit for subscriptions, invoices, and payouts. Beautifully pastel. Ridiculously simple.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#pricing" className="inline-flex items-center justify-center rounded-xl bg-indigo-500/90 hover:bg-indigo-500 text-white px-5 py-3 font-medium shadow">
                View Pricing
              </a>
              <a href="#auth" className="inline-flex items-center justify-center rounded-xl bg-white/80 hover:bg-white text-slate-900 px-5 py-3 font-medium shadow ring-1 ring-slate-200">
                Start Free
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
