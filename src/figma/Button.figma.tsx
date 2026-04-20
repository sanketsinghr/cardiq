import figma from '@figma/code-connect';
import { Button } from '@/components/ui/Button';

// Component node: 74:20  (🧩 Components page → Button/Primary)
figma.connect(
  Button,
  'https://www.figma.com/design/xLVVIUNNDNHMplYqBds9V3/CardIQ-%E2%80%94-Credit-Card-Recommendation-UI?node-id=74-20',
  {
    example: () => (
      <Button variant="primary" size="lg">
        Continue →
      </Button>
    ),
  }
);

// Component node: 74:23  (🧩 Components page → Button/Outline)
figma.connect(
  Button,
  'https://www.figma.com/design/xLVVIUNNDNHMplYqBds9V3/CardIQ-%E2%80%94-Credit-Card-Recommendation-UI?node-id=74-23',
  {
    example: () => (
      <Button variant="outline" size="md">
        Card Details
      </Button>
    ),
  }
);
