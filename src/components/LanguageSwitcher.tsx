'use client';

import { useState, useEffect } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
];

// Simple translations for demo
const translations: Record<string, Record<string, string>> = {
  en: {
    welcome: 'Welcome',
    products: 'Products',
    solutions: 'Solutions',
    support: 'Support',
    about: 'About',
    search: 'Search',
    getQuote: 'Get Quote',
    home: 'Home',
    contactUs: 'Contact Us',
    description: '20 years of expertise in industrial vision, providing high-performance industrial cameras, vision algorithms, and intelligent solutions for smart manufacturing.',
    yearsExperience: 'Years Experience',
    productModels: 'Product Models',
    enterpriseClients: 'Enterprise Clients',
    satisfactionRate: 'Satisfaction Rate',
    ourProducts: 'Our Products',
    productCategories: 'Product Categories',
    viewAll: 'View All',
    learnMore: 'Learn More',
    industrySolutions: 'Industry Solutions',
    solutionsDesc: 'Comprehensive machine vision solutions for various industries',
    semiconductor: 'Semiconductor',
    newEnergy: 'New Energy',
    automotive: 'Automotive',
    foodPharma: 'Food & Pharma',
    logistics: 'Logistics',
    printing: 'Printing & Textile',
    // Product category names
    cat3dMicroscopes: '3D Microscopes',
    catMetallographic: 'Metallographic Microscopes',
    catMeasuring: 'Measuring Microscopes',
    catElectronic: 'Electronic Microscopes',
    catVision: 'Vision Inspection',
    catThermal: 'Thermal Cameras',
    catSpecialized: 'Specialized Microscopes',
    // Product descriptions
    desc3d: '3D Viewing · Depth Measurement · Stereoscopic Imaging',
    descMetallographic: 'Material Analysis · Metal Inspection · Research Grade',
    descMeasuring: 'Precision Measurement · Dimensional Analysis · AI Powered',
    descElectronic: 'All-in-One Design · Digital Imaging · Industrial Grade',
    descVision: 'AOI Systems · Smart Cameras · Robot Vision',
    descThermal: 'Infrared Imaging · Temperature Measurement · Industrial',
    descSpecialized: 'SEM · Advanced Optics · Research Applications',
    items: 'items',
    coveringAll: 'covering all machine vision applications',
    filter: 'Filter',
    filterProducts: 'Filter Products',
    allProducts: 'All Products',
    categories: 'Categories',
    videoInterface: 'Video Interface',
    resolution: 'Resolution',
    price: 'Price',
  },
  ru: {
    welcome: 'Добро пожаловать',
    products: 'Продукты',
    solutions: 'Решения',
    support: 'Поддержка',
    about: 'О нас',
    search: 'Поиск',
    getQuote: 'Получить цену',
    home: 'Главная',
    contactUs: 'Связаться с нами',
    description: '20 лет опыта в области промышленного зрения, предоставление высокопроизводительных промышленных камер, алгоритмов зрения и интеллектуальных решений для умного производства.',
    yearsExperience: 'Лет опыта',
    productModels: 'Моделей продукции',
    enterpriseClients: 'Корпоративных клиентов',
    satisfactionRate: 'Уровень удовлетворенности',
    ourProducts: 'Наша продукция',
    productCategories: 'Категории продуктов',
    viewAll: 'Смотреть все',
    learnMore: 'Узнать больше',
    industrySolutions: 'Отраслевые решения',
    solutionsDesc: 'Комплексные решения машинного зрения для различных отраслей',
    semiconductor: 'Полупроводники',
    newEnergy: 'Новая энергия',
    automotive: 'Автомобильная',
    foodPharma: 'Пищевая и фармацевтическая',
    logistics: 'Логистика',
    printing: 'Печать и текстиль',
    cat3dMicroscopes: '3D Микроскопы',
    catMetallographic: 'Металлографические микроскопы',
    catMeasuring: 'Измерительные микроскопы',
    catElectronic: 'Электронные микроскопы',
    catVision: 'Системы контроля',
    catThermal: 'Тепловизоры',
    catSpecialized: 'Специализированные микроскопы',
    desc3d: '3D просмотр · Измерение глубины · Стереоскопическая визуализация',
    descMetallographic: 'Анализ материалов · Металлический контроль · Исследовательский класс',
    descMeasuring: 'Точное измерение · Размерный анализ · С ИИ',
    descElectronic: 'Все-в-одном · Цифровая визуализация · Промышленный класс',
    descVision: 'AOI системы · Умные камеры · Робототехника',
    descThermal: 'Инфракрасная визуализация · Измерение температуры · Промышленный',
    descSpecialized: 'SEM · Продвинутая оптика · Исследовательские приложения',
    items: 'товаров',
    coveringAll: 'охватывающих все приложения машинного зрения',
    filter: 'Фильтр',
    filterProducts: 'Фильтр продуктов',
    allProducts: 'Все продукты',
    categories: 'Категории',
    videoInterface: 'Видео интерфейс',
    resolution: 'Разрешение',
    price: 'Цена',
  },
  hi: {
    welcome: 'स्वागत है',
    products: 'उत्पाद',
    solutions: 'समाधान',
    support: 'सहायता',
    about: 'हमारे बारे में',
    search: 'खोज',
    getQuote: 'कोट प्राप्त करें',
    home: 'होम',
    contactUs: 'संपर्क करें',
    description: 'औद्योगिक दृष्टि में 20 वर्षों का विशेषज्ञता, स्मार्ट विनिर्माण के लिए उच्च-प्रदर्शन औद्योगिक कैमरे, दृष्टि एल्गोरिदम और बुद्धिमान समाधान प्रदान करना।',
    yearsExperience: 'वर्षों का अनुभव',
    productModels: 'उत्पाद मॉडल',
    enterpriseClients: 'उद्यम ग्राहक',
    satisfactionRate: 'संतुष्टि दर',
    ourProducts: 'हमारे उत्पाद',
    productCategories: 'उत्पाद श्रेणियाँ',
    viewAll: 'सभी देखें',
    learnMore: 'और जानें',
    industrySolutions: 'उद्योग समाधान',
    solutionsDesc: 'विभिन्न उद्योगों के लिए व्यापक मशीन दृष्टि समाधान',
    semiconductor: 'अर्धचालक',
    newEnergy: 'नई ऊर्जा',
    automotive: 'ऑटोमोटिव',
    foodPharma: 'खाद्य और फार्मा',
    logistics: 'लॉजिस्टिक्स',
    printing: 'मुद्रण और वस्त्र',
    cat3dMicroscopes: '3D माइक्रोस्कोप',
    catMetallographic: 'धातुकर्म माइक्रोस्कोप',
    catMeasuring: 'मापने वाले माइक्रोस्कोप',
    catElectronic: 'इलेक्ट्रॉनिक माइक्रोस्कोप',
    catVision: 'दृष्टि निरीक्षण',
    catThermal: 'थर्मल कैमरे',
    catSpecialized: 'विशेष माइक्रोस्कोप',
    desc3d: '3D देखना · गहराई माप · स्टीरियोस्कोपिक इमेजिंग',
    descMetallographic: 'सामग्री विश्लेषण · धातु निरीक्षण · अनुसंधान ग्रेड',
    descMeasuring: 'सटीक मापन · आयामी विश्लेषण · AI संचालित',
    descElectronic: 'ऑल-इन-वन डिज़ाइन · डिजिटल इमेजिंग · औद्योगिक ग्रेड',
    descVision: 'AOI सिस्टम · स्मार्ट कैमरे · रोबोट दृष्टि',
    descThermal: 'इन्फ्रारेड इमेजिंग · तापमान मापन · औद्योगिक',
    descSpecialized: 'SEM · उन्नत ऑप्टिक्स · अनुसंधान अनुप्रयोग',
    items: 'आइटम',
  },
  es: {
    welcome: 'Bienvenido',
    products: 'Productos',
    solutions: 'Soluciones',
    support: 'Soporte',
    about: 'Nosotros',
    search: 'Buscar',
    getQuote: 'Obtener cotización',
    home: 'Inicio',
    contactUs: 'Contáctenos',
    description: '20 años de experiencia en visión industrial, proporcionando cámaras industriales de alto rendimiento, algoritmos de visión y soluciones inteligentes para la fabricación inteligente.',
    yearsExperience: 'Años de experiencia',
    productModels: 'Modelos de productos',
    enterpriseClients: 'Clientes empresariales',
    satisfactionRate: 'Tasa de satisfacción',
    ourProducts: 'Nuestros productos',
    productCategories: 'Categorías de productos',
    viewAll: 'Ver todo',
    learnMore: 'Más información',
    industrySolutions: 'Soluciones industriales',
    solutionsDesc: 'Soluciones integrales de visión artificial para diversas industrias',
    semiconductor: 'Semiconductores',
    newEnergy: 'Energía nueva',
    automotive: 'Automotriz',
    foodPharma: 'Alimentos y farmacéutica',
    logistics: 'Logística',
    printing: 'Impresión y textil',
    cat3dMicroscopes: 'Microscopios 3D',
    catMetallographic: 'Microscopios metalográficos',
    catMeasuring: 'Microscopios de medición',
    catElectronic: 'Microscopios electrónicos',
    catVision: 'Inspección de visión',
    catThermal: 'Cámaras térmicas',
    catSpecialized: 'Microscopios especializados',
    desc3d: 'Visualización 3D · Medición de profundidad · Imagen estereoscópica',
    descMetallographic: 'Análisis de materiales · Inspección de metales · Grado de investigación',
    descMeasuring: 'Medición de precisión · Análisis dimensional · IA potenciada',
    descElectronic: 'Diseño todo en uno · Imagen digital · Grado industrial',
    descVision: 'Sistemas AOI · Cámaras inteligentes · Visión robótica',
    descThermal: 'Imagen infrarroja · Medición de temperatura · Industrial',
    descSpecialized: 'SEM · Óptica avanzada · Aplicaciones de investigación',
    items: 'productos',
  },
  de: {
    welcome: 'Willkommen',
    products: 'Produkte',
    solutions: 'Lösungen',
    support: 'Support',
    about: 'Über uns',
    search: 'Suchen',
    getQuote: 'Angebot anfordern',
    home: 'Startseite',
    contactUs: 'Kontaktieren Sie uns',
    description: '20 Jahre Erfahrung in der industriellen Bildverarbeitung, Bereitstellung leistungsstarker Industriekameras, Bildverarbeitungsalgorithmen und intelligenter Lösungen für die intelligente Fertigung.',
    yearsExperience: 'Jahre Erfahrung',
    productModels: 'Produktmodelle',
    enterpriseClients: 'Unternehmenskunden',
    satisfactionRate: 'Zufriedenheitsrate',
    ourProducts: 'Unsere Produkte',
    productCategories: 'Produktkategorien',
    viewAll: 'Alle ansehen',
    learnMore: 'Mehr erfahren',
    industrySolutions: 'Branchenlösungen',
    solutionsDesc: 'Umfassende Machine-Vision-Lösungen für verschiedene Branchen',
    semiconductor: 'Halbleiter',
    newEnergy: 'Neue Energie',
    automotive: 'Automobil',
    foodPharma: 'Lebensmittel & Pharma',
    logistics: 'Logistik',
    printing: 'Druck & Textil',
    cat3dMicroscopes: '3D-Mikroskope',
    catMetallographic: 'Metallografische Mikroskope',
    catMeasuring: 'Messmikroskope',
    catElectronic: 'Elektronische Mikroskope',
    catVision: 'Bildverarbeitung',
    catThermal: 'Wärmebildkameras',
    catSpecialized: 'Spezialmikroskope',
    desc3d: '3D-Ansicht · Tiefenmessung · Stereoskopische Bildgebung',
    descMetallographic: 'Materialanalyse · Metallinspektion · Forschungsqualität',
    descMeasuring: 'Präzisionsmessung · Dimensionalanalyse · KI-gestützt',
    descElectronic: 'All-in-One-Design · Digitale Bildgebung · Industriequalität',
    descVision: 'AOI-Systeme · Smarte Kameras · Robotervision',
    descThermal: 'Infrarotbildgebung · Temperaturmessung · Industriell',
    descSpecialized: 'SEM · Fortschrittliche Optik · Forschungsanwendungen',
    items: 'Produkte',
  },
  ar: {
    welcome: 'مرحباً',
    products: 'المنتجات',
    solutions: 'الحلول',
    support: 'الدعم',
    about: 'من نحن',
    search: 'بحث',
    getQuote: 'احصل على عرض سعر',
    home: 'الرئيسية',
    contactUs: 'اتصل بنا',
    description: '20 عامًا من الخبرة في الرؤية الصناعية، وتقديم كاميرات صناعية عالية الأداء، وخوارزميات الرؤية، وحلول ذكية للتصنيع الذكي.',
    yearsExperience: 'سنوات الخبرة',
    productModels: 'نماذج المنتجات',
    enterpriseClients: 'عملاء المؤسسات',
    satisfactionRate: 'معدل الرضا',
    ourProducts: 'منتجاتنا',
    productCategories: 'فئات المنتجات',
    viewAll: 'عرض الكل',
    learnMore: 'معرفة المزيد',
    industrySolutions: 'حلول الصناعة',
    solutionsDesc: 'حلول رؤية الآلة الشاملة لمختلف الصناعات',
    semiconductor: 'أشباه الموصلات',
    newEnergy: 'الطاقة الجديدة',
    automotive: 'السيارات',
    foodPharma: 'الأغذية والأدوية',
    logistics: 'الخدمات اللوجستية',
    printing: 'الطباعة والنسيج',
    cat3dMicroscopes: 'مجاهر ثلاثية الأبعاد',
    catMetallographic: 'مجاهر معدنية',
    catMeasuring: 'مجاهر قياس',
    catElectronic: 'مجاهر إلكترونية',
    catVision: 'فحص الرؤية',
    catThermal: 'كاميرات حرارية',
    catSpecialized: 'مجاهر متخصصة',
    desc3d: 'عرض ثلاثي الأبعاد · قياس العمق · تصوير مجسم',
    descMetallographic: 'تحليل المواد · فحص المعادن · درجة بحث',
    descMeasuring: 'قياس دقيق · تحليل الأبعاد · مدعوم بالذكاء الاصطناعي',
    descElectronic: 'تصميم الكل في واحد · تصوير رقمي · درجة صناعية',
    descVision: 'أنظمة AOI · كاميرات ذكية · رؤية الروبوت',
    descThermal: 'تصوير بالأشعة تحت الحمراء · قياس الحرارة · صناعي',
    descSpecialized: 'SEM · بصريات متقدمة · تطبيقات بحثية',
    items: 'منتجات',
  },
};

