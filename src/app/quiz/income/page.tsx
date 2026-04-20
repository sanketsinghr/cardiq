'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useQuizStore } from '@/lib/store';
import { ProgressStepper } from '@/components/ui/ProgressStepper';
import type { IncomeRange, EmploymentType } from '@/lib/types';

const INCOME_OPTIONS: { value: IncomeRange; label: string }[] = [
  { value: 'under_8l', label: 'Under ₹8L'  },
  { value: '8_12l',    label: '₹8–12L'     },
  { value: '12_20l',   label: '₹12–20L'    },
  { value: '20_35l',   label: '₹20–35L'    },
  { value: '35l_plus', label: '₹35L+'      },
];

export default function IncomePage() {
  const router = useRouter();
  const { income, employment, setIncome, setEmployment } = useQuizStore();

  function handleContinue() {
    if (!income) return;
    router.push('/quiz/spending');
  }

  return (
    <div className="w-full max-w-2xl">
      {/* Stepper row with Back */}
      <div className="relative mb-8 flex items-center justify-center">
        <Link
          href="/"
          className="absolute left-0 flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-slate-900"
        >
          <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 12L6 8l4-4" />
          </svg>
          Back
        </Link>
        <ProgressStepper currentStep="income" />
      </div>

      {/* Card */}
      <div className="mx-auto max-w-xl rounded-2xl bg-white p-8 shadow-sm">
        <p className="mb-1 text-xs font-bold uppercase tracking-widest text-blue-600">
          Step 1 of 3 · Income
        </p>
        <h1 className="mb-2 text-2xl font-extrabold text-slate-900">
          What&apos;s your annual income?
        </h1>
        <p className="mb-8 text-sm text-slate-500">
          Determines which cards you&apos;re eligible for. No credit check — only used to filter results.
        </p>

        {/* Income options */}
        <div className="mb-8 flex flex-wrap gap-3">
          {INCOME_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setIncome(opt.value)}
              className={`flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-all ${
                income === opt.value
                  ? 'border-blue-600 bg-blue-50 text-blue-700 ring-1 ring-blue-600'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <span
                className={`h-4 w-4 flex-shrink-0 rounded-full border-2 ${
                  income === opt.value ? 'border-blue-600 bg-blue-600' : 'border-slate-300'
                }`}
              />
              {opt.label}
            </button>
          ))}
        </div>

        {/* Employment type */}
        <div className="mb-8">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-400">
            Employment Type
          </p>
          <div className="inline-flex rounded-xl bg-slate-100 p-1">
            {(['salaried', 'self_employed'] as EmploymentType[]).map((type) => (
              <button
                key={type}
                onClick={() => setEmployment(type)}
                className={`rounded-lg px-5 py-2 text-sm font-semibold transition-all ${
                  employment === type
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {type === 'salaried' ? 'Salaried' : 'Self-employed'}
              </button>
            ))}
          </div>
        </div>

        {/* Continue */}
        <div className="flex justify-end">
          <button
            onClick={handleContinue}
            disabled={!income}
            className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Continue →
          </button>
        </div>
      </div>
    </div>
  );
}
