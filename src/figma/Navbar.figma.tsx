import figma from '@figma/code-connect';
import { Navbar } from '@/components/Navbar';

// Component node: 76:30  (🧩 Components page → Navbar)
figma.connect(
  Navbar,
  'https://www.figma.com/design/xLVVIUNNDNHMplYqBds9V3/CardIQ-%E2%80%94-Credit-Card-Recommendation-UI?node-id=76-30',
  {
    example: () => <Navbar />,
  }
);
