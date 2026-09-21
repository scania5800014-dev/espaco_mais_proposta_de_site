/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Star, CheckCircle, Quote, Sparkles } from 'lucide-react';
import { CONTACT_INFO, TESTIMONIALS } from '../data';

export const Testimonials: React.FC = () => {
  return (
    <section
      id="avaliacoes"
      aria-label="Avaliações dos Clientes"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a14] border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3">
              <Sparkles className="w-4 h-4" />
              Credibilidade Comprovada
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              O Que Dizem Quem Já Fez a Festa Aqui
            </h2>
            <p className="mt-2 text-zinc-400 text-sm sm:text-base">
              Mais de 30 famílias e aniversariantes já celebraram momentos inesquecíveis conosco em Balsas.
            </p>
          </div>

          {/* Nota Média Card */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#131322] border border-white/10 shadow-lg shrink-0">
            <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-gradient-to-br from-[#ff2a85] to-[#ff6b00] text-white">
              <span className="font-heading font-extrabold text-2xl leading-none">
                {CONTACT_INFO.googleRating}
              </span>
              <span className="text-[10px] font-bold uppercase mt-0.5">Google</span>
            </div>
            <div>
              <div className="flex text-amber-400 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs font-semibold text-zinc-200">
                Mais de 30 avaliações 5 estrelas
              </p>
              <p className="text-[11px] text-zinc-400">
                100% de satisfação e recomendação
              </p>
            </div>
          </div>
        </div>

        {/* Grade de Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="relative p-6 sm:p-7 rounded-2xl bg-[#121222]/80 border border-white/10 hover:border-pink-500/30 transition-all shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-pink-500/40" />
                </div>

                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed italic mb-6">
                  "{test.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-white text-sm">
                    {test.name}
                  </h3>
                  <p className="text-xs text-pink-400 font-medium">
                    {test.eventType}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Verificado</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
