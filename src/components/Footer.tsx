import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900 py-6">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 md:flex-row md:items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600">
            <span className="text-xs font-bold text-white">C</span>
          </div>
          <span className="text-sm font-bold text-white">CardIQ</span>
        </div>

        {/* Disclosure */}
        <p className="max-w-xl text-xs leading-relaxed text-slate-400">
          CardIQ may earn a commission when you apply for a card through our links. Rankings are always
          determined by net annual value — never by commission.{' '}
          <Link href="/methodology" className="underline underline-offset-2 hover:text-slate-200">
            Read our full &apos;How We Rank&apos; methodology.
          </Link>
        </p>
      </div>
    </footer>
  );
}
