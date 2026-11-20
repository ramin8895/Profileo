import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, BookOpen, Download, FileText } from 'lucide-react';
import { copy, type Locale } from '../data/content';
import { researchPapers, type ResearchPaper } from '../data/research';
import { Reveal, SpotlightCard } from './Reveal';

interface ResearchSectionProps {
  lang: Locale;
  onOpenPaper: (paper: ResearchPaper) => void;
}

function PaperCover({
  paper,
  lang,
  onOpenPaper,
}: {
  paper: ResearchPaper;
  lang: Locale;
  onOpenPaper: (paper: ResearchPaper) => void;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <button
      type="button"
      onClick={() => onOpenPaper(paper)}
      aria-label={paper.readLabel[lang]}
      className="group relative flex aspect-[4/3] w-full overflow-hidden rounded-xl border border-[#E4E2DC] bg-[#15181A] text-start transition-colors hover:border-[#C2410C] dark:border-[#262A2D] dark:hover:border-[#FF9E6D]"
    >
      {paper.coverImage && !imgError ? (
        <img
          src={paper.coverImage}
          alt={paper.coverAlt[lang]}
          referrerPolicy="no-referrer"
          onError={() => setImgError(true)}
          className={`h-full w-full transition-transform duration-300 ease-out group-hover:scale-[1.03] ${
            paper.id === 'multinational-anpr' ? 'object-cover object-top' : 'object-cover object-center'
          }`}
        />
      ) : (
        <div className="flex h-full w-full flex-col justify-between bg-gradient-to-br from-[#191D20] to-[#101214] p-5 text-[#F4F1EA]">
          <span className="font-mono-tech text-xs text-[#FF9E6D]">{paper.conferenceShort}</span>
          <div>
            <FileText className="mb-2 h-6 w-6 text-[#FF9E6D]" aria-hidden="true" />
            <p className="text-sm font-semibold leading-snug">{paper.title[lang]}</p>
          </div>
          <span className="font-mono-tech text-xs text-[#A8AEB2]">
            PDF · {paper.pages} pp.
          </span>
        </div>
      )}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/85 via-black/45 to-transparent px-4 pb-3 pt-10 text-xs text-white"
      >
        <span className="font-mono-tech">{paper.conferenceShort}</span>
        <span className="inline-flex items-center gap-1 font-medium">
          <FileText className="h-3.5 w-3.5" />
          <span dir="ltr" className="tabular-nums">PDF · {paper.pages}</span>
        </span>
      </div>
    </button>
  );
}

