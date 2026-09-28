import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { generateCvPdf } from '../utils/generateCvPdf';

export function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

interface NavbarProps {
  onOpenSearch?: () => void;
}

export default function Navbar({ onOpenSearch }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.remove('dark');
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        onOpenSearch?.();
      }
    };

    window.addEventListener('scroll', handleScroll);

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onOpenSearch]);

  const navLinks = [
    { name: 'Services', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-40 transition-all duration-300 font-sans',
        isScrolled
          ? 'bg-[#F1F5F9]/95 backdrop-blur-md shadow-sm py-3 border-b border-[#0A192F]/15'
          : 'bg-transparent py-4 sm:py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand with IT Accent */}
          <div className="flex-shrink-0 leading-tight">
            <a 
              href="#" 
              className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0A192F] flex items-center gap-2 group"
            >
              <span>Portofolio</span>
              <span className="w-2 h-2 rounded-full bg-blue-600 inline-block transition-transform duration-300 group-hover:scale-150 animate-pulse"></span>
              <span className="hidden sm:inline-block font-mono text-[10px] uppercase font-bold text-[#0A192F]/80 bg-[#0A192F]/10 px-1.5 py-0.5 rounded border border-[#0A192F]/15">
                IT_SYS
              </span>
            </a>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-7 xl:space-x-9">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[14px] font-semibold text-[#0A192F]/85 hover:text-[#0A192F] transition-all relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#0A192F] hover:after:w-full after:transition-all after:duration-300 font-mono"
              >
                // {link.name}
              </a>
            ))}
          </div>

            {/* Actions: Command Search + CV + Contact CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {onOpenSearch && (
              <button
                onClick={onOpenSearch}
                aria-label="Cari database portofolio"
                className="flex items-center gap-2 px-3 py-2 text-xs font-mono text-[#0A192F] bg-white hover:bg-slate-50 rounded-lg border border-[#0A192F]/20 transition-all duration-200 shadow-xs hover:border-[#0A192F]/40 active:scale-95 group cursor-pointer"
              >
                <Terminal size={14} className="text-[#0A192F] group-hover:text-blue-600" />
                <span className="font-semibold hidden sm:inline">Search</span>
                <span className="font-semibold sm:hidden">Cari</span>
              </button>
            )}

            <button
              onClick={() => generateCvPdf()}
              title="Unduh CV Muhammad Wahyudi dalam format PDF"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono font-bold text-[#0A192F] bg-white hover:bg-slate-50 rounded-lg border border-[#0A192F]/20 transition-all duration-200 shadow-xs hover:border-[#0A192F]/40 cursor-pointer"
            >
              <Download size={13} className="text-blue-600" />
              <span>CV [PDF]</span>
            </button>

            <a 
              href="#contact" 
              className="hidden sm:inline-flex items-center justify-center px-4.5 py-2 text-xs font-mono font-bold text-white bg-gradient-to-r from-[#0A192F] via-[#112240] to-[#1E3E62] hover:from-[#112240] hover:to-[#2563EB] rounded-lg transition-all duration-200 shadow-sm hover:scale-[1.02] active:scale-[0.98]"
            >
              &gt; Connect
            </a>

            {/* Mobile Menu Toggle */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="p-2 text-[#0A192F] hover:bg-[#0A192F]/10 transition-colors rounded-lg touch-manipulation"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-[#F1F5F9] border-b border-[#0A192F]/15 shadow-lg overflow-hidden"
          >
            <div className="px-5 pt-3 pb-6 space-y-2 font-mono">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-sm font-bold text-[#0A192F] hover:bg-white/80 transition-colors"
                >
                  &gt; {link.name}
                </a>
              ))}
              <div className="pt-2 space-y-2">
                <button
                  type="button"
                  onClick={() => {
                    generateCvPdf();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-bold text-[#0A192F] bg-white border border-[#0A192F]/20 hover:bg-slate-50 transition-colors shadow-xs cursor-pointer"
                >
                  <Download size={14} className="text-blue-600" />
                  <span>Download CV [PDF]</span>
                </button>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center py-2.5 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-[#0A192F] to-[#1E3E62] hover:from-[#112240] hover:to-[#2563EB] transition-colors shadow-sm"
                >
                  &gt; Connect With Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