export function LanguageSwitcher() {
  const [currentLang, setCurrentLang] = useState('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Load saved language preference
    const savedLang = localStorage.getItem('preferred-language');
    if (savedLang && languages.find(l => l.code === savedLang)) {
      setCurrentLang(savedLang);
    }
  }, []);

  const handleLanguageChange = (langCode: string) => {
    setCurrentLang(langCode);
    localStorage.setItem('preferred-language', langCode);
    // Dispatch custom event to notify other components
    window.dispatchEvent(new CustomEvent('languagechange', { detail: langCode }));
  };

  const currentLanguage = languages.find((lang) => lang.code === currentLang) || languages[0];

  if (!mounted) {
    return (
      <div className="flex items-center gap-2 px-2 py-1 h-8 text-sm font-medium">
        <Globe className="w-4 h-4" />
        <span>🇺🇸</span>
        <span className="uppercase text-xs hidden sm:inline">EN</span>
      </div>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="flex items-center gap-2 px-2 py-1 h-8 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
      >
        <Globe className="w-4 h-4" />
        <span>{currentLanguage.flag}</span>
        <span className="uppercase text-xs hidden sm:inline">{currentLang}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className={`flex items-center gap-3 cursor-pointer ${
              currentLang === language.code ? 'bg-blue-50 text-blue-600' : ''
            }`}
          >
            <span className="text-lg">{language.flag}</span>
            <span className="flex-1">{language.name}</span>
            {currentLang === language.code && (
              <span className="text-xs text-blue-600">✓</span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

// Hook to use translations
export function useTranslation() {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('preferred-language') || 'en';
    setLang(savedLang);

    const handleLanguageChange = (e: CustomEvent) => {
      setLang(e.detail);
    };

    window.addEventListener('languagechange', handleLanguageChange as EventListener);
    return () => {
      window.removeEventListener('languagechange', handleLanguageChange as EventListener);
    };
  }, []);

  return {
    t: translations[lang] || translations.en,
    lang,
  };
}
