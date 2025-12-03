import { LucideIcon } from 'lucide-react';

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  features: string[];
  link: string;
}

export interface Stat {
  id: number;
  label: string;
  value: number;
  suffix: string;
  icon: LucideIcon;
}

export interface Scenario {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  oemDetails?: string;
  odmDetails?: string;
}

export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  tag: string;
}

export interface NavLink {
  name: string;
  href: string;
  type: 'link' | 'mega' | 'dropdown';
  subItems?: { name: string; href: string }[];
}

export interface Certification {
  id: string;
  name: string;
  image: string;
}