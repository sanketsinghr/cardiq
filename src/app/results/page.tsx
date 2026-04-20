'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useQuizStore } from '@/lib/store';
import { getRecommendations } from '@/lib/engine';
import { CardResult } from '@/components/ui/CardResult';
import { Footer } from '@/components/Footer';

export default function ResultsPage() {
  const quiz = useQuizStore();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const recs = getRecommendations(quiz);

  const incomeLabelMap: Record<string, string> = {
    under_8l: 'Under ₹8L', '8_12l': '₹8–12L', '12_20l': '₹12–20L',
    '20_35l': '₹20–35L', '35l_plus': '₹35L+',
  };
  const prefLabelMap: Record<string, string> = {
    best_value: 'Best Value', cashback: 'Cashback', travel: 'Travel Miles', vouchers: 'Vouchers',
  };

  const incomeLabel = quiz.income ? incomeLabelMap[quiz.income] : '—';
  const spendLabel  = `₹${(quiz.spend.total).toLocaleString('en-IN')}/mo`;
  const prefLabel   = prefLabelMap[quiz.preference];

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      {/* Results nav */}
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-3">
          <Link
            href="/quiz/preferences"
            className="flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-slate-900"
          >
            <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 12L6 8l4-4" />
            </svg>
            Retry
          </Link>

          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-600">
              <span className="text-xs font-bold text-white">C</span>
            </div>
            <span className="text-sm font-bold text-slate-900">CardIQ</span>
          </div>

          <button className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-blue-600 transition-colors hover:bg-blue-50">
            ↑ Share results
          </button>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-10">
        {/* Context chips */}
        <div className="mb-4 flex flex-wrap items-center gap-2">
          {[incomeLabel, spendLabel, prefLabel].map((tag) => (
            <span key={tag} className="rounded-full bg-white border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600">
              {tag}
            </span>
          ))}
          <button className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-blue-600 hover:bg-blue-50">
            Refine →
          </button>
        </div>

        {/* Headline */}
        <h1 className="mb-2 text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
          Your top {recs.length} cards could earn you{' '}
          <span className="text-blue-600">
            {recs[0] ? `₹${recs[0].net_gain.toLocaleString('en-IN')}/yr` : '—'}
          </span>{' '}
          back.
        </h1>
        <p className="mb-8 text-sm text-slate-500">
          Ranked by net annual rupee value — rewards earned minus effective annual fee, modelled against your exact spend profile.
        </p>

        {/* Card results */}
        <div className="space-y-6">
          {recs.map((rec) => (
            <CardResult key={rec.card.id} rec={rec} />
          ))}
        </div>

        {/* Email alert CTA */}
        <div className="mt-10 rounded-2xl bg-slate-900 p-8">
          <h2 className="mb-2 text-lg font-bold text-white">
            Get notified when your card&apos;s rewards change.
          </h2>
          <p className="mb-5 text-sm text-slate-400">
            {recs[0]?.card.name
              ? `${recs[0].card.name} was devalued twice in 2024.`
              : 'Cards get devalued often.'}{' '}
            We track changes monthly and alert you the moment your top card&apos;s value drops.
          </p>

          {submitted ? (
            <p className="font-semibold text-green-400">✓ You&apos;re on the list. We&apos;ll only email on devaluation events.</p>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="your@email.com"
                className="flex-1 rounded-xl bg-slate-800 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Notify me
              </button>
            </form>
          )}

          <p className="mt-3 text-xs text-slate-500">
            No spam. One email per devaluation event. Unsubscribe anytime.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
