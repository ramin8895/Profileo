import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, ArrowUpRight, BookOpen, Check, Link2, X } from 'lucide-react';
import { copy, type Locale } from '../data/content';
import { projects, type Project } from '../data/projects';
import { researchPapers, type ResearchPaper } from '../data/research';
import { ProjectVisual } from './ProjectVisual';

interface ProjectCaseStudyModalProps {
  project: Project | null;
  lang: Locale;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
  onOpenPaper: (paper: ResearchPaper) => void;
}

export function ProjectCaseStudyModal({
  project,
  lang,
  onClose,
  onSelectProject,
  onOpenPaper,
}: ProjectCaseStudyModalProps) {
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    if (!project) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  const currentIdx = projects.findIndex((p) => p.slug === project.slug);
  const prevProject = projects[(currentIdx - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIdx + 1) % projects.length];
  const linkedPaper = project.relatedPaperId
    ? researchPapers.find((paper) => paper.id === project.relatedPaperId)
    : undefined;

  const handleCopyShareLink = async () => {
    try {
      const shareUrl = `${window.location.origin}${window.location.pathname}#project/${project.slug}`;
      await navigator.clipboard.writeText(shareUrl);
      setCopiedLink(true);
      window.setTimeout(() => setCopiedLink(false), 2000);
    } catch {
      // Ignore safely
    }
  };

  const facts = [
    { label: copy.role[lang], value: project.role[lang] },
    { label: copy.projectType[lang], value: project.type[lang] },
    { label: copy.year[lang], value: project.year, ltr: true },
    { label: copy.status[lang], value: copy[project.status][lang] },
  ];

  const sections = [
    { index: '01.', title: copy.overview[lang], body: project.overview[lang] },
    { index: '02.', title: copy.challenge[lang], body: project.challenge[lang] },
    { index: '03.', title: copy.approach[lang], body: project.approach[lang] },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-xs sm:p-6 lg:p-10"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <motion.div
        key={project.slug}
        initial={{ opacity: 0, y: 14, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 8, scale: 0.985 }}
        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
        className="my-auto w-full max-w-4xl rounded-2xl border border-[#E4E2DC] bg-[#F7F6F2] p-6 shadow-2xl sm:p-8 lg:p-10 dark:border-[#262A2D] dark:bg-[#121416]"
      >
        {/* Top Bar */}
        <div className="flex items-center justify-between gap-4 border-b border-[#E4E2DC] pb-4 dark:border-[#262A2D]">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex min-h-[40px] items-center gap-2 text-xs font-medium text-[#596066] transition-colors hover:text-[#14171A] dark:text-[#A8AEB2] dark:hover:text-[#F4F1EA]"
          >
            {lang === 'fa' ? <ArrowRight className="h-4 w-4" /> : <ArrowLeft className="h-4 w-4" />}
            <span>{copy.backProjects[lang]}</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopyShareLink}
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
              aria-label={copy.backProjects[lang]}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#E4E2DC] bg-[#FFFFFF] text-[#14171A] transition-colors hover:border-[#C2410C] dark:border-[#262A2D] dark:bg-[#191C1E] dark:text-[#F4F1EA] dark:hover:border-[#FF9E6D]"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Heading */}
        <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium text-[#C2410C] dark:text-[#FF9E6D]">
              {copy[project.category][lang]} · <span dir="ltr">{project.year}</span>
            </p>
            <h2
              id="case-study-title"
              dir="ltr"
              className="mt-2 text-3xl font-bold tracking-tight text-[#14171A] sm:text-4xl dark:text-[#F4F1EA]"
            >
              {project.name}
              <span className="text-[#C2410C] dark:text-[#FF9E6D]">.</span>
            </h2>
            <p className="mt-2 text-lg font-medium text-[#596066] dark:text-[#A8AEB2]">
              {project.title[lang]}
            </p>
          </div>

          {(project.url || project.panelUrl) && (
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[42px] items-center gap-2 whitespace-nowrap rounded-lg bg-[#C2410C] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#9A3412] dark:bg-[#FF9E6D] dark:text-[#14110F] dark:hover:bg-[#FFB48E]"
                >
                  <span>{project.urlLabel?.[lang] ?? copy.visit[lang]}</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              )}
              {project.panelUrl && (
                <a
                  href={project.panelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[42px] items-center gap-2 whitespace-nowrap rounded-lg border border-[#D4D1C8] bg-[#FFFFFF] px-4 py-2 text-xs font-medium text-[#14171A] transition-colors hover:border-[#14171A] dark:border-[#2D3236] dark:bg-[#191C1E] dark:text-[#F4F1EA] dark:hover:border-[#FF9E6D]"
                >
                  <span>{copy.merchantPanel[lang]}</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              )}
            </div>
          )}
        </div>

        <p className="mt-4 text-sm leading-[1.85] text-[#596066] dark:text-[#A8AEB2]">
          {project.summary[lang]}
        </p>

        {/* Visual Preview */}
        {project.category !== 'enterprise' && (
          <figure className="mt-7">
            <ProjectVisual slug={project.slug} large />
            <figcaption className="mt-2 text-center text-xs text-[#596066] dark:text-[#A8AEB2]">
              {copy.previewCaption[lang]}
            </figcaption>
          </figure>
        )}

        {/* Facts Grid */}
        <dl className="mt-8 grid grid-cols-2 gap-4 border-y border-[#E4E2DC] py-5 sm:grid-cols-4 dark:border-[#262A2D]">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt className="text-xs text-[#596066] dark:text-[#A8AEB2]">{fact.label}</dt>
              <dd
                dir={fact.ltr ? 'ltr' : undefined}
                className="mt-1 text-sm font-semibold text-[#14171A] dark:text-[#F4F1EA]"
              >
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>

        {/* Narrative + Tech Sidebar */}
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-8">
            {sections.map((sec) => (
              <section key={sec.index}>
                <h3 className="text-base font-bold text-[#14171A] dark:text-[#F4F1EA]">
                  <span className="me-2 font-mono-tech text-xs text-[#C2410C] dark:text-[#FF9E6D]">
                    {sec.index}
                  </span>
                  {sec.title}
                </h3>
                <p className="mt-2 text-sm leading-[1.85] text-[#596066] dark:text-[#A8AEB2]">
                  {sec.body}
                </p>
              </section>
            ))}

            {/* Key Capabilities */}
            <section>
              <h3 className="text-base font-bold text-[#14171A] dark:text-[#F4F1EA]">
                <span className="me-2 font-mono-tech text-xs text-[#C2410C] dark:text-[#FF9E6D]">
                  04.
                </span>
                {copy.features[lang]}
              </h3>
              <ul className="mt-3 space-y-2.5">
                {project.features.map((feat) => (
                  <li
                    key={feat.en}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-[#14171A] dark:text-[#F4F1EA]"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#C2410C] dark:text-[#FF9E6D]"
                      aria-hidden="true"
                    />
                    <span>{feat[lang]}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Tech Stack & Related Paper */}
          <aside className="space-y-6 lg:col-span-4">
            <div className="rounded-xl border border-[#E4E2DC] bg-[#FFFFFF] p-5 dark:border-[#262A2D] dark:bg-[#191C1E]">
              <h3 className="text-xs font-semibold text-[#596066] dark:text-[#A8AEB2]">
                {copy.technologies[lang]}
              </h3>
              <p dir="ltr" className="mt-3 font-mono-tech text-xs leading-7 text-[#14171A] dark:text-[#F4F1EA]">
                {project.stack.join(' · ')}
              </p>
            </div>

            {linkedPaper && (
              <div className="rounded-xl border border-[#E4E2DC] bg-[#FFFFFF] p-5 dark:border-[#262A2D] dark:bg-[#191C1E]">
                <p className="text-xs font-semibold text-[#C2410C] dark:text-[#FF9E6D]">
                  {copy.relatedPaper[lang]}
                </p>
                <p className="mt-2 text-sm font-semibold leading-snug text-[#14171A] dark:text-[#F4F1EA]">
                  {linkedPaper.title[lang]}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenPaper(linkedPaper);
                  }}
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#C2410C] hover:underline dark:text-[#FF9E6D]"
                >
                  <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>{linkedPaper.readLabel[lang]}</span>
                </button>
              </div>
            )}
          </aside>
        </div>

        {/* Prev / Next Navigation */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-[#E4E2DC] pt-6 dark:border-[#262A2D]">
          <button
            type="button"
            onClick={() => onSelectProject(prevProject)}
            className="text-start transition-colors hover:text-[#C2410C] dark:hover:text-[#FF9E6D]"
          >
            <span className="block text-xs text-[#596066] dark:text-[#A8AEB2]">
              {copy.prevProject[lang]}
            </span>
            <span dir="ltr" className="mt-0.5 block text-sm font-bold text-[#14171A] dark:text-[#F4F1EA]">
              {prevProject.name}
            </span>
          </button>

          <button
            type="button"
            onClick={() => onSelectProject(nextProject)}
            className="text-end transition-colors hover:text-[#C2410C] dark:hover:text-[#FF9E6D]"
          >
            <span className="block text-xs text-[#596066] dark:text-[#A8AEB2]">
              {copy.nextProject[lang]}
            </span>
            <span dir="ltr" className="mt-0.5 block text-sm font-bold text-[#14171A] dark:text-[#F4F1EA]">
              {nextProject.name}
            </span>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
