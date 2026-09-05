import React from 'react';

interface BankLogoProps {
  name: string;
  className?: string;
}

export const BankLogo: React.FC<BankLogoProps> = ({ name, className = "w-6 h-6" }) => {
  switch (name) {
    case 'mbank':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="22" fill="#00A551" />
          <path d="M25 72V28L50 52L75 28V72H63V46L50 59L37 46V72H25Z" fill="white" />
        </svg>
      );
    case 'obank':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="22" fill="#E6007E" />
          <circle cx="50" cy="50" r="26" stroke="white" strokeWidth="12" fill="none" />
          <text x="64" y="44" fill="white" fontSize="24" fontWeight="bold" fontFamily="sans-serif">!</text>
        </svg>
      );
    case 'optima':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="22" fill="#D31245" />
          <circle cx="50" cy="50" r="24" stroke="white" strokeWidth="9" fill="none" />
          <path d="M50 26V50L66 66" stroke="white" strokeWidth="9" strokeLinecap="round" />
        </svg>
      );
    case 'bakai':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="22" fill="#1C3F94" />
          <path d="M26 26H54C64 26 70 31 70 39C70 45 66 49 60 51C67 53 72 58 72 66C72 75 64 80 53 80H26V26ZM38 37V47H51C56 47 59 45 59 42C59 39 56 37 51 37H38ZM38 58V69H52C57 69 60 67 60 63.5C60 60 57 58 52 58H38Z" fill="white" />
        </svg>
      );
    case 'baitushum':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="22" fill="#F37021" />
          <circle cx="40" cy="50" r="18" fill="white" />
          <circle cx="62" cy="50" r="14" fill="white" fillOpacity="0.8" />
          <path d="M25 76L75 76" stroke="white" strokeWidth="6" strokeLinecap="round" />
        </svg>
      );
    case 'alipay':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="22" fill="#1677FF" />
          <path d="M22 46C38 45 55 43 65 38C61 29 55 24 45 24C30 24 25 32 25 32M20 37H80M50 20V37M46 54C54 62 65 72 79 78M44 56C39 67 31 76 21 78C33 80 50 71 58 59" stroke="white" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'wechat':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="22" fill="#07C160" />
          {/* WeChat Bubble 1 */}
          <path d="M44 54C44 42.95 34.6 34 23 34C11.4 34 2 42.95 2 54C2 60.1 4.7 65.6 9 69.4L7 76L14.2 73.1C16.9 74.3 19.9 75 23 75C34.6 75 44 66.05 44 54Z" transform="translate(14, -6)" fill="white" />
          <circle cx="31" cy="45" r="2.8" fill="#07C160" />
          <circle cx="43" cy="45" r="2.8" fill="#07C160" />
          {/* WeChat Bubble 2 */}
          <path d="M36 44C36 34.6 43.6 27 53 27C62.4 27 70 34.6 70 44C70 49.3 67.8 54.1 64.2 57.3L66 63L59.8 60.5C57.7 61.5 55.4 62 53 62C43.6 62 36 54.4 36 44Z" transform="translate(10, 10)" fill="white" />
          <circle cx="58" cy="52" r="2.4" fill="#07C160" />
          <circle cx="68" cy="52" r="2.4" fill="#07C160" />
        </svg>
      );
    case 'demir':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="22" fill="#B30838" />
          <path d="M28 26H52C66 26 74 36 74 50C74 64 66 74 52 74H28V26ZM42 38V62H51C60 62 64 57 64 50C64 43 60 38 51 38H42Z" fill="white" />
        </svg>
      );
    default:
      return (
        <div className={`rounded-xl bg-slate-800 flex items-center justify-center text-white font-bold ${className}`}>
          ¥
        </div>
      );
  }
};
