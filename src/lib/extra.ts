import { tr } from './content';

export const x = {
  remote: tr('ریموت', 'Remote', 'リモート'),
  // hero profile card
  cardRole: tr('نقش', 'Role', '職種'),
  cardRoleV: tr('توسعه‌دهنده فرانت‌اند · فول‌استک', 'Frontend engineer · Full-stack', 'フロントエンド（フルスタック対応）'),
  cardStack: tr('تخصص اصلی', 'Core stack', '主な技術'),
  cardBase: tr('محل و منطقه زمانی', 'Location', '拠点'),
  cardBaseV: tr('تهران · UTC+3:30', 'Tehran · UTC+3:30', 'テヘラン · UTC+3:30'),
  cardLang: tr('زبان‌ها', 'Languages', '言語'),
  cardLangV: tr('کردی، فارسی، انگلیسی', 'Kurdish, Persian, English', 'クルド語・ペルシャ語・英語'),
  cardOpen: tr('جست‌وجوی', 'Looking for', '希望'),
  cardOpenV: tr('موقعیت ریموت', 'Remote roles', 'リモート勤務'),
  cardLive: tr('محصولات در حال اجرا', 'In production', '稼働中のプロダクト'),
  heroResume: tr('دریافت رزومه', 'Download résumé', '履歴書をダウンロード'),
  heroContact: tr('تماس با من', 'Get in touch', 'ご連絡はこちら'),
  stat4: tr('مقاله پژوهشی منتشرشده', 'Research paper authored', '執筆した研究論文'),

  // remote section
  remoteLabel: tr('۰۴ / همکاری ریموت', '04 / WORKING REMOTELY', '04 / リモートでの働き方'),
  remoteTitle: tr('آماده کار ریموت\nبا تیم ژاپنی.', 'Ready to work\nwith a Japanese team.', '日本のチームと、\nリモートで働くために。'),
  remoteIntro: tr('در تهران زندگی می‌کنم و هم‌اکنون نرم‌افزار عملیاتی را مستقل و مسئولانه می‌سازم. اطلاعات عملی همکاری از راه دور:', 'I’m based in Tehran and already build and maintain production software with minimal supervision. The practical details:', 'テヘランを拠点に、本番運用のソフトウェアを自律的に開発・保守しています。実務上のポイントは次のとおりです。'),
  tzTitle: tr('منطقه زمانی', 'Time zone', 'タイムゾーン'),
  tzValue: tr('تهران · UTC+3:30', 'Tehran · UTC+3:30', 'テヘラン · UTC+3:30'),
  tzNote: tr('پنج‌ونیم ساعت عقب‌تر از توکیو (JST، UTC+9).', '5.5 hours behind Tokyo (JST, UTC+9).', '東京（JST、UTC+9）より5.5時間遅れ。'),
  tzBar: tr('ساعت کاری ژاپن (۰۹:۰۰–۱۸:۰۰ JST) به وقت تهران: ۰۳:۳۰–۱۲:۳۰', 'Japanese business hours (09:00–18:00 JST) in Tehran time: 03:30–12:30', '日本の就業時間（9:00–18:00 JST）はテヘラン時間で 3:30–12:30'),
  langTitle: tr('زبان‌ها', 'Languages', '使用言語'),
  langBody: tr('کردی (زبان مادری)، فارسی (مسلط)، انگلیسی (حرفه‌ای).', 'Kurdish (native), Persian (fluent), English (professional).', 'クルド語（母語）、ペルシャ語（流暢）、英語（ビジネスレベル）。'),
  soloTitle: tr('مالکیت از ابتدا تا انتها', 'End-to-end ownership', '企画から運用まで一貫して担当'),
  soloBody: tr('دو محصول SaaS و یک سامانه پارکینگ را به‌تنهایی طراحی، پیاده‌سازی و مستقر کرده‌ام و نگهداری می‌کنم.', 'I designed, built, deployed and maintain two SaaS products and a live parking system on my own.', 'SaaS2本と稼働中の駐車場システムを、設計・実装・公開・保守まで一人で担当しています。'),
  teamTitle: tr('کار تیمی و مستندسازی', 'Teamwork and documentation', 'チーム開発とドキュメント'),
  teamBody: tr('در یک پروژه تیمی یک‌ساله با تیم بک‌اند از طریق REST API همکاری کردم و معماری یک سامانه را در قالب مقاله پژوهشی مستند کردم.', 'I worked with a backend team over REST APIs on a year-long project, and documented a system architecture in a research paper.', '約1年のチーム開発でバックエンドチームとREST APIを介して連携し、システム設計を研究論文として文書化しました。'),

  // experience
  jobLead: tr('توسعه‌دهنده اصلی شرکت؛ مجموعه نرم‌افزارهای داخلی را از پایه با C# و Blazor ساختم.', 'Primary developer. Built the company’s internal software suite from scratch with C# and Blazor.', '主担当の開発者として、社内向けソフトウェア群をC#とBlazorで一から構築。'),
  jobBullets: [
    tr('سامانه اتوماسیون اداری: مکاتبات و تأییدیه‌ها', 'Office automation: correspondence and approvals', '文書管理・承認ワークフローの業務システム'),
    tr('CMMS: مدیریت تجهیزات و نگهداری پیشگیرانه (کاملاً راست‌به‌چپ)', 'CMMS: equipment and preventive maintenance (fully RTL)', 'CMMS：設備管理と予防保全（完全RTL対応）'),
    tr('نرم‌افزار توزیع و لجستیک برای یک مشتری', 'Distribution and logistics software for a client', '顧客向け流通・物流ソフトウェア'),
    tr('Coldino: پلاک‌خوان چنددوربینه و بلادرنگ (Python، YOLOv8)', 'Coldino: real-time multi-camera plate recognition (Python, YOLOv8)', 'Coldino：複数カメラ対応のリアルタイム認識（Python、YOLOv8）'),
    tr('اتصال کارت‌خوان PAX S800 به سیستم فروش Blazor', 'PAX S800 payment terminal integrated into a Blazor POS', 'PAX S800決済端末をBlazor製POSへ統合'),
  ],
  indTitle: tr('توسعه‌دهنده محصولات مستقل', 'Independent product developer', '個人プロダクト開発者'),
  indDate: tr('۲۰۲۶', '2026', '2026年'),
  indBody: tr('NexCart و Calendro (SaaS عملیاتی)، Smart Parking (مستقر در پارکینگ واقعی) و Semantic Search (در حال توسعه).', 'NexCart and Calendro (production SaaS), Smart Parking (deployed in a real lot) and Semantic Search (in development).', 'NexCart・Calendro（稼働中SaaS）、Smart Parking（実際の駐車場で稼働）、Semantic Search（開発中）。'),
  b2bTitle: tr('توسعه‌دهنده فرانت‌اند · پلتفرم توزیع B2B', 'Frontend developer · B2B distribution platform', 'フロントエンド開発 · B2B流通プラットフォーム'),
  b2bDate: tr('۲۰۲۵ · پروژه تیمی یک‌ساله', '2025 · Year-long team project', '2025年 · 約1年のチーム開発'),
  b2bBody: tr('توسعه رابط کاربری با Next.js و Ant Design و یکپارچه‌سازی داده‌های REST API.', 'UI development with Next.js and Ant Design, integrating data through REST APIs.', 'Next.jsとAnt Designで画面を開発し、REST APIのデータを連携。'),
  jobStack: ['C#', 'Blazor', 'ASP.NET Core', 'Python', 'SQL Server'],
  schemaRole: tr('توسعه‌دهنده فرانت‌اند', 'Frontend Developer', 'フロントエンド開発者'),
};

export const docs = {
  en: '/ramin-hamehpour-resume.pdf',
  ja: '/ramin-hamehpour-shokumu-keirekisho-ja.pdf',
};
export const docLabel = {
  en: tr('رزومه انگلیسی (PDF)', 'Résumé · English (PDF)', '英語の履歴書（PDF）'),
  ja: tr('رزومه ژاپنی — شوکوموکِیرکیشو (PDF)', 'Japanese career history · 職務経歴書 (PDF)', '職務経歴書・日本語（PDF）'),
  jaShort: tr('شوکوموکِیرکیشو (ژاپنی)', '職務経歴書 (Japanese)', '職務経歴書をダウンロード'),
};
