import figma from '@figma/code-connect';
import { CardResult } from '@/components/ui/CardResult';
import type { CardRecommendation } from '@/lib/types';
import { CARDS } from '@/lib/cards';

// Component node: 74:80  (CardResult/Best Match)
const MOCK: CardRecommendation = {
  card: CARDS.find((c) => c.id === 'axis-ace')!,
  rank: 1,
  rank_label: '#1 Best Match',
  est_rewards: 24850,
  effective_fee: 0,
  net_gain: 24850,
  reasons: [
    { text: '5% cashback on Google Pay bills — your top spend, earning ₹3,600/mo' },
    { text: '4% on Swiggy, Zomato & Ola — ₹1,280/mo on your #2 category' },
    { text: '1.5% unlimited default cashback — no category caps' },
  ],
};

figma.connect(
  CardResult,
  'https://www.figma.com/design/xLVVIUNNDNHMplYqBds9V3/CardIQ-%E2%80%94-Credit-Card-Recommendation-UI?node-id=74-80',
  {
    example: () => (
      <CardResult rec={MOCK} applyUrl="https://apply.axisbank.co.in" />
    ),
  }
);
