import figma from '@figma/code-connect';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

/**
 * Figma Code Connect — Landing Page: Navbar (header)
 * Node ID: 18:167
 */
figma.connect(
  Navbar,
  'https://www.figma.com/design/xLVVIUNNDNHMplYqBds9V3/CardIQ-%E2%80%94-Credit-Card-Recommendation-UI?node-id=18-167',
  {
    example: () => <Navbar />,
  }
);

/**
 * Figma Code Connect — Landing Page: Footer
 * Node ID: 40:472
 */
figma.connect(
  Footer,
  'https://www.figma.com/design/xLVVIUNNDNHMplYqBds9V3/CardIQ-%E2%80%94-Credit-Card-Recommendation-UI?node-id=40-472',
  {
    example: () => <Footer />,
  }
);
