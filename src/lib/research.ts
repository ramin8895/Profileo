import { tr } from './content';

export const research = {
  file: '/research/multinational-anpr.pdf',
  cover: '/research/multinational-anpr-cover.webp',
  pages: 10,
  label: tr('پژوهش / از پیاده‌سازی تا مقاله', 'RESEARCH / FROM IMPLEMENTATION TO PAPER', '研究 / 実装から論文へ'),
  title: tr(
    'طراحی یک سامانه پردازش تصویر هوشمند برای مدیریت پارکینگ مبتنی بر بازشناسی خودکار پلاک خودرو با پشتیبانی چندملیتی',
    'Designing an Intelligent Image Processing System for Parking Management with Multinational Automatic License Plate Recognition',
    '多国籍ナンバープレートの自動認識に対応する、駐車場管理向け知的画像処理システムの設計',
  ),
  authors: tr(
    'محمد اقبال خوانچه سپهرالدین و رامین حمه‌پور',
    'Mohammad Eghbal Khancheh Sepehreddin and Ramin Hamehpour',
    'Mohammad Eghbal Khancheh Sepehreddin、ラミン・ハメプール',
  ),
  description: tr(
    'پژوهشی درباره معماری یک سامانه پلاک‌خوان که کشور، الفبا و قواعد پلاک را از هسته پردازش جدا می‌کند. مقاله به ارتباط فرایندها با Redis Streams، انتخاب راهبرد بازشناسی، ردیابی پلاک و رأی‌گیری بین فریم‌ها می‌پردازد و روش ارزیابی خوانش را توضیح می‌دهد.',
    'A study of a license plate recognition architecture that separates country, script, and plate rules from the processing core. The paper covers Redis Streams communication, recognition strategy selection, plate tracking, cross-frame voting, and recognition evaluation.',
    '国・文字体系・プレート規則を処理の中核から分離する、ナンバープレート認識アーキテクチャの研究です。Redis Streamsによるプロセス間通信、認識方式の選択、追跡、フレーム間投票、認識精度の評価を扱います。',
  ),
  format: tr('مقاله فارسی · PDF', 'Persian paper · PDF', 'ペルシャ語の論文・PDF'),
  pageUnit: tr('صفحه', 'pages', 'ページ'),
  read: tr('مطالعه مقاله', 'Read the paper', '論文を読む'),
  download: tr('دریافت PDF', 'Download PDF', 'PDFをダウンロード'),
  coverAlt: tr('صفحه اول مقاله پژوهشی پلاک‌خوانی چندملیتی', 'First page of the multinational license plate recognition paper', '多国籍ナンバープレート認識に関する論文の最初のページ'),
};
