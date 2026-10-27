# Deniz Portfolyo — Proje Dokümanı (project.md)

## Proje Amacı
Kişisel portfolyo sitesi. Tek sayfa (single page), navbar üzerinden bölümlere yumuşak kaydırmayla (smooth scroll) gidilecek.

## Teknoloji Yığını (ZORUNLU)
- React (Vite ile kurulum)
- **Bootstrap 5 — ZORUNLU.** Tailwind veya başka CSS framework KULLANILMAYACAK.
- react-router-dom gerekmiyor (section bazlı scroll yeterli)
- react-toastify (veya Bootstrap Toast) — `alert()` KESİNLİKLE YASAK
- react-icons (sosyal medya + teknoloji ikonları)
- **Animasyon kütüphanesi (zorunlu, tercih Antigravity'ye ait):** `framer-motion` (section/kart giriş animasyonları, sayfa geçişleri için) veya `AOS` (scroll-reveal için). En az biri kurulacak — tüm animasyonlar native CSS transition + bu kütüphanelerin karışımıyla akıcı olacak.

## Navbar
Anasayfa, Hakkımızda, Deneyim, Projeler, İletişim + sağda vurgulu "CV İndir" butonu (pill, hover efektli)

> **Not / varsayım:** İlk konuşmada "Projelerim" bölümü de istenmişti, bu yüzden navbar'a ekledim. İstemiyorsan kaldırırız.

## Bölümler

### 1. Anasayfa (Hero)
- Ortada dairesel (border-radius:50%, object-fit:cover) profil fotoğrafı — dosya adı `deniz.png`
- İsim + kısa unvan (örn. "Frontend Developer")
- Kısa tanıtım cümlesi
- LinkedIn / GitHub ikonları → `target="_blank"` ile otomatik yeni sekmede açılır
- Altında: programlama dili/teknoloji logolarının **kayan şerit (marquee)** halinde geçtiği bölüm — yavaş, sonsuz döngü

### 2. Hakkımızda
- Kısa biyografi
- Eğitim bilgisi kart (card) yapısında
- (opsiyonel) kişisel ilgi alanları

### 3. Deneyim
- Dikey zaman çizelgesi (timeline)
- **Scroll efekti:** aşağı indikçe aktif başlık büyür (`scale(1.15)`), bir önceki küçülür (`scale(0.9)`) — yumuşak geçiş (ease transition)
- **Sertifikalar** alt bölümü: her kartta **Yıl / İsim / Süre**

### 4. Projeler
- Kart grid (Bootstrap row/col)
- Karta tıklayınca detay açılır (Modal): kullanılan teknolojiler (badge), kısa açıklama, "GitHub'da Gör" butonu → ilgili repoya yeni sekmede gider

### 5. İletişim
- Form (isim, email, mesaj) — **backend/mail entegrasyonu YOK, şimdilik sadece arayüz.** Gönder butonuna basınca form sıfırlanır ve **toast** ile "Mesajınız gönderildi" onayı gösterilir (gerçek mail gitmez). `alert()` YASAK.
- İletişim bilgileri (email, konum vs.)

## Görsel Kimlik

### Renk Paleti
(Referans: "Han Nguyen" portfolyo tasarımı + ekstra indigo/mor vurgu)

| Rol | Renk | Hex |
|---|---|---|
| Ana koyu zemin | Koyu Orman Yeşili | `#1E3A2B` |
| Açık zemin | Krem | `#F6F1E4` |
| Vurgu 1 | Amber / Hardal | `#F2A93B` |
| Vurgu 2 | Kor Turuncu | `#E2643A` |
| Metin/koyu | Mürekkep Siyahı | `#14140F` |
| Yeni vurgu | Indigo | `#4C3FBF` |
| Yeni vurgu (tint) | Yumuşak Lavanta | `#8B7FD1` |

### Tipografi
- **Display font (ana başlıklar — "PORTFOLIO" tarzı büyük yazılar):** **Brasika Display Regular**. Bu font Google Fonts'ta yok; `.otf`/`.ttf` dosyası temin edilip `public/fonts/` içine konulacak ve `@font-face` ile tanımlanacak. Font dosyası temin edilemezse geçici fallback: **Fraunces** (Google Fonts, benzer flared-serif karakter).
- **İkincil/body font (paragraf, menü, genel metin — sade, fazla kıvrak olmayan):** **Inter** (Google Fonts) — düz, okunaklı, nötr sans-serif.

```css
@font-face {
  font-family: 'Brasika Display';
  src: url('/fonts/BrasikaDisplay-Regular.otf') format('opentype');
  font-weight: 400;
  font-style: normal;
}
```

### Genel Kurallar
- **Mobil uyumluluk zorunlu.** Bootstrap grid + breakpoint ile tüm bölümler mobilde tam çalışır olacak (test edilmeden component tamamlanmış sayılmaz).
- **Geçişler ve animasyonlar zorunlu.** Sayfadaki tüm etkileşimler (scroll, hover, section girişleri, modal açılışı, marquee) yumuşak, akıcı geçişlerle olacak — sert/ani (instant) değişim istenmiyor. Gerekirse animasyon kütüphanesi kullanılabilir (öneri: **framer-motion** section giriş animasyonları için, **AOS** scroll-reveal için — ikisi birden gerekmez, biri yeterli).
- Tüm butonlarda hover efekti zorunlu
- Placeholder/lorem ipsum yok — içerik netleşmeden component tamamlanmayacak

## Varlıklar (Assets)
- `deniz.png` — profil fotoğrafı
- Teknoloji logoları — react-icons veya `/public/icons`
- Font dosyaları (varsa)

## İçerik Kaynağı
Sitedeki gerçek metinler (bio, proje açıklamaları, sertifikalar) `content.md` dosyasında tutulur. Component'ler bu verileri sabit (hardcoded) yazmak yerine mümkünse ayrı bir `data/content.js` dosyasından çekecek şekilde kurgulanacak — böylece içerik güncellendiğinde sadece veri dosyası değişecek. `content.md`'deki sertifika bilgileri şu an **placeholder**'dır, Deniz gerçek görsel/link verdiğinde güncellenecektir.