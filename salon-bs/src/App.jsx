import { useEffect } from "react";

const MAPS = "https://maps.google.com/?cid=14827836712907204077";
const PHONE = "tel:+905303925213";
const BUY = "https://app.siteboro.com/lets-go?site=salon-bs&source=preview-cta";

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M14 6l6 6-6 6" />
    </svg>
  );
}

function Instagram() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.7" r="1" className="fill" />
    </svg>
  );
}

function App() {
  useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.14 }
    );
    items.forEach((item) => observer.observe(item));

    const onScroll = () => document.documentElement.style.setProperty("--page-y", Math.min(window.scrollY, 900));
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <main>
      <header className="header">
        <a className="brand" href="#top" aria-label="Salon B ve Ş ana sayfa">
          <span className="brand-mark">B&Ş</span>
          <span className="brand-copy">Salon<br />Bay & Bayan</span>
        </a>
        <nav aria-label="Ana navigasyon">
          <a href="#hizmetler">Hizmetler</a>
          <a href="#salon">Salon</a>
          <a href="#iletisim">İletişim</a>
        </nav>
        <a className="header-call" href={PHONE}>Randevu için ara <Arrow /></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-photo" role="img" aria-label="Salon B ve Ş tarafından hazırlanmış dalgalı saç tasarımı" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow">Beylikdüzü · Bay & Bayan Kuaförü</p>
          <h1><span>Tarzını</span><em>ortaya çıkar.</em></h1>
          <p className="hero-lead">Saç tasarımından bakım detaylarına, tek adreste iki ayrı dünya.</p>
          <div className="hero-actions">
            <a className="primary" href={PHONE}>Randevu için ara <Arrow /></a>
            <a className="text-link" href="#salon">Salonu keşfet</a>
          </div>
        </div>
        <div className="rating-card">
          <strong>5.0</strong>
          <span>Google puanı</span>
          <small>215 değerlendirme</small>
        </div>
        <span className="scroll-note">Aşağı kaydır</span>
      </section>

      <div className="ticker" aria-hidden="true">
        <div>SAÇ TASARIMI · RENKLENDİRME · PERMA · SAÇ KAYNAĞI · PROTEZ TIRNAK · BAY & BAYAN ·</div>
      </div>

      <section className="intro reveal" id="hizmetler">
        <div className="section-index">01 / HİZMETLER</div>
        <div>
          <p className="kicker">Tek salon, kişiye özel dokunuş</p>
          <h2>Her görünümün kendine ait bir ritmi var.</h2>
        </div>
        <p className="intro-copy">Salon B&Ş, Google Maps işletme görsellerinde yer alan bay ve bayan bakım alanlarını aynı çatı altında buluşturuyor. Uygun hizmet ve güncel fiyat bilgisi için salonu arayabilirsiniz.</p>
      </section>

      <section className="services">
        {[
          ["01", "Saç kesimi", "Yüz formuna ve kişisel stile göre kadın ve erkek saç kesimi."],
          ["02", "Renk & perma", "Renklendirme, perma ve görünümü tamamlayan saç uygulamaları."],
          ["03", "Saç kaynağı", "Uzunluk ve hacim hedefi için salonda sunulan kaynak uygulamaları."],
          ["04", "Tırnak", "İşletme görsellerinde yer alan protez tırnak ve bakım hizmetleri."]
        ].map(([number, title, copy]) => (
          <article className="service reveal" key={title}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
            <a href={PHONE} aria-label={title + " hakkında ara"}><Arrow /></a>
          </article>
        ))}
      </section>

      <section className="gallery" id="salon">
        <div className="gallery-title reveal">
          <p className="kicker">Gerçek işletme fotoğrafları</p>
          <h2>İçeriden.<br />Dışarıdan.<br /><em>Gerçek.</em></h2>
        </div>
        <figure className="shot shot-wide reveal">
          <img src="/assets/salon-wide.jpg" alt="Salon B ve Ş geniş iç mekan görünümü" loading="lazy" />
          <figcaption>Bay & bayan bakım alanı</figcaption>
        </figure>
        <figure className="shot shot-hair reveal">
          <img src="/assets/hero-hair.jpg" alt="Parlak siyah dalgalı saç tasarımı" loading="lazy" />
          <figcaption>Saç tasarımı</figcaption>
        </figure>
        <figure className="shot shot-floor reveal">
          <img src="/assets/barber-floor.jpg" alt="Salon B ve Ş erkek bakım koltukları" loading="lazy" />
          <figcaption>Erkek bakım alanı</figcaption>
        </figure>
        <figure className="shot shot-nails reveal">
          <img src="/assets/nail-detail.jpg" alt="Salon B ve Ş tırnak uygulaması" loading="lazy" />
          <figcaption>Detay bakımı</figcaption>
        </figure>
      </section>

      <section className="proof reveal">
        <div>
          <p className="section-index">02 / GÜVEN SİNYALİ</p>
          <h2>Beş yıldızlık<br />bir izlenim.</h2>
        </div>
        <div className="proof-score">
          <strong>5.0</strong>
          <div>
            <span>★★★★★</span>
            <p>Google Maps üzerinde 215 değerlendirme.</p>
          </div>
        </div>
      </section>

      <section className="visit" id="iletisim">
        <img src="/assets/exterior.jpg" alt="Salon B ve Ş dış cephe ve giriş tabelası" loading="lazy" />
        <div className="visit-panel reveal">
          <p className="kicker">Bizi ziyaret edin</p>
          <h2>Yakuplu’da<br />hazırız.</h2>
          <address>SALON B&Ş, Yakuplu<br />200. Sk. No:12/C<br />34524 Beylikdüzü / İstanbul</address>
          <dl>
            <div><dt>Pzt – Cmt</dt><dd>08.30 – 22.00</dd></div>
            <div><dt>Pazar</dt><dd>11.00 – 22.00</dd></div>
          </dl>
          <div className="visit-actions">
            <a className="primary" href={MAPS} target="_blank" rel="noreferrer">Yol tarifi <Arrow /></a>
            <a className="icon-link" href="https://www.instagram.com/salonbs34/" target="_blank" rel="noreferrer" aria-label="Salon B ve Ş Instagram"><Instagram /></a>
          </div>
        </div>
      </section>

      <footer>
        <a className="footer-brand" href="#top">SALON <b>B&Ş</b></a>
        <p>Bay & Bayan Kuaförü · Beylikdüzü</p>
        <a href={PHONE}>0530 392 52 13</a>
      </footer>

      <a className="buy-pill" href={BUY} target="_blank" rel="noreferrer">
        <span>Bu siteyi beğendiyseniz</span>
        <strong>Şimdi satın alın</strong>
        <Arrow />
      </a>
      <a className="floating-call" href={PHONE} aria-label="Salon B ve Ş ara">Ara <Arrow /></a>
    </main>
  );
}

export default App;
