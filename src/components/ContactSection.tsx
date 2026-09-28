import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Linkedin, Check, Share2, Terminal, ArrowUpRight, Copy, Clock, ShieldCheck } from 'lucide-react';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [shareFeedback, setShareFeedback] = useState(false);

  const emailAddress = 'muhammadwyd02@gmail.com';
  const linkedinUrl = 'https://www.linkedin.com/in/muhammad-wahyudi-94b2801a6/';

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: 'Muhammad Wahyudi | Portofolio IT Project Manager & Product Manager',
      text: 'Portofolio profesional Muhammad Wahyudi - IT Business Analyst, Project Manager & Product Manager.',
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // User cancelled
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setShareFeedback(true);
        setTimeout(() => setShareFeedback(false), 2500);
      } catch {
        // Fallback
      }
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-28 bg-white relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0A192F08_1px,transparent_1px),linear-gradient(to_bottom,#0A192F08_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Viewport Animation */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F1F5F9] border border-[#0A192F]/15 mb-3 shadow-xs">
              <Terminal size={13} className="text-[#0A192F]" />
              <span className="text-xs font-mono font-bold tracking-wider text-[#0A192F] uppercase">
                CONTACT_PROTOCOL // CONNECT_NODE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A192F] tracking-tight">
              Hubungi Saya
            </h2>

            <p className="mt-4 text-[#334155] text-base sm:text-lg max-w-2xl mx-auto [text-wrap:balance]">
              Siap mendiskusikan peluang proyek strategis, konsultasi implementasi ERP, atau kolaborasi kepemimpinan produk teknologi.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Direct Interactive Channels */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-5">
            
            {/* Primary Email Card */}
            <div className="bg-[#F1F5F9] rounded-2xl p-6 sm:p-7 border border-[#0A192F]/15 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-[#0A192F]/35 group">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-white rounded-xl text-[#0A192F] shadow-xs group-hover:bg-[#0A192F] group-hover:text-white transition-colors duration-300">
                    <Mail size={22} />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0A192F]/70">
                      PRIMARY_CONTACT // EMAIL
                    </span>
                    <h3 className="text-lg sm:text-xl font-extrabold text-[#0A192F] break-all">
                      {emailAddress}
                    </h3>
                  </div>
                </div>

                <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse mt-1 shrink-0" title="Online & Responsive" />
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-[#0A192F]/10">
                <a
                  href={`mailto:${emailAddress}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0A192F] via-[#112240] to-[#1E3E62] hover:from-[#112240] hover:to-[#2563EB] text-white text-xs font-bold rounded-lg transition-all duration-200 shadow-xs hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Mail size={14} />
                  <span>Kirim Email Langsung</span>
                  <ArrowUpRight size={13} />
                </a>

                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-slate-100 text-[#0A192F] text-xs font-bold rounded-lg border border-[#0A192F]/20 transition-all duration-200 shadow-xs hover:scale-[1.02] active:scale-[0.98]"
                >
                  {copiedEmail ? (
                    <>
                      <Check size={14} className="text-blue-600" />
                      <span className="text-blue-700">Alamat Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Salin Alamat Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* LinkedIn Card */}
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F1F5F9] rounded-2xl p-6 sm:p-7 border border-[#0A192F]/15 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-[#0A192F]/35 group flex items-center justify-between"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-3 bg-white rounded-xl text-[#0A192F] shadow-xs group-hover:bg-[#0A192F] group-hover:text-white transition-colors duration-300">
                  <Linkedin size={22} />
                </div>
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0A192F]/70">
                    PROFESSIONAL_NETWORK
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0A192F] group-hover:text-[#1E3E62] transition-colors">
                    LinkedIn / Muhammad Wahyudi
                  </h3>
                  <p className="text-xs text-[#334155] mt-0.5">
                    Hubungkan koneksi & diskusikan profil profesional
                  </p>
                </div>
              </div>

              <div className="w-9 h-9 rounded-lg bg-white border border-[#0A192F]/15 flex items-center justify-center text-[#0A192F] group-hover:bg-[#0A192F] group-hover:text-white group-hover:translate-x-1 transition-all duration-200 shrink-0">
                <ArrowUpRight size={18} />
              </div>
            </a>

            {/* Location & Timezone Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-[#0A192F]/15 shadow-xs flex items-center gap-3">
                <div className="p-2.5 bg-white rounded-xl text-[#0A192F] shadow-xs shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#0A192F]/70 uppercase block">
                    LOCATION_BASE
                  </span>
                  <span className="text-sm font-bold text-[#0A192F]">
                    Indonesia
                  </span>
                  <span className="text-[11px] text-[#334155] block">
                    Remote / Hybrid Ready
                  </span>
                </div>
              </div>

              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-[#0A192F]/15 shadow-xs flex items-center gap-3">
                <div className="p-2.5 bg-white rounded-xl text-[#0A192F] shadow-xs shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#0A192F]/70 uppercase block">
                    TIMEZONE_ZONE
                  </span>
                  <span className="text-sm font-bold text-[#0A192F]">
                    UTC+7 (WIB)
                  </span>
                  <span className="text-[11px] text-[#334155] block">
                    Response time: &lt; 24h
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Share Card */}
            <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-[#0A192F]/15 shadow-xs flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-white rounded-xl text-[#0A192F] shadow-xs shrink-0">
                  <Share2 size={18} />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#0A192F] block">
                    Bagikan Portofolio Ini
                  </span>
                  <span className="text-[11px] text-[#334155]">
                    Rekomendasikan profil ini kepada rekan kerja atau tim HR Anda.
                  </span>
                </div>
              </div>

              <button
                onClick={handleShare}
                className="px-4 py-2 bg-gradient-to-r from-[#0A192F] to-[#1E3E62] hover:from-[#112240] hover:to-[#2563EB] text-white text-xs font-bold rounded-lg transition-all duration-200 shadow-xs hover:scale-105 active:scale-95 shrink-0"
              >
                {shareFeedback ? 'Tersalin!' : 'Bagikan'}
              </button>
            </div>

          </div>

          {/* Right Column: IT Terminal Interface Console with Navy Gradient */}
          <div className="lg:col-span-6 flex">
            <div className="w-full bg-gradient-to-br from-[#0A192F] via-[#0D1F38] to-[#132A4B] rounded-2xl p-6 sm:p-8 text-white font-mono shadow-xl border border-blue-900/30 flex flex-col justify-between relative overflow-hidden">
              
              {/* Terminal Window Controls */}
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-blue-400" />
                    <span className="ml-2 text-xs text-white/60 tracking-wider">
                      bash — wahyudi@system:~
                    </span>
                  </div>

                  <span className="text-[11px] px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-bold border border-blue-500/30">
                    LIVE_NODE
                  </span>
                </div>

                {/* Terminal Commands & Output */}
                <div className="space-y-4 text-xs sm:text-sm">
                  <div>
                    <span className="text-blue-400 font-bold">$ </span>
                    <span className="text-white font-semibold">whoami --verbose</span>
                    <div className="mt-1 pl-4 text-blue-100/90 leading-relaxed font-sans text-xs sm:text-sm">
                      Muhammad Wahyudi — IT Project Manager, IT Business Analyst &amp; Product Manager.
                    </div>
                  </div>

                  <div>
                    <span className="text-blue-400 font-bold">$ </span>
                    <span className="text-white font-semibold">cat capabilities.json</span>
                    <div className="mt-1 pl-4 text-white/80 space-y-1 font-mono text-[11px] sm:text-xs">
                      <p>&#123;</p>
                      <p className="pl-4">"core": ["Agile/Scrum PM", "Business Analysis", "ERP Implementation"],</p>
                      <p className="pl-4">"tools": ["Odoo", "Python", "Jira", "Figma", "Slack"],</p>
                      <p className="pl-4">"domain": ["FinTech Payments", "ERP HRIS", "Defense IoT"],</p>
                      <p className="pl-4">"availability": "OPEN_FOR_OPPORTUNITIES"</p>
                      <p>&#125;</p>
                    </div>
                  </div>

                  <div>
                    <span className="text-blue-400 font-bold">$ </span>
                    <span className="text-white font-semibold">ping -c 1 hiring_manager</span>
                    <div className="mt-1 pl-4 text-blue-300 text-xs">
                      64 bytes from client: icmp_seq=1 ttl=64 time=0.84 ms [Ready for interview &amp; consultation]
                    </div>
                  </div>
                </div>
              </div>

              {/* Terminal Bottom Action Console */}
              <div className="mt-8 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-white/70">
                  <ShieldCheck size={16} className="text-blue-400" />
                  <span>Encrypted Channel · Professional Contact</span>
                </div>

                <a
                  href={`mailto:${emailAddress}?subject=Diskusi%20Peluang%20Proyek%20IT`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs rounded-lg transition-all duration-200 shadow-md hover:scale-105 active:scale-95"
                >
                  <Mail size={14} />
                  <span>Start Discussion</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
