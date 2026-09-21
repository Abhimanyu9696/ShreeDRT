/** Company details and copy. Edit here — every page and component reads from this file. */

const FOUNDED = 1965;
const decade = Math.floor((new Date().getFullYear() - FOUNDED) / 10) * 10;

export const site = {
  name: 'Shree Delhi Rajasthan Transport Co.',
  shortName: 'Shree Delhi Rajasthan Transport',
  tagline: 'Serving India Since 1965',
  taglineHindi: '1965 से आपकी सेवा मे',
  description:
    'Shree Delhi Rajasthan Transport Co. — serving India since 1965. Full load truck transportation from 7 to 45 metric tons for potatoes, grains, vegetables, fruits, industrial goods and more. Based in Deesa, Gujarat.',
  founded: FOUNDED,
  /** e.g. "60+" — rolls forward automatically each decade at build time. */
  experienceLabel: `${decade}+`,
  lede: 'Full load truck transportation from 7 to 45 metric tons, across India.',
  about:
    "Since 1965, our transportation company has epitomized reliability and excellence in the industry. With a steadfast commitment to safety and efficiency, we've built enduring partnerships and earned the trust of countless clients. As we continue into the future, our mission remains unchanged: to provide innovative solutions and seamless experiences for generations to come.",
  hours: ['Mon - Sat 8:00 AM - 8:30 PM', 'Sunday 9:00 AM - 6:00 PM'],
  whatsapp: 'https://wa.me/919924096196',
  primaryPhone: { display: '+91 99240 96196', tel: '+919924096196' },
  /** Web3Forms access key for the contact form. Public by design; enquiries are emailed to the address it was created with. */
  formAccessKey: '900f3206-52d1-4cb0-9c80-367e1952596a',
};

export const stats = [
  { value: '500+', label: 'Happy Clients' },
  { value: '4000+', label: 'Loads Booked Every Year' },
  { value: '300+', label: 'Cities Covered' },
  { value: '12', label: 'States Covered' },
];

export const fleet = [
  '07 - 12 Ton Trucks',
  '13 - 19 Ton Trucks',
  '20 - 31 Ton Trucks',
  '32 - 45 Ton Trucks & Trailers',
];

export const faqs = [
  {
    q: '1. What type of services do you provide?',
    a: 'We provide full load transportation services with minimum load booking weight starting from 7 Metric tons to up to 45 Metric Tons.',
  },
  {
    q: '2. Do you provide ODC (Over Dimensional Cargo) services?',
    a: 'We do not offer ODC Services however, We offer over height service as per client requirement.',
  },
  {
    q: '3. Why would I choose you over any other company?',
    a: 'We have experience of the full load truck transportation of three generations and own fleet of trucks for quick delivery. We also provide services such as digital invoicing, real time location tracking of the goods.',
  },
];

export const offices = {
  head: {
    label: 'Head Office',
    address: ['Opp. Market Yard, Deesa - Palanpur Highway', 'Deesa - 385535'],
    phones: [
      { display: '+91 99240 96196', tel: '+919924096196' },
      { display: '+91 99241 96196', tel: '+919924196196' },
    ],
    email: 'info@shreedrt.com',
  },
  branch: {
    label: 'Branch Office',
    address: ['Chhatral - Ahmedabad Highway', 'Chhatral, Gujarat - 382715'],
    phones: [
      { display: '+91 98252 96196', tel: '+919825296196' },
      { display: '+91 97264 96196', tel: '+919726496196' },
    ],
    email: 'ajay@shreedrt.com',
  },
};

/** Prefix a path from /public with the configured base URL (needed for GitHub Pages project sites). */
export const asset = (path: string) =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
