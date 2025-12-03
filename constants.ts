import { Users, Trophy, ShoppingCart, Home, Factory } from 'lucide-react';
import { Product, Scenario, Stat, ProcessStep, HeroSlide, NavLink, Certification } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'HOME', href: '#', type: 'link' },
  { name: 'PRODUCT', href: '#products', type: 'mega' },
  { name: 'OEM/ODM', href: '#process', type: 'link' },
  { 
    name: 'INFO', 
    href: '#info', 
    type: 'dropdown',
    subItems: [
      { name: 'News', href: '#news' },
      { name: 'Vlog', href: '#vlog' },
      { name: 'Download', href: '#download' }
    ]
  },
  { name: 'RESOURCES', href: '#resources', type: 'link' },
  { name: 'ABOUT', href: '#about', type: 'link' },
  { name: 'CONTACT', href: '#contact', type: 'link' },
];

export const PRODUCT_CATEGORIES = [
  { name: 'Portable Jump Starters', href: '#' },
  { name: 'Air Compressors', href: '#' },
  { name: 'Power Banks', href: '#' },
  { name: 'Emergency Kits', href: '#' },
  { name: 'Accessories', href: '#' },
];

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'a25',
    title: 'A TWENTY-FIVE (A25)',
    subtitle: 'Multi-Function Jump Starter Power Bank with 150PSI Air Compressor. Engineered for extreme conditions.',
    image: 'https://picsum.photos/id/1070/1920/1080',
    tag: 'New Launch'
  },
  {
    id: 'a28',
    title: 'A TWENTY-EIGHT (A28)',
    subtitle: 'Professional Grade Power. High Capacity & Safety Protection for heavy-duty vehicles.',
    image: 'https://picsum.photos/id/133/1920/1080',
    tag: 'Best Seller'
  },
  {
    id: 'a9',
    title: 'A NINE (A9)',
    subtitle: 'Compact & Powerful. The essential emergency power solution for every driver.',
    image: 'https://picsum.photos/id/146/1920/1080',
    tag: 'Featured'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'a25',
    name: 'A TWENTY-FIVE (A25)',
    description: 'Multi-Function Jump Starter Power Bank with 150PSI Air Compressor',
    image: 'https://picsum.photos/id/1070/600/600',
    features: ['Bidirectional Fast Charging', 'Display Screen', 'Jump Starter & Tire Inflator', 'Tube-Free'],
    link: '#'
  },
  {
    id: 'a28',
    name: 'A TWENTY-EIGHT (A28)',
    description: 'Portable Car Jump Starter with High Capacity & Safety Protection',
    image: 'https://picsum.photos/id/133/600/600',
    features: ['Bidirectional Fast Charging', 'Blower Function', 'Digital Display', 'Emergency Light'],
    link: '#'
  },
  {
    id: 'a9',
    name: 'A NINE (A9)',
    description: 'Vehicle Jump Starter | Portable Car Jump Starter with PD 20W & LED',
    image: 'https://picsum.photos/id/146/600/600',
    features: ['Compact Design', 'PD 20W Charging', 'LED Flashlight', 'Smart Clamps'],
    link: '#'
  }
];

export const SCENARIOS: Scenario[] = [
  {
    id: 'emergency',
    title: 'Emergency Vehicle Start',
    description: 'Dead battery, long-term parking, cold weather no-start. Start the engine in 3 seconds, supports up to 8.0L gas / 6.5L diesel.',
    image: 'https://picsum.photos/id/184/1024/576'
  },
  {
    id: 'outdoor',
    title: 'Outdoor Trips',
    description: 'Road trips, camping, off-road, remote areas. Reliable performance from -20℃ to 60℃, built-in LED lighting & SOS signal.',
    image: 'https://picsum.photos/id/203/1024/576'
  },
  {
    id: 'powerbank',
    title: 'Multi-Functional Power',
    description: 'Charging phones, tablets, laptops, small car appliances. 20,000mAh capacity, USB / Type-C / DC outputs.',
    image: 'https://picsum.photos/id/1/1024/576'
  },
  {
    id: 'commercial',
    title: 'Commercial Use',
    description: 'Taxi & ride-hailing drivers, logistics trucks, roadside assistance. Durable design with 1000+ charge cycles.',
    image: 'https://picsum.photos/id/107/1024/576'
  }
];

export const STATS: Stat[] = [
  { id: 1, label: 'Customers Worldwide', value: 10, suffix: 'M+', icon: Users },
  { id: 2, label: 'Design Accolades', value: 126, suffix: '+', icon: Trophy },
  { id: 3, label: 'Sales Volume', value: 100, suffix: '+', icon: ShoppingCart },
  { id: 4, label: 'Countries Sold To', value: 100, suffix: '+', icon: Home },
  { id: 5, label: 'Production Area (sqm)', value: 6, suffix: 'K+', icon: Factory },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    title: 'Requirement & Cooperation',
    description: 'Initial communication and feasibility evaluation.',
    oemDetails: 'Brand submits specs, OEM evaluates feasibility.',
    odmDetails: 'Brand defines orientation, ODM provides standard solutions.'
  },
  {
    id: 2,
    title: 'Design & Development',
    description: 'Detailed design leadership and implementation.',
    oemDetails: 'Brand leads design, provides technical docs.',
    odmDetails: 'ODM leads comprehensive design (ID/MD/SW/HW).'
  },
  {
    id: 3,
    title: 'Prototype Validation',
    description: 'Testing, iteration, and refinement.',
    oemDetails: 'OEM produces samples per brand design.',
    odmDetails: 'ODM delivers engineering prototypes & certifications.'
  },
  {
    id: 4,
    title: 'Mass Production Prep',
    description: 'Supply chain and process engineering setup.',
    oemDetails: 'Sourcing materials per BOM, configuring lines.',
    odmDetails: 'Leveraging supply chain scale for cost optimization.'
  },
  {
    id: 5,
    title: 'Volume Production',
    description: 'Manufacturing, assembly, and rigorous quality control.',
    oemDetails: 'Full-process production with traceable QC.',
    odmDetails: 'Integrated production and quality assurance.'
  },
  {
    id: 6,
    title: 'Post-Production',
    description: 'Logistics, delivery, and after-sales support.',
    oemDetails: 'Warranty support and spare parts provision.',
    odmDetails: 'Product upgrades and lifecycle management.'
  }
];

export const CERTIFICATIONS: Certification[] = [
  { id: 'ce', name: 'CE', image: 'https://gehopow.com/wp-content/uploads/2025/07/CE-2-730x1024.webp' },
  { id: 'fcc', name: 'FCC', image: 'https://gehopow.com/wp-content/uploads/2025/07/FC-730x1024.webp' },
  { id: 'rohs', name: 'RoHS', image: 'https://gehopow.com/wp-content/uploads/2025/07/ROHS-730x1024.webp' },
  { id: 'pse', name: 'PSE', image: 'https://gehopow.com/wp-content/uploads/2025/07/PSE-1-730x1024.webp' },
  { id: 'ukca', name: 'UKCA', image: 'https://gehopow.com/wp-content/uploads/2025/07/ukca-1.webp' },
  { id: 'emc', name: 'EMC', image: 'https://gehopow.com/wp-content/uploads/2025/07/EMC.webp' },
];