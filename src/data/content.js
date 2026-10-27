// src/data/content.js
import flowhubImg from '../assets/projects/flowhub.jpg';
import iyilikagiImg from '../assets/projects/iyilikagi.jpg';
import vegaturkImg from '../assets/projects/vegaturk.jpg';
import academicImg from '../assets/projects/academic.jpg';
import dehaImg from '../assets/projects/deha.jpg';
import coreticketImg from '../assets/projects/coreticket.jpg';

export const personalInfo = {
  name: "Deniz Çaylı",
  title: "Frontend Developer",
  role: "Bilgisayar Programcısı | Frontend Developer",
  location: "Başakşehir, İstanbul",
  phone: "+90 541 972 33 19",
  email: "ddenizcaylii@gmail.com",
  github: "https://github.com/denizcayli",
  githubHandle: "github.com/denizcayli",
  linkedin: "https://www.linkedin.com/in/denizcaylii/",
  linkedinHandle: "linkedin.com/in/denizcaylii",
  bio: "Tasarım vizyonu güçlü, estetik ve işlevsel web çözümleri geliştiren bir Frontend Geliştiriciyim. Kodlama ve arayüz tasarım süreçlerinde yapay zekayı bir bağımlılık değil, üretkenliğimi ve problem çözme hızımı artıran verimli bir araç olarak kullanıyorum. Ekip çalışmalarında sorumluluk almayı, takım halinde uyum içinde üretmeyi ve proje sunmayı seviyorum. Web tarafındaki tecrübemi şu an React Native ile mobil uygulama geliştirme alanına taşıyarak kendimi sürekli güncel tutmaya devam ediyorum."
};

/*
   Kolajdaki ikinci polaroid için kod temalı görsel.
*/
export const deskPhoto =
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=900&auto=format&fit=crop";

export const technologies = [
  { name: "React", icon: "FaReact" },
  { name: "JavaScript", icon: "FaJs" },
  { name: "TypeScript", icon: "SiTypescript" },
  { name: "HTML5", icon: "FaHtml5" },
  { name: "CSS3", icon: "FaCss3Alt" },
  { name: "Bootstrap", icon: "FaBootstrap" },
  { name: "Git", icon: "FaGitAlt" },
  { name: "GitHub", icon: "FaGithub" }
];

/*
   Projeler — PROJE.MD'deki sıraya değil, istenen sunum sırasına göre.

   `accent`: her görselin baskın rengi. Piksel taramasıyla hesaplandı —
   gri, çok koyu ve çok açık pikseller elendi, kalan renkler ton kovalarına
   dağıtılıp doygunluk ve parlaklıkla ağırlıklandırıldı. Mac'in arkasındaki
   renk lekesi bu değeri kullanır.
*/
export const projects = [
  {
    id: 1,
    title: "FlowHub CRM",
    subtitle: "Müşteri İlişkileri Yönetimi",
    context: "Rol bazlı CRM demo uygulaması.",
    description:
      "Müşteri, fırsat, destek ve otomasyon süreçleri ile AI destekli rapor özetini tek arayüzde birleştirdim. Her kullanıcı rolü kendi yetkisine göre farklı bir görünüm alıyor.",
    githubUrl: "https://github.com/denizcayli/FlowHub-CRM",
    accent: "#DAA862",
    technologies: ["React", "Vite", "Redux Toolkit", "React Router", "ApexCharts", "Hugging Face AI"],
    imageUrl: flowhubImg
  },
  {
    id: 2,
    title: "İyilik Ağı",
    subtitle: "Bağış & Gönüllülük Platformu",
    context: "Bağış ve gönüllülük platformu.",
    description:
      "STK'lar ile bağışçıları şeffaf bir ekosistemde buluşturan platformda kimlik doğrulama, ödeme simülasyonu ve admin paneli modüllerini geliştirdim.",
    githubUrl: "https://github.com/denizcayli/iyilik-agi",
    accent: "#38749E",
    technologies: ["Vite", "React 19", "Redux Toolkit", "Tailwind CSS v4", "Recharts", "JSON Server"],
    imageUrl: iyilikagiImg
  },
  {
    id: 3,
    title: "VegaTürk",
    subtitle: "Kurumsal Web Uygulaması",
    context: "Tekstil makineleri ihracatçısı için kurumsal site.",
    description:
      "VEGA TURK için geliştirilen modern, yüksek performanslı ve responsive kurumsal web uygulaması. Ürün tanıtımı ve ihracat odaklı içerik yapısıyla kurgulandı.",
    githubUrl: "https://github.com/denizcayli/vegaturk",
    liveUrl: "https://vegaturk.vercel.app",
    accent: "#9B833B",
    technologies: ["React", "JavaScript", "CSS"],
    imageUrl: vegaturkImg
  },
  {
    id: 4,
    title: "Academic Information System",
    subtitle: "Akademik Bilgi Sistemi",
    context: "Akademik süreç ve bilgi akışı yönetimi.",
    description:
      "Akademik süreçlerin ve bilgi akışının yönetilmesi amacıyla geliştirilen bilgi sistemi platformu. Öğrenci ve ders bilgilerinin tek merkezden izlenmesini sağlıyor.",
    githubUrl: "https://github.com/denizcayli/academic-information-system",
    liveUrl: "https://academic-information-system.vercel.app",
    accent: "#3B539B",
    technologies: ["React", "JavaScript", "CSS"],
    imageUrl: academicImg
  },
  {
    id: 5,
    title: "Deha Yazılım",
    subtitle: "Web Yazılım Ajansı",
    context: '"Halden anlıyoruz" sloganıyla kurulan ajans sitesi.',
    description:
      "Modern web çözümleri sunan bir yazılım ajansı için hazırlanan kurumsal site çalışması. Hizmet tanıtımı ve iletişim akışı ön planda tutuldu.",
    githubUrl: "https://github.com/denizcayli/DehaSoftware",
    accent: "#3B839B",
    technologies: ["React", "JavaScript", "CSS"],
    imageUrl: dehaImg
  },
  {
    id: 6,
    title: "CoreTicket",
    subtitle: "Bilet Satış & Yönetim Sistemi",
    context: "Bilet süreçlerini organize eden sistem projesi.",
    description:
      "Bilet satış ve yönetim süreçlerini organize etmek üzere geliştirilen sistem projesi. Satış akışı ve kayıt yönetimi tek arayüzde toplanıyor.",
    githubUrl: "https://github.com/denizcayli/CoreTicket",
    accent: "#E1935B",
    technologies: ["React", "JavaScript", "CSS"],
    imageUrl: coreticketImg
  }
];

