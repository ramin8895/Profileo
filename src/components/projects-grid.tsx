'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { copy, type Locale, type Project } from '@/lib/content';
import { projects } from '@/lib/projects';
import { ProjectVisual } from './visuals';

export function ProjectsGrid({ lang }: { lang: Locale }) {
  const [filter, setFilter] = useState<'all' | Project['category']>('all');
  const visible = projects.filter(p=>filter==='all'||p.category===filter);
  return <><div className="project-filters" role="group" aria-label={copy.work[lang]}>{(['all','saas','enterprise','ai'] as const).map(f=><button key={f} onClick={()=>setFilter(f)} aria-pressed={filter===f} className={filter===f?'active':''}>{copy[f][lang]}<span>{f==='all' ? projects.length : projects.filter(p=>p.category===f).length}</span></button>)}</div>
    <div className="sr-only" role="status">{new Intl.NumberFormat(lang).format(visible.length)} {copy.work[lang]}</div>
    <div className="projects-grid">{visible.map(p=><article key={p.slug} className={`project-card${p.category==='enterprise'?' plain':''}`}><Link href={`/${lang}/projects/${p.slug}`} className="project-link">{p.category==='enterprise'?<div className="plain-head"><span className={`project-status inline ${p.status}`}><i/>{copy[p.status][lang]}</span></div>:<div className="card-visual"><ProjectVisual slug={p.slug} color={p.color}/><span className={`project-status ${p.status}`}><i/>{copy[p.status][lang]}</span><span className="card-arrow"><ArrowUpRight size={21}/></span></div>}<div className="card-meta"><span>{copy[p.category][lang]}</span><span dir="ltr">{p.year}</span></div><div className="card-name"><h3 dir="ltr">{p.name}<span>.</span></h3><span className="project-index" aria-hidden="true">{String(projects.indexOf(p)+1).padStart(2,'0')}</span></div><p>{p.summary[lang]}</p><div className="card-bottom"><div className="card-stack" dir="ltr">{p.stack.slice(0,3).map(t=><span key={t}>{t}</span>)}</div><span className="card-detail">{copy.details[lang]}<ArrowUpRight size={15}/></span></div></Link></article>)}</div>
  </>;
}
