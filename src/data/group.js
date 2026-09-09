/* ============================================================
   AL SALHI GROUP — core identity content.
   Source: company profile + detailed UX/content spec provided by
   Abdullah, 2026-08-25 / 2026-08-31 (traditional multi-page rebuild).
   EN copy is verbatim from the source spec (light copyediting for
   sitewide consistency, e.g. normalising "HUB Media & Communication"
   → "HUB Media & Creative" to match the confirmed division name).
   AR is a translation produced for this build — flagged for native
   business-Arabic review before final publish.
   ============================================================ */

export const group = {
  name: { en: 'Al Salhi Group', ar: 'مجموعة الصالحي' },

  hero: {
    pretitle: { en: 'AL SALHI GROUP · SULTANATE OF OMAN', ar: 'مجموعة الصالحي · سلطنة عُمان' },
    headline: {
      en: 'Rooted in Oman. Built for Growth. Driven by Vision.',
      ar: 'متجذّرون في عُمان. نُبنى للنمو. نتحرّك برؤية.',
    },
    sub: {
      en: 'An integrated Omani business group delivering specialized solutions across media, workforce operations, industrial engineering, and real estate development to drive sustainable economic value.',
      ar: 'مجموعة أعمال عُمانية متكاملة تقدّم حلولاً متخصصة في الإعلام، وتشغيل القوى العاملة، والهندسة الصناعية، والتطوير العقاري، لتحقيق قيمة اقتصادية مستدامة.',
    },
  },

  // About-page hero banner — distinct, shorter framing from the group tagline above.
  aboutHero: {
    title: { en: 'About Al Salhi Group', ar: 'عن مجموعة الصالحي' },
    subtitle: {
      en: 'An integrated platform of specialized companies driving business, industrial, and investment excellence across Oman.',
      ar: 'منصة متكاملة من الشركات المتخصصة تقود التميز في الأعمال والصناعة والاستثمار في جميع أنحاء عُمان.',
    },
  },

  // "Our Story & Philosophy" — About page.
  story: [
    {
      en: 'Al Salhi Group is an Omani multi-disciplinary business group established on a vision of specialization and integration. We bring together dedicated companies across media and creative media production, workforce solutions and operations, industrial construction and engineering, and real estate development.',
      ar: 'مجموعة الصالحي هي مجموعة أعمال عُمانية متعددة التخصصات تأسست على رؤية قائمة على التخصص والتكامل. نجمع تحت مظلتنا شركات متخصصة في الإعلام والإنتاج الإعلامي الإبداعي، وحلول القوى العاملة والتشغيل، والإنشاءات والهندسة الصناعية، والتطوير العقاري.',
    },
    {
      en: 'In a rapidly transforming economic landscape, we operate as a strategic umbrella that enables focused operating companies to deliver niche excellence independently, while seamlessly collaborating on large-scale, multi-disciplinary ventures. By connecting human capital, industrial capabilities, creative vision, and investment opportunities, Al Salhi Group creates practical solutions that drive measurable, sustainable growth.',
      ar: 'في ظل مشهد اقتصادي سريع التحول، نعمل كمظلة استراتيجية تُمكّن الشركات التشغيلية المتخصصة من تحقيق تميز نوعي بشكل مستقل، مع التعاون بسلاسة في المشاريع الكبرى متعددة التخصصات. ومن خلال الربط بين رأس المال البشري، والقدرات الصناعية، والرؤية الإبداعية، وفرص الاستثمار، تعمل مجموعة الصالحي على ابتكار حلول عملية تحقق نمواً مستداماً وقابلاً للقياس.',
    },
  ],

  vision: {
    en: 'To build a leading Omani business group driven by expertise, innovation, and strong execution, supporting Oman Vision 2040.',
    ar: 'أن نبني مجموعة أعمال عُمانية رائدة تقودها الخبرة والابتكار والتنفيذ القوي، دعماً لرؤية عُمان 2040.',
  },

  mission: {
    en: 'To deliver integrated, reliable solutions through specialized companies and long-term partnerships.',
    ar: 'تقديم حلول متكاملة وموثوقة من خلال شركات متخصصة وشراكات طويلة الأمد.',
  },

  capabilities: {
    intro: {
      en: 'Delivering specialized depth and synergistic value across two core strategic platforms:',
      ar: 'نقدّم عمقاً متخصصاً وقيمة تكاملية عبر منصتين استراتيجيتين أساسيتين:',
    },
    pillars: [
      {
        id: 'media-people',
        title: { en: 'Media, People & Business Support', ar: 'الإعلام، والأفراد، ودعم الأعمال' },
        subtitle: {
          en: 'Empowering brand presence, human capital, and operational continuity.',
          ar: 'تعزيز الحضور، ورأس المال البشري، واستمرارية التشغيل.',
        },
        text: {
          en: 'Through HUB Media & Creative and Elite Resource, the Group supports organizations in building their public presence, communicating with their audiences, organizing professional experiences, and securing the talent and operational capabilities required to run their businesses.',
          ar: 'من خلال HUB للإعلام والإبداع وإيليت ريسورس، تدعم المجموعة المؤسسات في بناء حضورها العام، والتواصل مع جمهورها، وتنظيم تجارب احترافية، وتأمين الكفاءات والقدرات التشغيلية اللازمة لإدارة أعمالها.',
        },
        companies: ['hub-media', 'elite-resource'],
      },
      {
        id: 'industry-development',
        title: { en: 'Industry, Development & Investment', ar: 'الصناعة، والتطوير، والاستثمار' },
        subtitle: {
          en: 'Building infrastructure, modernizing industrial assets, and shaping real estate opportunities.',
          ar: 'بناء البنية التحتية، وتحديث الأصول الصناعية، وصياغة الفرص العقارية.',
        },
        text: {
          en: 'Through Elite Industrial & Construction and Real Estate Development, the Group supports industrial projects, facility development, real estate opportunities, and investment concepts.',
          ar: 'من خلال إيليت للإنشاءات الصناعية والتطوير العقاري، تدعم المجموعة المشاريع الصناعية، وتطوير المرافق، والفرص العقارية، والمفاهيم الاستثمارية.',
        },
        companies: ['elite-industrial', 'real-estate'],
      },
    ],
  },

  // "How We Deliver" — 5-step process, Home page.
  approach: {
    steps: [
      {
        title: { en: 'Understand the Need', ar: 'فهم الحاجة' },
        text: { en: 'Analyzing client objectives, operational constraints, and strategic goals.', ar: 'تحليل أهداف العميل، والقيود التشغيلية، والأهداف الاستراتيجية.' },
      },
      {
        title: { en: 'Identify the Solution', ar: 'تحديد الحل' },
        text: { en: 'Structuring a customized technical, commercial, and operational roadmap.', ar: 'بناء خارطة طريق فنية وتجارية وتشغيلية مخصصة.' },
      },
      {
        title: { en: 'Deploy the Expertise', ar: 'نشر الخبرة' },
        text: { en: 'Assigning the right specialized entity and experienced talent to the project.', ar: 'إسناد المشروع إلى الكيان المتخصص المناسب والكفاءات ذات الخبرة.' },
      },
      {
        title: { en: 'Execute with Precision', ar: 'التنفيذ بدقة' },
        text: { en: 'Delivering disciplined execution with uncompromised quality and safety standards.', ar: 'تنفيذ منضبط بأعلى معايير الجودة والسلامة دون تهاون.' },
      },
      {
        title: { en: 'Build Sustainable Partnership', ar: 'بناء شراكة مستدامة' },
        text: { en: 'Ensuring ongoing operational support, value creation, and long-term continuity.', ar: 'ضمان الدعم التشغيلي المستمر، وخلق القيمة، والاستمرارية طويلة الأمد.' },
      },
    ],
  },

  values: [
    {
      id: 'quality',
      label: { en: 'Quality', ar: 'الجودة' },
      text: { en: 'Delivering work that adheres to the highest technical, creative, and regulatory standards.', ar: 'تقديم أعمال تلتزم بأعلى المعايير الفنية والإبداعية والتنظيمية.' },
    },
    {
      id: 'integrity',
      label: { en: 'Integrity', ar: 'النزاهة' },
      text: { en: 'Conducting all business activities ethically, responsibly, and professionally.', ar: 'إدارة جميع الأنشطة التجارية بأخلاقية ومسؤولية واحترافية.' },
    },
    {
      id: 'innovation',
      label: { en: 'Innovation', ar: 'الابتكار' },
      text: { en: 'Adopting modern methodologies and digital technologies to continuously elevate our capabilities.', ar: 'تبنّي منهجيات حديثة وتقنيات رقمية للارتقاء المستمر بقدراتنا.' },
    },
    {
      id: 'sustainability',
      label: { en: 'Sustainability', ar: 'الاستدامة' },
      text: { en: 'Ensuring positive economic, operational, and social impact across all operations.', ar: 'ضمان أثر اقتصادي وتشغيلي واجتماعي إيجابي في جميع عملياتنا.' },
    },
  ],

  // "Alignment with Oman Vision 2040" — Home page.
  omanVision: {
    headline: { en: 'Committed to Oman’s Sustainable Economic Development', ar: 'ملتزمون بالتنمية الاقتصادية المستدامة لعُمان' },
    body: {
      en: 'We actively contribute to the Sultanate’s national priorities by fostering economic diversification, empowering national talent, advancing industrial and infrastructure readiness, and building local and international partnerships that deliver long-term value.',
      ar: 'نساهم بفاعلية في الأولويات الوطنية للسلطنة من خلال تعزيز التنويع الاقتصادي، وتمكين الكفاءات الوطنية، والارتقاء بالجاهزية الصناعية والبنية التحتية، وبناء شراكات محلية ودولية تحقق قيمة طويلة الأمد.',
    },
    focusAreas: [
      { en: 'Developing & Empowering Omani Talent', ar: 'تطوير وتمكين الكفاءات العُمانية' },
      { en: 'Strengthening Industrial & Manufacturing Infrastructure', ar: 'تعزيز البنية التحتية الصناعية والتصنيعية' },
      { en: 'Catalyzing Private-Sector Investment', ar: 'تحفيز استثمارات القطاع الخاص' },
      { en: 'Integrating Modern Technologies & Solutions', ar: 'دمج التقنيات والحلول الحديثة' },
    ],
  },

  chairman: {
    title: { en: 'Chairman’s Message', ar: 'كلمة رئيس مجلس الإدارة' },
    role: { en: 'Chairman of the Board | Al Salhi Group', ar: 'رئيس مجلس الإدارة | مجموعة الصالحي' },
    // Name intentionally omitted — not provided in the source content.

    // Short pull-quote used on the Home "Executive Perspective" section —
    // distinct from the full message below, shown on the About page.
    homeQuote: {
      en: 'We believe sustainable business success begins with a clear vision and is achieved through genuine capabilities that transform market opportunities into lasting value. Our objective is not simply to execute work, but to build an enduring platform of expertise, trust, and shared growth for Oman’s future.',
      ar: 'نؤمن بأن نجاح الأعمال المستدام يبدأ برؤية واضحة، ويتحقق من خلال قدرات حقيقية تُحوّل فرص السوق إلى قيمة دائمة. هدفنا لا يقتصر على تنفيذ الأعمال، بل يمتد إلى بناء منصة راسخة من الخبرة والثقة والنمو المشترك لمستقبل عُمان.',
    },

    paragraphs: [
      {
        en: 'Al Salhi Group is built on the belief that lasting success comes from expertise, adaptability, and strong execution.',
        ar: 'تقوم مجموعة الصالحي على إيمان راسخ بأن النجاح المستدام يُبنى على الخبرة، والمرونة، والتنفيذ القوي.',
      },
      {
        en: 'Through our integrated businesses in media, operations, construction, and real estate, we create practical solutions and long-term value.',
        ar: 'من خلال أعمالنا المتكاملة في الإعلام، والتشغيل، والإنشاءات، والتطوير العقاري، نصنع حلولاً عملية وقيمة طويلة الأمد.',
      },
      {
        en: 'Guided by Oman Vision 2040, we remain committed to quality, integrity, local talent, and trusted partnerships that contribute to Oman’s future.',
        ar: 'واسترشاداً برؤية عُمان 2040، نبقى ملتزمين بالجودة، والنزاهة، وتمكين الكفاءات المحلية، والشراكات الموثوقة التي تسهم في مستقبل عُمان.',
      },
    ],
  },

  promise: {
    intro: {
      en: 'We do not simply provide services. We build capabilities, connect expertise with opportunity, and develop solutions that help our clients and partners move forward with confidence.',
      ar: 'نحن لا نقدّم خدمات فحسب. نحن نبني قدرات، ونربط الخبرة بالفرصة، ونطوّر حلولاً تساعد عملاءنا وشركاءنا على المضي قُدماً بثقة.',
    },
    tagline: {
      en: 'Rooted in Oman. Built for Growth. Driven by Vision.',
      ar: 'متجذّرون في عُمان. نُبنى للنمو. نتحرّك برؤية.',
    },
  },
}

export default group
