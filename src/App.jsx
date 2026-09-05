import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HighlightsTicker from './components/HighlightsTicker';
import ExperienceSection from './components/ExperienceSection';
import LoungeFeaturesSection from './components/LoungeFeaturesSection';
import SimRacingSection from './components/SimRacingSection';
import EventsSection from './components/EventsSection';
import OffersSection from './components/OffersSection';
import LocationSection from './components/LocationSection';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-main)', color: 'var(--text-primary)' }}>
      {/* Fixed Navigation */}
      <Navbar />

      <main>
        {/* 1. Hero */}
        <Hero />

        {/* 2. Highlights Ticker */}
        <HighlightsTicker />

        {/* 3. The Experience */}
        <ExperienceSection />

        {/* 4. The Experience — Horizontal Scroll Showcase */}
        <LoungeFeaturesSection />

        {/* 5. Sim Racing */}
        <SimRacingSection />

        {/* 6. Events & Celebrations */}
        <EventsSection />

        {/* 7. Offers & Pricing */}
        <OffersSection />

        {/* 8. Location & Hours */}
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Fixed WhatsApp Floating Button */}
      <FloatingWhatsApp />
    </div>
  );
}
