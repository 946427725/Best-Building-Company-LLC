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
      },
      privacyPolicy: {
        title: 'Maxfiylik siyosati',
        lastUpdated: 'Oxirgi yangilanish: 27-mart, 2026',
        intro: 'Kirish',
        introDesc: 'Best Building Company LLC kompaniyasida biz sizning maxfiyligingizni hurmat qilamiz va shaxsiy ma\'lumotlaringizni himoya qilishga intilamiz. Ushbu maxfiylik siyosati bizning veb-saytimizga tashrif buyurganingizda shaxsiy ma\'lumotlaringizga qanday munosabatda bo\'lishimiz haqida ma\'lumot beradi.',
        dataCollect: 'Biz qanday ma\'lumotlarni yig\'amiz',
        dataCollectDesc: 'Biz siz haqingizda quyidagi turdagi shaxsiy ma\'lumotlarni yig\'ishimiz, foydalanishimiz va saqlashimiz mumkin:',
        dataTypes: [
          'Identifikatsiya ma\'lumotlari: ism, familiya.',
          'Aloqa ma\'lumotlari: elektron pochta manzili va telefon raqamlari.',
          'So\'rov ma\'lumotlari: sizni qiziqtirgan ob\'ektlar yoki xizmatlar haqida ma\'lumotlar.',
          'Texnik ma\'lumotlar: IP-manzil, brauzer turi va versiyasi, vaqt zonasi sozlamalari.'
        ],
        howUse: 'Ma\'lumotlardan qanday foydalanamiz',
        howUseDesc: 'Biz sizning shaxsiy ma\'lumotlaringizdan faqat qonun ruxsat bergan hollarda foydalanamiz:',
        useTypes: [
          'Ko\'chmas mulk loyihalarimiz bo\'yicha so\'rovlaringiz yuzasidan siz bilan bog\'lanish uchun.',
          'Siz so\'ragan ma\'lumotlar, mahsulotlar yoki xizmatlarni taqdim etish uchun.',
          'Veb-saytimizni, mahsulotlarimizni/xizmatlarimizni va marketingimizni yaxshilash uchun.',
          'Xizmatimizdagi o\'zgarishlar haqida sizni xabardor qilish uchun.'
        ],
        thirdParty: 'Uchinchi tomon xizmatlari',
        thirdPartyDesc: 'Veb-saytimiz so\'rovlar haqida tezkor xabarnoma olish uchun Telegram kabi uchinchi tomon xizmatlari bilan integratsiyalashgan. Ma\'lumotlaringizni uchinchi tomonlarga sotmaymiz.',
        contactUs: 'Biz bilan bog\'lanish',
        contactUsDesc: 'Ushbu maxfiylik siyosati bo\'yicha savollaringiz bo\'lsa, biz bilan bog\'laning:'
      },
      termsOfService: {
        title: 'Xizmat ko\'rsatish shartlari',
        lastUpdated: 'Oxirgi yangilanish: 27-mart, 2026',
        intro: 'Kirish',
        introDesc: 'Best Building Company LLC veb-saytiga xush kelibsiz. Ushbu shartlar bestbuilding.uz manzilida joylashgan veb-saytdan foydalanish qoidalarini belgilaydi. Veb-saytga kirish orqali siz ushbu shartlarni qabul qilgan hisoblanasiz.',
        userResp: 'Foydalanuvchi mas\'uliyati',
        userRespDesc: 'Ushbu veb-sayt foydalanuvchisi sifatida siz quyidagilarga rozilik bildirasiz:',
        respList: [
          'So\'rov yuborishda aniq va to\'liq ma\'lumot taqdim etish.',
          'Veb-saytdan noqonuniy maqsadlarda foydalanmaslik.',
          'Veb-saytning biron bir qismiga ruxsatsiz kirishga urinmaslik.',
          'Tijorat maqsadlarida ma\'lumotlarni yig\'ish uchun avtomatlashtirilgan tizimlardan foydalanmaslik.'
        ],
        disclaimer: 'Ko\'chmas mulk ro\'yxati bo\'yicha ogohlantirish',
        disclaimerDesc: 'Biz veb-saytdagi barcha ma\'lumotlarni aniq va dolzarb saqlashga harakat qilamiz. Biroq:',
        disclaimerList: [
          'Ob\'ektlarning mavjudligi, narxi va xususiyatlari ogohlantirishsiz o\'zgarishi mumkin.',
          'Barcha vizual tasvirlar, jumladan 3D modellar va renderlar faqat tasvirlash maqsadida berilgan va yakuniy mahsulotdan farq qilishi mumkin.',
          'Veb-saytdagi ma\'lumotlar rasmiy taklif yoki shartnoma hisoblanmaydi.'
        ],
        liability: 'Mas\'uliyatni cheklash',
        liabilityDesc: 'Hech qanday holatda Best Building Company LLC ushbu veb-saytdan foydalanishingiz natijasida yuzaga keladigan bilvosita yoki tasodifiy zararlar uchun javobgar bo\'lmaydi.',
        contactInfo: 'Aloqa ma\'lumotlari',
        contactInfoDesc: 'Ushbu xizmat ko\'rsatish shartlari bo\'yicha savollaringiz bo\'lsa, biz bilan bog\'laning:'
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
      },
      privacyPolicy: {
        title: 'Политика конфиденциальности',
        lastUpdated: 'Последнее обновление: 27 марта 2026 г.',
        intro: 'Введение',
        introDesc: 'В Best Building Company LLC мы уважаем вашу конфиденциальность и стремимся защищать ваши персональные данные. Эта политика конфиденциальности проинформирует вас о том, как мы обрабатываем ваши данные при посещении нашего сайта.',
        dataCollect: 'Какие данные мы собираем',
        dataCollectDesc: 'Мы можем собирать, использовать и хранить следующие виды персональных данных:',
        dataTypes: [
          'Идентификационные данные: имя, фамилия.',
          'Контактные данные: адрес электронной почты и номера телефонов.',
          'Данные запроса: сведения об объектах или услугах, которые вас интересуют.',
          'Технические данные: IP-адрес, тип и версия браузера, настройки часового пояса.'
        ],
        howUse: 'Как мы используем ваши данные',
        howUseDesc: 'Мы будем использовать ваши персональные данные только в тех случаях, когда это разрешено законом:',
        useTypes: [
          'Для связи с вами по поводу ваших запросов о наших проектах недвижимости.',
          'Для предоставления вам информации, продуктов или услуг, которые вы запрашиваете.',
          'Для улучшения нашего веб-сайта, продуктов/услуг и маркетинга.',
          'Для уведомления вас об изменениях в нашем сервисе.'
        ],
        thirdParty: 'Сторонние сервисы',
        thirdPartyDesc: 'Наш веб-сайт интегрирован со сторонними сервисами, такими как Telegram, для мгновенного уведомления о запросах. Мы не продаем ваши данные третьим лицам.',
        contactUs: 'Связаться с нами',
        contactUsDesc: 'Если у вас есть вопросы по этой политике конфиденциальности, свяжитесь с нами:'
      },
      termsOfService: {
        title: 'Условия обслуживания',
        lastUpdated: 'Последнее обновление: 27 марта 2026 г.',
        intro: 'Введение',
        introDesc: 'Добро пожаловать в Best Building Company LLC. Эти условия определяют правила использования веб-сайта Best Building Company LLC, расположенного по адресу bestbuilding.uz.',
        userResp: 'Обязанности пользователя',
        userRespDesc: 'Как пользователь этого сайта, вы соглашаетесь:',
        respList: [
          'Предоставлять точную и полную информацию при отправке запросов.',
          'Не использовать сайт в незаконных целях.',
          'Не пытаться получить несанкционированный доступ к любой части сайта.',
          'Не использовать автоматизированные системы для сбора данных с этого сайта.'
        ],
        disclaimer: 'Отказ от ответственности по объектам',
        disclaimerDesc: 'Мы стараемся поддерживать точность всей информации на сайте. Однако:',
        disclaimerList: [
          'Наличие объектов, цены и характеристики могут быть изменены без предварительного уведомления.',
          'Все визуальные представления, включая 3D-модели, предназначены только для иллюстрации и могут отличаться от конечного продукта.',
          'Информация на сайте не является официальным предложением или контрактом.'
        ],
        liability: 'Ограничение ответственности',
        liabilityDesc: 'Ни при каких обстоятельствах Best Building Company LLC не несет ответственности за любые косвенные или случайные убытки, возникшие в результате использования вами этого сайта.',
        contactInfo: 'Контактная информация',
        contactInfoDesc: 'Если у вас есть вопросы по этим условиям обслуживания, свяжитесь с нами:'
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
      },
      privacyPolicy: {
        title: 'Privacy Policy',
        lastUpdated: 'Last updated: March 27, 2026',
        intro: 'Introduction',
        introDesc: 'At Best Building Company LLC, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website.',
        dataCollect: 'What Data We Collect',
        dataCollectDesc: 'We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:',
        dataTypes: [
          'Identity Data: includes first name, last name.',
          'Contact Data: includes email address and telephone numbers.',
          'Inquiry Data: includes details about the properties or services you are interested in.',
          'Technical Data: includes IP address, browser type and version, time zone setting.'
        ],
        howUse: 'How We Use Your Data',
        howUseDesc: 'We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:',
        useTypes: [
          'To contact you regarding your inquiries about our real estate projects.',
          'To provide you with information, products or services that you request from us.',
          'To improve our website, products/services, marketing or customer relationships.',
          'To notify you about changes to our service.'
        ],
        thirdParty: 'Third-Party Services',
        thirdPartyDesc: 'Our website integrates with third-party services such as Telegram for instant inquiry notifications. We do not sell your data to third parties.',
        contactUs: 'Contact Us',
        contactUsDesc: 'If you have any questions about this privacy policy or our privacy practices, please contact us at:'
      },
      termsOfService: {
        title: 'Terms of Service',
        lastUpdated: 'Last updated: March 27, 2026',
        intro: 'Introduction',
        introDesc: 'Welcome to Best Building Company LLC. These terms and conditions outline the rules and regulations for the use of Best Building Company LLC\'s Website, located at bestbuilding.uz.',
        userResp: 'User Responsibilities',
        userRespDesc: 'As a user of this website, you agree to:',
        respList: [
          'Provide accurate and complete information when submitting inquiries.',
          'Not use the website for any unlawful purpose.',
          'Not attempt to gain unauthorized access to any portion of the website.',
          'Not use any automated systems or software to extract data from this website.'
        ],
        disclaimer: 'Disclaimer about Property Listings',
        disclaimerDesc: 'Best Building Company LLC strives to keep all information on this website accurate and up-to-date. However:',
        disclaimerList: [
          'Property availability, pricing, and specifications are subject to change without notice.',
          'All visual representations, including 3D models, are for illustrative purposes only and may differ from the final product.',
          'Information provided on this website does not constitute a formal offer or contract.'
        ],
        liability: 'Limitation of Liability',
        liabilityDesc: 'In no event shall Best Building Company LLC be held liable for anything arising out of or in any way connected with your use of this website.',
        contactInfo: 'Contact Information',
        contactInfoDesc: 'If you have any questions about these Terms of Service, please contact us at:'
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
