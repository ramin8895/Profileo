import { ArrowUpRight, Download, MapPin, Code2, Layers3, Cpu, GraduationCap, BadgeCheck, Mail, Check } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { copy, isLocale, profile } from '@/lib/content';
import { x, docs, docLabel } from '@/lib/extra';
import { HeroVisual } from '@/components/visuals';
import { ProjectsGrid } from '@/components/projects-grid';
import { Contact } from '@/components/footer';
import { ResearchSection } from '@/components/research';
import { RemoteSection } from '@/components/remote';

export default async function Home({params}:{params:Promise<{lang:string}>}) {
  const {lang}=await params; if(!isLocale(lang)) notFound();
  const facts: [typeof x.cardRole, string | typeof x.cardRole][] = [[x.cardRole,x.cardRoleV],[x.cardStack,'React · Next.js · TypeScript'],[x.cardBase,x.cardBaseV],[x.cardLang,x.cardLangV],[x.cardOpen,x.cardOpenV]];
  return <main id="main">
    <section className="hero container">
      <div className="hero-copy">
        <p className="hero-eyebrow"><span/>{copy.eyebrow[lang]}</p>
        <h1>{copy.hero1[lang]}<br/><span>{copy.hero2[lang]}</span></h1>
        <p className="hero-description">{copy.intro[lang]}</p>
        <div className="hero-buttons"><a className="button button-primary" href={`mailto:${profile.email}`}>{x.heroContact[lang]}<Mail size={18}/></a><a className="button button-ghost" href={lang==='ja'?docs.ja:docs.en} download>{lang==='ja'?docLabel.jaShort[lang]:x.heroResume[lang]}<Download size={17}/></a><a className="text-link hero-work" href="#work">{copy.viewWork[lang]}<ArrowUpRight size={17}/></a></div>
        <p className="hero-location"><MapPin size={14}/>{copy.location[lang]}</p>
      </div>
      <HeroVisual>
        <aside className="hero-card" aria-label={profile.name[lang]}>
          <div className="hero-card-head"><span className="hero-card-mark" dir="ltr" aria-hidden="true">r<i>.</i></span><div><strong>{profile.name[lang]}</strong><small>{lang==='fa'?'توسعه‌دهنده فرانت‌اند':lang==='ja'?'フロントエンド開発者':'Frontend Developer'}</small></div></div>
          <dl className="hero-facts">{facts.map(([k,v],i)=><div key={i}><dt>{k[lang]}</dt><dd dir={i===1?'ltr':undefined}>{typeof v==='string'?v:v[lang]}</dd></div>)}</dl>
          <div className="hero-live"><span>{x.cardLive[lang]}</span><div dir="ltr"><a href="https://nexcart.ir" target="_blank" rel="noopener noreferrer"><i/>nexcart.ir<ArrowUpRight size={13}/></a><a href="https://calendro.ir" target="_blank" rel="noopener noreferrer"><i/>calendro.ir<ArrowUpRight size={13}/></a></div></div>
        </aside>
      </HeroVisual>
    </section>
    <div className="tech-strip"><div className="container tech-strip-inner" dir="ltr">{['React','Next.js','TypeScript','NestJS','Python','Blazor'].map(t=><span key={t}><i>✳</i>{t}</span>)}</div></div>
    <div className="container stats-strip">{[['2023','↗',copy.stat1],['02','+',copy.stat2],['09','+',copy.stat3],['01','',x.stat4]].map(([n,suf,label],i)=><div className="stat" key={i}><strong dir="ltr">{n as string}<span>{suf as string}</span></strong><p>{(label as typeof x.stat4)[lang]}</p></div>)}</div>
    <section className="container work-section" id="work"><div className="section-heading"><div><p className="section-label">{copy.selectedLabel[lang]}</p><h2>{copy.selectedTitle[lang]}</h2></div><p className="section-description">{copy.selectedIntro[lang]}</p></div><ProjectsGrid lang={lang}/></section>
    <section className="about-section" id="about"><div className="container"><p className="section-label">{copy.aboutLabel[lang]}</p><div className="about-grid"><div><h2>{copy.aboutTitle[lang]}</h2></div><div className="about-content"><p>{copy.aboutBody[lang]}</p><p>{copy.aboutBody2[lang]}</p><div className="spoken-languages">{copy.spoken[lang]}</div><a className="text-link" href="/ramin-hamehpour-resume.pdf" download>{copy.resume[lang]}<Download size={17}/></a></div></div><div className="stack-section"><h3>{copy.stackTitle[lang]}</h3><div className="stack-grid">{[{icon:Code2,label:copy.frontend,items:['React','Next.js','TypeScript','Tailwind CSS','React Native','Zustand','TanStack Query']},{icon:Layers3,label:copy.backend,items:['Node.js','NestJS','Prisma','C# / .NET','Blazor','PostgreSQL','Redis']},{icon:Cpu,label:copy.aiTools,items:['Python','YOLOv8','OpenCV','FastAPI','Docker','Nginx','Git']}].map(g=><div className="stack-card" key={g.label.en}><g.icon size={23}/><h4>{g.label[lang]}</h4><div className="stack-tags" dir="ltr">{g.items.map(s=><span key={s}>{s}</span>)}</div></div>)}</div></div></div></section>
    <section className="container experience-section" id="experience"><div className="section-heading"><div><p className="section-label">{copy.experienceLabel[lang]}</p><h2>{copy.experienceTitle[lang]}</h2></div></div><div className="experience-grid"><div className="timeline">
      <article className="job-card"><div className="timeline-mark"/><span className="job-date">{copy.jobDate[lang]}</span><h3>{copy.job[lang]}</h3><p className="company-name">{copy.company[lang]}</p><p className="job-description">{x.jobLead[lang]}</p><ul className="job-bullets">{x.jobBullets.map((b,i)=><li key={i}><Check size={15} aria-hidden="true"/>{b[lang]}</li>)}</ul><div className="stack-tags" dir="ltr">{x.jobStack.map(t=><span key={t}>{t}</span>)}</div></article>
      <article className="job-card"><div className="timeline-mark"/><span className="job-date">{x.indDate[lang]}</span><h3>{x.indTitle[lang]}</h3><p className="job-description">{x.indBody[lang]}</p><Link className="text-link" href={`/${lang}#work`}>{copy.viewWork[lang]}<ArrowUpRight size={16}/></Link></article>
      <article className="job-card"><div className="timeline-mark"/><span className="job-date">{x.b2bDate[lang]}</span><h3>{x.b2bTitle[lang]}</h3><p className="job-description">{x.b2bBody[lang]}</p><div className="stack-tags" dir="ltr">{['Next.js','Ant Design','REST API'].map(t=><span key={t}>{t}</span>)}</div></article>
    </div><div className="education-stack"><article><GraduationCap size={24}/><div><h3>{copy.education[lang]}</h3><p>{copy.university[lang]}</p><small>{copy.studying[lang]}</small></div></article><article><BadgeCheck size={24}/><div><h3>{copy.certification[lang]}</h3><p>{copy.certDetail[lang]}</p></div></article></div></div></section>
    <RemoteSection lang={lang}/>
    <ResearchSection lang={lang}/>
    <Contact lang={lang}/>
  </main>;
}
