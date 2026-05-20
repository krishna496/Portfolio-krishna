import React, { useState } from 'react';
import { Compass, Dumbbell, Target } from 'lucide-react';

export default function About() {
  const [activeTab, setActiveTab] = useState('journey');

  const skills = [
    { name: 'HTML5 (Semantic & Access)', level: '90%' },
    { name: 'CSS3 (Grid, Flexbox, Animations)', level: '85%' },
    { name: 'TailwindCSS (Responsive Utility)', level: '90%' },
    { name: 'JavaScript (DOM, ES6+, Async)', level: '75%' },
    { name: 'React (Hooks, Router, Redux)', level: '70%' },
    { name: 'Git & GitHub (Collaboration)', level: '80%' },
  ];

  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto w-full">
      {/* Header */}
      <div className="text-center mb-16 reveal">
        <span className="text-xs font-bold uppercase tracking-widest bg-accent-gradient bg-clip-text text-transparent">
          Get to Know Me
        </span>
        <h2 className="text-3xl sm:text-4xl font-heading font-extrabold mt-1 text-white">
          About Myself
        </h2>
        <div className="w-12 h-1 bg-accent-gradient mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
        {/* Profile Card Left */}
        <div className="relative group max-w-sm mx-auto w-full reveal">
          <div className="absolute inset-[-4px] bg-accent-gradient rounded-3xl opacity-75 blur-md group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative bg-bgDark border border-white/5 rounded-3xl p-8 flex flex-col items-center text-center shadow-2xl">
            <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-accentPurple shadow-lg shadow-accentPurple/20 mb-6">
              <img
                src="/assets/profile_avatar.png"
                alt="Krishna Sinha Profile Avatar"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <h3 className="text-xl font-heading font-extrabold text-white mb-1">Krishna Sinha</h3>
            <p className="text-xs font-bold text-accentCyan uppercase tracking-widest mb-6">Beginner Web Developer</p>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-accent-gradient hover:border-transparent hover:shadow-[0_0_15px_rgba(139,92,246,0.4)] hover:translate-y-[-3px] transition-all duration-300"
                aria-label="GitHub"
              >
                <i className="fa-brands fa-github text-lg leading-none" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-accent-gradient hover:border-transparent hover:shadow-[0_0_15px_rgba(139,92,246,0.4)] hover:translate-y-[-3px] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <i className="fa-brands fa-linkedin-in text-lg leading-none" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-accent-gradient hover:border-transparent hover:shadow-[0_0_15px_rgba(139,92,246,0.4)] hover:translate-y-[-3px] transition-all duration-300"
                aria-label="Twitter"
              >
                <i className="fa-brands fa-x-twitter text-lg leading-none" />
              </a>
            </div>
          </div>
        </div>

        {/* Details Column Right */}
        <div className="flex flex-col reveal" style={{ transitionDelay: '150ms' }}>
          {/* Tab Selection */}
          <div className="flex bg-white/5 border border-white/5 p-1 rounded-lg gap-2 mb-8">
            <button
              onClick={() => setActiveTab('journey')}
              className={`flex-1 flex justify-center items-center gap-2 py-3 rounded-md font-semibold text-sm transition-all duration-300 ${
                activeTab === 'journey'
                  ? 'bg-accent-gradient text-white shadow-[0_0_15px_rgba(139,92,246,0.3)]'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Compass className="w-4 h-4" /> My Story
            </button>
            <button
              onClick={() => setActiveTab('skills')}
              className={`flex-1 flex justify-center items-center gap-2 py-3 rounded-md font-semibold text-sm transition-all duration-300 ${
                activeTab === 'skills'
                  ? 'bg-accent-gradient text-white shadow-[0_0_15px_rgba(139,92,246,0.3)]'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Dumbbell className="w-4 h-4" /> Skills & Tech
            </button>
            <button
              onClick={() => setActiveTab('vision')}
              className={`flex-1 flex justify-center items-center gap-2 py-3 rounded-md font-semibold text-sm transition-all duration-300 ${
                activeTab === 'vision'
                  ? 'bg-accent-gradient text-white shadow-[0_0_15px_rgba(139,92,246,0.3)]'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Target className="w-4 h-4" /> Future Vision
            </button>
          </div>

          {/* Tab Content Panels */}
          <div className="min-h-[260px]">
            {/* Journey Panel */}
            {activeTab === 'journey' && (
              <div className="animate-fade-in duration-300">
                <h3 className="text-2xl font-heading font-extrabold mb-4 text-white">A Beginner with Grand Aspirations</h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
                  Hi, my name is <strong>Krishna Sinha</strong>. I started my journey into technology driven by an intense curiosity about how the websites we interact with daily are built and designed. Starting as a complete beginner, I began writing simple HTML tags and styled my first headers, quickly falling in love with the instant creative feedback of web development.
                </p>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
                  I believe that elegant design combined with clean code is the soul of any internet project. This website stands as my personal canvas, showcasing what I have learned so far and documenting my progress as I dive deeper into modern frontend frameworks, TailwindCSS configurations, and visual design systems.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-sm text-gray-300 font-semibold">
                    <span className="w-1.5 h-1.5 bg-accentCyan rounded-full" /> Fast learner with intense passion
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300 font-semibold">
                    <span className="w-1.5 h-1.5 bg-accentCyan rounded-full" /> Detail-oriented visual designer
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300 font-semibold">
                    <span className="w-1.5 h-1.5 bg-accentCyan rounded-full" /> Committed to writing accessible code
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300 font-semibold">
                    <span className="w-1.5 h-1.5 bg-accentCyan rounded-full" /> Dedicated team collaborator
                  </div>
                </div>
              </div>
            )}

            {/* Skills Panel */}
            {activeTab === 'skills' && (
              <div className="animate-fade-in duration-300">
                <h3 className="text-2xl font-heading font-extrabold mb-4 text-white">Developing My Tech Palette</h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
                  Here are the core building blocks I am learning and working with to build beautiful, responsive web experiences:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
                  {skills.map((skill) => (
                    <div key={skill.name} className="flex flex-col gap-2">
                      <div className="flex justify-between text-xs font-bold text-gray-300 uppercase tracking-wide">
                        <span>{skill.name}</span>
                        <span>{skill.level}</span>
                      </div>
                      <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-accent-gradient rounded-full transition-all duration-1000 ease-out"
                          style={{ width: skill.level }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Vision Panel */}
            {activeTab === 'vision' && (
              <div className="animate-fade-in duration-300">
                <h3 className="text-2xl font-heading font-extrabold mb-4 text-white">My Road Ahead</h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
                  As a beginner developer, my road is long but extremely exciting. I am continuously challenging myself with new projects and tools. Here is my development roadmap for the near future:
                </p>
                <ul className="flex flex-col gap-5 relative pl-4 border-l border-white/10">
                  <li className="relative">
                    <div className="absolute top-2 left-[-21px] w-2.5 h-2.5 bg-accentPurple rounded-full shadow-[0_0_8px_rgba(139,92,246,0.6)]" />
                    <h4 className="font-bold text-white text-sm">Master React & Next.js</h4>
                    <p className="text-xs text-gray-500 mt-1">Transition from pure JavaScript to powerful component architecture and server rendering framework tools.</p>
                  </li>
                  <li className="relative">
                    <div className="absolute top-2 left-[-21px] w-2.5 h-2.5 bg-accentPurple rounded-full shadow-[0_0_8px_rgba(139,92,246,0.6)]" />
                    <h4 className="font-bold text-white text-sm">Explore Backend & Databases</h4>
                    <p className="text-xs text-gray-500 mt-1">Learn Node.js, Express, and Databases like PostgreSQL/MongoDB to construct end-to-end full-stack web applications.</p>
                  </li>
                  <li className="relative">
                    <div className="absolute top-2 left-[-21px] w-2.5 h-2.5 bg-accentPurple rounded-full shadow-[0_0_8px_rgba(139,92,246,0.6)]" />
                    <h4 className="font-bold text-white text-sm">Open Source Contribution</h4>
                    <p className="text-xs text-gray-500 mt-1">Collaborate on public libraries and platforms to adapt production coding styles and team integrations.</p>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
