import type { Localized } from '../i18n';

export interface Item {
  slug: string;
  icon: string;
  title: Localized;
  text: Localized;
}

export const services: Item[] = [
  {
    slug: 'visa',
    icon: '🛂',
    title: { en: 'Iran visa', fa: 'ویزای ایران', tr: 'İran vizesi', ar: 'تأشيرة إيران', ru: 'Виза в Иран', de: 'Iran-Visum' },
    text: { en: 'We prepare your visa authorisation code and guide you through the application step by step.', fa: 'کد تأییدیه ویزا را آماده می‌کنیم و قدم‌به‌قدم در درخواست راهنمایی‌تان می‌کنیم.' },
  },
  {
    slug: 'transfer',
    icon: '🚐',
    title: { en: 'Transfers', fa: 'ترانسفر', tr: 'Transfer', ar: 'التنقلات', ru: 'Трансферы', de: 'Transfers' },
    text: { en: 'Airport pick-up and city-to-city transfers, shared or private.', fa: 'استقبال فرودگاهی و جابه‌جایی بین شهرها، گروهی یا اختصاصی.' },
  },
  {
    slug: 'guide',
    icon: '🧭',
    title: { en: 'Tour guides', fa: 'راهنمای تور', tr: 'Tur rehberi', ar: 'مرشدون سياحيون', ru: 'Гиды', de: 'Reiseleiter' },
    text: { en: 'Licensed guides who speak your language, for a day or the whole trip.', fa: 'راهنمایان دارای مجوز به زبان شما، برای یک روز یا کل سفر.' },
  },
  {
    slug: 'insurance',
    icon: '🛡️',
    title: { en: 'Travel insurance', fa: 'بیمه مسافرتی', tr: 'Seyahat sigortası', ar: 'تأمين السفر', ru: 'Страховка', de: 'Reiseversicherung' },
    text: { en: 'Insurance that is valid in Iran, arranged before you arrive.', fa: 'بیمه معتبر در ایران، پیش از ورودتان.' },
  },
  {
    slug: 'transport',
    icon: '✈️',
    title: { en: 'Domestic flights & trains', fa: 'پرواز و قطار داخلی', tr: 'İç hat uçuş ve tren', ar: 'رحلات وقطارات داخلية', ru: 'Внутренние перелёты и поезда', de: 'Inlandsflüge & Züge' },
    text: { en: 'Domestic flight, train and bus tickets booked for you.', fa: 'رزرو بلیت پرواز، قطار و اتوبوس داخلی.' },
  },
];

export const treatments: Item[] = [
  {
    slug: 'dental',
    icon: '🦷',
    title: { en: 'Dental care', fa: 'دندانپزشکی', tr: 'Diş tedavisi', ar: 'طب الأسنان', ru: 'Стоматология', de: 'Zahnmedizin' },
    text: { en: 'Implants, veneers, crowns and full smile makeovers.', fa: 'ایمپلنت، لمینت، روکش و طراحی لبخند.' },
  },
  {
    slug: 'cosmetic',
    icon: '✨',
    title: { en: 'Cosmetic surgery', fa: 'جراحی زیبایی', tr: 'Estetik cerrahi', ar: 'الجراحة التجميلية', ru: 'Пластическая хирургия', de: 'Schönheitschirurgie' },
    text: { en: 'Rhinoplasty and other procedures with experienced surgeons.', fa: 'جراحی بینی و سایر اعمال با جراحان باتجربه.' },
  },
  {
    slug: 'eye',
    icon: '👁️',
    title: { en: 'Eye surgery', fa: 'جراحی چشم', tr: 'Göz cerrahisi', ar: 'جراحة العيون', ru: 'Офтальмология', de: 'Augenchirurgie' },
    text: { en: 'LASIK, cataract and other eye procedures.', fa: 'لیزیک، آب‌مروارید و سایر اعمال چشم.' },
  },
  {
    slug: 'fertility',
    icon: '👶',
    title: { en: 'Fertility & IVF', fa: 'ناباروری و IVF', tr: 'Tüp bebek', ar: 'الخصوبة وأطفال الأنابيب', ru: 'ЭКО', de: 'Kinderwunsch & IVF' },
    text: { en: 'Consultation and treatment at specialist fertility centres.', fa: 'مشاوره و درمان در مراکز تخصصی ناباروری.' },
  },
  {
    slug: 'checkup',
    icon: '🩺',
    title: { en: 'Health check-ups', fa: 'چکاپ کامل', tr: 'Check-up', ar: 'الفحوصات الشاملة', ru: 'Чекап', de: 'Gesundheitscheck' },
    text: { en: 'Full check-up packages completed in one or two days.', fa: 'بسته‌های چکاپ کامل در یک یا دو روز.' },
  },
];
