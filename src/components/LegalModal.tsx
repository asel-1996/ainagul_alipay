import React from 'react';
import { X, Shield, FileText } from 'lucide-react';
import { sound } from '../utils/sound';
import { useLanguage } from '../context/LanguageContext';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'terms';
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, type }) => {
  const { language } = useLanguage();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#0F172A] rounded-3xl shadow-2xl border border-slate-800 overflow-hidden my-8 max-h-[85vh] flex flex-col text-white">
        
        {/* Header */}
        <div className="bg-[#0B0F19] text-white p-5 sm:p-6 flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400">
              {type === 'privacy' ? <Shield className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold font-display">
                {type === 'privacy' 
                  ? (language === 'ru' ? 'Политика конфиденциальности' : language === 'kz' ? 'Құпиялылық саясаты' : 'Купуялуулук саясаты')
                  : (language === 'ru' ? 'Пользовательское соглашение' : language === 'kz' ? 'Пайдаланушы келісімі' : 'Колдонуучу келишими')}
              </h3>
              <p className="text-xs text-slate-400">
                {language === 'ru' ? 'Официальная информация для клиентов YuanPro' : language === 'kz' ? 'YuanPro клиенттеріне арналған ресми ақпарат' : 'YuanPro кардарлары үчүн расмий маалымат'}
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="p-2 text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 rounded-full transition-colors cursor-pointer"
            aria-label="Жабуу"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-4 text-sm text-slate-300 leading-relaxed">
          {type === 'privacy' ? (
            language === 'ru' ? (
              <>
                <p className="font-bold text-white font-display">1. Общие положения</p>
                <p>Мы ценим конфиденциальность наших клиентов. Все персональные данные и реквизиты (Alipay ID, WeChat QR и др.) используются исключительно для точного проведения обменной операции.</p>
                <p className="font-bold text-white font-display">2. Сбор и хранение информации</p>
                <p>Мы никогда не передаем реквизиты третьим лицам. Все общение и обмен чеками ведутся через защищенный канал WhatsApp.</p>
                <p className="font-bold text-white font-display">3. Безопасность</p>
                <p>После успешного завершения операции и предоставления электронного чека реквизиты сохраняются строго в соответствии со стандартами финансовой безопасности.</p>
              </>
            ) : language === 'kz' ? (
              <>
                <p className="font-bold text-white font-display">1. Жалпы ережелер</p>
                <p>Біз клиенттеріміздің құпиялылығын жоғары бағалаймыз. Барлық жеке деректер мен деректемелер (Alipay ID, WeChat QR ж.б.) тек айырбастау операциясын орындау үшін пайдаланылады.</p>
                <p className="font-bold text-white font-display">2. Ақпаратты жинау және сақтау</p>
                <p>Біз деректемелерді үшінші тұлғаларға бермейміз. Барлық байланыс қауіпсіз WhatsApp арнасы арқылы жүзеге асырылады.</p>
                <p className="font-bold text-white font-display">3. Қауіпсіздік</p>
                <p>Операция сәтті аяқталып, ресми электронды чек жіберілгеннен кейін, клиенттің деректері қауіпсіздік стандарттарына сай сақталады.</p>
              </>
            ) : (
              <>
                <p className="font-bold text-white font-display">1. Жалпы жоболор</p>
                <p>Биз кардарларыбыздын купуялуулугун жогору баалайбыз. Бардык жеке маалыматтар жана реквизиттер (Alipay ID, WeChat QR ж.б.) операцияны так аткаруу үчүн гана колдонулат.</p>
                <p className="font-bold text-white font-display">2. Маалыматты чогултуу жана сактоо</p>
                <p>Биз үчүнчү жактарга эч кандай реквизиттерди бербейбиз. Бардык байланыш WhatsApp коопсуз каналы аркылуу жүргүзүлөт.</p>
                <p className="font-bold text-white font-display">3. Коопсуздук</p>
                <p>Операция ийгиликтүү аяктап, расмий электрондук чек жөнөтүлгөндөн кийин, кардардын жеке реквизиттери коопсуздук эрежелерине ылайык сакталат.</p>
              </>
            )
          ) : (
            language === 'ru' ? (
              <>
                <p className="font-bold text-white font-display">1. Предмет соглашения</p>
                <p>Сервис принимает оплату с банков Кыргызстана и обеспечивает моментальный перевод эквивалентной суммы в юанях на кошельки Alipay или WeChat Pay клиента.</p>
                <p className="font-bold text-white font-display">2. Фиксация курса</p>
                <p>Курс обмена фиксируется в момент оформления и подтверждения заявки в WhatsApp и не подлежит изменению во время сделки.</p>
                <p className="font-bold text-white font-display">3. Обязательства сторон</p>
                <p>Клиент обязуется предоставить корректные реквизиты, а сервис гарантирует перевод средств в течение 5–10 минут после оплаты с выдачей чека.</p>
              </>
            ) : language === 'kz' ? (
              <>
                <p className="font-bold text-white font-display">1. Келісімнің мәні</p>
                <p>Сервис Қырғызстан банктерінен төлем қабылдап, тиісті юань сомасын клиенттің Alipay немесе WeChat Pay шотына аударуды қамтамасыз етеді.</p>
                <p className="font-bold text-white font-display">2. Бағамды бекіту тәртібі</p>
                <p>WhatsApp арқылы өтінім расталған сәттегі бағам бекітіледі және мәміле барысында өзгертілмейді.</p>
                <p className="font-bold text-white font-display">3. Тараптардың міндеттемелері</p>
                <p>Клиент дұрыс деректемелер беруге, ал сервис төлемнен кейін 5–10 минут ішінде қаражатты аударып, электронды чек беруге міндеттенеді.</p>
              </>
            ) : (
              <>
                <p className="font-bold text-white font-display">1. Келишимдин предмети</p>
                <p>Сервис кардардын билдирмеси боюнча кыргыз банктарынан төлөмдү кабыл алып, тиешелүү юань суммасын Alipay же WeChat эсебине которуп берүүнү камсыздайт.</p>
                <p className="font-bold text-white font-display">2. Курсту бекитүү тартиби</p>
                <p>Билдирме WhatsApp аркылуу тастыкталган учурдагы курс бекитилет жана өзгөртүлбөйт.</p>
                <p className="font-bold text-white font-display">3. Тараптардын жоопкерчилиги</p>
                <p>Кардар реквизиттерди туура берүүгө, ал эми сервис төлөмдөн соң 5–10 мүнөттө акчаны которуп, электрондук чегин берүүгө милдеттенет.</p>
              </>
            )
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#0B0F19] border-t border-slate-800 flex justify-end shrink-0">
          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-full transition-colors cursor-pointer shadow-sm"
          >
            {language === 'ru' ? 'Понятно' : language === 'kz' ? 'Түсінікті' : 'Түшүнүктүү'}
          </button>
        </div>

      </div>
    </div>
  );
};
