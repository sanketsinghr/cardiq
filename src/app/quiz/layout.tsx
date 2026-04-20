import Link from 'next/link';
import { Footer } from '@/components/Footer';

export default function QuizLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-100">
      {/* Quiz nav */}
      <header className="bg-white border-b border-slate-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-slate-900"
          >
            <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 12L6 8l4-4" />
            </svg>
            Back
          </Link>
          {/* Stepper is injected by each page */}
          <div id="stepper-portal" />
          {/* placeholder */}
          <div className="w-16" />
        </div>
      </header>

      {/* Body */}
      <main className="flex flex-1 items-center justify-center px-4 py-12">
        {children}
      </main>

      <Footer />
    </div>
  );
}
