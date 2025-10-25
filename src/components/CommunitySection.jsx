import React from 'react';
import { Mail, Newspaper } from 'lucide-react';

const posts = [
  {
    title: 'Designing pastel fintech UIs',
    excerpt: 'How we craft calm, accessible interfaces for money movement.',
    date: 'Oct 04, 2025',
  },
  {
    title: 'Subscriptions without the stress',
    excerpt: 'Implement usage-based billing in minutes with our SDKs.',
    date: 'Sep 18, 2025',
  },
  {
    title: 'Security as a design feature',
    excerpt: 'From tokenization to webhooks, keep your stack safe and simple.',
    date: 'Aug 29, 2025',
  },
];

export default function CommunitySection() {
  return (
    <section className="relative py-20">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
        <div id="blog">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-sm text-slate-700 shadow-sm ring-1 ring-white/60">
            <Newspaper className="h-4 w-4 text-slate-800" />
            From the blog
          </div>
          <h3 className="mt-6 text-2xl md:text-3xl font-bold tracking-tight text-slate-900">Latest stories</h3>
          <div className="mt-6 space-y-4">
            {posts.map((p) => (
              <article key={p.title} className="rounded-2xl bg-white/70 backdrop-blur shadow-sm ring-1 ring-white/60 p-5 hover:shadow transition">
                <h4 className="font-semibold text-slate-900">{p.title}</h4>
                <p className="mt-1 text-sm text-slate-600">{p.excerpt}</p>
                <p className="mt-3 text-xs text-slate-500">{p.date}</p>
              </article>
            ))}
          </div>
        </div>

        <div id="contact">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-sm text-slate-700 shadow-sm ring-1 ring-white/60">
            <Mail className="h-4 w-4 text-slate-800" />
            Contact us
          </div>
          <h3 className="mt-6 text-2xl md:text-3xl font-bold tracking-tight text-slate-900">We'd love to hear from you</h3>
          <form className="mt-6 rounded-2xl bg-white/70 backdrop-blur shadow-sm ring-1 ring-white/60 p-6 space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Message sent (demo)'); }}>
            <div>
              <label className="block text-sm font-medium text-slate-700">Name</label>
              <input type="text" required className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none ring-offset-2 focus:ring-2 focus:ring-emerald-300" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input type="email" required className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none ring-offset-2 focus:ring-2 focus:ring-emerald-300" placeholder="you@company.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Message</label>
              <textarea required rows={4} className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none ring-offset-2 focus:ring-2 focus:ring-emerald-300" placeholder="How can we help?" />
            </div>
            <button type="submit" className="w-full inline-flex items-center justify-center rounded-xl bg-slate-900 text-white hover:bg-slate-800 px-4 py-3 font-medium">Send message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
