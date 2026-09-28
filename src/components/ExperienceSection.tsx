import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { EXPERIENCES } from '../data';
import { Experience } from '../types';
import { ExternalLink, Building2, Calendar, ArrowRight, X, CheckCircle2, Terminal } from 'lucide-react';

export default function ExperienceSection() {
  const [selectedExp, setSelectedExp] = useState<Experience | null>(null);

  return (
    <section id="experience" className="py-24 sm:py-28 bg-[#F1F5F9] relative overflow-hidden">
      {/* Subtle Tech Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0A192F0a_1px,transparent_1px),linear-gradient(to_bottom,#0A192F0a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Tech Aesthetic and Viewport Animation */}
        <div className="text-center mb-14 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/90 border border-[#0A192F]/15 mb-3 shadow-xs">
              <Terminal size={13} className="text-[#0A192F]" />
              <span className="text-xs font-mono font-bold tracking-wider text-[#0A192F] uppercase">
                EXPERIENCE_LOG // CAREER_TIMELINE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A192F] tracking-tight">
              Pengalaman Profesional
            </h2>

            <p className="mt-4 text-[#334155] text-base sm:text-lg max-w-2xl mx-auto [text-wrap:balance]">
              Track record dalam memimpin transformasi digital, manajemen produk skala internasional, dan implementasi sistem ERP terintegrasi.
            </p>
          </motion.div>
        </div>

        {/* Proportional Grid of Experience Cards with Staggered Viewport Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedExp(exp)}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#0A192F]/15 shadow-sm transition-all duration-300 ease-out transform will-change-transform hover:scale-[1.025] hover:-translate-y-1.5 hover:shadow-xl hover:border-[#0A192F]/40 group cursor-pointer flex flex-col justify-between relative overflow-hidden"
            >
              {/* Tech Header Accent Bar with Navy Gradient */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0A192F] via-[#1E3E62] to-[#2563EB] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div>
                {/* Meta Top: Period + Company Link */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#F8FAFC] border border-[#0A192F]/15 text-xs font-mono font-semibold text-[#0A192F]">
                    <Calendar size={13} />
                    {exp.period}
                  </span>

                  {exp.url ? (
                    <a
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#334155] hover:text-[#0A192F] bg-[#F1F5F9] hover:bg-[#E2E8F0] px-2.5 py-1 rounded-md transition-colors"
                    >
                      <Building2 size={13} className="text-[#0A192F]" />
                      <span>{exp.company}</span>
                      <ExternalLink size={11} className="opacity-70" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#334155] bg-[#F1F5F9] px-2.5 py-1 rounded-md">
                      <Building2 size={13} className="text-[#0A192F]" />
                      <span>{exp.company}</span>
                    </span>
                  )}
                </div>

                {/* Role Title */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A192F] group-hover:text-[#1E3E62] transition-colors leading-snug mb-3">
                  {exp.role}
                </h3>

                {/* Brief highlights preview (first 2 bullets) */}
                <div className="space-y-2.5 mb-6">
                  {exp.responsibilities.slice(0, 2).map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#334155] leading-relaxed">
                      <span className="text-blue-600 font-bold mt-0.5 select-none shrink-0">•</span>
                      <span className="line-clamp-2">{item}</span>
                    </div>
                  ))}
                  {exp.responsibilities.length > 2 && (
                    <p className="text-[11px] font-mono font-semibold text-[#0A192F]/70 pl-4">
                      + {exp.responsibilities.length - 2} poin rincian pencapaian lainnya...
                    </p>
                  )}
                </div>
              </div>

              {/* Card Footer / Action Button */}
              <div className="pt-4 border-t border-[#0A192F]/10 flex items-center justify-between text-xs font-bold text-[#0A192F]">
                <span className="inline-flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                  <span>Buka Rincian Pekerjaan</span>
                  <ArrowRight size={14} />
                </span>

                <span className="text-[11px] font-mono text-[#334155]/70 bg-[#F8FAFC] px-2 py-0.5 rounded border border-[#0A192F]/10">
                  {exp.responsibilities.length} TASKS
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Interactive Experience Detail Modal */}
      <AnimatePresence>
        {selectedExp && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedExp(null)}
              className="fixed inset-0 bg-[#0A192F]/70 backdrop-blur-xs"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#0A192F]/20 p-6 sm:p-8 z-10 overflow-hidden"
            >
              {/* Top Tech Decorator Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-[#0A192F]/15 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                  <div className="w-3 h-3 rounded-full bg-blue-500/80" />
                  <span className="ml-2 text-xs font-mono font-bold text-[#0A192F]/70">
                    // WORK_DETAIL_VIEWER
                  </span>
                </div>

                <button
                  onClick={() => setSelectedExp(null)}
                  aria-label="Tutup detail pengalaman"
                  className="p-1.5 rounded-lg text-[#334155] hover:text-[#0A192F] hover:bg-[#F1F5F9] transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Company & Role Information */}
              <div className="mb-6">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-[#F1F5F9] text-[#0A192F] font-mono text-xs font-bold rounded-md border border-[#0A192F]/15">
                    {selectedExp.period}
                  </span>
                  
                  {selectedExp.url ? (
                    <a
                      href={selectedExp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-[#0A192F] to-[#1E3E62] text-white font-medium text-xs rounded-md hover:from-[#112240] hover:to-[#2563EB] transition-colors"
                    >
                      <Building2 size={13} />
                      <span>{selectedExp.company}</span>
                      <ExternalLink size={11} />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F8FAFC] text-[#0A192F] font-medium text-xs rounded-md border border-[#0A192F]/15">
                      <Building2 size={13} />
                      <span>{selectedExp.company}</span>
                    </span>
                  )}
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A192F]">
                  {selectedExp.role}
                </h3>
              </div>

              {/* Responsibilities & Achievements */}
              <div className="bg-[#F8FAFC] rounded-xl p-5 sm:p-6 border border-[#0A192F]/10 mb-6 max-h-[50vh] overflow-y-auto">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A192F] mb-4 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-blue-600" />
                  <span>RINCIAN TANGGUNG JAWAB &amp; PENCAPAIAN:</span>
                </h4>

                <ul className="space-y-3.5">
                  {selectedExp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#334155] leading-relaxed">
                      <span className="font-mono text-xs font-bold text-[#0A192F] bg-[#F1F5F9] px-2 py-0.5 rounded border border-[#0A192F]/15 mt-0.5 shrink-0">
                        0{i + 1}
                      </span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Modal Actions */}
              <div className="flex items-center justify-between pt-2 border-t border-[#0A192F]/10">
                <span className="text-xs text-[#334155]/70 font-mono">
                  TOTAL: {selectedExp.responsibilities.length} HIGHLIGHTS
                </span>

                <button
                  onClick={() => setSelectedExp(null)}
                  className="px-5 py-2.5 bg-gradient-to-r from-[#0A192F] to-[#1E3E62] hover:from-[#112240] hover:to-[#2563EB] text-white text-xs font-bold rounded-lg transition-colors shadow-sm"
                >
                  Tutup Rincian
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
