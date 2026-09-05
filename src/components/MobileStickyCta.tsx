import React from 'react';
import { MessageCircle, Instagram } from 'lucide-react';
import { CONTACT_INFO, openWhatsAppDirect } from '../data/content';
import { useRates } from '../context/RateContext';
import { useLanguage } from '../context/LanguageContext';
import { sound } from '../utils/sound';

interface MobileStickyCtaProps {
  onOpenOrderModal: () => void;
}

export const MobileStickyCta: React.FC<MobileStickyCtaProps> = ({ onOpenOrderModal }) => {
  const { rates } = useRates();
  const { language, t } = useLanguage();

  return (
    <div
      id="mobile-sticky-cta-container"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 shadow-lg safe-area-pb"
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        
        {/* Rate Summary Pill */}
        <div className="flex-1 bg-[#F7F8FA] border border-slate-200 rounded-xl px-3 py-2 flex flex-col justify-center">
          <div className="text-[10px] uppercase font-bold text-[#6B7280] leading-none">
            {language === 'ru' ? 'Курс CNY:' : language === 'kz' ? 'CNY бағамы:' : 'Курс CNY:'}
          </div>
          <div className="text-xs font-black text-[#111827] font-display mt-0.5 leading-none">
            {rates.sellRate.toFixed(2)} сом
          </div>
        </div>

        {/* Instagram Direct Link Button */}
        <a
          href={CONTACT_INFO.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => sound.playClick()}
          className="p-2.5 bg-[#F7F8FA] hover:bg-slate-100 text-pink-600 border border-slate-200 rounded-xl transition-colors cursor-pointer flex items-center justify-center"
          aria-label="Instagram"
          title="Instagram"
        >
          <Instagram className="w-4 h-4" />
        </a>

        {/* Main WhatsApp Button */}
        <button
          onClick={() => {
            sound.playClick();
            openWhatsAppDirect(undefined, undefined, undefined, language);
          }}
          id="mobile-sticky-order-button"
          className="flex-2 bg-[#16A34A] hover:bg-[#15803D] text-white py-2.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider shadow-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <MessageCircle className="w-4 h-4 fill-white/20" />
          <span>{language === 'ru' ? 'Обменять в WA' : language === 'kz' ? 'WA-да айырбастау' : 'Алмаштыруу'}</span>
        </button>

      </div>
    </div>
  );
};
