import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { openWhatsAppDirect } from '../data/content';
import { useLanguage } from '../context/LanguageContext';
import { sound } from '../utils/sound';

export const FaqSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    sound.playClick();
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="text-xs font-extrabold uppercase tracking-widest text-[#C9A227] mb-2">
            FAQ
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-[#111827] tracking-tight">
            {language === 'ru' ? 'Часто задаваемые вопросы' : language === 'kz' ? 'Жиі қойылатын сұрақтар' : 'Көп берилүүчү суроолор'}
          </h2>
          <p className="text-sm text-[#6B7280] mt-2">
            {language === 'ru' 
              ? 'Ответы на главные вопросы по обмену сомов на юани' 
              : language === 'kz'
              ? 'Сомды юаньге айырбастау бойынша негізгі сұрақтарға жауаптар'
              : 'Сомду юанга алмаштыруу боюнча негизги жооптор'}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 mb-10">
          {t.faq.items.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-[#F7F8FA] border border-slate-200/80 overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#111827] hover:text-[#C9A227] transition-colors cursor-pointer"
                >
                  <span className="font-display">{faq.question}</span>
                  <div className={`w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 text-[#6B7280] transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#111827]' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#4B5563] leading-relaxed border-t border-slate-200/60">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Support Banner */}
        <div className="p-6 sm:p-7 rounded-[22px] bg-[#111827] text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div>
            <div className="text-base font-bold font-display">
              {language === 'ru' ? 'Остались вопросы?' : language === 'kz' ? 'Сұрақтарыңыз қалды ма?' : 'Суроолоруңуз калдыбы?'}
            </div>
            <div className="text-xs text-slate-400 mt-0.5">
              {language === 'ru' ? 'Напишите нам в WhatsApp — ответим за 2 минуты' : language === 'kz' ? 'WhatsApp арқылы жазыңыз — 2 минутта жауап береміз' : 'WhatsApp-ка жазыңыз — 2 мүнөттө жооп беребиз'}
            </div>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              openWhatsAppDirect(undefined, undefined, undefined, language);
            }}
            className="px-5 py-3 rounded-xl bg-white hover:bg-slate-100 text-[#111827] font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-[#16A34A]" />
            <span>{language === 'ru' ? 'Спросить в WhatsApp' : language === 'kz' ? 'WhatsApp арқылы сұрау' : 'WhatsApp аркылуу суроо'}</span>
          </button>
        </div>

      </div>
    </section>
  );
};
