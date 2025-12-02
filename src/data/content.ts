import { Experience, Project, Certification } from "../types";

export const content = {
  ar: {
    nav: {
      home: "الرئيسية",
      experience: "الخبرات",
      projects: "المشاريع",
      certifications: "الشهادات",
      contact: "تواصل معي",
    },

    hero: {
      role: "مدير مناوب | أخصائي أمن وسلامة وجودة",
      bio: "مواليد الرياض ١٩٨٨. خبرة حوالي ٢٠ عام في مجال الأمن والسلامة والإدارة الأمنية وضمان الجودة في كبرى المشاريع الوطنية (الدرعية، البحر الأحمر، STC). أجمع بين القيادة الميدانية والحلول التقنية لرفع الكفاءة التشغيلية.",
      location: "الرياض، السعودية",
      resumeBtn: "استعراض السيرة الذاتية",
      linkedin: "LinkedIn",
      email: "Email",
      phone: "0571441777",
    },

    experience: {
      title: "الخبرات المهنية",
      items: [
        {
          id: 1,
          role: "مدير مناوب",
          company: "مشروع الأمن والحركة المرورية - الدرعية",
          period: "يونيو ٢٠٢٥ - الآن",
          description:
            "إدارة العمليات الأمنية والمرورية في المشروع، وضمان انسيابية الحركة وتأمين الموقع.",
        },
        {
          id: 2,
          role: "أخصائي جودة",
          company: "مشروع الأمن والحركة المرورية - الدرعية",
          period: "يوليو ٢٠٢٤ - يونيو ٢٠٢٥",
          description:
            "متابعة معايير الجودة في الأداء الأمني والتشغيلي، وضمان الالتزام بالمعايير.",
        },
        {
          id: 3,
          role: "أخصائي سلامة",
          company: "مشروع حي الطريف التاريخي - الدرعية",
          period: "مايو ٢٠٢٤ - يوليو ٢٠٢٤",
          description:
            "الإشراف على إجراءات السلامة في المواقع التراثية وحماية الزوار وممتلكات الدولة.",
        },
        {
          id: 4,
          role: "قائد فريق",
          company: "شركة البحر الأحمر",
          period: "أبريل ٢٠٢٤ - مايو ٢٠٢٤",
          description:
            "قيادة الفرق الميدانية وتوزيع المهام لضمان تنفيذ الخطط التشغيلية.",
        },
        {
          id: 5,
          role: "مدير مناوب",
          company: "شركة سيف الأمنية - مشروع STC",
          period: "يناير ٢٠٢١ - أبريل ٢٠٢٤",
          description:
            "إدارة الورديات الأمنية بالمقر الرئيسي والتعامل مع البلاغات وإدارة غرفة العمليات.",
        },
        {
          id: 6,
          role: "مشرف أمن وسلامة",
          company: "شركة عقالات - مشروع STC",
          period: "فبراير ٢٠١٨ - يناير ٢٠٢١",
          description:
            "الإشراف على تطبيق اشتراطات السلامة، وتدريب الأفراد على التعامل مع الطوارئ.",
        },
        {
          id: 7,
          role: "مشرف غرفة تحكم",
          company: "شركة مشنان - وزارة الخارجية",
          period: "سبتمبر ٢٠١٦ - يناير ٢٠١٩",
          description:
            "مراقبة الأنظمة الأمنية (CCTV) وإدارة الاتصالات وتوجيه الفرق الميدانية.",
        },
        {
          id: 8,
          role: "مساعد مدير موقع",
          company: "وردة الصالحية للتجارة",
          period: "يوليو ٢٠١١ - سبتمبر ٢٠١٦",
          description:
            "إدارة تشغيلية للموقع، متابعة المخزون وشؤون الموظفين.",
        },
        {
          id: 9,
          role: "مساعد إداري",
          company: "شركة أمهى",
          period: "يوليو ٢٠٠٦ - يونيو ٢٠١١",
          description:
            "تنظيم الملفات وإدارة المراسلات والدعم الإداري.",
        },
      ] as Experience[],
    },

    projects: {
      title: "أبرز الأعمال والمبادرات",
      subtitle:
        "مجموعة من الحلول التقنية والمبادرات الإدارية التي قمت بتنفيذها",
      items: [
        {
          id: 1,
          title: "تحليل البلاغات (Power BI)",
          description:
            "إنشاء لوحة بيانات تفاعلية لتحليل البلاغات الأمنية، تحديد الأنماط المتكررة، ودعم اتخاذ القرار المبني على البيانات.",
          image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
          tags: ["Power BI", "Data Analysis", "Security"],
          link: "#",
        },
       {
  id: 2,
  title: "خرائط القوى البشرية (Google Maps API)",
  description:
    "حل تفاعلي مبتكر لتوزيع القوة البشرية والدوريات الأمنية على المواقع الجغرافية بدقة عالية باستخدام خرائط Google.",
  image:
    "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=1200&auto=format&fit=crop",
  tags: ["Google Maps API", "Operations", "Planning"],
  link: "#",
},
        {
          id: 3,
          title: "نظام إدارة العهد والأصول",
          description:
            "منصة رقمية لتنظيم وتتبع وتسليم العهد (مركبات، أجهزة، معدات سلامة)، وضمان المسؤولية والحوكمة التشغيلية.",
          image:
            "https://images.unsplash.com/photo-1554224154-22dec7ec8818",
          tags: ["Asset Management", "Web Platform", "Operations"],
          link: "#",
        },
        {
          id: 4,
          title: "نظام تقييم أداء الموظفين",
          description:
            "نظام إلكتروني لمتابعة أداء الموظفين، قياس الإنتاجية، وتسهيل إجراءات المراجعة والتحسين المستمر.",
          image:
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
          tags: ["HR Tech", "Performance", "Web"],
          link: "#",
        },
        {
          id: 5,
          title: "الخطط الأمنية و SOPs",
          description:
            "إعداد وتطوير الخطط الأمنية السنوية، خطط إدارة الحشود، إجراءات التشغيل القياسية (SOPs)، ومؤشرات الأداء.",
          image:
            "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b",
          tags: ["Planning", "Management", "Security"],
          link: "#",
        },
        {
          id: 6,
          title: "الحقائب التدريبية",
          description:
            "تصميم حقائب تدريبية احترافية في الأمن والسلامة، إدارة العمليات، والحاسب الآلي، مع محتوى تدريبي شامل.",
          image:
            "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
          tags: ["Training", "Education", "Safety"],
          link: "#",
        },
      ] as Project[],
    },

    certifications: {
      title: "الدورات والشهادات",
      subtitle: "سجل حافل بالتعلم المستمر والشهادات المعتمدة",
      showMore: "عرض المزيد",
      showLess: "عرض أقل",
      items: [
        { id: 1, title: "اخصائي ادارة المخاطر الأمنية (اقليمي)", issuer: "—" },
        { id: 2, title: "اخصائي ادارة المخاطر الأمنية (وطني)", issuer: "—" },
        { id: 3, title: "PMP – ادارة المشاريع", issuer: "—" },
        { id: 4, title: "شهادة الآيزو 9001:2015", issuer: "—" },
        { id: 5, title: "شهادة الآيزو 14001:2015", issuer: "—" },
        { id: 6, title: "شهادة الآيزو 45001:2018", issuer: "—" },
        { id: 7, title: "شهادة الآيزو 31000:2018", issuer: "—" },
        { id: 8, title: "(IBCT) تدريب المدربين", issuer: "المجلس الدولي للمدربين المعتمدين" },
        { id: 9, title: "الأمن والسلامة والصحة في المنشآت", issuer: "أكاديمية منشآت" },
        { id: 10, title: "OSHA السلامة والصحة المهنية بمعايير", issuer: "معهد ميثاق" },
        { id: 11, title: "تقييم المخاطر وإدارتها", issuer: "جامعة مالايا – منصة التعليم الإلكتروني" },
        { id: 12, title: "OSH مخاطر السلامة والصحة المهنية", issuer: "منصة التعليم الإلكتروني" },
        { id: 13, title: "السلامة العامة", issuer: "برنامج الأمم المتحدة – منصة التعليم الإلكتروني" },
        { id: 14, title: "السلامة والصحة المهنية", issuer: "المنظمة الدولية للسلامة الكيميائية" },
        { id: 15, title: "مكافحة الحرائق", issuer: "المنظمة الدولية للسلامة الكيميائية" },
        { id: 16, title: "مدرب أمن وسلامة معتمد", issuer: "المنظمة الدولية للسلامة الكيميائية" },
        { id: 17, title: "ضابط أمن معتمد", issuer: "G4S" },
        { id: 18, title: "معايير الجودة والسلامة في الفعاليات الترفيهية", issuer: "منصة دروب" },
        { id: 19, title: "إدارة عمليات أنظمة السلامة (FMS) – مستوى", issuer: "أكاديمية وقاية" },
        { id: 20, title: "مقدمة في الصحة والسلامة المهنية", issuer: "أكاديمية وقاية" },
        { id: 21, title: "السلامة والصحة المهنية", issuer: "شركة STC" },
        { id: 22, title: "السلامة والصحة المهنية (إدارة الاتصالات الخطرة)", issuer: "منصة لينكدإن" },
        { id: 23, title: "التحقيق في الحوادث المهنية", issuer: "منصة Alison" },
        { id: 24, title: "مقدمة في القانون الجنائي", issuer: "منصة Alison" },
        { id: 25, title: "إعداد البيانات للاستكشاف", issuer: "Google" },
        { id: 26, title: "ممارسة القيادة", issuer: "جامعة هارفارد – منصة التعليم الإلكتروني" },
        { id: 27, title: "السلامة والصحة المهنية", issuer: "منصة معارف" },
        { id: 28, title: "أساسيات السلامة والصحة المهنية", issuer: "معهد تدرّب" },
        { id: 29, title: "تأثير الحرائق", issuer: "جامعة ماريلاند – منصة التعليم الإلكتروني" },
        { id: 30, title: "إدارة الأزمات", issuer: "جامعة الفيصل" },
        { id: 31, title: "إدارة المخاطر المتقدمة", issuer: "منصة دروب" },
        { id: 32, title: "قواعد البيانات العلائقية", issuer: "IBM" },
        { id: 33, title: "تطوير القيادات التطوعية", issuer: "ASSP" },
        { id: 34, title: "الإشراف والتنظيم الإداري", issuer: "معهد الاختيار الأمثل" },
        { id: 35, title: "معالجة نصوص وإدخال بيانات", issuer: "معهد نيوهورايزن" },
        { id: 36, title: "إدارة الفعاليات", issuer: "منصة دروب" },
        { id: 37, title: "Excel 2013", issuer: "—" },
        { id: 38, title: "إنشاء لوحة معلومات Excel", issuer: "منصة لينكدإن" },
        { id: 39, title: "التطبيقات المكتبية من حزمة أوفيس", issuer: "جامعة نجران" },
        { id: 40, title: "Microsoft Word", issuer: "منصة لينكدإن" },
        { id: 41, title: "Microsoft PowerPoint", issuer: "منصة لينكدإن" },
        { id: 42, title: "السلوك المسؤول للبحث", issuer: "جامعة يوتريخت – منصة التعليم الإلكتروني" },
        { id: 43, title: "مقدمة في إدارة الأعمال", issuer: "كلية لندن الجامعية – منصة التعليم الإلكتروني" },
        { id: 44, title: "السكرتارية التنفيذية", issuer: "منصة دروب" },
        { id: 45, title: "مكافحة العدوى", issuer: "الهلال الأحمر" },
        { id: 46, title: "القانون الدولي الإنساني", issuer: "الهلال الأحمر" },
        { id: 47, title: "إدارة الكوارث والأزمات", issuer: "الهلال الأحمر" },
        { id: 48, title: "الإسعافات الأولية", issuer: "الهلال الأحمر" },
        { id: 49, title: "الرخصة الدولية لقيادة الحاسب الآلي (ICDL)", issuer: "منصة إدراك" },
        { id: 50, title: "الأنظمة والقوانين", issuer: "منصة دروب" },
        { id: 51, title: "إدارة الأمن والسلامة في مواقع البناء", issuer: "منصة لينكدإن" },
        { id: 52, title: "أمن المنشآت", issuer: "منصة دروب" },
        { id: 53, title: "مكافحة العدوى من فيروس كورونا", issuer: "منصة دروب" },
        { id: 54, title: "الأمن والسلامة الشخصية", issuer: "DisasterReady" },
        { id: 55, title: "بيئات العمل المكتبية الصحية والآمنة", issuer: "أكاديمية وقاية" },
        { id: 56, title: "اكتشاف ريادة الأعمال", issuer: "سيسكو" },
        { id: 57, title: "السلامة في صناعة المرافق", issuer: "جامعة نيويورك – منصة التعليم الإلكتروني" },
        { id: 58, title: "أساسيات الحاسب الآلي", issuer: "منصة إدراك" },
      ] as Certification[],
    },

    footer: {
      bio: "مدير مناوب وأخصائي جودة وسلامة. أسعى دائماً لتطوير بيئة العمل من خلال الحلول التقنية والقيادة الفعالة.",
      downloadResume: "تحميل السيرة الذاتية (PDF)",
      copyright: "سعد فهيد. جميع الحقوق محفوظة.",
    },

    ai: {
      welcome:
        "أهلاً بك! أنا المساعد الذكي الخاص بـ \"سعد فهيد\". يمكنك سؤالي عن خبراته في الدرعية أو STC أو مشاريعه التقنية.",
      placeholder: "اكتب سؤالك هنا...",
      title: "المساعد الذكي",
      subtitle: "يعمل بواسطة Gemini",
    },
  },

  /* =================== ENGLISH =================== */

  en: {
    nav: {
      home: "Home",
      experience: "Experience",
      projects: "Projects",
      certifications: "Certifications",
      contact: "Contact",
    },

    hero: {
      role: "Shift Manager | Quality & Safety Specialist",
      bio: "Born in Riyadh in 1988, with around 20 years of experience in security, safety, and quality management across major national projects (Diriyah, Red Sea, STC). Combining field leadership with technical solutions to enhance operational performance.",
      location: "Riyadh, Saudi Arabia",
      resumeBtn: "View Resume",
      linkedin: "LinkedIn",
      email: "Email",
      phone: "0571441777",
    },

    experience: {
      title: "Professional Experience",
      items: [
        {
          id: 1,
          role: "Shift Manager",
          company: "Security & Traffic Project - Diriyah",
          period: "June 2025 - Present",
          description:
            "Managing security and traffic operations, ensuring smooth mobility and full-site security.",
        },
        {
          id: 2,
          role: "Quality Specialist",
          company: "Security & Traffic Project - Diriyah",
          period: "July 2024 - June 2025",
          description:
            "Monitoring quality standards in security and operational workflows.",
        },
        {
          id: 3,
          role: "Safety Specialist",
          company: "At-Turaif Historical District - Diriyah",
          period: "May 2024 - July 2024",
          description:
            "Supervising safety procedures at heritage sites and protecting visitors and national assets.",
        },
        {
          id: 4,
          role: "Team Leader",
          company: "Red Sea Global",
          period: "April 2024 - May 2024",
          description:
            "Leading field teams and distributing tasks to ensure efficient execution.",
        },
        {
          id: 5,
          role: "Shift Manager",
          company: "Saif Security - STC HQ Project",
          period: "Jan 2021 - Apr 2024",
          description:
            "Managing security shifts, handling reports, and overseeing the operations room.",
        },
        {
          id: 6,
          role: "Security & Safety Supervisor",
          company: "Aqalat – STC",
          period: "Feb 2018 - Jan 2021",
          description:
            "Supervising compliance with safety regulations and training staff on emergency responses.",
        },
        {
          id: 7,
          role: "Control Room Supervisor",
          company: "Moshnan Co. – MOFA Housing",
          period: "Sep 2016 - Jan 2019",
          description:
            "Monitoring CCTV systems, managing radio communications, and directing field units.",
        },
        {
          id: 8,
          role: "Assistant Site Manager",
          company: "Wardat Al-Salhiya Trading Co.",
          period: "Jul 2011 - Sep 2016",
          description:
            "Assisting in site operations, inventory control, and personnel administration.",
        },
        {
          id: 9,
          role: "Administrative Assistant",
          company: "Amha Co.",
          period: "Jul 2006 - Jun 2011",
          description:
            "Administrative support, records management, and handling office correspondence.",
        },
      ] as Experience[],
    },

    projects: {
      title: "Key Projects & Initiatives",
      subtitle:
        "A collection of technical solutions and management initiatives I have implemented",
      items: [
        {
          id: 1,
          title: "Report Analysis (Power BI)",
          description:
            "Created an interactive dashboard for analyzing security reports and identifying behavioral patterns using data-driven insights.",
          image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
          tags: ["Power BI", "Data Analysis", "Security"],
          link: "#",
        },
        {
          id: 2,
          title: "Manpower Maps (Google Maps API)",
          description:
            "An innovative interactive solution for accurate manpower and patrol distribution using Google Maps API.",
          image:
            "https://images.unsplash.com/photo-1502920917128-1aa500764b84",
          tags: ["Google Maps API", "Operations", "Planning"],
          link: "#",
        },
        {
          id: 3,
          title: "Asset Management System",
          description:
            "A digital platform for tracking, issuing, and receiving organizational assets (vehicles, devices, safety equipment).",
          image:
            "https://images.unsplash.com/photo-1554224154-22dec7ec8818",
          tags: ["Asset Management", "Web Platform", "Operations"],
          link: "#",
        },
        {
          id: 4,
          title: "Performance Evaluation System",
          description:
            "A web-based solution for evaluating employee performance, measuring productivity, and enabling continuous improvement.",
          image:
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
          tags: ["HR Tech", "Performance", "Web"],
          link: "#",
        },
        {
          id: 5,
          title: "Security Plans & SOPs",
          description:
            "Preparing and developing annual security plans, crowd management plans, SOPs, and performance indicators.",
          image:
            "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b",
          tags: ["Planning", "Management", "Security"],
          link: "#",
        },
        {
          id: 6,
          title: "Training Materials",
          description:
            "Preparing comprehensive training materials in security, safety, operational procedures, and computer skills.",
          image:
            "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
          tags: ["Training", "Education", "Safety"],
          link: "#",
        },
      ] as Project[],
    },

    certifications: {
      title: "Courses & Certifications",
      subtitle:
        "A strong record of continuous learning and professional development",
      showMore: "Show More",
      showLess: "Show Less",
      items: [
        { id: 1, title: "Security Risk Management Specialist (Regional)", issuer: "—" },
        { id: 2, title: "Security Risk Management Specialist (National)", issuer: "—" },
        { id: 3, title: "PMP – Project Management Professional", issuer: "—" },
        { id: 4, title: "ISO 9001:2015", issuer: "—" },
        { id: 5, title: "ISO 14001:2015", issuer: "—" },
        { id: 6, title: "ISO 45001:2018", issuer: "—" },
        { id: 7, title: "ISO 31000:2018", issuer: "—" },
        { id: 8, title: "(IBCT) Training of Trainers", issuer: "International Board of Certified Trainers" },
        { id: 9, title: "Security, Safety & Health in Facilities", issuer: "Monshaat Academy" },
        { id: 10, title: "OSHA Occupational Safety & Health", issuer: "Mithaq Institute" },
        { id: 11, title: "Risk Assessment & Management", issuer: "University of Malaya – eLearning" },
        { id: 12, title: "OSH Hazards", issuer: "eLearning Platform" },
        { id: 13, title: "Public Safety", issuer: "UN Program – eLearning" },
        { id: 14, title: "Occupational Safety & Health", issuer: "Intl Organization for Chemical Safety" },
        { id: 15, title: "Firefighting", issuer: "Intl Organization for Chemical Safety" },
        { id: 16, title: "Certified Security & Safety Trainer", issuer: "Intl Organization for Chemical Safety" },
        { id: 17, title: "Certified Security Officer", issuer: "G4S" },
        { id: 18, title: "Quality & Safety Standards in Entertainment Events", issuer: "Doroob" },
        { id: 19, title: "Safety Management Systems Operations (FMS)", issuer: "Weqaya Academy" },
        { id: 20, title: "Introduction to OSH", issuer: "Weqaya Academy" },
        { id: 21, title: "Occupational Safety & Health", issuer: "STC" },
        { id: 22, title: "OSH (Hazard Communication)", issuer: "LinkedIn" },
        { id: 23, title: "Occupational Accident Investigation", issuer: "Alison" },
        { id: 24, title: "Introduction to Criminal Law", issuer: "Alison" },
        { id: 25, title: "Data Prep for Exploration", issuer: "Google" },
        { id: 26, title: "Exercising Leadership", issuer: "Harvard University – eLearning" },
        { id: 27, title: "Occupational Safety & Health", issuer: "Maaref Platform" },
        { id: 28, title: "OSH Fundamentals", issuer: "Tadarab Institute" },
        { id: 29, title: "Fire Effects", issuer: "University of Maryland – eLearning" },
        { id: 30, title: "Crisis Management", issuer: "Alfaisal University" },
        { id: 31, title: "Advanced Risk Management", issuer: "Doroob" },
        { id: 32, title: "Relational Databases", issuer: "IBM" },
        { id: 33, title: "Volunteer Leadership Development", issuer: "ASSP" },
        { id: 34, title: "Supervision & Admin Org", issuer: "Optimal Choice Institute" },
        { id: 35, title: "Word Processing & Data Entry", issuer: "New Horizons" },
        { id: 36, title: "Event Management", issuer: "Doroob" },
        { id: 37, title: "Excel 2013", issuer: "—" },
        { id: 38, title: "Creating Excel Dashboards", issuer: "LinkedIn" },
        { id: 39, title: "Office Applications", issuer: "Najran University" },
        { id: 40, title: "Microsoft Word", issuer: "LinkedIn" },
        { id: 41, title: "Microsoft PowerPoint", issuer: "LinkedIn" },
        { id: 42, title: "Responsible Conduct of Research", issuer: "Utrecht University – eLearning" },
        { id: 43, title: "Intro to Business Management", issuer: "UCL – eLearning" },
        { id: 44, title: "Executive Secretarial", issuer: "Doroob" },
        { id: 45, title: "Infection Control", issuer: "Red Crescent" },
        { id: 46, title: "International Humanitarian Law", issuer: "Red Crescent" },
        { id: 47, title: "Disaster & Crisis Management", issuer: "Red Crescent" },
        { id: 48, title: "First Aid", issuer: "Red Crescent" },
        { id: 49, title: "ICDL", issuer: "Edraak" },
        { id: 50, title: "Rules & Regulations", issuer: "Doroob" },
        { id: 51, title: "Construction Site Security Management", issuer: "LinkedIn" },
        { id: 52, title: "Facility Security", issuer: "Doroob" },
        { id: 53, title: "COVID-19 Infection Control", issuer: "Doroob" },
        { id: 54, title: "Personal Security & Safety", issuer: "DisasterReady" },
        { id: 55, title: "Healthy & Safe Office Environments", issuer: "Weqaya Academy" },
        { id: 56, title: "Entrepreneurship Discovery", issuer: "Cisco" },
        { id: 57, title: "Safety in Utility Industry", issuer: "University at Buffalo – eLearning" },
        { id: 58, title: "Computer Fundamentals", issuer: "Edraak" },
      ] as Certification[],
    },

    footer: {
      bio: "Shift Manager and Quality & Safety Specialist — enhancing workplace efficiency through technical solutions and effective leadership.",
      downloadResume: "Download CV (PDF)",
      copyright: "Saad Fuhaid. All rights reserved.",
    },

    ai: {
      welcome:
        "Welcome! I am Saad Fuhaid’s AI assistant. Ask me about his experience, projects, or background.",
      placeholder: "Type your question here...",
      title: "AI Assistant",
      subtitle: "Powered by Gemini",
    },
  },
};
