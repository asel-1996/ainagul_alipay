import React from 'react';
import { BankLogo } from './BankLogos';
import { ShieldCheck, Zap, ArrowRight, CheckCircle2, Banknote, Sparkles, Lock, CreditCard } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { openWhatsAppDirect } from '../data/content';
import { sound } from '../utils/sound';

interface BankPartnersSectionProps {
  onOpenOrderModal: () => void;
}

export const BankPartnersSection: React.FC<BankPartnersSectionProps> = ({ onOpenOrderModal }) => {
  const { language } = useLanguage();

  const kyrgyzBanks = [
    {
      id: 'mbank',
      name: 'MBank',
      fullName: 'КБ Кыргызстан (MBank)',
      badge: language === 'ru' ? '0% комиссия' : '0% комиссия',
      color: 'from-amber-400 to-amber-600',
    },
    {
      id: 'obank',
      name: 'О!Банк',
      fullName: 'О!Деньги / О!Банк',
      badge: language === 'ru' ? 'QR и Номер' : language === 'kz' ? 'QR және Нөмір' : 'QR & Номер',
      color: 'from-pink-500 to-rose-600',
    },
    {
      id: 'optima',
      name: 'Optima Bank',
      fullName: 'Оптима Банк',
      badge: language === 'ru' ? 'Мгновенно' : language === 'kz' ? 'Лезде' : 'Ыкчам',
      color: 'from-orange-500 to-amber-600',
    },
    {
      id: 'bakai',
      name: 'Bakai Bank',
      fullName: 'Бакай Банк',
      badge: language === 'ru' ? 'Онлайн 24/7' : 'Онлайн 24/7',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      id: 'baitushum',
      name: 'Бай Түшүм',
      fullName: 'Бай Түшүм Банк',
      badge: language === 'ru' ? 'Принимается' : language === 'kz' ? 'Қабылданады' : 'Кабыл алынат',
      color: 'from-emerald-500 to-teal-600',
    },
  ];

  return (
    <section 
      id="banks" 
      className="py-20 sm:py-28 relative overflow-hidden bg-gradient-to-b from-[#0B132B] via-[#0F1D3C] to-[#0A0F1D] text-white border-t border-amber-500/20"
    >
      {/* Rich Golden and Emerald Ambient Glows in Background */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#C9A227_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Golden Badge */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 via-amber-400/20 to-amber-500/20 border border-amber-400/40 text-xs font-black uppercase tracking-widest text-[#FCD34D] mb-4 shadow-lg backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#FCD34D] animate-spin" />
            <span>{language === 'ru' ? 'Премиум расчеты Кыргызстан ↔ Китай' : language === 'kz' ? 'Премиум есеп айырысу Қырғызстан ↔ Қытай' : 'Премиум төлөмдөр Кыргызстан ↔ Кытай'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white drop-shadow-md">
            {language === 'ru' ? 'Банки Кыргызстана и китайские кошельки' : language === 'kz' ? 'Қырғызстан банктері және қытайлық әмияндар' : 'Кыргызстан төлөм банктары жана капчыктар'}
          </h2>
          
          <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed max-w-2xl mx-auto font-normal">
            {language === 'ru'
              ? 'Принимаем оплату со всех банков Кыргызстана без скрытых комиссий и моментально пополняем ваши кошельки Alipay и WeChat Pay'
              : language === 'kz'
              ? 'Қырғызстанның барлық банктерінен комиссиясыз төлем қабылдап, Alipay және WeChat Pay шотыңызға 5–10 минутта юань аударамыз'
              : 'Кыргызстандын бардык банктарынан комиссиясыз төлөм кабыл алып, Alipay жана WeChat Pay эсебиңизге 5–10 мүнөттө салабыз'}
          </p>
        </div>

        {/* China Wallets Cards (Alipay & WeChat) with Luxury Cards & Gold Trims */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Alipay Card */}
          <div className="bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#0A0F1D] rounded-[28px] p-8 sm:p-9 border-2 border-blue-500/40 hover:border-blue-400 shadow-[0_10px_40px_-10px_rgba(22,119,255,0.3)] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-[#1677FF] text-white flex items-center justify-center text-3xl font-black shadow-lg border border-blue-400/30 group-hover:scale-105 transition-transform">
                    支
                  </div>
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-blue-300 bg-blue-950/80 px-3 py-1 rounded-full border border-blue-400/30 inline-block">
                      {language === 'ru' ? 'Официальный перевод' : language === 'kz' ? 'Ресми аударым' : 'Расмий которуу'}
                    </span>
                    <h3 className="text-2xl font-black font-display text-white mt-1">
                      Alipay (支付宝)
                    </h3>
                  </div>
                </div>

                <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-500/30 hidden sm:block">
                  0% комиссия
                </span>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {language === 'ru'
                  ? 'Моментальное пополнение по номеру телефона, ID или QR-коду. Идеально для заказов на Taobao, 1688, Poizon и расчетов с поставщиками.'
                  : language === 'kz'
                  ? 'Телефон нөмірі, ID немесе QR-код бойынша 5–10 минутта толтыру. Taobao, 1688, Poizon саудасы және Қытайдағы фабрикаларға төлем жасау үшін.'
                  : 'Телефон номери, ID же QR-код боюнча 5–10 мүнөттө толуктоо. Taobao, 1688, Poizon соодасы жана Кытайдагы фабрикаларга төлөөгө.'}
              </p>

              <div className="space-y-3 mb-8 pt-5 border-t border-slate-700/60">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{language === 'ru' ? 'По номеру телефона / ID / QR-коду' : language === 'kz' ? 'Телефон нөмірі / ID / QR-код бойынша' : 'Телефон номери / ID / QR-код боюнча'}</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{language === 'ru' ? 'Зачисление за 5–10 минут с электронным чеком' : language === 'kz' ? 'Электронды чекпен 5–10 минутта аудару' : 'Электрондук чек менен 5–10 мүнөттө түшүрүү'}</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{language === 'ru' ? '100% гарантия и фиксация курса' : language === 'kz' ? '100% кепілдік және бағам бекітіледі' : '100% кепилдик жана курсту бекитүү'}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                sound.playClick();
                openWhatsAppDirect(3000, undefined, 'Alipay (支付宝)', language);
              }}
              className="w-full py-4 px-5 rounded-2xl bg-gradient-to-r from-[#1677FF] to-[#0958D9] hover:from-[#4096FF] hover:to-[#1677FF] text-white font-black text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer hover:shadow-blue-500/25 active:scale-[0.99]"
            >
              <span>{language === 'ru' ? 'Пополнить Alipay сейчас' : language === 'kz' ? 'Alipay толтыру қазір' : 'Alipay толуктоо азыр'}</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>

          {/* WeChat Card */}
          <div className="bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#0A0F1D] rounded-[28px] p-8 sm:p-9 border-2 border-emerald-500/40 hover:border-emerald-400 shadow-[0_10px_40px_-10px_rgba(7,193,96,0.3)] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-[#07C160] text-white flex items-center justify-center text-3xl font-black shadow-lg border border-emerald-400/30 group-hover:scale-105 transition-transform">
                    微
                  </div>
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-emerald-300 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-400/30 inline-block">
                      {language === 'ru' ? 'Официальный перевод' : language === 'kz' ? 'Ресми аударым' : 'Расмий которуу'}
                    </span>
                    <h3 className="text-2xl font-black font-display text-white mt-1">
                      WeChat Pay (微信支付)
                    </h3>
                  </div>
                </div>

                <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-500/30 hidden sm:block">
                  0% комиссия
                </span>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {language === 'ru'
                  ? 'Прямой перевод юаней на WeChat поставщикам, фабрикам или на личный кошелек по QR-коду и номеру телефона.'
                  : language === 'kz'
                  ? 'Қытайдағы жеткізушілерге, фабрикаларға немесе жеке WeChat шотыңызға QR-код пен телефон нөмірі арқылы тікелей аударым.'
                  : 'Кытайдагы жеткирүүчүлөргө, фабрикаларга же жеке WeChat эсебиңизге QR-код жана телефон номери аркылуу түз которуу.'}
              </p>

              <div className="space-y-3 mb-8 pt-5 border-t border-slate-700/60">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{language === 'ru' ? 'По QR-коду поставщика или номеру' : language === 'kz' ? 'Жеткізушінің QR-коды немесе нөмірі бойынша' : 'Жеткирүүчүнүн QR-коду же номери боюнча'}</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{language === 'ru' ? 'Прямой перевод без ограничений' : language === 'kz' ? 'Шектеусіз тікелей аударым' : 'Түз которуу, чектөөсүз соода'}</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{language === 'ru' ? 'Выдается подтверждающий чек' : language === 'kz' ? 'Растайтын чек беріледі' : 'Тастыктоочу чек берилет'}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                sound.playClick();
                openWhatsAppDirect(3000, undefined, 'WeChat Pay (微信支付)', language);
              }}
              className="w-full py-4 px-5 rounded-2xl bg-gradient-to-r from-[#07C160] to-[#059669] hover:from-[#10B981] hover:to-[#07C160] text-white font-black text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer hover:shadow-emerald-500/25 active:scale-[0.99]"
            >
              <span>{language === 'ru' ? 'Пополнить WeChat сейчас' : language === 'kz' ? 'WeChat толтыру қазір' : 'WeChat толуктоо азыр'}</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>

        </div>

        {/* Kyrgyz Banks Strip in Rich Royal Gold & Charcoal Theme */}
        <div className="bg-gradient-to-r from-[#111C38] via-[#162447] to-[#111C38] rounded-[28px] p-7 sm:p-9 border-2 border-amber-500/30 shadow-2xl relative overflow-hidden">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-700/70">
            <div>
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <h3 className="text-xl sm:text-2xl font-black text-white font-display tracking-tight">
                  {language === 'ru' ? 'Банки Кыргызстана для оплаты' : language === 'kz' ? 'Төлемге арналған Қырғызстан банктері' : 'Кыргызстандагы төлөм банктары'}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-amber-200/80 mt-1 font-medium">
                {language === 'ru' 
                  ? 'Принимаем оплату с любых приложений Кыргызстана без комиссии' 
                  : language === 'kz'
                  ? 'Қырғызстанның кез келген қосымшаларынан 0 сом комиссиямен қабылдаймыз'
                  : 'Кыргызстандын бардык банктарынан 0 сом комиссия менен кабыл алабыз'}
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-bold text-amber-300 bg-amber-950/80 px-4 py-2 rounded-xl border border-amber-500/40 shadow-sm w-fit">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>{language === 'ru' ? '100% безопасно и быстро' : language === 'kz' ? '100% қауіпсіз & жылдам' : '100% коопсуз & ыкчам'}</span>
            </div>
          </div>

          {/* 6 Bank Badges Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {kyrgyzBanks.map((bank) => (
              <div
                key={bank.id}
                onClick={() => sound.playClick()}
                className="p-5 rounded-2xl bg-[#0F172A]/90 border border-slate-700 hover:border-amber-400 hover:bg-[#1E293B] transition-all flex flex-col items-center text-center cursor-default group shadow-md"
              >
                <div className="mb-3 group-hover:scale-110 transition-transform">
                  <BankLogo name={bank.id} className="w-12 h-12 rounded-2xl shadow-lg border border-slate-700" />
                </div>
                <div className="font-black text-white text-xs sm:text-sm font-display mb-1.5">
                  {bank.name}
                </div>
                <span className="text-[10px] font-extrabold text-emerald-400 bg-emerald-950/90 px-2.5 py-0.5 rounded-full border border-emerald-500/40">
                  {bank.badge}
                </span>
              </div>
            ))}

            {/* Cash Option ($ / сом) */}
            <div
              onClick={() => sound.playClick()}
              className="p-5 rounded-2xl bg-[#0F172A]/90 border border-slate-700 hover:border-amber-400 hover:bg-[#1E293B] transition-all flex flex-col items-center text-center cursor-default group shadow-md"
            >
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-[#FCD34D] mb-3 shadow-lg group-hover:scale-110 transition-transform">
                <Banknote className="w-6 h-6" />
              </div>
              <div className="font-black text-white text-xs sm:text-sm font-display mb-1.5">
                {language === 'ru' ? 'Наличные' : language === 'kz' ? 'Қолма-қол' : 'Накталай'}
              </div>
              <span className="text-[10px] font-extrabold text-amber-300 bg-amber-950/90 px-2.5 py-0.5 rounded-full border border-amber-500/40">
                $ / сом ({language === 'ru' ? 'Бишкек' : language === 'kz' ? 'Бішкек' : 'Бишкек'})
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
