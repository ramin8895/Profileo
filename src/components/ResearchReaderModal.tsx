import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Check, Copy, Download, ExternalLink, FileText, Layers, Link2, Table2, X } from 'lucide-react';
import { copy, type Locale } from '../data/content';
import type { ResearchPaper } from '../data/research';

interface ResearchReaderModalProps {
  paper: ResearchPaper | null;
  lang: Locale;
  onClose: () => void;
}

type ReaderTab = 'overview' | 'comparison' | 'pdf';

export function ResearchReaderModal({ paper, lang, onClose }: ResearchReaderModalProps) {
  const [tab, setTab] = useState<ReaderTab>('overview');
  const [copiedBib, setCopiedBib] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    setTab('overview');
  }, [paper?.id]);

  useEffect(() => {
    if (!paper) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [paper, onClose]);

  if (!paper) return null;

  const handleCopyBibtex = async () => {
    try {
      await navigator.clipboard.writeText(paper.bibtex);
      setCopiedBib(true);
      window.setTimeout(() => setCopiedBib(false), 2200);
    } catch {
      // Ignore safely
    }
  };

  const handleCopyLink = async () => {
    try {
      const shareUrl = `${window.location.origin}${window.location.pathname}#paper/${paper.id}`;
      await navigator.clipboard.writeText(shareUrl);
      setCopiedLink(true);
      window.setTimeout(() => setCopiedLink(false), 2000);
    } catch {
      // Ignore safely
    }
  };

  const tabLabels = {
    overview: lang === 'fa' ? 'خلاصه و خط لوله' : lang === 'ja' ? '概要・パイプライン' : 'Overview & Pipeline',
    comparison: lang === 'fa' ? 'مقایسه روش‌ها' : lang === 'ja' ? '手法比較表' : 'Method Comparison',
    pdf: lang === 'fa' ? 'مشاهده متن کامل PDF' : lang === 'ja' ? 'PDF全文ビューア' : 'Full PDF Reader',
  };

  const availableTabs: Array<{ id: ReaderTab; label: string; icon: typeof Layers }> = [
    { id: 'overview', label: tabLabels.overview, icon: Layers },
    ...(paper.comparisonRows && paper.comparisonRows.length > 0
      ? [{ id: 'comparison' as const, label: tabLabels.comparison, icon: Table2 }]
      : []),
    { id: 'pdf', label: tabLabels.pdf, icon: FileText },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="research-modal-title"
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/75 p-4 backdrop-blur-xs sm:p-6 lg:p-10"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <motion.div
        key={paper.id}
        initial={{ opacity: 0, y: 14, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 8, scale: 0.985 }}
        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
        className="my-auto w-full max-w-5xl rounded-2xl border border-[#E4E2DC] bg-[#F7F6F2] p-6 shadow-2xl sm:p-8 dark:border-[#262A2D] dark:bg-[#121416]"
      >
        {/* Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E4E2DC] pb-4 dark:border-[#262A2D]">
          <div className="text-xs text-[#596066] dark:text-[#A8AEB2]">
            <span className="font-semibold text-[#C2410C] dark:text-[#FF9E6D]">
              {paper.conferenceShort}
            </span>
            <span aria-hidden="true" className="mx-2">·</span>
            <span>{paper.format[lang]}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopyLink}
              className="inline-flex h-10 items-center gap-1.5 rounded-lg border border-[#E4E2DC] bg-[#FFFFFF] px-3 text-xs font-medium text-[#14171A] transition-colors hover:border-[#C2410C] dark:border-[#262A2D] dark:bg-[#191C1E] dark:text-[#F4F1EA] dark:hover:border-[#FF9E6D]"
            >
              {copiedLink ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>{copy.copied[lang]}</span>
                </>
              ) : (
                <>
                  <Link2 className="h-3.5 w-3.5" />
                  <span>{lang === 'fa' ? 'کپی لینک' : lang === 'ja' ? 'リンクをコピー' : 'Copy link'}</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label={lang === 'fa' ? 'بستن' : lang === 'ja' ? '閉じる' : 'Close'}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#E4E2DC] bg-[#FFFFFF] text-[#14171A] transition-colors hover:border-[#C2410C] dark:border-[#262A2D] dark:bg-[#191C1E] dark:text-[#F4F1EA] dark:hover:border-[#FF9E6D]"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Title & Metadata */}
        <div className="mt-6">
          <h2
            id="research-modal-title"
            className="text-2xl font-bold leading-snug text-[#14171A] sm:text-3xl dark:text-[#F4F1EA]"
          >
            {paper.title[lang]}
          </h2>
          <p className="mt-2 text-sm font-medium text-[#14171A]/85 dark:text-[#F4F1EA]/85">
            {paper.authors[lang]}
          </p>
          <p className="mt-1 text-xs text-[#596066] dark:text-[#A8AEB2]">
            {paper.affiliation[lang]} — {paper.conference[lang]}
          </p>
        </div>

        {/* Tabs & Action Buttons */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-b border-[#E4E2DC] pb-4 dark:border-[#262A2D]">
          <div
            role="tablist"
            className="inline-flex flex-wrap items-center gap-1 rounded-xl border border-[#E4E2DC] bg-[#ECEAE3]/75 p-1 dark:border-[#262A2D] dark:bg-[#191C1E]"
          >
            {availableTabs.map((t) => {
              const Icon = t.icon;
              const isActive = tab === t.id;
              return (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setTab(t.id)}
                  className={`relative inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg px-3.5 py-2 text-xs font-medium transition-colors ${
                    isActive
                      ? 'text-[#14171A] dark:text-[#14110F]'
                      : 'text-[#596066] hover:text-[#14171A] dark:text-[#A8AEB2] dark:hover:text-[#F4F1EA]'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="research-reader-tab"
                      transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                      className="absolute inset-0 rounded-lg bg-[#FFFFFF] shadow-xs dark:bg-[#FF9E6D]"
                    />
                  )}
                  <Icon className="relative z-10 h-3.5 w-3.5" aria-hidden="true" />
                  <span className="relative z-10">{t.label}</span>
                </button>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={handleCopyBibtex}
              className="inline-flex min-h-[38px] items-center gap-1.5 whitespace-nowrap rounded-lg border border-[#D4D1C8] bg-[#FFFFFF] px-3 py-1.5 text-xs font-medium text-[#14171A] transition-colors hover:border-[#C2410C] dark:border-[#2D3236] dark:bg-[#191C1E] dark:text-[#F4F1EA] dark:hover:border-[#FF9E6D]"
            >
              {copiedBib ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>{lang === 'fa' ? 'BibTeX کپی شد' : lang === 'ja' ? 'BibTeXコピー済み' : 'BibTeX copied'}</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>{lang === 'fa' ? 'کپی ارجاع BibTeX' : lang === 'ja' ? 'BibTeXをコピー' : 'Copy BibTeX'}</span>
                </>
              )}
            </button>

            <a
              href={paper.file}
              download={paper.downloadName}
              className="inline-flex min-h-[38px] items-center gap-1.5 whitespace-nowrap rounded-lg bg-[#C2410C] px-3.5 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#9A3412] dark:bg-[#FF9E6D] dark:text-[#14110F] dark:hover:bg-[#FFB48E]"
            >
              <Download className="h-3.5 w-3.5" />
              <span>{paper.downloadLabel[lang]}</span>
            </a>
          </div>
        </div>

        {/* Tab Content */}
        <div className="mt-6">
          {tab === 'overview' && (
            <motion.div
              key="tab-overview"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                <div className="space-y-4 lg:col-span-7">
                  <h3 className="text-sm font-bold text-[#14171A] dark:text-[#F4F1EA]">
                    {lang === 'fa' ? 'چکیده و دامنه پژوهش' : lang === 'ja' ? '要旨と研究範囲' : 'Abstract & Scope'}
                  </h3>
                  <p className="text-sm leading-[1.85] text-[#596066] dark:text-[#A8AEB2]">
                    {paper.description[lang]}
                  </p>

                  {paper.metricsNote && (
                    <div className="rounded-xl border border-[#E4E2DC] bg-[#FFFFFF] p-4 text-xs leading-relaxed text-[#14171A] dark:border-[#262A2D] dark:bg-[#191C1E] dark:text-[#F4F1EA]">
                      {paper.metricsNote[lang]}
                    </div>
                  )}
                </div>

                {paper.coverImage && (
                  <div className="lg:col-span-5">
                    <div className="overflow-hidden rounded-xl border border-[#E4E2DC] bg-[#15181A] dark:border-[#262A2D]">
                      <img
                        src={paper.coverImage}
                        alt={paper.coverAlt[lang]}
                        referrerPolicy="no-referrer"
                        className="h-auto w-full object-cover"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Pipeline Flow */}
              {paper.pipelineSteps && (
                <div className="rounded-xl border border-[#E4E2DC] bg-[#FFFFFF] p-5 dark:border-[#262A2D] dark:bg-[#191C1E]">
                  <p className="mb-3 text-xs font-semibold text-[#596066] dark:text-[#A8AEB2]">
                    {lang === 'fa' ? 'معماری خط لوله پیشنهادی' : lang === 'ja' ? 'システムパイプライン構成' : 'Pipeline Architecture'}
                  </p>
                  <div dir="ltr" className="flex flex-wrap items-center gap-2">
                    {paper.pipelineSteps.map((step, idx) => (
                      <div key={step} className="flex items-center gap-2">
                        <span className="rounded-lg border border-[#E4E2DC] bg-[#F7F6F2] px-3 py-1.5 font-mono-tech text-[11px] font-medium text-[#14171A] dark:border-[#2D3236] dark:bg-[#121416] dark:text-[#F4F1EA]">
                          {idx + 1}. {step}
                        </span>
                        {idx < paper.pipelineSteps!.length - 1 && (
                          <ArrowRight className="h-3.5 w-3.5 text-[#C2410C] dark:text-[#FF9E6D]" aria-hidden="true" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Highlights */}
              <div>
                <h3 className="mb-3 text-sm font-bold text-[#14171A] dark:text-[#F4F1EA]">
                  {lang === 'fa' ? 'یافته‌ها و دستاوردهای کلیدی' : lang === 'ja' ? '主な知見・貢献' : 'Key Findings & Contributions'}
                </h3>
                <ul className="space-y-2.5">
                  {paper.highlights.map((h) => (
                    <li
                      key={h.en}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-[#596066] dark:text-[#A8AEB2]"
                    >
                      <Check className="mt-1 h-4 w-4 shrink-0 text-[#C2410C] dark:text-[#FF9E6D]" aria-hidden="true" />
                      <span>{h[lang]}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}

          {tab === 'comparison' && paper.comparisonRows && (
            <motion.div
              key="tab-comparison"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-x-auto rounded-xl border border-[#E4E2DC] bg-[#FFFFFF] dark:border-[#262A2D] dark:bg-[#191C1E]"
            >
              <table className="w-full min-w-[680px] border-collapse text-start text-xs">
                <thead>
                  <tr className="border-b border-[#E4E2DC] bg-[#ECEAE3]/60 text-[#14171A] dark:border-[#262A2D] dark:bg-[#15181A] dark:text-[#F4F1EA]">
                    <th className="p-3.5 text-start font-semibold">
                      {lang === 'fa' ? 'روش / معماری' : lang === 'ja' ? '手法・アーキテクチャ' : 'Method'}
                    </th>
                    <th className="p-3.5 text-start font-semibold">
                      {lang === 'fa' ? 'ایده اصلی' : lang === 'ja' ? '基本原理' : 'Core Idea'}
                    </th>
                    <th className="p-3.5 text-start font-semibold">
                      {lang === 'fa' ? 'مزایا' : lang === 'ja' ? '長所' : 'Strengths'}
                    </th>
                    <th className="p-3.5 text-start font-semibold">
                      {lang === 'fa' ? 'محدودیت‌ها' : lang === 'ja' ? '制約・課題' : 'Limitations'}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E4E2DC] dark:divide-[#262A2D]">
                  {paper.comparisonRows.map((row) => (
                    <tr key={row.method} className="align-top text-[#596066] dark:text-[#A8AEB2]">
                      <td dir="ltr" className="p-3.5 font-mono-tech font-semibold text-[#14171A] dark:text-[#FF9E6D]">
                        {row.method}
                      </td>
                      <td className="p-3.5 leading-relaxed">{row.coreIdea[lang]}</td>
                      <td className="p-3.5 leading-relaxed">{row.strengths[lang]}</td>
                      <td className="p-3.5 leading-relaxed">{row.limitations[lang]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          )}

          {tab === 'pdf' && (
            <motion.div
              key="tab-pdf"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-3"
            >
              <div className="flex items-center justify-between text-xs text-[#596066] dark:text-[#A8AEB2]">
                <span>{paper.format[lang]}</span>
                <a
                  href={paper.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium text-[#C2410C] hover:underline dark:text-[#FF9E6D]"
                >
                  <span>{paper.exploreLabel[lang]}</span>
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
              <div className="overflow-hidden rounded-xl border border-[#E4E2DC] bg-[#FFFFFF] dark:border-[#262A2D] dark:bg-[#191C1E]">
                <iframe
                  title={paper.title[lang]}
                  src={`${paper.file}#view=FitH`}
                  className="h-[68vh] min-h-[460px] w-full"
                />
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
