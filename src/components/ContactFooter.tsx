import { useState } from 'react';
import { ArrowUp, ArrowUpRight, BriefcaseBusiness, Check, Code2, Copy, Download, Mail } from 'lucide-react';
import { copy, docs, profile, type Locale } from '../data/content';
import { Reveal, SpotlightCard } from './Reveal';

interface ContactFooterProps {
  lang: Locale;
}

export function ContactFooter({ lang }: ContactFooterProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      // Ignore safely
    }
  };

  return (
    <>
      <section
        id="contact"
        className="bg-[#ECEAE3]/50 py-16 lg:py-24 dark:bg-[#121416]"
      >
        <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
          <Reveal>
            <p className="mb-3 text-xs font-semibold tracking-wide text-[#C2410C] dark:text-[#FF9E6D]">
              {copy.contactLabel[lang]}
            </p>

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-7">
                <h2 className="whitespace-pre-line text-3xl font-bold leading-snug tracking-tight text-[#14171A] sm:text-4xl dark:text-[#F4F1EA]">
                  {copy.contactTitle[lang]}
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-[1.85] text-[#596066] dark:text-[#A8AEB2]">
                  {copy.contactBody[lang]}
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex min-h-[44px] items-center gap-2 whitespace-nowrap rounded-lg bg-[#C2410C] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-150 hover:bg-[#9A3412] active:scale-[0.98] dark:bg-[#FF9E6D] dark:text-[#14110F] dark:hover:bg-[#FFB48E]"
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    <span>{copy.sendEmail[lang]}</span>
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>

                  <button
                    type="button"
                    onClick={handleCopy}
                    className="inline-flex min-h-[44px] items-center gap-2 whitespace-nowrap rounded-lg border border-[#D4D1C8] bg-[#FFFFFF] px-4 py-2.5 text-sm font-medium text-[#14171A] transition-all duration-150 hover:border-[#C2410C] active:scale-[0.98] dark:border-[#2D3236] dark:bg-[#15181A] dark:text-[#F4F1EA] dark:hover:border-[#FF9E6D]"
                  >
                    {copied ? (
                      <>
                        <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                        <span>{copy.copied[lang]}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" aria-hidden="true" />
                        <span>{copy.copyEmail[lang]}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <SpotlightCard className="rounded-2xl border border-[#E4E2DC] bg-[#FFFFFF] p-6 sm:p-7 lg:col-span-5 dark:border-[#262A2D] dark:bg-[#15181A]">
                <div className="relative z-10 space-y-6">
                  <div>
                    <p className="text-xs font-medium text-[#596066] dark:text-[#A8AEB2]">Email</p>
                    <a
                      href={`mailto:${profile.email}`}
                      dir="ltr"
                      className="mt-1 inline-flex items-center gap-1.5 font-mono-tech text-sm font-semibold text-[#14171A] hover:text-[#C2410C] dark:text-[#F4F1EA] dark:hover:text-[#FF9E6D]"
                    >
                      <span>{profile.email}</span>
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>

                  <div className="border-t border-[#E4E2DC] pt-5 dark:border-[#262A2D]">
                    <p className="mb-3 text-xs font-medium text-[#596066] dark:text-[#A8AEB2]">
                      {lang === 'fa' ? 'دریافت رزومه (PDF)' : lang === 'ja' ? '履歴書・職務経歴書' : 'Résumés (PDF)'}
                    </p>
                    <ul className="space-y-2.5">
                      <li>
                        <a
                          href={docs.en}
                          download
                          className="inline-flex items-center gap-2 text-sm font-medium text-[#14171A] hover:text-[#C2410C] dark:text-[#F4F1EA] dark:hover:text-[#FF9E6D]"
                        >
                          <Download className="h-4 w-4 text-[#C2410C] dark:text-[#FF9E6D]" aria-hidden="true" />
                          <span>{copy.docEn[lang]}</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href={docs.ja}
                          download
                          className="inline-flex items-center gap-2 text-sm font-medium text-[#14171A] hover:text-[#C2410C] dark:text-[#F4F1EA] dark:hover:text-[#FF9E6D]"
                        >
                          <Download className="h-4 w-4 text-[#C2410C] dark:text-[#FF9E6D]" aria-hidden="true" />
                          <span>{copy.docJa[lang]}</span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 border-t border-[#E4E2DC] pt-5 text-xs font-medium dark:border-[#262A2D]">
                    <a
                      href={profile.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[#14171A] hover:text-[#C2410C] dark:text-[#F4F1EA] dark:hover:text-[#FF9E6D]"
                    >
                      <Code2 className="h-4 w-4" aria-hidden="true" />
                      <span>GitHub</span>
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                    <a
                      href={profile.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[#14171A] hover:text-[#C2410C] dark:text-[#F4F1EA] dark:hover:text-[#FF9E6D]"
                    >
                      <BriefcaseBusiness className="h-4 w-4" aria-hidden="true" />
                      <span>LinkedIn</span>
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </SpotlightCard>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-[#E4E2DC] bg-[#F7F6F2] py-6 dark:border-[#262A2D] dark:bg-[#0D0F10]">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 px-6 text-xs text-[#596066] lg:px-10 dark:text-[#A8AEB2]">
          <p>© {new Date().getFullYear()} {profile.name[lang]}</p>
          <p>{copy.footerNote[lang]}</p>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 font-medium text-[#14171A] hover:text-[#C2410C] dark:text-[#F4F1EA] dark:hover:text-[#FF9E6D]"
          >
            <span>{copy.backTop[lang]}</span>
            <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </footer>
    </>
  );
}
