// SEO Configuration for KITES Kuwait Website
// Provides page-specific metadata for all routes in EN and AR

export interface PageSEO {
    title: string;
    description: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    keywords?: string[];
}

export const defaultSEO = {
    titleTemplate: '%s | KITES Kuwait',
    defaultTitle: 'KITES - Kuwait Institute for Training & Engineering Simulations',
    siteName: 'KITES Kuwait',
    siteUrl: 'https://kites-kw.com', // Update with actual domain when available
    ogImage: '/og-default.jpg', // Create this image (1200x630px)
    twitterHandle: '@KitesKW', // Update if Twitter account exists
};

export const seoConfig: Record<string, { en: PageSEO; ar: PageSEO }> = {
    home: {
        en: {
            title: 'Engineering Simulation & Training Solutions',
            description: 'Leading provider of simulation-based engineering, training, and sustainability solutions across the GCC. Expert consultation and world-class software distribution.',
            keywords: ['engineering simulation', 'CAE', 'Kuwait', 'GCC', 'training', 'sustainability', 'prototype development', 'ANSYS', 'Siemens'],
        },
        ar: {
            title: 'حلول المحاكاة الهندسية والتدريب',
            description: 'المزود الرائد لحلول الهندسة والتدريب والاستدامة القائمة على المحاكاة في منطقة الخليج. استشارات متخصصة وتوزيع برمجيات عالمية.',
            keywords: ['محاكاة هندسية', 'كويت', 'الخليج', 'تدريب', 'استدامة', 'تطوير النماذج'],
        },
    },

    expertise: {
        en: {
            title: 'Our Expertise',
            description: 'Comprehensive engineering expertise in simulation, sustainability, training, and technology partnerships across the Middle East and GCC region.',
            keywords: ['engineering expertise', 'simulation expertise', 'sustainability consulting', 'Kuwait engineering'],
        },
        ar: {
            title: 'خبراتنا',
            description: 'خبرات هندسية شاملة في المحاكاة والاستدامة والتدريب والشراكات التقنية في منطقة الشرق الأوسط والخليج.',
            keywords: ['خبرات هندسية', 'خبرات المحاكاة', 'استشارات الاستدامة'],
        },
    },

    services: {
        en: {
            title: 'Our Services',
            description: 'Comprehensive engineering services including prototype development, consultation, professional training, and software distribution for simulation and CAE.',
            keywords: ['engineering services', 'prototype development', 'engineering consultation', 'CAE training', 'software distribution'],
        },
        ar: {
            title: 'خدماتنا',
            description: 'خدمات هندسية شاملة تشمل تطوير النماذج الأولية والاستشارات والتدريب الاحترافي وتوزيع البرمجيات للمحاكاة والتحليل الهندسي.',
            keywords: ['خدمات هندسية', 'تطوير النماذج الأولية', 'استشارات هندسية', 'تدريب'],
        },
    },

    training: {
        en: {
            title: 'Professional Engineering Training Programs',
            description: 'Industry-aligned, simulation-driven training programs designed to upskill engineers, students, and organizations across the GCC region.',
            keywords: ['engineering training', 'simulation training', 'CAE training', 'professional certification', 'corporate training', 'Kuwait training'],
        },
        ar: {
            title: 'برامج التدريب الهندسي الاحترافي',
            description: 'برامج تدريب قائمة على المحاكاة ومصممة لتمكين المهندسين والطلاب والمؤسسات في منطقة الخليج.',
            keywords: ['تدريب هندسي', 'تدريب المحاكاة', 'تدريب CAE', 'شهادات مهنية', 'تدريب مؤسسي', 'تدريب الكويت'],
        },
    },

    partners: {
        en: {
            title: 'Our Partners',
            description: 'World-leading technology partners including Siemens, Autodesk, ANSYS, and more. Authorized distribution and support across the GCC region.',
            keywords: ['engineering partners', 'Siemens', 'ANSYS', 'Autodesk', 'Dassault Systèmes', 'software partners'],
        },
        ar: {
            title: 'شركاؤنا',
            description: 'شراكات تقنية عالمية رائدة تشمل سيمنز وأوتوديسك وANSYS والمزيد. توزيع ودعم معتمد في منطقة الخليج.',
            keywords: ['شركاء تقنيون', 'سيمنز', 'أوتوديسك', 'شراكات برمجيات'],
        },
    },

    insights: {
        en: {
            title: 'Insights & Articles',
            description: 'Expert insights and thought leadership in engineering simulation, sustainability, training, and technology trends from KITES specialists.',
            keywords: ['engineering insights', 'simulation articles', 'sustainability insights', 'CAE trends', 'industry insights'],
        },
        ar: {
            title: 'الرؤى والمقالات',
            description: 'رؤى متخصصة وقيادة فكرية في المحاكاة الهندسية والاستدامة والتدريب واتجاهات التكنولوجيا من متخصصي KITES.',
            keywords: ['رؤى هندسية', 'مقالات المحاكاة', 'رؤى الاستدامة', 'اتجاهات صناعية'],
        },
    },

    events: {
        en: {
            title: 'Events & Training',
            description: 'Upcoming engineering events, training workshops, and professional development programs in simulation, CAE, and sustainability.',
            keywords: ['engineering events', 'training workshops', 'CAE training', 'simulation workshops', 'Kuwait events'],
        },
        ar: {
            title: 'الفعاليات والتدريب',
            description: 'الفعاليات الهندسية القادمة وورش العمل التدريبية وبرامج التطوير المهني في المحاكاة والتحليل الهندسي والاستدامة.',
            keywords: ['فعاليات هندسية', 'ورش تدريبية', 'تدريب المحاكاة', 'فعاليات الكويت'],
        },
    },

    contact: {
        en: {
            title: 'Contact Us',
            description: 'Get in touch with KITES Kuwait. Contact our team for engineering consultation, training inquiries, or software solutions. Located in Hawally, Kuwait.',
            keywords: ['contact KITES', 'Kuwait engineering contact', 'simulation consultation', 'Hawally Kuwait'],
        },
        ar: {
            title: 'تواصل معنا',
            description: 'تواصل مع KITES الكويت. اتصل بفريقنا للاستشارات الهندسية أو استفسارات التدريب أو حلول البرمجيات. موقعنا في حولي، الكويت.',
            keywords: ['الاتصال بـ KITES', 'اتصال هندسي الكويت', 'استشارات المحاكاة', 'حولي الكويت'],
        },
    },

    notFound: {
        en: {
            title: 'Page Not Found',
            description: 'The page you are looking for could not be found. Return to KITES Kuwait homepage to explore our engineering services and solutions.',
            keywords: ['404', 'page not found'],
        },
        ar: {
            title: 'الصفحة غير موجودة',
            description: 'الصفحة التي تبحث عنها غير موجودة. العودة إلى الصفحة الرئيسية لـ KITES الكويت لاستكشاف خدماتنا وحلولنا الهندسية.',
            keywords: ['404', 'صفحة غير موجودة'],
        },
    },
};

