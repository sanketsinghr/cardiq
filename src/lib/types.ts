// ─── Quiz inputs ──────────────────────────────────────────────────────────────

export type IncomeRange =
  | 'under_8l'
  | '8_12l'
  | '12_20l'
  | '20_35l'
  | '35l_plus';

export type EmploymentType = 'salaried' | 'self_employed';

export type RewardPreference = 'best_value' | 'cashback' | 'travel' | 'vouchers';

export type TravelFrequency = 'never' | 'occasionally' | 'frequently';

export interface SpendProfile {
  total: number; // monthly spend in ₹
  online_shopping: number;
  dining: number;
  travel: number;
  fuel: number;
  groceries: number;
  other: number;
}

export interface QuizState {
  income: IncomeRange | null;
  employment: EmploymentType;
  spend: SpendProfile;
  preference: RewardPreference;
  travel_frequency: TravelFrequency;
  existing_cards: string[];
}

// ─── Card database ────────────────────────────────────────────────────────────

export interface RewardRate {
  online_shopping: number;   // reward % as decimal e.g. 0.05 = 5%
  dining: number;
  travel: number;
  fuel: number;
  groceries: number;
  default: number;
}

export interface Milestone {
  spend_threshold: number;   // annual spend in ₹ to unlock
  benefit_value: number;     // rupee value of the milestone benefit
  description: string;
}

export interface CreditCard {
  id: string;
  name: string;
  issuer: string;
  network: 'VISA' | 'MC' | 'Amex' | 'RuPay';
  annual_fee: number;         // ₹ (incl. GST)
  fee_waiver_spend: number;   // annual spend to waive fee (0 = never waived)
  reward_rates: RewardRate;
  point_value: number;        // ₹ per reward point/mile
  milestones: Milestone[];
  min_income: number;         // minimum annual income in ₹
  card_type: RewardPreference;
  lounge_visits: number;      // complimentary visits per year
  forex_markup: number;       // % as decimal e.g. 0.035
  last_updated: string;
  // Figma node ID for Code Connect
  figma_node_id?: string;
}

// ─── Recommendation engine output ─────────────────────────────────────────────

export interface CardReason {
  text: string;
  highlight?: string; // inline value to bold
}

export interface CardRecommendation {
  card: CreditCard;
  rank: 1 | 2 | 3;
  rank_label: string;
  est_rewards: number;        // ₹ annual rewards earned
  effective_fee: number;      // ₹ after waiver (0 if waived)
  net_gain: number;           // est_rewards - effective_fee
  reasons: CardReason[];
  fee_waiver_note?: string;   // shown if waiver is achievable
}
