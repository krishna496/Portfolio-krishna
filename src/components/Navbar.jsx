import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Add scroll listener for sticky class and active state highlighting
  useEffect(() => {
    const handleScroll = () => {
      // Sticky header toggle
      if (window.scrollY > 20) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      // Check which section is in viewport
      const sections = ['home', 'about', 'projects', 'contact'];
      let currentSection = 'home';

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust threshold to match navbar heights
          if (rect.top <= 140 && rect.bottom >= 140) {
            currentSection = sectionId;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <>
      {/* Main Navbar */}
      <header
        className={`fixed top-0 left-0 w-full flex items-center z-40 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isSticky
            ? 'h-16 bg-bgDarker/80 backdrop-blur-lg border-b border-white/10 shadow-xl shadow-black/40'
            : 'h-20 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-6xl w-full mx-auto flex justify-between items-center px-6">
          {/* Logo */}
          <a href="#home" className="text-2xl font-heading font-extrabold tracking-tight group">
            <span className="text-accentCyan group-hover:text-accentPurple transition-colors duration-300">&lt;</span>
            Krishna
            <span className="text-accentCyan group-hover:text-accentPurple transition-colors duration-300">.S/&gt;</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`text-sm font-semibold tracking-wide relative py-1 transition-colors duration-300 ${
                  activeSection === link.id ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.name}
                {/* Active Indicator Line */}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-accent-gradient transition-all duration-300 ${
                    activeSection === link.id ? 'w-full' : 'w-0 hover:w-full'
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="text-xs font-bold tracking-wide uppercase px-5 py-2.5 rounded border border-white/10 bg-white/5 hover:bg-accent-gradient hover:border-transparent hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all duration-300"
            >
              Let's Connect
            </a>
          </div>

          {/* Hamburger Icon */}
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="md:hidden text-white hover:text-accentCyan transition-colors duration-300"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsDrawerOpen(false)}
      />

      {/* Mobile Drawer Container */}
      <div
        className={`fixed top-0 right-0 w-80 h-screen bg-bgDark/95 backdrop-blur-lg border-l border-white/5 z-50 flex flex-col p-8 transition-transform duration-300 ease-out ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          onClick={() => setIsDrawerOpen(false)}
          className="self-end text-gray-400 hover:text-accentPink mb-12 transition-colors duration-300"
          aria-label="Close menu"
        >
          <X className="w-7 h-7" />
        </button>

        <div className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setIsDrawerOpen(false)}
              className={`text-xl font-bold tracking-wide py-2 border-b border-white/5 transition-colors duration-300 ${
                activeSection === link.id ? 'text-accentCyan' : 'text-gray-400 hover:text-accentCyan'
              }`}
            >
              {link.name}
            </a>
          ))}
          
          <a
            href="#contact"
            onClick={() => setIsDrawerOpen(false)}
            className="mt-8 py-3 text-center rounded font-semibold text-white bg-accent-gradient hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all duration-300"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </>
  );
}
