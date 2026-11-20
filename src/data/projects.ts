import { tr, type Localized } from './content';

export type ProjectCategory = 'saas' | 'enterprise' | 'ai';
export type ProjectStatus = 'live' | 'development' | 'delivered';

export interface Project {
  slug: string;
  name: string;
  category: ProjectCategory;
  year: string;
  status: ProjectStatus;
  type: Localized;
  role: Localized;
  title: Localized;
  summary: Localized;
  overview: Localized;
  challenge: Localized;
  approach: Localized;
  features: Localized[];
  stack: string[];
  url?: string;
  urlLabel?: Localized;
  panelUrl?: string;
  relatedPaperId?: string;
  accentTone: 'copper' | 'indigo' | 'emerald' | 'slate';
}

const personal = tr('محصول شخصی', 'Personal product', '個人プロダクト');
const company = tr('پروژه شرکتی · رایان افزار پارسیان', 'Company · Rayan Afzar Parsian', '企業案件・Rayan Afzar Parsian');
const solo = tr('طراحی و توسعه مستقل فول‌استک', 'Independent full-stack development', '設計・フルスタック開発（個人）');
const fullstack = tr('توسعه‌دهنده فول‌استک', 'Full-stack developer', 'フルスタック開発');

export const projects: Project[] = [
  {
    slug: 'nexcart',
    name: 'NexCart',
    category: 'saas',
    year: '2026',
    status: 'live',
    type: personal,
    role: solo,
    accentTone: 'copper',
    url: 'https://nexcart.ir',
    urlLabel: tr('وب‌سایت نکس‌کارت', 'NexCart website', 'NexCart公式サイト'),
    panelUrl: 'https://dash.nexcart.ir/login',
    title: tr('یک ایده، هزار فروشگاه.', 'One platform. Every storefront.', 'ひとつの基盤、広がるストア。'),
    summary: tr(
      'فروشگاه‌ساز چندمستاجری؛ از راه‌اندازی فروشگاه با دامنه اختصاصی تا پرداخت و کمپین پیامکی.',
      'A multi-tenant commerce platform, from custom-domain store launch to payments and segmented campaigns.',
      '独自ドメイン対応のストア開設から決済、顧客向けSMS配信まで支えるマルチテナントEC基盤。'
    ),
    overview: tr(
      'NexCart یک SaaS عملیاتی است که به کسب‌وکارها امکان می‌دهد فروشگاه خود را با زیردامنه اختصاصی یا دامنه شخصی راه‌اندازی کنند. این محصول را به‌تنهایی طراحی، توسعه و منتشر کردم؛ از ویترین فروشگاه تا پنل فروشنده و مدیریت کل.',
      'NexCart is a production SaaS that lets businesses launch an online store on an automatically provisioned subdomain or their own domain. I independently designed, built, and shipped the storefront, merchant dashboard, and super-admin panel.',
      'NexCartは、自動発行されるサブドメインや独自ドメインでストアを開設できる稼働中のSaaSです。ストアフロント、販売者ダッシュボード、全体管理画面を一人で設計・開発・公開しました。'
    ),
    challenge: tr(
      'پشتیبانی از فروشگاه‌های مستقل روی زیرساخت مشترک، با تجربه راست‌به‌چپ یکپارچه، دامنه امن SSL و پرداخت محلی.',
      'Support independent stores on shared multi-tenant infrastructure with consistent RTL interfaces, automated SSL, and local payments.',
      '共通のマルチテナント基盤上で独立したストアを支え、一貫したRTL画面、自動SSL、地域決済を提供すること。'
    ),
    approach: tr(
      'سه برنامه Next.js را با دیزاین سیستم مشترک، توکن‌های طراحی و کامپوننت‌های قابل استفاده مجدد ساختم. بک‌اند NestJS با Prisma و PostgreSQL، عملیات فروشگاه و مدیریت را پشتیبانی می‌کند.',
      'Built three Next.js applications around shared design tokens and reusable components. A NestJS, Prisma, and PostgreSQL backend powers tenant operations and administration.',
      '共通のデザイントークンと再利用可能なUIで3つのNext.jsアプリを構築。NestJS、Prisma、PostgreSQLがテナント運営と管理を支えます。'
    ),
    features: [
      tr('زیردامنه خودکار و دامنه شخصی با گواهی SSL خودکار', 'Automatic subdomains and custom domains with automated SSL', 'サブドメイン自動発行と自動SSL付き独自ドメイン'),
      tr('درگاه پرداخت زرین‌پال و کمپین پیامکی با صف پردازش پس‌زمینه', 'ZarinPal payments and segmented SMS campaigns with background workers', 'ZarinPal決済、顧客セグメント別SMSとバックグラウンド処理'),
      tr('ورود امن مدیر به حساب فروشنده با توکن کوتاه‌عمر', 'Secure admin impersonation using short-lived scoped tokens', '短期間有効なトークンによる安全な管理者代理ログイン'),
    ],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'NestJS', 'Prisma', 'PostgreSQL'],
  },
  {
    slug: 'calendro',
    name: 'Calendro',
    category: 'saas',
    year: '2026',
    status: 'live',
    type: personal,
    role: solo,
    accentTone: 'indigo',
    url: 'https://calendro.ir',
    urlLabel: tr('وب‌سایت کلندرو', 'Calendro website', 'Calendro公式サイト'),
    title: tr('برای هر قرار، یک جای درست.', 'Make time for what matters.', '大切な時間に、確かな予約を。'),
    summary: tr(
      'پلتفرم نوبت‌دهی سالن‌ها، کلینیک‌ها و کسب‌وکارهای خدماتی؛ منتشرشده روی وب و کافه‌بازار.',
      'An appointment marketplace for salons, clinics, and service businesses across web and mobile.',
      'サロン・クリニック・サービス事業者向けの予約プラットフォーム（Web・モバイル展開）。'
    ),
    overview: tr(
      'Calendro از پیدا کردن کسب‌وکار تا رزرو نوبت را پوشش می‌دهد. دو اپلیکیشن React Native آن در کافه‌بازار منتشر شده‌اند و پنل‌های کسب‌وکار و مدیریت با Next.js ساخته شده‌اند.',
      'Calendro connects customers with service businesses, from map discovery to booking. Two React Native apps are published on Cafe Bazaar, alongside Next.js business and admin panels.',
      'Calendroは店舗探しから予約まで利用者と事業者をつなぎます。2つのReact NativeアプリをCafe Bazaarで公開し、事業者・管理者向けパネルをNext.jsで構築しました。'
    ),
    challenge: tr(
      'یکپارچه‌سازی تجربه رزرو در وب و موبایل با تقویم شمسی، مدیریت شیفت و جلوگیری از تداخل زمانی، همراه با احراز هویت امن.',
      'Unify web and mobile booking with Jalali calendar support, shift scheduling, overlap validation, and hardened authentication.',
      'イラン暦対応、シフト管理、重複検証、安全な認証を備えた予約体験をWebとモバイルで統一すること。'
    ),
    approach: tr(
      'مرور نوبت با تقویم شمسی، ثبت نوبت حضوری مرحله‌ای و انتخاب مکان روی نقشه را پیاده‌سازی کردم. احراز هویت از JWT در کوکی httpOnly و پروکسی Next.js استفاده می‌کند.',
      'Implemented a Jalali appointment browser, walk-in booking wizard, and OpenStreetMap picker. Password and OTP authentication use JWTs in httpOnly cookies via a Next.js proxy.',
      'イラン暦の予約一覧、店頭予約ウィザード、地図の位置選択を実装。パスワード・OTP認証はNext.jsプロキシ経由のhttpOnly Cookieでトークンを保護しています。'
    ),
    features: [
      tr('دو اپلیکیشن React Native / Expo منتشرشده در کافه‌بازار', 'Two React Native / Expo apps published on Cafe Bazaar', 'Cafe Bazaarで公開した2つのReact Native / Expoアプリ'),
      tr('مدیریت شیفت کاری و بررسی لحظه‌ای تداخل نوبت‌ها', 'Shift scheduling and real-time appointment overlap validation', 'シフト管理と予約時間の重複検証'),
      tr('انتخاب موقعیت مکانی با Leaflet و OpenStreetMap', 'Interactive location picking with Leaflet and OpenStreetMap', 'LeafletとOpenStreetMapによる位置選択'),
    ],
    stack: ['Next.js', 'React Native', 'Expo', 'TypeScript', 'Tailwind CSS', 'Zustand', 'TanStack Query', 'NestJS'],
  },
  {
    slug: 'smart-parking',
    name: 'Smart Parking',
    category: 'ai',
    year: '2026',
    status: 'live',
    type: personal,
    role: solo,
    accentTone: 'emerald',
    relatedPaperId: 'multinational-anpr',
    title: tr('ورود و خروج، هوشمندتر.', 'A smarter way in and out.', '入出庫を、もっとスマートに。'),
    summary: tr(
      'سامانه مدیریت پارکینگ با پلاک‌خوان بلادرنگ؛ مستقر و فعال در یک پارکینگ روباز واقعی.',
      'Real-time plate recognition and parking management, deployed and running in an actual open-air lot.',
      '実際の屋外駐車場で稼働する、リアルタイム画像認識・駐車場管理システム。'
    ),
    overview: tr(
      'سامانه شخصی مدیریت خودکار پارکینگ که ورود و خروج خودرو را با پلاک‌خوان تشخیص می‌دهد. با دوربین‌های ورودی و خروجی در یک پارکینگ روباز واقعی مستقر شده و فعالانه استفاده می‌شود.',
      'An independently built system detecting vehicle entry and exit with real-time plate recognition. Deployed and actively used in an open-air parking lot with entry and exit cameras.',
      'リアルタイム画像認識で車両の入出庫を検知する個人開発のシステム。入口・出口カメラを備えた実際の屋外駐車場で稼働しています。'
    ),
    challenge: tr(
      'تبدیل استریم زنده دوربین‌ها به رویدادهای دقیق ورود و خروج، همراه با کنترل دوربین، محاسبه تعرفه و نظارت زنده.',
      'Turn live RTSP camera feeds into reliable entry/exit events under varying lighting, with camera controls and live monitoring.',
      'ライブ映像から変動する照明下でも安定した入出庫イベントを生成し、カメラ制御とリアルタイム監視を提供すること。'
    ),
    approach: tr(
      'خط پردازش Python، YOLOv8 و Redis Streams را به دوربین‌های RTSP متصل کردم. FastAPI و PostgreSQL لایه سرویس و داده را تشکیل می‌دهند و مقاله پژوهشی معماری چندملیتی آن نیز منتشر شده است.',
      'Connected a Python / YOLOv8 / Redis Streams pipeline to RTSP cameras with FastAPI and PostgreSQL. Built a live monitoring dashboard and published a peer-reviewed paper on the multinational ANPR architecture.',
      'Python・YOLOv8・Redis StreamsをRTSPカメラに接続し、FastAPIとPostgreSQLで基盤を構築。ライブ監視画面と多国籍認識に関する学術論文も発表しました。'
    ),
    features: [
      tr('تشخیص خودکار ورود و خروج با رأی‌گیری بین فریم‌ها', 'Automatic entry/exit detection with cross-frame voting', 'フレーム間投票による高精度な入出庫検知'),
      tr('داشبورد نظارت زنده و کنترل گیت و دوربین‌ها', 'Live monitoring dashboard and gate/camera control', 'リアルタイム監視画面とゲート・カメラ制御'),
      tr('استقرار عملیاتی واقعی همراه با مقاله پژوهشی منتشرشده', 'Real-world production deployment and published research paper', '実際の現場への導入と研究論文の発表'),
    ],
    stack: ['Python', 'YOLOv8', 'OpenCV', 'Redis', 'FastAPI', 'PostgreSQL', 'RTSP / CCTV'],
  },
  {
    slug: 'coldino',
    name: 'Coldino',
    category: 'ai',
    year: '2026',
    status: 'live',
    type: company,
    role: tr('توسعه‌دهنده ماژول پلاک‌خوان', 'Plate recognition module developer', 'ナンバープレート認識モジュール開発'),
    accentTone: 'emerald',
    relatedPaperId: 'multinational-anpr',
    title: tr('بینایی ماشین، در قلب عملیات.', 'Vision that works on site.', '現場で役立つ画像認識。'),
    summary: tr(
      'ماژول تشخیص پلاک چنددوربینه و بلادرنگ برای نرم‌افزار عملیاتی مدیریت سردخانه.',
      'Real-time multi-camera license plate recognition integrated into cold storage operations software.',
      '冷蔵倉庫管理ソフトウェア向けの複数カメラ対応リアルタイムナンバープレート認識。'
    ),
    overview: tr(
      'ماژول پلاک‌خوان Coldino را برای نرم‌افزار مدیریت سردخانه در رایان افزار پارسیان توسعه دادم. این ماژول کامل و عملیاتی است و تصاویر چند دوربین را به‌صورت هم‌زمان و بلادرنگ پردازش می‌کند.',
      'Developed Coldino’s plate recognition module for cold storage management at Rayan Afzar Parsian. It is complete and operational, processing multiple camera streams concurrently in real time.',
      'Rayan Afzar Parsianの冷蔵倉庫管理向けに認識モジュールを開発。完成・稼働済みで、複数カメラの映像をリアルタイムに処理します。'
    ),
    challenge: tr(
      'ساخت خط پردازش تشخیص پلاک چنددوربینه بدون افت کارایی برای اتصال به یک نرم‌افزار صنعتی موجود.',
      'Build a concurrent multi-camera detection pipeline that plugs cleanly into an operational cold storage management suite.',
      '稼働中の冷蔵倉庫管理アプリに統合できる、複数カメラ同時処理の認識パイプラインを作ること。'
    ),
    approach: tr(
      'از Python، YOLOv8 و OpenCV برای تشخیص و پردازش تصویر استفاده کردم و ماژول را از طریق FastAPI به نرم‌افزار مدیریت متصل کردم.',
      'Implemented detection and preprocessing with Python, YOLOv8, and OpenCV, exposing structured vehicle events through FastAPI.',
      'Python、YOLOv8、OpenCVで検出と画像処理を実装し、FastAPIを介して管理ソフトウェアと連携しました。'
    ),
    features: [
      tr('پردازش هم‌زمان استریم چند دوربین', 'Concurrent multi-camera stream processing', '複数カメラの同時映像処理'),
      tr('تشخیص بلادرنگ با YOLOv8 و OpenCV', 'Real-time YOLOv8 and OpenCV detection pipeline', 'YOLOv8とOpenCVによるリアルタイム検出'),
      tr('ماژول مستقر و عملیاتی در چرخه توزین و سردخانه', 'Operational module integrated into cold storage workflows', '冷蔵倉庫システムの入出荷業務で稼働中'),
    ],
    stack: ['Python', 'YOLOv8', 'OpenCV', 'FastAPI'],
  },
  {
    slug: 'b2b-distribution',
    name: 'B2B Distribution',
    category: 'enterprise',
    year: '2025',
    status: 'delivered',
    type: tr('همکاری تیمی · پروژه خارجی', 'Team collaboration · External project', 'チーム開発・外部案件'),
    role: tr('توسعه‌دهنده فرانت‌اند', 'Frontend developer', 'フロントエンド開発'),
    accentTone: 'indigo',
    title: tr('پیچیدگی زنجیره تأمین، ساده‌تر.', 'Complex supply. Clear interfaces.', '複雑な流通に、明快なUIを。'),
    summary: tr(
      'توسعه رابط کاربری و یکپارچه‌سازی داده‌های API برای یک پلتفرم بزرگ توزیع B2B.',
      'Frontend engineering and REST API integration for a large-scale B2B supply-chain platform.',
      '大規模B2B流通プラットフォームの画面開発とREST APIデータ連携。'
    ),
    overview: tr(
      'در یک پروژه تیمی یک‌ساله برای پلتفرم توزیع B2B، مسئول توسعه رابط کاربری و یکپارچه‌سازی داده‌های API بودم. محصول در مقیاس یک سامانه بزرگ زنجیره تأمین توسعه داده شد.',
      'Contributed as a frontend developer to a year-long team engagement. Responsibilities covered UI architecture and API data integration across a large-scale B2B supply-chain platform.',
      '約1年間のチーム開発に参加。大規模なサプライチェーン製品で、画面開発とAPIデータ連携を担当しました。'
    ),
    challenge: tr(
      'نمایش جداول و جریان‌های پیچیده زنجیره تأمین در رابطی سریع، خوانا و هماهنگ با APIهای تیم بک‌اند.',
      'Present dense supply-chain workflows in clear, responsive interfaces tightly aligned with backend REST contracts.',
      '複雑なサプライチェーンのデータを、バックエンドAPIと整合する使いやすい画面として提供すること。'
    ),
    approach: tr(
      'صفحات را با Next.js و Ant Design توسعه دادم و داده‌ها را از طریق REST API در همکاری نزدیک با تیم بک‌اند یکپارچه کردم.',
      'Built structured interfaces using Next.js and Ant Design, collaborating closely with backend engineers on REST API integration.',
      'チームと協力し、Next.jsとAnt Designで画面を構築。REST APIを通じてデータを連携しました。'
    ),
    features: [
      tr('معماری صفحات مقیاس‌پذیر با Next.js', 'Scalable Next.js application views', 'Next.jsによる拡張性の高い画面設計'),
      tr('جداول و فرم‌های سازمانی با Ant Design', 'Enterprise tables and workflows with Ant Design', 'Ant Designによる業務向けコンポーネント実装'),
      tr('یکپارچه‌سازی کامل داده‌های REST API', 'End-to-end REST API data integration', 'REST APIデータの完全な連携'),
    ],
    stack: ['Next.js', 'TypeScript', 'Ant Design', 'REST API'],
  },
  {
    slug: 'office-automation',
    name: 'Office Automation',
    category: 'enterprise',
    year: '2023',
    status: 'delivered',
    type: company,
    role: fullstack,
    accentTone: 'slate',
    title: tr('جریان کاری، بدون گره.', 'Keep the work moving.', '業務の流れを、スムーズに。'),
    summary: tr(
      'سامانه یکپارچه مکاتبات داخلی، کارتابل تأییدیه‌ها و گردش اسناد سازمانی.',
      'An end-to-end enterprise platform for internal correspondence, approvals, and document routing.',
      '社内文書、承認ルート、ドキュメントワークフローを一元化する業務システム。'
    ),
    overview: tr(
      'اولین پروژه بزرگ من در رایان افزار پارسیان؛ سامانه‌ای برای مدیریت مکاتبات و گردش اسناد داخلی که طراحی و توسعه فول‌استک آن را از ابتدا تا تحویل انجام دادم.',
      'My first major project at Rayan Afzar Parsian: an office automation platform for correspondence and document workflows, designed and delivered end to end.',
      'Rayan Afzar Parsianで初めて担当した大規模案件。社内文書とワークフローを管理する業務システムを、設計から納品まで担当しました。'
    ),
    challenge: tr(
      'گردآوری مکاتبات اداری، سطوح دسترسی، مراحل تأیید و گردش اسناد در یک نرم‌افزار سازمانی واحد.',
      'Consolidate correspondence, role-based approvals, and document trails into a unified internal application.',
      '社内文書のやり取り、承認手順、権限管理をひとつのアプリにまとめること。'
    ),
    approach: tr(
      'برنامه را با C#، Blazor و ASP.NET Core ساختم و برای نگهداری و گزارش‌گیری داده‌ها از SQL Server استفاده کردم.',
      'Built the full-stack application with C#, Blazor, and ASP.NET Core backed by SQL Server.',
      'C#、Blazor、ASP.NET Coreで構築し、データ管理と集計にはSQL Serverを採用しました。'
    ),
    features: [
      tr('مکاتبات داخلی و پیگیری گردش نامه', 'Internal correspondence and routing history', '社内文書の受発信と履歴追跡'),
      tr('کارتابل چندمرحله‌ای تأیید اسناد', 'Multi-step document approval workflows', '多段階の承認ワークフロー'),
      tr('ساختار ماژولار با .NET و SQL Server', 'Modular .NET and SQL Server architecture', '.NETとSQL Serverによる堅牢な設計'),
    ],
    stack: ['C#', 'Blazor', 'ASP.NET Core', 'SQL Server'],
  },
  {
    slug: 'distribution',
    name: 'Distribution System',
    category: 'enterprise',
    year: '2025',
    status: 'delivered',
    type: company,
    role: fullstack,
    accentTone: 'slate',
    title: tr('از موجودی تا مقصد.', 'From inventory to delivery.', '在庫から、配送先まで。'),
    summary: tr(
      'نرم‌افزار اختصاصی توزیع و لجستیک؛ مدیریت ارسال، جابه‌جایی موجودی و اتصال به کارت‌خوان.',
      'Custom distribution and logistics suite for dispatch, stock movement, and POS terminal integration.',
      '出荷管理、在庫移動、決済端末連携を備えた専用の流通・物流ソフトウェア。'
    ),
    overview: tr(
      'سامانه‌ای اختصاصی برای مشتری صنعتی (کشتارگاه)، توسعه‌یافته در رایان افزار پارسیان؛ با تمرکز بر ارسال محصولات، جابه‌جایی موجودی و گزارش‌دهی عملیات توزیع.',
      'A custom system built at Rayan Afzar Parsian for an industrial slaughterhouse client, covering product dispatch, inventory movement, and operational reporting.',
      '食肉処理事業者向けにRayan Afzar Parsianで開発。製品の出荷、在庫移動、流通業務レポートを管理します。'
    ),
    challenge: tr(
      'تبدیل نیازهای روزانه توزیع، بارگیری و تسویه در محل به نرم‌افزاری دقیق و سازگار با جریان واقعی کار.',
      'Translate day-to-day dispatch, inventory tracking, and settlement requirements into reliable operational software.',
      '顧客固有の流通・在庫要件を、日々の現場業務に即した使いやすいソフトウェアへ落とし込むこと。'
    ),
    approach: tr(
      'با C# و Blazor برنامه‌ای اختصاصی برای مدیریت ارسال محصولات، ثبت جابه‌جایی موجودی، گزارش‌دهی و یکپارچه‌سازی سخت‌افزاری کارت‌خوان PAX S800 ساختم.',
      'Built a tailored C# and Blazor suite for dispatch, stock tracking, reporting, and PAX S800 payment terminal integration.',
      'C#とBlazorで出荷管理、在庫移動の記録、業務レポート、PAX S800決済端末連携を構築しました。'
    ),
    features: [
      tr('مدیریت ارسال و حواله‌های بارگیری', 'Product dispatch and shipment management', '製品の出荷・配送管理'),
      tr('پیگیری دقیق جابه‌جایی موجودی انبار', 'Accurate inventory movement tracking', '在庫移動の正確な追跡'),
      tr('گزارش‌دهی عملیاتی و اتصال کارت‌خوان PAX S800', 'Operational reporting and PAX S800 POS integration', '業務レポートとPAX S800決済端末統合'),
    ],
    stack: ['C#', 'Blazor', 'ASP.NET Core', 'SQL Server'],
  },
  {
    slug: 'cmms',
    name: 'CMMS',
    category: 'enterprise',
    year: '2024',
    status: 'delivered',
    type: company,
    role: fullstack,
    accentTone: 'slate',
    title: tr('نگهداری پیشگیرانه، منظم و دقیق.', 'Preventive care for critical equipment.', '設備の予防保全を、体系的に。'),
    summary: tr(
      'سامانه نگهداری و تعمیرات تجهیزات صنعتی با رابط کاملاً فارسی و راست‌به‌چپ.',
      'Industrial equipment maintenance and preventive scheduling system with a fully RTL Persian interface.',
      '設備情報と予防保全計画を一元管理する完全RTL対応の保全管理システム。'
    ),
    overview: tr(
      'سامانه نگهداری و تعمیرات در رایان افزار پارسیان، با رابط کاملاً راست‌به‌چپ، برای مدیریت تجهیزات و زمان‌بندی نگهداری پیشگیرانه توسعه داده شد.',
      'A maintenance management system developed at Rayan Afzar Parsian, featuring a fully RTL interface for equipment registries and preventive maintenance scheduling.',
      'Rayan Afzar Parsianで開発した保全管理システム。完全なRTL画面で、設備管理と予防保全の計画をサポートします。'
    ),
    challenge: tr(
      'ایجاد محیط فارسی و یکپارچه برای ثبت شناسنامه تجهیزات، درخواست تعمیرات و برنامه‌ریزی سرویس‌های دوره‌ای.',
      'Create a unified RTL workspace for equipment registries, work orders, and preventive maintenance calendars.',
      '設備台帳と予防保全計画を整理できるペルシャ語の業務環境を作ること。'
    ),
    approach: tr(
      'با C#، Blazor و ASP.NET Core، ماژول‌های مدیریت تجهیزات و زمان‌بندی PM را در یک رابط کاملاً راست‌به‌چپ پیاده‌سازی کردم.',
      'Implemented equipment registries and PM scheduling workflows with C#, Blazor, and ASP.NET Core in a native RTL layout.',
      'C#、Blazor、ASP.NET Coreで設備管理と予防保全計画をRTL画面として実装しました。'
    ),
    features: [
      tr('شناسنامه و تاریخچه کامل تجهیزات', 'Equipment registry and service history', '設備情報の台帳管理'),
      tr('زمان‌بندی نگهداری پیشگیرانه (PM)', 'Preventive maintenance (PM) scheduling', '予防保全（PM）スケジューリング'),
      tr('رابط کاربری کاملاً فارسی و راست‌به‌چپ', 'Fully Persian right-to-left workspace', 'ペルシャ語完全RTLインターフェース'),
    ],
    stack: ['C#', 'Blazor', 'ASP.NET Core', 'SQL Server'],
  },
  {
    slug: 'semantic-search',
    name: 'Semantic Search',
    category: 'ai',
    year: '2026',
    status: 'development',
    type: personal,
    role: solo,
    accentTone: 'indigo',
    title: tr('جست‌وجوی معنا، فراتر از کلمات.', 'Find the meaning. Beyond words.', '言葉の先にある、意味を探す。'),
    summary: tr(
      'موتور جست‌وجوی معنایی محصولات با بردارهای embedding و pgvector؛ در حال توسعه.',
      'Meaning-based product discovery powered by vector embeddings, pgvector, and Celery ingestion.',
      '埋め込みベクトルとpgvectorを活用した意味ベースの商品検索エンジン（開発中）。'
    ),
    overview: tr(
      'پروژه‌ای شخصی برای یافتن محصولات بر اساس نیت و معنای جست‌وجو، فراتر از تطبیق دقیق کلیدواژه‌ها. این محصول در حال توسعه است و هنوز عمومی منتشر نشده است.',
      'A personal project finding products by intent and meaning rather than exact keyword matching. Currently in active development.',
      'キーワードの完全一致に頼らず、検索文の意図や意味に基づいて商品を探す個人プロジェクト（現在開発中）。'
    ),
    challenge: tr(
      'کاهش وابستگی به تطبیق دقیق کلمات از طریق نمایش ارتباط معنایی میان پرس‌وجو و مشخصات محصولات.',
      'Reduce exact-keyword failure by indexing semantic relationships between natural queries and product catalogs.',
      '検索文と商品情報の意味的な関係を表現し、単語の完全一致への依存を減らすこと。'
    ),
    approach: tr(
      'بک‌اند را با Python و FastAPI می‌سازم؛ embeddingها با pgvector نگهداری و ورود داده در پس‌زمینه با Celery پردازش می‌شود. رابط کاربری با Next.js در حال توسعه است.',
      'Building a Python / FastAPI search API backed by pgvector similarity indexing, Celery background ingestion, and a Next.js frontend.',
      'Python / FastAPI、pgvectorによるベクトル検索、Celeryの非同期データ取り込み、Next.jsのフロントエンドを開発しています。'
    ),
    features: [
      tr('جست‌وجوی معنایی بر پایه نیت کاربر', 'Intent-driven semantic product search', '検索意図に基づく意味検索'),
      tr('ذخیره‌سازی و نمایه‌سازی برداری با pgvector', 'Vector indexing and similarity search with pgvector', 'pgvectorによるベクトル保存・検索'),
      tr('صف پردازش و همگام‌سازی پس‌زمینه با Celery', 'Asynchronous catalog ingestion with Celery', 'Celeryによる非同期データ取り込み'),
    ],
    stack: ['Python', 'FastAPI', 'pgvector', 'Celery', 'Next.js'],
  },
];
