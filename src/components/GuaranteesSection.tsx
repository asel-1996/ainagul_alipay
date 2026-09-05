import React from 'react';
import { ShieldCheck, CheckCircle2, Lock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { sound } from '../utils/sound';

export const GuaranteesSection: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section className="py-16 sm:py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <div className="text-xs font-extrabold uppercase tracking-widest text-[#C9A227] mb-2">
            {language === 'ru' ? 'Надежность' : language === 'kz' ? 'Сенімділік' : 'Ишенимдүүлүк'}
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-[#111827] tracking-tight">
            {language === 'ru' ? 'Гарантии безопасности' : language === 'kz' ? 'Қауіпсіздік кепілдіктері' : 'Коопсуздук кепилдиктери'}
          </h2>
          <p className="text-sm sm:text-base text-[#6B7280] mt-2">
            {language === 'ru'
              ? 'Каждый перевод сопровождается официальным чеком и персональным контролем'
              : language === 'kz'
              ? 'Әрбір аударымға ресми чек беріледі және жеке бақылауда болады'
              : 'Ар бир которууга чек берилет жана жеке көзөмөлдө болот'}
          </p>
        </div>

        {/* Guarantees 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {t.guarantees.items.map((item, idx) => (
            <div
              key={idx}
              onClick={() => sound.playClick()}
              className="p-6 sm:p-7 rounded-[22px] bg-[#F7F8FA] border border-slate-200/80 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                </div>

                <h3 className="text-base font-bold font-display text-[#111827] mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-[#6B7280] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] text-emerald-600 font-semibold">
                <Lock className="w-3 h-3" />
                <span>{language === 'ru' ? '100% Защищено' : language === 'kz' ? '100% Қорғалған' : '100% корголгон'}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
