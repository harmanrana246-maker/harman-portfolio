import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'spice-composition-1',
    title: 'SPICE COMPOSITION',
    category: 'Digital Art / Food Advertising',
    image: 'https://i.ibb.co/Fk87vYfW/spicee.jpg',
    description: 'An immersive exploration of texture and warmth, utilizing advanced Photoshop techniques to bring out the rich, vibrant hues of natural spices in a cinematic lighting setup.'
  },
  {
    id: 'car-poster-1',
    title: 'CAR POSTER',
    category: 'Automotive / Digital Art',
    image: 'https://i.ibb.co/kgZ6yvmK/car.jpg',
    description: 'A high-octane car poster design featuring advanced lighting composites, speed blur effects, and cinematic grading to showcase the vehicle in a dramatic environment.'
  },
  {
    id: 'party-poster-1',
    title: 'PARTY POSTER',
    category: 'Event Design / Digital Art',
    image: 'https://i.ibb.co/tM4ksGcH/concert.jpg',
    description: 'A vibrant and energetic party poster design utilizing advanced color grading, light leaks, and dynamic typography to capture the atmosphere of a live concert event.'
  },
  {
    id: 'gaming-poster-1',
    title: 'GAMING POSTER',
    category: 'Digital Art / Gaming',
    image: 'https://i.ibb.co/gMT9XWzR/spider.jpg',
    description: 'A cinematic gaming poster design featuring advanced character isolation, custom lighting effects, and dynamic atmospheric elements. This piece explores high-contrast storytelling and professional composition techniques.'
  },
  {
    id: 'royal-enfield-1',
    title: 'ROYAL ENFIELD LANDING PAGE',
    category: 'Landing Page / Automotive',
    image: 'https://i.ibb.co/YFd97bzB/gt-650.jpg',
    description: 'A high-octane, premium landing page concept for the Royal Enfield Continental GT 650. This design focuses on cinematic lighting and aggressive typography to capture the spirit of cafe racer culture.'
  },
  {
    id: 'landing-page-1',
    title: 'Landing Page',
    category: 'Web Design / UI',
    image: 'https://i.ibb.co/TMpFBNkS/food-cart-landing-page.jpg',
    description: 'A high-conversion landing page design for a mobile food business. Focused on appetizing visuals, clear call-to-actions, and a modern, responsive layout that drives customer engagement.'
  },
  {
    id: 'filmfare-1',
    title: 'Filmfare Magazine',
    category: 'Magazine Mockup',
    image: 'https://i.ibb.co/DgDsbYBv/mockup-filmfare.jpg',
    mockupImage: 'https://i.ibb.co/hRHbXFZW/filmfare-magzine.jpg',
    description: 'A "Minimal Edition" concept for Filmfare magazine. This project showcases the synergy between the flat digital layout and its real-world application via a high-fidelity magazine mockup.'
  },
  {
    id: 'digital-masterclass-1',
    title: 'YouTube Thumbnail',
    category: 'Social Media Branding',
    image: 'https://i.ibb.co/pBTchpRP/thumbnail.jpg',
    description: 'A high-impact visual identity for digital creators. This project focuses on bold typography, vibrant lighting effects, and high-contrast composition designed to capture attention in digital spaces.'
  },
  {
    id: 'hoodie-1',
    title: 'Aureum Apparel',
    category: 'Apparel Design',
    image: 'https://i.ibb.co/B512q03Q/hoddie.jpg',
    description: 'A premium streetwear hoodie concept featuring custom typography and logo placement. This project focuses on realistic fabric mapping and high-end apparel presentation.'
  },
  {
    id: 'filmfare-2',
    title: 'Filmfare Digital Spread',
    category: 'Magazine Design',
    image: 'https://i.ibb.co/hRHbXFZW/filmfare-magzine.jpg',
    description: 'The clean, flat digital layout of the Filmfare Minimalist concept. Focused on modern Swiss-style typography, balanced negative space, and professional subject masking.'
  },
  {
    id: 'vogue-spread-1',
    title: 'Vogue Editorial',
    category: 'Magazine Design',
    image: 'https://i.ibb.co/YBRJwF5v/vogue-magzine.jpg',
    description: 'A sophisticated editorial layout for Vogue. This piece explores the intersection of high-fashion photography and minimalist typography, emphasizing readability and visual flow.'
  },
  {
    id: 'pizza-corner-1',
    title: 'Pizza Corner',
    category: 'Digital Advertising',
    image: 'https://i.ibb.co/zhXPKKSP/pizza-corner.jpg',
    description: 'A vibrant advertising concept for a pizza brand. This piece focuses on advanced color correction, appetite appeal enhancement, and realistic shadow placement to create a mouth-watering visual experience.'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Digital Compositing', percentage: 98 },
  { name: 'Advanced Retouching', percentage: 95 },
  { name: 'Creative Color Grading', percentage: 92 },
  { name: 'Luminosity Masking', percentage: 88 },
  { name: 'Non-Destructive Workflow', percentage: 96 },
  { name: 'Texturing & Mapping', percentage: 85 }
];