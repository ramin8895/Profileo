import { tr, type Localized } from './content';

export interface ResearchComparisonRow {
  method: string;
  coreIdea: Localized;
  strengths: Localized;
  limitations: Localized;
}

export interface ResearchPaper {
  id: string;
  year: string;
  conference: Localized;
  conferenceShort: string;
  file: string;
  downloadName: string;
  coverImage?: string;
  coverAlt: Localized;
  hasMonographCover?: boolean;
  pages: number;
  format: Localized;
  label: Localized;
  title: Localized;
  authors: Localized;
  affiliation: Localized;
  description: Localized;
  tags: string[];
  highlights: Localized[];
  pipelineSteps?: string[];
  comparisonRows?: ResearchComparisonRow[];
  metricsNote?: Localized;
  bibtex: string;
  readLabel: Localized;
  exploreLabel: Localized;
  downloadLabel: Localized;
}

export const researchPapers: ResearchPaper[] = [
  {
    id: 'medical-image-deep-learning',
    year: '2026',
    conference: tr(
      'یازدهمین کنفرانس بین‌المللی ترکیبیات، رمزنگاری، علوم کامپیوتر و محاسبات (دانشگاه علم و صنعت ایران)',
      '11th International Conference on Combinatorics, Cryptography, Computer Science and Computing (i4c.iust.ac.ir)',
      '第11回 組合せ論・暗号・計算機科学国際会議（i4c.iust.ac.ir）'
    ),
    conferenceShort: 'i4c.iust.ac.ir · 2026',
    file: '/research/medical-image-deep-learning.pdf',
    downloadName: 'ramin-hamehpour-medical-image-deep-learning.pdf',
    coverImage: '/src/assets/images/research_medical_imaging_1794819718229.jpg',
    hasMonographCover: true,
    coverAlt: tr(
      'تصویرسازی علمی قطعهبندی حجمی تصاویر MRI مغز و تبدیل به مش سه‌بعدی با مکعب‌های رونده',
      'Volumetric MRI brain segmentation transitioning to a 3D Marching Cubes anatomical mesh',
      'MRI脳画像の領域分割とMarching Cubesによる3Dメッシュ化の可視化図'
    ),
    pages: 14,
    format: tr('مقاله کنفرانس · فارسی · PDF', 'Conference Paper · Persian · PDF', '国際会議論文 · ペルシャ語 · PDF'),
    label: tr('مقاله جدید · بینایی ماشین و یادگیری عمیق پزشکی', 'NEW PUBLICATION · MEDICAL IMAGING & DEEP LEARNING', '新着論文 · 医用画像解析と深層学習'),
    title: tr(
      'کاربرد یادگیری عمیق در تحلیل تصاویر پزشکی برای کمک به تشخیص بیماری‌ها',
      'Applications of Deep Learning in Medical Image Analysis to Aid Disease Diagnosis',
      '疾患診断支援のための医用画像解析におけるディープラーニングの応用'
    ),
    authors: tr(
      'محمد اقبال خوانچه سپهرالدین، رامین حمه‌پور',
      'Mohammad Eghbal Khancheh Sepehreddin & Ramin Hamehpour',
      'Mohammad Eghbal Khancheh Sepehreddin、ラミン・ハメプール'
    ),
    affiliation: tr(
      'گروه مهندسی کامپیوتر، دانشگاه آزاد اسلامی واحد مهاباد',
      'Department of Computer Engineering, Islamic Azad University, Mahabad Branch',
      'イスラーム自由大学 マハーバード校 コンピュータ工学科'
    ),
    description: tr(
      'بررسی جامع نقش یادگیری عمیق در سه وظیفه کلیدی تحلیل تصاویر MRI، CT و رادیوگرافی: طبقه‌بندی سطح تصویر، تشخیص ناحیه مشکوک و قطعه‌بندی پیکسلی/وکسلی. مقاله روش‌های کلاسیک (اوتسو)، CNNها (CheXNet)، معماری U-Net و nnU-Net، مدل‌های Transformer (ViT و TransUNet) و مدل‌های بنیادین (MedSAM) را مقایسه کرده و پل ارتباطی خروجی قطعه‌بندی را با نمایش سه‌بعدی در گرافیک کامپیوتری (Marching Cubes و Direct Volume Rendering) و چالش‌های بالینی مانند افت تعمیم‌پذیری در مراکز خارجی بررسی می‌کند.',
      'A structured analysis of deep learning across medical image classification, lesion detection, and pixel/voxel segmentation in MRI, CT, and radiography. Compares classical methods (Otsu), CNNs (CheXNet), U-Net/nnU-Net, Vision Transformers (ViT, TransUNet), and foundation models (MedSAM), while bridging segmentation masks to 3D computer graphics (Marching Cubes vs. Direct Volume Rendering) and addressing multi-center generalization and clinical validation.',
      'MRI・CT・X線画像における分類・検出・領域分割の3課題について深層学習の役割を体系的に分析した論文です。従来手法（Otsu）、CNN（CheXNet）、U-Net/nnU-Net、Transformer（ViT・TransUNet）、基盤モデル（MedSAM）を比較し、分割マスクの3D可視化（Marching Cubesと直接ボリュームレンダリング）や外部医療機関での汎化性能低下といった臨床導入の課題を論じています。'
    ),
    tags: ['Deep Learning', 'U-Net / nnU-Net', 'MedSAM', 'Vision Transformer', '3D Marching Cubes'],
    pipelineSteps: [
      'Image Acquisition (CT / MRI / X-ray)',
      'Pre-processing (Denoise, Z-score Norm, Windowing)',
      'Model (CNN / U-Net / Transformer / MedSAM)',
      'Output (Class Label / Bounding Box / 3D Mask)',
      'Evaluation & 3D View (Dice, IoU, AUC, Clinical Review)',
    ],
    comparisonRows: [
      {
        method: 'Classical (Otsu / Filters)',
        coreIdea: tr('آستانه‌گذاری واریانس بین‌کلاسی و ویژگی‌های دست‌ساز بدون داده آموزشی', 'Explicit intensity thresholds & hand-crafted features without training data', '学習データ不要の輝度閾値処理・手作業特徴量'),
        strengths: tr('ساده، سبک و کاملاً تفسیرپذیر برای تصاویر با کنتراست روشن', 'Fast, interpretable baseline for high-contrast regions', '軽量で解釈性が高く、前処理や高コントラスト画像に有効'),
        limitations: tr('حساس به نویز، ناهمگنی شدت و تغییر پروتکل تصویربرداری', 'Sensitive to noise, intensity inhomogeneity, and scanner protocols', 'ノイズや撮像プロトコル変化に脆弱'),
      },
      {
        method: 'CNN (DenseNet / CheXNet)',
        coreIdea: tr('یادگیری سلسله‌مراتبی ویژگی‌ها با کانولوشن و نقشه‌های گرمایی', 'Hierarchical convolutional features with activation heatmaps', '畳み込みによる階層的特徴学習とヒートマップ'),
        strengths: tr('حذف طراحی دستی ویژگی؛ عملکرد قوی در طبقه‌بندی قفسه سینه', 'Eliminates manual features; strong classification accuracy', '特徴設計が不要で胸部X線分類などで高い精度'),
        limitations: tr('نیازمند برچسب‌گذاری دقیق؛ افت معنادار AUC روی داده بیمارستان خارجی', 'Label-hungry; significant AUC drop on external hospital data', '外部医療機関データでの汎化性能低下の報告あり'),
      },
      {
        method: 'U-Net / nnU-Net',
        coreIdea: tr('معماری رمزگذار–رمزگشا با اتصالات جهشی و پیکربندی خودکار خط لوله', 'Symmetric encoder–decoder with skip connections & self-configuring pipeline', 'スキップ接続付きEncoder-Decoderと自動パイプライン構成'),
        strengths: tr('دقت مکانی بالا حتی با داده‌های برچسب‌دار نسبتاً کم؛ مبنای قدرتمند مقایسه', 'High spatial accuracy with limited masks; strong benchmark baseline', '少ない教師データでも高い空間精度・強力なベースライン'),
        limitations: tr('نیازمند ماسک پیکسلی دقیق و مصرف حافظه بالا در حجم‌های سه‌بعدی', 'Requires pixel-accurate masks and heavy VRAM in 3D volumes', '精密なマスクが必要で3D処理時にメモリ消費が大'),
      },
      {
        method: 'Transformer (ViT / TransUNet)',
        coreIdea: tr('تبدیل وصله‌های تصویر به توکن و مدلسازی توجه سراسری (Global Attention)', 'Image patches as tokens with global self-attention & CNN hybrid encoders', '画像パッチのトークン化と大域的自己注意機構'),
        strengths: tr('مدل‌سازی وابستگی‌های دوربرد فضایی در تصاویر پیچیده چنداندامی', 'Captures long-range spatial dependencies across organs', '臓器間の長距離空間依存関係をモデル化可能'),
        limitations: tr('رشد درجه دوم هزینه توجه و نیاز به پیش‌آموزش گسترده', 'Quadratic attention cost; requires large pre-training datasets', '計算量が二乗で増大し大規模な事前学習が必要'),
      },
      {
        method: 'Foundation Models (MedSAM)',
        coreIdea: tr('تنظیم دقیق SAM روی ۱.۵۷ میلیون جفت تصویر–ماسک در ۱۰ روش تصویربرداری', 'Fine-tuned SAM on 1.57M image–mask pairs across 10 modalities', '10モダリティ・157万組で微調整した汎用分割モデル'),
        strengths: tr('کاهش شدید وابستگی به برچسب و تعمیم‌پذیری میان وظایف گوناگون', 'Reduces annotation burden and generalizes across 86+ internal tasks', 'アノテーション依存を軽減し多様なタスクへ汎化'),
        limitations: tr('نیاز به راهنمای کاربر (جعبه محدودکننده) و ضعف در مرزهای کم‌کنتراست', 'Needs prompt guidance (bounding box) and struggles on faint boundaries', 'プロンプト入力が必要で低コントラスト境界に課題'),
      },
    ],
    highlights: [
      tr('تدوین جدول مقایسه‌ای مستند از پژوهش‌های مرجع (BRATS، MSD، CheXNet، Zech، nnU-Net، MedSAM) بدون حدس عددی.', 'Evidence-backed synthesis of landmark benchmarks (BRATS, MSD, CheXNet, nnU-Net, MedSAM) reporting strictly verified metrics.', 'BRATS・MSD・CheXNet・nnU-Net・MedSAM等の先行研究を厳密な検証値に基づき比較整理。'),
      tr('تحلیل معیارهای ارزیابی در شرایط نامتوازنی کلاس (Dice، IoU، Precision/Recall، Specificity، AUC) بر پایه چارچوب Metrics Reloaded.', 'Analysis of evaluation pitfall scenarios under class imbalance (Dice = 2·IoU / (1 + IoU)) aligned with Metrics Reloaded.', 'クラス不均衡下での評価指標（Dice、IoU、F1、AUC）の選定指針をMetrics Reloadedに基づき解説。'),
      tr('تبیین ارتباط زنجیره‌ای بین قطعه‌بندی، استخراج مش سطحی (Marching Cubes) و رندرینگ حجمی مستقیم (Direct Volume Rendering).', 'Clarifies the non-competing pipeline from voxel segmentation to Marching Cubes meshes and Direct Volume Rendering.', '領域分割からMarching Cubes・直接ボリュームレンダリングへ至る3D可視化パイプラインを体系化。'),
    ],
    metricsNote: tr(
      'نکته کلیدی مقاله: زیبایی خروجی سه‌بعدی به معنای صحت بالینی نیست؛ ماسک‌ها باید همراه با برش‌های دوبعدی و تحت نظارت متخصص بررسی شوند.',
      'Core clinical takeaway: a visually crisp 3D surface render does not guarantee segmentation accuracy—2D slice inspection and specialist oversight remain essential.',
      '重要な結論：美しい3Dレンダリングは領域分割の正確性を保証せず、2Dスライス確認と専門医の監督が不可欠である。'
    ),
    bibtex: `@inproceedings{sepehreddin2026medical,
  title     = {Applications of Deep Learning in Medical Image Analysis to Aid Disease Diagnosis},
  author    = {Khancheh Sepehreddin, Mohammad Eghbal and Hamehpour, Ramin},
  booktitle = {Proceedings of the 11th International Conference on Combinatorics, Cryptography, Computer Science and Computing (i4c)},
  year      = {2026},
  organization = {Iran University of Science and Technology (i4c.iust.ac.ir)},
  pages     = {1--14},
  language  = {Persian}
}`,
    readLabel: tr('مطالعه خلاصه تعاملی و PDF', 'Interactive Reader & PDF', '詳細・PDFを読む'),
    exploreLabel: tr('مشاهده PDF در تب جدید', 'Open PDF', 'PDFを開く'),
    downloadLabel: tr('دریافت فایل PDF', 'Download PDF', 'PDFをダウンロード'),
  },
  {
    id: 'multinational-anpr',
    year: '2026',
    conference: tr(
      'یازدهمین کنفرانس بین‌المللی ترکیبیات، رمزنگاری، علوم کامپیوتر و محاسبات (دانشگاه علم و صنعت ایران)',
      '11th International Conference on Combinatorics, Cryptography, Computer Science and Computing (i4c.iust.ac.ir)',
      '第11回 組合せ論・暗号・計算機科学国際会議（i4c.iust.ac.ir）'
    ),
    conferenceShort: 'i4c.iust.ac.ir · 2026',
    file: '/research/multinational-anpr.pdf',
    downloadName: 'ramin-hamehpour-multinational-anpr.pdf',
    coverImage: '/research/multinational-anpr-cover.webp',
    coverAlt: tr(
      'صفحه اول مقاله پژوهشی پلاک‌خوانی چندملیتی',
      'First page of the multinational license plate recognition paper',
      '多国籍ナンバープレート認識に関する論文の最初のページ'
    ),
    pages: 10,
    format: tr('مقاله کنفرانس · فارسی · PDF', 'Conference Paper · Persian · PDF', '国際会議論文 · ペルシャ語 · PDF'),
    label: tr('مقاله منتشرشده · معماری سامانه پلاک‌خوانی', 'PUBLISHED PAPER · REAL-TIME COMPUTER VISION', '発表論文 · リアルタイム画像認識'),
    title: tr(
      'طراحی یک سامانه پردازش تصویر هوشمند برای مدیریت پارکینگ مبتنی بر بازشناسی خودکار پلاک خودرو با پشتیبانی چندملیتی',
      'Designing an Intelligent Image Processing System for Parking Management with Multinational Automatic License Plate Recognition',
      '多国籍ナンバープレートの自動認識に対応する、駐車場管理向け知的画像処理システムの設計'
    ),
    authors: tr(
      'محمد اقبال خوانچه سپهرالدین، رامین حمه‌پور',
      'Mohammad Eghbal Khancheh Sepehreddin & Ramin Hamehpour',
      'Mohammad Eghbal Khancheh Sepehreddin、ラミン・ハメプール'
    ),
    affiliation: tr(
      'گروه مهندسی کامپیوتر، دانشگاه آزاد اسلامی واحد مهاباد',
      'Department of Computer Engineering, Islamic Azad University, Mahabad Branch',
      'イスラーム自由大学 マハーバード校 コンピュータ工学科'
    ),
    description: tr(
      'پژوهشی درباره معماری یک سامانه پلاک‌خوان عملیاتی که کشور، الفبا و قواعد پلاک را به‌صورت پیکربندی از هسته پردازش جدا می‌کند. مقاله شامل ارتباط چهار فرایند مستقل با Redis Streams، رجیستری راهبرد بازشناسی بر پایه (کشور، خط)، ردیابی پلاک، رأی‌گیری بین فریم‌ها و ارزیابی دقت تطابق کامل ۸۷.۶٪ روی پلاک‌های پنج کشور در سه شرایط نوری مختلف است.',
      'Presents a production ANPR architecture that decouples country, script, and plate syntax from the processing core via configuration. Covers four independent processes over Redis Streams, a (country, script) recognition strategy registry, plate tracking, cross-frame voting, and an operational evaluation reaching 87.6% exact match across five countries.',
      '国・文字体系・プレート規則を設定データとして処理の中核から分離する実用的なANPRアーキテクチャの研究です。Redis Streamsによる4プロセス間通信、認識方式レジストリ、追跡、フレーム間投票、5カ国のプレートに対する完全一致率87.6%の実証評価を解説しています。'
    ),
    tags: ['Computer Vision', 'Multinational ANPR', 'Redis Streams', 'Multi-Camera Tracking', 'YOLOv8'],
    pipelineSteps: [
      'RTSP Video Capture Process',
      'Redis Streams Message Queue',
      'YOLOv8 Detection & Strategy Registry (Country, Script)',
      'Cross-Frame Voting & Tracker',
      'Parking REST API & Operator Dashboard',
    ],
    highlights: [
      tr('جداسازی کامل قواعد کشور، الفبا و قالب پلاک از هسته کد؛ افزودن کشور جدید تنها با یک فایل پیکربندی و بدون تغییر در خط لوله.', 'Configuration-driven country & script decoupling: supporting a new country requires a single config file with zero pipeline code edits.', '国別・文字種別ルールをコードから完全分離し、設定ファイル追加のみで新国対応を実現。'),
      tr('معماری چهار فرایند مستقل متصل با Redis Streams برای پردازش بلادرنگ چنددوربینه و پاسخ‌گویی هم‌زمان به اپراتور.', 'Four decoupled worker processes communicating over Redis Streams for resilient multi-camera throughput and operator review.', 'Redis Streamsで連携する4つの独立プロセスにより、複数カメラ処理とオペレーター確認を両立。'),
      tr('دقت تطابق کامل ۸۷.۶ درصد (بازه اطمینان ۹۵٪: ۸۶.۶ تا ۸۸.۵) در آزمون عملیاتی روی پلاک‌های ۵ کشور (فارسی، لاتین، عربی، ارمنی) در سه شرایط نوری.', 'Achieved 87.6% exact-match accuracy (95% CI: 86.6%–88.5%) in live tests across five countries and three lighting regimes.', '3種類の照明条件・5カ国の実データ評価で完全一致率87.6%（95%信頼区間: 86.6–88.5%）を達成。'),
    ],
    metricsNote: tr(
      'پیاده‌سازی عملی این پژوهش مستقیماً در سامانه‌های واقعی Smart Parking و Coldino در حال استفاده است.',
      'The architecture documented in this paper powers the live Smart Parking deployment and Coldino cold-storage module.',
      '本論文のアーキテクチャは、実稼働中のSmart ParkingおよびColdinoモジュールに直接採用されています。'
    ),
    bibtex: `@inproceedings{sepehreddin2026anpr,
  title     = {Designing an Intelligent Image Processing System for Parking Management with Multinational Automatic License Plate Recognition},
  author    = {Khancheh Sepehreddin, Mohammad Eghbal and Hamehpour, Ramin},
  booktitle = {Proceedings of the 11th International Conference on Combinatorics, Cryptography, Computer Science and Computing (i4c)},
  year      = {2026},
  organization = {Iran University of Science and Technology (i4c.iust.ac.ir)},
  pages     = {1--10},
  language  = {Persian}
}`,
    readLabel: tr('مطالعه خلاصه تعاملی و PDF', 'Interactive Reader & PDF', '詳細・PDFを読む'),
    exploreLabel: tr('مشاهده PDF در تب جدید', 'Open PDF', 'PDFを開く'),
    downloadLabel: tr('دریافت فایل PDF', 'Download PDF', 'PDFをダウンロード'),
  },
];
