import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { useRates } from '../context/RateContext';
import { useLanguage } from '../context/LanguageContext';
import { openWhatsAppDirect } from '../data/content';
import { sound } from '../utils/sound';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
  quickAction?: {
    label: string;
    action: () => void;
  };
}

export const ChatBot: React.FC = () => {
  const { rates } = useRates();
  const { language, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const getCurrentTime = () => {
    const now = new Date();
    return `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  };

  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      id: 'init-1',
      sender: 'bot',
      text: t.chatbot.welcomeMsg,
      time: getCurrentTime(),
    },
  ]);

  useEffect(() => {
    setMessages((prev) => {
      if (prev.length === 1 && prev[0].id === 'init-1') {
        return [
          {
            id: 'init-1',
            sender: 'bot',
            text: t.chatbot.welcomeMsg,
            time: getCurrentTime(),
          },
        ];
      }
      return prev;
    });
  }, [language, t.chatbot.welcomeMsg]);

  useEffect(() => {
    if (isOpen) {
      setHasUnread(false);
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen, messages, isTyping]);

  const quickPrompts = [
    t.chatbot.quickPrompt1,
    t.chatbot.quickPrompt2,
    t.chatbot.quickPrompt3,
    t.chatbot.quickPrompt4,
    t.chatbot.quickPrompt5,
    t.chatbot.quickPrompt6,
  ];

  const handleToggle = () => {
    sound.playClick();
    setIsOpen(!isOpen);
  };

  const handleSend = (textToSend?: string) => {
    const text = (textToSend || inputText).trim();
    if (!text) return;

    sound.playClick();

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: text,
      time: getCurrentTime(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      generateBotResponse(text);
      setIsTyping(false);
    }, 500);
  };

  const generateBotResponse = (query: string) => {
    const q = query.toLowerCase();
    let botReply = '';
    let quickAction: ChatMessage['quickAction'] = undefined;

    const numbersMatch = query.match(/\b\d+[\d\s]*\b/);
    let amountFound = 0;
    if (numbersMatch) {
      const cleanNum = parseInt(numbersMatch[0].replace(/\s/g, ''), 10);
      if (cleanNum >= 100 && cleanNum <= 1000000) {
        amountFound = cleanNum;
      }
    }

    if (amountFound > 0) {
      const estimatedSom = Math.round(amountFound * rates.sellRate);
      if (language === 'ru') {
        botReply = `Сумма ${amountFound.toLocaleString('ru-RU')} CNY по курсу ${rates.sellRate.toFixed(2)} составит ≈ ${estimatedSom.toLocaleString('ru-RU')} сом. Оформить заявку?`;
      } else if (language === 'kz') {
        botReply = `${amountFound.toLocaleString('ru-RU')} CNY сомасы бүгінгі бағам (${rates.sellRate.toFixed(2)}) бойынша ≈ ${estimatedSom.toLocaleString('ru-RU')} сом болады. Тапсырысты рәсімдейміз бе?`;
      } else {
        botReply = `${amountFound.toLocaleString('ru-RU')} CNY суммасы бүгүнкү курс (${rates.sellRate.toFixed(2)}) боюнча ≈ ${estimatedSom.toLocaleString('ru-RU')} сом болот. Заказды адисибизге жөнөтөбүзбү?`;
      }
      quickAction = {
        label: `WhatsApp: ${amountFound} CNY (${estimatedSom.toLocaleString('ru-RU')} сом)`,
        action: () => openWhatsAppDirect(amountFound, estimatedSom, 'Alipay / WeChat', language),
      };
    } else if (q.includes('курс') || q.includes('баа') || q.includes('бағам') || q.includes('rate')) {
      if (language === 'ru') {
        botReply = `Актуальный курс продажи: 1 CNY = ${rates.sellRate.toFixed(2)} сом. Покупка: Договорной. При отправке заявки в WhatsApp курс фиксируется!`;
      } else if (language === 'kz') {
        botReply = `Бүгінгі сату бағамы: 1 CNY = ${rates.sellRate.toFixed(2)} сом. Сатып алу: Келісім бойынша. WhatsApp арқылы жазсаңыз, бағам бірден бекітіледі!`;
      } else {
        botReply = `Бүгүнкү сатуу курсу: 1 CNY = ${rates.sellRate.toFixed(2)} сом. Сатып алуу: Келишим баада. WhatsApp аркылуу жазсаңыз, курс дароо бекитилет!`;
      }
      quickAction = {
        label: t.chatbot.orderViaWhatsApp,
        action: () => openWhatsAppDirect(undefined, undefined, undefined, language),
      };
    } else if (q.includes('alipay') || q.includes('алипей')) {
      if (language === 'ru') {
        botReply = 'Пополняем Alipay по номеру телефона, ID или QR-коду за 5–10 минут. 0% скрытых комиссий, высылаем электронный чек!';
      } else if (language === 'kz') {
        botReply = 'Alipay шотыңызды телефон нөмірі, ID немесе QR-код арқылы 5–10 минутта толтырамыз. 0% комиссия!';
      } else {
        botReply = 'Alipay эсебиңизди телефон номери, ID же QR-код аркылуу 5–10 мүнөттө толуктайбыз. 0% комиссия!';
      }
      quickAction = {
        label: 'WhatsApp: Заказ Alipay',
        action: () => openWhatsAppDirect(3000, Math.round(3000 * rates.sellRate), 'Alipay (支付宝)', language),
      };
    } else if (q.includes('wechat') || q.includes('вичат')) {
      if (language === 'ru') {
        botReply = 'Переводим юани на WeChat кошелек поставщиков или на ваш личный аккаунт по QR-коду. Быстро и надежно!';
      } else if (language === 'kz') {
        botReply = 'WeChat әмиянына жеткізушілерге немесе жеке шотыңызға QR-код арқылы юань аударамыз!';
      } else {
        botReply = 'WeChat капчыгына поставщиктерге же жеке эсебиңизге QR-код аркылуу юань которобуз!';
      }
      quickAction = {
        label: 'WhatsApp: Заказ WeChat',
        action: () => openWhatsAppDirect(3000, Math.round(3000 * rates.sellRate), 'WeChat Pay (微信支付)', language),
      };
    } else {
      if (language === 'ru') {
        botReply = 'Для моментального расчета и пополнения Alipay/WeChat напишите нашему менеджеру в WhatsApp:';
      } else if (language === 'kz') {
        botReply = 'Толық ақпарат алу және Alipay/WeChat толтыру үшін WhatsApp арқылы жазыңыз:';
      } else {
        botReply = 'Толук маалымат алуу жана Alipay/WeChat толуктоо үчүн WhatsApp аркылуу түз жазыңыз:';
      }
      quickAction = {
        label: t.chatbot.orderViaWhatsApp,
        action: () => openWhatsAppDirect(undefined, undefined, undefined, language),
      };
    }

    sound.playSuccess();

    const botMsg: ChatMessage = {
      id: `bot-${Date.now()}`,
      sender: 'bot',
      text: botReply,
      time: getCurrentTime(),
      quickAction,
    };

    setMessages((prev) => [...prev, botMsg]);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end">
        
        {!isOpen && hasUnread && (
          <div
            onClick={handleToggle}
            className="mb-2 px-3 py-1 rounded-full bg-[#111827] border border-slate-700 shadow-md text-white text-xs font-medium flex items-center gap-1.5 cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{language === 'ru' ? 'Онлайн расчет' : language === 'kz' ? 'Онлайн есеп' : 'Онлайн эсеп'}</span>
          </div>
        )}

        <button
          onClick={handleToggle}
          id="chatbot-floating-trigger"
          className="relative w-13 h-13 rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white shadow-lg flex items-center justify-center transition-all cursor-pointer"
          aria-label="Чат консультант"
        >
          {isOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <MessageCircle className="w-6 h-6 fill-white/20" />
          )}
        </button>
      </div>

      {/* Chat Window Modal */}
      {isOpen && (
        <div className="fixed bottom-24 md:bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-32px)] sm:w-[380px] h-[480px] max-h-[80vh] bg-white rounded-[22px] shadow-2xl border border-slate-200 flex flex-col overflow-hidden text-[#111827]">
          
          {/* Chat Header */}
          <div className="bg-[#111827] text-white p-4 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-slate-800 flex items-center justify-center text-[#C9A227] font-bold text-sm">
                ¥
              </div>
              <div>
                <h4 className="text-xs font-bold font-display text-white flex items-center gap-1.5">
                  <span>YuanPro Онлайн</span>
                  <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-emerald-950 text-emerald-400">
                    Online
                  </span>
                </h4>
                <p className="text-[10px] text-slate-400">
                  1 CNY = {rates.sellRate.toFixed(2)} сом
                </p>
              </div>
            </div>

            <button
              onClick={handleToggle}
              className="p-1 text-slate-400 hover:text-white bg-slate-800 rounded-full transition-colors cursor-pointer"
              aria-label="Жабуу"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 text-xs bg-[#F7F8FA]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className="max-w-[85%] space-y-1.5">
                  <div
                    className={`p-3 rounded-2xl leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-[#111827] text-white rounded-br-xs'
                        : 'bg-white text-[#1F2937] rounded-bl-xs border border-slate-200 shadow-xs'
                    }`}
                  >
                    <p>{msg.text}</p>
                  </div>

                  {msg.quickAction && (
                    <button
                      onClick={() => {
                        sound.playClick();
                        msg.quickAction?.action();
                      }}
                      className="w-full py-2 px-3 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-white/20" />
                      <span>{msg.quickAction.label}</span>
                    </button>
                  )}

                  <span className="text-[9px] text-slate-400 block px-1">
                    {msg.time}
                  </span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="px-3 py-2 rounded-2xl bg-white border border-slate-200 text-slate-400 flex items-center gap-1 w-fit shadow-xs">
                <span className="w-1 h-1 rounded-full bg-slate-400 animate-bounce" />
                <span className="w-1 h-1 rounded-full bg-slate-400 animate-bounce [animation-delay:0.2s]" />
                <span className="w-1 h-1 rounded-full bg-slate-400 animate-bounce [animation-delay:0.4s]" />
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts */}
          <div className="px-3 py-2 bg-white border-t border-slate-100 overflow-x-auto flex gap-1.5 shrink-0 scrollbar-none">
            {quickPrompts.slice(0, 4).map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(prompt)}
                className="px-2.5 py-1 rounded-lg bg-[#F7F8FA] hover:bg-slate-100 text-slate-700 border border-slate-200 text-[11px] whitespace-nowrap shrink-0 transition-colors cursor-pointer"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-2.5 bg-white border-t border-slate-200 flex items-center gap-2 shrink-0"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={language === 'ru' ? 'Напишите сумму или вопрос...' : language === 'kz' ? 'Соманы немесе сұрағыңызды жазыңыз...' : 'Сумманы же сурооңузду жазыңыз...'}
              className="flex-1 bg-[#F7F8FA] border border-slate-200 rounded-xl px-3 py-2 text-xs text-[#111827] focus:outline-none focus:border-[#111827]"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="p-2 rounded-xl bg-[#111827] hover:bg-[#1F2937] disabled:opacity-40 text-white transition-all cursor-pointer shrink-0"
              aria-label="Жөнөтүү"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

        </div>
      )}
    </>
  );
};
