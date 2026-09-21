/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSpace } from './components/AboutSpace';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#08080f] text-zinc-100 flex flex-col selection:bg-[#ff2a85] selection:text-white">
      {/* Header com Navegação Principal e CTA */}
      <Header />

      {/* Conteúdo Principal Semanticamente Estruturado */}
      <main id="main-content" className="flex-1">
        <Hero />
        <AboutSpace />
        <Gallery />
        <Testimonials />
        <CallToAction />
      </main>

      {/* Rodapé com Mapa, Dados e Links */}
      <Footer />

      {/* Botão Flutuante de Contato Rápido WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
