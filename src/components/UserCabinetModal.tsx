import React, { useState } from 'react';
import { 
  X, 
  Home, 
  ArrowLeftRight, 
  History, 
  CreditCard, 
  User, 
  Headphones, 
  CheckCircle2, 
  ArrowUpRight, 
  Clock, 
  Copy, 
  Check, 
  Sparkles,
  Wallet,
  ShieldCheck
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useRates } from '../context/RateContext';
import { openWhatsAppDirect, CONTACT_INFO } from '../data/content';
import { sound } from '../utils/sound';

interface UserCabinetModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenExchange: () => void;
}

export const UserCabinetModal: React.FC<UserCabinetModalProps> = ({
  isOpen,
  onClose,
  onOpenExchange,
}) => {
  const { language } = useLanguage();
  const { rates } = useRates();
  const [activeTab, setActiveTab] = useState<'home' | 'exchange' | 'history' | 'cards' | 'profile' | 'support'>('home');
  const [copiedId, setCopiedId] = useState(false);
  const [alipayId, setAlipayId] = useState('+996 555 123456');

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(alipayId);
    setCopiedId(true);
    sound.playSuccess();
    setTimeout(() => setCopiedId(false), 2000);
  };

  const navItems = [
    { id: 'home', label: language === 'ru' ? 'Главная' : language === 'kz' ? 'Басты бет' : 'Башкы бет', icon: Home },
    { id: 'exchange', label: language === 'ru' ? 'Обмен' : language === 'kz' ? 'Айырбастау' : 'Алмаштыруу', icon: ArrowLeftRight },
    { id: 'history', label: language === 'ru' ? 'История' : language === 'kz' ? 'Тарих' : 'Тарых', icon: History },
    { id: 'cards', label: language === 'ru' ? 'Мои реквизиты' : language === 'kz' ? 'Реквизиттерім' : 'Реквизиттерим', icon: CreditCard },
    { id: 'profile', label: language === 'ru' ? 'Профиль' : language === 'kz' ? 'Профиль' : 'Профиль', icon: User },
    { id: 'support', label: language === 'ru' ? 'Поддержка' : language === 'kz' ? 'Қолдау' : 'Колдоо', icon: Headphones },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col md:flex-row h-[620px] max-h-[92vh]">
        
        {/* Left Sidebar Menu */}
        <div className="w-full md:w-64 bg-[#111827] text-white p-5 flex flex-col justify-between shrink-0">
          <div>
            {/* Cabinet Brand Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#1F2937] border border-slate-700 flex items-center justify-center text-[#C9A227] font-bold text-base">
                  ¥
                </div>
                <div>
                  <div className="font-extrabold text-sm tracking-tight">YuanPro Banking</div>
                  <div className="text-[10px] text-slate-400">
                    {language === 'ru' ? 'Личный кабинет' : language === 'kz' ? 'Жеке кабинет' : 'Жеке кабинет'}
                  </div>
                </div>
              </div>

              {/* Close button on mobile */}
              <button 
                onClick={onClose}
                className="md:hidden p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Navigation items */}
            <div className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      sound.playClick();
                      if (item.id === 'exchange') {
                        onClose();
                        onOpenExchange();
                      } else {
                        setActiveTab(item.id as any);
                      }
                    }}
                    className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-xs transition-all text-left ${
                      active 
                        ? 'bg-[#1F2937] text-white font-bold shadow-sm' 
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${active ? 'text-[#C9A227]' : 'text-slate-400'}`} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* User Profile Pill at bottom */}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs border border-emerald-500/30">
                A
              </div>
              <div className="min-w-0">
                <div className="font-bold text-white text-xs truncate">
                  {language === 'ru' ? 'Аккаунт клиента' : language === 'kz' ? 'Клиент аккаунты' : 'Кардар аккаунту'}
                </div>
                <div className="text-[10px] text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>{language === 'ru' ? 'Верифицирован' : language === 'kz' ? 'Тексерілген' : 'Текшерилген'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Main Content Area */}
        <div className="flex-1 bg-[#F7F8FA] flex flex-col min-w-0 overflow-y-auto">
          
          {/* Header Bar */}
          <div className="p-6 pb-4 bg-white border-b border-slate-100 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-[#111827] flex items-center gap-2">
                <span>{language === 'ru' ? 'Добро пожаловать' : language === 'kz' ? 'Қош келдіңіз' : 'Кош келиңиз'}</span>
                <span>👋</span>
              </h2>
              <p className="text-xs text-[#6B7280]">
                {language === 'ru' 
                  ? 'Управление вашими переводами и реквизитами' 
                  : language === 'kz'
                  ? 'Аударымдар мен реквизиттеріңізді басқару'
                  : 'Которууларды жана реквизиттерди башкаруу'}
              </p>
            </div>

            <button
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              className="hidden md:flex p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 space-y-6">
            
            {/* Top Balance & Quick Action Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider">
                  {language === 'ru' ? 'Ваш баланс' : language === 'kz' ? 'Сіздің теңгеріміңіз' : 'Сиздин балансыңыз'}
                </div>
                <div className="text-3xl font-black text-[#111827] font-display mt-1">
                  12 500 <span className="text-lg font-bold text-[#6B7280]">KGS</span>
                </div>
                <div className="text-[11px] text-emerald-600 font-medium mt-1 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" />
                  <span>≈ 1 562.50 CNY {language === 'ru' ? 'по курсу' : language === 'kz' ? 'бағамымен' : 'курсу боюнча'} {rates.sellRate}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={() => {
                    sound.playClick();
                    onClose();
                    onOpenExchange();
                  }}
                  className="flex-1 sm:flex-none px-5 py-3 rounded-xl bg-[#111827] hover:bg-[#1F2937] text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ArrowLeftRight className="w-4 h-4 text-[#C9A227]" />
                  <span>{language === 'ru' ? 'Обменять' : language === 'kz' ? 'Айырбастау' : 'Алмаштыруу'}</span>
                </button>
              </div>
            </div>

            {/* Saved Alipay/WeChat Details */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="font-bold text-sm text-[#111827] flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-[#111827]" />
                  <span>{language === 'ru' ? 'Мои реквизиты для получения' : language === 'kz' ? 'Юань алуға арналған реквизиттер' : 'Юань алуу үчүн реквизиттер'}</span>
                </div>
                <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  {language === 'ru' ? 'Активен' : language === 'kz' ? 'Белсенді' : 'Активдүү'}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Alipay Card */}
                <div className="p-4 rounded-xl border border-slate-200 bg-[#F7F8FA] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#1677FF] flex items-center justify-center text-white font-bold text-xs shadow-sm">
                      支
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#111827]">Alipay (支付宝)</div>
                      <div className="text-[11px] text-[#6B7280] font-mono">{alipayId}</div>
                    </div>
                  </div>

                  <button
                    onClick={handleCopy}
                    className="p-2 text-slate-400 hover:text-[#111827] transition-colors"
                    title={language === 'ru' ? 'Копировать' : language === 'kz' ? 'Көшіру' : 'Көчүрүү'}
                  >
                    {copiedId ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* WeChat Card */}
                <div className="p-4 rounded-xl border border-slate-200 bg-[#F7F8FA] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#07C160] flex items-center justify-center text-white font-bold text-xs shadow-sm">
                      微
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#111827]">WeChat Pay (微信)</div>
                      <div className="text-[11px] text-[#6B7280]">{language === 'ru' ? 'QR-код прикреплен' : language === 'kz' ? 'QR-код тіркелген' : 'QR-код тиркелген'}</div>
                    </div>
                  </div>

                  <span className="text-[10px] font-bold text-[#16A34A] bg-white px-2 py-1 rounded-md border border-slate-200">
                    {language === 'ru' ? 'Готов' : language === 'kz' ? 'Дайын' : 'Даяр'}
                  </span>
                </div>
              </div>
            </div>

            {/* Recent Operations */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="font-bold text-sm text-[#111827] flex items-center gap-2">
                  <History className="w-4 h-4 text-[#111827]" />
                  <span>{language === 'ru' ? 'Последние операции' : language === 'kz' ? 'Соңғы операциялар' : 'Акыркы операциялар'}</span>
                </div>
                <span className="text-xs text-[#6B7280]">
                  {language === 'ru' ? 'Всего 24 заявки' : language === 'kz' ? 'Барлығы 24 өтінім' : 'Бардыгы 24 табыштама'}
                </span>
              </div>

              <div className="space-y-2.5">
                {/* Op 1 */}
                <div className="p-3.5 rounded-xl border border-slate-100 hover:border-slate-200 bg-white flex items-center justify-between transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-[#111827]">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#111827]">KGS → CNY (Alipay)</div>
                      <div className="text-[11px] text-[#6B7280]">
                        {language === 'ru' ? 'Сегодня, 14:20' : language === 'kz' ? 'Бүгін, 14:20' : 'Бүгүн, 14:20'} • {language === 'ru' ? 'Курс' : language === 'kz' ? 'Бағам' : 'Курс'} {rates.sellRate}
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-xs font-black text-[#111827]">10 000 сом</div>
                    <div className="text-[10px] font-bold text-emerald-600 flex items-center justify-end gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>{language === 'ru' ? 'Выполнено' : language === 'kz' ? 'Орындалды' : 'Аткарылды'}</span>
                    </div>
                  </div>
                </div>

                {/* Op 2 */}
                <div className="p-3.5 rounded-xl border border-slate-100 hover:border-slate-200 bg-white flex items-center justify-between transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-[#111827]">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#111827]">KGS → CNY (WeChat)</div>
                      <div className="text-[11px] text-[#6B7280]">
                        {language === 'ru' ? 'Вчера, 18:45' : language === 'kz' ? 'Кеше, 18:45' : 'Кечээ, 18:45'} • {language === 'ru' ? 'Курс' : language === 'kz' ? 'Бағам' : 'Курс'} {rates.sellRate}
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-xs font-black text-[#111827]">25 000 сом</div>
                    <div className="text-[10px] font-bold text-emerald-600 flex items-center justify-end gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>{language === 'ru' ? 'Выполнено' : language === 'kz' ? 'Орындалды' : 'Аткарылды'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
