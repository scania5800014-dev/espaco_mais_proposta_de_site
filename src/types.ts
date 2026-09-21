/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  title: string;
  category: 'kids' | 'salao' | 'aereo' | 'noturno' | 'interior' | 'festa';
  categoryLabel: string;
  caption: string;
}

export interface Differential {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: 'Waves' | 'ChefHat' | 'Maximize2' | 'Sparkles' | 'Clock' | 'ShieldCheck';
  highlights: string[];
  badge: string;
  accentColor: 'pink' | 'orange';
}

export interface Testimonial {
  id: string;
  name: string;
  eventType: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export interface EventInquiry {
  eventType: string;
  guestsCount: string;
  preferredShift: 'diurno' | 'noturno' | 'integral';
  features: string[];
  name: string;
  phone: string;
  notes: string;
}
