/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Sparkles, MessageCircle, Menu, X, Clock, MapPin } from 'lucide-react';
import { CONTACT_INFO, generateWhatsAppUrl } from '../data';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'O Espaço', href: '#espaco' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b0b14]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3'
          : 'bg-gradient-to-b from-[#08080f]/90 via-[#08080f]/50 to-transparent py-5'
      }`}
    >
      {/* Top micro bar for quick info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-1 hidden md:flex items-center justify-between text-xs text-zinc-400 font-medium tracking-wide">
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-1.5 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            {CONTACT_INFO.hours}
          </span>
          <span className="inline-flex items-center gap-1 text-zinc-400 hover:text-zinc-300">
            <MapPin className="w-3.5 h-3.5 text-pink-500" />
            Catumbi, Balsas - MA
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-zinc-400">Avaliações Google:</span>
          <span className="inline-flex items-center gap-1 text-amber-400 font-bold">
            ★ 4.6 (30+ avaliações)
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logotipo textual com vibe futurista/neon */}
        <a
          href="#home"
          id="logo-brand"
          className="group flex items-center gap-2.5 text-decoration-none focus:outline-none focus:ring-2 focus:ring-pink-500 rounded-lg p-1"
          aria-label="Espaço Mais Festa - Página Inicial"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff2a85] to-[#ff6b00] p-[1.5px] shadow-lg shadow-pink-500/20 group-hover:shadow-pink-500/40 transition-all">
            <div className="w-full h-full bg-[#0d0d18] rounded-[10px] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-pink-400 group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight text-white uppercase group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#ff2a85] group-hover:to-[#ff6b00] transition-all">
              Espaço Mais Festa
            </span>
            <span className="text-[10px] tracking-[0.2em] font-semibold text-pink-400 uppercase -mt-0.5">
              Salão de Eventos • Balsas MA
            </span>
          </div>
        </a>

        {/* Navegação Principal Desktop */}
        <nav
          id="desktop-nav"
          aria-label="Navegação Principal"
          className="hidden md:flex items-center gap-1.5 lg:gap-3 bg-[#131322]/70 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-3 py-1.5 rounded-full text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Botão CTA Flutuante/Destaque "Reserve Agora" */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            id="header-cta-whatsapp"
            href={generateWhatsAppUrl('Olá! Gostaria de consultar reservas e disponibilidade de datas para o Espaço Mais Festa.')}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Reserve Agora pelo WhatsApp"
            className="group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#ff2a85] to-[#ff6b00] hover:from-[#ff1a7a] hover:to-[#ff5e00] shadow-lg shadow-pink-500/25 hover:shadow-pink-500/45 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <MessageCircle className="w-4 h-4 fill-current group-hover:animate-bounce" />
            <span>Reserve Agora</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          id="mobile-menu-toggle"
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-zinc-200 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-pink-500"
          aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="md:hidden mt-3 mx-4 p-5 rounded-2xl bg-[#0f0f1c]/95 border border-pink-500/30 backdrop-blur-xl shadow-2xl shadow-pink-950/40 animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="flex flex-col space-y-3 mb-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2.5 rounded-xl text-base font-medium text-zinc-200 hover:text-white hover:bg-pink-500/15 border border-transparent hover:border-pink-500/30 transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <div className="text-xs text-zinc-400 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                {CONTACT_INFO.hours}
              </span>
              <span className="text-amber-400 font-semibold">★ 4.6 no Google</span>
            </div>
            <a
              href={generateWhatsAppUrl('Olá! Gostaria de falar com vocês sobre reserva do Espaço Mais Festa.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl text-center font-bold text-white bg-gradient-to-r from-[#ff2a85] to-[#ff6b00] flex items-center justify-center gap-2 shadow-lg shadow-pink-500/30"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Reserve Agora no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
