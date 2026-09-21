/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Camera, ZoomIn, X, ChevronLeft, ChevronRight, MessageCircle, Sparkles } from 'lucide-react';
import { GALLERY_IMAGES, generateWhatsAppUrl } from '../data';
import { GalleryImage } from '../types';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [activeModalImage, setActiveModalImage] = useState<GalleryImage | null>(null);

  const categories = [
    { id: 'todos', label: 'Todas as Fotos' },
    { id: 'kids', label: 'Área Kids' },
    { id: 'salao', label: 'Salão Social' },
    { id: 'aereo', label: 'Visão Geral' },
    { id: 'noturno', label: 'Iluminação Noturna' },
    { id: 'interior', label: 'Interior' },
    { id: 'festa', label: 'Celebrações' },
  ];

  const filteredImages = selectedCategory === 'todos'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter((img) => img.category === selectedCategory);

  const openLightbox = (image: GalleryImage) => {
    setActiveModalImage(image);
  };

  const closeLightbox = () => {
    setActiveModalImage(null);
  };

  const nextImage = () => {
    if (!activeModalImage) return;
    const currentIndex = GALLERY_IMAGES.findIndex((img) => img.id === activeModalImage.id);
    const nextIdx = (currentIndex + 1) % GALLERY_IMAGES.length;
    setActiveModalImage(GALLERY_IMAGES[nextIdx]);
  };

  const prevImage = () => {
    if (!activeModalImage) return;
    const currentIndex = GALLERY_IMAGES.findIndex((img) => img.id === activeModalImage.id);
    const prevIdx = (currentIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;
    setActiveModalImage(GALLERY_IMAGES[prevIdx]);
  };

  return (
    <section
      id="galeria"
      aria-label="Galeria de Fotos"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#08080f] border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-4">
            <Camera className="w-4 h-4" />
            Ambientes & Celebrações
          </div>

          <h2
            id="gallery-heading"
            className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight"
          >
            Momentos Inesquecíveis em{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2a85] to-[#ff6b00]">
              Nossa Galeria
            </span>
          </h2>

          <p className="mt-4 text-zinc-300 text-base sm:text-lg">
            Conheça cada detalhe do nosso salão, piscina, iluminação cênica e áreas de lazer preparadas com carinho para o seu grande dia em Balsas, MA.
          </p>

          {/* Filtros de Categoria */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-[#ff2a85] to-[#ff6b00] text-white shadow-lg shadow-pink-500/20'
                    : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Responsivo de Imagens com Efeito Glassmorphism & Hover */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img) => (
            <div
              key={img.id}
              id={`gallery-item-${img.id}`}
              onClick={() => openLightbox(img)}
              className="group relative rounded-2xl overflow-hidden bg-[#121222] border border-white/10 hover:border-pink-500/40 cursor-pointer shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-pink-950/40 flex flex-col"
            >
              {/* Contêiner de Imagem com Aspect Ratio */}
              <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-black/50">
                <img
                  src={img.url}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />

                {/* Dark Overlay com Gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080f] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Tag de Categoria */}
                <span className="absolute top-3 left-3 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-pink-400 border border-pink-500/30">
                  {img.categoryLabel}
                </span>

                {/* Hover Zoom Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                  <div className="p-3.5 rounded-full bg-pink-500/80 text-white shadow-lg shadow-pink-500/50 transform scale-90 group-hover:scale-100 transition-transform">
                    <ZoomIn className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* Informações da Imagem em Glassmorphism Card */}
              <div className="p-5 flex-1 flex flex-col justify-between bg-[#121222]/90 backdrop-blur-sm">
                <div>
                  <h3 className="font-heading font-bold text-lg text-white group-hover:text-pink-300 transition-colors">
                    {img.title}
                  </h3>
                  <p className="mt-1 text-xs text-zinc-400 line-clamp-2">
                    {img.caption}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="text-zinc-500">Clique para ampliar</span>
                  <span className="text-pink-400 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Ver detalhes →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Interativo da Galeria */}
        <div className="mt-12 text-center">
          <p className="text-zinc-400 text-sm mb-4">
            Gostou do visual? Venha fazer uma visita presencial ou tire suas dúvidas!
          </p>
          <a
            href={generateWhatsAppUrl('Olá! Vi as fotos da galeria no site e gostaria de agendar uma visita ao Espaço Mais Festa.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-white/5 hover:bg-white/10 border border-pink-500/30 hover:border-pink-500 transition-all duration-200"
          >
            <MessageCircle className="w-4 h-4 text-pink-400" />
            <span>Agendar Visita ao Espaço no WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Lightbox Modal Interativo */}
      {activeModalImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeModalImage.title}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] bg-[#121222] border border-pink-500/30 rounded-3xl overflow-hidden shadow-2xl shadow-pink-950/50 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0e0e1a]">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/40">
                  {activeModalImage.categoryLabel}
                </span>
                <span className="text-sm font-semibold text-white truncate">
                  {activeModalImage.title}
                </span>
              </div>
              <button
                type="button"
                onClick={closeLightbox}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors"
                aria-label="Fechar visualizador"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Imagem Central com Navegação Anterior / Próxima */}
            <div className="relative flex-1 bg-black/80 flex items-center justify-center min-h-[350px] sm:min-h-[480px]">
              <img
                src={activeModalImage.url}
                alt={activeModalImage.alt}
                className="max-h-[60vh] w-auto max-w-full object-contain mx-auto"
                referrerPolicy="no-referrer"
              />

              <button
                type="button"
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 text-white hover:bg-pink-600 transition-colors border border-white/20"
                aria-label="Foto anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                type="button"
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 text-white hover:bg-pink-600 transition-colors border border-white/20"
                aria-label="Próxima foto"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Rodapé com Legenda & Botão de Contato */}
            <div className="p-5 sm:p-6 bg-[#0e0e1a] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-zinc-300 text-center sm:text-left">
                {activeModalImage.caption}
              </p>
              <a
                href={generateWhatsAppUrl(`Olá! Gostei da foto "${activeModalImage.title}" e queria mais informações sobre o espaço.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#ff2a85] to-[#ff6b00] hover:from-[#ff1a7a] hover:to-[#ff5e00] shadow-lg shadow-pink-500/25 shrink-0"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Quero Minha Festa Assim</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
