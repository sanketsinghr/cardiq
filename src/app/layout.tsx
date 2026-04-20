import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'CardIQ — Find the credit card that pays you back the most',
  description:
    'Answer 3 questions about your income and spending. CardIQ models every card in India against your profile and shows you the exact annual rupee value — not just an APR.',
  keywords: ['credit card', 'India', 'rewards', 'cashback', 'best credit card 2025'],
  openGraph: {
    title: 'CardIQ — Find the credit card that pays you back the most',
    description: 'Ranked by net annual rupee value. Commission-neutral. Free.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
