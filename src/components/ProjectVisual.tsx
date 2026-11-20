import { motion } from 'motion/react';
import { CalendarDays, Search, ShoppingBag } from 'lucide-react';

interface ProjectVisualProps {
  slug: string;
  large?: boolean;
}

export function ProjectVisual({ slug, large = false }: ProjectVisualProps) {
  const isCalendar = slug === 'calendro';
  const isVision = slug === 'coldino' || slug === 'smart-parking';
  const isSearch = slug === 'semantic-search';

  return (
    <div
      dir="ltr"
      aria-hidden="true"
      className={`relative flex w-full items-center justify-center overflow-hidden rounded-xl border border-[#E4E2DC] bg-[#EFECE5] p-5 dark:border-[#262A2D] dark:bg-[#101315] ${
        large ? 'min-h-[280px] sm:min-h-[340px] p-7' : 'h-48'
      }`}
    >
      {isVision ? (
        <div className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-lg border border-[#D4D1C8] bg-[#181E21] p-4 text-[#E6EAE8] dark:border-[#2C3338]">
          {/* Subtle animated optical scanline (transform-only) */}
          <motion.div
            animate={{ y: [-12, 130, -12] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8FD8A0]/45 to-transparent"
          />

          <div className="relative z-10 flex items-center justify-between font-mono-tech text-[11px] text-[#A8AEB2]">
            <span>RTSP STREAM · {slug === 'coldino' ? 'CAM_02 (GATE)' : 'CAM_01 (ENTRY)'}</span>
            <span className="text-[#8FD8A0]">YOLOv8</span>
          </div>

          <svg viewBox="0 0 420 130" className="relative z-10 mx-auto w-full max-w-[360px]" fill="none">
            <path
              d="M20 120 L140 20 M400 120 L280 20 M210 125 V18"
              stroke="currentColor"
              strokeOpacity="0.12"
              strokeDasharray="6 8"
            />
            <path
              d="m130 90 10-42q2-8 12-8h116q10 0 12 8l10 42v28H130V90Z"
              fill="#CBD5D0"
            />
            <path d="m148 52-7 30h138l-7-30H148Z" fill="#253530" />
            <rect x="138" y="96" width="24" height="8" rx="3" fill="#F4F6E2" />
            <rect x="258" y="96" width="24" height="8" rx="3" fill="#F4F6E2" />
            <rect x="184" y="102" width="52" height="14" rx="2" fill="#FFFFFF" />
            <path
              d="M118 55V35h26m132 0h26v20m0 48v20h-26m-132 0h-26v-20"
              stroke="#8FD8A0"
              strokeWidth="1.5"
            />
            <motion.rect
              x="178"
              y="98"
              width="64"
              height="22"
              rx="3"
              stroke="#FF9E6D"
              strokeWidth="1.5"
              animate={{ opacity: [0.65, 1, 0.65] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <text x="180" y="92" fill="#FF9E6D" fontSize="8" fontFamily="monospace">
              PLATE LOCKED
            </text>
          </svg>

          <div className="relative z-10 flex items-center justify-between font-mono-tech text-[10px] text-[#98A29D]">
            <span>CROSS-FRAME VOTING · REDIS STREAMS</span>
            <span>87.6% EXACT</span>
          </div>
        </div>
      ) : isSearch ? (
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 rounded-lg border border-[#D4D1C8] bg-[#FFFFFF] p-4 dark:border-[#2C3338] dark:bg-[#171B1E]">
          <div className="flex w-full max-w-[300px] items-center justify-between rounded-lg border border-[#E4E2DC] bg-[#F7F6F2] px-3 py-2 text-xs text-[#596066] dark:border-[#2D3236] dark:bg-[#111416] dark:text-[#A8AEB2]">
            <span className="flex items-center gap-2">
              <Search className="h-3.5 w-3.5 text-[#C2410C] dark:text-[#FF9E6D]" />
              <span>ergonomic desk setup...</span>
            </span>
            <span className="font-mono-tech text-[10px]">pgvector</span>
          </div>
          <div className="grid w-full max-w-[300px] grid-cols-3 gap-2 text-center font-mono-tech text-[10px]">
            {[
              { label: 'INTENT', score: '0.94' },
              { label: 'CONTEXT', score: '0.89' },
              { label: 'SYNONYM', score: '0.84' },
            ].map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="rounded-md border border-[#E4E2DC] bg-[#FAF9F6] px-2 py-2 transition-transform duration-150 group-hover:-translate-y-0.5 dark:border-[#262A2D] dark:bg-[#1D2226]"
              >
                <p className="text-[#596066] dark:text-[#A8AEB2]">{item.label}</p>
                <p className="mt-0.5 font-semibold text-[#C2410C] dark:text-[#FF9E6D]">{item.score}</p>
              </motion.div>
            ))}
          </div>
        </div>
      ) : isCalendar ? (
        <div className="flex h-full w-full flex-col justify-between rounded-lg border border-[#D4D1C8] bg-[#FFFFFF] p-4 dark:border-[#2C3338] dark:bg-[#171B1E]">
          <div className="flex items-center justify-between border-b border-[#E4E2DC] pb-2.5 dark:border-[#262A2D]">
            <span className="flex items-center gap-1.5 text-xs font-semibold text-[#14171A] dark:text-[#F4F1EA]">
              <CalendarDays className="h-3.5 w-3.5 text-[#4F46E5] dark:text-[#93C5FD]" />
              <span>calendro.ir</span>
            </span>
            <span className="font-mono-tech text-[10px] text-[#596066] dark:text-[#A8AEB2]">
              JALALI SCHEDULE
            </span>
          </div>
          <div className="mt-3 grid grid-cols-5 gap-2">
            {['SAT', 'SUN', 'MON', 'TUE', 'WED'].map((day, idx) => (
              <div key={day} className="space-y-1.5 text-center">
                <p className="font-mono-tech text-[10px] text-[#596066] dark:text-[#A8AEB2]">{day}</p>
                <div
                  className={`rounded-md py-1 font-mono-tech text-xs font-semibold transition-transform duration-200 group-hover:-translate-y-0.5 ${
                    idx === 2
                      ? 'bg-[#4F46E5] text-white dark:bg-[#818CF8] dark:text-[#0F172A]'
                      : 'bg-[#F3F2EE] text-[#14171A] dark:bg-[#222629] dark:text-[#F4F1EA]'
                  }`}
                >
                  {14 + idx}
                </div>
                <div className="h-2 rounded-sm bg-[#4F46E5]/25 dark:bg-[#818CF8]/30" />
                {idx % 2 === 0 && (
                  <div className="h-2 rounded-sm bg-[#C2410C]/25 dark:bg-[#FF9E6D]/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex h-full w-full flex-col justify-between rounded-lg border border-[#D4D1C8] bg-[#FFFFFF] p-4 dark:border-[#2C3338] dark:bg-[#171B1E]">
          <div className="flex items-center justify-between border-b border-[#E4E2DC] pb-2.5 dark:border-[#262A2D]">
            <span className="flex items-center gap-1.5 text-xs font-semibold text-[#14171A] dark:text-[#F4F1EA]">
              <ShoppingBag className="h-3.5 w-3.5 text-[#C2410C] dark:text-[#FF9E6D]" />
              <span>{slug === 'nexcart' ? 'nexcart.ir' : slug}</span>
            </span>
            <span className="font-mono-tech text-[10px] text-[#596066] dark:text-[#A8AEB2]">
              MULTI-TENANT
            </span>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {[
              { k: 'STORES', v: 'Multi' },
              { k: 'SSL', v: 'Auto' },
              { k: 'UPTIME', v: '99.9%' },
            ].map((item) => (
              <div
                key={item.k}
                className="rounded-md bg-[#F7F6F2] px-2.5 py-2 dark:bg-[#1E2226]"
              >
                <p className="font-mono-tech text-[9px] text-[#596066] dark:text-[#A8AEB2]">{item.k}</p>
                <p className="mt-0.5 font-mono-tech text-xs font-semibold text-[#14171A] dark:text-[#F4F1EA]">
                  {item.v}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-3 flex h-10 items-end gap-1.5">
            {[35, 58, 44, 72, 65, 92, 78, 86, 100, 82].map((h, i) => (
              <motion.div
                key={i}
                initial={{ scaleY: 0.25, opacity: 0.5 }}
                whileInView={{ scaleY: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.03, ease: [0.16, 1, 0.3, 1] }}
                style={{ height: `${h}%`, transformOrigin: 'bottom' }}
                className="flex-1 rounded-t-xs bg-[#C2410C]/75 transition-colors duration-150 group-hover:bg-[#C2410C] dark:bg-[#FF9E6D]/75 dark:group-hover:bg-[#FF9E6D]"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
