import figma from '@figma/code-connect';
import { ProgressStepper } from '@/components/ui/ProgressStepper';

/**
 * Figma Code Connect — ProgressStepper
 * Node ID: 40:322 (Step progress bar in Quiz Spending page)
 */
figma.connect(
  ProgressStepper,
  'https://www.figma.com/design/xLVVIUNNDNHMplYqBds9V3/CardIQ-%E2%80%94-Credit-Card-Recommendation-UI?node-id=40-322',
  {
    props: {
      currentStep: figma.enum('Current Step', {
        Income:      'income',
        Spending:    'spending',
        Preferences: 'preferences',
      }),
    },
    example: (props) => (
      <ProgressStepper currentStep={props.currentStep} />
    ),
  }
);
