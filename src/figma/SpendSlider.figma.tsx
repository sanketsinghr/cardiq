import figma from '@figma/code-connect';
import { SpendSlider } from '@/components/ui/SpendSlider';

// Component node: 74:50  (🧩 Components page → SpendSlider)
figma.connect(
  SpendSlider,
  'https://www.figma.com/design/xLVVIUNNDNHMplYqBds9V3/CardIQ-%E2%80%94-Credit-Card-Recommendation-UI?node-id=74-50',
  {
    example: () => (
      <SpendSlider
        label="Online Shopping"
        icon="🛍️"
        value={35000}
        total={85000}
        min={0}
        max={150000}
        step={500}
        onChange={(v) => console.log(v)}
      />
    ),
  }
);
