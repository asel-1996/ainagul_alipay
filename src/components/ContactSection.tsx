import React, { useState } from 'react';
import { MessageCircle, Phone, Instagram, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import { CONTACT_INFO, openWhatsAppDirect } from '../data/content';
import { useLanguage } from '../context/LanguageContext';
import { sound } from '../utils/sound';

export const ContactSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    amount: '3000',
    wallet: 'Alipay (支付宝)' as 'Alipay (支付宝)' | 'WeChat Pay (微信支付)',
    bank: 'MBank' as string,
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const bankList = [
    { id: 'mbank', label: 'MBank' },
    { id: 'obank', label: 'О!Банк (О!Деньги)' },
    { id: 'optima', label: 'Optima Bank' },
    { id: 'bakai', label: 'Bakai Bank' },
    { id: 'baitushum', label: 'Бай Түшүм' },
    { id: 'cash', label: language === 'ru' ? 'Наличные ($ / сом)' : language === 'kz' ? 'Қолма-қол ($ / сом)' : 'Накталай ($ / сом)' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playSuccess();
    
    let text = '';
    if (language === 'ru') {
      text = `Здравствуйте! Онлайн заявка на обмен:\n• Имя: ${formData.name || 'Клиент'}\n• Телефон: ${formData.phone || '-'}\n• Сумма: ${formData.amount || '3000'} CNY\n• Кошелек для зачисления: ${formData.wallet}\n• Банк для оплаты: ${formData.bank}\n${formData.message ? '• Сообщение: ' + formData.message + '\n' : ''}Отправьте, пожалуйста, реквизиты.`;
    } else if (language === 'kz') {
      text = `Сәлеметсіз бе! Айырбастауға онлайн өтінім:\n• Аты: ${formData.name || 'Клиент'}\n• Телефон: ${formData.phone || '-'}\n• Сомасы: ${formData.amount || '3000'} CNY\n• Толықтыру әмияны: ${formData.wallet}\n• Төлем банкі: ${formData.bank}\n${formData.message ? '• Хабарлама: ' + formData.message + '\n' : ''}Реквизиттерді жібере аласыз ба?`;
    } else {
      text = `Саламатсызбы! Алмаштырууга онлайн билдирүү:\n• Аты-жөнү: ${formData.name || 'Кардар'}\n• Телефон: ${formData.phone || '-'}\n• Суммасы: ${formData.amount || '3000'} CNY\n• Толуктоо капчыгы: ${formData.wallet}\n• Төлөм аткаруучу банк: ${formData.bank}\n${formData.message ? '• Кошумча билдирүү: ' + formData.message + '\n' : ''}Төлөм үчүн реквизиттерди жөнөтө аласызбы?`;
    }

    const url = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', amount: '3000', wallet: 'Alipay (支付宝)', bank: 'MBank', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#F7F8FA] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-extrabold uppercase tracking-widest text-[#C9A227] mb-2">
            {language === 'ru' ? 'Связь с нами' : language === 'kz' ? 'Байланыс' : 'Байланыш'}
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-[#111827] tracking-tight">
            {language === 'ru' ? 'Контакты и заказ онлайн' : language === 'kz' ? 'Байланыс және онлайн тапсырыс' : 'Байланышуу жана онлайн заказ'}
          </h2>
          <p className="text-sm sm:text-base text-[#6B7280] mt-2">
            {language === 'ru'
              ? 'Напишите нам для быстрого обмена или консультации'
              : language === 'kz'
              ? 'Жылдам айырбастау немесе кеңес алу үшін бізге жазыңыз'
              : 'Ыкчам алмаштыруу же консультация алуу үчүн бизге жазыңыз'}
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contacts */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Primary WhatsApp Card */}
            <div
              onClick={() => {
                sound.playClick();
                openWhatsAppDirect(undefined, undefined, undefined, language);
              }}
              className="p-7 rounded-[24px] bg-white border border-slate-200/90 hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  {language === 'ru' ? 'Ответ за 2 мин' : language === 'kz' ? '2 минутта жауап' : '2 мүнөттө жооп'}
                </span>
              </div>

              <div className="text-xs font-bold uppercase tracking-wider text-[#6B7280] mb-1">
                WhatsApp чат
              </div>
              <div className="text-xl sm:text-2xl font-black text-[#111827] font-display mb-2">
                {CONTACT_INFO.whatsappDisplay}
              </div>
              <p className="text-xs text-[#6B7280] mb-5">
                {language === 'ru' ? 'Быстрый заказ, отправка реквизитов и консультация' : language === 'kz' ? 'Жылдам тапсырыс, деректемелерді алу және кеңес' : 'Тез заказ, реквизиттерди алуу жана консультация'}
              </p>

              <div className="w-full py-3.5 px-4 rounded-xl bg-[#111827] hover:bg-[#1F2937] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#16A34A]" />
                <span>{language === 'ru' ? 'Написать в WhatsApp' : language === 'kz' ? 'WhatsApp-қа жазу' : 'WhatsApp-ка жазуу'}</span>
                <ArrowRight className="w-4 h-4 text-[#C9A227]" />
              </div>
            </div>

            {/* Instagram & Phone Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Instagram Card */}
              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="p-5 rounded-2xl bg-white border-2 border-pink-200 hover:border-pink-500 hover:shadow-md transition-all block group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white flex items-center justify-center mb-3 group-hover:scale-105 transition-transform shadow-xs">
                  <Instagram className="w-5 h-5" />
                </div>
                <div className="text-xs font-bold text-[#6B7280]">Instagram (Официальный)</div>
                <div className="text-xs sm:text-sm font-extrabold text-[#111827] font-display mt-0.5 group-hover:text-pink-600 transition-colors">
                  {CONTACT_INFO.instagram}
                </div>
              </a>

              {/* Phone Card */}
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/[^0-9+]/g, '')}`}
                onClick={() => sound.playClick()}
                className="p-5 rounded-2xl bg-white border border-slate-200/90 hover:shadow-sm transition-all block group"
              >
                <div className="w-9 h-9 rounded-xl bg-slate-100 text-[#111827] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="text-xs font-bold text-[#6B7280]">{language === 'ru' ? 'Телефон' : language === 'kz' ? 'Телефон' : 'Телефон'}</div>
                <div className="text-xs sm:text-sm font-bold text-[#111827] font-display mt-0.5">
                  {CONTACT_INFO.phone}
                </div>
              </a>

            </div>

          </div>

          {/* Right Column: Direct Form */}
          <div className="lg:col-span-7 bg-white rounded-[24px] p-6 sm:p-9 border border-slate-200/90 shadow-sm">
            
            <div className="mb-6">
              <h3 className="text-lg sm:text-xl font-bold font-display text-[#111827]">
                {language === 'ru' ? 'Быстрая заявка онлайн' : language === 'kz' ? 'Жылдам онлайн өтінім' : 'Онлайн билдирүү калтыруу'}
              </h3>
              <p className="text-xs text-[#6B7280] mt-1">
                {language === 'ru' ? 'Заполните поля и мы мгновенно свяжемся с вами в WhatsApp' : language === 'kz' ? 'Өрістерді толтырыңыз, біз сізбен WhatsApp арқылы дереу байланысамыз' : 'Маалыматты толтуруңуз, биз сиз менен тез байланышабыз'}
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="text-base font-bold text-[#111827] font-display">{t.contact.formSuccessTitle}</h4>
                <p className="text-xs text-[#6B7280]">{t.contact.formSuccessSub}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#4B5563] mb-1.5">
                      {t.contact.nameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.contact.namePlaceholder}
                      className="w-full bg-[#F7F8FA] border border-slate-200 rounded-xl px-3.5 py-3 text-xs sm:text-sm text-[#111827] focus:bg-white focus:border-[#111827] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#4B5563] mb-1.5">
                      {t.contact.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={t.contact.phonePlaceholder}
                      className="w-full bg-[#F7F8FA] border border-slate-200 rounded-xl px-3.5 py-3 text-xs sm:text-sm text-[#111827] focus:bg-white focus:border-[#111827] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* 1. Сумма юаней */}
                <div>
                  <label className="block text-xs font-bold text-[#4B5563] mb-1.5">
                    {language === 'ru' ? 'Сумма в юанях (CNY):' : language === 'kz' ? 'Юаньдегі сома (CNY):' : 'Юандагы сумма (CNY):'}
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-base font-bold text-[#C9A227]">
                      ¥
                    </span>
                    <input
                      type="text"
                      value={formData.amount}
                      onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                      placeholder="3 000"
                      className="w-full bg-[#F7F8FA] border border-slate-200 rounded-xl pl-9 pr-14 py-3 text-sm sm:text-base font-bold font-mono text-[#111827] focus:bg-white focus:border-[#111827] focus:outline-none transition-colors"
                    />
                    <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">
                      CNY
                    </span>
                  </div>
                </div>

                {/* 2. ӨЗҮНЧӨ БӨЛҮК: Капчыкты тандоо (Alipay же WeChat Pay) */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-extrabold text-[#111827] uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] flex items-center justify-center font-bold">1</span>
                      <span>{language === 'ru' ? 'Кошелек пополнения (Alipay / WeChat):' : language === 'kz' ? 'Толықтыру әмияны (Alipay / WeChat):' : 'Толуктоо капчыгы (Alipay / WeChat):'}</span>
                    </label>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                      0% комиссия
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <button
                      type="button"
                      onClick={() => {
                        sound.playClick();
                        setFormData({ ...formData, wallet: 'Alipay (支付宝)' });
                      }}
                      className={`p-3 rounded-xl border-2 transition-all cursor-pointer flex items-center gap-3 text-left ${
                        formData.wallet === 'Alipay (支付宝)'
                          ? 'border-[#1677FF] bg-blue-50/70 text-[#111827] shadow-xs'
                          : 'border-slate-200 bg-[#F7F8FA] text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      <div className="w-9 h-9 rounded-xl bg-[#1677FF] text-white flex items-center justify-center text-base font-black shadow-xs shrink-0">
                        支
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs sm:text-sm font-bold text-[#111827]">Alipay (支付宝)</div>
                        <div className="text-[10px] text-slate-500 font-medium">
                          {language === 'ru' ? 'По номеру или QR-коду' : language === 'kz' ? 'Нөмір немесе QR-код бойынша' : 'Телефон же QR-код боюнча'}
                        </div>
                      </div>
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                        formData.wallet === 'Alipay (支付宝)' ? 'border-[#1677FF] bg-[#1677FF] text-white' : 'border-slate-300'
                      }`}>
                        {formData.wallet === 'Alipay (支付宝)' && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        sound.playClick();
                        setFormData({ ...formData, wallet: 'WeChat Pay (微信支付)' });
                      }}
                      className={`p-3 rounded-xl border-2 transition-all cursor-pointer flex items-center gap-3 text-left ${
                        formData.wallet === 'WeChat Pay (微信支付)'
                          ? 'border-[#07C160] bg-emerald-50/70 text-[#111827] shadow-xs'
                          : 'border-slate-200 bg-[#F7F8FA] text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      <div className="w-9 h-9 rounded-xl bg-[#07C160] text-white flex items-center justify-center text-base font-black shadow-xs shrink-0">
                        微
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs sm:text-sm font-bold text-[#111827]">WeChat Pay (微信)</div>
                        <div className="text-[10px] text-slate-500 font-medium">
                          {language === 'ru' ? 'По QR-коду или номеру' : language === 'kz' ? 'QR-код немесе нөмір бойынша' : 'QR-код же номер боюнча'}
                        </div>
                      </div>
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                        formData.wallet === 'WeChat Pay (微信支付)' ? 'border-[#07C160] bg-[#07C160] text-white' : 'border-slate-300'
                      }`}>
                        {formData.wallet === 'WeChat Pay (微信支付)' && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>
                    </button>
                  </div>
                </div>

                {/* 3. ӨЗҮНЧӨ БӨЛҮК: Төлөм аткаруучу банкты тандоо */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-extrabold text-[#111827] uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-5 h-5 rounded-full bg-amber-500 text-white text-[10px] flex items-center justify-center font-bold">2</span>
                      <span>{language === 'ru' ? 'Каким банком оплачиваете (КР):' : language === 'kz' ? 'Қай банктен төлем жасайсыз (ҚР):' : 'Кайсы банктан төлөм аткарасыз:'}</span>
                    </label>
                    <span className="text-[10px] text-slate-500 font-medium">
                      {language === 'ru' ? 'Без комиссии' : language === 'kz' ? '0% комиссия' : '0 сом комиссия'}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {bankList.map((b) => (
                      <button
                        key={b.id}
                        type="button"
                        onClick={() => {
                          sound.playClick();
                          setFormData({ ...formData, bank: b.label });
                        }}
                        className={`p-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer truncate ${
                          formData.bank === b.label
                            ? 'bg-[#111827] border-[#111827] text-white shadow-xs'
                            : 'bg-[#F7F8FA] border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                        }`}
                      >
                        {b.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#4B5563] mb-1.5">
                    {t.contact.messageLabel}
                  </label>
                  <textarea
                    rows={2}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.contact.messagePlaceholder}
                    className="w-full bg-[#F7F8FA] border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#111827] focus:bg-white focus:border-[#111827] focus:outline-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl bg-[#111827] hover:bg-[#1F2937] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 text-[#16A34A]" />
                  <span>{t.contact.submitBtn}</span>
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
