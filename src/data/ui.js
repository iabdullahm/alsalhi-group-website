/* ============================================================
   INTERFACE STRINGS — chrome, navigation, CTAs, forms.
   ============================================================ */

export const nav = {
  home: { en: 'Home', ar: 'الرئيسية' },
  about: { en: 'About', ar: 'من نحن' },
  companies: { en: 'Our Companies', ar: 'شركاتنا' },
  contact: { en: 'Contact', ar: 'تواصل معنا' },
  langSwitch: { en: 'العربية', ar: 'English' },
}

export const cta = {
  explorePortfolio: { en: 'Explore Our Portfolio', ar: 'استكشف محفظتنا' },
  discussProject: { en: 'Discuss Your Project', ar: 'ناقش مشروعك' },
  discover: { en: 'Discover', ar: 'اكتشف' }, // used as "Discover {shortName} →"
  viewAllCompanies: { en: 'View All Companies', ar: 'عرض جميع الشركات' },
  readFullMessage: { en: 'Read Full Chairman’s Message', ar: 'اقرأ رسالة رئيس مجلس الإدارة كاملة' },
  sendMessage: { en: 'Send Message', ar: 'إرسال الرسالة' },
  backToCompanies: { en: 'Back to Companies', ar: 'العودة إلى الشركات' },
  ourServices: { en: 'Core Capabilities', ar: 'القدرات الأساسية' },
  visitProject: { en: 'Visit', ar: 'زيارة' },
}

export const sections = {
  overview: { en: 'Company Overview', ar: 'نبذة عن المجموعة' },
  vision: { en: 'Our Vision', ar: 'رؤيتنا' },
  mission: { en: 'Our Mission', ar: 'رسالتنا' },
  story: { en: 'Our Story & Philosophy', ar: 'قصتنا وفلسفتنا' },
  portfolio: { en: 'Our Business Portfolio', ar: 'محفظة أعمالنا' },
  capabilities: { en: 'Our Integrated Capabilities', ar: 'قدراتنا المتكاملة' },
  approach: { en: 'How We Deliver', ar: 'كيف ننجز أعمالنا' },
  values: { en: 'Our Core Values', ar: 'قيمنا الأساسية' },
  omanVision: { en: 'Oman Vision 2040', ar: 'رؤية عُمان 2040' },
  chairman: { en: 'Chairman’s Message', ar: 'كلمة رئيس مجلس الإدارة' },
  leadership: { en: 'Leadership Perspective', ar: 'رؤية القيادة' },
  glance: { en: 'Al Salhi Group at a Glance', ar: 'مجموعة الصالحي في لمحة' },
  services: { en: 'Services', ar: 'الخدمات' },
  contact: { en: 'Get in Touch', ar: 'تواصل معنا' },
  projects: { en: 'Applications & Systems', ar: 'التطبيقات والأنظمة' },
}

/** Status labels used on a company's own "Applications & Systems" project cards. */
export const projectStatusLabels = {
  live: { en: 'Live', ar: 'مُفعّل' },
  'in-progress': { en: 'In Progress', ar: 'قيد العمل' },
}

/** "Group at a Glance" — Strategic Integration. Specialized Execution. */
export const glance = {
  title: { en: 'Strategic Integration. Specialized Execution.', ar: 'تكامل استراتيجي. تنفيذ متخصص.' },
  intro: {
    en: 'We combine dedicated sector expertise with a unified corporate platform to deliver comprehensive, end-to-end solutions.',
    ar: 'نجمع بين الخبرة القطاعية المتخصصة ومنصة مؤسسية موحّدة لتقديم حلول شاملة من البداية إلى النهاية.',
  },
  cards: [
    {
      title: { en: '5 Specialized Entities', ar: '5 كيانات متخصصة' },
      text: { en: 'Focused companies operating across critical growth sectors.', ar: 'شركات متخصصة تعمل في قطاعات النمو الحيوية.' },
    },
    {
      title: { en: 'National & Regional Reach', ar: 'حضور وطني وإقليمي' },
      text: { en: 'Headquartered in the Sultanate of Oman, serving private and public entities nationwide.', ar: 'يقع مقرها الرئيسي في سلطنة عُمان، وتخدم الجهات الخاصة والحكومية على مستوى السلطنة.' },
    },
    {
      title: { en: 'Oman Vision 2040', ar: 'رؤية عُمان 2040' },
      text: { en: 'Full strategic alignment with national economic diversification and local capability building.', ar: 'توافق استراتيجي تام مع التنويع الاقتصادي الوطني وبناء القدرات المحلية.' },
    },
  ],
}

