import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Download, Briefcase, CheckCircle2, Terminal, Code2, ExternalLink, User } from 'lucide-react';
import { generateCvPdf } from '../utils/generateCvPdf';

/**
 * Helper untuk mengonversi link Google Drive publik menjadi tautan langsung gambar
 * (Mendukung format: /file/d/ID/view, open?id=ID, atau URL gambar langsung)
 */
function formatPhotoUrl(url: string): string {
  if (!url) return '/Pass.png';
  const trimmed = url.trim();

  if (trimmed.includes('drive.google.com')) {
    const matchId = trimmed.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (matchId && matchId[1]) {
      return `https://lh3.googleusercontent.com/d/${matchId[1]}`;
    }
    const matchParam = trimmed.match(/[?&]id=([a-zA-Z0-9_-]+)/);
    if (matchParam && matchParam[1]) {
      return `https://lh3.googleusercontent.com/d/${matchParam[1]}`;
    }
  }

  return trimmed;
}

export default function Hero() {
  // =========================================================================
  // 📸 TEMPAT PASTE LINK FOTO GOOGLE DRIVE / GAMBAR ANDA DI SINI:
  // Ganti '/Pass.png' di bawah ini dengan link Google Drive Anda.
  // Contoh: 'https://drive.google.com/file/d/1a2b3c4d5e.../view?usp=sharing'
  // =========================================================================
  const MY_PHOTO_URL = 'https://drive.google.com/file/d/1DG7YxM_ORstdeqmiEMLH6sYh6e4W7R3M/view?usp=drive_link';

  const profilePhoto = formatPhotoUrl(MY_PHOTO_URL);
  const [photoError, setPhotoError] = useState(false);

  const stats = [
    { value: '8+', label: 'Enterprise Projects Delivered' },
    { value: '4+', label: 'Years of Professional Impact' },
    { value: '99.5%', label: 'Gateway Delivery Success Rate' },
  ];

  const tickerKeywords = [
    'React & TypeScript',
    'PHP & C++',
    'PostgreSQL & Docker',
    'Postman & REST API',
    'HTML5 & CSS3',
    'Odoo ERP Architecture',
    'IT Business Analysis',
    'Agile & Scrum PM',
    'IoT & Defense Systems',
    'Cross-Border FinTech',
    'API Integration & FSD'
  ];

  return (
    <section className="relative pt-24 sm:pt-32 pb-16 lg:pb-24 overflow-hidden bg-[#F1F5F9]">
      {/* Background Matrix / Tech Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0A192F0a_1px,transparent_1px),linear-gradient(to_bottom,#0A192F0a_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Availability & System Status Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-3 mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/95 border border-[#0A192F]/15 shadow-xs font-mono text-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <span className="font-bold text-[#0A192F]">
              STATUS: OPEN_FOR_CONTRACT &amp; ROLES
            </span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#0A192F]/10 text-[#0A192F] font-mono text-xs font-semibold">
            <Terminal size={12} />
            <span>ID: M_WAHYUDI // v2.6</span>
          </div>
        </motion.div>

        {/* Top Text Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <p className="font-mono text-xs sm:text-sm text-[#0A192F]/80 uppercase tracking-widest font-bold mb-2">
              // TECH PROFILE &amp; SYSTEM OVERVIEW
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#0A192F] leading-[1.05] [text-wrap:balance]">
              Muhammad
              <br />
              Wahyudi
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-2 font-mono text-xs sm:text-sm font-bold text-[#0A192F]">
              <span className="px-2.5 py-1 rounded bg-white/90 border border-[#0A192F]/15">
                &lt;Project_Manager /&gt;
              </span>
              <span className="px-2.5 py-1 rounded bg-white/90 border border-[#0A192F]/15">
                &lt;Business_Analyst /&gt;
              </span>
              <span className="px-2.5 py-1 rounded bg-white/90 border border-[#0A192F]/15">
                &lt;Product_Manager /&gt;
              </span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 lg:pt-10"
          >
            <p className="text-[#334155] text-base sm:text-lg leading-relaxed mb-8 [text-wrap:balance]">
              Menjembatani visi bisnis dan arsitektur teknologi. Berpengalaman memimpin integrasi sistem perbankan berskala enterprise, arsitektur ERP Odoo terintegrasi, dan pengembangan IoT ranpur pertahanan.
            </p>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-[#0A192F] via-[#112240] to-[#1E3E62] hover:from-[#112240] hover:to-[#2563EB] text-white font-mono font-bold text-sm rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>&gt; Connect With Me</span> 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                type="button"
                onClick={() => generateCvPdf()}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-[#0A192F] font-mono font-bold text-sm rounded-xl border border-[#0A192F]/20 hover:bg-slate-50 hover:border-[#0A192F]/40 transition-all duration-200 shadow-xs hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <Download className="w-4 h-4 text-blue-600" /> 
                <span>Download CV [PDF]</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Center Visual Showcase */}
        <div className="relative mt-8 sm:mt-12 flex flex-col items-center">
          
          {/* Main Photo Container with Tech Frames */}
          <div className="relative w-full max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-md mx-auto">
            {/* Ambient Background Graphic with Matching Navy Gradient */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.9 }}
              className="absolute inset-0 flex items-center justify-center -z-10"
            >
              <div className="w-[260px] h-[260px] sm:w-[380px] sm:h-[380px] lg:w-[460px] lg:h-[460px] bg-gradient-to-tr from-[#0A192F] via-[#1E3E62] to-[#2563EB] rounded-tl-[120px] rounded-br-[120px] rounded-tr-[40px] rounded-bl-[40px] rotate-6 opacity-90 shadow-2xl transition-transform duration-700 hover:rotate-12"></div>
            </motion.div>

            {/* Profile Image with smooth hover effect */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="group relative z-10 w-full aspect-[3/4] bg-[#0A192F]/10 rounded-t-full border-4 border-[#F1F5F9] overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-[0_25px_50px_-12px_rgba(10,25,47,0.35)] hover:scale-[1.02]"
            >
              {!photoError ? (
                <img 
                  src={profilePhoto} 
                  alt="Muhammad Wahyudi" 
                  referrerPolicy="no-referrer"
                  onError={() => setPhotoError(true)}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" 
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#0A192F] via-[#1E3E62] to-[#0A192F] text-white p-6 text-center">
                  <div className="w-24 h-24 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center mb-4">
                    <User size={48} className="text-white/80" />
                  </div>
                  <h4 className="font-bold text-lg text-white">Muhammad Wahyudi</h4>
                  <p className="text-xs text-blue-200 font-mono mt-1">IT Product Manager</p>
                </div>
              )}

              {/* Bottom Tech Label Banner with LinkedIn verification */}
              <a
                href="https://www.linkedin.com/in/muhammad-wahyudi-94b2801a6/"
                target="_blank"
                rel="noopener noreferrer"
                title="Buka Profil LinkedIn Resmi Muhammad Wahyudi"
                className="absolute inset-x-0 bottom-0 py-2.5 px-4 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/90 to-transparent flex items-center justify-between text-white/95 hover:text-white transition-colors group/linkedin"
              >
                <span className="font-mono text-[10px] text-white/90 tracking-widest font-semibold uppercase flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                  <span>NODE: M_WAHYUDI // VERIFIED</span>
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-blue-300 group-hover/linkedin:text-blue-100 transition-colors">
                  <span>LinkedIn</span>
                  <ExternalLink size={10} />
                </span>
              </a>
            </motion.div>
          </div>

          {/* Desktop Floating Metric - Left */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:block absolute left-4 xl:left-12 top-1/2 -translate-y-1/2 z-20"
          >
            <div className="bg-white/95 backdrop-blur-md p-6 rounded-2xl border border-[#0A192F]/15 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-[#0A192F]/35 max-w-[230px]">
              <div className="w-10 h-10 rounded-xl bg-[#F1F5F9] flex items-center justify-center text-[#0A192F] mb-3">
                <Briefcase size={20} />
              </div>
              <h3 className="text-3xl font-black text-[#0A192F] tracking-tight tabular-nums font-mono">8+</h3>
              <p className="text-xs font-mono font-bold text-[#334155] mt-1 uppercase tracking-wider">Enterprise Projects</p>
            </div>
          </motion.div>

          {/* Desktop Floating Metric - Right */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hidden lg:block absolute right-4 xl:right-12 top-1/2 -translate-y-1/2 z-20"
          >
            <div className="bg-white/95 backdrop-blur-md p-6 rounded-2xl border border-[#0A192F]/15 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-[#0A192F]/35 max-w-[230px]">
              <div className="w-10 h-10 rounded-xl bg-[#F1F5F9] flex items-center justify-center text-[#0A192F] mb-3">
                <Code2 size={20} />
              </div>
              <h3 className="text-3xl font-black text-[#0A192F] tracking-tight tabular-nums font-mono">4+</h3>
              <p className="text-xs font-mono font-bold text-[#334155] mt-1 uppercase tracking-wider">Years Tech Leadership</p>
            </div>
          </motion.div>

        </div>

        {/* Mobile & Tablet Responsive Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 lg:hidden grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/95 backdrop-blur-sm p-5 rounded-xl border border-[#0A192F]/15 text-center shadow-xs transition-all duration-300 hover:scale-[1.02] hover:bg-white"
            >
              <div className="text-2xl sm:text-3xl font-black text-[#0A192F] tracking-tight tabular-nums font-mono mb-1">
                {stat.value}
              </div>
              <div className="text-xs font-mono font-semibold text-[#334155]">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

      </div>

      {/* Animated Subtle Ticker Marquee */}
      <div className="mt-16 sm:mt-20 border-y border-[#0A192F]/15 bg-white/70 backdrop-blur-xs py-3.5 overflow-hidden">
        <div className="flex w-max animate-marquee space-x-8">
          {[...tickerKeywords, ...tickerKeywords].map((keyword, index) => (
            <div 
              key={`${keyword}-${index}`} 
              className="flex items-center gap-3 text-xs sm:text-sm font-mono font-bold text-[#0A192F] tracking-wide whitespace-nowrap"
            >
              <CheckCircle2 size={14} className="text-blue-600" />
              <span>{keyword}</span>
              <span className="text-[#0A192F]/30 select-none">::</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
