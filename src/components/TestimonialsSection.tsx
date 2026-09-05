import React from 'react';
import { Star, MessageSquareQuote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { sound } from '../utils/sound';

export const TestimonialsSection: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-[#F7F8FA] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-extrabold uppercase tracking-widest text-[#C9A227] mb-2">
            {language === 'ru' ? 'Отзывы клиентов' : language === 'kz' ? 'Клиенттердің пікірлері' : 'Кардарлардын ой-пикирлери'}
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-[#111827] tracking-tight">
            {language === 'ru' ? 'Что говорят наши клиенты' : language === 'kz' ? 'Біз туралы пікірлер' : 'Биз жөнүндө пикирлер'}
          </h2>
          <p className="text-sm sm:text-base text-[#6B7280] mt-2">
            {language === 'ru' 
              ? 'Более 20 000 успешных переводов для байеров и предпринимателей' 
              : language === 'kz'
              ? 'Байерлер мен кәсіпкерлер үшін 20 000-нан астам сәтті аударымдар'
              : 'Байерлер жана ишкерлер үчүн 20 000ден ашык ийгиликтүү которуулар'}
          </p>
        </div>

        {/* Reviews 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.testimonials.items.map((item) => (
            <div
              key={item.id}
              onClick={() => sound.playClick()}
              className="bg-white rounded-[22px] p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-[#111827] bg-[#F7F8FA] px-2.5 py-0.5 rounded-full border border-slate-200">
                    {item.tag}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed mb-6 italic">
                  "{item.text}"
                </p>
              </div>

              {/* Author */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="font-bold text-[#111827] text-xs font-display">
                    {item.name}
                  </div>
                  <div className="text-[11px] text-[#6B7280]">
                    {item.role}
                  </div>
                </div>
                <span className="text-[10px] text-[#9CA3AF] font-mono">
                  {item.date}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