/** Full lead-routing form — /contact page. */
export const contactForm = {
  title: { en: 'Connect with Al Salhi Group', ar: 'تواصل مع مجموعة الصالحي' },
  intro: {
    en: 'Partner with our leadership or engage directly with our specialized operating companies.',
    ar: 'تشارك مع قيادتنا أو تواصل مباشرة مع شركاتنا التشغيلية المتخصصة.',
  },
  formTitle: { en: 'Send an Inquiry', ar: 'أرسل استفساراً' },
  fields: {
    name: { en: 'Full Name', ar: 'الاسم الكامل' },
    email: { en: 'Corporate Email', ar: 'البريد الإلكتروني المؤسسي' },
    phone: { en: 'Phone Number', ar: 'رقم الهاتف' },
    organization: { en: 'Company / Organization', ar: 'الشركة / الجهة' },
    sector: { en: 'Nature of Engagement', ar: 'طبيعة التعامل' },
    message: { en: 'Project Scope / Message', ar: 'نطاق المشروع / الرسالة' },
  },
  sectorOptions: {
    en: [
      'Group Strategic Partnership / Investment',
      'HUB Media (Advertising, Media, Production, Events)',
      'HUB Software (Software Development & AI Solutions)',
      'Elite Resource (Industrial Workforce & Operational Manpower)',
      'Elite Industrial & Construction (Industrial Engineering, EPC & Rehabilitation)',
      'Real Estate Development (Asset Studies, Investment & Brokerage)',
    ],
    ar: [
      'شراكة استراتيجية / استثمار في المجموعة',
      'HUB للإعلام (الإعلان، الإعلام، الإنتاج، الفعاليات)',
      'HUB سوفتوير (تطوير البرمجيات وحلول الذكاء الاصطناعي)',
      'إيليت ريسورس (القوى العاملة الصناعية والكوادر التشغيلية)',
      'إيليت للإنشاءات الصناعية (الهندسة الصناعية، وعقود EPC، والتأهيل)',
      'التطوير العقاري (دراسات الأصول، الاستثمار، والوساطة)',
    ],
  },
  submit: { en: 'Submit Project Request', ar: 'إرسال طلب المشروع' },
  note: {
    en: 'This form opens your email client with the message pre-filled — connect a form service later for direct in-page submission.',
    ar: 'يفتح هذا النموذج برنامج البريد الإلكتروني مع تعبئة الرسالة مسبقاً — يمكن ربط خدمة نماذج لاحقاً لإرسال مباشر داخل الصفحة.',
  },
  hq: {
    officeLabel: { en: 'Corporate Office', ar: 'المقر الرئيسي' },
    office: { en: 'Sultanate of Oman (Muscat)', ar: 'سلطنة عُمان (مسقط)' },
    emailLabel: { en: 'General Inquiries', ar: 'الاستفسارات العامة' },
    email: 'info@alsalhigroup.om',
    phoneLabel: { en: 'Corporate Phone', ar: 'الهاتف المؤسسي' },
    phone: '+968 XX XXXXXX',
    hoursLabel: { en: 'Business Hours', ar: 'ساعات العمل' },
    hours: { en: 'Sunday – Thursday | 8:00 AM – 5:00 PM (GST)', ar: 'الأحد – الخميس | 8:00 صباحاً – 5:00 مساءً (بتوقيت الخليج)' },
  },
}

/** Short "Quick Contact" mini-form embedded on the Home page (#contact-router). */
export const quickContact = {
  headline: { en: 'Ready to Discuss Your Project?', ar: 'هل أنت مستعد لمناقشة مشروعك؟' },
  sub: {
    en: 'Connect directly with Group Management or route your inquiry to a specialized subsidiary.',
    ar: 'تواصل مباشرة مع إدارة المجموعة أو وجّه استفسارك إلى إحدى الشركات المتخصصة.',
  },
  fields: {
    name: { en: 'Full Name', ar: 'الاسم الكامل' },
    email: { en: 'Email Address', ar: 'البريد الإلكتروني' },
    phone: { en: 'Phone Number', ar: 'رقم الهاتف' },
    organization: { en: 'Organization Name', ar: 'اسم الجهة' },
    sector: { en: 'Select Sector / Company', ar: 'اختر القطاع / الشركة' },
    message: { en: 'Project Brief / Message', ar: 'ملخص المشروع / الرسالة' },
  },
  sectorOptions: {
    en: ['General Group Inquiry', 'HUB Media & Creative', 'HUB Software — Software & AI Solutions', 'Elite Resource — Workforce Solutions', 'Elite Industrial & Construction', 'Real Estate Development'],
    ar: ['استفسار عام عن المجموعة', 'HUB للإعلام والإبداع', 'HUB سوفتوير — حلول البرمجيات والذكاء الاصطناعي', 'إيليت ريسورس — حلول القوى العاملة', 'إيليت للإنشاءات الصناعية', 'التطوير العقاري'],
  },
  submit: { en: 'Submit Inquiry', ar: 'إرسال الاستفسار' },
}

