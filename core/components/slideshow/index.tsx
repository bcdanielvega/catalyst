import { Slideshow as ComponentsSlideshow } from '~/components/ui/slideshow';

import SlideshowBG from './slideshow-bg-01.jpg';
import SlideshowBG1 from './slideshow-bg1-ss.png';
import SlideshowBG2 from './slideshow-bg2-ss.png';
import SlideshowBG3 from './slideshow-bg3-ss.png';

const slides = [
  {
    cta: { label: 'Read More', href: '/#' },
    description:
      'This is a space for me to spill my inner monologue; all the thoughts I have about being a solution engineer in the ecommerce space. I\'ll post content around different solutions, different headless CMS\' (How do you pluralize CMS?), varying thoughts around how to give a better demo, and some thoughts regarding BigCommerce and where we\'re going in the future.',
    image: {
      src: SlideshowBG1,
      altText: 'Artistic squiggles',
    },
    key: 1,
    title: 'Thoughts of a Solution Engineer',
    class: '',
  },

  {
    cta: { label: 'Read More', href: '/#' },
    description:
      'I have a lot of questions. Where is Catalyst going? What is Next.js? How does Tailwind CSS come into this. How does one use MakeSwift. Let\'s try to get some answers.',
    image: {
      src: SlideshowBG2,
      altText: 'An assortment of brandless products against a blank background',
    },
    key: 2,
    title: 'What Are We Doing?',
    class: 'items-end',
  },

  {
    cta: { label: 'Shop now', href: '/#' },
    description:
      'This is my demo store, and I really like coffee. Its really as simple as it sounds.',
    key: 3,
    image: {
      src: SlideshowBG3,
      altText: 'An assortment of brandless products against a blank background',
    },
    title: 'Coffee',
    class: '',
  },
];

export const Slideshow = () => <ComponentsSlideshow slides={slides} />;
