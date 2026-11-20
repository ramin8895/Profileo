import type React from 'react';
import { CalendarDays, ShoppingBag, Search, Command, ChevronDown, MoreHorizontal } from 'lucide-react';

export function HeroVisual({ children }: { children?: React.ReactNode }) {
  return <div className="hero-visual">
    <div className="visual-grid" aria-hidden="true" />
    <div className="orbit-wrap" aria-hidden="true">
      <svg className="orbit-art" viewBox="0 0 560 540" fill="none">
        <defs><radialGradient id="orb-glow"><stop stopColor="#ff7139" stopOpacity=".28"/><stop offset="1" stopColor="#ff7139" stopOpacity="0"/></radialGradient><linearGradient id="orb-stroke" x1="130" y1="100" x2="450" y2="440"><stop stopColor="#ffbf94"/><stop offset=".5" stopColor="#fa7139"/><stop offset="1" stopColor="#7d321e"/></linearGradient></defs>
        <circle cx="280" cy="265" r="245" fill="url(#orb-glow)"/>
        <g stroke="url(#orb-stroke)" strokeWidth=".85" transform="rotate(-25 280 265)">
          <circle cx="280" cy="265" r="170"/>
          {Array.from({length:11},(_,i)=><ellipse key={`v${i}`} cx="280" cy="265" rx={18+i*14} ry="170"/>)}
          {Array.from({length:11},(_,i)=>{const y=120+i*29;const rx=Math.sqrt(Math.max(0,170**2-(y-265)**2));return <ellipse key={`h${i}`} cx="280" cy={y} rx={rx} ry={rx*.13}/>;})}
        </g>
        <ellipse cx="280" cy="265" rx="249" ry="83" transform="rotate(-32 280 265)" stroke="#d3d0c9" strokeOpacity=".3" strokeDasharray="3 7"/>
        <circle cx="473" cy="142" r="5" fill="#ff9f72"/>
      </svg>
    </div>
    {children}
  </div>;
}

export function ProjectVisual({ slug, color, large = false }: { slug: string; color: string; large?: boolean }) {
  const isCalendar = slug === 'calendro';
  const isVision = slug === 'coldino' || slug === 'smart-parking';
  const isSearch = slug === 'semantic-search';
  return <div className={`project-visual ${color} ${large ? 'large' : ''}`} aria-hidden="true" dir="ltr">
    <div className="preview-orbit orbit-one"/><div className="preview-orbit orbit-two"/>
    {isVision ? <div className="vision-scene"><div className="vision-top"><span className="record-dot"/> LIVE CAMERA <span>CAM_0{slug === 'coldino' ? '2' : '1'}</span></div><svg viewBox="0 0 500 240" fill="none"><path d="M0 230 200 25M500 230 300 25M250 240V30" stroke="currentColor" strokeOpacity=".13" strokeDasharray="12 15"/><path d="m165 153 13-60q3-12 16-12h112q13 0 16 12l13 60v50H165v-50Z" fill="#d2d9d3"/><path d="m189 95-10 46h142l-10-46Z" fill="#293c36"/><rect x="174" y="160" width="33" height="12" rx="5" fill="#f4f6e2"/><rect x="293" y="160" width="33" height="12" rx="5" fill="#f4f6e2"/><rect x="226" y="177" width="48" height="16" rx="2" fill="#fff"/><path d="M150 105V69h39m122 0h39v36m0 80v36h-39m-122 0h-39v-36" stroke="#a5fcb1" strokeWidth="2"/><rect x="217" y="169" width="66" height="32" rx="3" stroke="#a5fcb1" strokeWidth="1.5"/><text x="219" y="158" fill="#a5fcb1" fontSize="10" fontFamily="monospace">PLATE DETECTED</text></svg><div className="vision-footer"><span>YOLOv8 · REAL-TIME RECOGNITION</span><span className="status-dot"/></div></div>
    : isSearch ? <div className="search-scene"><div className="search-icon"><Search size={27}/></div><span>BEYOND KEYWORDS</span><div className="search-input"><Search size={17}/><span>Find something meaningful</span><kbd>↵</kbd></div><div className="semantic-lines"><i/><i/><i/></div><div className="search-results">{['CONTEXT','INTENT','MEANING'].map((s,i)=><div key={s}><span className={`semantic-node node-${i}`}/><small>{s}</small></div>)}</div></div>
    : <div className={`mock-window ${isCalendar ? 'calendar-window' : ''}`}><div className="mock-top"><span className="mock-logo">{isCalendar ? <CalendarDays size={17}/> : <ShoppingBag size={17}/>} {isCalendar ? 'calendro' : slug === 'nexcart' ? 'nexcart' : 'workspace'}<b>.</b></span><span className="mock-search"/><span className="mock-avatar">R</span></div><div className="mock-body"><aside><i className="active"/><i/><i/><i/><i/><div/></aside><div className="mock-content"><div className="mock-heading"><div><small>{isCalendar ? 'YOUR TIME, WELL ORGANIZED' : 'A LITTLE CLARITY, EVERY DAY'}</small><strong>{isCalendar ? 'Your schedule' : slug === 'nexcart' ? 'Store overview' : 'Workspace overview'}</strong></div><MoreHorizontal size={17}/></div>{isCalendar ? <><div className="mock-calendar-title"><span>April, 2026</span><ChevronDown size={12}/><span>Week view</span></div><div className="calendar-grid">{['MON','TUE','WED','THU','FRI'].map((d,i)=><div key={d}><small>{d}</small><b className={i===2?'active-date':''}>{13+i}</b><i className={`appointment app-${i}`}/>{i%2===0&&<i className="appointment app-extra"/>}</div>)}</div></> : <><div className="mini-stats">{['OVERVIEW','ACTIVITY','GROWTH'].map((s,i)=><div key={s}><small>{s}</small><b>{['24,860','1,284','32.4%'][i]}</b><em>↗</em></div>)}</div><div className="mock-chart"><span>Activity overview</span><div className="chart-bars">{[30,52,38,70,56,90,68,80,100,73,95,85,112,97].map((h,i)=><i key={i} style={{height:`${h/1.4}%`}}/>)}</div></div><div className="mock-table"><span/><span/><span/></div></>}</div></div></div>}
  </div>;
}
