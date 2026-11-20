import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { copy, type Locale } from '../data/content';

interface HeaderProps {
  lang: Locale;
}

const SECTION_IDS = ['work', 'research', 'about', 'experience', 'remote'] as const;

export function Header({ lang }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('work');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 240,
    damping: 32,
    restDelta: 0.001,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0.01 }
    );

    for (const id of SECTION_IDS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { id: 'work', label: copy.navWork[lang] },
    { id: 'research', label: copy.navResearch[lang] },
    { id: 'about', label: copy.navAbout[lang] },
    { id: 'experience', label: copy.navExperience[lang] },
    { id: 'remote', label: copy.navRemote[lang] },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-[#E4E2DC] bg-[#F7F6F2]/85 backdrop-blur-lg dark:border-[#262A2D] dark:bg-[#0D0F10]/85">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-8 px-6 lg:px-10">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#top"
          dir="ltr"
          className="whitespace-nowrap shrink-0 text-base font-bold tracking-tight text-[#14171A] transition-colors duration-150 hover:text-[#C2410C] dark:text-[#F4F1EA] dark:hover:text-[#FF9E6D]"
        >
          ramin.hamehpour
        </a>

        {/* Zone 2: 5 concise single-line text nav links with animated active indicator */}
        <nav
          aria-label={lang === 'fa' ? 'ناوبری اصلی' : lang === 'ja' ? 'メインナビゲーション' : 'Main navigation'}
          className="hidden md:flex items-center gap-7"
        >
          {navLinks.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`group relative whitespace-nowrap shrink-0 py-1.5 text-sm font-medium transition-colors duration-150 ${
                  isActive
                    ? 'text-[#14171A] dark:text-[#F4F1EA]'
                    : 'text-[#596066] hover:text-[#14171A] dark:text-[#A8AEB2] dark:hover:text-[#F4F1EA]'
                }`}
              >
                {item.label}
                {isActive ? (
                  <motion.span
                    layoutId="header-active-nav"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    className="absolute inset-x-0 -bottom-0.5 h-[1.5px] bg-[#C2410C] dark:bg-[#FF9E6D]"
                  />
                ) : (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-0.5 h-[1.5px] origin-center scale-x-0 bg-[#C2410C]/60 transition-transform duration-150 group-hover:scale-x-100 dark:bg-[#FF9E6D]/60"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action (+ mobile menu trigger) */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 whitespace-nowrap shrink-0 rounded-lg bg-[#14171A] px-4 py-2 text-xs font-semibold text-[#F7F6F2] transition-all duration-150 hover:bg-[#C2410C] active:scale-[0.98] dark:bg-[#FF9E6D] dark:text-[#14110F] dark:hover:bg-[#FFB48E]"
          >
            <span>{copy.navContact[lang]}</span>
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={copy.menu[lang]}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#E4E2DC] text-[#14171A] transition-colors hover:bg-[#ECEAE3] md:hidden dark:border-[#262A2D] dark:text-[#F4F1EA] dark:hover:bg-[#191C1E]"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Scroll Progress Hairline */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX, transformOrigin: lang === 'fa' ? '100% 50%' : '0% 50%' }}
        className="h-[2px] w-full bg-[#C2410C] dark:bg-[#FF9E6D]"
      />

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="border-t border-[#E4E2DC] bg-[#F7F6F2] px-6 py-4 md:hidden dark:border-[#262A2D] dark:bg-[#0D0F10]"
        >
          <nav className="flex flex-col gap-1">
            {navLinks.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileOpen(false)}
                className="flex min-h-[44px] items-center justify-between rounded-lg px-3 text-sm font-medium text-[#14171A] transition-colors hover:bg-[#ECEAE3] dark:text-[#F4F1EA] dark:hover:bg-[#191C1E]"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="h-4 w-4 text-[#596066] dark:text-[#A8AEB2]" aria-hidden="true" />
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-[#C2410C] px-4 text-sm font-semibold text-white dark:bg-[#FF9E6D] dark:text-[#14110F]"
            >
              <span>{copy.navContact[lang]}</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
