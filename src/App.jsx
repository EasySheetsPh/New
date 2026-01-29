import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SocialProof from './components/SocialProof';
import ProductShowcase from './components/ProductShowcase';
import ExitPopup from './components/ExitPopup';
import Footer from './components/Footer';

// Lazy load non-critical sections for performance
// Lazy load non-critical sections for performance
const Benefits = lazy(() => import('./components/Benefits'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const FAQ = lazy(() => import('./components/FAQ'));
const Contact = lazy(() => import('./components/Contact'));
const CookieConsent = lazy(() => import('./components/CookieConsent'));
const ScrollTracker = lazy(() => import('./components/ScrollTracker'));

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-teal-200 selection:text-teal-900 overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <SocialProof />
        <ProductShowcase />

        <Suspense fallback={<div className="py-32 text-center text-gray-400">Loading contents...</div>}>
          <Benefits />
          <Testimonials />
          <FAQ />
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <ExitPopup />
      <Suspense fallback={null}>
        <ScrollTracker />
        <CookieConsent />
      </Suspense>
    </div>
  );
}

export default App;
