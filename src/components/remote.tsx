import { Clock, Languages, Rocket, Users } from 'lucide-react';
import { copy, type Locale } from '@/lib/content';
import { x } from '@/lib/extra';

export function RemoteSection({ lang }: { lang: Locale }) {
  const cards = [
    { icon: Languages, title: x.langTitle, body: x.langBody },
    { icon: Rocket, title: x.soloTitle, body: x.soloBody },
    { icon: Users, title: x.teamTitle, body: x.teamBody },
  ];
  return <section className="remote-section" id="remote"><div className="container">
    <div className="section-heading"><div><p className="section-label">{x.remoteLabel[lang]}</p><h2 className="pre-line">{x.remoteTitle[lang]}</h2></div><p className="section-description">{x.remoteIntro[lang]}</p></div>
    <div className="remote-grid">
      <article className="remote-card remote-tz">
        <Clock size={22} aria-hidden="true"/>
        <h3>{x.tzTitle[lang]}</h3>
        <p className="tz-value" dir="ltr">{x.tzValue[lang]}</p>
        <p className="tz-note">{x.tzNote[lang]}</p>
        <div className="tz-bar" role="img" aria-label={x.tzBar[lang]} dir="ltr">
          <div className="tz-track"><span className="tz-window" style={{left:`${3.5/24*100}%`,width:`${9/24*100}%`}}/></div>
          <div className="tz-ticks">{['00','06','12','18','24'].map(t=><span key={t}>{t}</span>)}</div>
        </div>
        <p className="tz-caption">{x.tzBar[lang]}</p>
      </article>
      {cards.map(c=><article className="remote-card" key={c.title.en}><c.icon size={22} aria-hidden="true"/><h3>{c.title[lang]}</h3><p>{c.body[lang]}</p></article>)}
    </div>
  </div></section>;
}
