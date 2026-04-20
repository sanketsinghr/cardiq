import figma from '@figma/code-connect';
import { CardResult } from '@/components/ui/CardResult';
import type { CardRecommendation } from '@/lib/types';
import { CARDS } from '@/lib/cards';

/**
 * Figma Code Connect — Results Page
 * Node ID: 39:2 — Full results page
 *   • 39:3   — Header (context chips + headline + sub-copy)
 *   • 39:26  — #1 Best Match card section → CardResult rank=1
 *   • 39:41  — #2 Runner-Up card section  → CardResult rank=2
 *   • 39:197 — #3 Solid Pick card section → CardResult rank=3
 *   • 39:271 — Email alert CTA block
 *   • 39:288 — Footer
 *
 * Source: src/app/results/page.tsx
 * Data: getRecommendations(useQuizStore()) from lib/engine.ts
 */

const MOCK_1: CardRecommendation = {
  card: CARDS.find((c) => c.id === 'axis-ace')!,
  rank: 1,
  rank_label: '#1 Best Match',
  est_rewards: 24850,
  effective_fee: 0,
  net_gain: 24850,
  reasons: [
    { text: '5% cashback on Google Pay bills — your utility spend clears ₹8K/mo, earning ₹3,600' },
    { text: '4% on Swiggy, Zomato & Ola — your #2 spend, earning ₹1,280/mo' },
    { text: '1.5% unlimited default cashback everywhere — no category caps' },
  ],
};

figma.connect(
  CardResult,
  'https://www.figma.com/design/xLVVIUNNDNHMplYqBds9V3/CardIQ-%E2%80%94-Credit-Card-Recommendation-UI?node-id=39-26',
  {
    example: () => <CardResult rec={MOCK_1} applyUrl="https://apply.axisbank.co.in" />,
  }
);