// Service-specific metadata for dynamic routes
export const serviceMetadata: Record<string, { en: PageSEO; ar: PageSEO }> = {
    'prototype-development': {
        en: {
            title: 'Prototype Development Services',
            description: 'Accelerate innovation with validated prototypes. From concept to functional testing using advanced simulation and rapid prototyping technologies.',
            keywords: ['prototype development', 'rapid prototyping', '3D modeling', 'digital twins', 'concept validation'],
        },
        ar: {
            title: 'خدمات تطوير النماذج الأولية',
            description: 'تسريع الابتكار بنماذج أولية مختبرة. من المفهوم إلى الاختبار الوظيفي باستخدام تقنيات المحاكاة المتقدمة والنمذجة السريعة.',
            keywords: ['تطوير النماذج الأولية', 'النمذجة السريعة', 'النمذجة ثلاثية الأبعاد', 'التوائم الرقمية'],
        },
    },

    consultation: {
        en: {
            title: 'Engineering Consultation Services',
            description: 'Simulation-driven engineering and environmental consulting. Expert guidance to optimize processes and achieve sustainable outcomes.',
            keywords: ['engineering consultation', 'simulation consulting', 'environmental consulting', 'process optimization', 'sustainability consulting'],
        },
        ar: {
            title: 'خدمات الاستشارات الهندسية',
            description: 'استشارات هندسية وبيئية قائمة على المحاكاة. إرشادات متخصصة لتحسين العمليات وتحقيق نتائج مستدامة.',
            keywords: ['استشارات هندسية', 'استشارات المحاكاة', 'استشارات بيئية', 'تحسين العمليات'],
        },
    },

    training: {
        en: {
            title: 'Professional Engineering Training',
            description: 'Certified training programs for engineers and organizations. Hands-on courses in simulation software, CAE, and professional development.',
            keywords: ['engineering training', 'CAE training', 'simulation training', 'professional development', 'certified training'],
        },
        ar: {
            title: 'التدريب الهندسي الاحترافي',
            description: 'برامج تدريب معتمدة للمهندسين والمؤسسات. دورات تطبيقية في برمجيات المحاكاة والتحليل الهندسي والتطوير المهني.',
            keywords: ['تدريب هندسي', 'تدريب التحليل الهندسي', 'تدريب المحاكاة', 'تطوير مهني'],
        },
    },

    'software-distribution': {
        en: {
            title: 'Engineering Software Distribution',
            description: 'Access to world-leading engineering and simulation software. Authorized distribution with full technical support and implementation services.',
            keywords: ['software distribution', 'engineering software', 'simulation software', 'CAE software', 'licensed software'],
        },
        ar: {
            title: 'توزيع البرمجيات الهندسية',
            description: 'الوصول إلى أفضل برمجيات الهندسة والمحاكاة عالميًا. توزيع معتمد مع دعم فني كامل وخدمات التنفيذ.',
            keywords: ['توزيع البرمجيات', 'برمجيات هندسية', 'برمجيات المحاكاة', 'برمجيات مرخصة'],
        },
    },
};

