import React, { useState } from 'react';
import { RateProvider, useRates } from './context/RateContext';
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CurrencyRateSection } from './components/CurrencyRateSection';
import { BankPartnersSection } from './components/BankPartnersSection';
import { BenefitsSection } from './components/BenefitsSection';
import { GuaranteesSection } from './components/GuaranteesSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileStickyCta } from './components/MobileStickyCta';
import { OrderModal } from './components/OrderModal';
import { LegalModal } from './components/LegalModal';
import { AdminModal } from './components/AdminModal';
import { ChatBot } from './components/ChatBot';
import { GoldCoinRain } from './components/GoldCoinRain';

function MainApp() {
  const { isAdminOpen, setIsAdminOpen } = useRates();
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [modalAmount, setModalAmount] = useState<number | undefined>(3000);
  
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalType, setLegalType] = useState<'privacy' | 'terms'>('privacy');

  const handleOpenOrderModal = (amount?: number) => {
    setModalAmount(amount || 3000);
    setOrderModalOpen(true);
  };

  const handleOpenLegalModal = (type: 'privacy' | 'terms') => {
    setLegalType(type);
    setLegalModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F7F8FA] text-[#1F2937] font-sans antialiased selection:bg-[#111827] selection:text-white relative">
      
      {/* Background Sparkling Falling Gold Coins Animation */}
      <GoldCoinRain />

      {/* Header with 3-line hamburger drawer, language switch, ticker */}
      <Header 
        onOpenOrderModal={handleOpenOrderModal} 
      />

      {/* Main Content Sections */}
      <main className="space-y-0">
        
        {/* 1. Hero Section */}
        <HeroSection onOpenOrderModal={handleOpenOrderModal} />

        {/* 2. Currency Rate & Calculator Section */}
        <CurrencyRateSection onOpenOrderModal={handleOpenOrderModal} />

        {/* 3. Online Message & Direct Order Section (Placed right after Currency Rates) */}
        <ContactSection />

        {/* 4. Bank Partners & Chinese Wallets Section */}
        <BankPartnersSection onOpenOrderModal={() => handleOpenOrderModal()} />

        {/* 5. Benefits Section (2+ yrs experience & 20000+ clients stats) */}
        <BenefitsSection onOpenOrderModal={() => handleOpenOrderModal()} />

        {/* 6. Guarantees Section */}
        <GuaranteesSection />

        {/* 7. How It Works (3 Simple Steps) */}
        <HowItWorksSection onOpenOrderModal={() => handleOpenOrderModal()} />

        {/* 8. Testimonials */}
        <TestimonialsSection />

        {/* 9. FAQ Section */}
        <FaqSection />

        {/* 10. Final CTA */}
        <FinalCtaSection onOpenOrderModal={() => handleOpenOrderModal()} />

      </main>

      {/* Footer */}
      <Footer onOpenLegalModal={handleOpenLegalModal} />

      {/* Mobile Sticky CTA Bar */}
      <MobileStickyCta onOpenOrderModal={() => handleOpenOrderModal()} />

      {/* Interactive Support ChatBot */}
      <ChatBot />

      {/* Order Modal */}
      <OrderModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
        initialAmount={modalAmount}
      />

      {/* Legal Privacy / Terms Modal */}
      <LegalModal
        isOpen={legalModalOpen}
        onClose={() => setLegalModalOpen(false)}
        type={legalType}
      />

      {/* Admin Panel Modal for Daily Rate Management */}
      <AdminModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
      />

    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <RateProvider>
        <MainApp />
      </RateProvider>
    </LanguageProvider>
  );
}
