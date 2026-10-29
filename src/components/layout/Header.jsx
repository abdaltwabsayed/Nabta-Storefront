
export default function Header() {
    
    const cartCount = Object.values(cart).reduce(
    (sum, item) => sum + item.quantity,
    0,
    );
    return (
        <header className="site-header">
        <a className="brand" href="#top" aria-label="Nabta home">
          <span className="brand-mark">
            <Icon name="leaf" size={20} />
          </span>
          <span>
            nabta<span className="brand-period">.</span>
          </span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#shop">{t.navShop}</a>
          <a href="#care">{t.navCare}</a>
          <a href="#story">{t.navStory}</a>
        </nav>
        <div className="header-actions">
          <button
            type="button"
            className="language-toggle"
            onClick={() => setLang(isArabic ? "en" : "ar")}
          >
            {t.language}
          </button>
          <button
            type="button"
            className="bag-button"
            onClick={() => setBagOpen(true)}
            aria-label={`${t.bagTitle}, ${cartCount} items`}
          >
            <Icon name="bag" size={20} />
            <span className="bag-label">{isArabic ? "السلة" : "Bag"}</span>
            <span className="bag-count">{cartCount}</span>
          </button>
        </div>
      </header>
    )
}