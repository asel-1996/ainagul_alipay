import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowDown, 
  MessageCircle, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ShoppingBag,
  Building2,
  CreditCard,
  CheckCircle2,
  QrCode,
  PackageCheck
} from 'lucide-react';
import { useRates } from '../context/RateContext';
import { useLanguage } from '../context/LanguageContext';
import { openWhatsAppDirect, CONTACT_INFO } from '../data/content';
import { sound } from '../utils/sound';

interface HeroSectionProps {
  onOpenOrderModal: (amount?: number) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenOrderModal }) => {
  const { rates } = useRates();
  const { language } = useLanguage();

  // Exchange calculator state
  const [giveKgs, setGiveKgs] = useState<number | ''>(10000);
  const [getCny, setGetCny] = useState<number | ''>(1250);
  const [walletMethod, setWalletMethod] = useState<'Alipay (支付宝)' | 'WeChat Pay (微信)'>('Alipay (支付宝)');
  const [bankMethod, setBankMethod] = useState<string>('MBank');
  const [lastEdited, setLastEdited] = useState<'kgs' | 'cny'>('cny');

  // Carousel state (4 seconds auto-rotate)
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentRate = rates.sellRate || 8.0;

  // Auto-calculate on initial load or rate update
  useEffect(() => {
    if (lastEdited === 'cny') {
      if (typeof getCny === 'number' && getCny > 0) {
        const calculatedKgs = Math.round(getCny * currentRate);
        setGiveKgs(calculatedKgs);
      }
    } else {
      if (typeof giveKgs === 'number' && giveKgs > 0) {
        const calculatedCny = Math.round((giveKgs / currentRate) * 100) / 100;
        setGetCny(calculatedCny);
      }
    }
  }, [currentRate]);

  // Carousel 4-second auto-slide interval
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 4);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleNextSlide = () => {
    sound.playClick();
    setCurrentSlide((prev) => (prev + 1) % 4);
  };

  const handlePrevSlide = () => {
    sound.playClick();
    setCurrentSlide((prev) => (prev - 1 + 4) % 4);
  };

  const handleSelectSlide = (index: number) => {
    sound.playClick();
    setCurrentSlide(index);
  };

  // Handlers for instant bidirectional calculations
  const handleCnyChange = (val: string) => {
    setLastEdited('cny');
    if (val === '') {
      setGetCny('');
      setGiveKgs('');
      return;
    }
    const num = parseFloat(val.replace(/\s+/g, ''));
    if (!isNaN(num)) {
      setGetCny(num);
      const calculatedKgs = Math.round(num * currentRate);
      setGiveKgs(calculatedKgs);
    }
  };

  const handleKgsChange = (val: string) => {
    setLastEdited('kgs');
    if (val === '') {
      setGiveKgs('');
      setGetCny('');
      return;
    }
    const num = parseFloat(val.replace(/\s+/g, ''));
    if (!isNaN(num)) {
      setGiveKgs(num);
      const calculatedCny = Math.round((num / currentRate) * 100) / 100;
      setGetCny(calculatedCny);
    }
  };

  const handleQuickPresetCny = (presetCny: number) => {
    sound.playClick();
    setLastEdited('cny');
    setGetCny(presetCny);
    const calculatedKgs = Math.round(presetCny * currentRate);
    setGiveKgs(calculatedKgs);
  };

  const handleExchangeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playSuccess();
    const cnyVal = typeof getCny === 'number' && getCny > 0 ? getCny : 1250;
    const kgsVal = typeof giveKgs === 'number' && giveKgs > 0 ? giveKgs : Math.round(cnyVal * currentRate);
    const combinedMethod = language === 'ru'
      ? `Кошелек: ${walletMethod} • Банк оплаты: ${bankMethod}`
      : language === 'kz'
      ? `Әмиян: ${walletMethod} • Төлем банкі: ${bankMethod}`
      : `Капчык: ${walletMethod} • Төлөм банкы: ${bankMethod}`;
    openWhatsAppDirect(cnyVal, kgsVal, combinedMethod, language);
  };

  // 4 Carousel Slides with distinct dynamic themes and color palettes
  const slides = [
    {
      id: 'alipay-wechat',
      themeClass: 'from-[#0B132B] via-[#1C2541] to-[#0A1128]',
      accentColor: '#C9A227',
      accentBg: 'bg-amber-400/10 text-[#F59E0B] border-amber-400/30',
      badge: language === 'ru' ? '0% комиссия • 5–10 минут' : language === 'kz' ? '0% комиссия • 5–10 минут' : '0% комиссия • 5–10 мүнөт',
      badgeIcon: Zap,
      title: language === 'ru' 
        ? 'Пополняем счета Alipay и WeChat юанями 🇨🇳' 
        : language === 'kz' 
        ? 'Alipay мен WeChat-қа юань саламыз 🇨🇳' 
        : 'Alipay жана WeChat капчыгына юань салабыз 🇨🇳',
      subtitle: language === 'ru'
        ? 'Мгновенный обмен сомов на юани. Без скрытых комиссий, официальный электронный чек и фиксация курса.'
        : language === 'kz'
        ? 'Сомды юаньға жылдам айырбастау. Жасырын комиссиясыз, ресми электронды чек және бағам бекітіледі.'
        : 'Сомду юанга тез алмаштыруу. Жашыруун комиссиясыз, расмий электрондук чек жана курс дароо бекитилет.',
      tags: ['Alipay (支付宝)', 'WeChat Pay (微信支付)', 'MBank', 'Optima', 'О!Банк'],
      cardVisual: 'alipay_wechat'
    },
    {
      id: 'marketplaces',
      themeClass: 'from-[#4C0519] via-[#881337] to-[#3B0716]',
      accentColor: '#FBBF24',
      accentBg: 'bg-rose-400/10 text-rose-300 border-rose-400/30',
      badge: language === 'ru' ? 'Для байеров и Taobao / 1688' : language === 'kz' ? 'Байерлер мен Taobao / 1688 үшін' : 'Байерлер жана Taobao / 1688 үчүн',
      badgeIcon: ShoppingBag,
      title: language === 'ru' 
        ? 'Юани для покупок на Taobao, 1688 и Poizon 🛍️' 
        : language === 'kz' 
        ? 'Taobao, 1688 және Poizon үшін юань 🛍️' 
        : 'Taobao, 1688 жана Poizon үчүн юань алуу 🛍️',
      subtitle: language === 'ru'
        ? 'Выгодный оптовый и розничный курс для байеров Кыргызстана. Моментальная оплата товаров в Китае.'
        : language === 'kz'
        ? 'Қырғызстан байерлері үшін көтерме және бөлшек тиімді бағам. Қытайдағы тауарларға жедел төлем.'
        : 'Кыргызстандын байерлери жана ишкерлери үчүн эң ыңгайлуу курс. Кытайдан товарларды заматта төлөңүз.',
      tags: ['1688 阿里巴巴', 'Taobao 淘宝', 'Poizon 得物', 'Pinduoduo 拼多多'],
      cardVisual: 'marketplaces'
    },
    {
      id: 'factories',
      themeClass: 'from-[#022C22] via-[#064E3B] to-[#011C16]',
      accentColor: '#34D399',
      accentBg: 'bg-emerald-400/10 text-emerald-300 border-emerald-400/30',
      badge: language === 'ru' ? 'Прямой перевод поставщикам' : language === 'kz' ? 'Жеткізушілерге тікелей аударым' : 'Поставщиктерге түз төлөм',
      badgeIcon: Building2,
      title: language === 'ru' 
        ? 'Оплата фабрикам и поставщикам в Китае 🏭' 
        : language === 'kz' 
        ? 'Қытайдағы фабрикалар мен жеткізушілерге төлем 🏭' 
        : 'Кытайдагы фабрика жана поставщиктерге төлөм 🏭',
      subtitle: language === 'ru'
        ? 'Оплата по QR-кодам и реквизитам с гарантией 100% зачисления и подтверждающим электронным чеком.'
        : language === 'kz'
        ? '100% түсу кепілдігімен және растайтын электронды чекпен QR-код немесе реквизиттер бойынша төлем.'
        : 'QR-код же реквизиттер боюнча 100% зачисление кепилдиги жана тастыктоочу электрондук чек менен.',
      tags: language === 'ru' 
        ? ['Прямой перевод', 'Оплата по QR', 'Электронный чек', '100% гарантия']
        : language === 'kz'
        ? ['Тікелей аударым', 'QR-кодпен аудару', 'Чек беріледі', '100% кепілдік']
        : ['Түз которуу', 'QR-код которуу', 'Чек берилет', '100% кепилдик'],
      cardVisual: 'factories'
    },
    {
      id: 'kyrgyz-banks',
      themeClass: 'from-[#172554] via-[#1E1B4B] to-[#0F172A]',
      accentColor: '#38BDF8',
      accentBg: 'bg-sky-400/10 text-sky-300 border-sky-400/30',
      badge: language === 'ru' ? 'Все банки Кыргызстана 24/7' : language === 'kz' ? 'Қырғызстанның барлық банктері 24/7' : 'Кыргызстандын бардык банктары 24/7',
      badgeIcon: CreditCard,
      title: language === 'ru' 
        ? 'Моментальная оплата сомами через MBank, О!Банк, Optima ⚡' 
        : language === 'kz' 
        ? 'MBank, О!Банк, Optima арқылы соммен жедел төлем ⚡' 
        : 'MBank, О!Банк, Optima, Bakai аркылуу ыкчам төлөм ⚡',
      subtitle: language === 'ru'
        ? 'Принимаем оплату с любых кыргызских карт или наличными. Фиксируем курс в момент отправки заявки.'
        : language === 'kz'
        ? 'Кез келген қырғыз карталарынан немесе қолма-қол қабылдаймыз. Өтінім сәтінде бағам бекітіледі.'
        : 'Бардык кыргыз банк карталарынан же накталай кабыл алабыз. Өтүнмө жөнөткөндө курс дароо бекитилет.',
      tags: ['MBank', 'О!Банк', 'Optima Bank', 'Bakai Bank', 'Бай Түшүм'],
      cardVisual: 'banks'
    }
  ];

  const currentSlideData = slides[currentSlide];
  const calculatedExactSom = typeof getCny === 'number' && getCny > 0 ? Math.round(getCny * currentRate) : 0;
  const calculatedExactCny = typeof giveKgs === 'number' && giveKgs > 0 ? (Math.round((giveKgs / currentRate) * 100) / 100) : 0;

  return (
    <section
      id="hero"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className={`relative pt-6 sm:pt-10 pb-12 sm:pb-20 text-white transition-all duration-700 ease-in-out overflow-hidden bg-gradient-to-br ${currentSlideData.themeClass}`}
    >
      {/* Background Decorative Lighting Gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none transition-all duration-1000" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-black/20 rounded-full blur-2xl pointer-events-none" />

      {/* Progress Bar (4 Seconds Indicator) */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 z-20 overflow-hidden">
        <div 
          key={currentSlide}
          className="h-full bg-gradient-to-r from-[#C9A227] to-[#F59E0B] animate-[grow_4s_linear_infinite]"
          style={{
            animationDuration: '4000ms',
            animationIterationCount: '1',
            animationTimingFunction: 'linear'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Carousel Controller Bar */}
        <div className="flex items-center justify-between gap-4 mb-6 sm:mb-8 pb-3 border-b border-white/10">
          
          {/* Active Category Badges Navigation */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto scrollbar-none py-1">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => handleSelectSlide(idx)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                  currentSlide === idx
                    ? 'bg-white text-[#111827] shadow-md scale-105'
                    : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${currentSlide === idx ? 'bg-[#D93025]' : 'bg-white/40'}`} />
                <span>{s.badge}</span>
              </button>
            ))}
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={handlePrevSlide}
              aria-label={language === 'ru' ? 'Предыдущий слайд' : language === 'kz' ? 'Алдыңғы слайд' : 'Мурунку слайд'}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white transition-all cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNextSlide}
              aria-label={language === 'ru' ? 'Следующий слайд' : language === 'kz' ? 'Келесі слайд' : 'Кийинки слайд'}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white transition-all cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Dynamic Headline & Value Proposition (7 cols) */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            
            {/* Live Indicator Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-white shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span>1 CNY = {currentRate.toFixed(2)} сом</span>
              <span className="text-[#F59E0B] font-bold">•</span>
              <span className="text-emerald-300 font-bold">0% комиссия</span>
            </div>

            {/* Main Dynamic Headline */}
            <div className="space-y-3 min-h-[140px] sm:min-h-[160px] flex flex-col justify-center">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white leading-[1.15] drop-shadow-sm transition-all duration-300">
                {currentSlideData.title}
              </h1>
              
              <p className="text-sm sm:text-base lg:text-lg text-white/90 max-w-xl font-normal leading-relaxed">
                {currentSlideData.subtitle}
              </p>
            </div>

            {/* Slide Feature Tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              {currentSlideData.tags.map((tag, tIdx) => (
                <div 
                  key={tIdx}
                  className="px-3 py-1 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 text-xs font-bold text-white flex items-center gap-1.5 shadow-xs"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                  <span>{tag}</span>
                </div>
              ))}
            </div>

            {/* Trust Points */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-2 text-xs font-semibold text-white/80">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>{language === 'ru' ? '100% гарантия зачисления' : language === 'kz' ? '100% түсу кепілдігі' : '100% зачисление кепилдиги'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#F59E0B]" />
                <span>{language === 'ru' ? 'Зачисление за 5–10 минут' : language === 'kz' ? '5–10 минутта қауіпсіз түседі' : '5–10 мүнөттө коопсуз түшөт'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
                <span>{language === 'ru' ? 'Выдаем электронный чек' : language === 'kz' ? 'Электронды чек беріледі' : 'Электрондук чек берилет'}</span>
              </div>
            </div>

            {/* Slide Indicators (Dots with Timer) */}
            <div className="flex items-center gap-2 pt-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectSlide(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    currentSlide === idx 
                      ? 'w-8 bg-white shadow-sm' 
                      : 'w-2 bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Слайд ${idx + 1}`}
                />
              ))}
              <span className="text-[11px] text-white/60 ml-2 font-mono">
                {currentSlide + 1} / {slides.length} ({language === 'ru' ? '4 сек' : language === 'kz' ? '4 сек' : '4 сек'})
              </span>
            </div>

          </div>

          {/* Right Column: Калькулятор с мгновенным выводом суммы рядом со знаком '=' */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-[24px] p-6 sm:p-7 border border-slate-200/90 shadow-2xl text-[#111827] relative">
              
              {/* Card Title */}
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 mb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <h2 className="text-lg sm:text-xl font-black font-display text-[#111827] tracking-tight">
                      {language === 'ru' ? 'Калькулятор юаней' : language === 'kz' ? 'Юань калькуляторы' : 'Юань калькулятору'}
                    </h2>
                  </div>
                  <p className="text-xs text-[#6B7280] mt-0.5">
                    {language === 'ru' ? 'Сумма в сомах рассчитывается сразу' : language === 'kz' ? 'Юань жазғанда сом бірден есептеледі' : 'Юань жазганда сом дароо эсептелет'}
                  </p>
                </div>
                
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 shrink-0">
                  {language === 'ru' ? 'Без комиссии' : language === 'kz' ? '0% комиссия' : '0 сом комиссия'}
                </span>
              </div>

              <form onSubmit={handleExchangeSubmit} className="space-y-4">
                
                {/* 1. ПОЛЕ ЮАНЕЙ (CNY) с мгновенным выводом суммы в сомах */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-black uppercase tracking-wider text-[#111827]">
                      {language === 'ru' ? 'Сумма в юанях (CNY):' : language === 'kz' ? 'Юань сомасы (CNY):' : 'Юандагы сумма (CNY):'}
                    </label>
                    <span className="text-[11px] font-black px-2 py-0.5 rounded-full bg-amber-50 border border-amber-200 shadow-2xs">
                      <span className="gold-shimmer-text">1 CNY = {currentRate.toFixed(2)} {language === 'ru' ? 'KGS' : 'сом'}</span>
                    </span>
                  </div>

                  <div className="relative flex items-center">
                    <span className="absolute left-3.5 text-xl select-none font-bold text-[#C9A227]">🇨🇳 ¥</span>
                    <input
                      type="number"
                      value={getCny}
                      onChange={(e) => handleCnyChange(e.target.value)}
                      placeholder="1250"
                      min={1}
                      step={1}
                      className="w-full pl-13 pr-14 py-3 bg-[#F7F8FA] rounded-2xl border-2 border-slate-200 focus:border-[#111827] focus:bg-white text-xl sm:text-2xl font-black font-display text-[#111827] transition-all outline-none"
                    />
                    <span className="absolute right-3.5 text-xs font-black text-[#6B7280]">
                      CNY
                    </span>
                  </div>

                  {/* Quick Preset Buttons for CNY with instant Som preview */}
                  <div className="grid grid-cols-4 gap-1.5 mt-2">
                    {[500, 1000, 3000, 5000].map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        onClick={() => handleQuickPresetCny(preset)}
                        className={`py-1 px-1.5 rounded-lg border text-[11px] font-bold transition-all text-center cursor-pointer ${
                          getCny === preset
                            ? 'border-[#111827] bg-[#111827] text-white'
                            : 'border-slate-200 bg-[#F7F8FA] text-[#4B5563] hover:bg-slate-100'
                        }`}
                      >
                        {preset.toLocaleString('ru-RU')} ¥
                      </button>
                    ))}
                  </div>
                </div>

                {/* МГНОВЕННЫЙ БЛОК: СРАЗУ ПОЛНАЯ СУММА ПОСЛЕ ЗНАКА РАВНО (=) */}
                <div className="p-3.5 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 border-2 border-emerald-300 shadow-sm flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center text-xl font-black shrink-0">
                      =
                    </span>
                    <div>
                      <div className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-800">
                        {language === 'ru' ? 'Итого к оплате:' : language === 'kz' ? 'Төленетін сома:' : 'Төлөнүүчү сумма:'}
                      </div>
                      <div className="text-xl sm:text-2xl font-black font-display text-[#111827] tracking-tight">
                        {calculatedExactSom.toLocaleString('ru-RU')} <span className="text-sm font-bold text-emerald-700">KGS (сом)</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-200/80 text-emerald-900 block">
                      {language === 'ru' ? 'Фиксация курса' : language === 'kz' ? 'Бағам бекітіледі' : 'Курс бекитилет'}
                    </span>
                  </div>
                </div>

                {/* 2. ПОЛЕ СОМОВ (KGS) */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#6B7280]">
                      {language === 'ru' ? 'Или сумма в сомах (KGS):' : language === 'kz' ? 'Немесе сомдағы сома (KGS):' : 'Же сомдогу сумма (KGS):'}
                    </label>
                  </div>
                  <div className="relative flex items-center">
                    <span className="absolute left-3.5 text-xl select-none">🇰🇬</span>
                    <input
                      type="number"
                      value={giveKgs}
                      onChange={(e) => handleKgsChange(e.target.value)}
                      placeholder="10000"
                      min={100}
                      step={50}
                      className="w-full pl-12 pr-14 py-2.5 bg-[#F7F8FA] rounded-xl border border-slate-200 focus:border-[#111827] focus:bg-white text-lg font-bold font-display text-[#111827] transition-all outline-none"
                    />
                    <span className="absolute right-3.5 text-xs font-bold text-[#6B7280]">
                      KGS
                    </span>
                  </div>
                </div>

                {/* Step 1: Кошелек [ Alipay ] [ WeChat ] */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#111827] flex items-center gap-1.5">
                      <span className="w-4 h-4 rounded-full bg-blue-600 text-white text-[10px] flex items-center justify-center font-bold">1</span>
                      <span>{language === 'ru' ? 'Кошелек пополнения:' : language === 'kz' ? 'Толтыру әмияны:' : 'Толуктоо капчыгы:'}</span>
                    </span>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                      0% комиссия
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        sound.playClick();
                        setWalletMethod('Alipay (支付宝)');
                      }}
                      className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                        walletMethod === 'Alipay (支付宝)'
                          ? 'border-[#1677FF] bg-blue-50 text-[#111827] ring-2 ring-blue-500/20 shadow-xs'
                          : 'border-slate-200 bg-[#F7F8FA] text-[#4B5563] hover:bg-slate-100'
                      }`}
                    >
                      <span className="w-5 h-5 rounded-md bg-[#1677FF] text-white text-xs flex items-center justify-center font-bold shrink-0">支</span>
                      <span className="font-bold truncate">Alipay (支付宝)</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        sound.playClick();
                        setWalletMethod('WeChat Pay (微信)');
                      }}
                      className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                        walletMethod === 'WeChat Pay (微信)'
                          ? 'border-[#07C160] bg-emerald-50 text-[#111827] ring-2 ring-emerald-500/20 shadow-xs'
                          : 'border-slate-200 bg-[#F7F8FA] text-[#4B5563] hover:bg-slate-100'
                      }`}
                    >
                      <span className="w-5 h-5 rounded-md bg-[#07C160] text-white text-xs flex items-center justify-center font-bold shrink-0">微</span>
                      <span className="font-bold truncate">WeChat Pay (微信)</span>
                    </button>
                  </div>
                </div>

                {/* Step 2: Банк оплаты (MBank, О!Банк, Optima, Bakai, Накталай) */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#111827] flex items-center gap-1.5">
                      <span className="w-4 h-4 rounded-full bg-amber-500 text-white text-[10px] flex items-center justify-center font-bold">2</span>
                      <span>{language === 'ru' ? 'Банк оплаты (КР):' : language === 'kz' ? 'Төлем банкі (ҚР):' : 'Төлөм аткаруучу банк:'}</span>
                    </span>
                    <span className="text-[10px] text-slate-500">
                      0 сом комиссия
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-1.5">
                    {['MBank', 'О!Банк', 'Optima Bank', 'Bakai Bank', 'Бай Түшүм', language === 'ru' ? 'Наличные' : language === 'kz' ? 'Қолма-қол' : 'Накталай'].map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => {
                          sound.playClick();
                          setBankMethod(b);
                        }}
                        className={`py-1.5 px-1 rounded-lg border text-[11px] font-bold transition-all text-center cursor-pointer truncate ${
                          bankMethod === b
                            ? 'bg-[#111827] border-[#111827] text-white shadow-xs'
                            : 'bg-[#F7F8FA] border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit Action Button: [ Обменять сейчас ] */}
                <button
                  type="submit"
                  id="hero-exchange-submit-button"
                  className="w-full py-3.5 px-5 rounded-2xl bg-[#111827] hover:bg-[#1F2937] active:scale-[0.99] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer mt-1"
                >
                  <MessageCircle className="w-4 h-4 text-[#16A34A] fill-[#16A34A]/20" />
                  <span className="truncate">
                    {language === 'ru' 
                      ? `Заказать ${typeof getCny === 'number' ? getCny : 1250} CNY (${calculatedExactSom.toLocaleString('ru-RU')} сом)` 
                      : language === 'kz'
                      ? `${typeof getCny === 'number' ? getCny : 1250} CNY тапсырыс беру (${calculatedExactSom.toLocaleString('ru-RU')} сом)`
                      : `${typeof getCny === 'number' ? getCny : 1250} CNY алуу (${calculatedExactSom.toLocaleString('ru-RU')} сом)`}
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#C9A227] shrink-0" />
                </button>

              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
