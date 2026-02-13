
import React from 'react';
import { Project, Testimonial, PricingPlan } from './types';
import { Layout, Globe, Cpu, Zap, Star } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    name: 'NeoBank Mobile',
    description: 'A revolutionary fintech dashboard with real-time analytics.',
    tags: ['React Native', 'Node.js', 'PostgreSQL'],
    imageUrl: 'https://picsum.photos/seed/bank/800/600',
  },
  {
    id: '2',
    name: 'Ether Marketplace',
    description: 'Decentralized NFT platform for digital artists and collectors.',
    tags: ['Solidity', 'Next.js', 'Tailwind'],
    imageUrl: 'https://picsum.photos/seed/nft/800/600',
  },
  {
    id: '3',
    name: 'Zenith CRM',
    description: 'Enterprise resource management with AI-driven lead scoring.',
    tags: ['TypeScript', 'Python', 'AWS'],
    imageUrl: 'https://picsum.photos/seed/crm/800/600',
  },
  {
    id: '4',
    name: 'Quantum Portal',
    description: 'Low-latency streaming platform for the gaming industry.',
    tags: ['WebRTC', 'Go', 'Redis'],
    imageUrl: 'https://picsum.photos/seed/stream/800/600',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'CEO at FinTechX',
    content: 'Solvixdev transformed our legacy system into a high-performance cloud application. Their vision is unmatched.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Mark Thorne',
    role: 'Founder of PixelArt',
    content: 'The neon design and the smooth transitions they implemented are simply breathtaking. Highly recommended!',
    rating: 5,
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    role: 'CTO at EduGrow',
    content: 'Professional, efficient, and forward-thinking. They solved complex database problems in record time.',
    rating: 5,
  },
];

export const PRICING: PricingPlan[] = [
  {
    name: 'Starter Website',
    price: '$1,499',
    description: 'Perfect for small businesses looking to establish a digital presence.',
    features: ['5 Responsive Pages', 'SEO Optimization', 'Contact Form', '1 Month Support', 'Basic CMS'],
  },
  {
    name: 'Business Website',
    price: '$3,999',
    description: 'A high-converting platform for growing brands and startups.',
    features: ['10+ Custom Pages', 'Advanced Animations', 'E-commerce Integration', '3 Months Support', 'Speed Optimization'],
    recommended: true,
  },
  {
    name: 'Custom Solution',
    price: 'Custom',
    description: 'Scalable full-stack architecture tailored to your business needs.',
    features: ['Scalable Backend', 'Cloud Infrastructure', 'Custom Logic', 'Priority Support', 'API Integrations'],
  },
];
