'use client';

import { useRouter } from 'next/navigation';
import { useQuizStore } from '@/lib/store';
import { ProgressStepper } from '@/components/ui/ProgressStepper';
import { SpendSlider } from '@/components/ui/SpendSlider';

const CATEGORIES = [
  { key: 'online_shopping', label: 'Online Shopping',    icon: '🛍️', max: 150000 },
  { key: 'dining',          label: 'Dining & Food',      icon: '🍽️', max: 80000  },
  { key: 'travel',          label: 'Travel',             icon: '✈️',  max: 100000 },
  { key: 'fuel',            label: 'Fuel',               icon: '⛽',  max: 30000  },
  { key: 'groceries',       label: 'Groceries',          icon: '🛒',  max: 40000  },
  { key: 'other',           label: 'Other',              icon: '📦',  max: 50000  },
] as const;

type CatKey = typeof CATEGORIES[number]['key'];

export default function SpendingPage() {
  const router = useRouter();
  const { spend, setSpend } = useQuizStore();

  function handleTotalChange(newTotal: number) {
    // Scale all categories proportionally
    const ratio = newTotal / (spend.total || 1);
    const updated = Object.fromEntries(
      CATEGORIES.map((c) => [c.key, Math.round(spend[c.key] * ratio)])
    ) as Record<CatKey, number>;
    setSpend({ total: newTotal, ...updated });
  }

  function handleCatChange(key: CatKey, value: number) {
    const newTotal = CATEGORIES.reduce(
      (sum, c) => sum + (c.key === key ? value : spend[c.key]),
      0
    );
    setSpend({ [key]: value, total: newTotal });
  }

  return (
    <div className="w-full max-w-xl">
      {/* Stepper */}
      <div className="mb-8 flex justify-center">
        <ProgressStepper currentStep="spending" />
      </div>

      {/* Card */}
      <div className="rounded-2xl bg-white p-8 shadow-sm">
        <p className="mb-1 text-xs font-bold uppercase tracking-widest text-blue-600">
          Step 2 of 3 · Spending
        </p>
        <h1 className="mb-2 text-2xl font-extrabold text-slate-900">
          How do you typically spend each month?
        </h1>
        <p className="mb-6 text-sm text-slate-500">
          Enter total spend, then split by category. Rough estimates work fine.
        </p>

        {/* Total spend card */}
        <div className="mb-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Monthly spend on card
          </p>
          <p className="mb-4 text-3xl font-extrabold text-blue-600">
            ₹{spend.total.toLocaleString('en-IN')}
          </p>
          <div className="relative">
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full rounded-full bg-blue-600"
                style={{ width: `${Math.min((spend.total / 500000) * 100, 100)}%` }}
              />
            </div>
            <input
              type="range"
              min={10000}
              max={500000}
              step={1000}
              value={spend.total}
              onChange={(e) => handleTotalChange(Number(e.target.value))}
              className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
              aria-label="Total monthly spend"
            />
          </div>
          <div className="mt-1.5 flex justify-between text-xs text-slate-400">
            <span>₹10K</span>
            <span>₹5L</span>
          </div>
        </div>

        {/* Category breakdown */}
        <div className="mb-2">
          <p className="mb-1 text-xs font-semibold text-slate-500">Break down by category</p>
        </div>
        <div className="divide-y divide-slate-100">
          {CATEGORIES.map((cat) => (
            <SpendSlider
              key={cat.key}
              label={cat.label}
              icon={cat.icon}
              value={spend[cat.key]}
              total={spend.total}
              min={0}
              max={cat.max}
              step={500}
              onChange={(v) => handleCatChange(cat.key, v)}
            />
          ))}
        </div>

        {/* Navigation */}
        <div className="mt-8 flex items-center justify-between">
          <button
            onClick={() => router.back()}
            className="text-sm font-medium text-slate-500 hover:text-slate-900"
          >
            ← Back
          </button>
          <button
            onClick={() => router.push('/quiz/preferences')}
            className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
          >
            Continue →
          </button>
        </div>
      </div>
    </div>
  );
}
