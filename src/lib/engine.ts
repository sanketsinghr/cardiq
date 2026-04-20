import type { QuizState, CreditCard, CardRecommendation, CardReason } from './types';
import { CARDS, INCOME_RANGE_MIN } from './cards';

// ─── NAV Formula ──────────────────────────────────────────────────────────────
// NAV = Σ(monthly_spend_i × reward_rate_i × point_value) × 12
//       + milestone_benefits (if threshold achievable at 90%)
//       - effective_annual_fee

function computeRewards(card: CreditCard, monthly: QuizState['spend']): number {
  const { reward_rates: r, point_value: pv } = card;
  const monthly_value =
    monthly.online_shopping * r.online_shopping * pv +
    monthly.dining         * r.dining          * pv +
    monthly.travel         * r.travel           * pv +
    monthly.fuel           * r.fuel             * pv +
    monthly.groceries      * r.groceries        * pv +
    monthly.other          * r.default          * pv;
  return Math.round(monthly_value * 12);
}

function computeMilestones(card: CreditCard, annualSpend: number): number {
  return card.milestones
    .filter((m) => annualSpend >= m.spend_threshold * 0.9) // 90% achievable
    .reduce((sum, m) => sum + m.benefit_value, 0);
}

function effectiveFee(card: CreditCard, annualSpend: number): number {
  if (card.fee_waiver_spend > 0 && annualSpend >= card.fee_waiver_spend * 0.9) {
    return 0;
  }
  return card.annual_fee;
}

function buildReasons(
  card: CreditCard,
  spend: QuizState['spend'],
  est_rewards: number,
  effective_fee: number
): CardReason[] {
  const reasons: CardReason[] = [];
  const pv = card.point_value;

  // Top category insight
  const cats: [string, number, number][] = [
    ['online shopping', spend.online_shopping, card.reward_rates.online_shopping],
    ['dining & food delivery', spend.dining, card.reward_rates.dining],
    ['travel', spend.travel, card.reward_rates.travel],
    ['fuel', spend.fuel, card.reward_rates.fuel],
    ['groceries', spend.groceries, card.reward_rates.groceries],
  ];
  const top = cats.sort((a, b) => b[1] * b[2] - a[1] * a[2])[0];
  const topRate = (top[2] * pv * 100).toFixed(1);
  const topMonthly = Math.round(top[1] * top[2] * pv);
  reasons.push({
    text: `${(top[2] * 100).toFixed(0)}% ${card.card_type === 'cashback' ? 'cashback' : 'rewards'} on ${top[0]} — your #1 spend, earning ₹${topMonthly.toLocaleString('en-IN')}/mo`,
    highlight: `₹${topMonthly.toLocaleString('en-IN')}/mo`,
  });

  // Fee waiver note
  if (card.fee_waiver_spend > 0 && effective_fee === 0) {
    reasons.push({
      text: `Annual fee waived — you're spending above the ₹${(card.fee_waiver_spend / 100000).toFixed(0)}L threshold`,
      highlight: 'Annual fee waived',
    });
  }

  // Milestone
  const annualSpend = spend.total * 12;
  const milestoneHit = card.milestones.find(
    (m) => annualSpend >= m.spend_threshold * 0.9
  );
  if (milestoneHit) {
    reasons.push({ text: milestoneHit.description });
  }

  // Lounge
  if (card.lounge_visits >= 8) {
    const visits = card.lounge_visits >= 100 ? 'Unlimited' : card.lounge_visits;
    reasons.push({
      text: `${visits} complimentary airport lounge visits/yr`,
      highlight: `${visits} lounge visits`,
    });
  }

  return reasons.slice(0, 3);
}

const RANK_LABELS: Record<number, string> = {
  1: '#1 Best Match',
  2: '#2 Runner-Up',
  3: '#3 Solid Pick',
};

// ─── Main engine ──────────────────────────────────────────────────────────────
export function getRecommendations(quiz: QuizState): CardRecommendation[] {
  const annualSpend = quiz.spend.total * 12;
  const minIncome = quiz.income ? INCOME_RANGE_MIN[quiz.income] : 0;

  const ranked = CARDS
    // Eligibility filter
    .filter((c) => c.min_income <= (minIncome || Infinity))
    // Existing card filter
    .filter((c) => !quiz.existing_cards.some((name) =>
      c.name.toLowerCase().includes(name.toLowerCase())
    ))
    // Preference soft filter (keep all if no exact match)
    .map((card) => {
      const rewards = computeRewards(card, quiz.spend);
      const milestones = computeMilestones(card, annualSpend);
      const fee = effectiveFee(card, annualSpend);
      const nav = rewards + milestones - fee;

      // Preference boost — only applies when preference is not 'best_value'
      const prefMatch = quiz.preference === 'best_value' || card.card_type === quiz.preference;
      const score = prefMatch ? nav : nav * 0.8;

      return { card, rewards, milestones, fee, nav, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  return ranked.map((r, i) => {
    const rank = (i + 1) as 1 | 2 | 3;
    const feeWaiverNote =
      r.card.fee_waiver_spend > 0 && r.fee === 0
        ? `₹${r.card.annual_fee.toLocaleString('en-IN')} fee waived — you qualify at your spend level`
        : undefined;

    return {
      card: r.card,
      rank,
      rank_label: RANK_LABELS[rank],
      est_rewards: r.rewards + r.milestones,
      effective_fee: r.fee,
      net_gain: r.nav,
      reasons: buildReasons(r.card, quiz.spend, r.rewards, r.fee),
      fee_waiver_note: feeWaiverNote,
    };
  });
}
