import React from 'react';
import { ArrowUp, Terminal, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-[#0A192F] to-[#060D18] text-slate-300 py-12 sm:py-16 border-t border-blue-900/30 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white">
              <Terminal size={16} />
            </div>
            <div>
              <span className="text-white font-bold text-sm block">
                Muhammad Wahyudi // Portfolio
              </span>
              <span className="text-[11px] text-blue-400 font-semibold">
                ● SYSTEM_STATUS: OPERATIONAL
              </span>
            </div>
          </div>

          {/* Direct Links */}
          <div className="flex items-center gap-6 text-xs text-white/80">
            <a 
              href="https://www.linkedin.com/in/muhammad-wahyudi-94b2801a6/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Linkedin size={14} />
              <span>LinkedIn</span>
            </a>
            
            <a 
              href="mailto:muhammadwyd02@gmail.com" 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail size={14} />
              <span>Email</span>
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <ArrowUp size={14} />
              <span>TOP</span>
            </button>
          </div>
        </div>

        {/* Bottom Metadata */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>
            &copy; {new Date().getFullYear()} Muhammad Wahyudi. Designed with IT &amp; Engineering Discipline.
          </p>
          <div className="flex items-center gap-3 text-[11px]">
            <span>STACK: REACT 19</span>
            <span>·</span>
            <span>TAILWIND CSS</span>
            <span>·</span>
            <span>MOTION</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
