import React, { useState } from 'react';
import { A11yProvider } from './context/A11yContext';
import TopBanner from './components/TopBanner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBanner from './components/StatsBanner';
import BenefitsGrid from './components/BenefitsGrid';
import PlansSection from './components/PlansSection';
import SavingsCalculator from './components/SavingsCalculator';
import CoverageMap from './components/CoverageMap';
import Testimonials from './components/Testimonials';
import LeadWizardForm from './components/LeadWizardForm';
import FaqAccordion from './components/FaqAccordion';
import FinalCta from './components/FinalCta';
import Footer from './components/Footer';
import PrivacyModal from './components/PrivacyModal';
import FloatingActions from './components/FloatingActions';

export default function App() {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <A11yProvider>
      <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white font-body transition-colors duration-200">
        
        {/* Accessible Skip-to-Content Link (WCAG 2.2 AA & taste-skill) */}
        <a href="#main-content" className="skip-link">
          Saltar al contenido principal
        </a>

        {/* Top Promotional Urgency Bar */}
        <TopBanner />

        {/* Sticky Header with A11y & Theme Controls */}
        <Navbar />

        {/* Main Content Areas */}
        <main id="main-content" className="flex-1">
          <Hero />
          <StatsBanner />
          <BenefitsGrid />
          <PlansSection />
          <SavingsCalculator />
          <CoverageMap />
          <Testimonials />
          <LeadWizardForm />
          <FaqAccordion />
          <FinalCta />
        </main>

        {/* Footer & Privacy Policy Modal */}
        <Footer onOpenPrivacy={() => setPrivacyOpen(true)} />
        <PrivacyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />

        {/* Floating Quick Action Widgets (WhatsApp & Back-to-Top) */}
        <FloatingActions />
      </div>
    </A11yProvider>
  );
}
