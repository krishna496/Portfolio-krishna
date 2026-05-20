import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle, Loader2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success'

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API request
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Clear success overlay after 5s
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }, 1800);
  };

  const handleInputChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto w-full">
      {/* Header */}
      <div className="text-center mb-16 reveal">
        <span className="text-xs font-bold uppercase tracking-widest bg-accent-gradient bg-clip-text text-transparent">
          Let's Collaborate
        </span>
        <h2 className="text-3xl sm:text-4xl font-heading font-extrabold mt-1 text-white">
          Get In Touch
        </h2>
        <div className="w-12 h-1 bg-accent-gradient mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-12 items-start">
        {/* Info Column */}
        <div className="flex flex-col reveal" style={{ transitionDelay: '100ms' }}>
          <h3 className="text-2xl font-heading font-extrabold text-white mb-4">
            Let's start something great!
          </h3>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
            Whether you want to discuss a new collaboration project, ask about my learning path, or just say hello, my inbox is always open. Feel free to shoot a message!
          </p>

          {/* Cards */}
          <div className="flex flex-col gap-5 mb-8">
            <div className="flex items-center gap-5 p-5 bg-bgCard border border-white/5 rounded-2xl backdrop-blur-md">
              <div className="w-12 h-12 rounded-full bg-accentCyan/10 text-accentCyan flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-0.5">Email Me</h4>
                <a href="mailto:krishna.sinha@example.com" className="font-semibold text-white hover:text-accentCyan transition-colors">
                  krishna.sinha@example.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-5 p-5 bg-bgCard border border-white/5 rounded-2xl backdrop-blur-md">
              <div className="w-12 h-12 rounded-full bg-accentCyan/10 text-accentCyan flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-0.5">Location</h4>
                <p className="font-semibold text-white">India</p>
              </div>
            </div>
          </div>

          {/* Social Row */}
          <div>
            <h4 className="text-xs font-bold text-gray-400 mb-4 uppercase tracking-wider">Find me on social channels:</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/5 border border-white/5 flex items-center justify-content-center text-gray-400 hover:text-white hover:bg-accent-gradient hover:border-transparent hover:shadow-[0_0_15px_rgba(139,92,246,0.4)] hover:translate-y-[-4px] transition-all duration-300"
                aria-label="GitHub"
              >
                <i className="fa-brands fa-github text-lg leading-none" />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/5 border border-white/5 flex items-center justify-content-center text-gray-400 hover:text-white hover:bg-accent-gradient hover:border-transparent hover:shadow-[0_0_15px_rgba(139,92,246,0.4)] hover:translate-y-[-4px] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <i className="fa-brands fa-linkedin-in text-lg leading-none" />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/5 border border-white/5 flex items-center justify-content-center text-gray-400 hover:text-white hover:bg-accent-gradient hover:border-transparent hover:shadow-[0_0_15px_rgba(139,92,246,0.4)] hover:translate-y-[-4px] transition-all duration-300"
                aria-label="Twitter"
              >
                <i className="fa-brands fa-x-twitter text-lg leading-none" />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/5 border border-white/5 flex items-center justify-content-center text-gray-400 hover:text-white hover:bg-accent-gradient hover:border-transparent hover:shadow-[0_0_15px_rgba(139,92,246,0.4)] hover:translate-y-[-4px] transition-all duration-300"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram text-lg leading-none" />
              </a>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="w-full reveal" style={{ transitionDelay: '200ms' }}>
          <form
            onSubmit={handleSubmit}
            className="bg-bgCard border border-white/5 rounded-2xl p-8 backdrop-blur-md shadow-2xl flex flex-col gap-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name */}
              <div className="relative z-0 w-full group border-b border-white/10 focus-within:border-accentCyan transition-colors duration-300">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange(e, 'name')}
                  className="block py-3 px-0 w-full text-sm text-white bg-transparent border-0 appearance-none focus:outline-none focus:ring-0 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="name"
                  className="peer-focus:font-semibold absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accentCyan peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Your Name
                </label>
              </div>

              {/* Email */}
              <div className="relative z-0 w-full group border-b border-white/10 focus-within:border-accentCyan transition-colors duration-300">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange(e, 'email')}
                  className="block py-3 px-0 w-full text-sm text-white bg-transparent border-0 appearance-none focus:outline-none focus:ring-0 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="email"
                  className="peer-focus:font-semibold absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accentCyan peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Your Email
                </label>
              </div>
            </div>

            {/* Subject */}
            <div className="relative z-0 w-full group border-b border-white/10 focus-within:border-accentCyan transition-colors duration-300">
              <input
                type="text"
                name="subject"
                id="subject"
                value={formData.subject}
                onChange={(e) => handleInputChange(e, 'subject')}
                className="block py-3 px-0 w-full text-sm text-white bg-transparent border-0 appearance-none focus:outline-none focus:ring-0 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="subject"
                className="peer-focus:font-semibold absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accentCyan peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Subject
              </label>
            </div>

            {/* Message */}
            <div className="relative z-0 w-full group border-b border-white/10 focus-within:border-accentCyan transition-colors duration-300">
              <textarea
                name="message"
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => handleInputChange(e, 'message')}
                className="block py-3 px-0 w-full text-sm text-white bg-transparent border-0 appearance-none focus:outline-none focus:ring-0 peer resize-none"
                placeholder=" "
                required
              />
              <label
                htmlFor="message"
                className="peer-focus:font-semibold absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accentCyan peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Your Message
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="self-start inline-flex items-center gap-2 px-8 py-3.5 rounded font-bold text-sm bg-accent-gradient text-white hover:translate-y-[-3px] hover:shadow-[0_15px_30px_rgba(139,92,246,0.35)] transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none"
            >
              {status === 'loading' ? (
                <>
                  Sending... <Loader2 className="w-4 h-4 animate-spin" />
                </>
              ) : (
                <>
                  Send Message <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Success Banner */}
          {status === 'success' && (
            <div className="mt-4 flex items-center gap-3 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 font-semibold animate-fade-in">
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
              <span>Thank you! Your message was sent successfully.</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
