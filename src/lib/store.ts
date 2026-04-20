'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type {
  QuizState,
  IncomeRange,
  EmploymentType,
  RewardPreference,
  TravelFrequency,
  SpendProfile,
} from './types';

const defaultSpend: SpendProfile = {
  total: 85000,
  online_shopping: 35000,
  dining: 18000,
  travel: 12000,
  fuel: 8000,
  groceries: 7500,
  other: 4500,
};

interface QuizStore extends QuizState {
  setIncome: (v: IncomeRange) => void;
  setEmployment: (v: EmploymentType) => void;
  setSpend: (v: Partial<SpendProfile>) => void;
  setPreference: (v: RewardPreference) => void;
  setTravelFrequency: (v: TravelFrequency) => void;
  addExistingCard: (name: string) => void;
  removeExistingCard: (name: string) => void;
  reset: () => void;
}

const initial: QuizState = {
  income: null,
  employment: 'salaried',
  spend: defaultSpend,
  preference: 'best_value',
  travel_frequency: 'occasionally',
  existing_cards: [],
};

export const useQuizStore = create<QuizStore>()(
  persist(
    (set) => ({
      ...initial,
      setIncome: (income) => set({ income }),
      setEmployment: (employment) => set({ employment }),
      setSpend: (partial) =>
        set((s) => ({ spend: { ...s.spend, ...partial } })),
      setPreference: (preference) => set({ preference }),
      setTravelFrequency: (travel_frequency) => set({ travel_frequency }),
      addExistingCard: (name) =>
        set((s) => ({
          existing_cards: s.existing_cards.includes(name)
            ? s.existing_cards
            : [...s.existing_cards, name],
        })),
      removeExistingCard: (name) =>
        set((s) => ({
          existing_cards: s.existing_cards.filter((c) => c !== name),
        })),
      reset: () => set(initial),
    }),
    { name: 'cardiq-quiz' }
  )
);
