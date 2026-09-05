import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight,
  TrendingUp, 
  ArrowLeftRight, 
  HelpCircle, 
  Phone, 
  ShieldCheck, 
  Lock,
  MessageCircle,
  Instagram,
  Calculator,
  Building2,
  Sparkles,
  Zap,
  CheckCircle2,
  Home
} from 'lucide-react';
import { useRates } from '../context/RateContext';
import { useLanguage } from '../context/LanguageContext';
import { CONTACT_INFO, openWhatsAppDirect } from '../data/content';
import { sound } from '../utils/sound';
import { Language } from '../types';
import { TopTicker } from './TopTicker';

interface HeaderProps {
  onOpenOrderModal: () => void;
  onOpenAdminModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  onOpenOrderModal, 
  onOpenAdminModal 
}) => {
  const { rates, setIsAdminOpen } = useRates();
  const { language, setLanguage, t } = useLanguage();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleLanguageChange = (lang: Language) => {
    sound.playClick();
    setLanguage(lang);
  };

  const handleNavClick = (href: string) => {
    sound.playClick();
    setDrawerOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navMenuItems = [
    { 
      label: language === 'ru' ? 'Главная & Калькулятор' : language === 'kz' ? 'Басты бет & Калькулятор' : 'Башкы бет & Калькулятор', 
      href: '#hero',
      icon: Home,
      desc: language === 'ru' ? 'Расчет юаней и заказ' : language === 'kz' ? 'Юань есептеу және тапсырыс' : 'Юанды эсептөө жана заказ',
      color: 'text-[#1677FF] bg-blue-50'
    },
    { 
      label: language === 'ru' ? 'Курсы валют (KGS ↔ CNY)' : language === 'kz' ? 'Валюта бағамдары (KGS ↔ CNY)' : 'Курстар (KGS ↔ CNY)', 
      href: '#rates',
      icon: TrendingUp,
      desc: `1 CNY = ${rates.sellRate.toFixed(2)} сом`,
      color: 'text-[#C9A227] bg-amber-50'
    },
    { 
      label: language === 'ru' ? 'Онлайн заявка & Контакты' : language === 'kz' ? 'Онлайн өтінім & Байланыс' : 'Онлайн билдирүү & Байланыш', 
      href: '#contact',
      icon: MessageCircle,
      desc: language === 'ru' ? 'Оставить заявку на обмен' : language === 'kz' ? 'Айырбастауға онлайн өтінім' : 'Алмаштырууга онлайн билдирүү',
      color: 'text-[#16A34A] bg-emerald-50'
    },
    { 
      label: language === 'ru' ? 'Банки Кыргызстана & Кошельки' : language === 'kz' ? 'Қырғызстан банктері & Әмияндар' : 'Кыргызстан төлөм банктары & Капчыктар', 
      href: '#banks',
      icon: Building2,
      desc: 'MBank, О!Банк, Optima, Bakai, Alipay, WeChat',
      color: 'text-sky-600 bg-sky-50'
    },
    { 
      label: language === 'ru' ? 'Почему нам доверяют' : language === 'kz' ? 'Неліктен бізге сенеді' : 'Эмне үчүн бизге ишенишет', 
      href: '#trust',
      icon: ShieldCheck,
      desc: language === 'ru' ? '0% комиссия, гарантия чека' : language === 'kz' ? '0% комиссия, чек кепілдігі' : '0% комиссия, чек кепилдиги',
      color: 'text-amber-600 bg-amber-50'
    },
    { 
      label: language === 'ru' ? 'Как это работает (3 шага)' : language === 'kz' ? 'Бұл қалай жұмыс істейді' : 'Бул кандай иштейт (3 кадам)', 
      href: '#how-it-works',
      icon: Zap,
      desc: language === 'ru' ? 'Простой процесс обмена' : language === 'kz' ? 'Оңай айырбастау жолы' : 'Оңой алмаштыруу жолу',
      color: 'text-[#D93025] bg-red-50'
    },
    { 
      label: language === 'ru' ? 'Частые вопросы (FAQ)' : language === 'kz' ? 'Жиі қойылатын сұрақтар' : 'Көп берилүүчү суроолор (FAQ)', 
      href: '#faq',
      icon: HelpCircle,
      desc: language === 'ru' ? 'Ответы на все вопросы' : language === 'kz' ? 'Барлық сұрақтарға жауаптар' : 'Бардык суроолорго жооптор',
      color: 'text-purple-600 bg-purple-50'
    },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
        
        {/* TOP TICKER BAR */}
        <TopTicker />

        {/* MAIN NAVIGATION BAR */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 gap-3 sm:gap-4">
            
            {/* Left: Brand Logo */}
            <div className="flex items-center gap-3">
              <a
                href="#hero"
                onClick={() => sound.playClick()}
                className="flex items-center gap-2.5 group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-2xl bg-[#111827] flex items-center justify-center text-white font-black font-display text-xl shadow-md border border-slate-800 group-hover:scale-105 transition-transform">
                  <span className="text-[#C9A227]">¥</span>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xl font-black font-display tracking-tight text-[#111827]">
                      Yuan<span className="text-[#D93025]">Pro</span>
                    </span>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-50 text-[#C9A227] border border-amber-200/60 hidden sm:inline-block">
                      FINTECH
                    </span>
                  </div>
                  <span className="text-[10px] text-[#6B7280] font-medium -mt-1 hidden sm:block">
                    Alipay & WeChat Payments
                  </span>
                </div>
              </a>
            </div>

            {/* Center / Right: Instagram Button + Language Switch + Three-Line Hamburger (Үч сызык Меню) */}
            <div className="flex items-center gap-2 sm:gap-3">
              
              {/* INSTAGRAM BUTTON WITH OFFICIAL INSTAGRAM LOGO */}
              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="flex items-center gap-2 px-3 sm:px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] hover:opacity-90 shadow-sm transition-all cursor-pointer hover:scale-105 active:scale-95"
                title="Instagram: @alipay.ainagul"
              >
                {/* Official Instagram Camera / Glyph SVG Icon */}
                <div className="w-4 h-4 rounded-md border-[1.8px] border-white flex items-center justify-center relative shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full border-[1.5px] border-white" />
                  <div className="absolute top-0.5 right-0.5 w-0.5 h-0.5 rounded-full bg-white" />
                </div>
                <span className="hidden sm:inline font-bold">@alipay.ainagul</span>
                <span className="sm:hidden font-bold">Insta</span>
              </a>

              {/* 3-Language Selector */}
              <div className="flex items-center bg-[#F7F8FA] p-1 rounded-xl border border-slate-200 text-xs font-bold">
                <button
                  onClick={() => handleLanguageChange('ky')}
                  className={`px-2 py-1 rounded-lg transition-all cursor-pointer ${
                    language === 'ky'
                      ? 'bg-[#111827] text-white shadow-sm'
                      : 'text-[#6B7280] hover:text-[#111827]'
                  }`}
                  title="Кыргызча"
                >
                  KG
                </button>
                <button
                  onClick={() => handleLanguageChange('ru')}
                  className={`px-2 py-1 rounded-lg transition-all cursor-pointer ${
                    language === 'ru'
                      ? 'bg-[#111827] text-white shadow-sm'
                      : 'text-[#6B7280] hover:text-[#111827]'
                  }`}
                  title="Русский"
                >
                  RU
                </button>
                <button
                  onClick={() => handleLanguageChange('kz')}
                  className={`px-2 py-1 rounded-lg transition-all cursor-pointer ${
                    language === 'kz'
                      ? 'bg-[#111827] text-white shadow-sm'
                      : 'text-[#6B7280] hover:text-[#111827]'
                  }`}
                  title="Қазақша"
                >
                  KZ
                </button>
              </div>

              {/* WHATSAPP QUICK BUTTON */}
              <button
                onClick={() => {
                  sound.playClick();
                  openWhatsAppDirect(undefined, undefined, undefined, language);
                }}
                className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#16A34A] hover:bg-[#15803D] shadow-sm transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>WhatsApp</span>
              </button>

              {/* ☰ THREE-LINE HAMBURGER BUTTON (Үч сызыктуу вкладка баскычы) */}
              <button
                onClick={() => {
                  sound.playClick();
                  setDrawerOpen(true);
                }}
                id="header-three-lines-menu-btn"
                className="flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl bg-[#111827] hover:bg-[#1F2937] text-white font-extrabold text-xs shadow-md transition-all cursor-pointer active:scale-95 border border-slate-700"
                aria-label="Үч сызыктуу меню"
              >
                <Menu className="w-5 h-5 text-[#C9A227]" />
                <span className="font-bold tracking-wide">
                  {language === 'ru' ? 'Меню' : language === 'kz' ? 'Мәзір' : 'Меню'}
                </span>
              </button>

            </div>

          </div>
        </div>
      </header>

      {/* ☰ FULLSCREEN / DRAWER MENU MODAL (Үч сызыкты басканда ачылуучу люкс вкладка) */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          
          {/* Backdrop */}
          <div
            onClick={() => setDrawerOpen(false)}
            className="absolute inset-0 bg-[#0F172A]/70 backdrop-blur-sm transition-opacity animate-fade-in"
          />

          {/* Drawer Panel from right */}
          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between overflow-y-auto animate-slide-left border-l border-slate-200">
              
              {/* Header of Drawer */}
              <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-[#111827] text-white">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-slate-800 flex items-center justify-center text-[#C9A227] font-black text-xl border border-slate-700">
                    ¥
                  </div>
                  <div>
                    <h3 className="font-extrabold font-display text-base text-white">
                      YuanPro <span className="text-[#D93025]">{language === 'ru' ? 'Меню' : language === 'kz' ? 'Мәзір' : 'Меню'}</span>
                    </h3>
                    <p className="text-xs text-slate-400">
                      1 CNY = {rates.sellRate.toFixed(2)} {language === 'ru' ? 'KGS' : 'сом'} • 0% {language === 'ru' ? 'комиссия' : language === 'kz' ? 'комиссия' : 'комиссия'}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    sound.playClick();
                    setDrawerOpen(false);
                  }}
                  className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
                  aria-label={language === 'ru' ? 'Закрыть' : language === 'kz' ? 'Жабу' : 'Жабуу'}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Menu Navigation Links List */}
              <div className="p-5 space-y-2 flex-1 overflow-y-auto">
                <div className="text-[11px] font-extrabold uppercase tracking-wider text-[#9CA3AF] px-3 mb-2">
                  {language === 'ru' ? 'Навигация по сайту:' : language === 'kz' ? 'Сайт бойынша навигация:' : 'Сайттын бөлүктөрү:'}
                </div>

                {navMenuItems.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleNavClick(item.href)}
                      className="w-full flex items-center justify-between p-3.5 rounded-2xl hover:bg-[#F7F8FA] border border-transparent hover:border-slate-200 transition-all text-left group cursor-pointer"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-extrabold text-sm text-[#111827] font-display group-hover:text-[#D93025] transition-colors">
                            {item.label}
                          </div>
                          <div className="text-xs text-[#6B7280]">
                            {item.desc}
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#111827] group-hover:translate-x-1 transition-all shrink-0" />
                    </button>
                  );
                })}

                {/* Direct Instagram Link in Menu */}
                <div className="pt-3 border-t border-slate-100 my-3">
                  <a
                    href={CONTACT_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      sound.playClick();
                      setDrawerOpen(false);
                    }}
                    className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-gradient-to-r from-purple-50 via-pink-50 to-orange-50 border border-pink-200 text-left group cursor-pointer hover:shadow-sm transition-all"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white flex items-center justify-center shrink-0 shadow-xs">
                        <Instagram className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-extrabold text-sm text-[#111827] font-display">
                          Instagram: @alipay.ainagul
                        </div>
                        <div className="text-xs text-pink-700 font-semibold">
                          {language === 'ru' ? 'Отзывы и актуальные новости' : language === 'kz' ? 'Пікірлер және өзекті жаңалықтар' : 'Пикирлер жана актуалдуу кабарлар'}
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-pink-600 group-hover:translate-x-1 transition-transform shrink-0" />
                  </a>
                </div>

              </div>

              {/* Drawer Footer Actions */}
              <div className="p-5 bg-[#F7F8FA] border-t border-slate-200 space-y-3">
                <button
                  onClick={() => {
                    sound.playClick();
                    setDrawerOpen(false);
                    openWhatsAppDirect(undefined, undefined, undefined, language);
                  }}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white/20" />
                  <span>WhatsApp: {CONTACT_INFO.phone}</span>
                </button>

                <div className="flex items-center justify-between text-[11px] text-[#6B7280] px-1">
                  <span>{language === 'ru' ? 'График:' : language === 'kz' ? 'Жұмыс кестесі:' : 'График:'} {CONTACT_INFO.workingHours}</span>
                  <button
                    onClick={() => {
                      setDrawerOpen(false);
                      setIsAdminOpen(true);
                    }}
                    className="text-slate-400 hover:text-slate-600 flex items-center gap-1 cursor-pointer"
                    title={language === 'ru' ? 'Админ' : language === 'kz' ? 'Админ' : 'Админ'}
                  >
                    <Lock className="w-3 h-3" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      )}
    </>
  );
};
