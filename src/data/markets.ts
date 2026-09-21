import type { ImageMetadata } from 'astro';
import potato from '../assets/potato.jpg';
import grains from '../assets/grains.jpg';
import vegetables from '../assets/vegetables.jpg';
import fruits from '../assets/fruits.jpg';
import industrial from '../assets/industrial.jpg';
import furniture from '../assets/furniture.jpg';

export interface Market {
  title: string;
  text: string;
  image: ImageMetadata;
  alt: string;
}

export const markets: Market[] = [
  {
    title: 'Potato Markets',
    text: 'As India is one of the largest growers of potatoes in the world. We transport potatoes from cold storages around Banaskantha and Dehgam to FMCG companies and Sabzi Mandis around India.',
    image: potato,
    alt: 'Potatoes ready for transport',
  },
  {
    title: 'Grains and Seeds',
    text: 'We cater almost entire north Gujarat and deliver its produces like Peanuts, Pearl Millet, Ispaghol, Jeera etc across India.',
    image: grains,
    alt: 'Grains and seeds',
  },
  {
    title: 'Vegetable Markets',
    text: 'We transport vegetables across India with strict time constraints for early morning deliveries and timely deliveries.',
    image: vegetables,
    alt: 'Vegetables transportation, Shree Delhi Rajasthan Transport Co',
  },
  {
    title: 'Fruits Transportation',
    text: 'We transport seasonal fruits like Watermelon, Muskmelon, Pomegranate etc. to areas like Punjab, Delhi, Jammu & Kashmir, Kolkata, Bangalore etc.',
    image: fruits,
    alt: 'Seasonal fruits',
  },
  {
    title: 'Industrial Goods',
    text: 'Transportation of industrial goods such as machine parts, machineries, scrap metal, raw materials such as calcite powder etc. are being transported by us.',
    image: industrial,
    alt: 'Industrial goods and machinery',
  },
  {
    title: 'Furniture Industry',
    text: 'We also supply transportation services for Plywood, Laminates, Color, Wood size and related industries.',
    image: furniture,
    alt: 'Timber and sheet products',
  },
];
