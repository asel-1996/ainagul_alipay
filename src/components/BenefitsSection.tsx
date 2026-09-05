import React from 'react';
import { Zap, ShieldCheck, CreditCard, Clock, Sparkles, CheckCircle2, Award, Lock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { sound } from '../utils/sound';

export const BenefitsSection: React.FC = () => {
  const { language } = useLanguage();

  const trustItems = [
    {
      icon: Zap,
      iconColor: 'text-[#F59E0B]',
      iconBg: 'bg-amber-500/10 border border-amber-500/30',
      title: language === 'ru' ? 'Быстро и оперативно' : language === 'kz' ? 'Жылдам' : 'Тез жана ыкчам',
      badge: language === 'ru' ? '5–10 минут' : language === 'kz' ? '5–10 минут' : '5–10 мүнөт',
      description: language === 'ru' 
        ? 'Обмен без лишних действий и очередей. Среднее время зачисления на кошелек всего 5–10 минут.' 
        : language === 'kz'
        ? 'Артық әрекетсіз және кезексіз айырбастау. Әмиянға түсу уақыты небәрі 5–10 минут.'
        : 'Ашыкча убарасы жок, тез алмашуу. Капчыкка юань түшүү убактысы орточо 5–10 мүнөт.',
    },
    {
      icon: ShieldCheck,
      iconColor: 'text-emerald-500',
      iconBg: 'bg-emerald-500/10 border border-emerald-500/30',
      title: language === 'ru' ? '100% Безопасность' : language === 'kz' ? 'Қауіпсіздік' : '100% Коопсуздук',
      badge: language === 'ru' ? '100% Гарантия' : language === 'kz' ? '100% Кепілдік' : '100% Кепилдик',
      description: language === 'ru'
        ? 'Ваши средства в полной безопасности. 2+ года безупречного опыта, 20 000+ довольных клиентов.'
        : language === 'kz'
        ? 'Сіздің қаражатыңыз толық қауіпсіз. 2+ жыл мінсіз тәжірибе, 20 000+ риза клиент.'
        : 'Каражатыңыз толук коопсуздукта. 2+ жылдык тажрыйба, 20 000+ ыраазы кардарлар.',
    },
    {
      icon: CreditCard,
      iconColor: 'text-[#1677FF]',
      iconBg: 'bg-blue-500/10 border border-blue-500/30',
      title: 'Alipay & WeChat Pay',
      badge: '0% комиссия',
      description: language === 'ru'
        ? 'Прямое пополнение китайских кошельков по номеру, ID или QR-коду без скрытых процентов.'
        : language === 'kz'
        ? 'Жасырын пайыздарсыз нөмір, ID немесе QR-код бойынша қытайлық әмияндарды тікелей толтыру.'
        : 'Жашыруун пайыздарсыз телефон номери, ID же QR-код боюнча кытай капчыктарын түз толуктоо.',
    },
    {
      icon: Clock,
      iconColor: 'text-[#D93025]',
      iconBg: 'bg-rose-500/10 border border-rose-500/30',
      title: language === 'ru' ? '24/7 Поддержка & Фиксация' : language === 'kz' ? '24/7 Қолдау & Бекіту' : '24/7 Колдоо & Фиксация',
      badge: language === 'ru' ? 'Ежедневно' : language === 'kz' ? 'Күн сайын' : 'Күн сайын',
      description: language === 'ru'
        ? 'Принимаем заявки ежедневно с 09:00 до 22:00. Фиксируем курс юаня в момент отправки заявки.'
        : language === 'kz'
        ? 'Күн сайын 09:00-ден 22:00-ге дейін өтінім қабылдаймыз. Өтінім сәтінде юань бағамын бекітеміз.'
        : 'Күн сайын дем алышсыз 09:00дөн 22:00гө чейин кабыл алабыз. Өтүнмөдө курс дароо бекитилет.',
    },
  ];

  return (
    <section id="trust" className="py-16 sm:py-24 bg-[#F7F8FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* БОГАТАЯ ИЗУМРУДНО-ЗЕЛЕНАЯ / ЗОЛОТАЯ ЛЮКС РАМКА ДЛЯ СЕКЦИИ "ЭМНЕ ҮЧҮН БИЗГЕ ИШЕНИШЕТ" */}
        <div className="relative rounded-[32px] sm:rounded-[36px] p-6 sm:p-10 lg:p-12 bg-white border-4 border-emerald-600 shadow-[0_15px_50px_-10px_rgba(5,150,105,0.35)] ring-4 ring-emerald-500/20 overflow-hidden">
          
          {/* Top-Right & Bottom-Left Decorative Golden Corner Badges */}
          <div className="absolute top-0 right-0 bg-gradient-to-l from-emerald-600 to-emerald-700 text-white px-6 py-2 rounded-bl-3xl font-extrabold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-md">
            <Sparkles className="w-4 h-4 text-[#FCD34D] animate-spin" />
            <span>{language === 'ru' ? 'Гарантия надежности 100%' : language === 'kz' ? '100% Сенімділік кепілдігі' : '100% Ишенимдүүлүк кепилдиги'}</span>
          </div>

          {/* Section Heading Inside the Luxury Frame */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 pt-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100/80 border border-emerald-300 text-xs font-black uppercase tracking-widest text-emerald-800 mb-3 shadow-xs">
              <Award className="w-3.5 h-3.5 text-emerald-600" />
              <span>{language === 'ru' ? 'Наши главные преимущества' : language === 'kz' ? 'Біздің басты артықшылықтарымыз' : 'Биздин башкы артыкчылыктар'}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-[#111827] tracking-tight">
              {language === 'ru' 
                ? 'Почему нам доверяют' 
                : language === 'kz' 
                ? 'Неліктен бізге сенеді' 
                : 'Эмне үчүн бизге ишенишет'}
            </h2>
            
            <p className="text-sm sm:text-base text-[#4B5563] mt-3 font-medium max-w-2xl mx-auto">
              {language === 'ru'
                ? 'Надежный сервис пополнения юаней для байеров, бизнеса и личных покупок в Китае'
                : language === 'kz'
                ? 'Қытайдан сатып алатын байерлер, бизнес және жеке сауда үшін сенімді қызмет'
                : 'Кытайдан соода кылган байерлер, ишкерлер жана жеке сатып алуулар үчүн эң ишенимдүү сервис'}
            </p>
          </div>

          {/* 4 Trust Cards Grid Inside Luxury Emerald Frame */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  onClick={() => sound.playClick()}
                  className="bg-[#F8FAF9] rounded-[24px] p-6 sm:p-7 border-2 border-emerald-200/80 hover:border-emerald-500 hover:bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-default relative overflow-hidden"
                >
                  <div>
                    {/* Top Row: Icon + Badge */}
                    <div className="flex items-center justify-between gap-2 mb-5">
                      <div className={`w-14 h-14 rounded-2xl ${item.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs`}>
                        <Icon className={`w-7 h-7 ${item.iconColor}`} />
                      </div>
                      
                      <span className="text-[11px] font-black px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300/80">
                        {item.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-black font-display text-[#111827] mb-2.5 group-hover:text-emerald-800 transition-colors">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Verification Note */}
                  <div className="mt-6 pt-3.5 border-t border-emerald-200/60 flex items-center gap-1.5 text-xs text-emerald-700 font-bold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{language === 'ru' ? 'Проверенный сервис' : language === 'kz' ? 'Тексерілген сервис' : 'Тастыкталган сервис'}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
