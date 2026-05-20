import React, { useState, useEffect } from 'react';
import { ArrowRight, User, Terminal } from 'lucide-react';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const roles = [
    "a Beginner Web Developer.",
    "a UI/UX Enthusiast.",
    "a Creative Explorer.",
    "an Inquisitive Coder."
  ];
  
  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    let active = true;

    const tick = () => {
      if (!active) return;
      const currentRole = roles[roleIndex];
      
      if (isDeleting) {
        charIndex--;
        typingSpeed = 50;
      } else {
        charIndex++;
        typingSpeed = 100;
      }

      setDisplayText(currentRole.substring(0, charIndex));

      if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typingSpeed = 1500; // Standby
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 300; // Pause
      }

      setTimeout(tick, typingSpeed);
    };

    setTimeout(tick, 1000);
    return () => {
      active = false;
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center pt-20 px-6 max-w-6xl mx-auto w-full relative">
      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-12 md:gap-16 items-center w-full">
        {/* Left Hero Contents */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/5 bg-white/5 text-xs font-semibold text-gray-200 mb-6 backdrop-blur-md reveal">
            <span className="w-2 h-2 bg-accentCyan rounded-full animate-heartbeat shadow-[0_0_8px_rgba(6,182,212,0.6)]" />
            Welcome to my creative space
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold leading-none mb-4 text-white reveal" style={{ transitionDelay: '80ms' }}>
            Hi, I'm <span className="bg-accent-gradient bg-clip-text text-transparent">Krishna Sinha</span>
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-400 mb-6 h-12 reveal" style={{ transitionDelay: '160ms' }}>
            I am <span className="text-accentCyan font-bold border-r-2 border-accentCyan pr-1 animate-pulse">{displayText}</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-400 max-w-lg mb-8 leading-relaxed reveal" style={{ transitionDelay: '240ms' }}>
            A passionate beginner developer exploring the universe of creative web technologies. I love designing elegant glassmorphic layouts, crafting responsive interfaces, and writing interactive scripts to bring ideas to life.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-12 reveal" style={{ transitionDelay: '320ms' }}>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded font-bold text-sm bg-accent-gradient text-white hover:translate-y-[-3px] hover:shadow-[0_15px_30px_rgba(139,92,246,0.35)] transition-all duration-300"
            >
              View Portfolio <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded font-bold text-sm bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 hover:translate-y-[-3px] transition-all duration-300"
            >
              Know More <User className="w-4 h-4" />
            </a>
          </div>

          {/* Stats Bar */}
          <div className="flex gap-8 border-t border-white/5 pt-8 w-full justify-center md:justify-start reveal" style={{ transitionDelay: '400ms' }}>
            <div>
              <span className="block text-3xl font-heading font-black bg-accent-gradient bg-clip-text text-transparent leading-none">5+</span>
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Mini Projects</span>
            </div>
            <div>
              <span className="block text-3xl font-heading font-black bg-accent-gradient bg-clip-text text-transparent leading-none">100%</span>
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Passion & Focus</span>
            </div>
            <div>
              <span className="block text-3xl font-heading font-black bg-accent-gradient bg-clip-text text-transparent leading-none">24/7</span>
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Learning Loop</span>
            </div>
          </div>
        </div>

        {/* Right Code Visual */}
        <div className="hidden md:flex justify-center relative reveal" style={{ transitionDelay: '480ms' }}>
          <div className="glass-panel border-white/10 rounded-2xl p-8 w-full max-w-[420px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform [perspective:1000px] [rotateY:-10deg] [rotateX:5deg] hover:[rotateY:0deg] hover:[rotateX:0deg] hover:translate-y-[-10px] hover:shadow-[0_25px_60px_rgba(6,182,212,0.15)] transition-all duration-500 ease-out">
            <div className="flex gap-1.5 mb-6">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-yellow-500" />
              <span className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            
            <div className="font-mono text-xs text-gray-300 flex flex-col gap-1.5 leading-relaxed">
              <div><span className="code-keyword">const</span> developer = &#123;</div>
              <div className="pl-5"><span className="code-property">name</span>: <span className="code-string">"Krishna Sinha"</span>,</div>
              <div className="pl-5"><span className="code-property">role</span>: <span className="code-string">"Frontend Developer"</span>,</div>
              <div className="pl-5"><span className="code-property">skills</span>: [<span className="code-string">"HTML"</span>, <span className="code-string">"Tailwind"</span>, <span className="code-string">"React"</span>],</div>
              <div className="pl-5"><span className="code-property">passion</span>: <span className="code-string">"Gorgeous UI/UX"</span>,</div>
              <div className="pl-5"><span className="code-property">learningRate</span>: <span className="code-number">Infinity</span></div>
              <div>&#125;;</div>
              <div className="mt-3 text-gray-500 italic">// Bringing ideas to reality</div>
              <div>developer.buildStunningWebsite();</div>
            </div>
            
            <div className="absolute bottom-[-15px] left-[-15px] bg-accentPurple/95 backdrop-blur border border-white/20 px-4 py-2.5 rounded shadow-lg text-[10px] font-bold text-white uppercase tracking-wider flex items-center gap-1.5 animate-float-element">
              <Terminal className="w-3.5 h-3.5" /> Frontend Craftsperson
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Down */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 reveal" style={{ transitionDelay: '560ms' }}>
        <a href="#about" aria-label="Scroll to About Me" className="block p-1 border border-gray-500 hover:border-accentCyan rounded-full transition-colors duration-300">
          <div className="w-5 h-8 border-2 border-gray-400 hover:border-accentCyan rounded-full relative flex justify-center">
            <span className="w-1 h-2 bg-accentCyan rounded absolute top-2 animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
}
