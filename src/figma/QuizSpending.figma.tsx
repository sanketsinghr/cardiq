import figma from '@figma/code-connect';
import { SpendSlider } from '@/components/ui/SpendSlider';

/**
 * Figma Code Connect — Quiz: Spending (category slider row)
 * Node ID: 19:4 — Category breakdown container
 * Source: src/app/quiz/spending/page.tsx
 */
figma.connect(
  SpendSlider,
  'https://www.figma.com/design/xLVVIUNNDNHMplYqBds9V3/CardIQ-%E2%80%94-Credit-Card-Recommendation-UI?node-id=19-38',
  {
    props: {
      label: figma.string('Label'),
    },
    example: (props) => (
      <SpendSlider
        label={props.label}
        icon="✈️"
        value={12000}
        total={85000}
        min={0}
        max={100000}
        step={500}
        onChange={() => {}}
      />
    ),
  }
);
