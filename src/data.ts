/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Differential, GalleryImage, Testimonial } from './types';

export const CONTACT_INFO = {
  name: 'Espaço Mais Festa',
  phoneDisplay: '(99) 9884-18393',
  phoneRaw: '5599988418393',
  whatsappUrl: 'https://wa.me/5599988418393?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20consultar%20disponibilidade%20e%20valores%20para%20o%20Espa%C3%A7o%20Mais%20Festa.',
  instagramHandle: '@espacomaisfestabalsas',
  instagramUrl: 'https://www.instagram.com/espacomaisfestabalsas/',
  address: 'R. Oito, 333 - Catumbi, Balsas - MA, 65800-000',
  hours: 'Aberto 24 horas',
  googleRating: 4.6,
  reviewsCount: '30+',
  coords: {
    lat: -7.5387352,
    lng: -46.0547976,
  },
  mapsEmbedUrl: 'https://maps.google.com/maps?q=-7.5387352,-46.0547976&hl=pt-BR&z=17&output=embed',
  mapsDirectUrl: 'https://www.google.com/maps/search/?api=1&query=-7.5387352,-46.0547976',
};

// Foto da vista panorâmica principal (solicitada como destaque no Hero)
export const HERO_IMAGE = 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm3wuYVyigvYi14wOk9xyZeUi9c6yCOpHxHy5_lX55vG52VizstubMOJIJNTKNiKNEeUCLRFciYtq9Q6CDd105MEpJPuBaUlN2prLqKTNpOmAj1ApXK1a-RQ-5B4cUvECtVOixu=w1280-h720-k-no';

// Foto da fachada / entrada principal
export const FACADE_IMAGE = 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlB2jnCBnUpcVSbNNh4-ife_2uVOW7o44lZ0Eg-if1mXskmJ5hYPrRfzNSzSqK0CC9Orwb0SEPS6ZfoxCX90Yy0jnVKERaXUv1rRB-DPXU9z0bjgfhtHoU76i-Mr0zG4ViGo35g=w1280-h720-k-no';

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'gal-panoramica',
    url: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm3wuYVyigvYi14wOk9xyZeUi9c6yCOpHxHy5_lX55vG52VizstubMOJIJNTKNiKNEeUCLRFciYtq9Q6CDd105MEpJPuBaUlN2prLqKTNpOmAj1ApXK1a-RQ-5B4cUvECtVOixu=w1280-h720-k-no',
    alt: 'Vista aérea panorâmica do Espaço Mais Festa com piscina e salão',
    title: 'Vista Panorâmica Geral (Piscina & Salão)',
    category: 'aereo',
    categoryLabel: 'Vista Panorâmica',
    caption: 'Visão completa de cima do complexo: piscina cristalina com deck, salão amplo integrado e área de confraternização.',
  },
  {
    id: 'gal-brinquedos',
    url: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmrywEHCyQ2Sjnjl6wrg7NoP2dJo7-_DgPilr7KId0ia51GU6lArUqiC4tAv0QawoW3fVmbRfhlfX_v_x3IvukYmhH_m78XFgFIhiRXyYMNwbgXq9Ik_BneWxiuzowrr7bDpiTj=w800-k-no',
    alt: 'Área de brinquedos no Espaço Mais Festa',
    title: 'Área Kids & Brinquedos',
    category: 'kids',
    categoryLabel: 'Área Kids',
    caption: 'Espaço com brinquedos para diversão segura e entretenimento das crianças durante todo o evento.',
  },
  {
    id: 'gal-salao',
    url: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlMj1bGZxmjK6iCyfHKlHREe4sZFbrjfzKo2DUnZ_8By2QzVKPfMYs1ez73gDaCmgdjNViMjXG_jfXL5yvvUqbJtpdIs12fppQROgSCFqdKWCIW91z9OPmL0-cFMpIU9pTJZqgPkQ=w800-k-no',
    alt: 'Espaço principal do salão de eventos',
    title: 'Salão de Eventos Amplo',
    category: 'salao',
    categoryLabel: 'Salão Social',
    caption: 'Estrutura versátil e arejada para montagem de mesas, pista de dança, buffet e decorações temáticas.',
  },
  {
    id: 'gal-noturno',
    url: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWktXvyfv9Q64RGo7_kiU0w13ZKr6WwKmWzSvyasK582M_dk4CEfKLV2CCFUlOqtLUo3uNDASnWGfCOWUgd49wSh3QCKMKYbl8OaAQacg0I14EBevxij4OrQ_28b5Aics6UR8aQubw=w1280-h720-k-no',
    alt: 'Espaço Mais Festa à noite com iluminação ambiente',
    title: 'Iluminação Cênica Noturna',
    category: 'noturno',
    categoryLabel: 'Noite & Luzes',
    caption: 'Iluminação charmosa e envolvente ao redor da piscina e salão para festas noturnas inesquecíveis.',
  },
  {
    id: 'gal-interior',
    url: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkisTGRlkc-0BT_MXC6c7raG-0m3GC9zQlTopg7eE0brmffqQJMQ0ywf1udUBYnfs8_PZAX-iiY4VKbwk_w7t5RO0VzSQx095UFcZU60RGrIiU_ButTQfq-bxbf_gKttta-samApw=w800-k-no',
    alt: 'Interior elegante do Espaço Mais Festa',
    title: 'Ambiente Interior Sofisticado',
    category: 'interior',
    categoryLabel: 'Design & Conforto',
    caption: 'Espaço limpo, agradável e bem equipado para recepcionar seus convidados com total conforto.',
  },
  {
    id: 'gal-festa',
    url: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWldgmyPSjvErElo0nuR0-MoYEEXLvuB-0nZQnIHZ-GvnD_2x1W8S3dVBL53uql-6nO7FhC6HRARths3R-0nKOtVqI9wGoWeTMrNlIdmzM1AK8PehpjaR_-mTJ8ahw1_pwsUe_K3dQ=w800-k-no',
    alt: 'Festa animada acontecendo no Espaço Mais Festa',
    title: 'Celebrações & Momentos Únicos',
    category: 'festa',
    categoryLabel: 'Eventos Reais',
    caption: 'Comemorações cheias de alegria e energia compartilhadas entre amigos e familiares em Balsas - MA.',
  },
  {
    id: 'gal-fachada',
    url: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlB2jnCBnUpcVSbNNh4-ife_2uVOW7o44lZ0Eg-if1mXskmJ5hYPrRfzNSzSqK0CC9Orwb0SEPS6ZfoxCX90Yy0jnVKERaXUv1rRB-DPXU9z0bjgfhtHoU76i-Mr0zG4ViGo35g=w1280-h720-k-no',
    alt: 'Fachada e acesso do Espaço Mais Festa',
    title: 'Fachada & Recepção do Espaço',
    category: 'salao',
    categoryLabel: 'Entrada',
    caption: 'Fácil localização em Balsas com acesso prático para todos os seus convidados.',
  },
];

