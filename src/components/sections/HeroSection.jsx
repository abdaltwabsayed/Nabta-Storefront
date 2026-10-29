import heroPlantsImage from "./assets/hero-plants.jpg";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <p className="eyebrow">
          <span className="eyebrow-line" />
          {t.eyebrow}
        </p>
        <h1>
          {t.titleA}
          <br />
          <em>{t.titleB}</em>
        </h1>
        <p className="hero-description">{t.heroDesc}</p>
        <div className="hero-actions">
          <a className="button button-dark" href="#shop">
            {t.shopNow}
            <Icon name="arrow" size={17} />
          </a>
          <a className="text-link" href="#care">
            {t.explore}
          </a>
        </div>
        <div className="hero-proof">
          <div className="avatar-stack">
            <span className="mini-avatar avatar-1">✿</span>
            <span className="mini-avatar avatar-2">✦</span>
            <span className="mini-avatar avatar-3">❋</span>
          </div>
          <div>
            <div className="proof-stars">★★★★★</div>
            <p>{t.heroNote}</p>
          </div>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-image-frame">
          <img
            src={heroPlantsImage}
            alt="Sunlit indoor plants and vibrant green foliage"
            fetchPriority="high"
          />
        </div>
        <div className="hero-sticker">
          <span className="sticker-star">✳</span>
          <span>{t.heroBadge}</span>
        </div>
        <div className="image-caption">
          <span className="caption-dot" /> 01 / BRING THE OUTSIDE IN
        </div>
        <div className="hero-scribble" aria-hidden="true">
          growing
          <br />
          together
        </div>
      </div>
      <span className="hero-side-note" aria-hidden="true">
        PLANTS WITH PERSONALITY — SINCE 2024
      </span>
    </section>
  );
}
