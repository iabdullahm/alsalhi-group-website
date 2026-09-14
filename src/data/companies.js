/* ============================================================
   THE FIVE OPERATING COMPANIES.
   Source: company profile + detailed UX/content spec provided by
   Abdullah, 2026-08-25 / 2026-08-31, plus the official logo pack
   and brand colour sheet supplied 2026-09-03, updated per the
   revised sitemap document supplied 2026-09-13 which added the
   AI Software subsidiary and moved Elite Resource into the
   Industry, Development & Investment pillar. Elite Resource's own
   logo (distinct from Elite Industrial's) was supplied 2026-09-14.
   AI Software has no logo yet. Real Estate Development is
   represented by the Al Salhi Group mark itself and drops "Al
   Salhi" from its own name, since it is the Group's own real
   estate division rather than a separately branded subsidiary.
   ============================================================ */

import hubMediaLogo from '../assets/logos/hub-media.png'
import eliteResourceLogo from '../assets/logos/elite-resource.png'
import eliteIndustrialLogo from '../assets/logos/elite-industrial.png'
import asgIcon from '../assets/logos/asg-icon.png'

export const companies = [
  {
    id: 'hub-media',
    slug: 'hub-media',
    index: '01',
    pillar: 'media-people',
    logo: hubMediaLogo,
    name: { en: 'HUB Media & Creative', ar: 'HUB للإعلام والإبداع' },
    shortName: { en: 'HUB Media', ar: 'HUB للإعلام' },
    tagline: { en: 'Media · Advertising · Content · Production · Events', ar: 'إعلام · إعلان · محتوى · إنتاج · فعاليات' },
    heroTagline: { en: 'Creative Vision. Strategic Communication. Impactful Results.', ar: 'رؤية إبداعية. تواصل استراتيجي. نتائج مؤثرة.' },
    // Short blurb used on the Business Portfolio grid card.
    summary: {
      en: 'The Group’s creative and strategic communication arm, specializing in high-impact advertising campaigns, DOOH digital interactive screens, creative video production, and corporate conference/event management.',
      ar: 'الذراع الإبداعي والتواصلي الاستراتيجي للمجموعة، ومتخصصة في الحملات الإعلانية عالية التأثير، وشاشات العرض الرقمية التفاعلية (DOOH)، والإنتاج المرئي الإبداعي، وإدارة المؤتمرات والفعاليات المؤسسية.',
    },
    // Full overview on the company's own landing page.
    overview: {
      en: 'HUB Media & Creative is the creative, advertising, and public relations arm of Al Salhi Group. We assist government entities, corporations, and emerging brands in shaping their narrative, expanding their reach, and engaging audiences through creative storytelling, cutting-edge digital media displays, and world-class event production.',
      ar: 'HUB للإعلام والإبداع هي الذراع الإبداعية والإعلانية والعلاقات العامة لمجموعة الصالحي. نساعد الجهات الحكومية، والشركات، والعلامات التجارية الناشئة على صياغة روايتها، وتوسيع نطاق حضورها، والتفاعل مع جمهورها من خلال السرد الإبداعي، وشاشات العرض الرقمية المتطورة، وإنتاج الفعاليات على أعلى مستوى عالمي.',
    },
    capabilities: [
      {
        title: { en: 'Advertising & Creative Campaigns', ar: 'الحملات الإعلانية والإبداعية' },
        text: { en: 'Concept development, brand positioning, and multi-channel promotional campaigns.', ar: 'تطوير المفاهيم، وتمركز العلامة التجارية، وحملات ترويجية متعددة القنوات.' },
      },
      {
        title: { en: 'DOOH & Interactive Digital Screens', ar: 'شاشات العرض الرقمية التفاعلية (DOOH)' },
        text: { en: 'Advanced electronic advertising display locations, interactive digital signage, and high-visibility media placements.', ar: 'مواقع عرض إعلانية إلكترونية متطورة، ولوحات رقمية تفاعلية، ومواضع إعلامية عالية الظهور.' },
      },
      {
        title: { en: 'Digital Content Creation & Media Production', ar: 'إنتاج المحتوى الرقمي والإعلامي' },
        text: { en: 'High-end commercial photography, video production, directing, scripting, and post-production.', ar: 'تصوير تجاري احترافي، وإنتاج مرئي، وإخراج، وكتابة نصوص، ومونتاج ما بعد الإنتاج.' },
      },
      {
        title: { en: 'Corporate Events, Exhibitions & Conferences', ar: 'الفعاليات والمعارض والمؤتمرات المؤسسية' },
        text: { en: 'Turnkey event planning, stage design, VIP guest management, logistics, and on-ground execution.', ar: 'تخطيط متكامل للفعاليات، وتصميم المسارح، وإدارة كبار الضيوف، واللوجستيات، والتنفيذ الميداني.' },
      },
      {
        title: { en: 'Brand Strategy & Digital Communication', ar: 'استراتيجية العلامة التجارية والتواصل الرقمي' },
        text: { en: 'Social media management, influencer strategy, and public relations management.', ar: 'إدارة وسائل التواصل الاجتماعي، واستراتيجية المؤثرين، وإدارة العلاقات العامة.' },
      },
    ],
    closing: {
      en: 'HUB combines creativity, communication, and organized execution to help clients build visibility, engage their audiences, and communicate their messages effectively.',
      ar: 'يجمع HUB بين الإبداع والتواصل والتنفيذ المنظم لمساعدة العملاء على بناء حضورهم، والتفاعل مع جمهورهم، وإيصال رسائلهم بفعالية.',
    },
    ctaLabel: { en: 'Partner with HUB Media for Your Next Campaign', ar: 'تشارك مع HUB للإعلام في حملتك القادمة' },
    contactSector: {
      en: 'HUB Media (Advertising, Media, Production, Events)',
      ar: 'HUB للإعلام (الإعلان، الإعلام، الإنتاج، الفعاليات)',
    },
    accent: '#6fb3c7',
  },
  {
    id: 'ai-software',
    slug: 'ai-software',
    index: '02',
    pillar: 'media-people',
    logoIsPlaceholder: true,
    name: { en: 'AI Software', ar: 'AI Software' },
    shortName: { en: 'AI Software', ar: 'AI Software' },
    tagline: { en: 'Smart Software. Practical Solutions.', ar: 'برمجيات ذكية. حلول عملية.' },
    heroTagline: { en: 'Smart Software. Practical Solutions.', ar: 'برمجيات ذكية. حلول عملية.' },
    summary: {
      en: 'The Group’s technology arm, developing software and AI-powered digital solutions that help organizations streamline processes, improve efficiency, and make smarter decisions.',
      ar: 'الذراع التقني للمجموعة، يطوّر برمجيات وحلولاً رقمية مدعومة بالذكاء الاصطناعي تساعد المؤسسات على تبسيط عملياتها، وتحسين كفاءتها، واتخاذ قرارات أذكى.',
    },
    overview: {
      en: 'AI Software is the technology arm of Al Salhi Group, providing software and AI-powered digital solutions designed to simplify operations, improve efficiency, and support smarter business decisions.',
      ar: 'AI Software هي الذراع التقني لمجموعة الصالحي، وتقدّم برمجيات وحلولاً رقمية مدعومة بالذكاء الاصطناعي مصمّمة لتبسيط العمليات، وتحسين الكفاءة، ودعم قرارات الأعمال الأذكى.',
    },
    // Note: the client brief listed capability titles only — short
    // descriptions below are drafted to match sibling companies'
    // format and should be reviewed/confirmed.
    capabilities: [
      {
        title: { en: 'Custom Software Solutions', ar: 'حلول برمجية مخصصة' },
        text: { en: 'Bespoke applications designed around each client’s specific operational workflow and goals.', ar: 'تطبيقات مصممة خصيصاً بما يتناسب مع سير العمل التشغيلي وأهداف كل عميل.' },
      },
      {
        title: { en: 'Business Process Automation', ar: 'أتمتة العمليات التجارية' },
        text: { en: 'Automating repetitive operational and administrative tasks to reduce cost and manual effort.', ar: 'أتمتة المهام التشغيلية والإدارية المتكررة لتقليل التكلفة والجهد اليدوي.' },
      },
      {
        title: { en: 'AI-Powered Digital Tools', ar: 'أدوات رقمية مدعومة بالذكاء الاصطناعي' },
        text: { en: 'Applying machine learning and AI models to support faster, data-driven decision-making.', ar: 'توظيف نماذج التعلم الآلي والذكاء الاصطناعي لدعم اتخاذ قرارات أسرع وقائمة على البيانات.' },
      },
      {
        title: { en: 'Web and Mobile Applications', ar: 'تطبيقات الويب والجوال' },
        text: { en: 'Designing and building responsive web platforms and mobile applications end-to-end.', ar: 'تصميم وبناء منصات ويب وتطبيقات جوال متجاوبة من الألف إلى الياء.' },
      },
      {
        title: { en: 'Systems Integration', ar: 'تكامل الأنظمة' },
        text: { en: 'Connecting existing business systems and data sources into one coherent, reliable technology environment.', ar: 'ربط الأنظمة ومصادر البيانات القائمة في بيئة تقنية متكاملة وموثوقة.' },
      },
    ],
    closing: {
      en: 'AI Software begins by understanding the client’s operational challenges, then designs and delivers the right technology solution — from a single automated workflow to a fully integrated digital platform.',
      ar: 'تبدأ AI Software بفهم التحديات التشغيلية للعميل، ثم تصمم وتقدّم الحل التقني المناسب — بدءاً من أتمتة سير عمل واحد وصولاً إلى منصة رقمية متكاملة بالكامل.',
    },
    ctaLabel: { en: 'Discuss Your Technology Needs with AI Software', ar: 'ناقش احتياجاتك التقنية مع AI Software' },
    contactSector: {
      en: 'AI Software (Software Development & AI Solutions)',
      ar: 'AI Software (تطوير البرمجيات وحلول الذكاء الاصطناعي)',
    },
    accent: '#9490c9',
  },
  {
    id: 'elite-resource',
    slug: 'elite-resource',
    index: '03',
    pillar: 'industry-development',
    logo: eliteResourceLogo,
    name: { en: 'Elite Resource', ar: 'إيليت ريسورس' },
    shortName: { en: 'Elite Resource', ar: 'إيليت ريسورس' },
    tagline: { en: 'The Right People. The Right Expertise. The Right Performance.', ar: 'الشخص المناسب. الخبرة المناسبة. الأداء المناسب.' },
    heroTagline: { en: 'The Right People. The Right Expertise. The Right Performance.', ar: 'الشخص المناسب. الخبرة المناسبة. الأداء المناسب.' },
    summary: {
      en: 'Providing flexible workforce management, Omani and international talent sourcing, and dedicated production-line operational support tailored to industrial, technical, and commercial facilities.',
      ar: 'نوفّر إدارة مرنة للقوى العاملة، واستقطاب الكفاءات العُمانية والدولية، ودعماً تشغيلياً مخصصاً لخطوط الإنتاج يتناسب مع المنشآت الصناعية والفنية والتجارية.',
    },
    overview: {
      en: 'Elite Resource provides comprehensive human capital management, specialized workforce deployment, and operational continuity solutions. We go beyond conventional staffing to analyze operational demands, structure workforce models, and manage technical and operational personnel for industrial plants, infrastructure projects, and corporate enterprises.',
      ar: 'تقدّم إيليت ريسورس إدارة شاملة لرأس المال البشري، ونشراً متخصصاً للقوى العاملة، وحلولاً لاستمرارية التشغيل. ونتجاوز التوظيف التقليدي من خلال تحليل المتطلبات التشغيلية، وبناء نماذج القوى العاملة، وإدارة الكوادر الفنية والتشغيلية للمصانع، ومشاريع البنية التحتية، والمؤسسات التجارية.',
    },
    capabilities: [
      {
        title: { en: 'Industrial & Production-Line Manpower', ar: 'القوى العاملة الصناعية وخطوط الإنتاج' },
        text: { en: 'Technical operators, specialized technicians, and supervisors to maintain plant continuity and output efficiency.', ar: 'مشغّلون فنيون، وفنيون متخصصون، ومشرفون للحفاظ على استمرارية المصنع وكفاءة الإنتاج.' },
      },
      {
        title: { en: 'Workforce Operations & Site Management', ar: 'إدارة عمليات القوى العاملة والموقع' },
        text: { en: 'End-to-end management of on-site personnel, logistics, compliance, and shift workflows.', ar: 'إدارة متكاملة للكوادر الميدانية، واللوجستيات، والامتثال، وجداول النوبات.' },
      },
      {
        title: { en: 'Omani Talent Sourcing & Development', ar: 'استقطاب وتطوير الكفاءات العُمانية' },
        text: { en: 'Actively recruiting, training, and deploying qualified national professionals aligned with Omanization goals.', ar: 'استقطاب فعّال وتدريب وتوظيف للكفاءات الوطنية المؤهلة بما يتماشى مع أهداف التعمين.' },
      },
      {
        title: { en: 'Specialized International Expertise', ar: 'الخبرات الدولية المتخصصة' },
        text: { en: 'Sourcing niche global technical competencies for specialized industrial and engineering projects.', ar: 'استقطاب كفاءات فنية عالمية متخصصة للمشاريع الصناعية والهندسية النوعية.' },
      },
      {
        title: { en: 'Flexible & Project-Based Staffing', ar: 'التوظيف المرن حسب المشروع' },
        text: { en: 'Scalable workforce solutions tailored to project timelines, seasonal surges, and turnaround operations.', ar: 'حلول قوى عاملة قابلة للتوسع تتناسب مع الجداول الزمنية للمشاريع، والذروات الموسمية، وعمليات التشغيل السريع.' },
      },
    ],
    closing: {
      en: 'Elite Resource begins by understanding the client’s operational requirements, identifying the number and level of personnel required, selecting the appropriate talent, and providing ongoing support according to the agreed scope of work.',
      ar: 'تبدأ إيليت ريسورس بفهم المتطلبات التشغيلية للعميل، وتحديد عدد ومستوى الكوادر المطلوبة، واختيار الكفاءات المناسبة، وتقديم الدعم المستمر وفق نطاق العمل المتفق عليه.',
    },
    ctaLabel: { en: 'Optimize Your Workforce Operations with Elite Resource', ar: 'طوّر عمليات قواك العاملة مع إيليت ريسورس' },
    contactSector: {
      en: 'Elite Resource (Industrial Workforce & Operational Manpower)',
      ar: 'إيليت ريسورس (القوى العاملة الصناعية والكوادر التشغيلية)',
    },
    accent: '#c9b37e',
  },
  {
    id: 'elite-industrial',
    slug: 'elite-industrial',
    index: '04',
    pillar: 'industry-development',
    logo: eliteIndustrialLogo,
    name: { en: 'Elite Industrial & Construction', ar: 'إيليت للإنشاءات الصناعية' },
    shortName: { en: 'Elite Industrial', ar: 'إيليت الصناعية' },
    tagline: { en: 'Built for Industry. Engineered for Progress.', ar: 'بُنيت للصناعة. هُندست للتقدّم.' },
    heroTagline: { en: 'Built for Industry. Engineered for Progress.', ar: 'بُنيت للصناعة. هُندست للتقدّم.' },
    summary: {
      en: 'Specialized in industrial construction, EPC-oriented facility execution, workflow engineering, and the technical assessment, rehabilitation, and initial commissioning of manufacturing plants.',
      ar: 'متخصصة في الإنشاءات الصناعية، وتنفيذ المرافق بأسلوب EPC، وهندسة سير العمل، والتقييم الفني للمصانع وتأهيلها وتشغيلها المبدئي.',
    },
    overview: {
      en: 'Elite Industrial & Construction delivers specialized engineering, construction, and operational readiness solutions for manufacturing plants, industrial complexes, and infrastructure projects. We partner with industrialists and investors from early technical assessment to turnkey handover and initial commissioning.',
      ar: 'تقدّم إيليت للإنشاءات الصناعية حلولاً هندسية وإنشائية متخصصة، وحلول جاهزية تشغيلية للمصانع والمجمعات الصناعية ومشاريع البنية التحتية. نتشارك مع الصناعيين والمستثمرين بدءاً من التقييم الفني المبكر وحتى التسليم الكامل والتشغيل المبدئي.',
    },
    capabilities: [
      {
        title: { en: 'Industrial Construction & Facility Erection', ar: 'الإنشاءات الصناعية وتشييد المرافق' },
        text: { en: 'Civil, structural, and mechanical construction tailored to industrial standards and workflows.', ar: 'أعمال إنشائية مدنية وهيكلية وميكانيكية متوافقة مع المعايير الصناعية وسير العمل.' },
      },
      {
        title: { en: 'Production-Line Infrastructure & Engineering', ar: 'بنية خطوط الإنتاج والهندسة' },
        text: { en: 'Installation, structural framing, and utility integrations for manufacturing and processing lines.', ar: 'التركيب، والهياكل الإنشائية، وتكامل المرافق لخطوط التصنيع والمعالجة.' },
      },
      {
        title: { en: 'Facility Assessment, Upgrade & Rehabilitation', ar: 'تقييم المنشآت وتحديثها وتأهيلها' },
        text: { en: 'Technical auditing of existing plants to upgrade structural integrity, modernize facilities, and boost operational readiness.', ar: 'تدقيق فني للمصانع القائمة لتعزيز السلامة الإنشائية، وتحديث المرافق، ورفع الجاهزية التشغيلية.' },
      },
      {
        title: { en: 'EPC Support & Technical Drawings', ar: 'دعم عقود EPC والرسومات الفنية' },
        text: { en: 'Developing comprehensive engineering layouts, shop drawings, and regulatory-compliant execution plans.', ar: 'إعداد مخططات هندسية شاملة، ورسومات تنفيذية، وخطط تنفيذ متوافقة مع الأنظمة.' },
      },
      {
        title: { en: 'Pre-Commissioning & Initial Plant Operation Support', ar: 'دعم ما قبل التشغيل والتشغيل المبدئي للمصنع' },
        text: { en: 'Technical inspection, safety testing, and workflow validation to ensure seamless operational handover.', ar: 'فحص فني، واختبارات سلامة، والتحقق من سير العمل لضمان تسليم تشغيلي سلس.' },
      },
    ],
    closing: {
      en: 'Every industrial project has different objectives, operating conditions, and challenges. Elite Industrial & Construction begins by assessing the project or facility, developing the appropriate solution, and proceeding to execution according to the approved technical requirements and scope of work.',
      ar: 'لكل مشروع صناعي أهداف وظروف تشغيل وتحديات مختلفة. تبدأ إيليت للإنشاءات الصناعية بتقييم المشروع أو المنشأة، وتطوير الحل المناسب، ثم الانتقال إلى التنفيذ وفق المتطلبات الفنية ونطاق العمل المعتمدين.',
    },
    ctaLabel: { en: 'Discuss Your Industrial Project with Our Engineering Team', ar: 'ناقش مشروعك الصناعي مع فريقنا الهندسي' },
    contactSector: {
      en: 'Elite Industrial & Construction (Industrial Engineering, EPC & Rehabilitation)',
      ar: 'إيليت للإنشاءات الصناعية (الهندسة الصناعية، وعقود EPC، والتأهيل)',
    },
    accent: '#cfc3ac',
  },
  {
    id: 'real-estate',
    slug: 'real-estate',
    index: '05',
    pillar: 'industry-development',
    logo: asgIcon,
    name: { en: 'Real Estate Development', ar: 'التطوير العقاري' },
    shortName: { en: 'Real Estate Development', ar: 'التطوير العقاري' },
    tagline: { en: 'Creating Opportunities. Developing Value.', ar: 'نصنع الفرص. نُطوّر القيمة.' },
    heroTagline: { en: 'Creating Opportunities. Developing Value.', ar: 'نصنع الفرص. نُطوّر القيمة.' },
    summary: {
      en: 'Transforming real estate potential into sustainable investment assets through strategic feasibility studies, asset positioning, conceptual development, and specialized brokerage.',
      ar: 'نحوّل الإمكانات العقارية إلى أصول استثمارية مستدامة من خلال دراسات جدوى استراتيجية، وتمركز الأصول، والتطوير المفاهيمي، والوساطة المتخصصة.',
    },
    overview: {
      en: 'Real Estate Development focuses on unlocking the latent investment value of land and real estate assets. We bridge the gap between landowners, investors, and market opportunities through strategic development concepts, feasibility studies, asset evaluation, and specialized commercial brokerage.',
      ar: 'يركّز التطوير العقاري على إطلاق القيمة الاستثمارية الكامنة في الأراضي والأصول العقارية. نردم الفجوة بين ملاك الأراضي والمستثمرين وفرص السوق من خلال مفاهيم تطوير استراتيجية، ودراسات جدوى، وتقييم للأصول، ووساطة تجارية متخصصة.',
    },
    capabilities: [
      {
        title: { en: 'Real Estate Development Studies', ar: 'دراسات التطوير العقاري' },
        text: { en: 'Comprehensive feasibility studies, zoning analysis, and best-use assessments for raw land and underutilized properties.', ar: 'دراسات جدوى شاملة، وتحليل للتقسيم المناطقي، وتقييم لأفضل استخدام للأراضي الخام والعقارات غير المستغلة بالكامل.' },
      },
      {
        title: { en: 'Opportunity Identification & Asset Positioning', ar: 'تحديد الفرص وتمركز الأصول' },
        text: { en: 'Structuring viable real estate investment propositions tailored to private and institutional investors.', ar: 'بناء مقترحات استثمارية عقارية قابلة للتنفيذ تلائم المستثمرين الأفراد والمؤسسات.' },
      },
      {
        title: { en: 'Project Concept Development', ar: 'تطوير مفاهيم المشاريع' },
        text: { en: 'Formulating architectural, commercial, and operational concepts that transform raw assets into high-yield developments.', ar: 'صياغة مفاهيم معمارية وتجارية وتشغيلية تُحوّل الأصول الخام إلى مشاريع عالية العائد.' },
      },
      {
        title: { en: 'Commercial & Strategic Brokerage', ar: 'الوساطة التجارية والاستراتيجية' },
        text: { en: 'Transparent advisory and brokerage services facilitating institutional real estate transactions.', ar: 'خدمات استشارية ووساطة شفافة تُسهّل الصفقات العقارية المؤسسية.' },
      },
      {
        title: { en: 'Strategic Joint Ventures & Partnerships', ar: 'المشاريع المشتركة والشراكات الاستراتيجية' },
        text: { en: 'Connecting landholders with developers, capital partners, and operators to realize large-scale projects.', ar: 'ربط ملاك الأراضي بالمطورين وشركاء رأس المال والمشغّلين لتحقيق مشاريع واسعة النطاق.' },
      },
    ],
    closing: {
      en: 'The company views real estate as more than an asset to be bought or sold. Every property may represent an opportunity that requires market understanding, careful study, and a clear development vision.',
      ar: 'تنظر الشركة إلى العقار كأكثر من مجرد أصل يُباع أو يُشترى؛ فكل عقار قد يمثّل فرصة تتطلب فهماً للسوق، ودراسة دقيقة، ورؤية تطوير واضحة.',
    },
    ctaLabel: { en: 'Explore Real Estate Development & Investment Opportunities', ar: 'استكشف فرص التطوير العقاري والاستثمار' },
    contactSector: {
      en: 'Real Estate Development (Asset Studies, Investment & Brokerage)',
      ar: 'التطوير العقاري (دراسات الأصول، الاستثمار، والوساطة)',
    },
    accent: '#8fae8a',
  },
]

export const companyBySlug = (slug) => companies.find((c) => c.slug === slug)

export default companies
