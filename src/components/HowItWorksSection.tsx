import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { openWhatsAppDirect } from '../data/content';
import { sound } from '../utils/sound';

interface HowItWorksSectionProps {
  onOpenOrderModal: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ onOpenOrderModal }) => {
  const { language } = useLanguage();

  const steps = [
    {
      num: '01',
      title: language === 'ru' ? 'Введите сумму' : language === 'kz' ? 'Соманы енгізіңіз' : 'Сумманы киргизиңиз',
      desc: language === 'ru' 
        ? 'Укажите сумму в сомах в калькуляторе или напишите нам в WhatsApp.' 
        : language === 'kz'
        ? 'Калькуляторда соманы соммен көрсетіңіз немесе WhatsApp-қа жазыңыз.'
        : 'Калькулятордон сумманы сом менен жазыңыз же WhatsApp-ка кайрылыңыз.',
    },
    {
      num: '02',
      title: language === 'ru' ? 'Выберите Alipay или WeChat' : language === 'kz' ? 'Alipay немесе WeChat таңдаңыз' : 'Alipay же WeChat тандаңыз',
      desc: language === 'ru'
        ? 'Укажите способ получения юаней (номер телефона, QR-код или ID кошелька).'
        : language === 'kz'
        ? 'Юань алу тәсілін көрсетіңіз (телефон нөмірі, QR-код немесе әмиян ID).'
        : 'Юань алуу ыкмасын көрсөтүңүз (телефон номери, QR-код же капчык ID).',
    },
    {
      num: '03',
      title: language === 'ru' ? 'Получите CNY' : language === 'kz' ? 'CNY алыңыз' : 'CNY алыңыз',
      desc: language === 'ru'
        ? 'После подтверждения оплаты деньги моментально отправляются на ваш китайский аккаунт.'
        : language === 'kz'
        ? 'Төлем расталғаннан кейін ақша қытайлық аккаунтыңызға дереу түседі.'
        : 'Төлөм ырасталгандан кийин акча заматта кытай аккаунтуңузга түшөт.',
    },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="text-xs font-extrabold uppercase tracking-widest text-[#C9A227] mb-2">
            {language === 'ru' ? 'Простой процесс' : language === 'kz' ? 'Оңай процесс' : 'Жөнөкөй процесс'}
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-[#111827] tracking-tight">
            {language === 'ru' 
              ? 'Как это работает' 
              : language === 'kz' 
              ? 'Бұл қалай жұмыс істейді' 
              : 'Бул кандай иштейт'}
          </h2>
          <p className="text-sm sm:text-base text-[#6B7280] mt-3">
            {language === 'ru' 
              ? 'Всего 3 простых шага до пополнения вашего китайского кошелька' 
              : language === 'kz'
              ? 'Қытайлық әмияныңызды толтыру үшін бар болғаны 3 қарапайым қадам'
              : 'Кытай капчыгыңызды толуктоо үчүн болгону 3 жөнөкөй кадам'}
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {steps.map((step, idx) => (
            <div
              key={idx}
              onClick={() => sound.playClick()}
              className="bg-[#F7F8FA] rounded-[24px] p-7 sm:p-8 border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#111827] text-white font-black text-xl font-display flex items-center justify-center shadow-xs">
                    <span className="text-[#C9A227]">{step.num}</span>
                  </div>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    {idx === 2 
                      ? (language === 'ru' ? '5–10 мин' : language === 'kz' ? '5–10 мин' : '5–10 мүн') 
                      : (language === 'ru' ? 'Шаг' : language === 'kz' ? 'Қадам' : 'Кадам')}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-display text-[#111827] mb-2.5">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-xs text-emerald-600 font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>{language === 'ru' ? 'Гарантированное исполнение' : language === 'kz' ? 'Кепілдендірілген орындалу' : 'Кепилденген аткаруу'}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="text-center">
          <button
            onClick={() => {
              sound.playClick();
              openWhatsAppDirect(undefined, undefined, undefined, language);
            }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-[#111827] hover:bg-[#1F2937] text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all cursor-pointer"
          >
            <span>{language === 'ru' ? 'Начать обмен сейчас' : language === 'kz' ? 'Айырбастауды бастау' : 'Алмаштырууну баштоо'}</span>
            <ArrowRight className="w-4 h-4 text-[#C9A227]" />
          </button>
        </div>

      </div>
    </section>
  );
};
