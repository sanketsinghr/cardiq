import figma from '@figma/code-connect';
import { SpendSlider } from '@/components/ui/SpendSlider';

/**
 * Figma Code Connect — SpendSlider
 * Node ID: 19:4 (Category spend breakdown in Quiz: Spending page)
 */
figma.connect(
  SpendSlider,
  'https://www.figma.com/design/xLVVIUNNDNHMplYqBds9V3/CardIQ-%E2%80%94-Credit-Card-Recommendation-UI?node-id=19-4',
  {
    props: {
      label: figma.string('Label'),
    },
    example: (props) => (
      <SpendSlider
        label={props.label}
        icon="🛍️"
        value={35000}
        total={85000}
        min={0}
        max={150000}
        step={500}
        onChange={() => {}}
      />
    ),
  }
);
