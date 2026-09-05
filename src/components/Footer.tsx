import React from 'react';
import { MessageCircle, Phone, Instagram, Lock } from 'lucide-react';
import { CONTACT_INFO, openWhatsAppDirect } from '../data/content';
import { sound } from '../utils/sound';
import { useRates } from '../context/RateContext';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onOpenLegalModal: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegalModal }) => {
  const { setIsAdminOpen } = useRates();
  const { language, t } = useLanguage();

  return (
    <footer className="bg-[#111827] text-slate-400 py-14 text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-slate-800">
          
          {/* Brand & Info */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center font-bold text-lg text-[#C9A227]">
                ¥
              </div>
              <span className="font-extrabold text-lg tracking-tight uppercase font-display text-white">
                Yuan<span className="text-[#D93025]">Pro</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              {language === 'ru'
                ? 'Сервис быстрого и безопасного обмена сомов на китайские юани (CNY) для Alipay и WeChat Pay.'
                : language === 'kz'
                ? 'Alipay және WeChat Pay әмияндары үшін сомды юаньге (CNY) жылдам әрі қауіпсіз айырбастау қызметі.'
                : 'Alipay жана WeChat капчыктары үчүн сомду юанга тез жана коопсуз алмаштыруу сервиси.'}
            </p>

            <div className="flex items-center gap-2.5 pt-1">
              <button
                onClick={() => {
                  sound.playClick();
                  openWhatsAppDirect(undefined, undefined, undefined, language);
                }}
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-[#16A34A] text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </button>

              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-pink-600 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={`tel:${CONTACT_INFO.phone.replace(/[^0-9+]/g, '')}`}
                onClick={() => sound.playClick()}
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center transition-colors"
                aria-label="Телефон"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3 font-display">
              {language === 'ru' ? 'Разделы' : language === 'kz' ? 'Бөлімдер' : 'Бөлүмдөр'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#exchange" onClick={() => sound.playClick()} className="hover:text-white transition-colors">
                  {language === 'ru' ? 'Обмен' : language === 'kz' ? 'Айырбастау' : 'Алмаштыруу'}
                </a>
              </li>
              <li>
                <a href="#how-it-works" onClick={() => sound.playClick()} className="hover:text-white transition-colors">
                  {language === 'ru' ? 'Как это работает' : language === 'kz' ? 'Қалай жұмыс істейді' : 'Кандай иштейт'}
                </a>
              </li>
              <li>
                <a href="#rates" onClick={() => sound.playClick()} className="hover:text-white transition-colors">
                  {language === 'ru' ? 'Курсы' : language === 'kz' ? 'Бағамдар' : 'Курстар'}
                </a>
              </li>
              <li>
                <a href="#trust" onClick={() => sound.playClick()} className="hover:text-white transition-colors">
                  {language === 'ru' ? 'Доверие' : language === 'kz' ? 'Сенім' : 'Ишеним'}
                </a>
              </li>
              <li>
                <a href="#faq" onClick={() => sound.playClick()} className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3 font-display">
              {language === 'ru' ? 'Информация' : language === 'kz' ? 'Ақпарат' : 'Маалымат'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => {
                    sound.playClick();
                    onOpenLegalModal('privacy');
                  }}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  {t.footer.privacyLink}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    sound.playClick();
                    onOpenLegalModal('terms');
                  }}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  {t.footer.termsLink}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    sound.playClick();
                    setIsAdminOpen(true);
                  }}
                  className="hover:text-[#C9A227] text-slate-500 transition-colors flex items-center gap-1.5 cursor-pointer pt-2"
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>{language === 'ru' ? 'Панель управления' : language === 'kz' ? 'Басқару панелі' : 'Башкаруу панели'}</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3 font-display">
              {language === 'ru' ? 'Контакты' : language === 'kz' ? 'Байланыс' : 'Байланыш'}
            </h4>
            <div className="space-y-2 text-xs">
              <div>
                <span className="text-slate-500 block">WhatsApp:</span>
                <span className="font-bold text-white">{CONTACT_INFO.whatsappDisplay}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Instagram:</span>
                <span className="font-bold text-white">{CONTACT_INFO.instagram}</span>
              </div>
              <div>
                <span className="text-slate-500 block">{language === 'ru' ? 'Режим работы:' : language === 'kz' ? 'Жұмыс кестесі:' : 'Иш тартиби:'}</span>
                <span className="text-slate-300 font-semibold">{CONTACT_INFO.workingHours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} YuanPro. {t.footer.rights}
          </div>
          <div>
            <span>Alipay & WeChat Exchange Kyrgyzstan</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
