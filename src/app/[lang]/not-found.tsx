'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { isLocale, tr } from '@/lib/content';
export default function NotFound(){const raw=usePathname().split('/')[1];const lang=isLocale(raw)?raw:'fa';return <main className="container error-page" id="main"><span>404</span><h1>{tr('این صفحه پیدا نشد.','This page couldn’t be found.','ページが見つかりません。')[lang]}</h1><Link href={`/${lang}`} className="button button-primary">{tr('بازگشت به خانه','Back to home','ホームへ戻る')[lang]}</Link></main>;}
