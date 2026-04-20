import { cn } from '@/lib/utils';

export type Step = { label: string; key: string };

const STEPS: Step[] = [
  { key: 'income',      label: 'Income'      },
  { key: 'spending',    label: 'Spending'    },
  { key: 'preferences', label: 'Preferences' },
];

interface ProgressStepperProps {
  currentStep: 'income' | 'spending' | 'preferences';
}

export function ProgressStepper({ currentStep }: ProgressStepperProps) {
  const currentIdx = STEPS.findIndex((s) => s.key === currentStep);

  return (
    <nav aria-label="Quiz progress" className="flex items-center justify-center gap-2">
      {STEPS.map((step, i) => {
        const done    = i < currentIdx;
        const active  = i === currentIdx;
        const pending = i > currentIdx;

        return (
          <div key={step.key} className="flex items-center gap-2">
            {/* Step bubble */}
            <div className="flex items-center gap-1.5">
              <div
                className={cn(
                  'flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold transition-colors',
                  done    && 'bg-blue-600 text-white',
                  active  && 'bg-blue-600 text-white ring-4 ring-blue-100',
                  pending && 'bg-white border border-slate-300 text-slate-400'
                )}
              >
                {done ? (
                  <svg viewBox="0 0 12 12" fill="none" className="h-3 w-3">
                    <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  i + 1
                )}
              </div>
              <span
                className={cn(
                  'text-sm font-medium',
                  done    && 'text-blue-600',
                  active  && 'text-slate-900',
                  pending && 'text-slate-400'
                )}
              >
                {step.label}
              </span>
            </div>

            {/* Connector line */}
            {i < STEPS.length - 1 && (
              <div className="mx-1 h-px w-12 bg-slate-200">
                <div
                  className={cn(
                    'h-full bg-blue-600 transition-all',
                    done ? 'w-full' : 'w-0'
                  )}
                />
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}
