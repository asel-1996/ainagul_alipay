import React from 'react';
import { MessageCircle, ArrowRight, ShieldCheck, Zap, Instagram } from 'lucide-react';
import { CONTACT_INFO, openWhatsAppDirect } from '../data/content';
import { useLanguage } from '../context/LanguageContext';
import { sound } from '../utils/sound';

interface FinalCtaSectionProps {
  onOpenOrderModal: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenOrderModal }) => {
  const { language, t } = useLanguage();

  return (
    <section className="py-16 sm:py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#111827] rounded-[28px] p-8 sm:p-12 text-center text-white space-y-6 shadow-md">
          
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-800 text-[#C9A227] text-xs font-bold uppercase tracking-wider mx-auto">
            <Zap className="w-3.5 h-3.5" />
            <span>{language === 'ru' ? 'Быстро и надежно' : language === 'kz' ? 'Жылдам және сенімді' : 'Тез жана ишенимдүү'}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight text-white max-w-xl mx-auto">
            {language === 'ru' 
              ? 'Готовы совершить обмен юаней?' 
              : language === 'kz' 
              ? 'Юань айырбастауға дайынсыз ба?' 
              : 'Юань алмаштырууга даярсызбы?'}
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-lg mx-auto">
            {language === 'ru'
              ? 'Напишите нам прямо сейчас и получите юани на ваш Alipay или WeChat в течение 5–10 минут.'
              : language === 'kz'
              ? 'Бізге қазір жазыңыз және 5–10 минутта Alipay немесе WeChat шотыңызға юань алыңыз.'
              : 'Азыр бизге жазыңыз жана 5–10 мүнөттүн ичинде Alipay же WeChat капчыгыңызга юань алыңыз.'}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            
            {/* WhatsApp CTA */}
            <button
              onClick={() => {
                sound.playClick();
                openWhatsAppDirect(undefined, undefined, undefined, language);
              }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#16A34A] hover:bg-[#15803D] font-bold text-xs uppercase tracking-wider text-white shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>{language === 'ru' ? 'Написать в WhatsApp' : language === 'kz' ? 'WhatsApp-қа жазу' : 'WhatsApp-ка жазуу'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Instagram Link */}
            <a
              href={CONTACT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Instagram className="w-4 h-4 text-pink-400" />
              <span>Instagram: {CONTACT_INFO.instagram}</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>0% {language === 'ru' ? 'комиссия' : language === 'kz' ? 'комиссия' : 'комиссия'}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{language === 'ru' ? '5–10 минут' : language === 'kz' ? '5–10 минут' : '5–10 мүнөт'}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{language === 'ru' ? 'Гарантия 100%' : language === 'kz' ? '100% Кепілдік' : '100% Кепилдик'}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
