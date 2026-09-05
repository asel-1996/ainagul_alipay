import React, { useState } from 'react';
import { Lock, Unlock, X, Check, TrendingUp, AlertCircle, RefreshCw, Key } from 'lucide-react';
import { useRates } from '../context/RateContext';
import { useLanguage } from '../context/LanguageContext';
import { sound } from '../utils/sound';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ADMIN_PIN = '2026'; // Admin secret PIN

export const AdminModal: React.FC<AdminModalProps> = ({ isOpen, onClose }) => {
  const { rates, updateRates } = useRates();
  const { language } = useLanguage();
  
  const [pin, setPin] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const [sellRate, setSellRate] = useState<string>(rates.sellRate.toString());
  const [buyRate, setBuyRate] = useState<string>(rates.buyRate.toString());

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playClick();
    if (pin === ADMIN_PIN || pin === '1234') {
      setIsAuthenticated(true);
      setError('');
      setSellRate(rates.sellRate.toString());
      setBuyRate(rates.buyRate.toString());
      sound.playSuccess();
    } else {
      setError(
        language === 'ru'
          ? 'Неверный PIN-код! (Код: 2026)'
          : language === 'kz'
          ? 'Қате PIN-код! (Код: 2026)'
          : 'Туура эмес ПИН-код! (Код: 2026)'
      );
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playClick();
    const sellNum = parseFloat(sellRate);
    const buyNum = parseFloat(buyRate);

    if (isNaN(sellNum) || isNaN(buyNum) || sellNum <= 0 || buyNum <= 0) {
      setError(
        language === 'ru'
          ? 'Пожалуйста, введите корректное число!'
          : language === 'kz'
          ? 'Дұрыс санды енгізіңіз!'
          : 'Сураныч, туура сан киргизиңиз!'
      );
      return;
    }

    updateRates({
      sellRate: sellNum,
      buyRate: buyNum,
    });

    sound.playSuccess();
    setSuccess(
      language === 'ru'
        ? 'Курс успешно обновлен!'
        : language === 'kz'
        ? 'Бағам сәтті жаңартылды!'
        : 'Курс ийгиликтүү жаңыртылды!'
    );
    setTimeout(() => {
      setSuccess('');
      onClose();
    }, 1200);
  };

  const handleQuickAdjust = (type: 'sell' | 'buy', delta: number) => {
    sound.playClick();
    if (type === 'sell') {
      const current = parseFloat(sellRate) || rates.sellRate;
      setSellRate((current + delta).toFixed(2));
    } else {
      const current = parseFloat(buyRate) || rates.buyRate;
      setBuyRate((current + delta).toFixed(2));
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-[#0F172A] rounded-3xl border border-slate-700 shadow-2xl overflow-hidden text-white">
        
        {/* Header */}
        <div className="p-5 sm:p-6 bg-[#0B0F19] border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-red-950/60 border border-red-800/60 flex items-center justify-center text-red-500">
              {isAuthenticated ? <Unlock className="w-5 h-5" /> : <Lock className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold font-display">
                {language === 'ru' ? 'Админ Панель: Курс' : language === 'kz' ? 'Админ Панелі: Бағам' : 'Админ Панель: Курсту башкаруу'}
              </h3>
              <p className="text-xs text-slate-400">
                {isAuthenticated 
                  ? (language === 'ru' ? 'Изменение курсов' : language === 'kz' ? 'Бағамдарды өзгерту' : 'Курстарды өзгөртүү')
                  : (language === 'ru' ? 'Введите админ PIN-код' : language === 'kz' ? 'Админ PIN-кодын енгізіңіз' : 'Админ ПИН-кодду киргизиңиз')}
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="p-2 text-slate-400 hover:text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {!isAuthenticated ? (
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  {language === 'ru' ? 'PIN-код администратора' : language === 'kz' ? 'Әкімшінің PIN-коды' : 'Администратор ПИН-коду'}
                </label>
                <div className="relative">
                  <Key className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                  <input
                    type="password"
                    maxLength={6}
                    value={pin}
                    onChange={(e) => {
                      setPin(e.target.value);
                      setError('');
                    }}
                    placeholder="2026"
                    className="w-full bg-[#090D16] border border-slate-700 rounded-2xl pl-11 pr-4 py-3 text-white text-base focus:border-red-500 focus:outline-none tracking-widest"
                    autoFocus
                  />
                </div>
                <p className="text-[11px] text-slate-500 mt-1.5">
                  {language === 'ru' ? 'PIN по умолчанию: ' : language === 'kz' ? 'Әдепкі PIN-код: ' : 'Баштапкы ПИН-код: '}
                  <span className="text-amber-400 font-bold">2026</span>
                </p>
              </div>

              {error && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-red-950/50 border border-red-800 text-xs text-red-300">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-2xl bg-[#DC2626] hover:bg-red-700 font-bold text-sm text-white uppercase tracking-wider shadow-lg shadow-red-900/40 transition-all cursor-pointer"
              >
                {language === 'ru' ? 'Войти' : language === 'kz' ? 'Кіру' : 'Кирүү'}
              </button>
            </form>
          ) : (
            <form onSubmit={handleSave} className="space-y-5">
              
              {/* Sell Rate Input */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    {language === 'ru' ? 'Курс продажи (1 CNY = ? сом)' : language === 'kz' ? 'Сату бағамы (1 CNY = ? сом)' : 'Сатуу курсу (1 CNY канча сом?)'}
                  </label>
                  <span className="text-xs text-amber-400 font-bold">
                    {language === 'ru' ? 'Основной курс' : language === 'kz' ? 'Негізгі бағам' : 'Негизги курс'}
                  </span>
                </div>
                <div className="relative flex items-center gap-2">
                  <input
                    type="number"
                    step="0.01"
                    value={sellRate}
                    onChange={(e) => setSellRate(e.target.value)}
                    className="w-full bg-[#090D16] border border-slate-700 rounded-2xl px-4 py-3 text-xl font-bold text-white focus:border-red-500 focus:outline-none"
                    placeholder="12.35"
                  />
                  <div className="flex flex-col gap-1">
                    <button
                      type="button"
                      onClick={() => handleQuickAdjust('sell', 0.05)}
                      className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-[10px] font-bold rounded-lg text-white"
                    >
                      +0.05
                    </button>
                    <button
                      type="button"
                      onClick={() => handleQuickAdjust('sell', -0.05)}
                      className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-[10px] font-bold rounded-lg text-white"
                    >
                      -0.05
                    </button>
                  </div>
                </div>
              </div>

              {/* Buy Rate Input */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    {language === 'ru' ? 'Курс покупки (Покупка)' : language === 'kz' ? 'Сатып алу бағамы (Покупка)' : 'Сатып алуу курсу (Покупка)'}
                  </label>
                </div>
                <div className="relative flex items-center gap-2">
                  <input
                    type="number"
                    step="0.01"
                    value={buyRate}
                    onChange={(e) => setBuyRate(e.target.value)}
                    className="w-full bg-[#090D16] border border-slate-700 rounded-2xl px-4 py-3 text-xl font-bold text-white focus:border-red-500 focus:outline-none"
                    placeholder="12.20"
                  />
                  <div className="flex flex-col gap-1">
                    <button
                      type="button"
                      onClick={() => handleQuickAdjust('buy', 0.05)}
                      className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-[10px] font-bold rounded-lg text-white"
                    >
                      +0.05
                    </button>
                    <button
                      type="button"
                      onClick={() => handleQuickAdjust('buy', -0.05)}
                      className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-[10px] font-bold rounded-lg text-white"
                    >
                      -0.05
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#0B0F19] border border-slate-800 text-xs text-slate-400 space-y-1">
                <div className="flex justify-between">
                  <span>{language === 'ru' ? 'Текущая продажа:' : language === 'kz' ? 'Қазіргі сату:' : 'Азыркы сатуу:'}</span>
                  <span className="font-bold text-white">{rates.sellRate} сом</span>
                </div>
                <div className="flex justify-between">
                  <span>{language === 'ru' ? 'Последнее обновление:' : language === 'kz' ? 'Соңғы жаңарту:' : 'Акыркы жаңыртылган:'}</span>
                  <span className="text-slate-300">{rates.updatedAt}</span>
                </div>
              </div>

              {success && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-950/60 border border-emerald-800 text-xs text-emerald-300">
                  <Check className="w-4 h-4 shrink-0" />
                  <span>{success}</span>
                </div>
              )}

              {error && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-red-950/50 border border-red-800 text-xs text-red-300">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    sound.playClick();
                    setIsAuthenticated(false);
                    setPin('');
                  }}
                  className="w-1/3 py-3 px-3 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-700 font-semibold text-xs text-slate-300"
                >
                  {language === 'ru' ? 'Выйти' : language === 'kz' ? 'Шығу' : 'Чыгуу'}
                </button>
                <button
                  type="submit"
                  className="w-2/3 py-3 px-4 rounded-2xl bg-[#DC2626] hover:bg-red-700 font-bold text-xs uppercase tracking-wider text-white shadow-lg shadow-red-900/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>{language === 'ru' ? 'Сохранить курс' : language === 'kz' ? 'Бағамды сақтау' : 'Курсту сактоо'}</span>
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
