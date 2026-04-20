import { cn, inr } from '@/lib/utils';
import type { CardRecommendation } from '@/lib/types';

const RANK_STYLES: Record<number, { border: string; badge: string; badgeText: string }> = {
  1: { border: 'border-amber-300 bg-amber-50/30',       badge: 'bg-amber-100 text-amber-800', badgeText: '🥇 #1 Best Match'  },
  2: { border: 'border-slate-200 bg-white',             badge: 'bg-slate-100 text-slate-700', badgeText: '🥈 #2 Runner-Up'   },
  3: { border: 'border-slate-200 bg-white',             badge: 'bg-slate-100 text-slate-700', badgeText: '🥉 #3 Solid Pick'  },
};

const CARD_COLORS: Record<string, string> = {
  'axis-ace':          'from-amber-500 to-amber-700',
  'hdfc-regalia-gold': 'from-slate-700 to-slate-900',
  'sbi-cashback':      'from-slate-800 to-black',
  'axis-atlas':        'from-blue-700 to-indigo-900',
  'amex-mrcc':         'from-slate-600 to-slate-800',
  'icici-emeralde':    'from-blue-600 to-blue-900',
};

interface CardResultProps {
  rec: CardRecommendation;
  applyUrl?: string;
}

export function CardResult({ rec, applyUrl = '#' }: CardResultProps) {
  const { card, rank, rank_label, est_rewards, effective_fee, net_gain, reasons, fee_waiver_note } = rec;
  const style = RANK_STYLES[rank];
  const gradient = CARD_COLORS[card.id] ?? 'from-blue-600 to-blue-900';

  return (
    <article className={cn('rounded-2xl border p-6', style.border)}>
      {/* Rank badge */}
      <div className="mb-4">
        <span className={cn('inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold', style.badge)}>
          {style.badgeText}
        </span>
      </div>

      <div className="flex flex-col gap-5 md:flex-row md:items-start">
        {/* Card art + name */}
        <div className="flex items-start gap-4">
          <div
            className={cn(
              'relative h-20 w-32 flex-shrink-0 rounded-xl bg-gradient-to-br text-white shadow-md',
              gradient
            )}
          >
            <div className="absolute inset-0 p-3">
              <p className="text-[9px] font-semibold uppercase tracking-wider opacity-70">{card.issuer}</p>
              <p className="mt-0.5 text-sm font-bold leading-tight">{card.name.replace(card.issuer, '').trim()}</p>
            </div>
            <div className="absolute bottom-2 right-2 text-xs font-bold opacity-60">{card.network}</div>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">{card.issuer}</p>
            <h3 className="text-lg font-bold text-slate-900">{card.name.replace(card.issuer, '').trim()}</h3>
          </div>
        </div>

        {/* Metrics */}
        <div className="flex flex-1 flex-col gap-4">
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'Est. Rewards', value: inr(est_rewards), color: 'text-slate-900' },
              { label: 'Annual Fee', value: effective_fee === 0 ? '₹0 effective' : inr(effective_fee), color: 'text-slate-900' },
              { label: 'Net Gain/Yr', value: inr(net_gain), color: 'text-green-600' },
            ].map(({ label, value, color }) => (
              <div key={label} className="rounded-xl bg-slate-50 px-3 py-2.5">
                <p className="text-xs text-slate-500">{label}</p>
                <p className={cn('text-base font-bold', color)}>{value}</p>
              </div>
            ))}
          </div>

          {/* Why this card */}
          <div>
            <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-slate-500">
              Why this card for you
            </p>
            <ul className="space-y-1.5">
              {reasons.map((r, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="mt-0.5 text-blue-500">•</span>
                  <span>{r.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Fee waiver note */}
          {fee_waiver_note && (
            <div className="flex items-start gap-2 rounded-xl bg-amber-50 px-3 py-2.5 text-sm text-amber-800">
              <span>⚠️</span>
              <span>{fee_waiver_note}</span>
            </div>
          )}

          {/* CTAs */}
          <div className="flex items-center gap-3 border-t border-slate-100 pt-3">
            <a
              href={applyUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="flex-1 rounded-xl bg-blue-600 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Apply Now
            </a>
            <button className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-blue-300 hover:bg-blue-50">
              Card Details
            </button>
          </div>

          <p className="text-xs text-slate-400">We may earn a commission when you apply.</p>
        </div>
      </div>
    </article>
  );
}
