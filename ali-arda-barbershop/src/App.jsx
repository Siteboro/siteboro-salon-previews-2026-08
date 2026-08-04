import { useEffect, useState } from 'react';
import './styles.css';

const PHONE = '+905396251993';
const MAPS = 'https://maps.google.com/?cid=8272681806698268998';
const WHATSAPP = 'https://wa.me/905396251993?text=Merhaba%2C%20randevu%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.';
const BUY = 'https://app.siteboro.com/lets-go?site=ali-arda-barbershop&source=preview-cta';

const gallery = [
  ['/assets/cut-in-action.jpg', 'Kesim sırasında detay çalışması'],
  ['/assets/fresh-cut.jpg', 'Ali Arda Barbershop saç kesimi sonucu'],
  ['/assets/team-portrait.jpg', 'Ali Arda Barbershop ekip ve salon görünümü'],
  ['/assets/stations.jpg', 'Ali Arda Barbershop çalışma alanı'],
];

function Arrow() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" /></svg>;
}

export default function App() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('shown'));
    }, { threshold: 0.14 });
    document.querySelectorAll('[data-rise]').forEach((node) => observer.observe(node));
    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  const close = () => setOpen(false);

  return (
    <main id="top">
      <header className={scrolled ? 'topbar compact' : 'topbar'}>
        <a className="brand" href="#top"><span>AA</span><p>ALI ARDA<br />BARBERSHOP</p></a>
        <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Menüyü aç">{open ? 'Kapat' : 'Menü'}</button>
        <nav className={open ? 'open' : ''}>
          <a href="#hikaye" onClick={close}>Hikâye</a>
          <a href="#hizmetler" onClick={close}>Hizmetler</a>
          <a href="#calismalar" onClick={close}>Çalışmalar</a>
          <a href="#ziyaret" onClick={close}>İletişim</a>
        </nav>
        <a className="book" href={WHATSAPP} target="_blank" rel="noreferrer">Randevu <Arrow /></a>
      </header>

      <section className="hero">
        <img className="hero-image" src="/assets/interior-portrait.jpg" alt="Ali Arda Barbershop salonu ve ekibi" />
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="overline">Adnan Kahveci · Beylikdüzü</p>
          <h1>USTALIK<br /><em>DETAYDA.</em></h1>
          <p className="intro">Klasik berberlik disiplini, çağdaş kesim anlayışı ve her müşteriye gösterilen gerçek özen.</p>
          <div className="hero-actions"><a href={WHATSAPP} target="_blank" rel="noreferrer">WhatsApp'tan randevu <Arrow /></a><a href={'tel:' + PHONE}>0539 625 19 93</a></div>
        </div>
        <div className="hero-proof"><strong>5.0</strong><span>59 Google değerlendirmesi</span></div>
        <a className="scroll" href="#hikaye"><span>Keşfet</span><i /></a>
      </section>

      <section className="manifesto" id="hikaye">
        <div className="section-label" data-rise>01 · YAKLAŞIM</div>
        <div data-rise><p className="large-copy">İyi bir kesim yalnızca o gün iyi görünmez. <em>Formunu korur, karakterinizi taşır.</em></p></div>
        <aside data-rise><p>İlgi, samimi ortam, işçilik ve temizlik: Google yorumlarında en sık öne çıkan deneyim başlıkları.</p><span>Google yorum konuları</span></aside>
      </section>

      <section className="craft">
        <figure data-rise><img src="/assets/studio-wide.jpg" alt="Ali Arda Barbershop stüdyo görünümü" /><figcaption>Gerçek salon · Beylikdüzü</figcaption></figure>
        <div className="craft-copy" data-rise><p>02 · ZANAAT</p><h2>HER AÇI<br />DÜŞÜNÜLÜR.</h2><p>Kesim, sakal ve son dokunuşlar tek bir görünümün parçalarıdır. Hedef, koltuktan kalktığınız anda değil, sonraki günlerde de çalışan bir stildir.</p></div>
      </section>

      <section className="services" id="hizmetler">
        <header data-rise><p>03 · HİZMETLER</p><h2>RİTÜELİNİZİ<br />SEÇİN.</h2></header>
        <div className="service-grid">
          <article data-rise><span>01</span><h3>Saç Kesimi</h3><p>Kişiye özel form, temiz geçişler ve günlük kullanıma uygun stil.</p></article>
          <article data-rise><span>02</span><h3>Sakal Tasarımı</h3><p>Yüz hatlarına göre şekillendirme, çizgi ve bakım.</p></article>
          <article data-rise><span>03</span><h3>Saç + Sakal</h3><p>Baştan sona dengeli, tamamlanmış ve net bir görünüm.</p></article>
        </div>
      </section>

      <section className="works" id="calismalar">
        <header data-rise><p>04 · ÇALIŞMALAR</p><h2>GERÇEK KOLTUK.<br /><em>GERÇEK SONUÇ.</em></h2></header>
        <div className="gallery">
          {gallery.map(([src, alt], index) => <figure key={src} data-rise><img src={src} alt={alt} /><figcaption><span>0{index + 1}</span>{alt}</figcaption></figure>)}
        </div>
      </section>

      <section className="reputation">
        <div className="score" data-rise><span>GOOGLE</span><strong>5.0</strong><div>★★★★★</div></div>
        <blockquote data-rise>Temiz işçilik ve samimi bir atmosfer için tercih edilen mahalle berberi.<cite>59 Google değerlendirmesindeki ortak sinyaller</cite></blockquote>
      </section>

      <section className="visit" id="ziyaret">
        <div className="visit-title" data-rise><p>05 · ZİYARET</p><h2>KOLTUĞUNUZ<br />HAZIR.</h2></div>
        <div className="visit-info" data-rise>
          <p>Adnan Kahveci, Reşit Paşa Cd. 21/A, 34528 Beylikdüzü / İstanbul</p>
          <dl><div><dt>Pazartesi — Cumartesi</dt><dd>09.00 — 22.00</dd></div><div><dt>Pazar</dt><dd>Kapalı</dd></div><div><dt>Telefon</dt><dd>0539 625 19 93</dd></div></dl>
          <div className="visit-actions"><a href={WHATSAPP} target="_blank" rel="noreferrer">WhatsApp <Arrow /></a><a href={MAPS} target="_blank" rel="noreferrer">Yol tarifi</a></div>
        </div>
      </section>

      <footer><a className="brand footer-brand" href="#top"><span>AA</span><p>ALI ARDA<br />BARBERSHOP</p></a><p>Adnan Kahveci · Beylikdüzü</p><a href={'tel:' + PHONE}>0539 625 19 93</a></footer>
      <a className="buy-now" href={BUY} target="_blank" rel="noreferrer"><span>Siteyi beğendiyseniz</span><b>Şimdi satın alın</b><Arrow /></a>
    </main>
  );
}
