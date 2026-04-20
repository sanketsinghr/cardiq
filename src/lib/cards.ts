import type { CreditCard } from './types';

export const CARDS: CreditCard[] = [
  {
    id: 'axis-ace',
    name: 'Axis ACE Credit Card',
    issuer: 'Axis Bank',
    network: 'VISA',
    annual_fee: 499,
    fee_waiver_spend: 200000,
    reward_rates: {
      online_shopping: 0.02,
      dining: 0.04,
      travel: 0.04,
      fuel: 0.01,
      groceries: 0.02,
      default: 0.015,
    },
    point_value: 1,  // cashback — 1 point = ₹1
    milestones: [
      { spend_threshold: 200000, benefit_value: 499, description: 'Annual fee waiver at ₹2L spend' },
    ],
    min_income: 300000,
    card_type: 'cashback',
    lounge_visits: 4,
    forex_markup: 0.035,
    last_updated: '2025-04-01',
    figma_node_id: '39:50',
  },
  {
    id: 'hdfc-regalia-gold',
    name: 'HDFC Regalia Gold',
    issuer: 'HDFC Bank',
    network: 'MC',
    annual_fee: 2948, // ₹2500 + 18% GST
    fee_waiver_spend: 400000,
    reward_rates: {
      online_shopping: 0.02,
      dining: 0.04,
      travel: 0.04,
      fuel: 0.01,
      groceries: 0.02,
      default: 0.016,
    },
    point_value: 0.5,
    milestones: [
      { spend_threshold: 500000, benefit_value: 1500, description: '₹1,500 voucher at ₹5L annual spend' },
      { spend_threshold: 800000, benefit_value: 2000, description: '₹2,000 voucher at ₹8L annual spend' },
    ],
    min_income: 1000000,
    card_type: 'best_value',
    lounge_visits: 12,
    forex_markup: 0.02,
    last_updated: '2025-04-01',
    figma_node_id: '39:180',
  },
  {
    id: 'sbi-cashback',
    name: 'SBI Cashback Card',
    issuer: 'SBI Card',
    network: 'VISA',
    annual_fee: 1178, // ₹999 + GST
    fee_waiver_spend: 200000,
    reward_rates: {
      online_shopping: 0.05,
      dining: 0.01,
      travel: 0.01,
      fuel: 0.01,
      groceries: 0.01,
      default: 0.01,
    },
    point_value: 1,
    milestones: [],
    min_income: 300000,
    card_type: 'cashback',
    lounge_visits: 0,
    forex_markup: 0.035,
    last_updated: '2025-04-01',
    figma_node_id: '39:310',
  },
  {
    id: 'axis-atlas',
    name: 'Axis Atlas',
    issuer: 'Axis Bank',
    network: 'VISA',
    annual_fee: 5900,
    fee_waiver_spend: 750000,
    reward_rates: {
      online_shopping: 0.02,
      dining: 0.02,
      travel: 0.05,
      fuel: 0.01,
      groceries: 0.01,
      default: 0.01,
    },
    point_value: 0.48, // EDGE Miles ≈ ₹0.48
    milestones: [
      { spend_threshold: 750000, benefit_value: 4800, description: '10,000 bonus EDGE Miles at ₹7.5L' },
    ],
    min_income: 1500000,
    card_type: 'travel',
    lounge_visits: 24,
    forex_markup: 0.02,
    last_updated: '2025-04-01',
  },
  {
    id: 'amex-mrcc',
    name: 'Amex Membership Rewards',
    issuer: 'American Express',
    network: 'Amex',
    annual_fee: 1000,
    fee_waiver_spend: 150000,
    reward_rates: {
      online_shopping: 0.02,
      dining: 0.04,
      travel: 0.02,
      fuel: 0.01,
      groceries: 0.02,
      default: 0.01,
    },
    point_value: 0.35,
    milestones: [
      { spend_threshold: 150000, benefit_value: 1800, description: '18,000 MR points bonus at ₹1.5L spend' },
    ],
    min_income: 600000,
    card_type: 'vouchers',
    lounge_visits: 0,
    forex_markup: 0.035,
    last_updated: '2025-04-01',
  },
  {
    id: 'icici-emeralde',
    name: 'ICICI Emeralde Private Metal',
    issuer: 'ICICI Bank',
    network: 'VISA',
    annual_fee: 14160, // ₹12000 + GST
    fee_waiver_spend: 0,
    reward_rates: {
      online_shopping: 0.04,
      dining: 0.04,
      travel: 0.04,
      fuel: 0.01,
      groceries: 0.04,
      default: 0.02,
    },
    point_value: 0.5,
    milestones: [
      { spend_threshold: 800000, benefit_value: 5000, description: '₹5,000 travel voucher at ₹8L spend' },
    ],
    min_income: 2500000,
    card_type: 'best_value',
    lounge_visits: 999, // unlimited
    forex_markup: 0.015,
    last_updated: '2025-04-01',
  },
];

// All card names for the existing-cards search
export const ALL_CARD_NAMES: string[] = [
  'Axis ACE', 'HDFC Regalia Gold', 'HDFC Infinia', 'HDFC Millennia',
  'HDFC MoneyBack', 'SBI Cashback Card', 'SBI SimplyCLICK', 'Axis Atlas',
  'Axis Flipkart', 'ICICI Amazon Pay', 'ICICI Emeralde', 'ICICI Sapphiro',
  'Amex MRCC', 'Amex Platinum Travel', 'Kotak 811', 'Yes First Exclusive',
  'IndusInd Pinnacle', 'RBL Zomato Edition', 'AU Zenith', 'Standard Chartered EaseMyTrip',
];

export const INCOME_RANGE_MIN: Record<string, number> = {
  under_8l: 0,
  '8_12l': 800000,
  '12_20l': 1200000,
  '20_35l': 2000000,
  '35l_plus': 3500000,
};
