'use client';

import { cn } from '@/lib/utils';

interface SpendSliderProps {
  label: string;
  icon: string;
  value: number;
  total: number;
  min?: number;
  max?: number;
  step?: number;
  onChange: (value: number) => void;
}

export function SpendSlider({
  label,
  icon,
  value,
  total,
  min = 0,
  max = 100000,
  step = 500,
  onChange,
}: SpendSliderProps) {
  const pct = total > 0 ? Math.round((value / total) * 100) : 0;
  const fillWidth = ((value - min) / (max - min)) * 100;

  return (
    <div className="flex items-center gap-4 py-3">
      {/* Icon */}
      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-slate-100 text-lg">
        {icon}
      </div>

      {/* Slider + label */}
      <div className="flex flex-1 flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-slate-800">{label}</span>
          <span className="text-sm font-semibold text-slate-900">
            ₹{value.toLocaleString('en-IN')}
          </span>
        </div>

        <div className="relative">
          {/* Track */}
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
            <div
              className="h-full rounded-full bg-blue-600 transition-all"
              style={{ width: `${Math.min(fillWidth, 100)}%` }}
            />
          </div>
          {/* Native range input (transparent, positioned over track) */}
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
            aria-label={`${label} spend`}
          />
        </div>

        <span className="text-xs text-slate-400">{pct}%</span>
      </div>
    </div>
  );
}
