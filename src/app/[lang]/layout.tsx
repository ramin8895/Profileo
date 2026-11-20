import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import '@fontsource-variable/manrope';
import '@fontsource-variable/vazirmatn';
import '@fontsource/noto-sans-jp/400.css';
import '@fontsource/noto-sans-jp/700.css';
import '../globals.css';
import '../portfolio.css';
import '../refine.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { copy, isLocale, locales, profile } from '@/lib/content';
import { x } from '@/lib/extra';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000');

export function generateStaticParams() { return locales.map(lang=>({lang})); }
export async function generateMetadata({params}: {params: Promise<{lang:string}>}): Promise<Metadata> {
  const {lang} = await params;
  if(!isLocale(lang)) return {};
  const role = x.schemaRole[lang];
  const title = `${profile.name[lang]} | ${role}`;
  const description = copy.intro[lang];
  const ogImage = {url:'/og.png',width:1200,height:630,alt:title};
  return {metadataBase:new URL(siteUrl), title:{default:title, template:`%s | ${profile.name[lang]}`}, description, authors:[{name:'Ramin Hamehpour'}], applicationName:'Ramin Hamehpour Portfolio',
    alternates:{canonical:`/${lang}`, languages:{fa:'/fa',en:'/en',ja:'/ja','x-default':'/en'}},
    openGraph:{title,description,type:'website',url:`/${lang}`,locale:{fa:'fa_IR',en:'en_US',ja:'ja_JP'}[lang],images:[ogImage]},
    twitter:{card:'summary_large_image',title,description,images:['/og.png']}, icons:{icon:'/icon.svg'}};
}
export default async function LocaleLayout({children, params}:{children:React.ReactNode;params:Promise<{lang:string}>}) {
  const {lang}=await params;
  if(!isLocale(lang)) notFound();
  const jsonLd={'@context':'https://schema.org','@type':'Person',name:profile.name.en,alternateName:profile.name[lang],jobTitle:'Frontend Developer',email:profile.email,sameAs:[profile.github,profile.linkedin],knowsAbout:['React','Next.js','TypeScript','NestJS','C#','Blazor','Python','Computer vision'],knowsLanguage:['ku','fa','en'],worksFor:{'@type':'Organization',name:'Rayan Afzar Parsian'},homeLocation:{'@type':'Place',name:'Tehran, Iran'}};
  return <html lang={lang} dir={lang==='fa'?'rtl':'ltr'}><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd).replace(/</g,'\\u003c')}}/><a className="skip-link" href="#main">{copy.skip[lang]}</a><Header lang={lang}/>{children}<Footer lang={lang}/></body></html>;
}
