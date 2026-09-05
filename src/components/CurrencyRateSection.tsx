import React, { useState, useEffect } from 'react';
import { 
  ArrowDown, 
  MessageCircle, 
  ArrowRight, 
  TrendingUp, 
  ShieldCheck, 
  Check, 
  Clock, 
  Zap, 
  CheckCircle2,
  RefreshCw,
  Sparkles
} from 'lucide-react';
import { useRates } from '../context/RateContext';
import { useLanguage } from '../context/LanguageContext';
import { openWhatsAppDirect } from '../data/content';
import { sound } from '../utils/sound';

interface CurrencyRateSectionProps {
  onOpenOrderModal: (amount?: number) => void;
}

export const CurrencyRateSection: React.FC<CurrencyRateSectionProps> = ({ onOpenOrderModal }) => {
  const { rates } = useRates();
  const { language } = useLanguage();

  // Converter state
  const [giveKgs, setGiveKgs] = useState<number | ''>(10000);
  const [getCny, setGetCny] = useState<number | ''>(1250);
  const [selectedWallet, setSelectedWallet] = useState<'alipay' | 'wechat'>('alipay');
  const [selectedBank, setSelectedBank] = useState<string>('mbank');
  const [lastEdited, setLastEdited] = useState<'kgs' | 'cny'>('kgs');

  const currentSellRate = rates.sellRate || 8.0;

  useEffect(() => {
    if (lastEdited === 'kgs') {
      if (typeof giveKgs === 'number' && giveKgs > 0) {
        const calculatedCny = Math.round((giveKgs / currentSellRate) * 100) / 100;
        setGetCny(calculatedCny);
      }
    } else {
      if (typeof getCny === 'number' && getCny > 0) {
        const calculatedKgs = Math.round(getCny * currentSellRate);
        setGiveKgs(calculatedKgs);
      }
    }
  }, [currentSellRate]);

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
      const calculatedCny = Math.round((num / currentSellRate) * 100) / 100;
      setGetCny(calculatedCny);
    }
  };

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
      const calculatedKgs = Math.round(num * currentSellRate);
      setGiveKgs(calculatedKgs);
    }
  };

  const handlePresetKgs = (kgs: number) => {
    sound.playClick();
    setLastEdited('kgs');
    setGiveKgs(kgs);
    const calculatedCny = Math.round((kgs / currentSellRate) * 100) / 100;
    setGetCny(calculatedCny);
  };

  const bankList = [
    { id: 'mbank', label: 'MBank' },
    { id: 'obank', label: 'О!Банк' },
    { id: 'optima', label: 'Optima' },
    { id: 'bakai', label: 'Bakai' },
    { id: 'baitushum', label: 'Бай Түшүм' },
    { id: 'cash', label: language === 'ru' ? 'Наличные ($/сом)' : language === 'kz' ? 'Қолма-қол ($/сом)' : 'Накталай ($/сом)' },
  ];

  const handleExchangeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playSuccess();
    const cnyVal = typeof getCny === 'number' ? getCny : 1250;
    const kgsVal = typeof giveKgs === 'number' ? giveKgs : 10000;
    const bankName = bankList.find(b => b.id === selectedBank)?.label || 'MBank';
    const methodStr = language === 'ru'
      ? `${selectedWallet === 'alipay' ? 'Alipay' : 'WeChat Pay'} • Оплата: ${bankName}`
      : language === 'kz'
      ? `${selectedWallet === 'alipay' ? 'Alipay' : 'WeChat Pay'} • Төлем: ${bankName}`
      : `${selectedWallet === 'alipay' ? 'Alipay' : 'WeChat Pay'} • Төлөм: ${bankName}`;
    openWhatsAppDirect(cnyVal, kgsVal, methodStr, language);
  };

  const handleSellInquiry = () => {
    sound.playClick();
    const sellMsg = language === 'ru'
      ? 'Здравствуйте! Хочу продать юани (CNY). Подскажите, пожалуйста, актуальный курс приема и условия.'
      : language === 'kz'
      ? 'Сәлеметсіз бе! Юань (CNY) сатқым келеді. Қабылдау бағамы мен шарттарын айта аласыз ба?'
      : 'Саламатсызбы! Юань (CNY) саткым келет. Кабыл алуу курсу жана шарттары кандай?';
    window.open(`https://wa.me/996555123456?text=${encodeURIComponent(sellMsg)}`, '_blank');
  };

  return (
    <div className="bg-[#F7F8FA] space-y-16 sm:space-y-24 py-12">
      
      {/* 1. СТРАНИЦА / СЕКЦИЯ САМОГО ОБМЕНА (#exchange) */}
      <section id="exchange" className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-8">
          <div className="text-xs font-extrabold uppercase tracking-widest text-[#C9A227] mb-2">
            {language === 'ru' ? 'Быстрая заявка' : language === 'kz' ? 'Жылдам тапсырыс' : 'Тез алмаштыруу'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-[#111827] tracking-tight">
            {language === 'ru' ? 'Обмен' : language === 'kz' ? 'Айырбастау' : 'Алмаштыруу'}
          </h2>
          <p className="text-sm text-[#6B7280] mt-2">
            {language === 'ru' ? 'Укажите сумму в сомах или юанях для мгновенного расчета' : language === 'kz' ? 'Лезде есептеу үшін соманы сом немесе юаньмен көрсетіңіз' : 'Ыкчам эсептөө үчүн сумманы сом же юань менен киргизиңиз'}
          </p>
        </div>

        {/* Clean White Exchange Card (20-24px radius, soft shadow) */}
        <div className="bg-white rounded-[24px] p-6 sm:p-10 border border-slate-200/90 shadow-xl shadow-slate-200/50">
          <form onSubmit={handleExchangeSubmit} className="space-y-6">
            
            {/* Вы отдаёте */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-extrabold uppercase tracking-wider text-[#4B5563]">
                  {language === 'ru' ? 'Вы отдаёте' : language === 'kz' ? 'Сіз бересіз' : 'Сиз бересиз'}
                </label>
                <div className="flex items-center gap-1.5 overflow-x-auto text-[11px]">
                  {[5000, 10000, 25000, 50000].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => handlePresetKgs(preset)}
                      className={`px-2 py-0.5 rounded-lg border font-semibold transition-all cursor-pointer ${
                        giveKgs === preset 
                          ? 'border-[#111827] bg-[#111827] text-white' 
                          : 'border-slate-200 bg-[#F7F8FA] text-[#6B7280] hover:bg-white'
                      }`}
                    >
                      {preset.toLocaleString('ru-RU')}
                    </button>
                  ))}
                </div>
              </div>

              <div className="relative flex items-center">
                <span className="absolute left-4 text-2xl select-none">🇰🇬</span>
                <input
                  type="number"
                  value={giveKgs}
                  onChange={(e) => handleKgsChange(e.target.value)}
                  placeholder="10000"
                  min={100}
                  className="w-full pl-14 pr-16 py-4 bg-[#F7F8FA] rounded-2xl border border-slate-200 focus:border-[#111827] focus:bg-white text-2xl sm:text-3xl font-black font-display text-[#111827] transition-all outline-none"
                />
                <span className="absolute right-4 text-sm font-extrabold text-[#6B7280]">
                  KGS
                </span>
              </div>
            </div>

            {/* Arrow Divider */}
            <div className="flex justify-center -my-3 relative z-10">
              <div className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-[#111827]">
                <ArrowDown className="w-5 h-5" />
              </div>
            </div>

            {/* Вы получаете */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-extrabold uppercase tracking-wider text-[#4B5563]">
                  {language === 'ru' ? 'Вы получаете (CNY)' : language === 'kz' ? 'Сіз аласыз (CNY)' : 'Сиз аласыз (CNY)'}
                </label>
                <div className="flex items-center gap-1.5 overflow-x-auto text-[11px]">
                  {[500, 1000, 3000, 5000].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => {
                        sound.playClick();
                        setLastEdited('cny');
                        setGetCny(preset);
                        const calculatedKgs = Math.round(preset * currentSellRate);
                        setGiveKgs(calculatedKgs);
                      }}
                      className={`px-2 py-0.5 rounded-lg border font-semibold transition-all cursor-pointer ${
                        getCny === preset 
                          ? 'border-[#111827] bg-[#111827] text-white' 
                          : 'border-slate-200 bg-[#F7F8FA] text-[#6B7280] hover:bg-white'
                      }`}
                    >
                      {preset.toLocaleString('ru-RU')} ¥
                    </button>
                  ))}
                </div>
              </div>

              <div className="relative flex items-center">
                <span className="absolute left-4 text-2xl select-none font-bold text-[#C9A227]">🇨🇳</span>
                <input
                  type="number"
                  value={getCny}
                  onChange={(e) => handleCnyChange(e.target.value)}
                  placeholder="1250"
                  min={1}
                  step={0.1}
                  className="w-full pl-14 pr-16 py-4 bg-[#F7F8FA] rounded-2xl border-2 border-slate-200 focus:border-[#111827] focus:bg-white text-2xl sm:text-3xl font-black font-display text-[#111827] transition-all outline-none"
                />
                <span className="absolute right-4 text-sm font-extrabold text-[#6B7280]">
                  CNY
                </span>
              </div>
            </div>

            {/* Мгновенная сумма со знаком РАВНО (=) */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 border-2 border-emerald-300 shadow-sm flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center text-2xl font-black shrink-0 shadow-xs">
                  =
                </span>
                <div>
                  <div className="text-xs font-extrabold uppercase tracking-wider text-emerald-800">
                    {language === 'ru' ? 'Итоговая сумма к оплате:' : language === 'kz' ? 'Төленетін жалпы сома:' : 'Төлөнүүчү толук сумма:'}
                  </div>
                  <div className="text-2xl sm:text-3xl font-black font-display text-[#111827] tracking-tight">
                    {(typeof giveKgs === 'number' ? giveKgs : Math.round((typeof getCny === 'number' ? getCny : 1250) * currentSellRate)).toLocaleString('ru-RU')} <span className="text-base font-bold text-emerald-700">KGS (сом)</span>
                  </div>
                </div>
              </div>

              <div className="hidden sm:block text-right">
                <span className="text-xs font-bold text-emerald-700 bg-emerald-100/80 px-3 py-1 rounded-full">
                  1 CNY = {currentSellRate.toFixed(2)} сом
                </span>
              </div>
            </div>

            {/* Step 1: Способ получения: [ Alipay ] [ WeChat ] */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#111827] flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] flex items-center justify-center font-bold">1</span>
                  <span>{language === 'ru' ? 'Куда перевести юани (Кошелек):' : language === 'kz' ? 'Юанды қайда аудару керек (Әмиян):' : 'Юанды кайда которуу керек (Капчык):'}</span>
                </span>
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  0% комиссия
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => {
                    sound.playClick();
                    setSelectedWallet('alipay');
                  }}
                  className={`p-3.5 rounded-2xl border-2 font-bold text-xs sm:text-sm flex items-center justify-center gap-2.5 transition-all cursor-pointer ${
                    selectedWallet === 'alipay'
                      ? 'border-[#1677FF] bg-blue-50/70 text-[#111827] ring-2 ring-blue-500/20 shadow-xs'
                      : 'border-slate-200 bg-[#F7F8FA] text-[#4B5563] hover:bg-white'
                  }`}
                >
                  <span className="w-6 h-6 rounded-lg bg-[#1677FF] text-white text-xs flex items-center justify-center font-black shadow-xs">支</span>
                  <span>Alipay (支付宝)</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    sound.playClick();
                    setSelectedWallet('wechat');
                  }}
                  className={`p-3.5 rounded-2xl border-2 font-bold text-xs sm:text-sm flex items-center justify-center gap-2.5 transition-all cursor-pointer ${
                    selectedWallet === 'wechat'
                      ? 'border-[#07C160] bg-emerald-50/70 text-[#111827] ring-2 ring-emerald-500/20 shadow-xs'
                      : 'border-slate-200 bg-[#F7F8FA] text-[#4B5563] hover:bg-white'
                  }`}
                >
                  <span className="w-6 h-6 rounded-lg bg-[#07C160] text-white text-xs flex items-center justify-center font-black shadow-xs">微</span>
                  <span>WeChat Pay (微信)</span>
                </button>
              </div>
            </div>

            {/* Step 2: Способ оплаты (Банк Кыргызстана) */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#111827] flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-amber-500 text-white text-[10px] flex items-center justify-center font-bold">2</span>
                  <span>{language === 'ru' ? 'Банк для оплаты (Сомы):' : language === 'kz' ? 'Төлем банкі (Сом):' : 'Төлөм аткаруучу банк (Сом):'}</span>
                </span>
                <span className="text-[10px] text-slate-500 font-medium">
                  {language === 'ru' ? 'Без комиссии' : language === 'kz' ? '0% комиссия' : '0 сом комиссия'}
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {bankList.map((bank) => (
                  <button
                    key={bank.id}
                    type="button"
                    onClick={() => {
                      sound.playClick();
                      setSelectedBank(bank.id);
                    }}
                    className={`p-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer truncate ${
                      selectedBank === bank.id
                        ? 'border-[#111827] bg-[#111827] text-white shadow-xs'
                        : 'border-slate-200 bg-[#F7F8FA] text-[#6B7280] hover:bg-white'
                    }`}
                  >
                    {bank.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Details Strip (Курс & Комиссия) */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-50/50 via-[#F7F8FA] to-emerald-50/50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2 text-[#4B5563]">
                <span className="font-semibold">{language === 'ru' ? 'Курс:' : language === 'kz' ? 'Бағам:' : 'Курс:'}</span>
                <span className="font-black font-mono gold-shimmer-text text-sm">1 CNY = {currentSellRate.toFixed(2)} KGS</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-600 font-bold">
                <CheckCircle2 className="w-4 h-4" />
                <span>{language === 'ru' ? 'Комиссия: 0 KGS' : language === 'kz' ? 'Комиссия: 0 сом' : 'Комиссия: 0 сом'}</span>
              </div>
            </div>

            {/* Action Button: [ Обменять сейчас ] */}
            <button
              type="submit"
              id="exchange-section-submit-button"
              className="w-full py-4.5 px-6 rounded-2xl bg-[#111827] hover:bg-[#1F2937] active:scale-[0.99] text-white font-bold text-sm sm:text-base uppercase tracking-wider shadow-lg shadow-slate-900/10 transition-all flex items-center justify-center gap-3 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 text-[#16A34A]" />
              <span>
                {language === 'ru' 
                  ? 'Обменять сейчас' 
                  : language === 'kz' 
                  ? 'Қазір айырбастау' 
                  : 'Азыр алмаштыруу'}
              </span>
              <ArrowRight className="w-4 h-4 text-[#C9A227]" />
            </button>

          </form>
        </div>

      </section>

      {/* 2. СЕКЦИЯ КУРСОВ (#rates) - Большая отдельная карточка */}
      <section id="rates" className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-[#111827] tracking-tight">
            {language === 'ru' ? 'Курсы валют' : language === 'kz' ? 'Валюта бағамдары' : 'Валюта курстары'}
          </h2>
          <p className="text-xs sm:text-sm text-[#6B7280] mt-1">
            {language === 'ru' ? 'Прозрачные и выгодные котировки на сегодня' : language === 'kz' ? 'Бүгінгі ашық және пайдалы бағамдар' : 'Бүгүнкү ачык-айкын жана пайдалуу котировкалар'}
          </p>
        </div>

        {/* Большая карточка актуального курса */}
        <div className="bg-gradient-to-b from-amber-500/5 via-white to-slate-50/50 rounded-[28px] p-6 sm:p-12 border-2 border-amber-300/80 shadow-2xl shadow-amber-500/10 text-center relative overflow-hidden">
          
          {/* Background ambient gold radial glow */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-72 bg-gradient-to-b from-amber-400/20 to-transparent rounded-full blur-3xl pointer-events-none" />

          {/* Badge Актуальный курс */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-50 text-[#996515] border border-amber-200/80 shadow-xs text-xs font-black uppercase tracking-wider mb-4 relative z-10">
            <span>{language === 'ru' ? 'Актуальный курс' : language === 'kz' ? 'Өзекті бағам' : 'Актуалдуу курс'}</span>
          </div>

          <div className="text-xs sm:text-sm font-extrabold text-[#6B7280] uppercase tracking-widest mb-2">
            CNY / KGS
          </div>

          {/* Golden Shimmering Rate Display */}
          <div className="relative inline-block my-3">
            <div className="text-4xl sm:text-6xl md:text-7xl font-black font-display tracking-tight select-none">
              <span className="gold-shimmer-text">1 CNY</span>
              <span className="mx-2 sm:mx-4 text-2xl sm:text-4xl md:text-5xl font-bold text-amber-500/80">=</span>
              <span className="gold-shimmer-text">{currentSellRate.toFixed(2)} KGS</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-[#6B7280] font-medium mb-8 mt-2">
            <Clock className="w-3.5 h-3.5 text-emerald-600" />
            <span>
              {language === 'ru' ? 'Последнее обновление:' : language === 'kz' ? 'Соңғы жаңарту:' : 'Акыркы жаңыртуу:'}{' '}
              <strong className="text-[#111827]">{rates.updatedAt || '28 августа 2026, 22:45'}</strong>
            </span>
          </div>

          {/* И две кнопки: Купить CNY / Продать CNY */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
            
            {/* Кнопка 1: Купить CNY */}
            <button
              onClick={() => {
                sound.playClick();
                const exchangeElem = document.getElementById('exchange');
                if (exchangeElem) {
                  exchangeElem.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="py-4 px-6 rounded-2xl bg-[#111827] hover:bg-[#1F2937] text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{language === 'ru' ? 'Купить CNY' : language === 'kz' ? 'CNY сатып алу' : 'CNY сатып алуу'}</span>
              <ArrowRight className="w-4 h-4 text-[#C9A227]" />
            </button>

            {/* Кнопка 2: Продать CNY */}
            <button
              onClick={handleSellInquiry}
              className="py-4 px-6 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 text-[#111827] font-bold text-xs uppercase tracking-wider shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#16A34A]" />
              <span>{language === 'ru' ? 'Продать CNY (Договорной)' : language === 'kz' ? 'CNY сату (Келісім бойынша)' : 'CNY сатуу (Келишим баа)'}</span>
            </button>

          </div>

        </div>

      </section>

    </div>
  );
};
