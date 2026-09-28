import React from 'react';
import { motion } from 'motion/react';
import { EDUCATION, CERTIFICATIONS } from '../data';
import { GraduationCap, Award, CheckCircle, Terminal } from 'lucide-react';

export default function EducationSection() {
  return (
    <section id="education" className="py-24 sm:py-28 bg-[#F1F5F9] relative overflow-hidden">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0A192F0a_1px,transparent_1px),linear-gradient(to_bottom,#0A192F0a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title with Viewport Animation */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/90 border border-[#0A192F]/15 mb-3 shadow-xs">
              <Terminal size={13} className="text-[#0A192F]" />
              <span className="text-xs font-mono font-bold tracking-wider text-[#0A192F] uppercase">
                ACADEMIC_CREDENTIALS // CERTIFIED_EXPERTISE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A192F] tracking-tight">
              Pendidikan &amp; Sertifikasi
            </h2>

            <p className="mt-4 text-[#334155] text-base sm:text-lg max-w-2xl mx-auto [text-wrap:balance]">
              Fondasi keilmuan Teknik Informatika yang diperkuat dengan sertifikasi keahlian manajemen proyek &amp; scrum internasional.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Education Column */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="p-3 bg-white border border-[#0A192F]/15 rounded-xl text-[#0A192F] shadow-xs">
                <GraduationCap size={22} />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-[#0A192F]/70 uppercase block">FORMAL_DEGREE</span>
                <h3 className="text-2xl font-extrabold text-[#0A192F]">Pendidikan Formal</h3>
              </div>
            </motion.div>
            
            <div className="space-y-4">
              {EDUCATION.map((edu) => (
                <motion.div 
                  key={edu.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-[#0A192F]/15 shadow-xs transition-all duration-300 ease-out transform will-change-transform hover:scale-[1.025] hover:-translate-y-1.5 hover:shadow-xl hover:border-[#0A192F]/40 group relative overflow-hidden"
                >
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono font-bold px-3 py-1 bg-[#F8FAFC] text-[#0A192F] rounded-md border border-[#0A192F]/15">
                      {edu.period}
                    </span>
                    <span className="text-[11px] font-mono text-[#334155]/60">
                      #DEG-S1
                    </span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-extrabold text-[#0A192F] mb-2 group-hover:text-[#1E3E62] transition-colors">
                    {edu.degree}
                  </h4>
                  <p className="text-[#334155] text-sm leading-relaxed font-medium">
                    {edu.institution}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="p-3 bg-white border border-[#0A192F]/15 rounded-xl text-[#0A192F] shadow-xs">
                <Award size={22} />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-[#0A192F]/70 uppercase block">VERIFIED_CREDENTIALS</span>
                <h3 className="text-2xl font-extrabold text-[#0A192F]">Sertifikasi Internasional</h3>
              </div>
            </motion.div>
            
            <div className="space-y-4">
              {CERTIFICATIONS.map((cert, index) => (
                <motion.div 
                  key={cert.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: index * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white rounded-2xl p-5 sm:p-6 border border-[#0A192F]/15 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-300 ease-out transform will-change-transform hover:scale-[1.02] hover:-translate-y-1 hover:shadow-lg hover:border-[#0A192F]/35 group"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-[#F1F5F9] text-blue-600 shrink-0 mt-0.5 group-hover:bg-[#0A192F] group-hover:text-white transition-colors duration-300">
                      <CheckCircle size={18} />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-[#0A192F] group-hover:text-[#1E3E62] transition-colors leading-snug">
                        {cert.title}
                      </h4>
                      <p className="text-[#334155] text-xs sm:text-sm font-medium mt-0.5 font-mono">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  {(cert.date || cert.score) && (
                    <div className="sm:text-right shrink-0 border-t sm:border-t-0 pt-2 sm:pt-0 border-[#0A192F]/10">
                      {cert.date && (
                        <p className="text-xs text-[#334155]/80 font-mono font-semibold">
                          {cert.date}
                        </p>
                      )}
                      {cert.score && (
                        <span className="inline-block mt-1 px-3 py-1 bg-[#F8FAFC] text-[#0A192F] text-xs font-mono font-bold rounded-md border border-[#0A192F]/15 tabular-nums">
                          SCORE: {cert.score}
                        </span>
                      )}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
