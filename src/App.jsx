import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.reveal');
      const viewportHeight = window.innerHeight;

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        
        // Symmetrical check if completely off-screen to save render cycles
        if (rect.bottom < 0 || rect.top > viewportHeight) {
          el.style.opacity = '0';
          el.style.transform = 'translateY(75px) scale(0.92)';
          el.style.filter = 'blur(8px)';
          return;
        }

        // Active range: Elements are 100% clear in the viewport, and fade/collapse over 250px exactly as they exit top/bottom screen edges
        const fadeDistance = 250; 
        let progress = 1;

        const isHeroElement = el.closest('#home') !== null;

        if (rect.top < 0) {
          // Exiting through the top edge: progress decays from 1 (at 0px) to 0 (at -250px)
          progress = Math.max(0, 1 - Math.abs(rect.top) / fadeDistance);
        } else if (!isHeroElement && rect.top > viewportHeight - fadeDistance) {
          // Entering/exiting through the bottom edge: progress decays from 1 (at viewportHeight - 250px) to 0 (at viewportHeight)
          progress = Math.max(0, (viewportHeight - rect.top) / fadeDistance);
        }

        // Apply smooth sine easing
        const easeProgress = Math.sin((progress * Math.PI) / 2);

        // Collapse direction: slide upwards (-1) if exiting top, downwards (1) if exiting bottom
        const direction = rect.top < viewportHeight / 2 ? -1 : 1;
        const yOffset = (1 - easeProgress) * 75 * direction;
        const scale = 0.92 + easeProgress * 0.08;
        const blur = (1 - easeProgress) * 8;

        // Apply styles directly for real-time responsiveness matching scroll momentum
        el.style.opacity = `${easeProgress}`;
        el.style.transform = `translateY(${yOffset}px) scale(${scale})`;
        el.style.filter = `blur(${blur}px)`;
      });
    };

    // Attach high-performance passive event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    // Initial trigger after mounting to ensure perfect positioning of elements immediately
    const timer = setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="relative bg-bgDarker min-h-screen z-0 overflow-x-hidden">
      {/* Background Animated Blobs */}
      <div className="absolute inset-0 pointer-events-none z-[-10] overflow-hidden">
        {/* Blob Purple */}
        <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full bg-accentPurple/25 blur-[140px] animate-float-blob" />
        {/* Blob Cyan */}
        <div className="absolute top-[30%] left-[-200px] w-[600px] h-[600px] rounded-full bg-accentCyan/20 blur-[140px] animate-float-blob" />
        {/* Blob Pink */}
        <div className="absolute bottom-[5%] right-[-100px] w-[450px] h-[450px] rounded-full bg-accentPink/20 blur-[140px] animate-float-blob" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
