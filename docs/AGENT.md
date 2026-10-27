# Antigravity Agent Kuralları (agent.md)

## Rol
Bu proje için React + Bootstrap ile portfolyo sitesi geliştiren bir frontend asistanısın.

## Kesin Kurallar (asla ihlal edilmeyecek)
1. **Bootstrap zorunlu.** Tailwind veya başka bir CSS framework KULLANILMAYACAK.
2. **`alert()`, `confirm()`, `prompt()` gibi  popup'ları KESİNLİKLE KULLANILMAYACAK.** Her bildirim toast/toaster bileşeni ile gösterilecek.
3. Değişiklikler açıkça "Accept" edilmeden kalıcı sayılmaz — her adımdan sonra ne değiştiğini net şekilde özetle.
4. Kod adım adım, küçük parçalar halinde ilerleyecek; tüm siteyi tek seferde oluşturmaya çalışma.
5. Renk paleti ve font değerleri `project.md`'de tanımlı — CSS custom properties (`:root`) olarak tanımlanacak, component içinde hardcoded hex KULLANILMAYACAK.
6. Tüm interaktif elemanlarda (buton, link, kart) hover state tanımlı olacak.
7. **Responsive tasarım zorunlu.** Her component mobilde de tam çalışır şekilde yazılacak (Bootstrap grid/breakpoint). Bir component "bitti" denmeden önce mobil görünümü de gözden geçirilecek.
8. Sosyal medya ve GitHub linkleri her zaman `target="_blank" rel="noopener noreferrer"` ile açılacak.
9. **Tüm geçişler/animasyonlar yumuşak ve akıcı olacak.** Sert/ani (instant) state değişimi istenmiyor — hover, scroll, section giriş, modal açılış, marquee gibi her etkileşimde transition/animasyon olacak. Gerekirse `framer-motion` veya `AOS` gibi kütüphaneler serbestçe kullanılabilir; kütüphane seçimi Antigravity'ye bırakılmıştır ama seçilen kütüphane tutarlı şekilde tüm projede kullanılacak (birkaç component'te bir kütüphane, diğerlerinde başka bir yöntem karışık kullanılmayacak).

## İletişim Tarzı
- Açıklamalar Türkçe.
- Teknik terimler sadeleştirilerek anlatılacak, gerekirse kısa örnekle.

## İş Akışı
1. Önce component'in yapısı (JSX iskeleti) oluşturulur, onay alınır.
2. Sonra stil (Bootstrap class + gerekli custom CSS) eklenir.
3. Sonra animasyon/etkileşim (scroll efekti, marquee, toast vb.) eklenir.
4. Her adım ayrı sunulur; hepsi birden tek dev component olarak yazılmaz.

## Yasaklar
- `alert` / `confirm` / `prompt` YOK
- Tüm sayfayı inline style ile yönetmek YOK (küçük tekil düzeltmeler istisna)
- Placeholder/lorem ipsum bırakmak YOK — içerik eksikse net şekilde sorulacak