import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../data';
import { Project } from '../types';
import { FolderGit2, ArrowUpRight, X, Sparkles, CheckCircle2, Terminal, Mail, Building2, ExternalLink } from 'lucide-react';

export default function ProjectsSection() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', ...Array.from(new Set(PROJECTS.map((p) => p.category).filter(Boolean)))];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header with Viewport Animation */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F1F5F9] border border-[#0A192F]/15 mb-3 shadow-xs">
              <Terminal size={13} className="text-[#0A192F]" />
              <span className="text-xs font-mono font-bold tracking-wider text-[#0A192F] uppercase">
                DEPLOYED_SYSTEMS // PROJECT_PORTFOLIO
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A192F] tracking-tight">
              Proyek Unggulan
            </h2>

            <p className="mt-4 text-[#334155] text-base sm:text-lg max-w-2xl mx-auto [text-wrap:balance]">
              Portofolio inisiatif teknologi yang berhasil diselesaikan bersama berbagai institusi dan perusahaan terkemuka, dilengkapi integrasi sistem, IoT militer, platform global, dan ERP enterprise.
            </p>
          </motion.div>

          {/* Responsive Interactive Filter Tabs */}
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-2.5 mt-8 sm:mt-10 px-2 font-mono">
            {categories.map((cat) => {
              const isActive = filter === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-3.5 sm:px-4 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 border whitespace-nowrap active:scale-95 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#0A192F] to-[#1E3E62] text-white border-transparent shadow-sm'
                      : 'bg-[#F8FAFC] text-[#334155] hover:bg-[#F1F5F9] border-[#0A192F]/15 hover:border-[#0A192F]/30'
                  }`}
                >
                  {cat === 'All' ? '[ ALL_REPOSITORIES ]' : cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid with Smooth Scale Up Hover Effect & Viewport Stagger */}
        <motion.div 
          layout 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setSelectedProject(project)}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-[#0A192F]/15 shadow-xs transition-all duration-300 ease-out transform will-change-transform hover:scale-[1.03] hover:-translate-y-2 hover:shadow-xl hover:border-[#0A192F]/40 group flex flex-col justify-between cursor-pointer relative overflow-hidden"
              >
                {/* Tech Accent Top Bar with Navy Gradient */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0A192F] via-[#1E3E62] to-[#2563EB] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div>
                  {/* Top: Company Logo & Category */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      {project.companyLogo ? (
                        <div className="h-12 w-12 rounded-xl bg-white border border-[#0A192F]/15 p-2 flex items-center justify-center shadow-xs group-hover:border-[#0A192F]/40 group-hover:shadow-sm transition-all duration-300">
                          <img
                            src={project.companyLogo}
                            alt={`Logo ${project.company || 'Perusahaan'}`}
                            className="max-h-full max-w-full object-contain filter group-hover:scale-105 transition-transform"
                            loading="lazy"
                          />
                        </div>
                      ) : (
                        <div className="p-3 bg-[#F1F5F9] rounded-xl text-[#0A192F] group-hover:bg-[#0A192F] group-hover:text-white transition-all duration-300 shadow-xs">
                          <FolderGit2 size={22} />
                        </div>
                      )}

                      {project.companySecondaryLogo && (
                        <div className="h-12 w-12 rounded-xl bg-white border border-[#0A192F]/15 p-2 flex items-center justify-center shadow-xs group-hover:border-[#0A192F]/40 group-hover:shadow-sm transition-all duration-300">
                          <img
                            src={project.companySecondaryLogo}
                            alt="Logo Partner"
                            className="max-h-full max-w-full object-contain filter group-hover:scale-105 transition-transform"
                            loading="lazy"
                          />
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      {project.category && (
                        <span className="text-[11px] font-mono font-bold px-2.5 py-1 bg-[#F8FAFC] text-[#0A192F] rounded-md border border-[#0A192F]/15 group-hover:border-[#0A192F]/30 transition-colors">
                          {project.category}
                        </span>
                      )}
                      <div className="w-7 h-7 rounded-full bg-[#F1F5F9] flex items-center justify-center text-[#0A192F] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200">
                        <ArrowUpRight size={15} />
                      </div>
                    </div>
                  </div>

                  {/* Company Identifier */}
                  {project.company && (
                    <div className="flex items-center gap-1.5 mb-2.5 text-xs font-mono font-bold text-[#0A192F]/80">
                      <Building2 size={13} className="text-[#0A192F]" />
                      <span className="truncate">{project.company}</span>
                    </div>
                  )}

                  <h3 className="text-lg sm:text-xl font-bold text-[#0A192F] mb-3 leading-snug group-hover:text-[#1E3E62] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-[#334155] text-sm leading-relaxed line-clamp-4">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#0A192F]/10 flex items-center justify-between text-xs text-[#0A192F] font-semibold">
                  <span className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform font-mono">
                    <span>LIHAT_DETAIL</span>
                    <ArrowUpRight size={13} />
                  </span>
                  <span className="text-[#334155]/60 font-mono text-[11px]">
                    SYS_{project.id.toUpperCase()}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA with Navy Gradient */}
        <div className="mt-14 sm:mt-16 text-center">
          <a 
            href="#contact"
            className="px-7 py-3.5 rounded-xl text-xs sm:text-sm font-mono font-bold text-white bg-gradient-to-r from-[#0A192F] via-[#112240] to-[#1E3E62] hover:from-[#112240] hover:to-[#2563EB] transition-all duration-200 inline-flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] group"
          >
            <span>&gt; Tertarik Mengembangkan Solusi Serupa? Hubungi Saya</span>
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>
        </div>
      </div>

      {/* Interactive Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-[#0A192F]/70 backdrop-blur-xs transition-opacity"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#0A192F]/20 p-6 sm:p-8 z-10 overflow-hidden"
            >
              {/* Window Controls */}
              <div className="flex items-center justify-between pb-3 border-b border-[#0A192F]/15 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-400" />
                  <span className="ml-2 font-mono text-xs font-bold text-[#0A192F]/70">
                    // PROJECT_SPECIFICATION_SHEET
                  </span>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  aria-label="Tutup detail proyek"
                  className="p-1 rounded-lg text-[#334155] hover:text-[#0A192F] hover:bg-[#F1F5F9] transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Company Logo Header Banner */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-[#F8FAFC] border border-[#0A192F]/15 mb-5">
                <div className="flex items-center gap-3.5">
                  {selectedProject.companyLogo && (
                    <div className="h-14 w-14 rounded-xl bg-white border border-[#0A192F]/15 p-2 flex items-center justify-center shadow-xs shrink-0">
                      <img
                        src={selectedProject.companyLogo}
                        alt={`Logo ${selectedProject.company || 'Perusahaan'}`}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  )}

                  {selectedProject.companySecondaryLogo && (
                    <div className="h-14 w-14 rounded-xl bg-white border border-[#0A192F]/15 p-2 flex items-center justify-center shadow-xs shrink-0">
                      <img
                        src={selectedProject.companySecondaryLogo}
                        alt="Logo Partner"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  )}

                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#334155]/70 font-bold block">
                      KLIEN // MITRA PERUSAHAAN
                    </span>
                    {selectedProject.companyUrl ? (
                      <a
                        href={selectedProject.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-base font-bold text-[#0A192F] hover:text-blue-600 transition-colors group/link"
                      >
                        <span>{selectedProject.company || 'Enterprise Project'}</span>
                        <ExternalLink size={13} className="text-blue-600 group-hover/link:translate-x-0.5 transition-transform" />
                      </a>
                    ) : (
                      <h4 className="text-base font-bold text-[#0A192F]">
                        {selectedProject.company || 'Enterprise Project'}
                      </h4>
                    )}
                  </div>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end gap-1.5 font-mono text-xs">
                  <span className="inline-flex items-center gap-1.5 font-bold px-3 py-1 bg-[#F1F5F9] text-[#0A192F] rounded-md border border-[#0A192F]/15">
                    <Sparkles size={12} />
                    {selectedProject.category}
                  </span>
                  <span className="text-[11px] text-[#334155]/70">
                    SYS_{selectedProject.id.toUpperCase()}
                  </span>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A192F] leading-tight mb-4 pr-6">
                {selectedProject.title}
              </h3>

              <div className="bg-[#F8FAFC] rounded-xl p-5 border border-[#0A192F]/10 mb-6">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A192F] mb-2 flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-blue-600" />
                  Deskripsi &amp; Ruang Lingkup Sistem
                </h4>
                <p className="text-[#334155] text-sm sm:text-base leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#0A192F]/10">
                <div className="text-xs font-mono text-[#334155] text-center sm:text-left">
                  ROLE: <strong className="text-[#0A192F]">IT Project Manager / IT Business Analyst</strong>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="flex-1 sm:flex-none px-4 py-2.5 rounded-lg text-xs font-bold text-[#334155] bg-[#F1F5F9] hover:bg-slate-200 transition-colors"
                  >
                    Tutup
                  </button>
                  <a
                    href="#contact"
                    onClick={() => setSelectedProject(null)}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-lg text-xs font-mono font-bold text-white bg-gradient-to-r from-[#0A192F] to-[#1E3E62] hover:from-[#112240] hover:to-[#2563EB] transition-colors shadow-xs"
                  >
                    <Mail size={14} />
                    <span>&gt; Hubungi Saya</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
