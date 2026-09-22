import type { ImageMetadata } from 'astro';
import hyfun from '../assets/clients/hyfun.png';
import farmton from '../assets/clients/farmton.png';
import bikaji from '../assets/clients/bikaji.png';
import gokul from '../assets/clients/gokul.png';
import greenfay from '../assets/clients/greenfay.png';
import siddhivinayak from '../assets/clients/siddhivinayak.webp';
import rajeshree from '../assets/clients/rajeshree.png';
import { asset } from './site';

export interface Client {
  name: string;
  /** Raster logo optimized by Astro, or omitted for the SVG served as-is from /public. */
  logo?: ImageMetadata;
  /** Path under /public, for the one logo that isn't a raster image Astro can optimize. */
  logoSrc?: string;
  /** Company site — omitted where none was supplied or found. */
  url?: string;
}

export const clients: Client[] = [
  { name: 'Balaji Wafers', logoSrc: asset('img/clients/balaji.svg'), url: 'https://www.balajiwafers.com' },
  { name: 'HyFun Foods', logo: hyfun, url: 'https://hyfunfoods.com' },
  { name: 'Farmton Foods', logo: farmton, url: 'https://farmtonfoods.com' },
  { name: 'Bikaji Foods', logo: bikaji, url: 'https://www.bikaji.com' },
  { name: 'Gokul Agri International', logo: gokul, url: 'https://gokulagri.com' },
  { name: 'GreenFay Farm Foods', logo: greenfay, url: 'https://greenfay.com' },
  { name: 'Siddhivinayak Agri Processing', logo: siddhivinayak },
  { name: 'Rajeshree Agri Foods', logo: rajeshree },
];
