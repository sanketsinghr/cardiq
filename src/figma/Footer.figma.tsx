import figma from '@figma/code-connect';
import { Footer } from '@/components/Footer';

// Component node: 76:37  (🧩 Components page → Footer)
figma.connect(
  Footer,
  'https://www.figma.com/design/xLVVIUNNDNHMplYqBds9V3/CardIQ-%E2%80%94-Credit-Card-Recommendation-UI?node-id=76-37',
  {
    example: () => <Footer />,
  }
);
