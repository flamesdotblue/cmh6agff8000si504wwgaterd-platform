import React from 'react';
import { Check, CreditCard } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    blurb: 'Everything you need to test ideas.',
    features: ['1,000 API calls/mo', 'Test cards & sandbox', 'Email support'],
    cta: 'Get started',
    color: 'from-emerald-200 to-teal-200',
  },
  {
    name: 'Growth',
    price: '$29',
    period: '/mo',
    popular: true,
    blurb: 'For growing products and teams.',
    features: ['Unlimited API calls', 'Webhooks & events', 'Priority support'],
    cta: 'Choose Growth',
    color: 'from-indigo-200 to-sky-200',
  },
  {
    name: 'Scale',
    price: 'Custom',
    blurb: 'Compliance, SLAs, and white-glove onboarding.',
    features: ['SLA & SSO', 'Multi-region', 'Dedicated manager'],
    cta: 'Contact sales',
    color: 'from-pink-200 to-rose-200',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-sm text-slate-700 shadow-sm ring-1 ring-white/60">
            <CreditCard className="h-4 w-4 text-slate-800" />
            Pricing
          </div>
          <h2 className="mt-6 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Fair pricing, soft edges</h2>
          <p className="mt-3 text-slate-700">Pick a plan that grows with you. No hidden fees, just clean design and crisp APIs.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className={`rounded-2xl bg-white/70 backdrop-blur shadow-sm ring-1 ring-white/60 overflow-hidden ${t.popular ? 'md:scale-[1.02]' : ''}`}>
              {t.popular && (
                <div className="px-5 py-2 text-xs font-medium text-indigo-700 bg-indigo-100/70">Most popular</div>
              )}
              <div className="p-6">
                <div className={`inline-flex rounded-lg bg-gradient-to-br ${t.color} px-3 py-1 text-sm text-slate-800`}>{t.name}</div>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-slate-900">{t.price}</span>
                  {t.period && <span className="text-slate-600">{t.period}</span>}
                </div>
                <p className="mt-2 text-sm text-slate-700">{t.blurb}</p>
                <ul className="mt-6 space-y-2">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-slate-700">
                      <Check className="h-5 w-5 text-emerald-600 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a href="#auth" className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-slate-900 text-white hover:bg-slate-800 px-4 py-3 font-medium">
                  {t.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
