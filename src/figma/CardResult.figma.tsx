import figma from '@figma/code-connect';
import { CardResult } from '@/components/ui/CardResult';
import type { CardRecommendation } from '@/lib/types';
import { CARDS } from '@/lib/cards';

/**
 * Figma Code Connect — CardResult
 * Node IDs:
 *   39:42  — #1 Best Match card (Axis ACE)
 *   39:116 — #2 Runner-Up card (HDFC Regalia Gold)
 *   39:197 — #3 Solid Pick card (SBI Cashback)
 *
 * The same CardResult component renders all three ranks.
 * Rank 1 shown here as the representative example.
 */

const MOCK_REC: CardRecommendation = {
  card: CARDS.find((c) => c.id === 'axis-ace')!,
  rank: 1,
  rank_label: '#1 Best Match',
  est_rewards: 24850,
  effective_fee: 0,
  net_gain: 24850,
  reasons: [
    { text: '5% cashback on Google Pay bills — your utility spend clears ₹8K/mo, earning ₹3,600' },
    { text: '4% on Swiggy, Zomato & Ola — your #2 spend category earns ₹1,280/mo' },
    { text: '1.5% unlimited default cashback everywhere — no category caps' },
  ],
};

figma.connect(
  CardResult,
  'https://www.figma.com/design/xLVVIUNNDNHMplYqBds9V3/CardIQ-%E2%80%94-Credit-Card-Recommendation-UI?node-id=39-42',
  {
    example: () => <CardResult rec={MOCK_REC} applyUrl="https://apply.example.com" />,
  }
);

// Runner-up variant
figma.connect(
  CardResult,
  'https://www.figma.com/design/xLVVIUNNDNHMplYqBds9V3/CardIQ-%E2%80%94-Credit-Card-Recommendation-UI?node-id=39-116',
  {
    example: () => (
      <CardResult
        rec={{ ...MOCK_REC, card: CARDS.find((c) => c.id === 'hdfc-regalia-gold')!, rank: 2, rank_label: '#2 Runner-Up', est_rewards: 31200, effective_fee: 2500, net_gain: 28700 }}
        applyUrl="https://apply.example.com"
      />
    ),
  }
);

// Solid pick variant
figma.connect(
  CardResult,
  'https://www.figma.com/design/xLVVIUNNDNHMplYqBds9V3/CardIQ-%E2%80%94-Credit-Card-Recommendation-UI?node-id=39-197',
  {
    example: () => (
      <CardResult
        rec={{ ...MOCK_REC, card: CARDS.find((c) => c.id === 'sbi-cashback')!, rank: 3, rank_label: '#3 Solid Pick', est_rewards: 22440, effective_fee: 999, net_gain: 21441 }}
        applyUrl="https://apply.example.com"
      />
    ),
  }
);
