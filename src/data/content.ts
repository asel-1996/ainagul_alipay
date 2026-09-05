import { BenefitItem, GuaranteeItem, StepItem, TrustMetric, TestimonialItem, FaqItem, Language } from '../types';

export const CONTACT_INFO = {
  phone: '+996 501 595 471',
  whatsappNumber: '996501595471',
  whatsappDisplay: '+996 501 595 471',
  telegram: '@alipay_ainagul',
  instagram: '@alipay.ainagul',
  instagramUrl: 'https://www.instagram.com/alipay.ainagul/',
  workingHours: '09:00 — 22:00 (Күн сайын, дем алышсыз)',
  email: 'info@yuan-exchange.kg',
};

export const INITIAL_RATES = {
  buyRate: 12.20,
  sellRate: 12.35,
  currencyFrom: 'CNY',
  currencyTo: 'KGS',
  updatedAt: 'Бүгүн, 11:45',
  isLive: true,
};

export const TRUST_BADGES = [
  { text: 'Ачык шарттар', icon: 'FileText' },
  { text: 'Ыкчам байланыш', icon: 'MessageCircle' },
  { text: 'Кардарларды колдоо', icon: 'Users' },
  { text: 'MBank • O!Bank • Optima', icon: 'CreditCard' },
];

export const createWhatsAppUrl = (
  amountCny?: number, 
  estimatedSom?: number, 
  method?: string,
  lang: Language | string = 'ky'
) => {
  let message = '';

  if (lang === 'ru') {
    if (amountCny && amountCny > 0) {
      const somText = estimatedSom ? ` (~${estimatedSom.toLocaleString('ru-RU')} кыргызских сомов)` : '';
      const methodText = method ? ` Кошелек / Оплата: ${method}.` : '';
      message = `Здравствуйте! Мне нужно ${amountCny.toLocaleString('ru-RU')} CNY${somText}.${methodText} Отправьте, пожалуйста, реквизиты для оплаты.`;
    } else {
      message = 'Здравствуйте! Хочу пополнить Alipay / WeChat юанями (CNY). Отправьте, пожалуйста, реквизиты для оплаты.';
    }
  } else if (lang === 'kz') {
    if (amountCny && amountCny > 0) {
      const somText = estimatedSom ? ` (~${estimatedSom.toLocaleString('ru-RU')} қырғыз сомы)` : '';
      const methodText = method ? ` Төлем/Әмиян: ${method}.` : '';
      message = `Сәлеметсіз бе! Маған ${amountCny.toLocaleString('ru-RU')} CNY${somText} қажет еді.${methodText} Төлем үшін реквизиттерді жібере аласыз ба?`;
    } else {
      message = 'Сәлеметсіз бе! Alipay / WeChat үшін юань (CNY) толтырғым келеді. Төлем үшін реквизиттерді жібересіз бе?';
    }
  } else {
    // Default Kyrgyz
    if (amountCny && amountCny > 0) {
      const somText = estimatedSom ? ` (~${estimatedSom.toLocaleString('ru-RU')} кыргыз сому)` : '';
      const methodText = method ? ` Төлөм/Капчык: ${method}.` : '';
      message = `Саламатсызбы! Мага ${amountCny.toLocaleString('ru-RU')} CNY${somText} керек эле.${methodText} Төлөм үчүн реквизиттерди жөнөтө аласызбы?`;
    } else {
      message = 'Саламатсызбы! Alipay / WeChat үчүн юань (CNY) алгым келет. Төлөм үчүн реквизиттерди жөнөтө аласызбы?';
    }
  }

  return `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
};

export const openWhatsAppDirect = (
  amountCny?: number, 
  estimatedSom?: number, 
  method?: string,
  lang: Language | string = 'ky'
) => {
  const url = createWhatsAppUrl(amountCny, estimatedSom, method, lang);
  window.open(url, '_blank', 'noopener,noreferrer');
};

export const openInstagramDirect = () => {
  window.open(CONTACT_INFO.instagramUrl, '_blank', 'noopener,noreferrer');
};
