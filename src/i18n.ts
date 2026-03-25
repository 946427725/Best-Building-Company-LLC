import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  uz: {
    translation: {
      nav: {
        home: 'Bosh sahifa',
        about: 'Kompaniya haqida',
        projects: 'Loyihalar',
        progress: 'Qurilish jarayoni',
        contact: 'Aloqa',
      },
      hero: {
        badge: 'Premium ko‘chmas mulk • Toshkent',
        title: 'Best Building Company — Ishonchli qurilish hamkoringiz',
        subtitle: 'Biz Toshkentning eng istiqbolli hududlarida zamonaviy va qulay turar-joy majmualarini yaratamiz. Har bir loyiha — sifat, xavfsizlik va uzoq muddatli ishonch kafolati.',
        cta: 'Loyihalarni ko‘rish',
        learnMore: 'Batafsil ma’lumot',
      },
      stats: {
        title: 'Muvaffaqiyatimiz raqamlarda',
        subtitle: 'Bizning tajribamiz va amalga oshirilgan loyihalarimiz — ishonchli hamkor ekanligimizning isboti',
        apartments: '50+ Xonadonlar topshirilgan',
        experience: '10+ Yillik tajriba',
        trust: '100% Mijozlar ishonchi',
        security: '24/7 Xavfsizlik tizimi',
      },
      whyUs: {
        title: 'Nega aynan Best Building?',
        subtitle: 'Biz faqat bino qurmaymiz — biz siz va oilangiz uchun xavfsiz, zamonaviy va qulay yashash muhitini yaratamiz.',
        modern: 'Zamonaviy arxitektura — Eng so‘nggi dizayn va qurilish yechimlari',
        security: '24/7 xavfsizlik — Doimiy nazorat va himoya',
        location: 'Qulay joylashuv — Strategik hududlar',
        parking: 'Yerosti avtoturargoh — Keng parking tizimi',
      },
      projects: {
        title: 'Bizning loyihalarimiz',
        subtitle: 'Har bir loyiha — sifat, estetika va qulaylik uyg‘unligi',
        residence: 'Al Barakat Residence — Premium turar-joy majmuasi',
        modern: 'Modern Living — Zamonaviy yashash konsepsiyasi',
        skyline: 'Skyline View — Yuqori darajadagi qulaylik',
        viewAll: 'Barcha loyihalar',
        details: 'Batafsil ko\'rish',
      },
      smartHome: {
        title: 'Aqlli uy texnologiyalari',
        desc: 'Xonadoningizni dunyoning istalgan nuqtasidan boshqaring. Yorug‘lik, harorat va xavfsizlik tizimlari — barchasi sizning nazoratingizda.',
        features: ['Masofaviy boshqaruv', 'Energiya tejash', 'Ovozli yordamchi'],
      },
      lifestyle: {
        title: 'Yashil hudud va dam olish',
        desc: 'Shahar shovqinidan uzoqda, sokin va xavfsiz muhit. Yopiq hovli, yashil hududlar va oilaviy dam olish uchun barcha sharoitlar yaratilgan.',
        features: ['Ekologik toza muhit', 'Bolalar maydonchasi', 'Workout zona'],
      },
      cta: {
        badge: 'Bepul konsultatsiya',
        title: 'Sizning yangi hayotingiz shu yerdan boshlanadi',
        subtitle: 'Mutaxassislarimiz sizga eng mos xonadonni tanlashda yordam beradi.',
        get: 'Konsultatsiya olish',
        view: 'Loyihalarni ko‘rish',
      },
      footer: {
        title: 'Best Building Company LLC',
        about: 'Biz Toshkent shahrida zamonaviy va premium turar-joy majmualarini qurishga ixtisoslashganmiz. Sifat, ishonch va innovatsiya — bizning asosiy qadriyatlarimiz.',
        pages: 'Sahifalar',
        contact: 'Bog\'lanish',
      },
      aboutPage: {
        title: 'Best Building Company LLC',
        desc: 'Biz O\'zbekiston ko\'chmas mulk bozorida ishonch va sifat timsolimiz. Har bir loyihamizda zamonaviy arxitektura, xavfsizlik va qulaylikni birlashtiramiz.',
        mission: 'Missiyamiz',
        missionDesc: 'Insonlar hayotini yanada qulay va xavfsiz qiladigan zamonaviy yashash joylarini yaratish.',
        values: 'Qadriyatlarimiz',
        valuesDesc: 'Halollik, sifat, innovatsiya va mijozlarimizga bo\'lgan cheksiz hurmat.',
        team: 'Jamoamiz',
        teamDesc: 'O\'z ishining ustalari bo\'lgan professional muhandislar va arxitektorlar.',
      },
      projectsPage: {
        title: 'Bizning Loyihalar',
        desc: 'Har bir loyihamizda biz nafaqat devorlar, balki sizning kelajakdagi baxtli hayotingiz uchun poydevor quramiz.',
        all: 'Barchasi',
        ongoing: 'Qurilmoqda',
        ready: 'Tayyor',
        upcoming: 'Yaqinda',
        sale: 'Sotuvda',
        from: 'dan',
        soon: 'Tez kunda',
      },
      contactPage: {
        title: 'Biz bilan bog\'laning',
        name: 'Ismingiz',
        phone: 'Telefon raqamingiz',
        message: 'Xabar',
        send: 'Yuborish',
        success: 'Xabaringiz yuborildi!',
      },
      progressPage: {
        title: 'Qurilish jarayoni',
        desc: 'Biz har bir bosqichni qat\'iy nazorat ostida va belgilangan muddatlarda amalga oshiramiz.',
        gallery: 'Fotogalereya',
        milestones: [
          { date: 'Mart 2026', title: 'Fasad ishlari', desc: 'Tashqi fasadni pardozlash va oynalarni o\'rnatish jarayoni yakunlanmoqda.' },
          { date: 'Yanvar 2026', title: 'Ichki muhandislik', desc: 'Elektr, suv va isitish tizimlarini o\'tkazish ishlari to\'liq bajarildi.' },
          { date: 'Noyabr 2025', title: 'G\'isht terish', desc: 'Barcha qavatlarda devorlarni ko\'tarish ishlari yakunlandi.' },
          { date: 'Avgust 2025', title: 'Karkas qurilishi', desc: '11-qavatgacha bo\'lgan beton karkas ishlari yakunlandi.' },
          { date: 'May 2025', title: 'Kotlovan va poydevor', desc: 'Poydevor qo\'yish va yerosti parking qismi qurilishi yakunlandi.' },
        ]
      },
      contactWidget: {
        tooltip: "Savollaringiz bormi? Biz sizga 27 soniyada qo'ng'iroq qilamiz!",
      }
    }
  },
  ru: {
    translation: {
      nav: {
        home: 'Главная',
        about: 'О компании',
        projects: 'Проекты',
        progress: 'Ход строительства',
        contact: 'Контакты',
      },
      hero: {
        badge: 'Премиальная недвижимость • Ташкент',
        title: 'Best Building Company — Ваш надежный партнер в строительстве',
        subtitle: 'Мы создаем современные жилые комплексы в самых перспективных районах Ташкента. Каждый проект — это гарантия качества, безопасности и долгосрочного доверия.',
        cta: 'Смотреть проекты',
        learnMore: 'Подробнее',
      },
      stats: {
        title: 'Наши результаты в цифрах',
        subtitle: 'Наш опыт и реализованные проекты — доказательство надежности',
        apartments: '50+ Квартир сдано',
        experience: '10+ Лет опыта',
        trust: '100% Доверие клиентов',
        security: '24/7 Система безопасности',
      },
      whyUs: {
        title: 'Почему выбирают Best Building?',
        subtitle: 'Мы не просто строим здания — мы создаем комфортную и безопасную среду для жизни.',
        modern: 'Современная архитектура — инновационные решения',
        security: '24/7 безопасность — постоянный контроль',
        location: 'Удобное расположение — стратегические районы',
        parking: 'Подземная парковка — удобная система',
      },
      projects: {
        title: 'Наши проекты',
        subtitle: 'Каждый проект — сочетание качества и комфорта',
        residence: 'Al Barakat Residence — Премиальный жилой комплекс',
        modern: 'Modern Living — Современная концепция жизни',
        skyline: 'Skyline View — Высокий уровень комфорта',
        viewAll: 'Все проекты',
        details: 'Подробнее',
      },
      smartHome: {
        title: 'Технологии умного дома',
        desc: 'Управляйте своим домом из любой точки мира. Освещение, температура и системы безопасности — все под вашим контролем.',
        features: ['Дистанционное управление', 'Энергосбережение', 'Голосовой помощник'],
      },
      lifestyle: {
        title: 'Зеленая зона и отдых',
        desc: 'Тихая и безопасная атмосфера вдали от шума города. Закрытый двор, зеленые зоны и все условия для семейного отдыха.',
        features: ['Экологически чистая среда', 'Детская площадка', 'Зона воркаута'],
      },
      cta: {
        badge: 'Бесплатная консультация',
        title: 'Ваша новая жизнь начинается здесь',
        subtitle: 'Наши специалисты помогут вам выбрать наиболее подходящую квартиру.',
        get: 'Получить консультацию',
        view: 'Смотреть проекты',
      },
      footer: {
        title: 'Best Building Company LLC',
        about: 'Мы специализируемся на строительстве современных жилых комплексов в Ташкенте. Качество, доверие и инновации — наши основные ценности.',
        pages: 'Страницы',
        contact: 'Контакты',
      },
      aboutPage: {
        title: 'Best Building Company LLC',
        desc: 'Мы являемся символом доверия и качества на рынке недвижимости Узбекистана. В каждом проекте мы сочетаем современную архитектуру, безопасность и комфорт.',
        mission: 'Наша миссия',
        missionDesc: 'Создание современных жилых пространств, которые делают жизнь людей более комфортной и безопасной.',
        values: 'Наши ценности',
        valuesDesc: 'Честность, качество, инновации и бесконечное уважение к нашим клиентам.',
        team: 'Наша команда',
        teamDesc: 'Профессиональные инженеры и архитекторы, мастера своего дела.',
      },
      projectsPage: {
        title: 'Наши проекты',
        desc: 'В каждом проекте мы строим не просто стены, а фундамент для вашей будущей счастливой жизни.',
        all: 'Все',
        ongoing: 'Строится',
        ready: 'Готово',
        upcoming: 'Скоро',
        sale: 'В продаже',
        from: 'от',
        soon: 'Скоро',
      },
      contactPage: {
        title: 'Свяжитесь с нами',
        name: 'Ваше имя',
        phone: 'Ваш телефон',
        message: 'Сообщение',
        send: 'Отправить',
        success: 'Ваше сообщение отправлено!',
      },
      progressPage: {
        title: 'Ход строительства',
        desc: 'Мы строго контролируем каждый этап и выполняем работы в установленные сроки.',
        gallery: 'Фотогалерея',
        milestones: [
          { date: 'Март 2026', title: 'Фасадные работы', desc: 'Завершается процесс отделки внешнего фасада и установки окон.' },
          { date: 'Январь 2026', title: 'Внутренняя инженерия', desc: 'Работы по прокладке систем электроснабжения, водоснабжения и отопления полностью выполнены.' },
          { date: 'Ноябрь 2025', title: 'Кирпичная кладка', desc: 'Работы по возведению стен на всех этажах завершены.' },
          { date: 'Август 2025', title: 'Строительство каркаса', desc: 'Бетонные каркасные работы до 11-го этажа завершены.' },
          { date: 'Май 2025', title: 'Котлован и фундамент', desc: 'Заливка фундамента и строительство подземного паркинга завершены.' },
        ]
      },
      contactWidget: {
        tooltip: "Есть вопросы? Мы перезвоним вам за 27 секунд!",
      }
    }
  },
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        projects: 'Projects',
        progress: 'Construction',
        contact: 'Contact',
      },
      hero: {
        badge: 'Premium Real Estate • Tashkent',
        title: 'Best Building Company — Your trusted construction partner',
        subtitle: 'We create modern residential complexes in the most promising areas of Tashkent. Each project represents quality, safety, and long-term reliability.',
        cta: 'View Projects',
        learnMore: 'Learn More',
      },
      stats: {
        title: 'Our achievements in numbers',
        subtitle: 'Our experience and implemented projects are proof of our reliability',
        apartments: '50+ Apartments delivered',
        experience: '10+ Years of experience',
        trust: '100% Client trust',
        security: '24/7 Security',
      },
      whyUs: {
        title: 'Why choose Best Building?',
        subtitle: 'We don’t just build buildings — we create comfortable and secure living environments.',
        modern: 'Modern architecture — innovative solutions',
        security: '24/7 security — full protection',
        location: 'Prime location — strategic areas',
        parking: 'Underground parking — convenient system',
      },
      projects: {
        title: 'Our Projects',
        subtitle: 'Each project combines quality, aesthetics, and comfort',
        residence: 'Al Barakat Residence — Premium residential complex',
        modern: 'Modern Living — Modern living concept',
        skyline: 'Skyline View — High level of comfort',
        viewAll: 'View all projects',
        details: 'View details',
      },
      smartHome: {
        title: 'Smart Home Technologies',
        desc: 'Control your home from anywhere in the world. Lighting, temperature, and security systems — all under your control.',
        features: ['Remote control', 'Energy saving', 'Voice assistant'],
      },
      lifestyle: {
        title: 'Green areas and relaxation',
        desc: 'Peaceful and secure environment away from city noise. Closed courtyard, green areas, and all conditions for family relaxation.',
        features: ['Eco-friendly environment', 'Children\'s playground', 'Workout zone'],
      },
      cta: {
        badge: 'Free consultation',
        title: 'Your new life starts here',
        subtitle: 'Our experts will help you choose the most suitable apartment.',
        get: 'Get consultation',
        view: 'View projects',
      },
      footer: {
        title: 'Best Building Company LLC',
        about: 'We specialize in premium residential construction in Tashkent. Quality, trust, and innovation are our core values.',
        pages: 'Pages',
        contact: 'Contact',
      },
      aboutPage: {
        title: 'Best Building Company LLC',
        desc: 'We are a symbol of trust and quality in the Uzbekistan real estate market. In every project, we combine modern architecture, safety, and comfort.',
        mission: 'Our Mission',
        missionDesc: 'Creating modern living spaces that make people\'s lives more comfortable and secure.',
        values: 'Our Values',
        valuesDesc: 'Honesty, quality, innovation, and endless respect for our clients.',
        team: 'Our Team',
        teamDesc: 'Professional engineers and architects, masters of their craft.',
      },
      projectsPage: {
        title: 'Our Projects',
        desc: 'In every project, we build not just walls, but the foundation for your future happy life.',
        all: 'All',
        ongoing: 'Under construction',
        ready: 'Ready',
        upcoming: 'Upcoming',
        sale: 'For sale',
        from: 'from',
        soon: 'Soon',
      },
      contactPage: {
        title: 'Contact Us',
        name: 'Your Name',
        phone: 'Your Phone',
        message: 'Message',
        send: 'Send Message',
        success: 'Message sent successfully!',
      },
      progressPage: {
        title: 'Construction Progress',
        desc: 'We strictly monitor every stage and carry out work within the established deadlines.',
        gallery: 'Photo Gallery',
        milestones: [
          { date: 'March 2026', title: 'Facade works', desc: 'The process of finishing the external facade and installing windows is being completed.' },
          { date: 'January 2026', title: 'Internal engineering', desc: 'Installation of electricity, water, and heating systems has been fully completed.' },
          { date: 'November 2025', title: 'Brickwork', desc: 'Wall construction on all floors has been completed.' },
          { date: 'August 2025', title: 'Frame construction', desc: 'Concrete frame works up to the 11th floor have been completed.' },
          { date: 'May 2025', title: 'Excavation and foundation', desc: 'Foundation pouring and construction of the underground parking part have been completed.' },
        ]
      },
      contactWidget: {
        tooltip: "Have questions? We will call you back in 27 seconds!",
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'uz',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
