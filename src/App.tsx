import { useEffect, useState } from 'react';
import { AnimatePresence, MotionConfig } from 'motion/react';
import { AboutSection } from './components/AboutSection';
import { ContactFooter } from './components/ContactFooter';
import { ExperienceSection } from './components/ExperienceSection';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectCaseStudyModal } from './components/ProjectCaseStudyModal';
import { RemoteSection } from './components/RemoteSection';
import { ResearchReaderModal } from './components/ResearchReaderModal';
import { ResearchSection } from './components/ResearchSection';
import { TechMarquee } from './components/TechMarquee';
import { WorkSection } from './components/WorkSection';
import { copy, locales, type Locale } from './data/content';
import { projects, type Project, type ProjectCategory } from './data/projects';
import { researchPapers, type ResearchPaper } from './data/research';

function getInitialLocale(): Locale {
  try {
    const saved = window.localStorage.getItem('portfolio_lang');
    if (saved && locales.includes(saved as Locale)) {
      return saved as Locale;
    }
  } catch {
    // Ignore storage access errors
  }
  return 'fa';
}

function getInitialTheme(): 'dark' | 'light' {
  try {
    const saved = window.localStorage.getItem('portfolio_theme');
    if (saved === 'light' || saved === 'dark') {
      return saved;
    }
  } catch {
    // Ignore storage access errors
  }
  return 'dark';
}

export default function App() {
  const [lang, setLang] = useState<Locale>(getInitialLocale);
  const [theme, setTheme] = useState<'dark' | 'light'>(getInitialTheme);
  const [category, setCategory] = useState<'all' | ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTech, setActiveTech] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedPaper, setSelectedPaper] = useState<ResearchPaper | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === 'fa' ? 'rtl' : 'ltr';
    try {
      window.localStorage.setItem('portfolio_lang', lang);
    } catch {
      // Ignore storage access errors
    }
  }, [lang]);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      window.localStorage.setItem('portfolio_theme', theme);
    } catch {
      // Ignore storage access errors
    }
  }, [theme]);

  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#project/')) {
        const slug = hash.replace('#project/', '');
        const found = projects.find((p) => p.slug === slug);
        if (found) setSelectedProject(found);
      } else if (hash.startsWith('#paper/')) {
        const id = hash.replace('#paper/', '');
        const found = researchPapers.find((p) => p.id === id);
        if (found) setSelectedPaper(found);
      }
    };
    syncFromHash();
    window.addEventListener('hashchange', syncFromHash);
    return () => window.removeEventListener('hashchange', syncFromHash);
  }, []);

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
    window.history.replaceState(null, '', `#project/${project.slug}`);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
    if (window.location.hash.startsWith('#project/')) {
      window.history.replaceState(null, '', '#work');
    }
  };

  const handleOpenPaper = (paper: ResearchPaper) => {
    setSelectedPaper(paper);
    window.history.replaceState(null, '', `#paper/${paper.id}`);
  };

  const handleClosePaper = () => {
    setSelectedPaper(null);
    if (window.location.hash.startsWith('#paper/')) {
      window.history.replaceState(null, '', '#research');
    }
  };

  const handleSelectTechFromToolkit = (tech: string) => {
    setCategory('all');
    setSearchQuery('');
    setActiveTech(tech);
    const workEl = document.getElementById('work');
    if (workEl) {
      workEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#F7F6F2] text-[#14171A] transition-colors duration-150 dark:bg-[#0D0F10] dark:text-[#F4F1EA]">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-[#C2410C] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white dark:focus:bg-[#FF9E6D] dark:focus:text-[#14110F]"
        >
          {copy.skip[lang]}
        </a>

        <Header lang={lang} />

        <main id="main">
          <Hero
            lang={lang}
            onChangeLang={setLang}
            theme={theme}
            onToggleTheme={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
          />

          <TechMarquee />

          <WorkSection
            lang={lang}
            category={category}
            onChangeCategory={setCategory}
            searchQuery={searchQuery}
            onChangeSearch={setSearchQuery}
            activeTech={activeTech}
            onClearTech={() => setActiveTech(null)}
            onSelectProject={handleSelectProject}
          />

          <ResearchSection lang={lang} onOpenPaper={handleOpenPaper} />

          <AboutSection lang={lang} onSelectTech={handleSelectTechFromToolkit} />

          <ExperienceSection lang={lang} />

          <RemoteSection lang={lang} />
        </main>

        <ContactFooter lang={lang} />

        <AnimatePresence>
          {selectedProject && (
            <ProjectCaseStudyModal
              key={selectedProject.slug}
              project={selectedProject}
              lang={lang}
              onClose={handleCloseProject}
              onSelectProject={handleSelectProject}
              onOpenPaper={handleOpenPaper}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {selectedPaper && (
            <ResearchReaderModal
              key={selectedPaper.id}
              paper={selectedPaper}
              lang={lang}
              onClose={handleClosePaper}
            />
          )}
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
}
