/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MessageCircle, Sparkles, Calendar, Users, Clock, Send, CheckCircle2 } from 'lucide-react';
import { EVENT_TYPES, CONTACT_INFO, generateWhatsAppUrl } from '../data';

export const CallToAction: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState(EVENT_TYPES[1]); // Aniversário default
  const [guestRange, setGuestRange] = useState('50 a 100 convidados');
  const [includePool, setIncludePool] = useState(true);
  const [includeKitchen, setIncludeKitchen] = useState(true);
  const [preferredPeriod, setPreferredPeriod] = useState('Fim de Semana (Tarde/Noite)');

  const buildCustomMessage = () => {
    return `Olá, Espaço Mais Festa!
Quero informações sobre reserva para o meu evento:
🎉 Tipo: ${selectedEvent}
👥 Estimativa: ${guestRange}
📅 Período de preferência: ${preferredPeriod}
🏊‍♂️ Uso da Piscina: ${includePool ? 'Sim' : 'Não'}
🍳 Uso da Cozinha: ${includeKitchen ? 'Sim' : 'Não'}

Gostaria de saber a disponibilidade de datas e o orçamento!`;
  };

  const handleDirectWhatsApp = () => {
    const url = generateWhatsAppUrl(buildCustomMessage());
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="contato"
      aria-label="Chamada para Ação Final"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#090913] border-t border-white/5 overflow-hidden"
    >
      {/* Glow ambient spots */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-pink-600/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-orange-600/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        <div className="rounded-3xl p-8 sm:p-12 lg:p-14 bg-gradient-to-b from-[#131326] via-[#10101f] to-[#0d0d1a] border border-pink-500/30 shadow-[0_0_50px_rgba(255,42,133,0.15)] relative overflow-hidden">
          {/* Neon accent top bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#ff2a85] via-[#ff5252] to-[#ff6b00]" />

          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-5">
              <Sparkles className="w-4 h-4" />
              Sua Celebração Começa Aqui
            </div>

            {/* H2 solicitado exatamente */}
            <h2
              id="cta-heading"
              className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight"
            >
              Pronto para Celebrar?{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2a85] to-[#ff6b00]">
                Reserve o Espaço Mais Festa!
              </span>
            </h2>

            {/* Texto solicitado exatamente */}
            <p
              id="cta-text"
              className="mt-6 text-base sm:text-lg md:text-xl text-zinc-300 font-normal leading-relaxed"
            >
              Venha conhecer um pouquinho do nosso espaço. E aí, já consegue imaginar sua festa sendo aqui? Para mais informações, converse conosco no WhatsApp.
            </p>
          </div>

          {/* Simulador Interativo Rápido de Reserva (Monta a Mensagem Automática) */}
          <div className="max-w-2xl mx-auto p-6 sm:p-8 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md mb-10">
            <h3 className="font-['Syne'] font-bold text-lg text-white mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-pink-400" />
              <span>Simule sua consulta de data em 1 clique:</span>
            </h3>

            <div className="space-y-4">
              {/* Tipo de Evento */}
              <div>
                <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                  Qual o seu evento?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {EVENT_TYPES.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setSelectedEvent(type)}
                      className={`px-3 py-2 rounded-xl text-xs font-medium text-center transition-all ${
                        selectedEvent === type
                          ? 'bg-pink-600 text-white font-bold shadow-md shadow-pink-600/30'
                          : 'bg-white/5 text-zinc-300 hover:bg-white/10 border border-white/5'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantidade estimada de convidados */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                    <Users className="w-3.5 h-3.5 inline mr-1 text-orange-400" />
                    Número de convidados:
                  </label>
                  <select
                    value={guestRange}
                    onChange={(e) => setGuestRange(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#161626] border border-white/10 text-white text-sm focus:outline-none focus:border-pink-500"
                  >
                    <option value="Até 50 convidados">Até 50 convidados (Íntimo)</option>
                    <option value="50 a 100 convidados">50 a 100 convidados (Médio)</option>
                    <option value="100 a 200 convidados">100 a 200 convidados (Grande)</option>
                    <option value="Mais de 200 convidados">Mais de 200 convidados</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                    <Clock className="w-3.5 h-3.5 inline mr-1 text-pink-400" />
                    Horário de Preferência:
                  </label>
                  <select
                    value={preferredPeriod}
                    onChange={(e) => setPreferredPeriod(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#161626] border border-white/10 text-white text-sm focus:outline-none focus:border-pink-500"
                  >
                    <option value="Fim de Semana (Tarde/Noite)">Fim de Semana (Tarde/Noite)</option>
                    <option value="Fim de Semana (Dia todo)">Fim de Semana (Dia todo)</option>
                    <option value="Dia de Semana (Noturno)">Dia de Semana (Noturno)</option>
                    <option value="Diurno / Pool Party">Diurno / Pool Party</option>
                  </select>
                </div>
              </div>

              {/* Opções inclusas */}
              <div className="flex flex-wrap gap-4 pt-2">
                <label className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includePool}
                    onChange={(e) => setIncludePool(e.target.checked)}
                    className="w-4 h-4 rounded text-pink-600 focus:ring-pink-500 border-zinc-700 bg-zinc-800"
                  />
                  <span>Incluir Piscina</span>
                </label>
                <label className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeKitchen}
                    onChange={(e) => setIncludeKitchen(e.target.checked)}
                    className="w-4 h-4 rounded text-pink-600 focus:ring-pink-500 border-zinc-700 bg-zinc-800"
                  />
                  <span>Incluir Cozinha Equipada</span>
                </label>
              </div>
            </div>
          </div>

          {/* Botão Grande WhatsApp Solicitado */}
          <div className="flex flex-col items-center justify-center">
            <button
              id="cta-button-whatsapp"
              type="button"
              onClick={handleDirectWhatsApp}
              className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl text-lg sm:text-xl font-extrabold text-white bg-gradient-to-r from-[#ff2a85] via-[#ff4d6d] to-[#ff6b00] hover:from-[#ff1a7a] hover:to-[#ff5e00] shadow-[0_0_35px_rgba(255,42,133,0.5)] hover:shadow-[0_0_50px_rgba(255,107,0,0.7)] hover:scale-105 active:scale-98 transition-all duration-300 w-full sm:w-auto cursor-pointer"
            >
              <div className="p-1.5 rounded-xl bg-white/20">
                <MessageCircle className="w-7 h-7 fill-white text-white" />
              </div>
              <span>Falar Conosco no WhatsApp Agora</span>
              <Send className="w-5 h-5 text-amber-200 group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-xs text-zinc-400">
              <span className="flex items-center gap-1 text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Resposta rápida no WhatsApp
              </span>
              <span>•</span>
              <span>Telefone: {CONTACT_INFO.phoneDisplay}</span>
              <span>•</span>
              <span className="text-zinc-400">Sem compromisso</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
