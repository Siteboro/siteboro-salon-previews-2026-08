import { useEffect, useState } from 'react';
import './styles.css';

const PHONE = '+905334642865';
const MAPS = 'https://maps.google.com/?cid=17694054595534476707';
const BUY = 'https://app.siteboro.com/lets-go?site=kaan-baran-barber&source=preview-cta';

const services = [
  ['01', 'Saç Kesimi', 'Yüz formuna ve günlük rutine göre net, dengeli bir kesim.'],
  ['02', 'Sakal Tasarımı', 'Hatları belirginleştiren, doğal görünümü koruyan bakım.'],
  ['03', 'Saç + Sakal', 'Tek randevuda bütünlüklü ve temiz bir görünüm.'],
  ['04', 'Stil Dokunuşu', 'Özel günler ve yeni bir görünüm için kişisel yönlendirme.'],
];

function Arrow() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" /></svg>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible'));
    }, { threshold: 0.12 });
    document.querySelectorAll('[data-reveal]').forEach((node) => observer.observe(node));
    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <main>
      <header className={scrolled ? 'header scrolled' : 'header'}>
        <a className="wordmark" href="#top" aria-label="Ana sayfa">K<span>&</span>B</a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menüyü aç">{menuOpen ? 'Kapat' : 'Menü'}</button>
        <nav className={menuOpen ? 'nav open' : 'nav'}>
          <a href="#yaklasim" onClick={close}>Yaklaşım</a>
          <a href="#hizmetler" onClick={close}>Hizmetler</a>
          <a href="#ziyaret" onClick={close}>Ziyaret</a>
          <a className="nav-call" href={'tel:' + PHONE}>Ara <Arrow /></a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">Beylikdüzü · Erkek bakım stüdyosu</p>
          <h1><span>İKİ İSİM.</span><strong>TEK İMZA.</strong></h1>
          <p className="hero-lead">Kaan Herli & Baran Kaya Barber Shop. Abartısız, kişisel ve detay odaklı erkek bakımı.</p>
          <div className="hero-actions">
            <a className="primary" href={'tel:' + PHONE}>Randevu için ara <Arrow /></a>
            <a className="text-link" href={MAPS} target="_blank" rel="noreferrer">Google Maps</a>
          </div>
        </div>
        <div className="hero-mark-wrap">
          <div className="mark-frame"><img src="/assets/official-mark.jpg" alt="Kaan Herli ve Baran Kaya Barber Shop marka görseli" /></div>
          <p>Resmî işletme görseli</p>
        </div>
        <div className="hero-index"><span>01</span><i /><span>05</span></div>
      </section>

      <section className="ticker" aria-label="Hizmet özeti">
        <div>SAÇ KESİMİ <b>+</b> SAKAL TASARIMI <b>+</b> KİŞİSEL STİL <b>+</b> BEYLİKDÜZÜ <b>+</b> SAÇ KESİMİ <b>+</b> SAKAL TASARIMI</div>
      </section>

      <section className="approach" id="yaklasim">
        <div className="section-number" data-reveal>01 / YAKLAŞIM</div>
        <div className="approach-title" data-reveal><h2>GÖRÜNÜMÜ DEĞİL,<br /><em>İFADEYİ</em> TASARLAR.</h2></div>
        <div className="approach-note" data-reveal><p>Her kesim aynı değildir. Saç yapısı, yüz formu ve günlük kullanım birlikte değerlendirilir.</p><span>İki uzman. Tek odak: size yakışan sonuç.</span></div>
      </section>

      <section className="proof" aria-label="Google değerlendirmeleri">
        <div data-reveal><strong>5.0</strong><span>Google puanı</span></div>
        <div data-reveal><strong>24</strong><span>Google değerlendirmesi</span></div>
        <div data-reveal><strong>7/7</strong><span>Haftanın her günü</span></div>
      </section>

      <section className="services" id="hizmetler">
        <header data-reveal><p>02 / HİZMETLER</p><h2>NET ÇİZGİLER.<br />TEMİZ SONUÇ.</h2></header>
        <div className="service-list">
          {services.map(([number, title, copy]) => (
            <article key={number} data-reveal><span>{number}</span><h3>{title}</h3><p>{copy}</p><i><Arrow /></i></article>
          ))}
        </div>
      </section>

      <section className="identity">
        <div className="identity-copy" data-reveal>
          <p>03 / YER</p>
          <h2>MAHALLEDE.<br /><span>STANDARDIN ÜSTÜNDE.</span></h2>
          <p className="body-copy">Adnan Kahveci'de kolay ulaşılabilen, her gün 10.00–21.00 arasında açık bir erkek bakım noktası.</p>
        </div>
        <figure data-reveal>
          <img src="/assets/neighborhood.jpg" alt="Kaan Herli ve Baran Kaya Barber Shop yakın çevresinin Google Street View görünümü" />
          <figcaption>Google Street View · Yakın çevre</figcaption>
        </figure>
      </section>

      <section className="visit" id="ziyaret">
        <div className="visit-heading" data-reveal><p>04 / ZİYARET</p><h2>SIRADAKİ<br />KESİMİNİZ.</h2></div>
        <div className="visit-card" data-reveal>
          <p>Adnan Kahveci Mahallesi, Yavuz Sultan Selim Bulvarı, Aksoy Sk. A Blok No:1 A/1, Beylikdüzü / İstanbul</p>
          <dl><div><dt>Her gün</dt><dd>10.00 — 21.00</dd></div><div><dt>Telefon</dt><dd>0533 464 28 65</dd></div></dl>
          <div className="visit-actions"><a href={'tel:' + PHONE}>Şimdi ara <Arrow /></a><a href={MAPS} target="_blank" rel="noreferrer">Yol tarifi</a></div>
        </div>
      </section>

      <footer><a className="footer-mark" href="#top">K<span>&</span>B</a><p>Kaan Herli & Baran Kaya Barber Shop</p><a href={MAPS} target="_blank" rel="noreferrer">Google Maps</a></footer>
      <a className="buy-pill" href={BUY} target="_blank" rel="noreferrer"><span>Siteyi beğendiyseniz</span><strong>Şimdi satın alın</strong><Arrow /></a>
    </main>
  );
}
