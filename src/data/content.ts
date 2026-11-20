export const locales = ['fa', 'en', 'ja'] as const;
export type Locale = (typeof locales)[number];
export type Localized = Record<Locale, string>;

export const tr = (fa: string, en: string, ja: string): Localized => ({ fa, en, ja });

export const profile = {
  name: tr('رامین حمه‌پور', 'Ramin Hamehpour', 'ラミン・ハメプール'),
  role: tr('توسعه‌دهنده فرانت‌اند و فول‌استک', 'Frontend & Full-Stack Engineer', 'フロントエンド・フルスタック開発者'),
  email: 'raminhamepour89@gmail.com',
  github: 'https://github.com/ramin8895',
  linkedin: 'https://www.linkedin.com/in/ramin-hamepour',
  liveProducts: [
    { name: 'nexcart.ir', url: 'https://nexcart.ir' },
    { name: 'calendro.ir', url: 'https://calendro.ir' },
  ],
};

export const docs = {
  en: '/ramin-hamehpour-resume.pdf',
  ja: '/ramin-hamehpour-shokumu-keirekisho-ja.pdf',
};

export const copy = {
  // Navigation
  navWork: tr('پروژه‌ها', 'Work', '実績'),
  navResearch: tr('پژوهش‌ها', 'Research', '研究論文'),
  navAbout: tr('درباره من', 'About', '概要'),
  navExperience: tr('مسیر حرفه‌ای', 'Experience', '経歴'),
  navRemote: tr('همکاری ریموت', 'Remote', 'リモート'),
  navContact: tr('گفت‌وگو کنیم', 'Get in touch', 'お問い合わせ'),
  skip: tr('رفتن به محتوای اصلی', 'Skip to content', '本文へスキップ'),
  menu: tr('منوی ناوبری', 'Navigation menu', 'メニュー'),

  // Utility bar
  themeLight: tr('روشن', 'Light', 'ライト'),
  themeDark: tr('تیره', 'Dark', 'ダーク'),

  // Hero
  eyebrow: tr('آماده همکاری ریموت · تهران (UTC+3:30)', 'Open to remote roles · Tehran (UTC+3:30)', 'リモート勤務募集中 · テヘラン (UTC+3:30)'),
  greeting: tr('سلام، من رامین حمه‌پور هستم', 'Hello, I’m Ramin Hamehpour', 'こんにちは、ラミン・ハメプールです'),
  hero1: tr('از طراحی تا انتشار،', 'From design to production,', '設計から公開まで、'),
  hero2: tr('محصول را تا انتها می‌رسانم.', 'I ship complete products.', '一貫して届けるエンジニア。'),
  intro: tr(
    'توسعه‌دهنده فرانت‌اند با دید فول‌استک؛ تخصص اصلی من React، Next.js و TypeScript است و در بک‌اند با NestJS، دات‌نت و Python کار می‌کنم. دو محصول SaaS را به‌تنهایی ساخته و مستقر کرده‌ام و به پژوهش در بینایی ماشین و یادگیری عمیق می‌پردازم.',
    'Frontend engineer with full-stack depth. React, Next.js, and TypeScript on the front; NestJS, .NET, and Python behind it. I independently built and run two production SaaS platforms alongside applied computer vision research.',
    'React・Next.js・TypeScriptを軸に、NestJS・.NET・Pythonまで扱えるフロントエンドエンジニアです。本番稼働中のSaaSを2本一人で構築・運用しながら、画像認識と深層学習の研究にも取り組んでいます。'
  ),
  viewWork: tr('مشاهده پروژه‌ها', 'Explore work', '制作実績を見る'),
  viewResearch: tr('مطالعه مقالات', 'Read research', '論文を読む'),
  heroResume: tr('دریافت رزومه', 'Download résumé', '履歴書をダウンロード'),
  heroContact: tr('ارسال ایمیل', 'Email me', 'メールで連絡'),
  copyEmail: tr('کپی ایمیل', 'Copy email', 'メールをコピー'),
  copied: tr('کپی شد', 'Copied', 'コピー済み'),

  // Profile Card
  cardRole: tr('تخصص', 'Role', '職種'),
  cardRoleV: tr('فرانت‌اند · فول‌استک', 'Frontend · Full-Stack', 'フロントエンド・フルスタック'),
  cardStack: tr('فناوری‌های اصلی', 'Core stack', '主な技術'),
  cardBase: tr('موقعیت و زمان', 'Location', '拠点'),
  cardBaseV: tr('تهران · UTC+3:30', 'Tehran · UTC+3:30', 'テヘラン · UTC+3:30'),
  cardLang: tr('زبان‌ها', 'Languages', '言語'),
  cardLangV: tr('کردی، فارسی، انگلیسی', 'Kurdish, Persian, English', 'クルド語・ペルシャ語・英語'),
  cardOpen: tr('هدف همکاری', 'Focus', '希望'),
  cardOpenV: tr('تیم‌های ریموت و بین‌المللی', 'Remote & international teams', 'リモート勤務（日本チーム歓迎）'),
  cardLive: tr('محصولات فعال در تولید', 'Live in production', '本番稼働中'),

  // Stats
  stat1: tr('شروع فعالیت حرفه‌ای', 'Building professionally since', '実務経験開始'),
  stat2: tr('محصول SaaS در حال اجرا', 'Production SaaS products', '稼働中のSaaS'),
  stat3: tr('پروژه تحویل‌شده و فعال', 'Shipped & active projects', '開発・公開プロジェクト'),
  stat4: tr('مقاله کنفرانس منتشرشده', 'Published conference papers', '発表済み学術論文'),

  // Work section
  selectedLabel: tr('۰۱. پروژه‌های منتخب', '01. Selected Work', '01. 制作実績'),
  selectedTitle: tr('ایده‌ها، در عمل.', 'Real problems. Shipped software.', '課題を、動くプロダクトへ。'),
  selectedIntro: tr(
    'از فروشگاه‌ساز چندمستاجری و اپلیکیشن نوبت‌دهی تا نرم‌افزارهای سازمانی و بینایی ماشین. با جست‌وجو یا انتخاب فناوری، پروژه‌ها را بررسی کنید.',
    'From multi-tenant commerce and mobile scheduling to enterprise .NET suites and real-time computer vision. Filter by discipline or search any technology.',
    'マルチテナントEC基盤や予約アプリから、業務システム、リアルタイム画像認識まで。分野や技術スタックで絞り込んでご覧いただけます。'
  ),
  searchPlaceholder: tr('جست‌وجو در نام پروژه یا فناوری (مثلاً Next.js، YOLOv8، Blazor)...', 'Search project or stack (e.g. Next.js, YOLOv8, Blazor)...', 'プロジェクト名や技術で検索（例: Next.js, YOLOv8）...'),
  clearFilter: tr('پاک کردن فیلتر', 'Clear filter', 'フィルターを解除'),
  filteredByTech: tr('فیلتر بر اساس فناوری:', 'Filtered by technology:', '技術で絞り込み中:'),
  noProjectsFound: tr('پروژه‌ای با این عبارت پیدا نشد.', 'No projects match this filter.', '該当するプロジェクトが見つかりませんでした。'),
  all: tr('همه پروژه‌ها', 'All', 'すべて'),
  saas: tr('وب و SaaS', 'Web & SaaS', 'Web・SaaS'),
  enterprise: tr('سازمانی', 'Enterprise', '業務システム'),
  ai: tr('هوش مصنوعی', 'AI & Vision', 'AI・画像認識'),
  details: tr('بررسی جزئیات', 'Case study', '詳細を見る'),
  live: tr('در حال استفاده', 'In production', '稼働中'),
  development: tr('در حال توسعه', 'In development', '開発中'),
  delivered: tr('تحویل‌شده', 'Delivered', '納品済み'),

  // Case study modal
  backProjects: tr('بستن و بازگشت به پروژه‌ها', 'Close case study', '一覧に戻る'),
  overview: tr('درباره پروژه', 'Overview', '概要'),
  challenge: tr('مسئله و چالش', 'The Challenge', '課題'),
  approach: tr('راهکار و معماری', 'The Approach', 'アプローチ'),
  features: tr('ویژگی‌های کلیدی', 'Key Capabilities', '主な機能'),
  technologies: tr('فناوری‌های استفاده‌شده', 'Built With', '使用技術'),
  role: tr('نقش من', 'Role', '担当'),
  year: tr('سال', 'Year', '年'),
  projectType: tr('نوع پروژه', 'Type', '種別'),
  status: tr('وضعیت', 'Status', 'ステータス'),
  visit: tr('مشاهده وب‌سایت', 'Visit live site', '公開サイトを見る'),
  merchantPanel: tr('پنل فروشنده', 'Merchant dashboard', '販売者管理画面'),
  prevProject: tr('پروژه قبلی', 'Previous', '前の実績'),
  nextProject: tr('پروژه بعدی', 'Next project', '次の実績'),
  previewCaption: tr('نمای مفهومی ساختار و رابط پروژه', 'Conceptual architecture & interface preview', '構成・UIコンセプトプレビュー'),
  relatedPaper: tr('پژوهش مرتبط با این سامانه', 'Related published research', '関連する発表論文'),

  // Research section
  researchLabel: tr('۰۲. پژوهش‌ها و مقالات علمی', '02. Published Research', '02. 研究・発表論文'),
  researchTitle: tr('از پیاده‌سازی صنعتی تا مقاله علمی.', 'From production systems to peer-reviewed papers.', '実務の知見を、学術論文へ。'),
  researchIntro: tr(
    'دو مقاله پذیرفته‌شده و منتشرشده در یازدهمین کنفرانس بین‌المللی ترکیبیات، رمزنگاری، علوم کامپیوتر و محاسبات (دانشگاه علم و صنعت ایران) در حوزه‌های بینایی ماشین و یادگیری عمیق.',
    'Two peer-reviewed papers published at the 11th International Conference on Combinatorics, Cryptography, Computer Science and Computing (i4c.iust.ac.ir), bridging computer vision architecture and deep learning in medical imaging.',
    '第11回組合せ論・暗号・計算機科学国際会議（i4c.iust.ac.ir）にて採択・発表された2本の論文です。画像認識システム設計と医用画像解析における深層学習を扱っています。'
  ),

  // About section
  aboutLabel: tr('۰۳. درباره من و ابزارها', '03. About & Toolkit', '03. 私について・技術スタック'),
  aboutTitle: tr('کنجکاو برای ساختن.\nدقیق در اجرا.', 'Curious by nature.\nThoughtful by design.', '好奇心を原動力に。\n細部まで、丁寧に。'),
  aboutBody: tr(
    'من رامین حمه‌پورم؛ مهندس نرم‌افزاری که از پیوند طراحی دقیق رابط کاربری و مهندسی بک‌اند لذت می‌برد. تمرکز اصلی من فرانت‌اند است، اما تجربه پیاده‌سازی سرور، پایگاه داده و بینایی ماشین کمک می‌کند محصول را یکپارچه ببینم و بسازم.',
    'I’m Ramin Hamehpour, a software engineer who enjoys where thoughtful UI craft meets solid systems engineering. Frontend architecture is my primary craft, backed by production experience across APIs, databases, and computer vision.',
    'デザイン性の高いUIと堅牢なバックエンドの接点を楽しむエンジニアです。フロントエンド設計を主軸に、APIやデータベース、画像認識パイプラインまで一貫して構築できます。'
  ),
  aboutBody2: tr(
    'از دیزاین سیستم و رابط‌های فارسی راست‌به‌چپ برای NexCart و Calendro تا نرم‌افزارهای سازمانی با C# / Blazor و پژوهش‌های یادگیری عمیق؛ برای من فناوری ابزاری برای حل مسائل واقعی است.',
    'From shared design tokens and RTL interfaces for NexCart and Calendro to enterprise C# / Blazor suites and deep learning research, technology is how I turn real operational problems into dependable tools.',
    'NexCartやCalendroのデザインシステム・RTL画面から、C# / Blazorの業務システム、深層学習の研究まで、現場の課題を解決する実用的なソフトウェアを作っています。'
  ),
  spoken: tr('زبان‌ها: کردی (مادری) · فارسی (مسلط) · انگلیسی (حرفه‌ای)', 'Languages: Kurdish (Native) · Persian (Fluent) · English (Proficient)', '言語: クルド語（母語） · ペルシャ語（流暢） · 英語（ビジネスレベル）'),
  stackTitle: tr('ابزارها و فناوری‌ها', 'Toolkit & Proof', '技術スタック（クリックで実績を表示）'),
  stackHint: tr('روی هر فناوری کلیک کنید تا پروژه‌های مرتبط نمایش داده شوند.', 'Click any technology below to filter matching projects.', '技術名をクリックすると該当プロジェクトを表示します。'),
  frontend: tr('فرانت‌اند و موبایل', 'Frontend & Mobile', 'フロントエンド・モバイル'),
  backend: tr('بک‌اند و داده', 'Backend & Data', 'バックエンド・データ'),
  aiTools: tr('هوش مصنوعی و زیرساخت', 'AI & Infrastructure', 'AI・インフラ'),

  // Experience section
  experienceLabel: tr('۰۴. مسیر حرفه‌ای و تحصیلات', '04. Experience & Education', '04. 職歴・学歴'),
  experienceTitle: tr('تجربه‌ای که به کد تبدیل شد.', 'Experience, put to work.', '実務で磨いた実装力。'),
  job: tr('توسعه‌دهنده اصلی فول‌استک', 'Lead Full-Stack Developer', '主担当フルスタック開発者'),
  company: tr('رایان افزار پارسیان', 'Rayan Afzar Parsian', 'Rayan Afzar Parsian'),
  jobDate: tr('۲۰۲۳ — اکنون', '2023 — Present', '2023年 — 現在'),
  jobLead: tr('توسعه‌دهنده اصلی شرکت؛ مجموعه نرم‌افزارهای داخلی را از پایه با C#، Blazor و Python ساختم.', 'Primary developer. Architected and delivered the company’s internal software suite from scratch with C#, Blazor, and Python.', '主担当の開発者として、社内向けソフトウェア群をC#・Blazor・Pythonで一から設計・構築。'),
  jobBullets: [
    tr('سامانه اتوماسیون اداری: مکاتبات، کارتابل و تأییدیه‌ها', 'Office automation: correspondence, routing, and approvals', '文書管理・承認ワークフローシステム'),
    tr('CMMS: مدیریت تجهیزات و نگهداری پیشگیرانه (کاملاً راست‌به‌چپ)', 'CMMS: equipment and preventive maintenance (fully RTL)', 'CMMS：設備管理・予防保全（完全RTL対応）'),
    tr('نرم‌افزار اختصاصی توزیع و لجستیک برای مشتری صنعتی', 'Custom distribution and logistics suite for an industrial client', '顧客向け流通・物流ソフトウェア'),
    tr('Coldino: ماژول پلاک‌خوان چنددوربینه و بلادرنگ (Python، YOLOv8)', 'Coldino: real-time multi-camera ANPR module (Python, YOLOv8)', 'Coldino：複数カメラ対応リアルタイム認識（Python、YOLOv8）'),
    tr('اتصال سخت‌افزاری کارت‌خوان PAX S800 به سیستم فروش Blazor', 'Hardware integration of PAX S800 payment terminal into Blazor POS', 'PAX S800決済端末のBlazor製POSへの統合'),
  ],
  indTitle: tr('بنیان‌گذار و توسعه‌دهنده محصولات مستقل', 'Independent Product Builder', '個人プロダクト開発'),
  indDate: tr('۲۰۲۶', '2026', '2026年'),
  indBody: tr('طراحی، توسعه و استقرار NexCart و Calendro (SaaS عملیاتی)، Smart Parking (مستقر در پارکینگ واقعی) و Semantic Search.', 'Designed, built, and deployed NexCart & Calendro (production SaaS), Smart Parking (live open-air deployment), and Semantic Search.', 'NexCart・Calendro（稼働中SaaS）、Smart Parking（実駐車場で稼働）、Semantic Searchを設計・開発・公開。'),
  b2bTitle: tr('توسعه‌دهنده فرانت‌اند · پلتفرم توزیع B2B', 'Frontend Developer · B2B Distribution Platform', 'フロントエンド開発 · B2B流通プラットフォーム'),
  b2bDate: tr('۲۰۲۵ · پروژه تیمی یک‌ساله', '2025 · Year-long team project', '2025年 · 約1年のチーム開発'),
  b2bBody: tr('توسعه رابط کاربری با Next.js و Ant Design و یکپارچه‌سازی داده‌های REST API در همکاری مستمر با تیم بک‌اند.', 'Developed supply-chain interfaces using Next.js and Ant Design, integrating complex REST APIs with the backend team.', 'Next.jsとAnt Designによる画面開発およびREST API連携をバックエンドチームと協働で担当。'),
  education: tr('کارشناسی مهندسی کامپیوتر', 'B.Sc. Computer Engineering', 'コンピュータ工学 学士課程'),
  university: tr('دانشگاه آزاد اسلامی واحد مهاباد', 'Islamic Azad University of Mahabad', 'イスラーム自由大学 マハーバード校'),
  studying: tr('۲۰۲۳ — اکنون · هم‌نویسنده دو مقاله کنفرانس', '2023 — Present · Co-author of two conference papers', '2023年 — 現在・国際会議論文2編共著'),
  certification: tr('گواهی توسعه فرانت‌اند (Meta)', 'Introduction to Front-End Development', 'フロントエンド開発入門'),
  certDetail: tr('Coursera · آوریل ۲۰۲۳', 'Coursera · April 2023', 'Coursera · 2023年4月'),

  // Remote section
  remoteLabel: tr('۰۵. آمادگی همکاری ریموت', '05. Remote Readiness', '05. リモート勤務体制'),
  remoteTitle: tr('آماده همکاری ریموت\nبا تیم‌های بین‌المللی و ژاپنی.', 'Built for async clarity\nand live overlap with Tokyo.', '日本のチームとも、\n円滑に協働できるリモート体制。'),
  remoteIntro: tr('در تهران زندگی می‌کنم و نرم‌افزارهای عملیاتی را به‌صورت مستقل و مسئولانه می‌سازم. وضعیت لحظه‌ای هم‌پوشانی زمانی و جزئیات همکاری:', 'Based in Tehran with full ownership of production systems. Live time-zone overlap and practical remote details:', 'テヘランを拠点に本番システムを自律運用しています。時差の重なりと実務上のポイントは次のとおりです。'),
  tzTitle: tr('ساعت زنده و هم‌پوشانی با توکیو', 'Live Clocks & JST Overlap', '現地時刻と東京との重複時間'),
  tzTehran: tr('تهران (IRST)', 'Tehran (IRST)', 'テヘラン (IRST)'),
  tzTokyo: tr('توکیو (JST)', 'Tokyo (JST)', '東京 (JST)'),
  tzLocal: tr('زمان شما', 'Your local time', '現在地の時刻'),
  tzNote: tr('پنج‌ونیم ساعت عقب‌تر از توکیو (JST، UTC+9).', '5.5 hours behind Tokyo (JST, UTC+9).', '東京（JST、UTC+9）より5.5時間遅れ。'),
  tzBar: tr('ساعات کاری ژاپن (۰۹:۰۰–۱۸:۰۰ JST) منطبق با ۰۳:۳۰ تا ۱۲:۳۰ به وقت تهران است؛ ایده‌آل برای جلسات صبحگاهی و تحویل کد روزانه.', 'Japanese business hours (09:00–18:00 JST) align with 03:30–12:30 Tehran time—ideal for morning standups and daily handoffs.', '日本の営業時間（09:00–18:00 JST）はテヘラン時間の03:30–12:30にあたり、朝会や日次の連携に適しています。'),
  soloTitle: tr('مالکیت کامل از طراحی تا استقرار', 'End-to-End Ownership', '設計から運用まで一貫担当'),
  soloBody: tr('دو محصول SaaS و یک سامانه پارکینگ را از معماری دیتابیس و رابط کاربری تا Docker، Nginx و استقرار عملیاتی به‌تنهایی مدیریت کرده‌ام.', 'Independently architected, built, deployed, and maintain two production SaaS platforms and a live parking vision system.', 'SaaS2本と稼働中の駐車場システムを、設計・実装・公開・保守まで一貫して担当しています。'),
  teamTitle: tr('همکاری تیمی و مستندسازی علمی', 'Teamwork & Documentation', 'チーム開発と技術文書化'),
  teamBody: tr('تجربه همکاری یک‌ساله با تیم بک‌اند از طریق REST API و مستندسازی دقیق معماری سیستم‌ها در قالب دو مقاله علمی منتشرشده.', 'Worked with backend teams over REST APIs for a year-long enterprise rollout and documented architectures in two published papers.', 'REST APIを通じた1年間のチーム開発と、2本の学術論文によるシステム設計の文書化実績があります。'),
  langTitle: tr('ارتباط شفاف چندزبانه', 'Multilingual Communication', '多言語コミュニケーション'),
  langBody: tr('کردی (زبان مادری)، فارسی (مسلط)، انگلیسی (حرفه‌ای برای مستندات فنی، کدریویو و جلسات روزانه).', 'Kurdish (Native), Persian (Fluent), English (Proficient for technical specs, PR reviews, and daily syncs).', 'クルド語（母語）、ペルシャ語（流暢）、英語（技術仕様書・コードレビュー・会議対応可能）。'),

  // Contact & Footer
  contactLabel: tr('۰۶. قدم بعدی', '06. Contact', '06. お問い合わせ'),
  contactTitle: tr('آماده همکاری و پروژه‌های تازه.\nبیایید صحبت کنیم.', 'Open to remote roles.\nLet’s build something solid.', 'リモート勤務・協業のご相談、\nお待ちしています。'),
  contactBody: tr('اگر تیم شما به توسعه‌دهنده فرانت‌اندی نیاز دارد که معماری محصول، بک‌اند و استانداردهای کیفی را هم درک کند، خوشحال می‌شوم گفت‌وگو کنیم.', 'If your team is looking for a frontend engineer with full-stack depth and strong product ownership, I’d love to hear from you.', 'フロントエンド設計からバックエンド・本番運用まで見渡せるエンジニアをお探しでしたら、ぜひご連絡ください。'),
  sendEmail: tr('ارسال ایمیل مستقیم', 'Send an email', 'メールを送る'),
  docEn: tr('رزومه انگلیسی (PDF)', 'Résumé · English (PDF)', '英語の履歴書（PDF）'),
  docJa: tr('رزومه ژاپنی — شوکوموکِیرکیشو (PDF)', 'Japanese Career History · 職務経歴書 (PDF)', '職務経歴書・日本語（PDF）'),
  docJaShort: tr('شوکوموکِیرکیشو (PDF)', '職務経歴書 (JA)', '職務経歴書 (PDF)'),
  backTop: tr('بازگشت به بالا', 'Back to top', 'トップに戻る'),
  footerNote: tr('رامین حمه‌پور · مهندسی فرانت‌اند و پژوهش', 'Ramin Hamehpour · Frontend Engineering & Research', 'ラミン・ハメプール · フロントエンド開発と研究'),
};
