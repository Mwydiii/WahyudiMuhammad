import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Briefcase, FolderGit2, CornerDownLeft, Terminal } from 'lucide-react';
import { EXPERIENCES, PROJECTS } from '../data';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'projects' | 'experience'>('all');

  useEffect(() => {
    if (!isOpen) {
      setQuery('');
      setCategoryFilter('all');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const filteredExperiences = EXPERIENCES.filter(
    (exp) =>
      exp.role.toLowerCase().includes(query.toLowerCase()) ||
      exp.company.toLowerCase().includes(query.toLowerCase()) ||
      exp.responsibilities.some((r) => r.toLowerCase().includes(query.toLowerCase()))
  );

  const filteredProjects = PROJECTS.filter(
    (proj) =>
      proj.title.toLowerCase().includes(query.toLowerCase()) ||
      proj.description.toLowerCase().includes(query.toLowerCase()) ||
      (proj.company && proj.company.toLowerCase().includes(query.toLowerCase())) ||
      (proj.category && proj.category.toLowerCase().includes(query.toLowerCase()))
  );

  const showExp = categoryFilter === 'all' || categoryFilter === 'experience';
  const showProj = categoryFilter === 'all' || categoryFilter === 'projects';

  const totalResults = (showExp ? filteredExperiences.length : 0) + (showProj ? filteredProjects.length : 0);

  const quickKeywords = ['ERP', 'Odoo', 'React', 'TypeScript', 'Docker', 'PostgreSQL', 'PHP', 'Postman', 'IoT', 'Scrum'];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-12 sm:pt-20 px-3 sm:px-6">
          {/* Backdrop with Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0A192F]/70 backdrop-blur-sm"
          />

          {/* Command Palette Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -16 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#0A192F]/20 overflow-hidden flex flex-col max-h-[85vh] z-10"
          >
            {/* Terminal Window Header Bar with Navy Gradient */}
            <div className="bg-gradient-to-r from-[#0A192F] via-[#112240] to-[#1E3E62] text-white px-4 sm:px-5 py-2.5 flex items-center justify-between border-b border-white/10 select-none">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-blue-400" />
                <span className="ml-2 font-mono text-[11px] text-white/90 font-bold tracking-wider">
                  SYS_COMMAND_PALETTE // INDEX_QUERY
                </span>
              </div>

              <div className="flex items-center gap-2 text-[10px] font-mono text-white/70">
                <span>ESC to close</span>
                <button
                  onClick={onClose}
                  className="p-1 hover:bg-white/15 rounded transition-colors text-white"
                >
                  <X size={14} />
                </button>
              </div>
            </div>

            {/* Search Input Bar */}
            <div className="p-3 sm:p-4 bg-[#F1F5F9] border-b border-[#0A192F]/15">
              <div className="flex items-center gap-3 px-3 py-2 bg-white rounded-xl border border-[#0A192F]/20 focus-within:ring-2 focus-within:ring-[#1E3E62] focus-within:border-transparent transition-all shadow-xs">
                <span className="font-mono text-[#0A192F] font-bold text-sm select-none">&gt;</span>
                <input
                  type="text"
                  autoFocus
                  placeholder="Cari pengalaman, proyek, modul ERP, IoT, teknologi..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full bg-transparent border-none outline-none text-[#0A192F] text-sm sm:text-base font-medium placeholder-[#334155]/50"
                />
                {query && (
                  <button
                    onClick={() => setQuery('')}
                    className="p-1 text-[#334155] hover:text-[#0A192F] text-xs font-mono"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Filter Tabs & Quick Suggestions */}
              <div className="flex flex-wrap items-center justify-between gap-2 mt-3 pt-2 border-t border-[#0A192F]/10">
                <div className="flex items-center gap-1.5 text-xs font-mono">
                  <button
                    onClick={() => setCategoryFilter('all')}
                    className={`px-2.5 py-1 rounded-md transition-colors ${
                      categoryFilter === 'all'
                        ? 'bg-gradient-to-r from-[#0A192F] to-[#1E3E62] text-white font-bold'
                        : 'bg-[#E2E8F0] text-[#0A192F] hover:bg-white'
                    }`}
                  >
                    ALL
                  </button>
                  <button
                    onClick={() => setCategoryFilter('projects')}
                    className={`px-2.5 py-1 rounded-md transition-colors ${
                      categoryFilter === 'projects'
                        ? 'bg-gradient-to-r from-[#0A192F] to-[#1E3E62] text-white font-bold'
                        : 'bg-[#E2E8F0] text-[#0A192F] hover:bg-white'
                    }`}
                  >
                    PROJECTS ({filteredProjects.length})
                  </button>
                  <button
                    onClick={() => setCategoryFilter('experience')}
                    className={`px-2.5 py-1 rounded-md transition-colors ${
                      categoryFilter === 'experience'
                        ? 'bg-gradient-to-r from-[#0A192F] to-[#1E3E62] text-white font-bold'
                        : 'bg-[#E2E8F0] text-[#0A192F] hover:bg-white'
                    }`}
                  >
                    EXPERIENCE ({filteredExperiences.length})
                  </button>
                </div>

                <span className="text-[11px] font-mono text-[#334155]/70">
                  {totalResults} entri cocok
                </span>
              </div>
            </div>

            {/* Results Content List */}
            <div className="overflow-y-auto p-4 sm:p-5 flex-1 space-y-4">
              {!query ? (
                <div className="py-6 px-2 text-center">
                  <div className="w-10 h-10 rounded-xl bg-[#F1F5F9] text-[#0A192F] flex items-center justify-center mx-auto mb-3">
                    <Terminal size={20} />
                  </div>
                  <h4 className="text-sm font-bold text-[#0A192F] mb-1">
                    Cari Entri Database Portofolio
                  </h4>
                  <p className="text-xs text-[#334155] mb-4">
                    Ketik kata kunci atau klik salah satu topik cepat di bawah:
                  </p>

                  <div className="flex flex-wrap justify-center gap-1.5 max-w-md mx-auto">
                    {quickKeywords.map((kw) => (
                      <button
                        key={kw}
                        onClick={() => setQuery(kw)}
                        className="px-2.5 py-1 rounded-md bg-[#E2E8F0] hover:bg-gradient-to-r hover:from-[#0A192F] hover:to-[#1E3E62] hover:text-white text-xs font-mono font-medium text-[#0A192F] transition-colors"
                      >
                        #{kw}
                      </button>
                    ))}
                  </div>
                </div>
              ) : totalResults === 0 ? (
                <div className="text-center py-10 text-[#334155]">
                  <p className="font-mono text-sm font-semibold text-[#0A192F]">
                    404: RECORD_NOT_FOUND
                  </p>
                  <p className="text-xs text-[#334155] mt-1">
                    Tidak ditemukan data yang cocok dengan "{query}". Coba kata kunci lain seperti "Odoo", "ERP", atau "Scrum".
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Experience Results */}
                  {showExp && filteredExperiences.length > 0 && (
                    <div>
                      <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0A192F]/70 mb-2 px-1 flex items-center gap-1.5">
                        <Briefcase size={12} />
                        <span>PENGALAMAN KERJA</span>
                      </div>
                      <div className="space-y-2">
                        {filteredExperiences.map((exp) => (
                          <a
                            key={exp.id}
                            href="#experience"
                            onClick={onClose}
                            className="flex items-center justify-between p-3 rounded-xl bg-[#F8FAFC] hover:bg-slate-100 border border-[#0A192F]/10 hover:border-[#0A192F]/30 transition-all group"
                          >
                            <div className="flex items-center gap-3">
                              <div className="p-2 rounded-lg bg-white text-[#0A192F] shadow-xs group-hover:bg-[#0A192F] group-hover:text-white transition-colors">
                                <Briefcase size={16} />
                              </div>
                              <div>
                                <h5 className="text-sm font-bold text-[#0A192F] group-hover:text-[#1E3E62]">
                                  {exp.role}
                                </h5>
                                <p className="text-xs text-[#334155] font-mono">
                                  {exp.company} · {exp.period}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-1 text-xs font-mono text-[#0A192F] font-bold group-hover:translate-x-1 transition-transform">
                              <span>JUMP</span>
                              <CornerDownLeft size={12} />
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Projects Results */}
                  {showProj && filteredProjects.length > 0 && (
                    <div>
                      <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0A192F]/70 mb-2 px-1 flex items-center gap-1.5">
                        <FolderGit2 size={12} />
                        <span>PROYEK UNGGULAN</span>
                      </div>
                      <div className="space-y-2">
                        {filteredProjects.map((proj) => (
                          <a
                            key={proj.id}
                            href="#projects"
                            onClick={onClose}
                            className="flex items-center justify-between p-3 rounded-xl bg-[#F8FAFC] hover:bg-slate-100 border border-[#0A192F]/10 hover:border-[#0A192F]/30 transition-all group"
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              {proj.companyLogo ? (
                                <div className="w-10 h-10 rounded-lg bg-white border border-[#0A192F]/15 p-1 flex items-center justify-center shadow-xs shrink-0">
                                  <img
                                    src={proj.companyLogo}
                                    alt={proj.company || proj.title}
                                    className="max-h-full max-w-full object-contain"
                                    loading="lazy"
                                  />
                                </div>
                              ) : (
                                <div className="p-2 rounded-lg bg-white text-[#0A192F] shadow-xs group-hover:bg-[#0A192F] group-hover:text-white transition-colors shrink-0">
                                  <FolderGit2 size={16} />
                                </div>
                              )}
                              <div className="min-w-0">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <h5 className="text-sm font-bold text-[#0A192F] group-hover:text-[#1E3E62] truncate">
                                    {proj.title}
                                  </h5>
                                  {proj.category && (
                                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-[#E2E8F0] text-[#0A192F] rounded shrink-0">
                                      {proj.category}
                                    </span>
                                  )}
                                </div>
                                <p className="text-xs text-[#334155] font-mono mt-0.5 truncate">
                                  {proj.company ? `${proj.company} · ` : ''}SYS_{proj.id.toUpperCase()}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-1 text-xs font-mono text-[#0A192F] font-bold group-hover:translate-x-1 transition-transform shrink-0 ml-2">
                              <span>JUMP</span>
                              <CornerDownLeft size={12} />
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Footer Bar */}
            <div className="px-5 py-3 bg-[#F1F5F9] border-t border-[#0A192F]/15 flex items-center justify-between text-xs text-[#334155] font-mono">
              <div className="flex items-center gap-3">
                <span className="hidden sm:inline">
                  Pilih entri untuk navigasi langsung
                </span>
                <span className="sm:hidden">Klik entri untuk navigasi</span>
              </div>
              <div className="flex items-center gap-1 text-[#0A192F] font-bold">
                <span>ENTER / CLICK</span>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
