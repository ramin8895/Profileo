import { motion } from 'motion/react';
import { Code2, Cpu, Download, Layers3 } from 'lucide-react';
import { copy, docs, type Locale } from '../data/content';
import { projects } from '../data/projects';
import { Reveal, SpotlightCard } from './Reveal';

interface AboutSectionProps {
  lang: Locale;
  onSelectTech: (tech: string) => void;
}

export function AboutSection({ lang, onSelectTech }: AboutSectionProps) {
  const groups = [
    {
      icon: Code2,
      label: copy.frontend[lang],
      items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'React Native', 'Zustand', 'TanStack Query'],
    },
    {
      icon: Layers3,
      label: copy.backend[lang],
      items: ['Node.js', 'NestJS', 'Prisma', 'C#', 'Blazor', 'PostgreSQL', 'Redis'],
    },
    {
      icon: Cpu,
      label: copy.aiTools[lang],
      items: ['Python', 'YOLOv8', 'OpenCV', 'FastAPI', 'pgvector', 'Celery'],
    },
  ];

  const countMatchingProjects = (tech: string) =>
    projects.filter((p) => p.stack.some((s) => s.toLowerCase().includes(tech.toLowerCase()))).length;

  return (
    <section id="about" className="border-b border-[#E4E2DC] py-16 lg:py-24 dark:border-[#262A2D]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <Reveal>
          <p className="mb-3 text-xs font-semibold tracking-wide text-[#C2410C] dark:text-[#FF9E6D]">
            {copy.aboutLabel[lang]}
          </p>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <h2 className="whitespace-pre-line text-3xl font-bold leading-snug tracking-tight text-[#14171A] sm:text-4xl dark:text-[#F4F1EA]">
                {copy.aboutTitle[lang]}
              </h2>
            </div>

            <div className="space-y-4 lg:col-span-7">
              <p className="text-base leading-[1.85] text-[#14171A]/90 dark:text-[#F4F1EA]/90">
                {copy.aboutBody[lang]}
              </p>
              <p className="text-sm leading-[1.85] text-[#596066] dark:text-[#A8AEB2]">
                {copy.aboutBody2[lang]}
              </p>
              <p className="pt-2 text-xs font-medium text-[#596066] dark:text-[#A8AEB2]">
                {copy.spoken[lang]}
              </p>

              <div className="flex flex-wrap items-center gap-5 pt-2">
                <a
                  href={docs.en}
                  download
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#C2410C] hover:underline dark:text-[#FF9E6D]"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  <span>{copy.docEn[lang]}</span>
                </a>
                <a
                  href={docs.ja}
                  download
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#14171A] hover:text-[#C2410C] hover:underline dark:text-[#F4F1EA] dark:hover:text-[#FF9E6D]"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  <span>{copy.docJaShort[lang]}</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Interactive Toolkit & Proof Matrix */}
        <div className="mt-14 border-t border-[#E4E2DC] pt-10 dark:border-[#262A2D]">
          <Reveal>
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <h3 className="text-lg font-bold text-[#14171A] dark:text-[#F4F1EA]">
                {copy.stackTitle[lang]}
              </h3>
              <p className="text-xs text-[#596066] dark:text-[#A8AEB2]">
                {copy.stackHint[lang]}
              </p>
            </div>
          </Reveal>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            {groups.map((group, idx) => (
              <Reveal key={group.label} delay={idx * 0.06}>
                <SpotlightCard className="h-full rounded-2xl border border-[#E4E2DC] bg-[#FFFFFF] p-6 dark:border-[#262A2D] dark:bg-[#15181A]">
                  <div className="relative z-10">
                    <div className="flex items-center gap-2.5 text-[#14171A] dark:text-[#F4F1EA]">
                      <group.icon className="h-4 w-4 text-[#C2410C] dark:text-[#FF9E6D]" aria-hidden="true" />
                      <h4 className="text-sm font-bold">{group.label}</h4>
                    </div>

                    <div dir="ltr" className="mt-4 flex flex-wrap gap-2">
                      {group.items.map((tech) => {
                        const matchCount = countMatchingProjects(tech);
                        return (
                          <motion.button
                            key={tech}
                            type="button"
                            onClick={() => onSelectTech(tech)}
                            disabled={matchCount === 0}
                            whileHover={matchCount > 0 ? { y: -2 } : undefined}
                            whileTap={matchCount > 0 ? { scale: 0.97 } : undefined}
                            transition={{ duration: 0.14 }}
                            className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 font-mono-tech text-xs transition-colors duration-150 ${
                              matchCount > 0
                                ? 'border-[#E4E2DC] bg-[#F7F6F2] text-[#14171A] hover:border-[#C2410C] hover:text-[#C2410C] dark:border-[#2D3236] dark:bg-[#1C2023] dark:text-[#F4F1EA] dark:hover:border-[#FF9E6D] dark:hover:text-[#FF9E6D]'
                                : 'cursor-default border-transparent bg-[#F7F6F2]/60 text-[#596066] dark:bg-[#1C2023]/50 dark:text-[#A8AEB2]'
                            }`}
                          >
                            <span>{tech}</span>
                            {matchCount > 0 && (
                              <span className="tabular-nums text-[10px] text-[#596066] dark:text-[#A8AEB2]">
                                ({matchCount})
                              </span>
                            )}
                          </motion.button>
                        );
                      })}
                    </div>
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
