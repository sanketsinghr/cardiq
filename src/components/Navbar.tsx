import Link from 'next/link';

const NAV_LINKS = [
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'Browse cards', href: '/cards' },
  { label: 'How we rank', href: '/methodology' },
  { label: 'Blog', href: '/blog' },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
            <span className="text-sm font-bold text-white">C</span>
          </div>
          <span className="text-lg font-bold text-slate-900">CardIQ</span>
        </Link>

        {/* Centre links */}
        <ul className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/sign-in"
            className="hidden text-sm font-medium text-slate-600 hover:text-slate-900 md:block"
          >
            Sign in
          </Link>
          <Link
            href="/quiz/income"
            className="inline-flex items-center gap-1.5 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
          >
            Find my card →
          </Link>
        </div>
      </nav>
    </header>
  );
}
