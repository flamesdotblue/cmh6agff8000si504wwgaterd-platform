import React, { useState } from 'react';
import { Lock, User } from 'lucide-react';

export default function AuthSection() {
  const [mode, setMode] = useState('signin');

  return (
    <section id="auth" className="relative py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-sm text-slate-700 shadow-sm ring-1 ring-white/60">
            <Lock className="h-4 w-4 text-slate-800" />
            {mode === 'signin' ? 'Sign in' : 'Create an account'}
          </div>
          <h2 className="mt-6 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Authenticate securely</h2>
          <p className="mt-3 text-slate-700">Modern auth with magic links and OAuth. Demo form below.</p>
        </div>

        <div className="mt-10 max-w-xl mx-auto bg-white/70 backdrop-blur shadow-sm ring-1 ring-white/60 rounded-2xl p-6">
          <div className="flex items-center gap-2 bg-slate-100/60 p-1 rounded-lg">
            <button onClick={() => setMode('signin')} className={`flex-1 rounded-md px-4 py-2 text-sm font-medium transition ${mode === 'signin' ? 'bg-white shadow text-slate-900' : 'text-slate-700 hover:text-slate-900'}`}>Sign in</button>
            <button onClick={() => setMode('signup')} className={`flex-1 rounded-md px-4 py-2 text-sm font-medium transition ${mode === 'signup' ? 'bg-white shadow text-slate-900' : 'text-slate-700 hover:text-slate-900'}`}>Sign up</button>
          </div>

          <form className="mt-6 space-y-4" onSubmit={(e) => { e.preventDefault(); alert(`${mode === 'signin' ? 'Signed in' : 'Account created'} (demo)`); }}>
            {mode === 'signup' && (
              <div>
                <label className="block text-sm font-medium text-slate-700">Full name</label>
                <input type="text" required className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none ring-offset-2 focus:ring-2 focus:ring-indigo-300" placeholder="Alex Doe" />
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input type="email" required className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none ring-offset-2 focus:ring-2 focus:ring-indigo-300" placeholder="you@company.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Password</label>
              <input type="password" required className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none ring-offset-2 focus:ring-2 focus:ring-indigo-300" placeholder="••••••••" />
            </div>
            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-500/90 hover:bg-indigo-500 text-white px-4 py-3 font-medium">
              <User className="h-5 w-5" />
              {mode === 'signin' ? 'Sign in' : 'Create account'}
            </button>
            {mode === 'signin' && (
              <p className="text-center text-sm text-slate-600">No account? <button type="button" onClick={() => setMode('signup')} className="text-slate-900 underline underline-offset-4">Sign up</button></p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
