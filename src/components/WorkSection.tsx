import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, CheckCircle2, Clock, PackageCheck, Search, X } from 'lucide-react';
import { copy, type Locale } from '../data/content';
import { projects, type Project, type ProjectCategory, type ProjectStatus } from '../data/projects';
import { ProjectVisual } from './ProjectVisual';
import { Reveal, SpotlightCard } from './Reveal';

interface WorkSectionProps {
  lang: Locale;
  category: 'all' | ProjectCategory;
  onChangeCategory: (cat: 'all' | ProjectCategory) => void;
  searchQuery: string;
  onChangeSearch: (q: string) => void;
  activeTech: string | null;
  onClearTech: () => void;
  onSelectProject: (project: Project) => void;
}

function StatusLabel({ status, lang }: { status: ProjectStatus; lang: Locale }) {
  const Icon =
    status === 'live' ? CheckCircle2 : status === 'development' ? Clock : PackageCheck;
  const colorClass =
    status === 'live'
      ? 'text-emerald-700 dark:text-emerald-400'
      : status === 'development'
        ? 'text-amber-700 dark:text-amber-400'
        : 'text-[#596066] dark:text-[#A8AEB2]';

  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-medium ${colorClass}`}>
      <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
      <span>{copy[status][lang]}</span>
    </span>
  );
}

function ProjectCard({
  project,
  lang,
  featured = false,
  onSelectProject,
}: {
  project: Project;
  lang: Locale;
  featured?: boolean;
  onSelectProject: (project: Project) => void;
}) {
  const globalIndex = projects.findIndex((p) => p.slug === project.slug) + 1;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <SpotlightCard className="group flex h-full flex-col justify-between rounded-2xl border border-[#E4E2DC] bg-[#FFFFFF] p-5 transition-colors duration-150 hover:border-[#C2410C]/60 hover:shadow-md sm:p-6 dark:border-[#262A2D] dark:bg-[#15181A] dark:hover:border-[#FF9E6D]/50">
        <div className="relative z-10">
          {project.category !== 'enterprise' && (
            <div className="mb-5">
              <ProjectVisual slug={project.slug} />
            </div>
          )}

          {/* Clean Unboxed Metadata Row */}
          <div className="flex items-center justify-between gap-2 text-xs text-[#596066] dark:text-[#A8AEB2]">
            <span>
              {copy[project.category][lang]}
              <span aria-hidden="true" className="mx-1.5">·</span>
              <span dir="ltr" className="tabular-nums">{project.year}</span>
            </span>
            <StatusLabel status={project.status} lang={lang} />
          </div>

          {/* Title + Editorial Index */}
          <div className="mt-3 flex items-baseline justify-between gap-3">
            <h3
              dir="ltr"
              className={`font-bold tracking-tight text-[#14171A] dark:text-[#F4F1EA] ${
                featured ? 'text-2xl' : 'text-xl'
              }`}
            >
              {project.name}
              <span className="text-[#C2410C] dark:text-[#FF9E6D]">.</span>
            </h3>
            <span aria-hidden="true" className="font-mono-tech text-xs text-[#596066]/70 dark:text-[#A8AEB2]/70">
              {String(globalIndex).padStart(2, '0')}
            </span>
          </div>

          <p className="mt-2.5 text-sm leading-[1.75] text-[#596066] dark:text-[#A8AEB2]">
            {project.summary[lang]}
          </p>
        </div>

        {/* Card Footer: Unboxed Stack + Case Study Action */}
        <div className="relative z-10 mt-6 border-t border-[#E4E2DC]/80 pt-4 dark:border-[#262A2D]/80">
          <p dir="ltr" className="truncate font-mono-tech text-[11px] text-[#596066] dark:text-[#A8AEB2]">
            {project.stack.slice(0, featured ? 5 : 4).join(' · ')}
          </p>

          <div className="mt-3 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => onSelectProject(project)}
              className="inline-flex min-h-[36px] items-center gap-1.5 text-xs font-semibold text-[#14171A] transition-colors group-hover:text-[#C2410C] dark:text-[#F4F1EA] dark:group-hover:text-[#FF9E6D]"
            >
              <span>{copy.details[lang]}</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </button>

            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                dir="ltr"
                className="inline-flex items-center gap-1 font-mono-tech text-[11px] text-[#596066] transition-colors hover:text-[#C2410C] dark:text-[#A8AEB2] dark:hover:text-[#FF9E6D]"
              >
                <span>{project.url.replace('https://', '')}</span>
                <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </SpotlightCard>
    </motion.article>
  );
}

export function WorkSection({
  lang,
  category,
  onChangeCategory,
  searchQuery,
  onChangeSearch,
  activeTech,
  onClearTech,
  onSelectProject,
}: WorkSectionProps) {
  const normalizedSearch = searchQuery.trim().toLowerCase();

  const visibleProjects = projects.filter((p) => {
    const matchesCat = category === 'all' || p.category === category;
    const matchesTech =
      !activeTech ||
      p.stack.some((s) => s.toLowerCase().includes(activeTech.toLowerCase()));
    const matchesSearch =
      !normalizedSearch ||
      p.name.toLowerCase().includes(normalizedSearch) ||
      p.summary[lang].toLowerCase().includes(normalizedSearch) ||
      p.stack.some((s) => s.toLowerCase().includes(normalizedSearch));
    return matchesCat && matchesTech && matchesSearch;
  });

  const isDefaultUnfilteredAll =
    category === 'all' && !normalizedSearch && !activeTech && visibleProjects.length > 2;
  const flagshipProjects = isDefaultUnfilteredAll ? visibleProjects.slice(0, 2) : [];
  const secondaryProjects = isDefaultUnfilteredAll ? visibleProjects.slice(2) : visibleProjects;

  const categories: Array<'all' | ProjectCategory> = ['all', 'saas', 'enterprise', 'ai'];

  return (
    <section id="work" className="border-b border-[#E4E2DC] py-16 lg:py-24 dark:border-[#262A2D]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        {/* Section Heading */}
        <Reveal>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-6">
              <p className="mb-3 text-xs font-semibold tracking-wide text-[#C2410C] dark:text-[#FF9E6D]">
                {copy.selectedLabel[lang]}
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-[#14171A] sm:text-4xl dark:text-[#F4F1EA]">
                {copy.selectedTitle[lang]}
              </h2>
            </div>
            <p className="text-sm leading-[1.85] text-[#596066] lg:col-span-6 dark:text-[#A8AEB2]">
              {copy.selectedIntro[lang]}
            </p>
          </div>
        </Reveal>

        {/* Interactive Filter Toolbar & Search */}
        <Reveal delay={0.05}>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div
              role="group"
              aria-label={copy.navWork[lang]}
              className="inline-flex w-fit max-w-full flex-wrap items-center gap-1 rounded-xl border border-[#E4E2DC] bg-[#ECEAE3]/75 p-1 dark:border-[#262A2D] dark:bg-[#15181A]"
            >
              {categories.map((cat) => {
                const count =
                  cat === 'all'
                    ? projects.length
                    : projects.filter((p) => p.category === cat).length;
                const isActive = category === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => onChangeCategory(cat)}
                    aria-pressed={isActive}
                    className={`relative inline-flex items-center gap-2 whitespace-nowrap shrink-0 rounded-lg px-3.5 py-2 text-xs font-medium transition-colors duration-150 ${
                      isActive
                        ? 'text-[#14171A] dark:text-[#14110F]'
                        : 'text-[#596066] hover:text-[#14171A] dark:text-[#A8AEB2] dark:hover:text-[#F4F1EA]'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="work-filter-pill"
                        transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                        className="absolute inset-0 rounded-lg bg-[#FFFFFF] shadow-xs dark:bg-[#FF9E6D]"
                      />
                    )}
                    <span className="relative z-10">{copy[cat][lang]}</span>
                    <span
                      className={`relative z-10 tabular-nums text-[11px] ${
                        isActive
                          ? 'text-[#C2410C] dark:text-[#14110F]/80'
                          : 'text-[#596066]/70 dark:text-[#A8AEB2]/70'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search
                className="pointer-events-none absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#596066] dark:text-[#A8AEB2]"
                aria-hidden="true"
              />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => onChangeSearch(e.target.value)}
                placeholder={copy.searchPlaceholder[lang]}
                aria-label={copy.searchPlaceholder[lang]}
                className="h-10 w-full rounded-xl border border-[#E4E2DC] bg-[#FFFFFF] pe-9 ps-9 text-xs text-[#14171A] placeholder:text-[#596066]/70 transition-colors focus:border-[#C2410C] focus:outline-none dark:border-[#262A2D] dark:bg-[#15181A] dark:text-[#F4F1EA] dark:placeholder:text-[#A8AEB2]/60 dark:focus:border-[#FF9E6D]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => onChangeSearch('')}
                  aria-label={copy.clearFilter[lang]}
                  className="absolute end-2.5 top-1/2 -translate-y-1/2 text-[#596066] hover:text-[#14171A] dark:text-[#A8AEB2] dark:hover:text-[#F4F1EA]"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
          </div>
        </Reveal>

        {/* Active Tech Filter Banner */}
        <AnimatePresence>
          {activeTech && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="mt-4 flex items-center justify-between rounded-xl border border-[#E4E2DC] bg-[#FFFFFF] px-4 py-2.5 text-xs dark:border-[#262A2D] dark:bg-[#15181A]"
            >
              <p className="text-[#596066] dark:text-[#A8AEB2]">
                {copy.filteredByTech[lang]}{' '}
                <strong dir="ltr" className="font-mono-tech text-[#14171A] dark:text-[#FF9E6D]">
                  {activeTech}
                </strong>
              </p>
              <button
                type="button"
                onClick={onClearTech}
                className="inline-flex items-center gap-1 font-medium text-[#C2410C] hover:underline dark:text-[#FF9E6D]"
              >
                <X className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{copy.clearFilter[lang]}</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Projects Grid */}
        {visibleProjects.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-[#E4E2DC] bg-[#FFFFFF] p-10 text-center dark:border-[#262A2D] dark:bg-[#15181A]">
            <p className="text-sm text-[#596066] dark:text-[#A8AEB2]">{copy.noProjectsFound[lang]}</p>
            <button
              type="button"
              onClick={() => {
                onChangeCategory('all');
                onChangeSearch('');
                onClearTech();
              }}
              className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-[#14171A] px-4 py-2 text-xs font-medium text-white dark:bg-[#FF9E6D] dark:text-[#14110F]"
            >
              <span>{copy.clearFilter[lang]}</span>
            </button>
          </div>
        ) : (
          <div className="mt-8 space-y-6">
            {flagshipProjects.length > 0 && (
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {flagshipProjects.map((project) => (
                  <ProjectCard
                    key={project.slug}
                    project={project}
                    lang={lang}
                    featured
                    onSelectProject={onSelectProject}
                  />
                ))}
              </div>
            )}

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {secondaryProjects.map((project) => (
                  <ProjectCard
                    key={project.slug}
                    project={project}
                    lang={lang}
                    onSelectProject={onSelectProject}
                  />
                ))}
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
