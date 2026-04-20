import figma from '@figma/code-connect';
import { SpendSlider } from '@/components/ui/SpendSlider';

// Component node: 74:50  (SpendSlider — travel example)
figma.connect(
  SpendSlider,
  'https://www.figma.com/design/xLVVIUNNDNHMplYqBds9V3/CardIQ-%E2%80%94-Credit-Card-Recommendation-UI?node-id=74-50',
  {
    example: () => (
      <SpendSlider
        label="Travel"
        icon="✈️"
        value={12000}
        total={85000}
        min={0}
        max={100000}
        step={500}
        onChange={(v) => console.log(v)}
      />
    ),
  }
);
