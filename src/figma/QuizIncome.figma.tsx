import figma from '@figma/code-connect';
import { ProgressStepper } from '@/components/ui/ProgressStepper';
import { Footer } from '@/components/Footer';

/**
 * Figma Code Connect — Quiz: Income Page
 * Node ID: 40:242 (full screen)
 *
 * Sub-node connections:
 *   40:322 — ProgressStepper (Step 1: Income active, Spending/Preferences pending)
 *   40:490 — Footer
 */
figma.connect(
  ProgressStepper,
  'https://www.figma.com/design/xLVVIUNNDNHMplYqBds9V3/CardIQ-%E2%80%94-Credit-Card-Recommendation-UI?node-id=40-242',
  {
    example: () => <ProgressStepper currentStep="income" />,
  }
);

figma.connect(
  Footer,
  'https://www.figma.com/design/xLVVIUNNDNHMplYqBds9V3/CardIQ-%E2%80%94-Credit-Card-Recommendation-UI?node-id=40-490',
  {
    example: () => <Footer />,
  }
);
