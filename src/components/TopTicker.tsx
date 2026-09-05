import React from 'react';
import { Sparkles, MessageCircle, Instagram, TrendingUp, ShieldCheck, Zap, CheckCircle2 } from 'lucide-react';
import { CONTACT_INFO, openWhatsAppDirect, openInstagramDirect } from '../data/content';
import { useRates } from '../context/RateContext';
import { useLanguage } from '../context/LanguageContext';
import { sound } from '../utils/sound';

export const TopTicker: React.FC = () => {
  const { rates } = useRates();
  const { language } = useLanguage();

  const getTickerItems = () => {
    if (language === 'ru') {
      return [
        {
          label: 'КУРС ЮАНЯ',
          value: `1 CNY = ${rates.sellRate.toFixed(2)} KGS`,
          isRate: true,
          onClick: () => {
            sound.playClick();
            document.querySelector('#rates')?.scrollIntoView({ behavior: 'smooth' });
          },
        },
        {
          label: 'ПОПОЛНЕНИЕ',
          value: 'Alipay & WeChat Pay (5–10 минут, 0% комиссия)',
          onClick: () => sound.playClick(),
        },
        {
          label: 'WHATSAPP',
          value: `${CONTACT_INFO.whatsappDisplay} (Быстрый обмен)`,
          onClick: () => {
            sound.playClick();
            openWhatsAppDirect(undefined, undefined, undefined, language);
          },
        },
        {
          label: 'БАНКИ',
          value: 'MBank • О!Банк • Optima • Bakai • Бай Түшүм • Наличные',
          onClick: () => sound.playClick(),
        },
        {
          label: 'РЕЖИМ РАБОТЫ',
          value: '09:00 — 22:00 без выходных 24/7',
          onClick: () => sound.playClick(),
        },
      ];
    }

    if (language === 'kz') {
      return [
        {
          label: 'ЮАНЬ БАҒАМЫ',
          value: `1 CNY = ${rates.sellRate.toFixed(2)} KGS`,
          isRate: true,
          onClick: () => {
            sound.playClick();
            document.querySelector('#rates')?.scrollIntoView({ behavior: 'smooth' });
          },
        },
        {
          label: 'ТОЛЫҚТЫРУ',
          value: 'Alipay & WeChat Pay (5–10 минут, 0% комиссия)',
          onClick: () => sound.playClick(),
        },
        {
          label: 'WHATSAPP',
          value: `${CONTACT_INFO.whatsappDisplay} (Жылдам тапсырыс)`,
          onClick: () => {
            sound.playClick();
            openWhatsAppDirect(undefined, undefined, undefined, language);
          },
        },
        {
          label: 'ТӨЛЕМ ӘДІСТЕРІ',
          value: 'MBank • О!Банк • Optima • Bakai • Бай Түшүм • Қолма-қол',
          onClick: () => sound.playClick(),
        },
        {
          label: 'ЖҰМЫС УАҚЫТЫ',
          value: '09:00 — 22:00 демалыссыз 24/7',
          onClick: () => sound.playClick(),
        },
      ];
    }

    // Default: Kyrgyz
    return [
      {
        label: 'АКТУАЛДУУ КУРС',
        value: `1 CNY = ${rates.sellRate.toFixed(2)} KGS`,
        isRate: true,
        onClick: () => {
          sound.playClick();
          document.querySelector('#rates')?.scrollIntoView({ behavior: 'smooth' });
        },
      },
      {
        label: 'ЮАНЬ САЛУУ',
        value: 'Alipay жана WeChat (5–10 мүнөттө, 0% комиссия)',
        onClick: () => sound.playClick(),
      },
      {
        label: 'WHATSAPP',
        value: `${CONTACT_INFO.whatsappDisplay} (Тез заказ)`,
        onClick: () => {
          sound.playClick();
          openWhatsAppDirect(undefined, undefined, undefined, language);
        },
      },
      {
        label: 'ТӨЛӨМ БАНКТАРЫ',
        value: 'MBank • О!Банк • Optima • Bakai • Бай Түшүм • Накталай',
        onClick: () => sound.playClick(),
      },
      {
        label: 'ИШ УБАКТЫСЫ',
        value: '09:00 — 22:00 дем алышсыз 24/7',
        onClick: () => sound.playClick(),
      },
    ];
  };

  const tickerItems = getTickerItems();

  return (
    <div
      id="top-fintech-ticker"
      className="bg-[#111827] text-white py-1.5 overflow-hidden select-none border-b border-slate-800 text-[11px] font-medium"
    >
      <div className="animate-marquee flex items-center whitespace-nowrap">
        
        {/* Loop 1 */}
        <div className="flex items-center gap-6 px-4">
          {tickerItems.map((item, idx) => (
            <div
              key={`track1-${idx}`}
              onClick={item.onClick}
              className="flex items-center gap-2 cursor-pointer group"
            >
              {item.isRate ? (
                <div className="flex items-center gap-1.5 bg-slate-800/90 border border-slate-700 px-2.5 py-0.5 rounded-full text-[#C9A227] font-bold">
                  <span className="text-[10px] text-slate-300">{item.label}:</span>
                  <span className="font-black font-mono gold-shimmer-text">{item.value}</span>
                </div>
              ) : (
                <div className="flex items-center gap-1.5 text-slate-300 group-hover:text-white transition-colors">
                  <span className="text-[#9CA3AF] text-[10px] uppercase font-bold">{item.label}:</span>
                  <span className="font-medium text-white">{item.value}</span>
                </div>
              )}
              <span className="text-[#C9A227]/70 ml-2 text-[10px]">✦</span>
            </div>
          ))}
        </div>

        {/* Loop 2 (Continuous) */}
        <div className="flex items-center gap-6 px-4" aria-hidden="true">
          {tickerItems.map((item, idx) => (
            <div
              key={`track2-${idx}`}
              onClick={item.onClick}
              className="flex items-center gap-2 cursor-pointer group"
            >
              {item.isRate ? (
                <div className="flex items-center gap-1.5 bg-slate-800/90 border border-slate-700 px-2.5 py-0.5 rounded-full text-[#C9A227] font-bold">
                  <span className="text-[10px] text-slate-300">{item.label}:</span>
                  <span className="font-black font-mono gold-shimmer-text">{item.value}</span>
                </div>
              ) : (
                <div className="flex items-center gap-1.5 text-slate-300 group-hover:text-white transition-colors">
                  <span className="text-[#9CA3AF] text-[10px] uppercase font-bold">{item.label}:</span>
                  <span className="font-medium text-white">{item.value}</span>
                </div>
              )}
              <span className="text-[#C9A227]/70 ml-2 text-[10px]">✦</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
