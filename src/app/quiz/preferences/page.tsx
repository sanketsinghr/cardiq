'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useQuizStore } from '@/lib/store';
import { ProgressStepper } from '@/components/ui/ProgressStepper';
import { ALL_CARD_NAMES } from '@/lib/cards';
import type { RewardPreference, TravelFrequency } from '@/lib/types';

const PREFERENCES: { value: RewardPreference; icon: string; label: string; desc: string }[] = [
  { value: 'best_value', icon: '⚡', label: 'Best Value',    desc: 'Maximum rupees, any reward type' },
  { value: 'cashback',   icon: '💰', label: 'Cashback',      desc: 'Direct statement credit'         },
  { value: 'travel',     icon: '✈️',  label: 'Travel Miles',  desc: 'Flights & hotel points'          },
  { value: 'vouchers',   icon: '🎁',  label: 'Vouchers',      desc: 'Amazon, Flipkart & more'         },
];

const TRAVEL_FREQ: { value: TravelFrequency; label: string }[] = [
  { value: 'never',        label: 'Never'       },
  { value: 'occasionally', label: 'Occasionally'},
  { value: 'frequently',   label: 'Frequently'  },
];

export default function PreferencesPage() {
  const router = useRouter();
  const { preference, travel_frequency, existing_cards, setPreference, setTravelFrequency, addExistingCard, removeExistingCard } = useQuizStore();

  const [search, setSearch] = useState('');
  const suggestions = search.length > 1
    ? ALL_CARD_NAMES.filter((n) => n.toLowerCase().includes(search.toLowerCase())).slice(0, 6)
    : [];

  return (
    <div className="w-full max-w-xl">
      {/* Stepper */}
      <div className="mb-8 flex justify-center">
        <ProgressStepper currentStep="preferences" />
      </div>

      {/* Card */}
      <div className="rounded-2xl bg-white p-8 shadow-sm">
        <p className="mb-1 text-xs font-bold uppercase tracking-widest text-blue-600">
          Step 3 of 3 · Preferences
        </p>
        <h1 className="mb-2 text-2xl font-extrabold text-slate-900">
          How do you like to be rewarded?
        </h1>
        <p className="mb-8 text-sm text-slate-500">
          This tunes the ranking toward the kind of card you&apos;d actually enjoy using.
          Not sure? <strong>Best Value</strong> picks the highest rupee gain regardless of type.
        </p>

        {/* Reward type grid */}
        <div className="mb-8 grid grid-cols-2 gap-3">
          {PREFERENCES.map((p) => (
            <button
              key={p.value}
              onClick={() => setPreference(p.value)}
              className={`rounded-2xl border p-4 text-left transition-all ${
                preference === p.value
                  ? 'border-blue-600 bg-blue-50 ring-1 ring-blue-600'
                  : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <div className="mb-2 text-2xl">{p.icon}</div>
              <p className={`text-sm font-semibold ${preference === p.value ? 'text-blue-700' : 'text-slate-900'}`}>
                {p.label}
              </p>
              <p className="text-xs text-slate-500">{p.desc}</p>
            </button>
          ))}
        </div>

        {/* International travel */}
        <div className="mb-8 rounded-xl border border-slate-200 p-4">
          <div className="mb-3">
            <p className="text-sm font-semibold text-slate-800">International travel</p>
            <p className="text-xs text-slate-500">Affects forex markup and lounge scoring</p>
          </div>
          <div className="inline-flex rounded-xl bg-slate-100 p-1">
            {TRAVEL_FREQ.map((f) => (
              <button
                key={f.value}
                onClick={() => setTravelFrequency(f.value)}
                className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all ${
                  travel_frequency === f.value
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cards you already have — Coming Soon */}
        <div className="mb-8 cursor-not-allowed opacity-50">
          <div className="mb-2 flex items-center gap-2">
            <p className="text-sm font-semibold text-slate-800">Cards you already have</p>
            <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-700">
              Coming soon
            </span>
          </div>
          <p className="mb-3 text-xs text-slate-500">
            We&apos;ll exclude these from results and flag overlapping cards.
          </p>

          {/* Search input — disabled */}
          <div className="relative">
            <input
              type="text"
              disabled
              placeholder="Type to search 50+ cards..."
              className="w-full cursor-not-allowed rounded-xl border border-slate-200 bg-slate-100 px-4 py-3 text-sm text-slate-400 placeholder-slate-300 outline-none"
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between border-t border-slate-100 pt-4">
          <button
            onClick={() => router.back()}
            className="text-sm font-medium text-slate-500 hover:text-slate-900"
          >
            ← Back
          </button>
          <button
            onClick={() => router.push('/results')}
            className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
          >
            Get my recommendations →
          </button>
        </div>
      </div>
    </div>
  );
}
