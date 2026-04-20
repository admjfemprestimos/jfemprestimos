/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Hours from './components/Hours';
import Testimonials from './components/Testimonials';
import StatsStrip from './components/StatsStrip';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-brand-200 selection:text-brand-900 overflow-x-hidden">
      <Navbar />
      <Hero />
      <main>
        <About />
        <Features />
        <Testimonials />
        <StatsStrip />
        <FAQ />
        <Hours />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