export function ResearchSection({ lang, onOpenPaper }: ResearchSectionProps) {
  return (
    <section
      id="research"
      className="border-b border-[#E4E2DC] bg-[#ECEAE3]/45 py-16 lg:py-24 dark:border-[#262A2D] dark:bg-[#121416]"
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        {/* Section Heading */}
        <Reveal>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-6">
              <p className="mb-3 text-xs font-semibold tracking-wide text-[#C2410C] dark:text-[#FF9E6D]">
                {copy.researchLabel[lang]}
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-[#14171A] sm:text-4xl dark:text-[#F4F1EA]">
                {copy.researchTitle[lang]}
              </h2>
            </div>
            <p className="text-sm leading-[1.85] text-[#596066] lg:col-span-6 dark:text-[#A8AEB2]">
              {copy.researchIntro[lang]}
            </p>
          </div>
        </Reveal>

        {/* Published Papers Grid */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {researchPapers.map((paper, index) => (
            <Reveal key={paper.id} delay={index * 0.08}>
              <motion.article
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="h-full"
              >
                <SpotlightCard className="flex h-full flex-col justify-between rounded-2xl border border-[#E4E2DC] bg-[#FFFFFF] p-6 transition-colors duration-150 hover:border-[#C2410C]/55 hover:shadow-md sm:p-7 dark:border-[#262A2D] dark:bg-[#15181A] dark:hover:border-[#FF9E6D]/45">
                  <div className="relative z-10">
                    <PaperCover paper={paper} lang={lang} onOpenPaper={onOpenPaper} />

                    {/* Clean Unboxed Metadata */}
                    <div className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#596066] dark:text-[#A8AEB2]">
                      <span className="font-semibold text-[#C2410C] dark:text-[#FF9E6D]">
                        {paper.label[lang]}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{paper.format[lang]}</span>
                      <span aria-hidden="true">·</span>
                      <span className="tabular-nums">
                        {new Intl.NumberFormat(lang).format(paper.pages)}{' '}
                        {lang === 'fa' ? 'صفحه' : lang === 'ja' ? 'ページ' : 'pages'}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mt-3 text-xl font-bold leading-snug text-[#14171A] sm:text-2xl dark:text-[#F4F1EA]">
                      <span className="me-2 font-mono-tech text-xs text-[#596066] dark:text-[#A8AEB2]">
                        0{index + 1}.
                      </span>
                      {paper.title[lang]}
                    </h3>

                    {/* Authors & Conference */}
                    <p className="mt-2 text-xs font-medium text-[#14171A]/80 dark:text-[#F4F1EA]/85">
                      {paper.authors[lang]}
                    </p>
                    <p className="mt-1 text-xs text-[#596066] dark:text-[#A8AEB2]">
                      {paper.conference[lang]}
                    </p>

                    {/* Abstract */}
                    <p className="mt-4 text-sm leading-[1.8] text-[#596066] dark:text-[#A8AEB2]">
                      {paper.description[lang]}
                    </p>

                    {/* Key Highlights */}
                    <ul className="mt-4 space-y-2 border-t border-[#E4E2DC]/80 pt-4 dark:border-[#262A2D]/80">
                      {paper.highlights.map((item) => (
                        <li
                          key={item.en}
                          className="text-xs leading-relaxed text-[#14171A] dark:text-[#F4F1EA]/90"
                        >
                          <span aria-hidden="true" className="me-2 text-[#C2410C] dark:text-[#FF9E6D]">
                            —
                          </span>
                          {item[lang]}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer Actions */}
                  <div className="relative z-10 mt-6 border-t border-[#E4E2DC] pt-5 dark:border-[#262A2D]">
                    <p dir="ltr" className="mb-4 truncate font-mono-tech text-[11px] text-[#596066] dark:text-[#A8AEB2]">
                      {paper.tags.join(' · ')}
                    </p>

                    <div className="flex flex-wrap items-center gap-3">
                      <button
                        type="button"
                        onClick={() => onOpenPaper(paper)}
                        className="inline-flex min-h-[42px] items-center gap-2 whitespace-nowrap rounded-lg bg-[#C2410C] px-4 py-2 text-xs font-semibold text-white transition-all duration-150 hover:bg-[#9A3412] active:scale-[0.98] dark:bg-[#FF9E6D] dark:text-[#14110F] dark:hover:bg-[#FFB48E]"
                      >
                        <BookOpen className="h-4 w-4" aria-hidden="true" />
                        <span>{paper.readLabel[lang]}</span>
                      </button>

                      <a
                        href={paper.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[42px] items-center gap-1.5 whitespace-nowrap rounded-lg border border-[#D4D1C8] bg-[#F7F6F2] px-3.5 py-2 text-xs font-medium text-[#14171A] transition-colors hover:border-[#14171A] dark:border-[#2D3236] dark:bg-[#191C1E] dark:text-[#F4F1EA] dark:hover:border-[#FF9E6D]"
                      >
                        <span>{paper.exploreLabel[lang]}</span>
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>

                      <a
                        href={paper.file}
                        download={paper.downloadName}
                        className="inline-flex min-h-[42px] items-center gap-1.5 whitespace-nowrap rounded-lg px-3 py-2 text-xs font-medium text-[#596066] transition-colors hover:text-[#14171A] dark:text-[#A8AEB2] dark:hover:text-[#F4F1EA]"
                      >
                        <Download className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>{paper.downloadLabel[lang]}</span>
                      </a>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
