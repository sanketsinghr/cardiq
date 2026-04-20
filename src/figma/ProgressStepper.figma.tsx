import figma from '@figma/code-connect';
import { ProgressStepper } from '@/components/ui/ProgressStepper';

// Component node: 74:39  (🧩 Components page → ProgressStepper)
// currentStep: 'income' | 'spending' | 'preferences'
figma.connect(
  ProgressStepper,
  'https://www.figma.com/design/xLVVIUNNDNHMplYqBds9V3/CardIQ-%E2%80%94-Credit-Card-Recommendation-UI?node-id=74-39',
  {
    example: () => <ProgressStepper currentStep="income" />,
  }
);
