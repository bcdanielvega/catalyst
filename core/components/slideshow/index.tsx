import { Slideshow as ComponentsSlideshow } from '~/components/ui/slideshow';

import SlideshowBG from './slideshow-bg-01.jpg';
import SlideshowBG1 from './slideshow-bg1.png';
import SlideshowBG2 from './slideshow-bg2.png';
import SlideshowBG3 from './slideshow-bg3.png';

const slides = [
  {
    cta: { label: 'Shop now', href: '/#' },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    image: {
      src: SlideshowBG1,
      altText: 'An assortment of brandless products against a blank background',
    },
    key: 1,
    title: '25% Off Sale',
    class:'',
  },

  {
    cta: { label: 'Shop now', href: '/#' },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      image: {
        src: SlideshowBG2,
        altText: 'An assortment of brandless products against a blank background',
      },
    key: 2,
    title: 'Great Deals',
    class:'items-end',
  },

  {
    cta: { label: 'Shop now', href: '/#' },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    key: 3,
    image: {
      src: SlideshowBG3,
      altText: 'An assortment of brandless products against a blank background',
    },
    title: 'Low Prices',
    class:'',
  },
];

export const Slideshow = () => <ComponentsSlideshow slides={slides} />;