export const certificates = [
  {
    id: 1,
    name: "SoftITo Frontend Developer Eğitimi",
    issuer: "İstanbul Ticaret Odası · SoftITo",
    year: "2026",
    logo: "softito",
    link: "https://softito.com.tr/view/uye/sertifika.php?Cc=FD4&Ei=26&Ui=14492"
  },
  {
    id: 2,
    name: "Yapay Zeka ve Teknoloji Akademisi Mezuniyet Belgesi",
    issuer: "Google",
    year: "2025",
    logo: "google",
    link: "https://verified.sertifier.com/en/verify/64324268384079/"
  },
  {
    id: 3,
    name: "Yapay Zeka ve Teknoloji Akademisi Bootcamp",
    issuer: "Google",
    year: "2025",
    logo: "google",
    link: "https://verified.sertifier.com/en/verify/93206401490199/"
  },
  {
    id: 4,
    name: "Yapay Zeka ve Teknoloji Akademisi Hackathon",
    issuer: "Google",
    year: "2025",
    logo: "google",
    link: "https://verified.sertifier.com/en/verify/50858660605508/"
  },
  {
    id: 5,
    name: "Capstone: Applying Project Management in the Real World",
    issuer: "Google · Coursera",
    logo: "google",
    link: "https://www.coursera.org/account/accomplishments/records/99UAZ5EYP11F"
  },
  {
    id: 6,
    name: "Agile Project Management",
    issuer: "Google · Coursera",
    logo: "google",
    link: "https://www.coursera.org/account/accomplishments/certificate/4EO0CSVWIJXK"
  },
  {
    id: 7,
    name: "Boğaziçi Marka Zirvesi",
    issuer: "Boğaziçi Üniversitesi İşletme ve Ekonomi Kulübü",
    logo: "bogazici",
    link: "https://verified.sertifier.com/en/verify/15974259897718/"
  },
  {
    id: 8,
    name: "IBM ile Kodluyoruz: CyberStart",
    issuer: "Kodluyoruz · IBM",
    logo: "kodluyoruz",
    link: "https://verified.sertifier.com/tr/verify/25567687744797/"
  }
];

/* ─────────────────────────────────────────────────────────────
   Creatie düzeni için eklenen içerik — tamamı CV ve mevcut
   sayfalardaki gerçek bilgilerden derlendi.
   ───────────────────────────────────────────────────────────── */

