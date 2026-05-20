import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-bgDark border-t border-white/5 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-8">
        
        {/* Brand Block */}
        <div className="text-center">
          <a href="#home" className="text-2xl font-heading font-extrabold tracking-tight">
            <span className="text-accentCyan">&lt;</span>Krishna<span className="text-accentCyan">.S/&gt;</span>
          </a>
          <p className="text-xs text-gray-500 mt-2 font-medium">
            Crafting interactive web designs with curiosity and logic.
          </p>
        </div>

        {/* Link List */}
        <div className="flex gap-8 text-sm font-semibold text-gray-400">
          <a href="#home" className="hover:text-accentCyan transition-colors duration-300">Home</a>
          <a href="#about" className="hover:text-accentCyan transition-colors duration-300">About</a>
          <a href="#projects" className="hover:text-accentCyan transition-colors duration-300">Projects</a>
          <a href="#contact" className="hover:text-accentCyan transition-colors duration-300">Contact</a>
        </div>

        {/* Bottom Banner */}
        <div className="w-full border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium">
          <p>&copy; 2026 Krishna Sinha. All rights reserved.</p>
          
          {/* Scroll back to top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-content-center text-gray-400 hover:text-white hover:bg-accent-gradient hover:border-transparent hover:shadow-[0_0_15px_rgba(139,92,246,0.4)] hover:translate-y-[-4px] transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 mx-auto" />
          </button>
        </div>

      </div>
    </footer>
  );
}
