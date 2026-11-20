import { tr, type Project } from './content';
const personal = tr('محصول شخصی', 'Personal product', '個人プロダクト');
const company = tr('پروژه شرکتی · رایان افزار پارسیان', 'Company · Rayan Afzar Parsian', '企業案件・Rayan Afzar Parsian');
const solo = tr('طراحی و توسعه مستقل فول‌استک', 'Independent full-stack development', '設計・フルスタック開発（個人）');
const fullstack = tr('توسعه‌دهنده فول‌استک', 'Full-stack developer', 'フルスタック開発');
const raw: Project[] = [
  {
    slug: 'nexcart', name: 'NexCart', category: 'saas', year: '2026', status: 'live', type: personal, role: solo, color: 'peach', url: 'https://nexcart.ir',
    urlLabel: tr('وب‌سایت نکس‌کارت', 'NexCart website', 'NexCart公式サイト'),
    panelUrl: 'https://dash.nexcart.ir/login',
    title: tr('یک ایده، هزار فروشگاه.', 'One platform. Every storefront.', 'ひとつの基盤、広がるストア。'),
    summary: tr('فروشگاه‌ساز چندمستاجری؛ از راه‌اندازی فروشگاه تا پرداخت و ارتباط با مشتری.', 'A multi-tenant commerce platform, from store launch to payments and customer engagement.', 'ストア開設から決済、顧客とのつながりまで支えるマルチテナントEC基盤。'),
    overview: tr('NexCart یک SaaS عملیاتی است که به کسب‌وکارها امکان می‌دهد فروشگاه خود را با زیردامنه اختصاصی یا دامنه شخصی راه‌اندازی کنند. این محصول را به‌تنهایی طراحی، توسعه و منتشر کردم؛ از ویترین فروشگاه تا پنل فروشنده و مدیریت کل.', 'NexCart is a production SaaS that lets businesses launch an online store on an automatically provisioned subdomain or their own domain. I independently designed, built, and shipped the storefront, merchant dashboard, and super-admin panel.', 'NexCartは、自動発行されるサブドメインや独自ドメインでストアを開設できる稼働中のSaaSです。ストア、販売者ダッシュボード、全体管理画面を一人で設計・開発・公開しました。'),
    challenge: tr('پشتیبانی از فروشگاه‌های مستقل روی زیرساخت مشترک، با تجربه راست‌به‌چپ یکپارچه، دامنه امن و پرداخت محلی.', 'Support independent stores on shared infrastructure with consistent RTL interfaces, secure domains, and local payments.', '共通インフラ上で独立したストアを支え、一貫したRTL画面、安全なドメイン、地域の決済手段を提供すること。'),
    approach: tr('سه برنامه Next.js را با دیزاین سیستم مشترک، توکن‌های طراحی و کامپوننت‌های قابل استفاده مجدد ساختم. بک‌اند NestJS با Prisma و PostgreSQL، عملیات فروشگاه و مدیریت را پشتیبانی می‌کند.', 'Built three Next.js apps around shared design tokens and reusable components. NestJS, Prisma, and PostgreSQL support store operations and administration.', '共通のデザイントークンと再利用可能な部品で3つのNext.jsアプリを構築。NestJS、Prisma、PostgreSQLがストア運営と管理を支えます。'),
    features: [tr('زیردامنه خودکار و دامنه شخصی با SSL خودکار', 'Automatic subdomains and custom domains with automatic SSL', 'サブドメイン自動発行と自動SSL付き独自ドメイン'), tr('پرداخت زرین‌پال و کمپین پیامکی با دسته‌بندی مخاطبان و پردازش پس‌زمینه', 'ZarinPal payments and segmented SMS campaigns with background processing', 'ZarinPal決済、顧客セグメント別SMSとバックグラウンド処理'), tr('ورود امن مدیر به حساب فروشنده با توکن کوتاه‌عمر', 'Secure admin impersonation with short-lived tokens', '短期間有効なトークンによる安全な管理者代理ログイン')],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'NestJS', 'Prisma', 'PostgreSQL'],
  },
  {
    slug: 'calendro', name: 'Calendro', category: 'saas', year: '2026', status: 'live', type: personal, role: solo, color: 'lavender', url: 'https://calendro.ir',
    title: tr('برای هر قرار، یک جای درست.', 'Make time for what matters.', '大切な時間に、確かな予約を。'),
    summary: tr('بازار نوبت‌دهی سالن‌ها، کلینیک‌ها و کسب‌وکارهای خدماتی؛ روی وب و موبایل.', 'An appointment marketplace for salons, clinics, and service businesses. On web and mobile.', 'サロン、クリニック、サービス事業者向け予約プラットフォーム。ウェブとモバイルで展開。'),
    overview: tr('Calendro از پیدا کردن کسب‌وکار تا رزرو نوبت را پوشش می‌دهد. دو اپلیکیشن React Native آن در کافه‌بازار منتشر شده‌اند و پنل‌های کسب‌وکار و مدیریت با Next.js ساخته شده‌اند.', 'Calendro connects customers with service businesses, from finding a location to booking. Two React Native apps are published on Cafe Bazaar, alongside Next.js business and admin panels.', 'Calendroは店舗探しから予約まで利用者と事業者をつなぎます。2つのReact NativeアプリをCafe Bazaarで公開し、事業者・管理者向けパネルをNext.jsで構築しました。'),
    challenge: tr('یکپارچه‌سازی تجربه رزرو در وب و موبایل با تقویم شمسی، مدیریت شیفت و جلوگیری از تداخل زمانی، همراه با احراز هویت امن.', 'Unify web and mobile booking with the Jalali calendar, shift scheduling, overlap validation, and secure authentication.', 'イラン暦、シフト管理、時間の重複検証、安全な認証を備えた予約体験をウェブとモバイルで統一すること。'),
    approach: tr('مرور نوبت با تقویم شمسی، ثبت نوبت حضوری مرحله‌ای و انتخاب مکان روی نقشه را پیاده‌سازی کردم. احراز هویت رمز و OTP از JWT در کوکی httpOnly و پروکسی Next.js استفاده می‌کند تا توکن‌ها در دسترس جاوااسکریپت کلاینت نباشند.', 'Implemented a Jalali appointment browser, walk-in booking wizard, and map location picker. Password and OTP authentication use JWTs in httpOnly cookies through a Next.js proxy, keeping tokens out of client JavaScript.', 'イラン暦の予約一覧、店頭予約ウィザード、地図の位置選択を実装。パスワード・OTP認証はNext.jsプロキシとhttpOnly CookieのJWTを使い、トークンを保護します。'),
    features: [tr('دو اپلیکیشن React Native / Expo در کافه‌بازار', 'Two React Native / Expo apps on Cafe Bazaar', 'Cafe Bazaarで公開した2つのReact Native / Expoアプリ'), tr('مدیریت شیفت و بررسی تداخل نوبت‌ها', 'Shift management and appointment overlap validation', 'シフト管理と予約時間の重複検証'), tr('انتخاب موقعیت با Leaflet و OpenStreetMap', 'Location picking with Leaflet and OpenStreetMap', 'LeafletとOpenStreetMapによる位置選択')],
    stack: ['Next.js 15', 'React Native', 'Expo', 'TypeScript', 'Tailwind CSS', 'Zustand', 'TanStack Query', 'NestJS'],
  },
  {
    slug: 'b2b-distribution', name: 'B2B Distribution', category: 'enterprise', year: '2025', status: 'delivered', type: tr('همکاری تیمی · پروژه خارجی', 'Team collaboration · External project', 'チーム開発・外部案件'), role: tr('توسعه‌دهنده فرانت‌اند', 'Frontend developer', 'フロントエンド開発'), color: 'blue',
    title: tr('پیچیدگی زنجیره تأمین، ساده‌تر.', 'Complex supply. Clear interfaces.', '複雑な流通に、明快なUIを。'),
    summary: tr('توسعه رابط کاربری و اتصال داده‌های API برای یک پلتفرم بزرگ توزیع B2B.', 'Frontend development and API integration for a large-scale B2B distribution platform.', '大規模B2B流通プラットフォームの画面開発とAPI連携。'),
    overview: tr('در یک پروژه تیمی یک‌ساله برای پلتفرم توزیع B2B، مسئول توسعه رابط کاربری و یکپارچه‌سازی داده‌های API بودم. محصول در مقیاس یک سامانه بزرگ زنجیره تأمین توسعه داده شد.', 'Contributed as a frontend developer to a year-long team project. My responsibilities covered UI development and API data integration across a large-scale supply-chain product.', '約1年間のチーム開発に参加。大規模なサプライチェーン製品で、画面開発とAPIデータ連携を担当しました。'),
    challenge: tr('نمایش داده‌های یک سامانه بزرگ زنجیره تأمین در رابطی کاربردی و هماهنگ با APIهای تیم بک‌اند.', 'Present supply-chain data through usable interfaces consistent with the backend team’s APIs.', 'サプライチェーンのデータを、バックエンドAPIと整合する使いやすい画面として提供すること。'),
    approach: tr('صفحات را با Next.js و Ant Design توسعه دادم و داده‌ها را از طریق REST API یکپارچه کردم. نقش من در این پروژه، فرانت‌اند و همکاری با تیم بود.', 'Built interfaces with Next.js and Ant Design, integrating data through REST APIs in collaboration with the project team.', 'チームと協力し、Next.jsとAnt Designで画面を構築。REST APIを通じてデータを連携しました。'),
    features: [tr('رابط کاربری با Next.js', 'Next.js user interfaces', 'Next.jsによる画面開発'), tr('کامپوننت‌های Ant Design', 'Ant Design component integration', 'Ant Designコンポーネントの活用'), tr('یکپارچه‌سازی داده‌های REST API', 'REST API data integration', 'REST APIデータの連携')], stack: ['Next.js', 'Ant Design', 'REST API'],
  },
  {
    slug: 'office-automation', name: 'Office Automation', category: 'enterprise', year: '2023', status: 'delivered', type: company, role: fullstack, color: 'sand',
    title: tr('جریان کاری، بدون گره.', 'Keep the work moving.', '業務の流れを、スムーズに。'),
    summary: tr('سامانه یکپارچه مکاتبات داخلی، تأییدیه‌ها و گردش اسناد سازمانی.', 'An end-to-end platform for correspondence, approvals, and document workflows.', '社内文書、承認、ドキュメントワークフローを一元化するシステム。'),
    overview: tr('اولین پروژه بزرگ من در رایان افزار پارسیان؛ سامانه‌ای برای مدیریت مکاتبات و گردش اسناد داخلی که طراحی و توسعه فول‌استک آن را از ابتدا تا تحویل انجام دادم.', 'My first major project at Rayan Afzar Parsian: an office automation platform for correspondence and document workflows, designed and delivered end to end.', 'Rayan Afzar Parsianで初めて担当した大規模案件。社内文書とワークフローを管理する業務システムを、設計から納品まで担当しました。'),
    challenge: tr('گردآوری مکاتبات، مراحل تأیید و گردش اسناد در یک نرم‌افزار سازمانی واحد.', 'Bring correspondence, approval steps, and document workflows into one enterprise application.', '社内文書のやり取り、承認手順、文書の流れをひとつのアプリにまとめること。'),
    approach: tr('برنامه را با C#، Blazor و ASP.NET Core ساختم و برای نگهداری داده‌ها از SQL Server استفاده کردم. رابط و منطق برنامه متناسب با گردش مکاتبات سازمان طراحی شد.', 'Built the application with C#, Blazor, ASP.NET Core, and SQL Server, shaping the interface and application logic around organizational workflows.', 'C#、Blazor、ASP.NET Core、SQL Serverを使用。組織の文書業務に合わせて画面とロジックを設計しました。'),
    features: [tr('مدیریت مکاتبات داخلی', 'Internal correspondence management', '社内文書の管理'), tr('پشتیبانی از مراحل تأیید', 'Approval workflow support', '承認ワークフロー'), tr('گردش اسناد یکپارچه', 'Unified document workflows', '統合された文書ワークフロー')], stack: ['C#', 'Blazor', 'ASP.NET Core', 'SQL Server'],
  },
  {
    slug: 'cmms', name: 'CMMS', category: 'enterprise', year: '—', status: 'delivered', type: company, role: fullstack, color: 'mint',
    title: tr('نگهداری امروز، اطمینان فردا.', 'Care today. Reliability tomorrow.', '今日の保全が、明日の安心へ。'),
    summary: tr('سامانه مدیریت تجهیزات و زمان‌بندی نگهداری و تعمیرات پیشگیرانه.', 'Enterprise equipment management and preventive maintenance scheduling.', '設備管理と予防保全の計画を支える業務システム。'),
    overview: tr('سامانه نگهداری و تعمیرات در رایان افزار پارسیان، با رابط کاملاً راست‌به‌چپ، برای مدیریت تجهیزات و زمان‌بندی نگهداری پیشگیرانه توسعه داده شد.', 'A maintenance management system developed at Rayan Afzar Parsian, with a fully RTL interface for equipment management and preventive maintenance scheduling.', 'Rayan Afzar Parsianで開発した保全管理システム。完全なRTL画面で、設備管理と予防保全の計画をサポートします。'),
    challenge: tr('ایجاد محیط فارسی و یکپارچه برای مدیریت تجهیزات و برنامه‌ریزی نگهداری پیشگیرانه.', 'Create a unified Persian workspace for equipment and preventive maintenance planning.', '設備管理と予防保全計画を整理できるペルシャ語の業務環境を作ること。'),
    approach: tr('با C#، Blazor و ASP.NET Core، بخش‌های مدیریت تجهیزات و برنامه‌ریزی PM را در یک رابط راست‌به‌چپ پیاده‌سازی کردم.', 'Implemented equipment management and PM scheduling with C#, Blazor, and ASP.NET Core in a fully right-to-left interface.', 'C#、Blazor、ASP.NET Coreで設備管理と予防保全計画をRTL画面として実装しました。'),
    features: [tr('مدیریت اطلاعات تجهیزات', 'Equipment information management', '設備情報の管理'), tr('زمان‌بندی نگهداری پیشگیرانه (PM)', 'Preventive maintenance (PM) scheduling', '予防保全（PM）の計画'), tr('رابط کاملاً فارسی و راست‌به‌چپ', 'Fully Persian, right-to-left interface', 'ペルシャ語対応のRTL画面')], stack: ['C#', 'Blazor', 'ASP.NET Core'],
  },
  {
    slug: 'distribution', name: 'Distribution System', category: 'enterprise', year: '2025', status: 'delivered', type: company, role: fullstack, color: 'sand',
    title: tr('از موجودی تا مقصد.', 'From inventory to delivery.', '在庫から、配送先まで。'),
    summary: tr('نرم‌افزار اختصاصی توزیع و لجستیک؛ مدیریت ارسال، جابه‌جایی موجودی و گزارش‌ها.', 'Custom distribution software for dispatch, inventory movement, and reporting.', '出荷、在庫移動、レポート作成を支える専用の流通ソフトウェア。'),
    overview: tr('سامانه‌ای اختصاصی برای مشتری کشتارگاه، توسعه‌یافته در رایان افزار پارسیان؛ با تمرکز بر ارسال محصولات، جابه‌جایی موجودی و گزارش‌دهی عملیات توزیع.', 'A custom system built at Rayan Afzar Parsian for a slaughterhouse client, covering product dispatch, inventory movement, and distribution reporting.', '食肉処理事業者向けにRayan Afzar Parsianで開発。製品の出荷、在庫移動、流通業務レポートを管理します。'),
    challenge: tr('تبدیل نیازهای خاص توزیع و لجستیک مشتری به نرم‌افزاری متناسب با جریان روزانه کار.', 'Translate the client’s distribution requirements into software suited to daily operations.', '顧客固有の流通要件を、日々の業務に合うソフトウェアへ落とし込むこと。'),
    approach: tr('با C# و Blazor برنامه‌ای اختصاصی برای مدیریت ارسال محصولات، ثبت جابه‌جایی موجودی و گزارش‌دهی ساختم.', 'Built a tailored C# and Blazor application for dispatch, inventory movement, and operational reporting.', 'C#とBlazorで出荷管理、在庫移動の記録、業務レポートの専用アプリを構築しました。'),
    features: [tr('مدیریت ارسال محصولات', 'Product dispatch management', '製品の出荷管理'), tr('پیگیری جابه‌جایی موجودی', 'Inventory movement tracking', '在庫移動の追跡'), tr('گزارش‌دهی عملیات توزیع', 'Distribution operations reporting', '流通業務のレポート')], stack: ['C#', 'Blazor'],
  },
  {
    slug: 'coldino', name: 'Coldino', category: 'ai', year: '2026', status: 'live', type: company, role: tr('توسعه‌دهنده ماژول پلاک‌خوان', 'Plate recognition module developer', 'ナンバープレート認識モジュール開発'), color: 'blue',
    title: tr('بینایی ماشین، در قلب عملیات.', 'Vision that works on site.', '現場で役立つ画像認識。'),
    summary: tr('تشخیص پلاک چنددوربینه و بلادرنگ برای نرم‌افزار مدیریت سردخانه.', 'Real-time multi-camera plate recognition for cold storage management.', '冷蔵倉庫管理向けの複数カメラ対応リアルタイムナンバープレート認識。'),
    overview: tr('ماژول پلاک‌خوان Coldino را برای نرم‌افزار مدیریت سردخانه در رایان افزار پارسیان توسعه دادم. این ماژول کامل و عملیاتی است و تصاویر چند دوربین را بلادرنگ پردازش می‌کند.', 'Developed Coldino’s plate recognition module for cold storage management at Rayan Afzar Parsian. It is complete and operational, processing multiple camera streams in real time.', 'Rayan Afzar Parsianの冷蔵倉庫管理向けに認識モジュールを開発。完成・稼働済みで、複数カメラの映像をリアルタイムに処理します。'),
    challenge: tr('ساخت خط پردازش تشخیص پلاک چنددوربینه برای یک نرم‌افزار عملیاتی مدیریت سردخانه.', 'Build a multi-camera detection pipeline for an operational cold storage management application.', '稼働中の冷蔵倉庫管理アプリ向けに、複数カメラの認識パイプラインを作ること。'),
    approach: tr('از Python، YOLOv8 و OpenCV برای تشخیص و پردازش تصویر استفاده کردم و ماژول را با FastAPI به نرم‌افزار مدیریت متصل کردم.', 'Used Python, YOLOv8, and OpenCV for detection and image processing, exposing the module through FastAPI.', 'Python、YOLOv8、OpenCVで検出と画像処理を実装し、FastAPIを介して管理ソフトウェアと連携しました。'),
    features: [tr('پردازش تصاویر چند دوربین', 'Multi-camera stream processing', '複数カメラの映像処理'), tr('تشخیص بلادرنگ با YOLOv8 و OpenCV', 'Real-time YOLOv8 and OpenCV detection', 'YOLOv8とOpenCVによるリアルタイム検出'), tr('ماژول کامل و عملیاتی در نرم‌افزار سردخانه', 'Completed, operational cold storage module', '冷蔵倉庫システムで完成・稼働中')], stack: ['Python', 'YOLOv8', 'OpenCV', 'FastAPI'],
  },
  {
    slug: 'smart-parking', name: 'Smart Parking', category: 'ai', year: '2026', status: 'live', type: personal, role: solo, color: 'mint',
    title: tr('ورود و خروج، هوشمندتر.', 'A smarter way in and out.', '入出庫を、もっとスマートに。'),
    summary: tr('مدیریت پارکینگ با پلاک‌خوان بلادرنگ؛ مستقر و فعال در یک پارکینگ واقعی.', 'Real-time plate recognition and parking management, deployed in a real open-air lot.', '実際の屋外駐車場で稼働する、リアルタイム画像認識・駐車場管理。'),
    overview: tr('سامانه شخصی مدیریت خودکار پارکینگ که ورود و خروج خودرو را با پلاک‌خوان تشخیص می‌دهد. با دوربین‌های ورودی و خروجی در یک پارکینگ روباز واقعی مستقر شده و فعالانه استفاده می‌شود.', 'An independently built system detecting vehicle entry and exit with real-time plate recognition. Deployed and actively used in an open-air parking lot with entry and exit cameras.', 'リアルタイム画像認識で車両の入出庫を検知する個人開発のシステム。入口・出口カメラを備えた実際の屋外駐車場で稼働しています。'),
    challenge: tr('تبدیل تصاویر زنده دوربین‌ها به رویدادهای ورود و خروج، همراه با کنترل دوربین و نظارت زنده.', 'Turn live camera feeds into entry and exit events, with camera control and live monitoring.', 'ライブ映像から入出庫イベントを生成し、カメラ制御とリアルタイム監視を提供すること。'),
    approach: tr('خط پردازش Python و YOLOv8 را به دوربین‌های RTSP متصل کردم. FastAPI و PostgreSQL لایه سرویس و داده را تشکیل می‌دهند. داشبورد نظارت زنده ساختم و مقاله پژوهشی فارسی درباره روش تشخیص نوشتم.', 'Connected a Python / YOLOv8 pipeline to RTSP cameras with FastAPI and PostgreSQL. Built a live monitoring dashboard and authored a Persian research paper on the recognition approach.', 'Python / YOLOv8をRTSPカメラに接続し、FastAPIとPostgreSQLで基盤を構築。ライブ監視画面を作り、認識手法に関するペルシャ語の研究論文も執筆しました。'),
    features: [tr('تشخیص خودکار ورود و خروج', 'Automatic entry and exit detection', '入出庫の自動検知'), tr('کنترل دوربین و داشبورد زنده', 'Camera control and live dashboard', 'カメラ制御とライブ監視画面'), tr('استقرار واقعی و نگارش مقاله پژوهشی', 'Real-world deployment and research paper', '実際の現場への導入と研究論文の執筆')], stack: ['Python', 'YOLOv8', 'FastAPI', 'PostgreSQL', 'RTSP / CCTV'],
  },
  {
    slug: 'semantic-search', name: 'Semantic Search', category: 'ai', year: '2026', status: 'development', type: personal, role: solo, color: 'lavender',
    title: tr('جست‌وجوی معنا، فراتر از کلمات.', 'Find the meaning. Beyond words.', '言葉の先にある、意味を探す。'),
    summary: tr('موتور جست‌وجوی محصول بر پایه معنا، با embedding و pgvector؛ در حال توسعه.', 'Meaning-based product search powered by embeddings and pgvector. In development.', '埋め込みとpgvectorを活用した意味ベースの商品検索。現在開発中。'),
    overview: tr('پروژه‌ای شخصی برای یافتن محصولات بر اساس معنای جست‌وجو، فراتر از تطبیق دقیق کلیدواژه‌ها. این محصول در حال توسعه است و هنوز عمومی منتشر نشده است.', 'A personal project finding products by meaning rather than exact keyword matching. Currently in development and not yet publicly released.', 'キーワードの完全一致に頼らず、意味に基づいて商品を探す個人プロジェクト。現在開発中で、一般公開はまだ行っていません。'),
    challenge: tr('کاهش وابستگی به کلمات دقیق با نمایش ارتباط معنایی میان پرس‌وجو و اطلاعات محصولات.', 'Reduce exact-word reliance by representing semantic relationships between queries and products.', '検索文と商品情報の意味的な関係を表現し、単語の完全一致への依存を減らすこと。'),
    approach: tr('بک‌اند را با Python و FastAPI می‌سازم؛ embeddingها با pgvector نگهداری و ورود داده با Celery پردازش می‌شود. رابط با Next.js در حال توسعه است.', 'Building a Python / FastAPI backend, pgvector embeddings, and Celery-based ingestion, with a Next.js frontend.', 'Python / FastAPI、pgvectorの埋め込み、Celeryのデータ取り込み、Next.jsの画面を開発しています。'),
    features: [tr('جست‌وجوی معنایی محصولات', 'Semantic product search', '意味ベースの商品検索'), tr('ذخیره embedding با pgvector', 'Embedding storage with pgvector', 'pgvectorによる埋め込み保存'), tr('ورود داده در پس‌زمینه با Celery', 'Background ingestion with Celery', 'Celeryによるバックグラウンドデータ取り込み')], stack: ['Python', 'FastAPI', 'pgvector', 'Celery', 'Next.js'],
  },
];
const order=['nexcart','calendro','smart-parking','coldino','b2b-distribution','office-automation','distribution','cmms','semantic-search'];
export const projects: Project[] = order.map(slug=>raw.find(p=>p.slug===slug)!);
