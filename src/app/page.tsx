import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const BANKS = ['HDFC Bank', 'Axis Bank', 'ICICI', 'SBI Card', 'Amex', 'Kotak', 'Yes Bank'];

const DIFFERENTIATORS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-blue-600" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: 'Spend analysis',
    body: 'We model your exact spend profile — category by category — against every card\'s reward structure. The difference between the best and worst match is often ₹20,000/yr.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-blue-600" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.97zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.97z" />
      </svg>
    ),
    title: 'Rigorous, and unbiased',
    body: 'Cards are ranked by net rupee value — not affiliate commission. A card that pays us nothing can rank #1 if it\'s genuinely your best option.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-blue-600" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
    title: 'Zero sponsored ranks',
    body: 'No "Featured" slots. No paid placements. Our methodology is public and every calculation is shown — so you can verify our work yourself.',
  },
];

// Hero card stack — pure CSS/SVG, no images
function CardStack() {
  return (
    <div className="relative h-80 w-80 md:h-96 md:w-96">
      {/* Card 3 — back */}
      <div className="absolute right-0 top-0 h-44 w-72 rotate-6 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-700 shadow-xl">
        <div className="p-5 text-white">
          <p className="text-[10px] font-semibold uppercase tracking-widest opacity-70">Axis Bank</p>
          <p className="mt-1 text-xl font-bold">Magnus</p>
        </div>
        <div className="absolute bottom-4 right-5 text-xs font-bold text-white/60">VISA</div>
      </div>
      {/* Card 2 — middle */}
      <div className="absolute right-4 top-16 h-44 w-72 rotate-2 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-900 shadow-xl">
        <div className="p-5 text-white">
          <p className="text-[10px] font-semibold uppercase tracking-widest opacity-70">HDFC Bank</p>
          <p className="mt-1 text-xl font-bold">Regalia Gold</p>
        </div>
        <div className="absolute bottom-4 right-5 text-xs font-bold text-white/60">MC</div>
      </div>
      {/* Card 1 — front */}
      <div className="absolute left-0 top-28 h-44 w-72 -rotate-1 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-900 shadow-2xl">
        <div className="p-5 text-white">
          <p className="text-[10px] font-semibold uppercase tracking-widest opacity-70">ICICI Bank</p>
          <p className="mt-1 text-xl font-bold">Emeralde Private</p>
          <p className="mt-6 font-mono text-sm tracking-widest opacity-60">•••• •••• •••• 0016</p>
        </div>
        <div className="absolute bottom-4 right-5 text-sm font-bold text-white/60">EX</div>
      </div>
      {/* Floating badge */}
      <div className="absolute bottom-0 left-20 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
          <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 text-green-600">
            <path d="M2 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div>
          <p className="text-xs text-slate-500">Projected annual gain</p>
          <p className="text-base font-bold text-green-600">+₹42,380</p>
        </div>
      </div>
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-slate-50 pt-16 pb-0">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center gap-12 md:flex-row md:items-start md:justify-between">
            {/* Left copy */}
            <div className="max-w-lg">
              {/* Badge */}
              <div className="mb-6 inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">
                <span>★</span>
                <span>Unbiased · Commission-neutral · Free</span>
              </div>

              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-5xl lg:text-[52px]">
                Find the credit card that{' '}
                <span className="text-blue-600 italic">pays you back</span>{' '}
                the most.
              </h1>

              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                Answer 3 short questions about your income and spending. We&apos;ll model every card in India against your profile and show you the exact annual rupee value — not just an APR.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/quiz/income"
                  className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-7 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
                >
                  Find the perfect card →
                </Link>
                <button className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-slate-400">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  Watch a video
                </button>
              </div>

              <div className="mt-6 flex flex-wrap gap-5 text-sm text-slate-500">
                {['None is mandatory', 'No spam or BS', '1 Lakh+ in rewards found'].map((t) => (
                  <span key={t} className="flex items-center gap-1.5">
                    <svg viewBox="0 0 12 12" fill="none" className="h-3.5 w-3.5 text-green-500">
                      <path d="M1 6l3.5 3.5L11 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — card stack */}
            <div className="flex-shrink-0">
              <CardStack />
            </div>
          </div>
        </div>

        {/* Bank logos strip */}
        <div className="mt-14 border-t border-slate-200 bg-white py-5">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
              <span className="text-xs font-medium uppercase tracking-widest text-slate-400">
                Card data verified from
              </span>
              {BANKS.map((b) => (
                <span key={b} className="text-sm font-semibold text-slate-500 hover:text-slate-800">
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Built differently ─────────────────────────────────────────────── */}
      <section id="how-it-works" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Rankings you can trust. Math you can see.
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
              Built differently from every<br />comparison site you&apos;ve used.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {DIFFERENTIATORS.map(({ icon, title, body }) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-white p-8">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100">
                  {icon}
                </div>
                <h3 className="mb-2 text-base font-bold text-slate-900">{title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
