import React, { useState, useEffect } from 'react';
import { X, MessageCircle, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { useRates } from '../context/RateContext';
import { useLanguage } from '../context/LanguageContext';
import { openWhatsAppDirect } from '../data/content';
import { sound } from '../utils/sound';
import { BankLogo } from './BankLogos';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialAmount?: number;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  initialAmount = 3000,
}) => {
  const { rates } = useRates();
  const { language, t } = useLanguage();
  const [cnyAmount, setCnyAmount] = useState<number>(initialAmount);
  const [selectedWallet, setSelectedWallet] = useState<'alipay' | 'wechat'>('alipay');
  const [selectedBank, setSelectedBank] = useState<string>('mbank');

  useEffect(() => {
    if (initialAmount && initialAmount > 0) {
      setCnyAmount(initialAmount);
    }
  }, [initialAmount, isOpen]);

  if (!isOpen) return null;

  const estimatedSom = Math.round(cnyAmount * rates.sellRate);

  const bankOptions = [
    { id: 'mbank', name: 'MBank' },
    { id: 'obank', name: 'О!Банк (О!Деньги)' },
    { id: 'optima', name: 'Optima Bank' },
    { id: 'bakai', name: 'Bakai Bank' },
    { id: 'baitushum', name: 'Бай Түшүм' },
    { id: 'cash', name: language === 'ru' ? 'Наличные ($/сом)' : language === 'kz' ? 'Қолма-қол ($/сом)' : 'Накталай ($/сом)' },
  ];

  const handleAmountChange = (val: string) => {
    const num = parseInt(val.replace(/\D/g, ''), 10);
    setCnyAmount(isNaN(num) ? 0 : num);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playSuccess();
    const walletName = selectedWallet === 'alipay' ? 'Alipay (支付宝)' : 'WeChat Pay (微信)';
    const bankName = bankOptions.find((b) => b.id === selectedBank)?.name || 'MBank';
    const combinedMethod = language === 'ru'
      ? `Кошелек: ${walletName} • Банк оплаты: ${bankName}`
      : language === 'kz'
      ? `Әмиян: ${walletName} • Төлем банкі: ${bankName}`
      : `Капчык: ${walletName} • Төлөм банкы: ${bankName}`;
    openWhatsAppDirect(cnyAmount, estimatedSom, combinedMethod, language);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-xs">
      <div className="relative w-full max-w-lg bg-white rounded-[24px] shadow-2xl border border-slate-200 overflow-hidden my-8 text-[#111827]">
        
        {/* Modal Header */}
        <div className="p-5 sm:p-6 flex items-center justify-between border-b border-slate-100 bg-[#F7F8FA]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#111827] flex items-center justify-center text-[#C9A227] font-bold font-display text-lg">
              ¥
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold font-display text-[#111827]">
                {language === 'ru' ? 'Быстрая заявка на обмен' : language === 'kz' ? 'Айырбастауға жылдам тапсырыс' : 'Алмаштырууга тез өтүнмө'}
              </h3>
              <p className="text-xs text-[#6B7280]">
                {language === 'ru' ? 'Курс фиксируется в момент заказа' : language === 'kz' ? 'Бағам тапсырыс берген сәтте бекітіледі' : 'Курс заказ берген учурда бекитилет'}
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="p-2 text-slate-400 hover:text-[#111827] bg-white rounded-full border border-slate-200 transition-colors cursor-pointer"
            aria-label="Жабуу"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          
          {/* Amount Field with Instant Equal Sign Calculation */}
          <div>
            <label className="block text-xs font-bold text-[#4B5563] mb-1.5">
              {language === 'ru' ? 'Сумма в юанях (CNY):' : language === 'kz' ? 'Юаньдегі сома (CNY):' : 'Юандагы сумма (CNY):'}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 items-center">
              <div className="sm:col-span-7 relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-lg font-bold text-[#111827]">
                  ¥
                </span>
                <input
                  type="text"
                  value={cnyAmount ? cnyAmount.toLocaleString('ru-RU') : ''}
                  onChange={(e) => handleAmountChange(e.target.value)}
                  placeholder="3 000"
                  className="w-full bg-[#F7F8FA] border border-slate-200 focus:border-[#111827] focus:outline-none rounded-xl pl-9 pr-12 py-2.5 text-lg font-bold font-mono text-[#111827]"
                  required
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">
                  CNY
                </span>
              </div>

              <div className="sm:col-span-5 px-3 py-2.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between gap-1">
                <span className="text-base font-black text-emerald-600">=</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-base font-black text-[#111827] font-mono truncate">
                    {estimatedSom.toLocaleString('ru-RU')}
                  </span>
                  <span className="text-xs font-semibold text-emerald-800 shrink-0">
                    сом
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 1. Wallet Selection: Alipay & WeChat */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-extrabold text-[#111827] uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] flex items-center justify-center font-bold">1</span>
                <span>{language === 'ru' ? 'Куда перевести юани (Alipay / WeChat):' : language === 'kz' ? 'Юанды қайда аудару керек (Alipay / WeChat):' : 'Юанды кайда которуу керек (Alipay / WeChat):'}</span>
              </label>
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                0% комиссия
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div
                onClick={() => {
                  sound.playClick();
                  setSelectedWallet('alipay');
                }}
                className={`p-3 rounded-xl border-2 transition-all cursor-pointer flex items-center gap-2.5 ${
                  selectedWallet === 'alipay'
                    ? 'border-[#1677FF] bg-blue-50/50 text-[#111827] ring-2 ring-blue-500/20'
                    : 'border-slate-200 bg-[#F7F8FA] text-slate-600 hover:border-slate-300'
                }`}
              >
                <div className="w-8 h-8 rounded-lg bg-[#1677FF] text-white flex items-center justify-center text-sm font-black shadow-xs shrink-0">
                  支
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-bold text-[#111827]">Alipay (支付宝)</div>
                  <div className="text-[10px] text-slate-500 font-medium">0% комиссия</div>
                </div>
                <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                  selectedWallet === 'alipay' ? 'border-[#1677FF] bg-[#1677FF] text-white' : 'border-slate-300'
                }`}>
                  {selectedWallet === 'alipay' && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                </div>
              </div>

              <div
                onClick={() => {
                  sound.playClick();
                  setSelectedWallet('wechat');
                }}
                className={`p-3 rounded-xl border-2 transition-all cursor-pointer flex items-center gap-2.5 ${
                  selectedWallet === 'wechat'
                    ? 'border-[#07C160] bg-emerald-50/50 text-[#111827] ring-2 ring-emerald-500/20'
                    : 'border-slate-200 bg-[#F7F8FA] text-slate-600 hover:border-slate-300'
                }`}
              >
                <div className="w-8 h-8 rounded-lg bg-[#07C160] text-white flex items-center justify-center text-sm font-black shadow-xs shrink-0">
                  微
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-bold text-[#111827]">WeChat Pay (微信)</div>
                  <div className="text-[10px] text-slate-500 font-medium">0% комиссия</div>
                </div>
                <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                  selectedWallet === 'wechat' ? 'border-[#07C160] bg-[#07C160] text-white' : 'border-slate-300'
                }`}>
                  {selectedWallet === 'wechat' && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                </div>
              </div>
            </div>
          </div>

          {/* 2. Payment Bank Picker */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-extrabold text-[#111827] uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-amber-500 text-white text-[10px] flex items-center justify-center font-bold">2</span>
                <span>{language === 'ru' ? 'С какого банка оплачиваете (КР):' : language === 'kz' ? 'Қай банктен төлем жасайсыз (ҚР):' : 'Кайсы банктан төлөм аткарасыз:'}</span>
              </label>
              <span className="text-[10px] text-slate-500 font-medium">
                {language === 'ru' ? 'Без комиссии' : language === 'kz' ? '0% комиссия' : '0 сом комиссия'}
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {bankOptions.map((b) => (
                <div
                  key={b.id}
                  onClick={() => {
                    sound.playClick();
                    setSelectedBank(b.id);
                  }}
                  className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer text-xs font-bold truncate ${
                    selectedBank === b.id
                      ? 'bg-[#111827] border-[#111827] text-white shadow-xs'
                      : 'bg-[#F7F8FA] border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  {b.name}
                </div>
              ))}
            </div>
          </div>

          {/* Submit to WhatsApp Button */}
          <div className="space-y-2 pt-2">
            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl bg-[#16A34A] hover:bg-[#15803D] font-bold text-xs uppercase tracking-wider text-white shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>
                {language === 'ru' ? 'Заказать в WhatsApp' : language === 'kz' ? 'WhatsApp-та тапсырыс беру' : 'WhatsApp-та тапсырыс берүү'}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-1.5 text-xs text-[#6B7280] text-center">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>{language === 'ru' ? 'Курс 100% фиксируется' : language === 'kz' ? 'Бағам 100% бекітіледі' : 'Курс 100% бекитилет'}</span>
            </div>
          </div>

        </form>

      </div>
    </div>
  );
};
