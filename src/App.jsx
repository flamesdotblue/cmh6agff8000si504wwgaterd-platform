import React from 'react';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import AuthSection from './components/AuthSection';
import CommunitySection from './components/CommunitySection';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-indigo-50 to-emerald-50 text-slate-800">
      <Hero />
      <main className="relative z-10">
        <Pricing />
        <AuthSection />
        <CommunitySection />
      </main>
      <footer className="border-t border-white/60 bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/40 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} PastelPay. All rights reserved.</p>
          <nav className="flex items-center gap-6 text-sm text-slate-600">
            <a href="#pricing" className="hover:text-slate-900 transition">Pricing</a>
            <a href="#auth" className="hover:text-slate-900 transition">Sign in</a>
            <a href="#blog" className="hover:text-slate-900 transition">Blog</a>
            <a href="#contact" className="hover:text-slate-900 transition">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
