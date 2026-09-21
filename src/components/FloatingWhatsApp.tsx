/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { generateWhatsAppUrl, CONTACT_INFO } from '../data';

export const FloatingWhatsApp: React.FC = () => {
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  return (
    <div
      id="floating-whatsapp-container"
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end pointer-events-auto"
    >
      {/* Mini Tooltip convidativo */}
      {!tooltipDismissed && (
        <div className="mb-3 relative hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-[#121222] border border-pink-500/30 text-white text-xs shadow-2xl backdrop-blur-md animate-bounce">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span>Orçamentos e datas online no WhatsApp!</span>
          <button
            type="button"
            onClick={() => setTooltipDismissed(true)}
            className="text-zinc-400 hover:text-white p-0.5 ml-1"
            aria-label="Fechar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Botão Flutuante Pulsante */}
      <a
        id="floating-whatsapp-button"
        href={generateWhatsAppUrl('Olá! Gostaria de tirar dúvidas sobre o Espaço Mais Festa.')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp pelo botão flutuante"
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#25D366] to-[#128C7E] text-white shadow-[0_0_25px_rgba(37,211,102,0.45)] hover:shadow-[0_0_35px_rgba(37,211,102,0.7)] hover:scale-110 active:scale-95 transition-all duration-300"
      >
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none" />
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-white" />
      </a>
    </div>
  );
};
