import React, { useState } from 'react';
import { Eye, Laptop, Wand2, Gamepad2, Layers } from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const categories = [
    { label: 'All Projects', value: 'all', icon: <Layers className="w-4 h-4" /> },
    { label: 'Web Apps', value: 'apps', icon: <Laptop className="w-4 h-4" /> },
    { label: 'Creative Design', value: 'design', icon: <Wand2 className="w-4 h-4" /> },
    { label: 'Mini Games', value: 'games', icon: <Gamepad2 className="w-4 h-4" /> },
  ];

  const projects = [
    {
      id: 1,
      title: 'Aesthetic Task Manager',
      category: 'apps',
      tag: 'Web App',
      image: '/assets/project_task_manager.png',
      desc: 'A high-end minimal task dashboard with dark-mode, custom category tagging, local storage persistence, and beautiful completion animations.',
      tech: ['React', 'TailwindCSS', 'Local Storage'],
      liveLink: '#',
      codeLink: '#',
    },
    {
      id: 2,
      title: 'Retro Snake Arcade',
      category: 'games',
      tag: 'Mini Game',
      image: '/assets/project_retro_snake.png',
      desc: 'A nostalgic synthwave arcade snake game featuring dynamic speed scaling, a pixel art glow layout, retro SFX controls, and high score tracking.',
      tech: ['HTML5 Canvas', 'React Hooks', 'CSS Glimmer'],
      liveLink: '#',
      codeLink: '#',
    },
    {
      id: 3,
      title: 'Glassmorphic Calculator',
      category: 'apps',
      tag: 'Web App',
      image: '/assets/project_glass_calc.png',
      desc: 'An extremely elegant mathematical calculator designed with premium CSS glassmorphic backgrounds, fluid animations, and history logging.',
      tech: ['React', 'CSS Variables', 'Responsive Grid'],
      liveLink: '#',
      codeLink: '#',
    },
    {
      id: 4,
      title: 'Cyberpunk Pixel Editor',
      category: 'design',
      tag: 'Creative Design',
      image: '/assets/project_pixel_editor.png',
      desc: 'A dynamic grid painting editor allowing users to create retro pixel illustrations, customize palettes, export designs, and paint neon nodes.',
      tech: ['React JS', 'Tailwind CSS', 'Web Events'],
      liveLink: '#',
      codeLink: '#',
    },
    {
      id: 5,
      title: 'Zen Soundscape Player',
      category: 'design',
      tag: 'Creative Design',
      image: '/assets/project_zen_sound.png',
      desc: 'A beautiful atmospheric audio dashboard playing high-fidelity environmental sounds (rain, wind, campfire) to boost focus and reduce stress.',
      tech: ['Web Audio API', 'React Hooks', 'Tailwind'],
      liveLink: '#',
      codeLink: '#',
    },
    {
      id: 6,
      title: 'Tic-Tac-Toe Smart AI',
      category: 'games',
      tag: 'Mini Game',
      image: '/assets/project_tictactoe.png',
      desc: 'A cyberpunk themed tic-tac-toe game incorporating an unbeatable Minimax AI opponent, glowing grids, and clean winner modal overlays.',
      tech: ['Minimax Algo', 'React State', 'Neon UI'],
      liveLink: '#',
      codeLink: '#',
    },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto w-full">
      {/* Header */}
      <div className="text-center mb-16 reveal">
        <span className="text-xs font-bold uppercase tracking-widest bg-accent-gradient bg-clip-text text-transparent">
          Showcasing My Work
        </span>
        <h2 className="text-3xl sm:text-4xl font-heading font-extrabold mt-1 text-white">
          My Projects
        </h2>
        <div className="w-12 h-1 bg-accent-gradient mx-auto mt-4 rounded-full" />
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12 reveal" style={{ transitionDelay: '100ms' }}>
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setFilter(cat.value)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 border ${
              filter === cat.value
                ? 'bg-accent-gradient border-transparent text-white shadow-[0_0_15px_rgba(139,92,246,0.3)]'
                : 'bg-white/5 border-white/5 text-gray-400 hover:text-white hover:border-white/10 hover:bg-white/10'
            }`}
          >
            {cat.icon}
            {cat.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className="flex flex-col h-full bg-bgCard border border-white/5 rounded-2xl overflow-hidden backdrop-blur-md hover:translate-y-[-8px] hover:border-white/15 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5),0_0_30px_rgba(139,92,246,0.1)] transition-all duration-300 group reveal"
            style={{ transitionDelay: `${(index % 3) * 100}ms` }}
          >
            {/* Image Frame */}
            <div className="relative aspect-[16/10] overflow-hidden border-b border-white/5">
              <img
                src={project.image}
                alt={`${project.title} Mockup`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Blur Overlay */}
              <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px] flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href={project.liveLink}
                  className="w-12 h-12 rounded-full bg-accent-gradient text-white flex items-center justify-center shadow-lg hover:scale-110 hover:bg-white hover:text-bgDarker transition-all duration-300"
                  aria-label="Live Demo"
                >
                  <Eye className="w-5 h-5" />
                </a>
                <a
                  href={project.codeLink}
                  className="w-12 h-12 rounded-full bg-accent-gradient text-white flex items-center justify-center shadow-lg hover:scale-110 hover:bg-white hover:text-bgDarker transition-all duration-300"
                  aria-label="GitHub Code"
                >
                  <i className="fa-brands fa-github text-xl" />
                </a>
              </div>
            </div>

            {/* Info details */}
            <div className="p-6 flex flex-col flex-grow">
              <span className="text-[10px] font-bold text-accentCyan uppercase tracking-widest mb-2 block">
                {project.tag}
              </span>
              <h3 className="text-lg font-heading font-extrabold text-white mb-2 leading-snug">
                {project.title}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-6 flex-grow">
                {project.desc}
              </p>
              
              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[9px] font-bold px-2.5 py-1 rounded-full bg-white/5 border border-white/5 text-gray-400"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <a
                  href={project.liveLink}
                  className="flex-1 flex justify-center items-center gap-1.5 py-2.5 rounded text-xs font-bold text-white bg-accent-gradient hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all duration-300"
                >
                  <Eye className="w-3.5 h-3.5" /> Demo
                </a>
                <a
                  href={project.codeLink}
                  className="flex-1 flex justify-center items-center gap-1.5 py-2.5 rounded text-xs font-bold text-white bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300"
                >
                  <i className="fa-brands fa-github text-sm" /> Source
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