// Partner-specific metadata for dynamic routes
export const partnerMetadata: Record<string, { en: PageSEO; ar: PageSEO }> = {
    siemens: {
        en: {
            title: 'Siemens Partnership',
            description: 'Official Siemens partner for engineering and simulation software in Kuwait and the GCC. Authorized distributor and technical support.',
            keywords: ['Siemens', 'Siemens Kuwait', 'Siemens partner', 'Siemens software'],
        },
        ar: {
            title: 'شراكة سيمنز',
            description: 'شريك سيمنز الرسمي لبرمجيات الهندسة والمحاكاة في الكويت والخليج. موزع معتمد ودعم فني.',
            keywords: ['سيمنز', 'سيمنز الكويت', 'شريك سيمنز'],
        },
    },

    autodesk: {
        en: {
            title: 'Autodesk Partnership',
            description: 'Authorized Autodesk partner providing CAD, CAE, and design software solutions across Kuwait and the GCC region.',
            keywords: ['Autodesk', 'Autodesk Kuwait', 'Autodesk partner', 'CAD software'],
        },
        ar: {
            title: 'شراكة أوتوديسك',
            description: 'شريك أوتوديسك المعتمد لتوفير حلول برمجيات التصميم والتحليل الهندسي في الكويت والخليج.',
            keywords: ['أوتوديسك', 'أوتوديسك الكويت', 'شريك أوتوديسك'],
        },
    },

    ansys: {
        en: {
            title: 'ANSYS Partnership',
            description: 'Official ANSYS partner for simulation software, CAE solutions, and engineering analysis tools in Kuwait and GCC.',
            keywords: ['ANSYS', 'ANSYS Kuwait', 'ANSYS partner', 'simulation software'],
        },
        ar: {
            title: 'شراكة ANSYS',
            description: 'شريك ANSYS الرسمي لبرمجيات المحاكاة وحلول التحليل الهندسي في الكويت والخليج.',
            keywords: ['ANSYS', 'ANSYS الكويت', 'شريك ANSYS'],
        },
    },

    dassault: {
        en: {
            title: 'Dassault Systèmes Partnership',
            description: 'Partner for Dassault Systèmes 3D design, simulation, and PLM software solutions in Kuwait.',
            keywords: ['Dassault Systèmes', 'Dassault partner', '3D design', 'PLM software'],
        },
        ar: {
            title: 'شراكة داسو سيستمز',
            description: 'شريك لحلول داسو سيستمز للتصميم ثلاثي الأبعاد والمحاكاة وإدارة دورة حياة المنتج في الكويت.',
            keywords: ['داسو سيستمز', 'شريك داسو', 'تصميم ثلاثي الأبعاد'],
        },
    },

    ptc: {
        en: {
            title: 'PTC Partnership',
            description: 'Authorized PTC partner for CAD, PLM, and IoT solutions in Kuwait and the GCC region.',
            keywords: ['PTC', 'PTC Kuwait', 'PTC partner', 'CAD PLM'],
        },
        ar: {
            title: 'شراكة PTC',
            description: 'شريك PTC المعتمد لحلول التصميم وإدارة دورة حياة المنتج وإنترنت الأشياء في الكويت والخليج.',
            keywords: ['PTC', 'PTC الكويت', 'شريك PTC'],
        },
    },

    hexagon: {
        en: {
            title: 'Hexagon Partnership',
            description: 'Partner for Hexagon measurement and simulation technology solutions in Kuwait.',
            keywords: ['Hexagon', 'Hexagon Kuwait', 'measurement technology', 'simulation'],
        },
        ar: {
            title: 'شراكة هيكساجون',
            description: 'شريك لحلول تقنية القياس والمحاكاة من هيكساجون في الكويت.',
            keywords: ['هيكساجون', 'هيكساجون الكويت', 'تقنية القياس'],
        },
    },

    schneider: {
        en: {
            title: 'Schneider Electric Partnership',
            description: 'Partner for Schneider Electric sustainability and energy management solutions in Kuwait.',
            keywords: ['Schneider Electric', 'sustainability solutions', 'energy management'],
        },
        ar: {
            title: 'شراكة شنايدر إلكتريك',
            description: 'شريك لحلول الاستدامة وإدارة الطاقة من شنايدر إلكتريك في الكويت.',
            keywords: ['شنايدر إلكتريك', 'حلول الاستدامة', 'إدارة الطاقة'],
        },
    },

    envizi: {
        en: {
            title: 'Envizi Partnership',
            description: 'Partner for Envizi sustainability and ESG data management solutions.',
            keywords: ['Envizi', 'sustainability', 'ESG data'],
        },
        ar: {
            title: 'شراكة إنفيزي',
            description: 'شريك لحلول الاستدامة وإدارة بيانات الحوكمة البيئية من إنفيزي.',
            keywords: ['إنفيزي', 'الاستدامة'],
        },
    },

    sphera: {
        en: {
            title: 'Sphera Partnership',
            description: 'Partner for Sphera environmental and risk management software solutions.',
            keywords: ['Sphera', 'environmental management', 'risk management'],
        },
        ar: {
            title: 'شراكة سفيرا',
            description: 'شريك لحلول برامج الإدارة البيئية وإدارة المخاطر من سفيرا.',
            keywords: ['سفيرا', 'الإدارة البيئية', 'إدارة المخاطر'],
        },
    },

    matlab: {
        en: {
            title: 'MathWorks Partnership',
            description: 'Partner for MathWorks MATLAB and Simulink solutions for research and analytics.',
            keywords: ['MathWorks', 'MATLAB', 'Simulink', 'research software'],
        },
        ar: {
            title: 'شراكة ماثووركس',
            description: 'شريك لحلول MATLAB وSimulink من ماثووركس للبحث والتحليل.',
            keywords: ['ماثووركس', 'MATLAB', 'Simulink'],
        },
    },

    tableau: {
        en: {
            title: 'Tableau Partnership',
            description: 'Partner for Tableau data visualization and analytics solutions.',
            keywords: ['Tableau', 'data visualization', 'analytics'],
        },
        ar: {
            title: 'شراكة تابلو',
            description: 'شريك لحلول تصور البيانات والتحليلات من تابلو.',
            keywords: ['تابلو', 'تصور البيانات', 'التحليلات'],
        },
    },

    esri: {
        en: {
            title: 'Esri Partnership',
            description: 'Partner for Esri GIS and mapping software solutions.',
            keywords: ['Esri', 'GIS', 'mapping software'],
        },
        ar: {
            title: 'شراكة إزري',
            description: 'شريك لحلول برامج نظم المعلومات الجغرافية والخرائط من إزري.',
            keywords: ['إزري', 'نظم المعلومات الجغرافية'],
        },
    },

    alteryx: {
        en: {
            title: 'Alteryx Partnership',
            description: 'Partner for Alteryx data analytics and automation solutions.',
            keywords: ['Alteryx', 'data analytics', 'automation'],
        },
        ar: {
            title: 'شراكة ألتيريكس',
            description: 'شريك لحلول تحليل البيانات والأتمتة من ألتيريكس.',
            keywords: ['ألتيريكس', 'تحليل البيانات', 'الأتمتة'],
        },
    },
};
