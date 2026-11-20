import { useEffect, useState } from 'react';
import { Clock, Globe2, Layers3, Users } from 'lucide-react';
import { copy, type Locale } from '../data/content';
import { Reveal, SpotlightCard } from './Reveal';

interface RemoteSectionProps {
  lang: Locale;
}

function formatClock(date: Date, timeZone?: string) {
  try {
    return new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone,
    }).format(date);
  } catch {
    return '--:--';
  }
}

function getTehranHourFraction(date: Date): number {
  try {
    const parts = new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: 'Asia/Tehran',
    }).formatToParts(date);
    const h = Number(parts.find((p) => p.type === 'hour')?.value ?? 12);
    const m = Number(parts.find((p) => p.type === 'minute')?.value ?? 0);
    return h + m / 60;
  } catch {
    return 12;
  }
}

export function RemoteSection({ lang }: RemoteSectionProps) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 15000);
    return () => window.clearInterval(id);
  }, []);

  const tehranTime = formatClock(now, 'Asia/Tehran');
  const tokyoTime = formatClock(now, 'Asia/Tokyo');
  const localTime = formatClock(now);
  const tehranFraction = getTehranHourFraction(now);

  const pillars = [
    {
      icon: Layers3,
      title: copy.soloTitle[lang],
      body: copy.soloBody[lang],
    },
    {
      icon: Users,
      title: copy.teamTitle[lang],
      body: copy.teamBody[lang],
    },
    {
      icon: Globe2,
      title: copy.langTitle[lang],
      body: copy.langBody[lang],
    },
  ];

  return (
    <section id="remote" className="border-b border-[#E4E2DC] py-16 lg:py-24 dark:border-[#262A2D]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <Reveal>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-6">
              <p className="mb-3 text-xs font-semibold tracking-wide text-[#C2410C] dark:text-[#FF9E6D]">
                {copy.remoteLabel[lang]}
              </p>
              <h2 className="whitespace-pre-line text-3xl font-bold leading-snug tracking-tight text-[#14171A] sm:text-4xl dark:text-[#F4F1EA]">
                {copy.remoteTitle[lang]}
              </h2>
            </div>
            <p className="text-sm leading-[1.85] text-[#596066] lg:col-span-6 dark:text-[#A8AEB2]">
              {copy.remoteIntro[lang]}
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Live Time-Zone Overlap Card */}
          <Reveal delay={0.05} className="lg:col-span-5">
            <SpotlightCard className="h-full rounded-2xl border border-[#E4E2DC] bg-[#FFFFFF] p-6 sm:p-7 dark:border-[#262A2D] dark:bg-[#15181A]">
              <div className="relative z-10">
                <div className="flex items-center gap-2.5 text-[#14171A] dark:text-[#F4F1EA]">
                  <Clock className="h-4 w-4 text-[#C2410C] dark:text-[#FF9E6D]" aria-hidden="true" />
                  <h3 className="text-base font-bold">{copy.tzTitle[lang]}</h3>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-3 border-y border-[#E4E2DC] py-4 dark:border-[#262A2D]">
                  <div>
                    <p className="text-[11px] text-[#596066] dark:text-[#A8AEB2]">{copy.tzTehran[lang]}</p>
                    <p dir="ltr" className="mt-1 font-mono-tech text-xl font-bold text-[#14171A] dark:text-[#F4F1EA]">
                      {tehranTime}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] text-[#596066] dark:text-[#A8AEB2]">{copy.tzTokyo[lang]}</p>
                    <p dir="ltr" className="mt-1 font-mono-tech text-xl font-bold text-[#C2410C] dark:text-[#FF9E6D]">
                      {tokyoTime}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] text-[#596066] dark:text-[#A8AEB2]">{copy.tzLocal[lang]}</p>
                    <p dir="ltr" className="mt-1 font-mono-tech text-xl font-bold text-[#14171A] dark:text-[#F4F1EA]">
                      {localTime}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-xs font-medium text-[#14171A] dark:text-[#F4F1EA]">
                  {copy.tzNote[lang]}
                </p>

                {/* 24h Overlap Timeline (IRST) with live current-time marker */}
                <div dir="ltr" className="mt-4" aria-label={copy.tzBar[lang]}>
                  <div className="relative h-3 w-full overflow-visible rounded-full bg-[#ECEAE3] dark:bg-[#222629]">
                    <div
                      style={{ left: `${(3.5 / 24) * 100}%`, width: `${(9 / 24) * 100}%` }}
                      className="absolute inset-y-0 rounded-full bg-[#C2410C] dark:bg-[#FF9E6D]"
                    />
                    <div
                      title={`Tehran ${tehranTime}`}
                      style={{ left: `${(tehranFraction / 24) * 100}%` }}
                      className="absolute -top-1 h-5 w-0.5 -translate-x-1/2 rounded-full bg-[#14171A] dark:bg-[#F4F1EA]"
                    />
                  </div>
                  <div className="mt-2 flex justify-between font-mono-tech text-[10px] text-[#596066] dark:text-[#A8AEB2]">
                    {['00', '06', '12', '18', '24'].map((tick) => (
                      <span key={tick}>{tick}:00</span>
                    ))}
                  </div>
                </div>

                <p className="mt-3 text-xs leading-relaxed text-[#596066] dark:text-[#A8AEB2]">
                  {copy.tzBar[lang]}
                </p>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* 3 Remote Readiness Pillars */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:col-span-7">
            {pillars.map((pillar, idx) => (
              <Reveal key={pillar.title} delay={0.07 + idx * 0.05}>
                <SpotlightCard className="flex h-full flex-col justify-between rounded-2xl border border-[#E4E2DC] bg-[#FFFFFF] p-6 dark:border-[#262A2D] dark:bg-[#15181A]">
                  <div className="relative z-10">
                    <pillar.icon className="h-5 w-5 text-[#C2410C] dark:text-[#FF9E6D]" aria-hidden="true" />
                    <h3 className="mt-4 text-base font-bold text-[#14171A] dark:text-[#F4F1EA]">
                      {pillar.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-[1.75] text-[#596066] dark:text-[#A8AEB2]">
                      {pillar.body}
                    </p>
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
