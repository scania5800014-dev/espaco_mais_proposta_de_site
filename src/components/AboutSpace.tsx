/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Waves, ChefHat, Maximize2, CheckCircle2, Sparkles, MessageCircle, Star, HeartHandshake } from 'lucide-react';
import { DIFFERENTIALS, generateWhatsAppUrl } from '../data';

export const AboutSpace: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Waves':
        return <Waves className="w-7 h-7 text-pink-400" />;
      case 'ChefHat':
        return <ChefHat className="w-7 h-7 text-orange-400" />;
      case 'Maximize2':
        return <Maximize2 className="w-7 h-7 text-pink-400" />;
      default:
        return <Sparkles className="w-7 h-7 text-pink-400" />;
    }
  };

  const eventCategories = [
    { label: 'Casamentos', desc: 'Romantismo & Estilo' },
    { label: 'Chás Revelação', desc: 'Emoção & Cenografia' },
    { label: 'Aniversários', desc: 'Pool party & Pista de Dança' },
    { label: 'Confraternizações', desc: 'Espaço Gourmet & Lazer' },
  ];

  return (
    <section
      id="espaco"
      aria-label="Sobre o Espaço"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a14] border-t border-white/5"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-pink-600/10 to-orange-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-4 h-4" />
            O Salão Perfeito em Balsas - MA
          </div>

          <h2
            id="about-heading"
            className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight"
          >
            Descubra o <span className="neon-gradient-text">Espaço Mais Festa</span>
          </h2>

          <p
            id="about-text"
            className="mt-6 text-base sm:text-lg text-zinc-300 leading-relaxed font-normal"
          >
            No Espaço Mais Festa, você encontra um ambiente completo para o seu evento! Com piscina, cozinha e um espaço amplo, perfeito para casamentos, chás revelação, aniversários e muito mais. Com mais de 30 avaliações positivas e uma nota de 4.6, somos a escolha ideal para transformar sua celebração em realidade.
          </p>

          {/* Social Proof Highlight Bar */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-6 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <div className="flex items-center gap-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="font-bold text-white text-sm">4.6 de avaliação</span>
            </div>
            <span className="text-zinc-600 hidden sm:inline">|</span>
            <div className="flex items-center gap-2 text-zinc-300 text-sm">
              <HeartHandshake className="w-4 h-4 text-pink-400" />
              <span>+30 clientes satisfeitos</span>
            </div>
          </div>
        </div>

        {/* 3 Diferenciais Principais (Piscina, Cozinha, Amplo Espaço) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {DIFFERENTIALS.map((diff) => {
            const isPink = diff.accentColor === 'pink';
            return (
              <article
                key={diff.id}
                id={diff.id}
                className="relative rounded-2xl p-7 transition-all duration-300 bg-[#121222]/90 border border-white/10 hover:border-pink-500/40 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl hover:shadow-pink-950/30 flex flex-col justify-between group overflow-hidden"
              >
                {/* Neon line decoration on top */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
                    isPink ? 'from-pink-500 to-rose-400' : 'from-orange-500 to-amber-400'
                  }`}
                />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`p-3.5 rounded-xl ${
                        isPink
                          ? 'bg-pink-500/15 border border-pink-500/30 shadow-lg shadow-pink-500/15'
                          : 'bg-orange-500/15 border border-orange-500/30 shadow-lg shadow-orange-500/15'
                      }`}
                    >
                      {getIcon(diff.iconName)}
                    </div>
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                        isPink
                          ? 'bg-pink-500/10 text-pink-300 border-pink-500/20'
                          : 'bg-orange-500/10 text-orange-300 border-orange-500/20'
                      }`}
                    >
                      {diff.badge}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-2xl text-white group-hover:text-pink-300 transition-colors">
                    {diff.title}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mt-1 mb-3">
                    {diff.tagline}
                  </p>

                  <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                    {diff.description}
                  </p>

                  <ul className="space-y-2.5 mb-6 text-sm text-zinc-300">
                    {diff.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2
                          className={`w-4 h-4 mt-0.5 shrink-0 ${
                            isPink ? 'text-pink-400' : 'text-orange-400'
                          }`}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={generateWhatsAppUrl(`Olá! Gostaria de mais detalhes sobre o ${diff.title} do Espaço Mais Festa.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-pink-500/40 transition-all duration-200"
                >
                  <MessageCircle className="w-4 h-4 text-pink-400" />
                  <span>Consultar detalhes no WhatsApp</span>
                </a>
              </article>
            );
          })}
        </div>

        {/* Para que tipos de celebrações o espaço é ideal */}
        <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-[#141426] via-[#16162a] to-[#141426] border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center lg:text-left">
              <span className="text-pink-400 text-xs font-bold uppercase tracking-widest">
                Versatilidade Completa
              </span>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mt-1 mb-3">
                Estrutura sob medida para sua festa
              </h3>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Seja um casamento emocionante, um aniversário jovem e vibrante com piscina, um chá revelação com decoração temática ou confraternização corporativa, nós entregamos o cenário completo.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 w-full lg:w-auto shrink-0">
              {eventCategories.map((cat, i) => (
                <div
                  key={i}
                  className="px-5 py-3.5 rounded-2xl bg-black/40 border border-white/10 text-center flex flex-col items-center justify-center hover:border-pink-500/40 transition-colors"
                >
                  <span className="font-bold text-white text-sm sm:text-base">{cat.label}</span>
                  <span className="text-[11px] text-pink-400 font-medium">{cat.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
