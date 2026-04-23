import React, { useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Method from './components/Method';
import Guarantee from './components/Guarantee';
import Target from './components/Target';
import Phases from './components/Phases';
import Areas from './components/Areas';
import Offer from './components/Offer';
import About from './components/About';
import Faq from './components/Faq';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import MasterclassPage from './pages/MasterclassPage';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [page, setPage] = useState('home');

  useLayoutEffect(() => {
    let ctx = gsap.context(() => { });
    return () => ctx.revert();
  }, []);

  if (page === 'masterclass') {
    return <MasterclassPage onBack={() => setPage('home')} />;
  }

  return (
    <div className="relative min-h-[100dvh] w-full overflow-hidden text-ink bg-cloud">

      {/* Premium Decorative Floating Elements with Enhanced Glow */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Primary blush orb - top left */}
        <div className="glow-orb glow-orb-blush absolute top-[5%] left-[0%] w-[55vw] h-[55vw] max-w-[700px]" style={{ animationDelay: '0s' }}></div>

        {/* Coral accent orb - bottom right */}
        <div className="glow-orb glow-orb-coral absolute bottom-[10%] right-[-5%] w-[50vw] h-[50vw] max-w-[650px]" style={{ animationDelay: '2s' }}></div>

        {/* Trust blue orb - center right */}
        <div className="glow-orb glow-orb-trust absolute top-[40%] right-[15%] w-[35vw] h-[35vw] max-w-[450px]" style={{ animationDelay: '4s' }}></div>

        {/* Secondary blush orb - bottom left */}
        <div className="glow-orb glow-orb-blush absolute bottom-[30%] left-[10%] w-[30vw] h-[30vw] max-w-[400px] opacity-50" style={{ animationDelay: '3s' }}></div>

        {/* Subtle coral highlight - top center */}
        <div className="glow-orb glow-orb-coral absolute top-[15%] left-[40%] w-[25vw] h-[25vw] max-w-[350px] opacity-40" style={{ animationDelay: '5s' }}></div>

        {/* Global noise texture for premium feel */}
        <div className="absolute inset-0 noise-overlay"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 hidden-scrollbar">
        <Navbar />

        <main className="flex flex-col gap-8 md:gap-16 pt-8 pb-16 px-4 sm:px-8 max-w-[1400px] mx-auto">
          <Hero />
          <Problem />
          <Method />
          <Guarantee />
          <Target />
          <Phases />
          <Areas />
          <Offer onNavigateToMasterclass={() => setPage('masterclass')} />
          <About />
          <Faq />
          <CtaSection />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
