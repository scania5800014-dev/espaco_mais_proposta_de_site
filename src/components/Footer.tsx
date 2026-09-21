/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MapPin, Clock, Phone, MessageCircle, Instagram, Sparkles, Navigation, ExternalLink } from 'lucide-react';
import { CONTACT_INFO, generateWhatsAppUrl } from '../data';

export const Footer: React.FC = () => {
  const secondaryLinks = [
    { label: 'Home', href: '#home' },
    { label: 'O Espaço', href: '#espaco' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      id="main-footer"
      className="relative bg-[#06060c] text-zinc-300 pt-20 pb-12 px-4 sm:px-6 lg:px-8 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* H2 solicitado semanticamente */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3">
            <Navigation className="w-4 h-4" />
            Localização & Contato
          </div>
          <h2
            id="footer-heading"
            className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight"
          >
            Onde Nos Encontrar
          </h2>
          <p className="mt-2 text-zinc-400 text-sm sm:text-base">
            Fácil acesso em Balsas - MA, com estrutura pronta para receber seus convidados a qualquer momento.
          </p>
        </div>

        {/* Grid Principal: Detalhes de Contato + Mapa Interativo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Coluna Esquerda: Informações detalhadas */}
          <div className="lg:col-span-5 space-y-6">
            {/* Endereço */}
            <div className="p-5 rounded-2xl bg-[#10101d] border border-white/10 hover:border-pink-500/30 transition-colors">
              <div className="flex items-start gap-3.5">
                <div className="p-3 rounded-xl bg-pink-500/15 text-pink-400 border border-pink-500/20 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Endereço</h3>
                  <p className="mt-1 text-sm text-zinc-300 font-medium leading-relaxed">
                    {CONTACT_INFO.address}
                  </p>
                  <a
                    href={CONTACT_INFO.mapsDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-pink-400 hover:text-pink-300 font-semibold mt-2.5 transition-colors"
                  >
                    <span>Abrir no aplicativo Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Horário */}
            <div className="p-5 rounded-2xl bg-[#10101d] border border-white/10 hover:border-orange-500/30 transition-colors">
              <div className="flex items-start gap-3.5">
                <div className="p-3 rounded-xl bg-orange-500/15 text-orange-400 border border-orange-500/20 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Horário de Funcionamento</h3>
                  <p className="mt-1 text-sm text-emerald-400 font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    {CONTACT_INFO.hours}
                  </p>
                  <p className="text-xs text-zinc-400 mt-1">
                    Atendimento e agendamentos flexíveis para o seu evento.
                  </p>
                </div>
              </div>
            </div>

            {/* Canais de Contato */}
            <div className="p-5 rounded-2xl bg-[#10101d] border border-white/10 space-y-3.5">
              <h3 className="font-bold text-white text-base mb-3">Canais Oficiais</h3>

              {/* WhatsApp */}
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-pink-500/10 border border-white/5 hover:border-pink-500/30 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-400 block">WhatsApp Oficial</span>
                    <span className="text-sm font-bold text-white group-hover:text-pink-300 transition-colors">
                      {CONTACT_INFO.phoneDisplay}
                    </span>
                  </div>
                </div>
                <span className="text-xs text-emerald-400 font-medium">Conversar →</span>
              </a>

              {/* Telefone */}
              <a
                href={`tel:+${CONTACT_INFO.phoneRaw}`}
                className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-400 block">Ligação Direta</span>
                    <span className="text-sm font-bold text-white">
                      {CONTACT_INFO.phoneDisplay}
                    </span>
                  </div>
                </div>
                <span className="text-xs text-zinc-400 group-hover:text-white">Ligar</span>
              </a>

              {/* Instagram */}
              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-pink-500/10 border border-white/5 hover:border-pink-500/30 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-tr from-amber-500/20 to-pink-500/20 text-pink-400">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-400 block">Instagram</span>
                    <span className="text-sm font-bold text-white group-hover:text-pink-300 transition-colors">
                      {CONTACT_INFO.instagramHandle}
                    </span>
                  </div>
                </div>
                <span className="text-xs text-pink-400 font-medium">Seguir →</span>
              </a>
            </div>
          </div>

          {/* Coluna Direita: Mapa Interativo do Google Maps */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#10101d] flex flex-col">
              <div className="p-4 border-b border-white/10 flex items-center justify-between bg-[#121222]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-pink-400" />
                  <span className="text-xs font-semibold text-zinc-200">
                    Localização: Balsas - MA (Coordenadas: -7.5387352, -46.0547976)
                  </span>
                </div>
                <a
                  href={CONTACT_INFO.mapsDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-pink-400 hover:text-pink-300 font-medium inline-flex items-center gap-1"
                >
                  <span>Ver em tela cheia</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Embedded Google Maps iframe */}
              <div className="w-full h-80 sm:h-96 relative bg-zinc-900">
                <iframe
                  title="Mapa interativo de localização do Espaço Mais Festa em Balsas - MA"
                  src={CONTACT_INFO.mapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full filter invert-[85%] hue-rotate-180 contrast-125"
                />
              </div>

              <div className="p-3 bg-[#0c0c16] text-center text-xs text-zinc-400 border-t border-white/5">
                R. Oito, 333 - Catumbi, Balsas - MA, 65800-000 • Ponto de referência e fácil estacionamento
              </div>
            </div>
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logotipo textual do rodapé */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#ff2a85] to-[#ff6b00] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div>
              <span className="font-heading font-extrabold text-white text-base tracking-tight uppercase">
                Espaço Mais Festa
              </span>
              <p className="text-[11px] text-zinc-500">
                Salão de Eventos • Piscina • Cozinha • Balsas - MA
              </p>
            </div>
          </div>

          {/* Navegação Secundária */}
          <nav
            id="footer-nav"
            aria-label="Navegação Secundária do Rodapé"
            className="flex flex-wrap items-center justify-center gap-6"
          >
            {secondaryLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs sm:text-sm font-medium text-zinc-400 hover:text-pink-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Copyright solicitado */}
          <div className="text-xs text-zinc-500 text-center md:text-right">
            © 2026 Espaço Mais Festa. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};
