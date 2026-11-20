import { ArrowUpRight, BadgeCheck, Check, GraduationCap } from 'lucide-react';
import { copy, type Locale } from '../data/content';
import { Reveal, SpotlightCard } from './Reveal';

interface ExperienceSectionProps {
  lang: Locale;
}

export function ExperienceSection({ lang }: ExperienceSectionProps) {
  return (
    <section
      id="experience"
      className="border-b border-[#E4E2DC] bg-[#ECEAE3]/45 py-16 lg:py-24 dark:border-[#262A2D] dark:bg-[#121416]"
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <Reveal>
          <p className="mb-3 text-xs font-semibold tracking-wide text-[#C2410C] dark:text-[#FF9E6D]">
            {copy.experienceLabel[lang]}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-[#14171A] sm:text-4xl dark:text-[#F4F1EA]">
            {copy.experienceTitle[lang]}
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Chronological Roles */}
          <div className="space-y-6 lg:col-span-8">
            <Reveal delay={0.05}>
              <SpotlightCard className="rounded-2xl border border-[#E4E2DC] bg-[#FFFFFF] p-6 sm:p-7 dark:border-[#262A2D] dark:bg-[#15181A]">
                <div className="relative z-10">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-bold text-[#14171A] dark:text-[#F4F1EA]">
                        {copy.job[lang]}
                      </h3>
                      <p className="text-sm font-medium text-[#C2410C] dark:text-[#FF9E6D]">
                        {copy.company[lang]}
                      </p>
                    </div>
                    <span className="font-mono-tech text-xs text-[#596066] dark:text-[#A8AEB2]">
                      {copy.jobDate[lang]}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-[1.8] text-[#596066] dark:text-[#A8AEB2]">
                    {copy.jobLead[lang]}
                  </p>

                  <ul className="mt-4 space-y-2.5 border-t border-[#E4E2DC]/80 pt-4 dark:border-[#262A2D]/80">
                    {copy.jobBullets.map((b) => (
                      <li
                        key={b.en}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-[#14171A] dark:text-[#F4F1EA]/90"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-[#C2410C] dark:text-[#FF9E6D]"
                          aria-hidden="true"
                        />
                        <span>{b[lang]}</span>
                      </li>
                    ))}
                  </ul>

                  <p dir="ltr" className="mt-5 font-mono-tech text-xs text-[#596066] dark:text-[#A8AEB2]">
                    C# · Blazor · ASP.NET Core · Python · YOLOv8 · SQL Server
                  </p>
                </div>
              </SpotlightCard>
            </Reveal>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Reveal delay={0.1}>
                <SpotlightCard className="flex h-full flex-col justify-between rounded-2xl border border-[#E4E2DC] bg-[#FFFFFF] p-6 dark:border-[#262A2D] dark:bg-[#15181A]">
                  <div className="relative z-10">
                    <span className="font-mono-tech text-xs text-[#C2410C] dark:text-[#FF9E6D]">
                      {copy.indDate[lang]}
                    </span>
                    <h3 className="mt-1.5 text-base font-bold text-[#14171A] dark:text-[#F4F1EA]">
                      {copy.indTitle[lang]}
                    </h3>
                    <p className="mt-2.5 text-sm leading-[1.75] text-[#596066] dark:text-[#A8AEB2]">
                      {copy.indBody[lang]}
                    </p>
                  </div>

                  <a
                    href="#work"
                    className="relative z-10 mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-[#C2410C] hover:underline dark:text-[#FF9E6D]"
                  >
                    <span>{copy.viewWork[lang]}</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </SpotlightCard>
              </Reveal>

              <Reveal delay={0.14}>
                <SpotlightCard className="flex h-full flex-col justify-between rounded-2xl border border-[#E4E2DC] bg-[#FFFFFF] p-6 dark:border-[#262A2D] dark:bg-[#15181A]">
                  <div className="relative z-10">
                    <span className="font-mono-tech text-xs text-[#596066] dark:text-[#A8AEB2]">
                      {copy.b2bDate[lang]}
                    </span>
                    <h3 className="mt-1.5 text-base font-bold text-[#14171A] dark:text-[#F4F1EA]">
                      {copy.b2bTitle[lang]}
                    </h3>
                    <p className="mt-2.5 text-sm leading-[1.75] text-[#596066] dark:text-[#A8AEB2]">
                      {copy.b2bBody[lang]}
                    </p>
                  </div>

                  <p dir="ltr" className="relative z-10 mt-5 font-mono-tech text-xs text-[#596066] dark:text-[#A8AEB2]">
                    Next.js · Ant Design · REST API
                  </p>
                </SpotlightCard>
              </Reveal>
            </div>
          </div>

          {/* Education & Certification */}
          <div className="space-y-6 lg:col-span-4">
            <Reveal delay={0.08}>
              <SpotlightCard className="rounded-2xl border border-[#E4E2DC] bg-[#FFFFFF] p-6 dark:border-[#262A2D] dark:bg-[#15181A]">
                <div className="relative z-10">
                  <GraduationCap className="h-5 w-5 text-[#C2410C] dark:text-[#FF9E6D]" aria-hidden="true" />
                  <h3 className="mt-3 text-base font-bold text-[#14171A] dark:text-[#F4F1EA]">
                    {copy.education[lang]}
                  </h3>
                  <p className="mt-1.5 text-sm text-[#596066] dark:text-[#A8AEB2]">
                    {copy.university[lang]}
                  </p>
                  <p className="mt-3 text-xs font-medium text-[#14171A]/80 dark:text-[#F4F1EA]/80">
                    {copy.studying[lang]}
                  </p>
                </div>
              </SpotlightCard>
            </Reveal>

            <Reveal delay={0.12}>
              <SpotlightCard className="rounded-2xl border border-[#E4E2DC] bg-[#FFFFFF] p-6 dark:border-[#262A2D] dark:bg-[#15181A]">
                <div className="relative z-10">
                  <BadgeCheck className="h-5 w-5 text-[#C2410C] dark:text-[#FF9E6D]" aria-hidden="true" />
                  <h3 className="mt-3 text-base font-bold text-[#14171A] dark:text-[#F4F1EA]">
                    {copy.certification[lang]}
                  </h3>
                  <p className="mt-1.5 text-sm text-[#596066] dark:text-[#A8AEB2]">
                    {copy.certDetail[lang]}
                  </p>
                </div>
              </SpotlightCard>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