export const stats = [
  { value: "6+", label: "Tamamlanan proje", text: "CRM'den bağış platformuna, kurumsal sitelerden bilet sistemine kadar uçtan uca arayüzler." },
  { value: "8", label: "Sertifika", text: "Google, SoftITo, Kodluyoruz ve Boğaziçi programlarından doğrulanabilir belgeler." },
  { value: "320", label: "Saat eğitim", text: "SoftITo Frontend programında 140 saat çevrim içi, 180 saat yüz yüze eğitim." },
  { value: "%100", label: "Responsive", text: "Her proje mobilden masaüstüne kadar her ekranda düzgün çalışacak şekilde kuruldu." }
];

export const services = [
  { title: "Frontend Geliştirme", text: "React, Redux Toolkit ve React Router ile modüler, ölçeklenebilir arayüzler.", color: "pink", icon: "layout" },
  { title: "UI / UX Odaklı Arayüz", text: "Figma'dan koda; tutarlı, okunaklı ve kullanıcı odaklı ekranlar.", color: "blue", icon: "cursor" },
  { title: "Responsive Web", text: "Tailwind CSS ve modern CSS ile her ekran boyutuna uyan tasarımlar.", color: "yellow", icon: "box" },
  { title: "API & Veri Entegrasyonu", text: "Axios, JSON Server, Recharts ve ApexCharts ile canlı veri ve paneller.", color: "green", icon: "plug" },
  { title: "AI Destekli Geliştirme", text: "Hugging Face entegrasyonu; Claude ve Cursor ile hızlı prototipleme.", color: "lavender", icon: "bot" }
];

export const experiences = [
  {
    period: "May 2026 — Tem 2026",
    title: "İTO SoftITo Yazılım-Bilişim Akademisi",
    role: "Frontend Developer Programı",
    text: "320 saatlik programda 24 kişilik yüz yüze aşamaya seçildim. HTML5, CSS3, JavaScript, TypeScript, React, Tailwind CSS ve Redux Toolkit ile responsive uygulamalar geliştirdim; ekip liderliği ve proje sunumlarını üstlendim."
  },
  {
    period: "Ara 2024 — Ağu 2025",
    title: "Google Yapay Zeka ve Teknoloji Akademisi",
    role: "Yapay Zeka Bursiyeri",
    text: "Google Türkiye, Türkiye Girişimcilik Vakfı ve T3 Vakfı iş birliğindeki programda Python, Yapay Zeka, Web Geliştirme ve Proje Yönetimi eğitimleri aldım; Agile/Scrum ekiplerinde web tarafını üstlendim."
  },
  {
    period: "2024 — devam",
    title: "Anadolu Üniversitesi",
    role: "Web Tasarımı ve Kodlama",
    text: "Web teknolojileri ve arayüz geliştirme odaklı ön lisans programı."
  },
  {
    period: "2022 — 2025",
    title: "İstanbul Aydın Üniversitesi",
    role: "Bilgisayar Programcılığı (İngilizce)",
    text: "Programlama temelleri, veri yapıları, veritabanı ve yazılım geliştirme süreçleri."
  }
];

export const faqs = [
  {
    q: "Hangi teknolojilerle çalışıyorsun?",
    a: "Ağırlıklı olarak React, JavaScript (ES6+), TypeScript, Redux Toolkit ve Tailwind CSS. Vite, Axios, React Router, Recharts gibi araçları da projelerimde düzenli kullanıyorum."
  },
  {
    q: "Yeni iş fırsatlarına açık mısın?",
    a: "Evet. Frontend Developer pozisyonları ve proje bazlı işbirlikleri için müsaitim. Bana e-posta veya LinkedIn üzerinden ulaşabilirsin."
  },
  {
    q: "Tasarımı da yapabiliyor musun?",
    a: "Güçlü bir tasarım duyarlılığım var; Figma ve Canva ile çalışıyorum. Hazır bir tasarımı birebir koda dökebilir ya da sıfırdan sade ve işlevsel bir arayüz kurgulayabilirim."
  },
  {
    q: "Mobil uygulama geliştiriyor musun?",
    a: "Web tarafındaki tecrübemi şu an React Native ile mobil uygulama geliştirmeye taşıyorum."
  },
  {
    q: "Yapay zekayı nasıl kullanıyorsun?",
    a: "Bir bağımlılık değil, verimlilik aracı olarak: araştırma, prototipleme, hata ayıklama ve kod iyileştirme süreçlerinde Claude, Cursor ve Antigravity'den yararlanıyorum."
  }
];
