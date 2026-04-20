import figma from '@figma/code-connect';
import { Button } from '@/components/ui/Button';

/**
 * Figma Code Connect — Button
 * Mapped to primary CTA buttons across quiz and results pages.
 * Node ID: 40:283 (Continue button in Quiz Income)
 */
figma.connect(
  Button,
  'https://www.figma.com/design/xLVVIUNNDNHMplYqBds9V3/CardIQ-%E2%80%94-Credit-Card-Recommendation-UI?node-id=40-283',
  {
    props: {
      variant: figma.enum('Variant', {
        Primary:   'primary',
        Secondary: 'secondary',
        Ghost:     'ghost',
        Outline:   'outline',
      }),
      size: figma.enum('Size', {
        Small:  'sm',
        Medium: 'md',
        Large:  'lg',
      }),
    },
    example: (props) => (
      <Button variant={props.variant} size={props.size}>
        Continue →
      </Button>
    ),
  }
);
