import figma from '@figma/code-connect';
import { Navbar } from '@/components/Navbar';

/**
 * Figma Code Connect — Navbar
 * Figma node: Navigation bar used across all landing and quiz pages.
 * Node ID: 18:167 (Navigation frame inside Landing page)
 */
figma.connect(
  Navbar,
  'https://www.figma.com/design/xLVVIUNNDNHMplYqBds9V3/CardIQ-%E2%80%94-Credit-Card-Recommendation-UI?node-id=18-167',
  {
    example: () => <Navbar />,
  }
);
