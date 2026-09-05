export type Language = 'ky' | 'ru' | 'kz';

export interface ExchangeRates {
  buyRate: number; // e.g., 12.20
  sellRate: number; // e.g., 12.35
  currencyFrom: string;
  currencyTo: string;
  updatedAt: string;
  isLive: boolean;
}

export interface BenefitItem {
  number: string;
  title: string;
  description: string;
  iconName: string;
}

export interface GuaranteeItem {
  title: string;
  description: string;
  iconName: string;
}

export interface StepItem {
  step: string;
  title: string;
  description: string;
  badge: string;
}

export interface TrustMetric {
  value: string;
  label: string;
  subtext: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  avatar: string;
  text: string;
  rating: number;
  date: string;
  tag: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export type PaymentMethod = 'cash' | 'alipay' | 'wechat' | 'bank_transfer';
