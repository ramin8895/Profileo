import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Check, Copy, Download, Globe2, Mail, Moon, Sun } from 'lucide-react';
import { copy, docs, locales, profile, type Locale } from '../data/content';
import { CountUpNumber, SpotlightCard } from './Reveal';

interface HeroProps {
  lang: Locale;
  onChangeLang: (lang: Locale) => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Hero({ lang, onChangeLang, theme, onToggleTheme }: HeroProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback ignored safely
    }
  };

  const facts: Array<{ label: string; value: string; ltr?: boolean }> = [
    { label: copy.cardRole[lang], value: copy.cardRoleV[lang] },
    { label: copy.cardStack[lang], value: 'React · Next.js · TypeScript', ltr: true },
    { label: copy.cardBase[lang], value: copy.cardBaseV[lang] },
    { label: copy.cardLang[lang], value: copy.cardLangV[lang] },
    { label: copy.cardOpen[lang], value: copy.cardOpenV[lang] },
  ];

  const stats = [
    { target: 2023, padZero: false, suffix: '↗', label: copy.stat1[lang] },
    { target: 2, padZero: true, suffix: '+', label: copy.stat2[lang] },
    { target: 9, padZero: true, suffix: '', label: copy.stat3[lang] },
    { target: 2, padZero: true, suffix: '', label: copy.stat4[lang] },
  ];

  const localeLabels: Record<Locale, string> = {
    fa: 'فارسی',
    en: 'English',
    ja: '日本語',
  };

  return (
    <section id="top" className="relative overflow-hidden border-b border-[#E4E2DC] dark:border-[#262A2D]">
      {/* Subtle Architectural Radial Backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 end-0 h-[520px] w-[620px] rounded-full bg-[radial-gradient(circle,rgba(194,65,12,0.06)_0%,transparent_68%)] dark:bg-[radial-gradient(circle,rgba(255,158,109,0.08)_0%,transparent_68%)]"
      />

      <div className="relative mx-auto max-w-[1200px] px-6 pb-12 pt-6 lg:px-10 lg:pb-16 lg:pt-8">
        {/* Utility Toolbar: Language & Theme Controls */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: EASE_OUT_EXPO }}
          className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-[#E4E2DC]/80 pb-4 dark:border-[#262A2D]/80"
        >
          <p className="text-xs font-medium tracking-wide text-[#596066] dark:text-[#A8AEB2]">
            {copy.eyebrow[lang]}
          </p>

          <div className="flex items-center gap-3">
            {/* Segmented Language Switch with Spring Pill */}
            <div
              role="group"
              aria-label={lang === 'fa' ? 'انتخاب زبان' : lang === 'ja' ? '言語選択' : 'Language selector'}
              className="inline-flex items-center gap-1 rounded-lg border border-[#E4E2DC] bg-[#ECEAE3]/75 p-1 dark:border-[#262A2D] dark:bg-[#15181A]"
            >
              <Globe2 className="mx-1.5 h-3.5 w-3.5 text-[#596066] dark:text-[#A8AEB2]" aria-hidden="true" />
              {locales.map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => onChangeLang(l)}
                  aria-pressed={lang === l}
                  className={`relative whitespace-nowrap shrink-0 rounded-md px-2.5 py-1 text-xs font-medium transition-colors duration-150 ${
                    lang === l
                      ? 'text-[#14171A] dark:text-[#FF9E6D]'
                      : 'text-[#596066] hover:text-[#14171A] dark:text-[#A8AEB2] dark:hover:text-[#F4F1EA]'
                  }`}
                >
                  {lang === l && (
                    <motion.span
                      layoutId="hero-lang-pill"
                      transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                      className="absolute inset-0 rounded-md bg-[#FFFFFF] shadow-xs dark:bg-[#222629]"
                    />
                  )}
                  <span className="relative z-10">{localeLabels[l]}</span>
                </button>
              ))}
            </div>

            {/* Theme Switch */}
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={theme === 'dark' ? copy.themeLight[lang] : copy.themeDark[lang]}
              className="inline-flex h-8 items-center gap-1.5 whitespace-nowrap shrink-0 rounded-lg border border-[#E4E2DC] bg-[#FFFFFF] px-3 text-xs font-medium text-[#14171A] transition-colors duration-150 hover:border-[#C2410C] active:scale-[0.97] dark:border-[#262A2D] dark:bg-[#15181A] dark:text-[#F4F1EA] dark:hover:border-[#FF9E6D]"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="h-3.5 w-3.5 text-[#FF9E6D]" aria-hidden="true" />
                  <span>{copy.themeLight[lang]}</span>
                </>
              ) : (
                <>
                  <Moon className="h-3.5 w-3.5 text-[#C2410C]" aria-hidden="true" />
                  <span>{copy.themeDark[lang]}</span>
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* 2-Column Balanced Split Hero */}
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Staggered Editorial Typography */}
          <div className="flex flex-col justify-between lg:col-span-7">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.04, ease: EASE_OUT_EXPO }}
                className="mb-3 text-sm font-semibold text-[#C2410C] dark:text-[#FF9E6D]"
              >
                {copy.greeting[lang]}
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.48, delay: 0.09, ease: EASE_OUT_EXPO }}
                className={`font-bold tracking-tight text-[#14171A] dark:text-[#F4F1EA] ${
                  lang === 'fa'
                    ? 'text-[clamp(2.25rem,4.4vw,3.75rem)] leading-[1.35]'
                    : lang === 'ja'
                      ? 'text-[clamp(2rem,3.6vw,3.15rem)] leading-[1.4]'
                      : 'text-[clamp(2.35rem,4.3vw,3.65rem)] leading-[1.12]'
                }`}
              >
                <span className="block">{copy.hero1[lang]}</span>
                <span className="block text-[#596066] dark:text-[#A8AEB2]">{copy.hero2[lang]}</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.16, ease: EASE_OUT_EXPO }}
                className="mt-6 max-w-xl text-base leading-[1.85] text-[#596066] dark:text-[#A8AEB2]"
              >
                {copy.intro[lang]}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.42, delay: 0.22, ease: EASE_OUT_EXPO }}
            >
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex min-h-[44px] items-center gap-2 whitespace-nowrap shrink-0 rounded-lg bg-[#C2410C] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-150 hover:bg-[#9A3412] active:scale-[0.98] dark:bg-[#FF9E6D] dark:text-[#14110F] dark:hover:bg-[#FFB48E]"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  <span>{copy.heroContact[lang]}</span>
                </a>

                <a
                  href={lang === 'ja' ? docs.ja : docs.en}
                  download
                  className="inline-flex min-h-[44px] items-center gap-2 whitespace-nowrap shrink-0 rounded-lg border border-[#D4D1C8] bg-[#FFFFFF] px-5 py-2.5 text-sm font-medium text-[#14171A] transition-all duration-150 hover:border-[#14171A] active:scale-[0.98] dark:border-[#2D3236] dark:bg-[#15181A] dark:text-[#F4F1EA] dark:hover:border-[#FF9E6D]"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  <span>{lang === 'ja' ? copy.docJaShort[lang] : copy.heroResume[lang]}</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex min-h-[44px] items-center gap-2 whitespace-nowrap shrink-0 rounded-lg px-3.5 py-2.5 text-sm font-medium text-[#596066] transition-colors duration-150 hover:text-[#14171A] dark:text-[#A8AEB2] dark:hover:text-[#F4F1EA]"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                      <span className="text-emerald-700 dark:text-emerald-400">{copy.copied[lang]}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" aria-hidden="true" />
                      <span>{copy.copyEmail[lang]}</span>
                    </>
                  )}
                </button>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-6 text-sm font-medium">
                <a
                  href="#work"
                  className="group inline-flex items-center gap-1.5 text-[#14171A] underline decoration-[#C2410C]/50 underline-offset-4 transition-colors hover:text-[#C2410C] dark:text-[#F4F1EA] dark:decoration-[#FF9E6D]/50 dark:hover:text-[#FF9E6D]"
                >
                  <span>{copy.viewWork[lang]}</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </a>
                <a
                  href="#research"
                  className="group inline-flex items-center gap-1.5 text-[#596066] underline decoration-transparent underline-offset-4 transition-colors hover:text-[#14171A] hover:decoration-current dark:text-[#A8AEB2] dark:hover:text-[#F4F1EA]"
                >
                  <span>{copy.viewResearch[lang]}</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Spotlight Engineer Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.52, delay: 0.14, ease: EASE_OUT_EXPO }}
            className="lg:col-span-5"
          >
            <SpotlightCard className="flex h-full flex-col justify-between rounded-2xl border border-[#E4E2DC] bg-[#FFFFFF] p-6 shadow-xs sm:p-7 dark:border-[#262A2D] dark:bg-[#15181A]">
              {/* Rotating Subtle Orbital Geometry */}
              <svg
                aria-hidden="true"
                viewBox="0 0 320 220"
                className="pointer-events-none absolute -end-10 -top-10 h-52 w-64 text-[#C2410C]/12 dark:text-[#FF9E6D]/12"
                fill="none"
              >
                <g className="animate-orbital origin-[200px_90px]">
                  <circle cx="200" cy="90" r="95" stroke="currentColor" strokeWidth="1" />
                  <circle cx="295" cy="90" r="3" fill="currentColor" />
                </g>
                <g className="animate-orbital-reverse origin-[200px_90px]">
                  <circle cx="200" cy="90" r="65" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" />
                </g>
                <ellipse cx="200" cy="90" rx="125" ry="40" transform="rotate(-24 200 90)" stroke="currentColor" strokeWidth="1" />
              </svg>

              <div className="relative z-10">
                <div className="flex items-center gap-4 border-b border-[#E4E2DC] pb-5 dark:border-[#262A2D]">
                  <span
                    dir="ltr"
                    aria-hidden="true"
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#14171A] font-editorial text-xl font-semibold text-[#F7F6F2] transition-transform duration-200 hover:scale-105 dark:bg-[#222629] dark:text-[#FF9E6D]"
                  >
                    r.
                  </span>
                  <div>
                    <p className="text-base font-bold text-[#14171A] dark:text-[#F4F1EA]">
                      {profile.name[lang]}
                    </p>
                    <p className="text-xs text-[#596066] dark:text-[#A8AEB2]">
                      {profile.role[lang]}
                    </p>
                  </div>
                </div>

                <dl className="mt-5 space-y-3.5">
                  {facts.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-baseline justify-between gap-4 border-b border-[#E4E2DC]/60 pb-2.5 text-sm last:border-b-0 last:pb-0 dark:border-[#262A2D]/70"
                    >
                      <dt className="shrink-0 text-xs font-medium text-[#596066] dark:text-[#A8AEB2]">
                        {item.label}
                      </dt>
                      <dd
                        dir={item.ltr ? 'ltr' : undefined}
                        className="text-end font-medium text-[#14171A] dark:text-[#F4F1EA]"
                      >
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="relative z-10 mt-6 border-t border-[#E4E2DC] pt-4 dark:border-[#262A2D]">
                <p className="mb-2.5 text-xs font-medium text-[#596066] dark:text-[#A8AEB2]">
                  {copy.cardLive[lang]}
                </p>
                <div dir="ltr" className="flex flex-wrap items-center gap-4">
                  {profile.liveProducts.map((item) => (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1 font-mono-tech text-xs font-medium text-[#C2410C] transition-colors hover:underline dark:text-[#FF9E6D]"
                    >
                      <span>{item.name}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>

        {/* Full-Width 4-Column Quantitative Proof Strip with Animated Count-Up */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.28, ease: EASE_OUT_EXPO }}
          className="mt-12 grid grid-cols-2 gap-6 border-t border-[#E4E2DC] pt-8 sm:grid-cols-4 dark:border-[#262A2D]"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <p dir="ltr" className="tabular-nums text-3xl font-bold tracking-tight text-[#14171A] sm:text-4xl dark:text-[#F4F1EA]">
                <CountUpNumber target={stat.target} padZero={stat.padZero} />
                {stat.suffix && (
                  <span className="ms-0.5 text-[#C2410C] dark:text-[#FF9E6D]">{stat.suffix}</span>
                )}
              </p>
              <p className="mt-1.5 text-xs font-medium text-[#596066] dark:text-[#A8AEB2]">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
