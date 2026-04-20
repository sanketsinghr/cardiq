import figma from '@figma/code-connect';
import { ProgressStepper } from '@/components/ui/ProgressStepper';
import { Footer } from '@/components/Footer';

/**
 * Figma Code Connect — Quiz: Preferences Page
 * Node ID: 41:2 (full screen)
 *
 * Sub-node connections:
 *   41:37  — ProgressStepper (Step 3: all steps active)
 *   40:508 — Footer
 */
figma.connect(
  ProgressStepper,
  'https://www.figma.com/design/xLVVIUNNDNHMplYqBds9V3/CardIQ-%E2%80%94-Credit-Card-Recommendation-UI?node-id=41-37',
  {
    example: () => <ProgressStepper currentStep="preferences" />,
  }
);

figma.connect(
  Footer,
  'https://www.figma.com/design/xLVVIUNNDNHMplYqBds9V3/CardIQ-%E2%80%94-Credit-Card-Recommendation-UI?node-id=40-508',
  {
    example: () => <Footer />,
  }
);