export const DIFFERENTIALS: Differential[] = [
  {
    id: 'diff-piscina',
    title: 'Piscina Exclusiva',
    tagline: 'Refrescância & Lazer',
    description: 'Piscina cristalina com deck para festas ensolaradas, pool parties ou ambientação elegante com iluminação especial à noite.',
    iconName: 'Waves',
    highlights: ['Deck com espaço para espreguiçadeiras', 'Segurança para todas as idades', 'Perfeito para fotos deslumbrantes'],
    badge: 'Destaque Mais Procurado',
    accentColor: 'pink',
  },
  {
    id: 'diff-cozinha',
    title: 'Cozinha Equipada',
    tagline: 'Praticidade para Seu Buffet',
    description: 'Espaço funcional completo para o preparo de refeições, conservação de bebidas em freezers e suporte total aos seus fornecedores de buffet.',
    iconName: 'ChefHat',
    highlights: ['Freezers e geladeiras espaçosos', 'Bancadas amplas de higienização', 'Área para churrasco e apoio térmico'],
    badge: 'Infraestrutura Completa',
    accentColor: 'orange',
  },
  {
    id: 'diff-espaco',
    title: 'Ambiente Amplo & Arejado',
    tagline: 'Liberdade & Conforto',
    description: 'Salão espaçoso com excelente circulação de ar, capacidade confortável para múltiplos formatos de evento, pista de dança e área kids.',
    iconName: 'Maximize2',
    highlights: ['Layout flexível para mesas e decorações', 'Espaço kids integrado para tranquilidade', 'Acessibilidade e banheiros modernos'],
    badge: 'Capacidade & Versatilidade',
    accentColor: 'pink',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Mariana Silveira',
    eventType: 'Casamento Intimista',
    rating: 5,
    date: 'Há 2 semanas',
    comment: 'O Espaço Mais Festa superou todas as nossas expectativas! A iluminação noturna com a piscina ao fundo deixou as fotos do meu casamento maravilhosas. Todos os convidados elogiaram!',
    verified: true,
  },
  {
    id: 'test-2',
    name: 'Rodrigo Lima & Família',
    eventType: 'Aniversário de 30 Anos',
    rating: 5,
    date: 'Mês passado',
    comment: 'Ambiente incrível, cozinha super prática para nosso buffet e a piscina estava impecável. Com certeza alugaremos novamente nos próximos eventos da família.',
    verified: true,
  },
  {
    id: 'test-3',
    name: 'Carla Beatriz Mendes',
    eventType: 'Chá Revelação',
    rating: 5,
    date: 'Há 1 mês',
    comment: 'Espaço perfeito para o chá revelação do meu filho! A área ampla permitiu montar um cenário lindo de balões e os brinquedos mantiveram as crianças entretidas a festa inteira.',
    verified: true,
  },
];

export const EVENT_TYPES = [
  'Casamento / Noivado',
  'Aniversário (18 a 35 anos)',
  'Chá Revelação / Bebê',
  'Confraternização & Corporativo',
  'Pool Party & Lazer',
  'Outro Evento Especial',
];

export function generateWhatsAppUrl(customMessage?: string): string {
  const defaultText = 'Olá! Gostaria de consultar disponibilidade de datas e orçamento para o Espaço Mais Festa.';
  const text = encodeURIComponent(customMessage || defaultText);
  return `https://wa.me/5599988418393?text=${text}`;
}
