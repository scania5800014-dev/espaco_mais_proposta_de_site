/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MessageCircle, Star, Sparkles, MapPin, Waves, ChefHat, Maximize2, ArrowDown } from 'lucide-react';
import { CONTACT_INFO, HERO_IMAGE, generateWhatsAppUrl } from '../data';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      aria-label="Destaque Principal"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Image com Overlay Escuro Calibrado para Alta Nitidez e Legibilidade */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <img
          src={HERO_IMAGE}
          alt="Espaço Mais Festa - Vista Panorâmica do Salão e Piscina"
          className="w-full h-full object-cover object-center scale-100 filter brightness-[0.4] contrast-[1.05] transition-all duration-700"
          referrerPolicy="no-referrer"
        />
        {/* Camada gradiente escuro e iluminação ambiente neon */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080f] via-[#08080f]/75 to-[#08080f]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pink-600/25 via-orange-600/10 to-transparent" />
      </div>

      {/* Cyberpunk grid subtle background pattern */}
      <div className="absolute inset-0 -z-10 opacity-15 pointer-events-none bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Glowing neon decorative blurs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Badge superior de credibilidade / Localização */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-pink-500/30 backdrop-blur-md shadow-lg shadow-pink-500/10 mb-6 animate-fade-in">
          <span className="flex items-center text-amber-400 text-xs sm:text-sm font-semibold">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400 mr-1 inline" />
            {CONTACT_INFO.googleRating} no Google
          </span>
          <span className="text-zinc-500">•</span>
          <span className="text-xs sm:text-sm text-zinc-300 font-medium">
            Mais de 30 avaliações positivas
          </span>
          <span className="text-zinc-500 hidden sm:inline">•</span>
          <span className="hidden sm:inline-flex items-center gap-1 text-xs text-pink-400 font-medium">
            <MapPin className="w-3.5 h-3.5" />
            Balsas - MA
          </span>
        </div>

        {/* H1 Principal com Tipografia Marcante & Limpa */}
        <h1
          id="hero-title"
          className="font-heading font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-white leading-[1.15] max-w-4xl"
        >
          Espaço Mais Festa:{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2a85] via-[#ff5252] to-[#ff6b00] drop-shadow-[0_0_20px_rgba(255,42,133,0.35)]">
            Seu Evento Inesquecível
          </span>{' '}
          Começa Aqui!
        </h1>

        {/* Subtítulo impactante */}
        <p
          id="hero-subtitle"
          className="mt-6 text-base sm:text-xl md:text-2xl text-zinc-300 max-w-3xl font-normal leading-relaxed"
        >
          Piscina, Cozinha Equipada e Ambiente Amplo para Celebrar Momentos Únicos.
        </p>

        {/* Vitrine da Foto Panorâmica Principal em Destaque */}
        <div className="mt-8 w-full max-w-3xl relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#ff2a85] to-[#ff6b00] rounded-3xl blur-md opacity-40 group-hover:opacity-75 transition duration-500" />
          <div className="relative rounded-2xl overflow-hidden border border-pink-500/40 bg-[#121222] shadow-2xl shadow-pink-500/10">
            <img
              src={HERO_IMAGE}
              alt="Vista Panorâmica Principal do Espaço Mais Festa com piscina e salão"
              className="w-full h-56 sm:h-72 md:h-80 object-cover object-center group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            {/* Overlay sutil na parte inferior com descrição */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between pointer-events-none">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 border border-white/20 text-white text-xs sm:text-sm font-semibold backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
                Vista Panorâmica Principal • Piscina & Salão
              </span>
              <span className="hidden sm:inline-block text-xs text-zinc-300 bg-black/50 px-2.5 py-1 rounded-md backdrop-blur-sm">
                Balsas, MA
              </span>
            </div>
          </div>
        </div>

        {/* Diferenciais rápidos em pílulas */}
        <div className="mt-8 flex flex-wrap justify-center gap-2.5 sm:gap-4 max-w-2xl">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#121220]/80 border border-pink-500/20 text-zinc-200 text-xs sm:text-sm font-medium backdrop-blur-sm">
            <Waves className="w-4 h-4 text-pink-400" />
            <span>Piscina com Deck</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#121220]/80 border border-orange-500/20 text-zinc-200 text-xs sm:text-sm font-medium backdrop-blur-sm">
            <ChefHat className="w-4 h-4 text-orange-400" />
            <span>Cozinha Equipada</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#121220]/80 border border-pink-500/20 text-zinc-200 text-xs sm:text-sm font-medium backdrop-blur-sm">
            <Maximize2 className="w-4 h-4 text-pink-400" />
            <span>Salão Amplo & Arejado</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#121220]/80 border border-emerald-500/20 text-zinc-200 text-xs sm:text-sm font-medium backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-emerald-300">Aberto 24 Horas</span>
          </div>
        </div>

        {/* CTA Principal com Botão Grande WhatsApp */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
          <a
            id="hero-cta-whatsapp"
            href={generateWhatsAppUrl('Olá! Quero reservar uma data no Espaço Mais Festa e gostaria de saber disponibilidade e valores.')}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fale Conosco no WhatsApp"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 sm:px-9 sm:py-4.5 rounded-2xl text-base sm:text-lg font-bold text-white bg-gradient-to-r from-[#ff2a85] to-[#ff6b00] hover:from-[#ff1a7a] hover:to-[#ff5e00] shadow-[0_0_30px_rgba(255,42,133,0.4)] hover:shadow-[0_0_40px_rgba(255,107,0,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 w-full sm:w-auto"
          >
            <div className="p-1 rounded-lg bg-white/20">
              <MessageCircle className="w-6 h-6 fill-white text-white" />
            </div>
            <span>Fale Conosco no WhatsApp</span>
            <Sparkles className="w-5 h-5 text-amber-200 group-hover:rotate-45 transition-transform" />
          </a>

          <a
            href="#espaco"
            id="hero-secondary-btn"
            className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-sm sm:text-base font-semibold text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-pink-500/40 backdrop-blur-md transition-all duration-200 w-full sm:w-auto"
          >
            <span>Conhecer o Espaço</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-pink-400" />
          </a>
        </div>

        {/* Micro garantia de resposta rápida */}
        <p className="mt-4 text-xs text-zinc-400 font-medium flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          Atendimento rápido pelo WhatsApp • Reserve com antecedência para garantir seu dia!
        </p>
      </div>
    </section>
  );
};
