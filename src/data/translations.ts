import { Language, BenefitItem, GuaranteeItem, StepItem, TrustMetric, TestimonialItem, FaqItem } from '../types';

export interface Translations {
  ticker: {
    live: string;
    rateText: string;
    banksText: string;
    speedText: string;
    workTimeText: string;
    safeText: string;
  };
  header: {
    menu: string;
    close: string;
    brandSub: string;
    nav: {
      rates: string;
      banks: string;
      benefits: string;
      steps: string;
      reviews: string;
      faq: string;
      contact: string;
    };
    adminTooltip: string;
    soundOn: string;
    soundOff: string;
    orderBtn: string;
    quickOrder: string;
    workHoursLabel: string;
    workHoursVal: string;
  };
  hero: {
    todayRate: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    supportedLabel: string;
    orderBtn: string;
    instagramBtn: string;
    badge1: string;
    badge2: string;
    badge3: string;
    cardTag: string;
    cardTitle: string;
    cardSellRate: string;
    cardActive: string;
    statExpVal: string;
    statExpLabel: string;
    statClientsVal: string;
    statClientsLabel: string;
    cardWhatsappBtn: string;
    cardCalcLink: string;
  };
  calculator: {
    tag: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    rateCardTitle: string;
    rateCardLive: string;
    sellLabel: string;
    buyLabel: string;
    perCny: string;
    lockRateGtee: string;
    speedGtee: string;
    receiptGtee: string;
    calcTitle: string;
    calcSubtitle: string;
    amountLabel: string;
    presetsLabel: string;
    methodLabel: string;
    methods: {
      alipay: { label: string; sub: string };
      wechat: { label: string; sub: string };
      bank_transfer: { label: string; sub: string };
      cash: { label: string; sub: string };
    };
    totalToPay: string;
    currencySom: string;
    rateNote: string;
    commissionFree: string;
    submitBtn: string;
  };
  banks: {
    tag: string;
    titlePrefix: string;
    titleHighlight: string;
    subtitle: string;
    alipayTitle: string;
    alipayDesc: string;
    alipayBadge: string;
    alipayFeatures: string[];
    alipayBtn: string;
    wechatTitle: string;
    wechatDesc: string;
    wechatBadge: string;
    wechatFeatures: string[];
    wechatBtn: string;
    banksTitle: string;
    banksSubtitle: string;
    safetyBadge: string;
    speedLabel: string;
  };
  benefits: {
    tag: string;
    titlePrefix: string;
    titleHighlight: string;
    subtitle: string;
    gteeBadge: string;
    ctaBannerText: string;
    ctaBannerBtn: string;
    items: BenefitItem[];
    metrics: TrustMetric[];
  };
  guarantees: {
    tag: string;
    titlePrefix: string;
    titleHighlight: string;
    subtitle: string;
    items: GuaranteeItem[];
    bottomGtee: string;
  };
  steps: {
    tag: string;
    titlePrefix: string;
    titleHighlight: string;
    subtitle: string;
    items: StepItem[];
    ctaBtn: string;
  };
  testimonials: {
    tag: string;
    titlePrefix: string;
    titleHighlight: string;
    subtitle: string;
    verified: string;
    ratingText: string;
    items: TestimonialItem[];
  };
  faq: {
    tag: string;
    titlePrefix: string;
    titleHighlight: string;
    subtitle: string;
    items: FaqItem[];
    stillQuestions: string;
    askWhatsapp: string;
  };
  finalCta: {
    tag: string;
    titlePrefix: string;
    titleHighlight: string;
    subtitle: string;
    orderBtn: string;
    badge1: string;
    badge2: string;
    badge3: string;
  };
  contact: {
    tag: string;
    titlePrefix: string;
    titleHighlight: string;
    subtitle: string;
    whatsappFastTag: string;
    whatsappOrderTitle: string;
    whatsappSub: string;
    whatsappBtn: string;
    instaSub: string;
    phoneTitle: string;
    formTitle: string;
    formSub: string;
    formSuccessTitle: string;
    formSuccessSub: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    amountLabel: string;
    amountPlaceholder: string;
    methodLabel: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
  };
  footer: {
    bio: string;
    sectionsTitle: string;
    infoTitle: string;
    contactTitle: string;
    privacyLink: string;
    termsLink: string;
    adminLink: string;
    workHoursTitle: string;
    rights: string;
    brandTag: string;
  };
  mobileSticky: {
    rateLabel: string;
    perCny: string;
    orderBtn: string;
  };
  orderModal: {
    title: string;
    subtitle: string;
    amountLabel: string;
    methodLabel: string;
    estPayment: string;
    somLabel: string;
    submitBtn: string;
    rateLockNote: string;
  };
  legalModal: {
    privacyTitle: string;
    termsTitle: string;
    sub: string;
    privacyHeading1: string;
    privacyBody1: string;
    privacyHeading2: string;
    privacyBody2: string;
    privacyHeading3: string;
    privacyBody3: string;
    termsHeading1: string;
    termsBody1: string;
    termsHeading2: string;
    termsBody2: string;
    termsHeading3: string;
    termsBody3: string;
    closeBtn: string;
  };
  chatbot: {
    badge: string;
    headerTitle: string;
    headerSub: string;
    welcomeMsg: string;
    quickPrompt1: string;
    quickPrompt2: string;
    quickPrompt3: string;
    quickPrompt4: string;
    quickPrompt5: string;
    quickPrompt6: string;
    inputPlaceholder: string;
    sendBtn: string;
    orderViaWhatsApp: string;
    calcAnswer: string;
    botOnline: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  ky: {
    ticker: {
      live: 'АКТУАЛДУУ',
      rateText: 'Сатуу: 1 CNY = {rate} сом',
      banksText: 'MBank • О!Банк • Optima • Bakai • Бай Түшүм • Накталай ($ , сом)',
      speedText: 'Alipay & WeChat эсепке 5–10 мүнөттө салуу',
      workTimeText: 'Иш убактысы: 09:00 — 22:00 (Дем алышсыз)',
      safeText: '100% Кепилдик • Электрондук чек',
    },
    header: {
      menu: 'Меню',
      close: 'Жабуу',
      brandSub: 'Alipay & WeChat',
      nav: {
        rates: 'Курс жана калькулятор',
        banks: 'Төлөм ыкмалары',
        benefits: 'Артыкчылыктар',
        steps: 'Кантип иштейт',
        reviews: 'Пикирлер',
        faq: 'Суроо-жооп',
        contact: 'Байланыш',
      },
      adminTooltip: 'Админ: Курсту өзгөртүү',
      soundOn: 'Үндү күйгүзүү',
      soundOff: 'Үндү өчүрүү',
      orderBtn: 'WhatsApp заказ',
      quickOrder: 'Заказ',
      workHoursLabel: 'Иш убактысы:',
      workHoursVal: '09:00 — 22:00 (Дем алышсыз)',
    },
    hero: {
      todayRate: 'Бүгүнкү курс:',
      titleLine1: 'Алипейге жана Вичатка',
      titleLine2: 'юань салабыз',
      subtitle: 'MBank, О!Банк, Optima, Bakai, Бай Түшүм жана накталай ($ , сом) аркылуу төлөп, Alipay (支付宝) жана WeChat Pay эсебиңизге 5–10 мүнөттө коопсуз юань алыңыз.',
      supportedLabel: 'Колдоого алынат:',
      orderBtn: 'WhatsApp аркылуу заказ кылуу',
      instagramBtn: 'Instagram: @alipay.ainagul',
      badge1: '0% жашыруун комиссия',
      badge2: '5–10 мүнөттө түшөт',
      badge3: 'Курс дароо бекитилет',
      cardTag: 'Экспресс-которуу',
      cardTitle: 'Alipay & WeChat Юань',
      cardSellRate: 'Сатуу курсу:',
      cardActive: '● Активдүү',
      statExpVal: '2+ жыл',
      statExpLabel: 'Ишенимдүү тажрыйба',
      statClientsVal: '20 000+',
      statClientsLabel: 'Канааттанган кардар',
      cardWhatsappBtn: 'WhatsApp аркылуу байланышуу',
      cardCalcLink: 'Калькуляторду колдонуу →',
    },
    calculator: {
      tag: 'АКТУАЛДУУ КУРС ЖАНА КАЛЬКУЛЯТОР',
      title: 'Так сумманы эсептеп,',
      titleHighlight: 'юань заказ кылыңыз',
      subtitle: 'Курс күн сайын межбанктык котировкалар боюнча жаңыланып турат. Төлөм WhatsApp аркылуу бекитилет.',
      rateCardTitle: 'Юань курсу',
      rateCardLive: 'Актуалдуу',
      sellLabel: 'Сатуу курсу (Продажа):',
      buyLabel: 'Сатып алуу (Покупка):',
      perCny: 'сом за 1 CNY',
      lockRateGtee: 'Билдирме берилгенде курс дароо бекитилет',
      speedGtee: 'Alipay жана WeChat\'ке 5–10 мүнөттө түшөт',
      receiptGtee: 'Чек жана тастыктоо документтери берилет',
      calcTitle: 'Онлайн Калькулятор',
      calcSubtitle: 'Керектүү сумманы көрсөтүңүз жана заматта эсептеңиз',
      amountLabel: 'Канча юань (CNY) керек?',
      presetsLabel: 'Тез тандалуучу суммалар:',
      methodLabel: 'Кайсы жакка юань салабыз / Төлөм ыкмасы:',
      methods: {
        alipay: { label: 'Alipay (支付宝)', sub: 'Түз баланс толуктоо' },
        wechat: { label: 'WeChat Pay (微信支付)', sub: 'Поставщикке которуу' },
        bank_transfer: { label: 'Кыргызстан банктары', sub: 'MBank, О!Банк, Optima, Bakai' },
        cash: { label: 'Накталай ($ , сом)', sub: 'Тез эсептешүү ($ / сом)' },
      },
      totalToPay: 'Төлөнө турган жалпы сумма:',
      currencySom: 'кыргыз сому',
      rateNote: 'Курс: 1 CNY = {rate} сом',
      commissionFree: 'Комиссия: 0 сом',
      submitBtn: 'WhatsApp аркылуу заказ кылуу',
    },
    banks: {
      tag: 'ТӨЛӨМ ЖАНА КОТОРУУ ЫКМАЛАРЫ',
      titlePrefix: 'Алипейге жана Вичатка',
      titleHighlight: 'юань салабыз',
      subtitle: 'Кыргызстандын бардык популярдуу банктары аркылуу сомуңузду же накталай ($ , сом) кабыл алып, Alipay жана WeChat аккаунтуңузга тез жана коопсуз юань которуп беребиз.',
      alipayTitle: 'Алипейге юань салабыз',
      alipayDesc: 'Жеке аккаунтка же кытайлык жөнөтүүчүгө/фабрикага түз баланс толуктоо (Alipay ID же QR).',
      alipayBadge: 'Түз толуктоо',
      alipayFeatures: ['1688, Taobao, Poizon үчүн', 'Ыкчам которуу (5–10 мин)', 'Официалдуу электрондук чек'],
      alipayBtn: 'Alipay үчүн заказ кылуу',
      wechatTitle: 'Вичатка юань салабыз',
      wechatDesc: 'Поставщиктердин WeChat капчыгына жана QR-кодуна юань которуу же баланс толуктоо.',
      wechatBadge: 'QR жана ID',
      wechatFeatures: ['Кытай фабрикаларына түз төлөм', 'Комиссия 0%', '5–10 мүнөттө жетет'],
      wechatBtn: 'WeChat үчүн заказ кылуу',
      banksTitle: 'Кыргызстандын банктары жана накталай кабыл алабыз',
      banksSubtitle: 'Каалаган банктык мобилдик тиркемеңиз же накталай ($ , сом) аркылуу оңой төлөңүз:',
      safetyBadge: '100% Коопсуздук кепилдиги',
      speedLabel: 'Ылдамдык:',
    },
    benefits: {
      tag: 'ЭМНЕ ҮЧҮН БИЗДИ ТАНДАШАТ?',
      titlePrefix: 'Ишенимдүү, коопсуз жана',
      titleHighlight: 'пайдалуу шарттар',
      subtitle: 'Кытайдан товар алган ишкерлерге жана жеке кардарларга 2 жылдан бери туруктуу кызмат көрсөтүп келебиз.',
      gteeBadge: 'Толук кепилдик',
      ctaBannerText: 'Alipay жана WeChat эсебиңизге бүгүн эле эң жакшы курс менен юань алыңыз!',
      ctaBannerBtn: 'WhatsApp аркылуу заказ кылуу',
      items: [
        {
          number: '01',
          title: 'Эң ыңгайлуу курс',
          description: 'Эч кандай жашыруун комиссиясыз эң пайдалуу курс. Билдирме берген учурда курс толугу менен бекитилет.',
          iconName: 'TrendingUp',
        },
        {
          number: '02',
          title: 'Ылдам которуу (5–10 мин)',
          description: 'Alipay жана WeChat капчыктарына түз юань салуу 5–10 мүнөттүн ичинде бүтөт.',
          iconName: 'Zap',
        },
        {
          number: '03',
          title: '100% Коопсуздук',
          description: 'Ар бир транзакция электрондук чек жана тастыктоо менен коштолот. Толук купуялуулук.',
          iconName: 'ShieldCheck',
        },
        {
          number: '04',
          title: 'Түз байланыш жана колдоо',
          description: 'WhatsApp аркылуу суроолоруңузга дароо жооп берип, акча түшкөнгө чейин байланышта болобуз.',
          iconName: 'Headphones',
        },
      ],
      metrics: [
        {
          value: '20 000+',
          label: 'Канааттанган кардарлар',
          subtext: 'Ишкерлер, импорттоочулар жана соодагерлер',
        },
        {
          value: '2+ жыл',
          label: 'Ишенимдүү тажрыйба',
          subtext: 'Финансы рыногунда кынтыксыз репутация',
        },
        {
          value: '50 000+',
          label: 'Ийгиликтүү бүтүмдөр',
          subtext: 'Alipay жана WeChat аркылуу бүткөн операциялар',
        },
      ],
    },
    guarantees: {
      tag: 'БИЗДИН КЕПИЛДИКТЕР',
      titlePrefix: 'Сиздин каражатыңыздын',
      titleHighlight: 'толук коопсуздугу',
      subtitle: 'Ар бир которууга расмий чек берилет жана курс өзгөрбөй сакталат.',
      items: [
        {
          title: 'Ачык-айкын курс',
          description: 'Сиз алдын ала так курсту жана төлөнө турган сумманы билесиз. Эч кандай жашыруун спред жок.',
          iconName: 'CheckCircle2',
        },
        {
          title: 'Комиссия 0%',
          description: 'Эч кандай кошумча төлөмдөр алынбайт. Сүйлөшүлгөн сумма акыркы болуп саналат.',
          iconName: 'CheckCircle2',
        },
        {
          title: 'Официалдуу чек жана тастыктоо',
          description: 'Которуу бүткөндөн кийин кардар операциянын толук реквизиттерин жана электрондук чегин алат.',
          iconName: 'CheckCircle2',
        },
        {
          title: 'Жеке көңүл буруу',
          description: 'Адисибиз биринчи суроодон баштап каражат сиздин эсебиңизге түшкөнгө чейин коштоп турат.',
          iconName: 'CheckCircle2',
        },
      ],
      bottomGtee: 'Биз кардарлардын ишенимин жана убактысын жогору баалайбыз.',
    },
    steps: {
      tag: 'КАНТИП ИШТЕЙТ?',
      titlePrefix: 'Юань алуу үчүн',
      titleHighlight: '3 жөнөкөй кадам',
      subtitle: 'Татаал бюрократиясыз, 5–10 мүнөттүн ичинде эсебиңизге юань алыңыз.',
      items: [
        {
          step: '01',
          title: 'Сумманы тандаңыз',
          description: 'Канча юань керектигин жана кайсы капчыкка (Alipay, WeChat) же картага которууну тандаңыз.',
          badge: '1 мүнөт',
        },
        {
          step: '02',
          title: 'WhatsApp аркылуу байланышыңыз',
          description: 'Адисибиз курсту бекитип, банктык реквизиттерди (MBank, О!Банк, Optima же накталай $ , сом) жөнөтөт.',
          badge: '2–3 мүнөт',
        },
        {
          step: '03',
          title: 'Юандарды алыңыз',
          description: 'Төлөмдөн кийин 5–10 мүнөттө Alipay/WeChat эсебиңизге юань заматта түшүп, чеги жөнөтүлөт.',
          badge: 'Даяр',
        },
      ],
      ctaBtn: 'Азыр заказ кылуу',
    },
    testimonials: {
      tag: 'КАРДАРЛАРДЫН ПИКИРЛЕРИ',
      titlePrefix: 'Бизге ишенген',
      titleHighlight: '20 000+ кардарлар',
      subtitle: 'Күн сайын жүздөгөн ишкерлер жана жеке кардарлар биз аркылуу Alipay жана WeChat толукташат.',
      verified: 'Тастыкталган кардар',
      ratingText: 'Орточо баа: 4.9 / 5.0 (20 000+ пикирлер)',
      items: [
        {
          id: '1',
          name: 'Азамат Ибраимов',
          role: '1688 жана Taobao платформаларынан товар ташуучу',
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
          text: 'Кытайлык фабрикалар менен эсептешүү үчүн Alipay балансымды дайыма ушул жерден толуктайм. Курсу абдан жакшы, юань 5 мүнөттө заматта түшөт. Ыраазымын!',
          rating: 5,
          date: '2 күн мурун',
          tag: 'Alipay толуктоо',
        },
        {
          id: '2',
          name: 'Айпери Жумабекова',
          role: 'Дордой базарындагы дүкөн ээси',
          avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
          text: 'WhatsApp аркылуу байланышып, сомумду MBank менен котордум. 10 мүнөт өтпөй кытайлык жөнөтүүчүмдүн WeChat капчыгына акча жетип, чегин жөнөтүштү.',
          rating: 5,
          date: '3 күн мурун',
          tag: 'WeChat төлөм',
        },
        {
          id: '3',
          name: 'Тимур Сулайманов',
          role: 'Ишкер / Бизнес сапарлар',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
          text: 'Гуанчжоуга барарда эсептериме юань салдыргам. Баары так, тез жана ишенимдүү иштейт экен. Дайыма ушул кызматты колдоном.',
          rating: 5,
          date: '1 жума мурун',
          tag: 'Юань которуу',
        },
      ],
    },
    faq: {
      tag: 'КӨП БЕРИЛҮҮЧҮ СУРООЛОР',
      titlePrefix: 'Суроолор жана',
      titleHighlight: 'так жооптор',
      subtitle: 'Юань алмаштыруу жана Alipay/WeChat толуктоо боюнча эң негизги маалыматтар.',
      items: [
        {
          question: 'Бүгүнкү юандын курсу канча?',
          answer: 'Актуалдуу сатуу курсу сайттын башында көрсөтүлгөн. WhatsApp аркылуу билдирме калтырганыңызда курс сиз үчүн дароо бекитилет.',
        },
        {
          question: 'Кантип юань заказ кылам?',
          answer: 'Калькулятордон керектүү сумманы тандап, «Заказ кылуу» же «WhatsApp аркылуу байланышуу» баскычын басыңыз. Сизге реквизиттер берилет жана төлөмдөн соң юань дароо жөнөтүлөт.',
        },
        {
          question: 'Минималдуу сумма канча?',
          answer: 'Минималдуу сумма 500 CNY башталат. Чоң көлөмдөгү заказ үчүн (50 000 CNY жогору) атайын жеке премиум курс каралган.',
        },
        {
          question: 'Кандай банктар аркылуу төлөсөм болот?',
          answer: 'Кыргызстандын бардык банктары кабыл алынат: MBank, О!Банк (О!Деньги), Optima Bank, Bakai Bank, Бай Түшүм Банк, Demir Bank, ошондой эле Накталай ($ , сом).',
        },
        {
          question: 'Юань канча убакытта түшөт?',
          answer: 'Төлөм тастыкталгандан кийин 5–10 мүнөттүн ичинде Alipay же WeChat аккаунтуңузга заматта которулат.',
        },
        {
          question: 'Коопсуздук кантип камсыздалат?',
          answer: 'Ар бир бүтүмгө расмий электрондук чек жана экрандын скриншоту берилет. Бардык операциялар тастыкталган бизнес-аккаунттардан аткарылат.',
        },
      ],
      stillQuestions: 'Башка сурооңуз барбы?',
      askWhatsapp: 'WhatsApp аркылуу адиске түз жазыңыз',
    },
    finalCta: {
      tag: 'ТЕЗ ЖАНА КООПСУЗ КОТОРУУ',
      titlePrefix: 'Alipay жана WeChat эсебиңизге',
      titleHighlight: 'юань алууга даярсызбы?',
      subtitle: 'WhatsApp аркылуу түз байланышыңыз. 5–10 мүнөттө акчаңызды которуп, чегин жөнөтөбүз.',
      orderBtn: 'WhatsApp аркылуу заказ кылуу',
      badge1: '0% комиссия',
      badge2: 'Курс дароо бекитилет',
      badge3: 'MBank • О!Банк • Накталай ($ , сом)',
    },
    contact: {
      tag: 'БАЙЛАНЫШ ЖАНА БИЛДИРМЕ',
      titlePrefix: 'Биз менен',
      titleHighlight: 'байланышыңыз',
      subtitle: 'Суроолоруңуз болсо WhatsApp же Instagram аркылуу жазыңыз, тез арада жооп беребиз.',
      whatsappFastTag: 'Эң ылдам канал',
      whatsappOrderTitle: 'WhatsApp аркылуу заказ',
      whatsappSub: 'Билдирме калтырыңыз, 1–2 мүнөттө жооп беребиз',
      whatsappBtn: 'WhatsApp чатты ачуу',
      instaSub: 'Күн сайын жаңы курс',
      phoneTitle: 'Телефон чалуу',
      formTitle: 'Тез билдирме калтыруу',
      formSub: 'Төмөнкү форманы толтурсаңыз, маалымат түз WhatsApp чатыңызга даярдалып ачылат',
      formSuccessTitle: 'Билдирмеңиз WhatsAppка жөнөтүлдү!',
      formSuccessSub: 'Адисибиз жакынкы мүнөттөрдө байланышат.',
      nameLabel: 'Сиздин атыңыз',
      namePlaceholder: 'Атыңыз',
      phoneLabel: 'Телефон номериңиз',
      phonePlaceholder: '+996 555 123456',
      amountLabel: 'Керектүү сумма (CNY)',
      amountPlaceholder: 'мисалы: 5 000 ¥',
      methodLabel: 'Которуу ыкмасы',
      messageLabel: 'Кошумча билдирүү (милдеттүү эмес)',
      messagePlaceholder: 'Кытайдагы поставщикке төлөө ж.б.',
      submitBtn: 'WhatsApp аркылуу жөнөтүү',
    },
    footer: {
      bio: 'Кыргызстандагы Alipay жана WeChat Pay эсептерине ыкчам юань салуу кызматы. 2 жылдык тажрыйба, 20 000+ канааттанган кардарлар.',
      sectionsTitle: 'Бөлүмдөр',
      infoTitle: 'Маалымат',
      contactTitle: 'Байланыш',
      privacyLink: 'Купуялуулук саясаты',
      termsLink: 'Колдонуучу келишими',
      adminLink: 'Админ: Курсту өзгөртүү',
      workHoursTitle: 'Иш убактысы:',
      rights: 'Бардык укуктар корголгон.',
      brandTag: 'Alipay & WeChat Юань алмаштыруу сервиси',
    },
    mobileSticky: {
      rateLabel: 'Курс CNY:',
      perCny: 'сом',
      orderBtn: 'WhatsApp Заказ',
    },
    orderModal: {
      title: 'Юань заказ кылуу',
      subtitle: 'Alipay жана WeChat эсебине ыкчам которуу',
      amountLabel: 'Керектүү сумма (CNY)',
      methodLabel: 'Которуу ыкмасы',
      estPayment: 'Болжолдуу төлөм:',
      somLabel: 'сом',
      submitBtn: 'WhatsApp аркылуу заказды тастыктоо',
      rateLockNote: 'Билдирме жөнөтүлгөндө курс сиз үчүн толук бекитилет',
    },
    legalModal: {
      privacyTitle: 'Купуялуулук саясаты',
      termsTitle: 'Колдонуучу келишими',
      sub: 'YuanPro кардарлары үчүн расмий маалымат',
      privacyHeading1: '1. Жалпы жоболор',
      privacyBody1: 'Биз кардарларыбыздын купуялуулугун жогору баалайбыз. Бардык жеке маалыматтар жана реквизиттер (Alipay ID, WeChat QR ж.б.) операцияны так аткаруу үчүн гана колдонулат.',
      privacyHeading2: '2. Маалыматты чогултуу жана сактоо',
      privacyBody2: 'Биз үчүнчү жактарга эч кандай реквизиттерди бербейбиз. Бардык байланыш WhatsApp коопсуз каналы аркылуу жүргүзүлөт.',
      privacyHeading3: '3. Коопсуздук',
      privacyBody3: 'Операция ийгиликтүү аяктап, расмий электрондук чек жөнөтүлгөндөн кийин, кардардын жеке реквизиттери коопсуздук эрежелерине ылайык сакталат.',
      termsHeading1: '1. Келишимдин предмети',
      termsBody1: 'Сервис кардардын билдирмеси боюнча кыргыз банктарынан төлөмдү кабыл алып, тиешелүү юань суммасын Alipay же WeChat эсебине которуп берүүнү камсыздайт.',
      termsHeading2: '2. Курсту бекитүү тартиби',
      termsBody2: 'Билдирме WhatsApp аркылуу тастыкталган учурдагы курс бекитилет жана өзгөртүлбөйт.',
      termsHeading3: '3. Тараптардын жоопкерчилиги',
      termsBody3: 'Кардар реквизиттерди туура берүүгө, ал эми сервис төлөмдөн соң 5–10 мүнөттө акчаны которуп, электрондук чегин берүүгө милдеттенет.',
      closeBtn: 'Түшүнүктүү',
    },
    chatbot: {
      badge: 'Онлайн Консультант',
      headerTitle: 'YuanPro Ассистент',
      headerSub: '24/7 Ыкчам маалымат',
      welcomeMsg: 'Саламатсызбы! Мен YuanPro онлайн ассистентимин. Alipay жана WeChat\'ке юань салуу, актуалдуу курс жана банктар боюнча бардык суроолоруңузга жооп берүүгө даярмын.',
      quickPrompt1: 'Бүгүнкү курс канча?',
      quickPrompt2: 'Alipay\'ге кантип акча салам?',
      quickPrompt3: 'WeChat аркылуу төлөө',
      quickPrompt4: 'Кандай банктар бар?',
      quickPrompt5: 'Накталай ($ , сом) болобу?',
      quickPrompt6: 'WhatsApp\'ка түз жазуу',
      inputPlaceholder: 'Сурооңузду жазыңыз же сумманы киргизиңиз...',
      sendBtn: 'Жөнөтүү',
      orderViaWhatsApp: 'WhatsApp аркылуу заказ кылуу',
      calcAnswer: 'Сиз көрсөткөн {cny} CNY суммасы бүгүнкү курс боюнча болжол менен {som} сом болот. Бул заказды WhatsApp аркылуу адисибизге дароо жөнөтө аласызбы?',
      botOnline: 'Ассистент онлайн',
    },
  },

  ru: {
    ticker: {
      live: 'АКТУАЛЬНО',
      rateText: 'Продажа: 1 CNY = {rate} сом',
      banksText: 'MBank • О!Банк • Optima • Bakai • Бай Тушум • Наличные ($ , сом)',
      speedText: 'Пополнение Alipay & WeChat за 5–10 минут',
      workTimeText: 'Время работы: 09:00 — 22:00 (Без выходных)',
      safeText: '100% Гарантия • Электронный чек',
    },
    header: {
      menu: 'Меню',
      close: 'Закрыть',
      brandSub: 'Alipay & WeChat',
      nav: {
        rates: 'Курс и калькулятор',
        banks: 'Способы оплаты',
        benefits: 'Преимущества',
        steps: 'Как это работает',
        reviews: 'Отзывы',
        faq: 'Вопросы и ответы',
        contact: 'Контакты',
      },
      adminTooltip: 'Админ: Изменить курс',
      soundOn: 'Включить звук',
      soundOff: 'Выключить звук',
      orderBtn: 'Заказ в WhatsApp',
      quickOrder: 'Заказ',
      workHoursLabel: 'Режим работы:',
      workHoursVal: '09:00 — 22:00 (Без выходных)',
    },
    hero: {
      todayRate: 'Курс на сегодня:',
      titleLine1: 'Пополняем счета',
      titleLine2: 'Alipay и WeChat юанями',
      subtitle: 'Оплачивайте сомами через MBank, О!Банк, Optima, Bakai, Бай Тушум или наличными ($ , сом) и получайте юани на ваш счет Alipay (支付宝) или WeChat Pay за 5–10 минут.',
      supportedLabel: 'Поддерживаем:',
      orderBtn: 'Заказать через WhatsApp',
      instagramBtn: 'Instagram: @alipay.ainagul',
      badge1: '0% скрытых комиссий',
      badge2: 'Поступление за 5–10 минут',
      badge3: 'Фиксация курса в момент заявки',
      cardTag: 'Экспресс-перевод',
      cardTitle: 'Alipay & WeChat Юани',
      cardSellRate: 'Курс продажи:',
      cardActive: '● Активен',
      statExpVal: '2+ года',
      statExpLabel: 'Надежного опыта',
      statClientsVal: '20 000+',
      statClientsLabel: 'Довольных клиентов',
      cardWhatsappBtn: 'Связаться через WhatsApp',
      cardCalcLink: 'Перейти к калькулятору →',
    },
    calculator: {
      tag: 'АКТУАЛЬНЫЙ КУРС И КАЛЬКУЛЯТОР',
      title: 'Рассчитайте точную сумму и',
      titleHighlight: 'закажите юани',
      subtitle: 'Курс обновляется ежедневно по межбанковским котировкам. Курс фиксируется при обращении в WhatsApp.',
      rateCardTitle: 'Курс Юаня',
      rateCardLive: 'Актуальный',
      sellLabel: 'Курс продажи:',
      buyLabel: 'Курс покупки:',
      perCny: 'сом за 1 CNY',
      lockRateGtee: 'Курс фиксируется в момент оформления заявки',
      speedGtee: 'Поступление на Alipay и WeChat за 5–10 минут',
      receiptGtee: 'Предоставляем чек и подтверждение операции',
      calcTitle: 'Онлайн Калькулятор',
      calcSubtitle: 'Укажите необходимую сумму и рассчитайте моментально',
      amountLabel: 'Сколько юаней (CNY) вам нужно?',
      presetsLabel: 'Быстрый выбор суммы:',
      methodLabel: 'Куда перевести / Способ оплаты:',
      methods: {
        alipay: { label: 'Alipay (支付宝)', sub: 'Прямое пополнение баланса' },
        wechat: { label: 'WeChat Pay (微信支付)', sub: 'Перевод поставщику/QR' },
        bank_transfer: { label: 'Банки Кыргызстана', sub: 'MBank, О!Банк, Optima, Bakai' },
        cash: { label: 'Наличные ($ , сом)', sub: 'Быстрый расчет ($ / сом)' },
      },
      totalToPay: 'Итого к оплате:',
      currencySom: 'кыргызских сомов',
      rateNote: 'Курс: 1 CNY = {rate} сом',
      commissionFree: 'Комиссия: 0 сом',
      submitBtn: 'Заказать через WhatsApp',
    },
    banks: {
      tag: 'СПОСОБЫ ОПЛАТЫ И ПЕРЕВОДА',
      titlePrefix: 'Пополняем счета',
      titleHighlight: 'Alipay и WeChat юанями',
      subtitle: 'Принимаем оплату в сомах через все популярные банки Кыргызстана или наличными ($ , сом) и быстро переводим юани на ваш аккаунт.',
      alipayTitle: 'Пополнение Alipay',
      alipayDesc: 'Прямое пополнение личного баланса или перевод поставщику в Китае (по Alipay ID или QR).',
      alipayBadge: 'Прямой баланс',
      alipayFeatures: ['Для 1688, Taobao, Poizon', 'Быстрый перевод (5–10 мин)', 'Официальный электронный чек'],
      alipayBtn: 'Заказать для Alipay',
      wechatTitle: 'Пополнение WeChat',
      wechatDesc: 'Перевод юаней на WeChat кошелек китайских поставщиков и фабрик по QR-коду или ID.',
      wechatBadge: 'QR и ID',
      wechatFeatures: ['Оплата фабрикам в Китае', 'Без комиссий 0%', 'Поступление за 5–10 минут'],
      wechatBtn: 'Заказать для WeChat',
      banksTitle: 'Принимаем банки Кыргызстана и наличные',
      banksSubtitle: 'Оплачивайте удобно через любое мобильное банковское приложение или наличными ($ , сом):',
      safetyBadge: '100% Гарантия безопасности',
      speedLabel: 'Скорость:',
    },
    benefits: {
      tag: 'ПОЧЕМУ ВЫБИРАЮТ НАС?',
      titlePrefix: 'Надежные, безопасные и',
      titleHighlight: 'выгодные условия',
      subtitle: 'Более 2 лет успешно помогаем предпринимателям и частным клиентам совершать переводы в Китай.',
      gteeBadge: 'Полная гарантия',
      ctaBannerText: 'Получите юани на Alipay и WeChat по лучшему курсу уже сегодня!',
      ctaBannerBtn: 'Заказать через WhatsApp',
      items: [
        {
          number: '01',
          title: 'Самый выгодный курс',
          description: 'Максимально выгодный курс без скрытых комиссий. Курс полностью фиксируется при обращении.',
          iconName: 'TrendingUp',
        },
        {
          number: '02',
          title: 'Быстрый перевод (5–10 мин)',
          description: 'Прямое пополнение кошельков Alipay и WeChat Pay осуществляется в течение 5–10 минут.',
          iconName: 'Zap',
        },
        {
          number: '03',
          title: '100% Безопасность',
          description: 'Каждая транзакция сопровождается чеком и подтверждением. Полная конфиденциальность.',
          iconName: 'ShieldCheck',
        },
        {
          number: '04',
          title: 'Прямая связь и поддержка',
          description: 'Быстро отвечаем в WhatsApp и остаемся на связи до полного зачисления средств.',
          iconName: 'Headphones',
        },
      ],
      metrics: [
        {
          value: '20 000+',
          label: 'Довольных клиентов',
          subtext: 'Предприниматели, импортеры и байеры',
        },
        {
          value: '2+ года',
          label: 'Безупречного опыта',
          subtext: 'Надежная репутация на финансовом рынке',
        },
        {
          value: '50 000+',
          label: 'Успешных сделок',
          subtext: 'Операций через Alipay и WeChat',
        },
      ],
    },
    guarantees: {
      tag: 'НАШИ ГАРАНТИИ',
      titlePrefix: 'Полная безопасность',
      titleHighlight: 'ваших средств',
      subtitle: 'На каждый перевод выдается официальный чек, а курс остается неизменным.',
      items: [
        {
          title: 'Прозрачный курс',
          description: 'Вы заранее знаете точный курс и сумму к оплате. Никаких скрытых спредов.',
          iconName: 'CheckCircle2',
        },
        {
          title: 'Комиссия 0%',
          description: 'Никаких дополнительных скрытых комиссий. Озвученная сумма является окончательной.',
          iconName: 'CheckCircle2',
        },
        {
          title: 'Официальный чек',
          description: 'После перевода клиент получает полные реквизиты операции и электронный чек.',
          iconName: 'CheckCircle2',
        },
        {
          title: 'Персональное сопровождение',
          description: 'Специалист ведет сделку от первого обращения до зачисления юаней на ваш счет.',
          iconName: 'CheckCircle2',
        },
      ],
      bottomGtee: 'Мы ценим доверие и время каждого нашего клиента.',
    },
    steps: {
      tag: 'КАК ЭТО РАБОТАЕТ?',
      titlePrefix: 'Получите юани за',
      titleHighlight: '3 простых шага',
      subtitle: 'Без сложной бюрократии, получение юаней на ваш счет за 5–10 минут.',
      items: [
        {
          step: '01',
          title: 'Выберите сумму',
          description: 'Укажите необходимое количество юаней и куда перевести (Alipay, WeChat или поставщику).',
          badge: '1 минута',
        },
        {
          step: '02',
          title: 'Свяжитесь в WhatsApp',
          description: 'Специалист зафиксирует курс и отправит реквизиты (MBank, О!Банк, Optima или наличные $ , сом).',
          badge: '2–3 минуты',
        },
        {
          step: '03',
          title: 'Получите юани',
          description: 'После оплаты юани мгновенно зачисляются на ваш Alipay/WeChat и вам высылается чек.',
          badge: 'Готово',
        },
      ],
      ctaBtn: 'Заказать сейчас',
    },
    testimonials: {
      tag: 'ОТЗЫВЫ КЛИЕНТОВ',
      titlePrefix: 'Нам доверяют более',
      titleHighlight: '20 000+ клиентов',
      subtitle: 'Ежедневно сотни предпринимателей и частных покупателей пополняют Alipay и WeChat через нас.',
      verified: 'Проверенный клиент',
      ratingText: 'Средняя оценка: 4.9 / 5.0 (20 000+ отзывов)',
      items: [
        {
          id: '1',
          name: 'Азамат Ибраимов',
          role: 'Поставки товаров с 1688 и Taobao',
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
          text: 'Для расчетов с китайскими фабриками регулярно пополняю баланс Alipay здесь. Курс отличный, юани приходят за 5 минут. Очень доволен!',
          rating: 5,
          date: '2 дня назад',
          tag: 'Пополнение Alipay',
        },
        {
          id: '2',
          name: 'Айпери Жумабекова',
          role: 'Владелец магазина на Дордое',
          avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
          text: 'Написала в WhatsApp, оплатила сомами через MBank. Через 10 минут деньги уже поступили на WeChat поставщика в Китае с чеком.',
          rating: 5,
          date: '3 дня назад',
          tag: 'Оплата WeChat',
        },
        {
          id: '3',
          name: 'Тимур Сулайманов',
          role: 'Предприниматель / Деловые поездки',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
          text: 'Перед поездкой в Гуанчжоу пополнил счета юанями. Все быстро, четко и надежно. Теперь пользуюсь только этим сервисом.',
          rating: 5,
          date: '1 неделю назад',
          tag: 'Перевод юаней',
        },
      ],
    },
    faq: {
      tag: 'ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ',
      titlePrefix: 'Вопросы и',
      titleHighlight: 'точные ответы',
      subtitle: 'Главная информация по покупке юаней и пополнению Alipay/WeChat.',
      items: [
        {
          question: 'Какой сегодня курс юаня?',
          answer: 'Актуальный курс продажи указан вверху сайта. При оформлении заявки через WhatsApp курс фиксируется за вами.',
        },
        {
          question: 'Как заказать юани?',
          answer: 'Выберите нужную сумму в калькуляторе и нажмите «Заказать через WhatsApp». Вам предоставят реквизиты, и после оплаты юани сразу будут отправлены.',
        },
        {
          question: 'Какая минимальная сумма?',
          answer: 'Минимальная сумма начинается от 500 CNY. Для крупных заказов (от 50 000 CNY) действует специальный индивидуальный премиум-курс.',
        },
        {
          question: 'Через какие банки можно оплатить?',
          answer: 'Принимаются все банки Кыргызстана: MBank, О!Банк (О!Деньги), Optima Bank, Bakai Bank, Бай Тушум, Demir Bank, а также наличные ($ , сом).',
        },
        {
          question: 'За сколько минут зачисляются юани?',
          answer: 'После подтверждения оплаты юани моментально поступают на ваш аккаунт Alipay или WeChat в течение 5–10 минут.',
        },
        {
          question: 'Как гарантируется безопасность?',
          answer: 'На каждую операцию предоставляется официальный электронный чек и скриншот подтверждения. Все переводы осуществляются с верифицированных бизнес-счетов.',
        },
      ],
      stillQuestions: 'Остались вопросы?',
      askWhatsapp: 'Напишите напрямую специалисту в WhatsApp',
    },
    finalCta: {
      tag: 'БЫСТРЫЙ И БЕЗОПАСНЫЙ ПЕРЕВОД',
      titlePrefix: 'Готовы получить юани на',
      titleHighlight: 'Alipay и WeChat?',
      subtitle: 'Свяжитесь с нами через WhatsApp. Переведем средства и вышлем чек за 5–10 минут.',
      orderBtn: 'Заказать через WhatsApp',
      badge1: '0% комиссий',
      badge2: 'Фиксация курса',
      badge3: 'MBank • О!Банк • Наличные ($ , сом)',
    },
    contact: {
      tag: 'КОНТАКТЫ И ЗАЯВКА',
      titlePrefix: 'Свяжитесь с',
      titleHighlight: 'нами прямо сейчас',
      subtitle: 'Если у вас есть вопросы, напишите нам в WhatsApp или Instagram — мы ответим в течение пары минут.',
      whatsappFastTag: 'Самый быстрый канал',
      whatsappOrderTitle: 'Заказ в WhatsApp',
      whatsappSub: 'Оставьте заявку, ответим за 1–2 минуты',
      whatsappBtn: 'Открыть чат в WhatsApp',
      instaSub: 'Свежий курс каждый день',
      phoneTitle: 'Позвонить по телефону',
      formTitle: 'Оставить быструю заявку',
      formSub: 'Заполните форму ниже, и сообщение автоматически сформируется для отправки в WhatsApp',
      formSuccessTitle: 'Заявка отправлена в WhatsApp!',
      formSuccessSub: 'Специалист ответит вам в ближайшие минуты.',
      nameLabel: 'Ваше имя',
      namePlaceholder: 'Имя',
      phoneLabel: 'Номер телефона',
      phonePlaceholder: '+996 555 123456',
      amountLabel: 'Необходимая сумма (CNY)',
      amountPlaceholder: 'например: 5 000 ¥',
      methodLabel: 'Способ перевода',
      messageLabel: 'Дополнительное сообщение (необязательно)',
      messagePlaceholder: 'Оплата поставщику в Китае и т.д.',
      submitBtn: 'Отправить через WhatsApp',
    },
    footer: {
      bio: 'Сервис быстрого пополнения счетов Alipay и WeChat Pay в Кыргызстане. Более 2 лет опыта, 20 000+ довольных клиентов.',
      sectionsTitle: 'Разделы',
      infoTitle: 'Информация',
      contactTitle: 'Контакты',
      privacyLink: 'Политика конфиденциальности',
      termsLink: 'Пользовательское соглашение',
      adminLink: 'Админ: Изменить курс',
      workHoursTitle: 'Время работы:',
      rights: 'Все права защищены.',
      brandTag: 'Сервис обмена и пополнения юаней Alipay & WeChat',
    },
    mobileSticky: {
      rateLabel: 'Курс CNY:',
      perCny: 'сом',
      orderBtn: 'WhatsApp Заказ',
    },
    orderModal: {
      title: 'Заказ юаней',
      subtitle: 'Быстрый перевод на счета Alipay и WeChat',
      amountLabel: 'Необходимая сумма (CNY)',
      methodLabel: 'Способ перевода',
      estPayment: 'Примерная сумма к оплате:',
      somLabel: 'сом',
      submitBtn: 'Подтвердить заказ в WhatsApp',
      rateLockNote: 'Курс полностью фиксируется при отправке заявки',
    },
    legalModal: {
      privacyTitle: 'Политика конфиденциальности',
      termsTitle: 'Пользовательское соглашение',
      sub: 'Официальная информация для клиентов YuanPro',
      privacyHeading1: '1. Общие положения',
      privacyBody1: 'Мы высоко ценим конфиденциальность наших клиентов. Все персональные данные и реквизиты (Alipay ID, WeChat QR) используются исключительно для точного исполнения операций.',
      privacyHeading2: '2. Сбор и защита данных',
      privacyBody2: 'Мы не передаем реквизиты третьим лицам. Все коммуникации осуществляются по безопасному каналу WhatsApp.',
      privacyHeading3: '3. Безопасность',
      privacyBody3: 'После успешного завершения операции и предоставления чека реквизиты защищаются в соответствии со стандартами безопасности.',
      termsHeading1: '1. Предмет соглашения',
      termsBody1: 'Сервис принимает оплату в сомах или наличными и осуществляет перевод эквивалентной суммы в юанях на счет Alipay или WeChat.',
      termsHeading2: '2. Фиксация курса',
      termsBody2: 'Курс фиксируется на момент подтверждения заявки в WhatsApp и не подлежит изменению.',
      termsHeading3: '3. Ответственность сторон',
      termsBody3: 'Клиент обязуется предоставить корректные реквизиты, а сервис — зачислить юани в течение 5–10 минут после оплаты и предоставить чек.',
      closeBtn: 'Понятно',
    },
    chatbot: {
      badge: 'Онлайн Консультант',
      headerTitle: 'YuanPro Ассистент',
      headerSub: '24/7 Быстрые ответы',
      welcomeMsg: 'Здравствуйте! Я онлайн-консультант YuanPro. Готов ответить на любые вопросы по пополнению Alipay, WeChat, актуальному курсу и способам оплаты.',
      quickPrompt1: 'Какой сегодня курс?',
      quickPrompt2: 'Как пополнить Alipay?',
      quickPrompt3: 'Оплата через WeChat',
      quickPrompt4: 'Какие банки принимаете?',
      quickPrompt5: 'Принимаете наличные ($ , сом)?',
      quickPrompt6: 'Написать напрямую в WhatsApp',
      inputPlaceholder: 'Задайте вопрос или введите сумму...',
      sendBtn: 'Отправить',
      orderViaWhatsApp: 'Заказать через WhatsApp',
      calcAnswer: 'Указанная вами сумма {cny} CNY по сегодняшнему курсу составляет примерно {som} сом. Хотите сразу отправить готовую заявку нашему специалисту в WhatsApp?',
      botOnline: 'Ассистент онлайн',
    },
  },

  kz: {
    ticker: {
      live: 'ӨЗЕКТІ',
      rateText: 'Сату: 1 CNY = {rate} сом',
      banksText: 'MBank • О!Банк • Optima • Bakai • Бай Түшүм • Қолма-қол ($ , сом)',
      speedText: 'Alipay & WeChat шоттарын 5–10 минутта толтыру',
      workTimeText: 'Жұмыс уақыты: 09:00 — 22:00 (Демалыссыз)',
      safeText: '100% Кепілдік • Электронды чек',
    },
    header: {
      menu: 'Мәзір',
      close: 'Жабу',
      brandSub: 'Alipay & WeChat',
      nav: {
        rates: 'Бағам және калькулятор',
        banks: 'Төлем әдістері',
        benefits: 'Артықшылықтар',
        steps: 'Қалай жұмыс істейді',
        reviews: 'Пікірлер',
        faq: 'Сұрақ-жауап',
        contact: 'Байланыс',
      },
      adminTooltip: 'Админ: Бағамды өзгерту',
      soundOn: 'Дыбысты қосу',
      soundOff: 'Дыбысты өшіру',
      orderBtn: 'WhatsApp тапсырыс',
      quickOrder: 'Тапсырыс',
      workHoursLabel: 'Жұмыс уақыты:',
      workHoursVal: '09:00 — 22:00 (Демалыссыз)',
    },
    hero: {
      todayRate: 'Бүгінгі бағам:',
      titleLine1: 'Alipay мен WeChat-қа',
      titleLine2: 'юань саламыз',
      subtitle: 'MBank, О!Банк, Optima, Bakai, Бай Түшүм немесе қолма-қол ($ , сом) арқылы төлеп, Alipay (支付宝) және WeChat Pay шотыңызға 5–10 минутта қауіпсіз юань алыңыз.',
      supportedLabel: 'Қолдау көрсетіледі:',
      orderBtn: 'WhatsApp арқылы тапсырыс беру',
      instagramBtn: 'Instagram: @alipay.ainagul',
      badge1: '0% жасырын комиссия',
      badge2: '5–10 минутта түседі',
      badge3: 'Бағам бірден бекітіледі',
      cardTag: 'Экспресс-аударым',
      cardTitle: 'Alipay & WeChat Юань',
      cardSellRate: 'Сату бағамы:',
      cardActive: '● Белсенді',
      statExpVal: '2+ жыл',
      statExpLabel: 'Сенімді тәжірибе',
      statClientsVal: '20 000+',
      statClientsLabel: 'Риза болған клиент',
      cardWhatsappBtn: 'WhatsApp арқылы байланысу',
      cardCalcLink: 'Калькуляторға өту →',
    },
    calculator: {
      tag: 'ӨЗЕКТІ БАҒАМ ЖӘНЕ КАЛЬКУЛЯТОР',
      title: 'Нақты соманы есептеп,',
      titleHighlight: 'юань тапсырыс беріңіз',
      subtitle: 'Бағам күн сайын банк аралық бағалар бойынша жаңарады. Бағам WhatsApp арқылы бекітіледі.',
      rateCardTitle: 'Юань бағамы',
      rateCardLive: 'Өзекті',
      sellLabel: 'Сату бағамы:',
      buyLabel: 'Сатып алу бағамы:',
      perCny: 'сом / 1 CNY',
      lockRateGtee: 'Өтініш берілген сәтте бағам бірден бекітіледі',
      speedGtee: 'Alipay мен WeChat-қа 5–10 минутта түседі',
      receiptGtee: 'Ресми чек және растау беріледі',
      calcTitle: 'Онлайн Калькулятор',
      calcSubtitle: 'Қажетті соманы көрсетіп, лезде есептеңіз',
      amountLabel: 'Қанша юань (CNY) қажет?',
      presetsLabel: 'Жылдам таңдау:',
      methodLabel: 'Қайда аударамыз / Төлем әдісі:',
      methods: {
        alipay: { label: 'Alipay (支付宝)', sub: 'Тікелей баланс толтыру' },
        wechat: { label: 'WeChat Pay (微信支付)', sub: 'Жеткізушіге аудару/QR' },
        bank_transfer: { label: 'Қырғызстан банктері', sub: 'MBank, О!Банк, Optima, Bakai' },
        cash: { label: 'Қолма-қол ($ , сом)', sub: 'Жылдам есеп айырысу ($ / сом)' },
      },
      totalToPay: 'Төленетін жалпы сома:',
      currencySom: 'қырғыз сомы',
      rateNote: 'Бағам: 1 CNY = {rate} сом',
      commissionFree: 'Комиссия: 0 сом',
      submitBtn: 'WhatsApp арқылы тапсырыс беру',
    },
    banks: {
      tag: 'ТӨЛЕМ ЖӘНЕ АУДАРЫМ ӘДІСТЕРІ',
      titlePrefix: 'Alipay мен WeChat-қа',
      titleHighlight: 'юань саламыз',
      subtitle: 'Қырғызстанның барлық танымал банктері немесе қолма-қол ($ , сом) арқылы төлем қабылдап, Alipay және WeChat шотыңызға юань аударып береміз.',
      alipayTitle: 'Alipay-ге юань салу',
      alipayDesc: 'Жеке шотқа немесе Қытайдағы жеткізушіге тікелей баланс толтыру (Alipay ID немесе QR).',
      alipayBadge: 'Тікелей толтыру',
      alipayFeatures: ['1688, Taobao, Poizon үшін', 'Жылдам аударым (5–10 мин)', 'Ресми электронды чек'],
      alipayBtn: 'Alipay үшін тапсырыс беру',
      wechatTitle: 'WeChat-қа юань салу',
      wechatDesc: 'Қытайлық жеткізушілердің WeChat әмиянына және QR-кодына юань аудару.',
      wechatBadge: 'QR және ID',
      wechatFeatures: ['Қытай фабрикаларына төлем', 'Комиссия 0%', '5–10 минутта жетеді'],
      wechatBtn: 'WeChat үшін тапсырыс беру',
      banksTitle: 'Қырғызстан банктері және қолма-қол қабылдаймыз',
      banksSubtitle: 'Кез келген мобильді қосымша немесе қолма-қол ($ , сом) арқылы комиссиясыз төлеңіз:',
      safetyBadge: '100% Қауіпсіздік кепілдігі',
      speedLabel: 'Жылдамдық:',
    },
    benefits: {
      tag: 'НЕГЕ БІЗДІ ТАҢДАЙДЫ?',
      titlePrefix: 'Сенімді, қауіпсіз және',
      titleHighlight: 'тиімді шарттар',
      subtitle: 'Қытайдан тауар алған кәсіпкерлерге 2 жылдан астам уақыт бойы қызмет көрсетіп келеміз.',
      gteeBadge: 'Толық кепілдік',
      ctaBannerText: 'Alipay және WeChat шотыңызға бүгін ең жақсы бағаммен юань алыңыз!',
      ctaBannerBtn: 'WhatsApp арқылы тапсырыс беру',
      items: [
        {
          number: '01',
          title: 'Ең тиімді бағам',
          description: 'Жасырын комиссиясыз ең пайдалы бағам. Өтініш берген сәтте бағам толық бекітіледі.',
          iconName: 'TrendingUp',
        },
        {
          number: '02',
          title: 'Жылдам аударым (5–10 мин)',
          description: 'Alipay және WeChat әмияндарына тікелей юань салу 5–10 минут ішінде орындалады.',
          iconName: 'Zap',
        },
        {
          number: '03',
          title: '100% Қауіпсіздік',
          description: 'Әрбір транзакция ресми чекпен және растаумен қамтамасыз етіледі.',
          iconName: 'ShieldCheck',
        },
        {
          number: '04',
          title: 'Тікелей байланыс және қолдау',
          description: 'WhatsApp арқылы сұрақтарыңызға лезде жауап беріп, соңына дейін байланыста боламыз.',
          iconName: 'Headphones',
        },
      ],
      metrics: [
        {
          value: '20 000+',
          label: 'Риза клиенттер',
          subtext: 'Кәсіпкерлер, импорттаушылар және байерлер',
        },
        {
          value: '2+ жыл',
          label: 'Сенімді тәжірибе',
          subtext: 'Қаржы нарығындағы мінсіз бедел',
        },
        {
          value: '50 000+',
          label: 'Сәтті мәмілелер',
          subtext: 'Alipay және WeChat арқылы жасалған операциялар',
        },
      ],
    },
    guarantees: {
      tag: 'БІЗДІҢ КЕПІЛДІКТЕР',
      titlePrefix: 'Сіздің қаражатыңыздың',
      titleHighlight: 'толық қауіпсіздігі',
      subtitle: 'Әрбір аударымға ресми чек беріледі және бағам өзгеріссіз сақталады.',
      items: [
        {
          title: 'Ашық бағам',
          description: 'Сіз нақты бағамды және төленетін соманы алдын ала білесіз. Жасырын төлемдер жоқ.',
          iconName: 'CheckCircle2',
        },
        {
          title: 'Комиссия 0%',
          description: 'Ешқандай қосымша төлемдер алынбайды. Келісілген сома түпкілікті болып саналады.',
          iconName: 'CheckCircle2',
        },
        {
          title: 'Ресми чек және растау',
          description: 'Аударым аяқталғаннан кейін клиент операцияның толық деректері мен электронды чегін алады.',
          iconName: 'CheckCircle2',
        },
        {
          title: 'Жеке көңіл бөлу',
          description: 'Маманымыз бірінші сұрақтан бастап қаражат түскенге дейін жеке еріп отырады.',
          iconName: 'CheckCircle2',
        },
      ],
      bottomGtee: 'Біз әрбір клиенттің сенімін және уақытын жоғары бағалаймыз.',
    },
    steps: {
      tag: 'ҚАЛАЙ ЖҰМЫС ІСТЕЙДІ?',
      titlePrefix: 'Юань алу үшін',
      titleHighlight: '3 қарапайым қадам',
      subtitle: 'Қиын бюрократиясыз, 5–10 минут ішінде шотыңызға юань алыңыз.',
      items: [
        {
          step: '01',
          title: 'Соманы таңдаңыз',
          description: 'Қанша юань керектігін және қай әмиянға (Alipay, WeChat) аударуды белгілеңіз.',
          badge: '1 минут',
        },
        {
          step: '02',
          title: 'WhatsApp арқылы хабарласыңыз',
          description: 'Маманымыз бағамды бекітіп, төлем деректерін (MBank, О!Банк, Optima немесе қолма-қол $ , сом) жібереді.',
          badge: '2–3 минут',
        },
        {
          step: '03',
          title: 'Юандарды алыңыз',
          description: 'Төлемнен кейін 5–10 минутта Alipay/WeChat шотыңызға юань бірден түсіп, чегі жіберіледі.',
          badge: 'Дайын',
        },
      ],
      ctaBtn: 'Қазір тапсырыс беру',
    },
    testimonials: {
      tag: 'КЛИЕНТТЕРДІҢ ПІКІРЛЕРІ',
      titlePrefix: 'Бізге сенетін',
      titleHighlight: '20 000+ клиенттер',
      subtitle: 'Күн сайын жүздеген кәсіпкерлер біз арқылы Alipay және WeChat шоттарын толтырады.',
      verified: 'Расталған клиент',
      ratingText: 'Орташа баға: 4.9 / 5.0 (20 000+ пікір)',
      items: [
        {
          id: '1',
          name: 'Азамат Ибраимов',
          role: '1688 және Taobao платформаларынан тауар тасушы',
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
          text: 'Қытайлық фабрикалармен есеп айырысу үшін Alipay балансымды үнемі осы жерден толтырамын. Бағамы өте жақсы, юань 5 минутта бірден түседі!',
          rating: 5,
          date: '2 күн бұрын',
          tag: 'Alipay толтыру',
        },
        {
          id: '2',
          name: 'Айпери Жұмабекова',
          role: 'Дордой базарындағы дүкен иесі',
          avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
          text: 'WhatsApp арқылы байланысып, сомымды MBank арқылы аудардым. 10 минут өтпей Қытайдағы жеткізушімнің WeChat шотына ақша жетіп, чегін жіберді.',
          rating: 5,
          date: '3 күн бұрын',
          tag: 'WeChat төлемі',
        },
        {
          id: '3',
          name: 'Тимур Сүлейменов',
          role: 'Кәсіпкер / Іскерлік сапарлар',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
          text: 'Гуанчжоуға барарда шоттарыма юань салғызғанмын. Барлығы нақты, тез және сенімді. Үнемі осы сервисті пайдаланамын.',
          rating: 5,
          date: '1 апта бұрын',
          tag: 'Юань аудару',
        },
      ],
    },
    faq: {
      tag: 'ЖИІ ҚОЙЫЛАТЫН СҰРАҚТАР',
      titlePrefix: 'Сұрақтар мен',
      titleHighlight: 'нақты жауаптар',
      subtitle: 'Юань сатып алу және Alipay/WeChat толтыру бойынша негізгі ақпарат.',
      items: [
        {
          question: 'Бүгінгі юань бағамы қанша?',
          answer: 'Өзекті сату бағамы сайттың басында көрсетілген. WhatsApp арқылы өтініш қалдырғанда бағам бірден бекітіледі.',
        },
        {
          question: 'Юаньға қалай тапсырыс беремін?',
          answer: 'Калькулятордан қажетті соманы таңдап, «WhatsApp арқылы тапсырыс беру» батырмасын басыңыз. Сізге реквизиттер беріліп, төлемнен соң юань бірден аударылады.',
        },
        {
          question: 'Ең аз сома қанша?',
          answer: 'Ең аз сома 500 CNY-ден басталады. Үлкен көлемдер үшін (50 000 CNY жоғары) арнайы жеке премиум бағам қарастырылған.',
        },
        {
          question: 'Қандай банктер арқылы төлеуге болады?',
          answer: 'Қырғызстанның барлық банктері қабылданады: MBank, О!Банк (О!Деньги), Optima Bank, Bakai Bank, Бай Түшүм, Demir Bank, сондай-ақ қолма-қол ($ , сом).',
        },
        {
          question: 'Юань қанша уақытта түседі?',
          answer: 'Төлем расталғаннан кейін 5–10 минут ішінде Alipay немесе WeChat шотыңызға лезде түседі.',
        },
        {
          question: 'Қауіпсіздік қалай қамтамасыз етіледі?',
          answer: 'Әрбір операцияға ресми электронды чек пен растау скриншоты беріледі. Барлық аударымдар верификацияланған бизнес-шоттардан жасалады.',
        },
      ],
      stillQuestions: 'Басқа сұрақтарыңыз бар ма?',
      askWhatsapp: 'WhatsApp арқылы маманға тікелей жазыңыз',
    },
    finalCta: {
      tag: 'ЖЫЛДАМ ЖӘНЕ ҚАУІПСІЗ АУДАРЫМ',
      titlePrefix: 'Alipay және WeChat шотыңызға',
      titleHighlight: 'юань алуға дайынсыз ба?',
      subtitle: 'WhatsApp арқылы тікелей байланысыңыз. 5–10 минутта қаражатыңызды аударып, чегін жібереміз.',
      orderBtn: 'WhatsApp арқылы тапсырыс беру',
      badge1: '0% комиссия',
      badge2: 'Бағам бірден бекітіледі',
      badge3: 'MBank • О!Банк • Қолма-қол ($ , сом)',
    },
    contact: {
      tag: 'БАЙЛАНЫС ЖӘНЕ ӨТІНІШ',
      titlePrefix: 'Бізбен',
      titleHighlight: 'байланысыңыз',
      subtitle: 'Сұрақтарыңыз болса WhatsApp немесе Instagram арқылы жазыңыз, жылдам жауап береміз.',
      whatsappFastTag: 'Ең жылдам арна',
      whatsappOrderTitle: 'WhatsApp арқылы тапсырыс',
      whatsappSub: 'Өтініш қалдырыңыз, 1–2 минутта жауап береміз',
      whatsappBtn: 'WhatsApp чатты ашу',
      instaSub: 'Күн сайын жаңа бағам',
      phoneTitle: 'Телефон соғу',
      formTitle: 'Жылдам өтініш қалдыру',
      formSub: 'Төмендегі форманы толтырсаңыз, ақпарат тікелей WhatsApp чатыңызға дайындалып ашылады',
      formSuccessTitle: 'Өтінішіңіз WhatsApp-қа жіберілді!',
      formSuccessSub: 'Маманымыз жақын арада хабарласады.',
      nameLabel: 'Сіздің атыңыз',
      namePlaceholder: 'Атыңыз',
      phoneLabel: 'Телефон нөміріңіз',
      phonePlaceholder: '+996 555 123456',
      amountLabel: 'Қажетті сома (CNY)',
      amountPlaceholder: 'мысалы: 5 000 ¥',
      methodLabel: 'Аударым әдісі',
      messageLabel: 'Қосымша хабарлама (міндетті емес)',
      messagePlaceholder: 'Қытайдағы жеткізушіге төлем т.б.',
      submitBtn: 'WhatsApp арқылы жіберу',
    },
    footer: {
      bio: 'Қырғызстандағы Alipay және WeChat Pay шоттарына жедел юань салу қызметі. 2 жылдық тәжірибе, 20 000+ риза клиенттер.',
      sectionsTitle: 'Бөлімдер',
      infoTitle: 'Ақпарат',
      contactTitle: 'Байланыс',
      privacyLink: 'Құпиялылық саясаты',
      termsLink: 'Пайдаланушы келісімі',
      adminLink: 'Админ: Бағамды өзгерту',
      workHoursTitle: 'Жұмыс уақыты:',
      rights: 'Барлық құқықтар қорғалған.',
      brandTag: 'Alipay & WeChat Юань алмастыру қызметі',
    },
    mobileSticky: {
      rateLabel: 'Бағам CNY:',
      perCny: 'сом',
      orderBtn: 'WhatsApp Тапсырыс',
    },
    orderModal: {
      title: 'Юань тапсырыс беру',
      subtitle: 'Alipay және WeChat шотына жедел аударым',
      amountLabel: 'Қажетті сома (CNY)',
      methodLabel: 'Аударым әдісі',
      estPayment: 'Болжамды төлем:',
      somLabel: 'сом',
      submitBtn: 'WhatsApp арқылы тапсырысты растау',
      rateLockNote: 'Өтініш жіберілген кезде бағам сіз үшін толық бекітіледі',
    },
    legalModal: {
      privacyTitle: 'Құпиялылық саясаты',
      termsTitle: 'Пайдаланушы келісімі',
      sub: 'YuanPro клиенттері үшін ресми ақпарат',
      privacyHeading1: '1. Жалпы ережелер',
      privacyBody1: 'Біз клиенттеріміздің құпиялылығын жоғары бағалаймыз. Барлық жеке мәліметтер тек операцияны орындау үшін пайдаланылады.',
      privacyHeading2: '2. Деректерді жинау және сақтау',
      privacyBody2: 'Біз үшінші тұлғаларға ешқандай деректерді бермейміз. Байланыс WhatsApp қауіпсіз арнасы арқылы жүреді.',
      privacyHeading3: '3. Қауіпсіздік',
      privacyBody3: 'Операция аяқталып, ресми чек берілген соң мәліметтер қауіпсіздік ережелеріне сай сақталады.',
      termsHeading1: '1. Келісімнің мәні',
      termsBody1: 'Сервис клиенттің тапсырысы бойынша соманы қабылдап, тиісті юань сомасын Alipay немесе WeChat шотына аударады.',
      termsHeading2: '2. Бағамды бекіту тәртібі',
      termsBody2: 'Өтініш WhatsApp арқылы расталған сәттегі бағам бекітіледі және өзгертілмейді.',
      termsHeading3: '3. Жауапкершілік',
      termsBody3: 'Клиент дұрыс реквизиттер беруге, ал сервис төлемнен кейін 5–10 минутта қаражатты аударып, электронды чегін беруге міндеттенеді.',
      closeBtn: 'Түсінікті',
    },
    chatbot: {
      badge: 'Онлайн Консультант',
      headerTitle: 'YuanPro Көмекші',
      headerSub: '24/7 Жедел жауаптар',
      welcomeMsg: 'Сәлеметсіз бе! Мен YuanPro онлайн кеңесшісімін. Alipay және WeChat шоттарын толтыру, өзекті бағам және төлем тәсілдері бойынша сұрақтарыңызға жауап беруге дайынмын.',
      quickPrompt1: 'Бүгінгі бағам қанша?',
      quickPrompt2: 'Alipay қалай толтырылады?',
      quickPrompt3: 'WeChat арқылы төлеу',
      quickPrompt4: 'Қандай банктер бар?',
      quickPrompt5: 'Қолма-қол ($ , сом) бола ма?',
      quickPrompt6: 'WhatsApp-қа тікелей жазу',
      inputPlaceholder: 'Сұрағыңызды жазыңыз немесе соманы енгізіңіз...',
      sendBtn: 'Жіберу',
      orderViaWhatsApp: 'WhatsApp арқылы тапсырыс беру',
      calcAnswer: 'Сіз көрсеткен {cny} CNY сомасы бүгінгі бағам бойынша шамамен {som} сом болады. Бұл тапсырысты WhatsApp арқылы маманға бірден жібергіңіз келе ме?',
      botOnline: 'Көмекші онлайн',
    },
  },
};