export const footer = {
  quickLinks: { en: 'Quick Links', ar: 'روابط سريعة' },
  ourCompanies: { en: 'Subsidiaries', ar: 'الشركات التابعة' },
  rights: { en: 'All Rights Reserved.', ar: 'جميع الحقوق محفوظة.' },
  tagline: { en: 'Rooted in Oman. Built for Growth. Driven by Vision.', ar: 'متجذّرون في عُمان. نُبنى للنمو. نتحرّك برؤية.' },
  links: {
    home: { en: 'Home', ar: 'الرئيسية' },
    aboutUs: { en: 'About Us', ar: 'من نحن' },
    businessPortfolio: { en: 'Business Portfolio', ar: 'محفظة الأعمال' },
    ourApproach: { en: 'Our Approach', ar: 'منهجيتنا' },
    omanVision2040: { en: 'Oman Vision 2040', ar: 'رؤية عُمان 2040' },
    contactUs: { en: 'Contact Us', ar: 'تواصل معنا' },
  },
  legal: {
    privacyPolicy: { en: 'Privacy Policy', ar: 'سياسة الخصوصية' },
    termsOfService: { en: 'Terms of Service', ar: 'شروط الخدمة' },
  },
}

export const legalStub = {
  privacy: {
    title: { en: 'Privacy Policy', ar: 'سياسة الخصوصية' },
    body: {
      en: 'This page is a placeholder. Al Salhi Group’s full privacy policy will be published here.',
      ar: 'هذه الصفحة مؤقتة. سيتم نشر سياسة الخصوصية الكاملة لمجموعة الصالحي هنا.',
    },
  },
  terms: {
    title: { en: 'Terms of Service', ar: 'شروط الخدمة' },
    body: {
      en: 'This page is a placeholder. Al Salhi Group’s full terms of service will be published here.',
      ar: 'هذه الصفحة مؤقتة. سيتم نشر شروط الخدمة الكاملة لمجموعة الصالحي هنا.',
    },
  },
}

export const seo = {
  home: {
    en: { title: 'Al Salhi Group — Rooted in Oman. Built for Growth. Driven by Vision.', description: 'Al Salhi Group is an Omani business group across media, workforce operations, industrial construction, and real estate development.' },
    ar: { title: 'مجموعة الصالحي — متجذّرون في عُمان. نُبنى للنمو. نتحرّك برؤية.', description: 'مجموعة الصالحي مجموعة أعمال عُمانية في الإعلام، وتشغيل القوى العاملة، والإنشاءات الصناعية، والتطوير العقاري.' },
  },
  about: {
    en: { title: 'About Us — Al Salhi Group', description: 'Our story, vision, mission, values, and the Chairman’s message — the philosophy behind Al Salhi Group.' },
    ar: { title: 'من نحن — مجموعة الصالحي', description: 'قصتنا ورؤيتنا ورسالتنا وقيمنا وكلمة رئيس مجلس الإدارة — الفلسفة وراء مجموعة الصالحي.' },
  },
  companies: {
    en: { title: 'Our Companies — Al Salhi Group', description: 'HUB Media & Creative, HUB Software, Elite Resource, Elite Industrial & Construction, and Real Estate Development.' },
    ar: { title: 'شركاتنا — مجموعة الصالحي', description: 'HUB للإعلام والإبداع، وHUB سوفتوير، وإيليت ريسورس، وإيليت للإنشاءات الصناعية، والتطوير العقاري.' },
  },
  contact: {
    en: { title: 'Contact — Al Salhi Group', description: 'Connect with Al Salhi Group — we’ll route your inquiry to the right company within the Group.' },
    ar: { title: 'تواصل معنا — مجموعة الصالحي', description: 'تواصل مع مجموعة الصالحي — سنوجّه استفسارك إلى الشركة المناسبة داخل المجموعة.' },
  },
}

export default { nav, cta, sections, glance, contactForm, quickContact, footer, legalStub, seo }
