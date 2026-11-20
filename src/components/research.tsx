import Image from 'next/image';
import { ArrowUpRight, Download, FileText } from 'lucide-react';
import type { Locale } from '@/lib/content';
import { research } from '@/lib/research';

export function ResearchSection({ lang, embedded = false }: { lang: Locale; embedded?: boolean }) {
  return <section className={`research-section ${embedded ? 'research-embedded' : 'container'}`} id="research" aria-labelledby="research-title">
    <p className="section-label">{research.label[lang]}</p>
    <article className="research-card">
      <a className="research-cover" href={research.file} target="_blank" rel="noopener noreferrer" aria-label={research.read[lang]}>
        <Image src={research.cover} alt={research.coverAlt[lang]} width={500} height={707} sizes="(max-width: 600px) 200px, 220px" />
        <span className="research-cover-caption"><FileText size={14} aria-hidden="true"/>PDF<span dir="ltr">10</span></span>
      </a>
      <div className="research-content">
        <div className="research-meta"><span>{research.format[lang]}</span><span>{new Intl.NumberFormat(lang).format(research.pages)} {research.pageUnit[lang]}</span></div>
        <h2 id="research-title">{research.title[lang]}</h2>
        <p className="research-authors">{research.authors[lang]}</p>
        <p className="research-description">{research.description[lang]}</p>
        <div className="research-tags stack-tags" dir="ltr">{['Computer Vision', 'ANPR', 'Redis Streams', 'Multi-camera'].map(tag=><span key={tag}>{tag}</span>)}</div>
        <div className="research-actions">
          <a className="button button-primary" href={research.file} target="_blank" rel="noopener noreferrer">{research.read[lang]}<ArrowUpRight size={18} aria-hidden="true"/></a>
          <a className="button button-ghost" href={research.file} download="ramin-hamehpour-multinational-anpr.pdf">{research.download[lang]}<Download size={17} aria-hidden="true"/></a>
        </div>
      </div>
    </article>
  </section>;
}
