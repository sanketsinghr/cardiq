import figma from '@figma/code-connect';
import { Footer } from '@/components/Footer';

/**
 * Figma Code Connect — Footer
 * Node ID: 39:288 (Footer frame present in Results page and reused across pages)
 */
figma.connect(
  Footer,
  'https://www.figma.com/design/xLVVIUNNDNHMplYqBds9V3/CardIQ-%E2%80%94-Credit-Card-Recommendation-UI?node-id=39-288',
  {
    example: () => <Footer />,
  }
);
