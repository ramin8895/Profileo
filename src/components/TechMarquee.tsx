const ITEMS = [
  'React',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'NestJS',
  'Prisma',
  'PostgreSQL',
  'Python',
  'YOLOv8',
  'OpenCV',
  'FastAPI',
  'Redis Streams',
  'C# / .NET',
  'Blazor',
  'React Native',
];

export function TechMarquee() {
  const repeated = [...ITEMS, ...ITEMS];

  return (
    <div
      dir="ltr"
      aria-hidden="true"
      className="group overflow-hidden border-b border-[#E4E2DC] bg-[#ECEAE3]/55 py-4 dark:border-[#262A2D] dark:bg-[#111315]"
    >
      <div className="animate-marquee flex w-max items-center gap-8 whitespace-nowrap">
        {repeated.map((tech, idx) => (
          <div key={`${tech}-${idx}`} className="flex items-center gap-8">
            <span className="font-mono-tech text-xs font-medium tracking-wide text-[#596066] transition-colors group-hover:text-[#14171A] dark:text-[#A8AEB2] dark:group-hover:text-[#F4F1EA]">
              {tech}
            </span>
            <span className="text-[10px] text-[#C2410C]/70 dark:text-[#FF9E6D]/70">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
