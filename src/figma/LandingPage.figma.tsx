import figma from '@figma/code-connect';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

// Re-export connections for landing page context.
// All node IDs point to real COMPONENT nodes on the 🧩 Components page.

figma.connect(
  Navbar,
  'https://www.figma.com/design/xLVVIUNNDNHMplYqBds9V3/CardIQ-%E2%80%94-Credit-Card-Recommendation-UI?node-id=76-30',
  { example: () => <Navbar /> }
);

figma.connect(
  Footer,
  'https://www.figma.com/design/xLVVIUNNDNHMplYqBds9V3/CardIQ-%E2%80%94-Credit-Card-Recommendation-UI?node-id=76-37',
  { example: () => <Footer /> }
);
