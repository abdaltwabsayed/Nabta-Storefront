import { useEffect, useMemo, useState } from 'react';
import monsteraImage from './assets/monstera.jpg';
import snakePlantImage from './assets/snake-plant.jpg';
import oliveTreeImage from './assets/olive-tree.jpg';
import pileaImage from './assets/pilea.jpg';
import zzPlantImage from './assets/zz-plant.jpg';
import birdOfParadiseImage from './assets/bird-of-paradise.jpg';
import heroPlantsImage from './assets/hero-plants.jpg';
import plantCareImage from './assets/plant-care.jpg';

const iconPaths = {
  search: <><circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 4 4"/></>,
  bag: <><path d="M5 8h14l1 12H4L5 8Z"/><path d="M8 8V6a4 4 0 0 1 8 0v2"/></>,
  heart: <path d="M20.8 8.7c0 5-8.8 10.2-8.8 10.2S3.2 13.7 3.2 8.7A4.7 4.7 0 0 1 12 6a4.7 4.7 0 0 1 8.8 2.7Z"/>,
  arrow: <><path d="M4 12h15"/><path d="m13 5 7 7-7 7"/></>,
  chevron: <path d="m7 10 5 5 5-5"/>,
  plus: <><path d="M12 5v14"/><path d="M5 12h14"/></>,
  minus: <path d="M5 12h14"/>,
  close: <><path d="m6 6 12 12"/><path d="M18 6 6 18"/></>,
  leaf: <><path d="M20.5 3.5C11 3 5 7 5 13c0 3 2 5 5 5 6 0 10-6 10.5-14.5Z"/><path d="M3 21c3-6 7-9 13-12"/></>,
  check: <path d="m5 12 4 4L19 6"/>
};

function Icon({ name, size = 20, fill = 'none', strokeWidth = 1.7, className = '' }) {
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{iconPaths[name]}</svg>;
}

const products = [
  {
    id: 1, name: 'Monstera Deliciosa', arName: 'مونستيرا دليسيوسا', category: 'easy', price: 38, oldPrice: 46, size: 'Medium · 35–45 cm', arSize: 'متوسطة · ٣٥–٤٥ سم', tag: 'BESTSELLER', arTag: 'الأكثر مبيعًا', tagType: 'sage',
    image: monsteraImage, alt: 'Lush green monstera leaves in a pot',
  },
  {
    id: 2, name: 'Snake Plant', arName: 'نبات جلد النمر', category: 'low', price: 26, oldPrice: null, size: 'Small · 25–35 cm', arSize: 'صغيرة · ٢٥–٣٥ سم', tag: 'LOW MAINTENANCE', arTag: 'عناية سهلة', tagType: 'sand',
    image: snakePlantImage, alt: 'Tall snake plant in a simple planter',
  },
  {
    id: 3, name: 'Olive Tree', arName: 'شجرة الزيتون', category: 'pet', price: 54, oldPrice: null, size: 'Large · 60–80 cm', arSize: 'كبيرة · ٦٠–٨٠ سم', tag: 'PET FRIENDLY', arTag: 'مناسبة للحيوانات', tagType: 'sage',
    image: oliveTreeImage, alt: 'Small olive tree with silvery green leaves',
  },
  {
    id: 4, name: 'Pilea Peperomioides', arName: 'بيليا بيبروميويدس', category: 'easy', price: 32, oldPrice: null, size: 'Small · 20–30 cm', arSize: 'صغيرة · ٢٠–٣٠ سم', tag: 'NEW ARRIVAL', arTag: 'وصل حديثًا', tagType: 'peach',
    image: pileaImage, alt: 'Round-leaf houseplant in a terracotta pot',
  },
  {
    id: 5, name: 'ZZ Plant', arName: 'نبات الزاميا', category: 'low', price: 29, oldPrice: null, size: 'Medium · 30–40 cm', arSize: 'متوسطة · ٣٠–٤٠ سم', tag: '', arTag: '', tagType: 'sage',
    image: zzPlantImage, alt: 'Glossy green ZZ plant leaves',
  },
  {
    id: 6, name: 'Bird of Paradise', arName: 'عصفور الجنة', category: 'statement', price: 68, oldPrice: null, size: 'Large · 70–90 cm', arSize: 'كبيرة · ٧٠–٩٠ سم', tag: 'STATEMENT PLANT', arTag: 'نبتة مميزة', tagType: 'sand',
    image: birdOfParadiseImage, alt: 'Large tropical bird of paradise plant',
  },
];

const copy = {
  en: {
    announcement: 'A little green goes a long way. Free delivery over $60.',
    navShop: 'Shop plants', navCare: 'Plant care', navStory: 'Our story', language: 'عربي',
    eyebrow: 'THE LITTLE GREEN THINGS', titleA: 'Make room for', titleB: 'a little green.', heroDesc: 'Thoughtfully chosen plants to bring calm, color, and a little more life into your everyday.',
    shopNow: 'Shop the collection', explore: 'Find your plant', heroNote: 'Good things grow here', heroBadge: 'GROWN WITH CARE',
    benefit1: 'Plants that feel like home', benefit2: 'Packed with care, always', benefit3: 'Here when you need us',
    collectionEyebrow: 'THE GREEN COLLECTION', collectionTitle: 'Find your new favorite.', collectionDesc: 'A few good leaves can change the whole feeling of a room.',
    searchPlaceholder: 'Search plants…', all: 'All plants', easy: 'Easy care', low: 'Low light', pet: 'Pet friendly', sort: 'Sort by', featured: 'Featured', priceLow: 'Price: low to high', priceHigh: 'Price: high to low',
    add: 'Add to bag', added: 'Added to bag', sold: 'A little green for every corner', catalogCount: 'plants to fall for',
    careEyebrow: 'NEW TO PLANTS?', careTitle: 'You bring the space. We’ll help with the green.', careDesc: 'Every plant comes with simple care tips and a little support from our plant people. No green thumb required.', careCta: 'Explore plant care',
    newsletterEyebrow: 'NOTES FROM THE GREEN SIDE', newsletterTitle: 'A little plant joy, in your inbox.', newsletterDesc: 'Care tips, new arrivals, and thoughtful things for your space.', emailPlaceholder: 'Your email address', subscribe: 'Count me in', subscribed: 'You’re on the list — thank you!', emailInvalid: 'Please enter a valid email address.',
    footerLine: 'Thoughtfully grown. Happily rooted.', footerShop: 'Shop', footerSupport: 'Support', footerFollow: 'Say hello', returns: 'Shipping & returns', contact: 'Contact us',
    bagTitle: 'Your bag', emptyBag: 'Your bag is ready for a little green.', emptyCta: 'Browse plants', subtotal: 'Subtotal', shippingNote: 'Shipping and taxes calculated at checkout.', checkout: 'Continue to checkout', remove: 'Remove', close: 'Close bag', quantity: 'Quantity',
    emptyResults: 'No plants found', emptyHelp: 'Try a different search or category.',
  },
  ar: {
    announcement: 'القليل من الخضرة يصنع فرقًا كبيرًا. توصيل مجاني للطلبات فوق ٦٠ دولارًا.',
    navShop: 'تسوّق النباتات', navCare: 'العناية بالنباتات', navStory: 'قصتنا', language: 'English',
    eyebrow: 'تفاصيل خضراء صغيرة', titleA: 'اترك مساحة', titleB: 'لقليل من الخضرة.', heroDesc: 'نباتات مختارة بعناية لتضيف الهدوء واللون والحياة إلى يومك.',
    shopNow: 'تسوّق المجموعة', explore: 'اعثر على نبتتك', heroNote: 'أشياء جميلة تنمو هنا', heroBadge: 'نمت بكل عناية',
    benefit1: 'نباتات تشبه دفء المنزل', benefit2: 'تغليف بعناية دائمًا', benefit3: 'نحن هنا لمساعدتك',
    collectionEyebrow: 'المجموعة الخضراء', collectionTitle: 'اعثر على نبتتك المفضلة.', collectionDesc: 'بعض الأوراق الجميلة قادرة على تغيير أجواء الغرفة بالكامل.',
    searchPlaceholder: 'ابحث عن نبات…', all: 'كل النباتات', easy: 'سهلة العناية', low: 'إضاءة منخفضة', pet: 'آمنة للحيوانات', sort: 'ترتيب حسب', featured: 'الأبرز', priceLow: 'السعر: من الأقل للأعلى', priceHigh: 'السعر: من الأعلى للأقل',
    add: 'أضف إلى السلة', added: 'تمت الإضافة', sold: 'نبتة جميلة لكل زاوية', catalogCount: 'نباتات تستحق الحب',
    careEyebrow: 'جديد في عالم النباتات؟', careTitle: 'أنت توفر المساحة، ونحن نساعدك في اختيار الخضرة.', careDesc: 'كل نبتة تأتي مع إرشادات بسيطة للعناية ومساعدة من فريقنا. لست بحاجة إلى خبرة سابقة.', careCta: 'اكتشف نصائح العناية',
    newsletterEyebrow: 'رسائل من الجانب الأخضر', newsletterTitle: 'قليل من بهجة النباتات في بريدك.', newsletterDesc: 'نصائح للعناية، ونباتات جديدة، وأفكار جميلة لمساحتك.', emailPlaceholder: 'بريدك الإلكتروني', subscribe: 'سجّلني', subscribed: 'تم تسجيلك في القائمة، شكرًا لك!', emailInvalid: 'أدخل بريدًا إلكترونيًا صحيحًا.',
    footerLine: 'نباتات مختارة بعناية، وبيوت مليئة بالحياة.', footerShop: 'تسوّق', footerSupport: 'المساعدة', footerFollow: 'تواصل معنا', returns: 'الشحن والاسترجاع', contact: 'اتصل بنا',
    bagTitle: 'سلة التسوق', emptyBag: 'سلتك مستعدة لاستقبال بعض الخضرة.', emptyCta: 'تصفّح النباتات', subtotal: 'المجموع الفرعي', shippingNote: 'يُحسب الشحن والضرائب عند إتمام الطلب.', checkout: 'المتابعة لإتمام الطلب', remove: 'إزالة', close: 'إغلاق السلة', quantity: 'الكمية',
    emptyResults: 'لم نعثر على نباتات', emptyHelp: 'جرّب بحثًا أو تصنيفًا مختلفًا.',
  }
};

const categoryOrder = ['all', 'easy', 'low', 'pet'];

function ProductCard({ product, lang, t, onAdd, isFavorite, onFavorite }) {
  const isArabic = lang === 'ar';
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img className="product-image" src={product.image} alt={product.alt} loading="lazy" />
        {product.tag && <span className={`product-tag tag-${product.tagType}`}>{isArabic ? product.arTag : product.tag}</span>}
        <button className={`favorite-button ${isFavorite ? 'is-favorite' : ''}`} type="button" onClick={() => onFavorite(product.id)} aria-label={isFavorite ? 'Remove from wishlist' : 'Add to wishlist'} aria-pressed={isFavorite}>
          <Icon name="heart" size={19} fill={isFavorite ? 'currentColor' : 'none'} />
        </button>
        <button className="quick-add" type="button" onClick={() => onAdd(product)}><Icon name="plus" size={16} /> <span>{t.add}</span></button>
      </div>
      <div className="product-details">
        <div className="product-name-price">
          <h3>{isArabic ? product.arName : product.name}</h3>
          <span className="product-price">${product.price}</span>
        </div>
        <div className="product-meta"><span>{isArabic ? product.arSize : product.size}</span>{product.oldPrice && <span className="old-price">${product.oldPrice}</span>}</div>
      </div>
    </article>
  );
}

function BagDrawer({ lang, t, cart, setCart, onClose }) {
  const isArabic = lang === 'ar';
  const items = Object.values(cart);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const changeQuantity = (id, delta) => {
    setCart(current => {
      const next = { ...current };
      if (!next[id]) return current;
      const quantity = next[id].quantity + delta;
      if (quantity <= 0) delete next[id];
      else next[id] = { ...next[id], quantity };
      return next;
    });
  };
  return (
    <div className="drawer-overlay" role="presentation" onMouseDown={e => { if (e.target === e.currentTarget) onClose(); }}>
      <aside className="bag-drawer" role="dialog" aria-modal="true" aria-label={t.bagTitle}>
        <div className="drawer-head">
          <div><span className="eyebrow">NABTA / YOUR ORDER</span><h2>{t.bagTitle}</h2></div>
          <button type="button" className="icon-button" onClick={onClose} aria-label={t.close}><Icon name="close" size={22} /></button>
        </div>
        {items.length === 0 ? (
          <div className="empty-bag"><span className="empty-leaf"><Icon name="leaf" size={28} /></span><p>{t.emptyBag}</p><button className="button button-dark" type="button" onClick={onClose}>{t.emptyCta}<Icon name="arrow" size={17} /></button></div>
        ) : (
          <>
            <div className="bag-items">
              {items.map(item => <div className="bag-item" key={item.id}>
                <img src={item.image} alt={item.alt} />
                <div className="bag-item-info"><h3>{isArabic ? item.arName : item.name}</h3><p>${item.price}</p><div className="quantity-control"><button type="button" onClick={() => changeQuantity(item.id, -1)} aria-label="Decrease quantity"><Icon name="minus" size={13} /></button><span>{item.quantity}</span><button type="button" onClick={() => changeQuantity(item.id, 1)} aria-label="Increase quantity"><Icon name="plus" size={13} /></button></div></div>
                <button type="button" className="remove-item" onClick={() => setCart(current => { const next = { ...current }; delete next[item.id]; return next; })}>{t.remove}</button>
              </div>)}
            </div>
            <div className="drawer-bottom"><div className="subtotal-line"><span>{t.subtotal}</span><strong>${subtotal.toFixed(2)}</strong></div><p>{t.shippingNote}</p><button type="button" className="button button-dark checkout-button" onClick={() => window.alert(lang === 'ar' ? 'هذه نسخة تجريبية من الواجهة؛ لم يتم ربط الدفع.' : 'This is a portfolio demo; checkout is not connected yet.')}>{t.checkout}<Icon name="arrow" size={17} /></button></div>
          </>
        )}
      </aside>
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState('en');
  const [category, setCategory] = useState('all');
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('featured');
  const [cart, setCart] = useState({});
  const [favorites, setFavorites] = useState([]);
  const [bagOpen, setBagOpen] = useState(false);
  const [toast, setToast] = useState('');
  const [email, setEmail] = useState('');
  const [newsletterMessage, setNewsletterMessage] = useState('');
  const t = copy[lang];
  const isArabic = lang === 'ar';
  const cartCount = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => { document.documentElement.lang = lang; document.documentElement.dir = isArabic ? 'rtl' : 'ltr'; }, [lang, isArabic]);
  useEffect(() => {
    if (!toast) return undefined;
    const timer = window.setTimeout(() => setToast(''), 2400);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const visibleProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase();
    let result = products.filter(product => {
      const categoryMatch = category === 'all' || product.category === category || (category === 'pet' && product.id === 3);
      const queryMatch = !normalizedQuery || `${product.name} ${product.arName} ${product.category}`.toLocaleLowerCase().includes(normalizedQuery);
      return categoryMatch && queryMatch;
    });
    if (sort === 'low') result = [...result].sort((a, b) => a.price - b.price);
    if (sort === 'high') result = [...result].sort((a, b) => b.price - a.price);
    return result;
  }, [category, query, sort]);

  const addToBag = product => {
    setCart(current => ({ ...current, [product.id]: { ...product, quantity: (current[product.id]?.quantity || 0) + 1 } }));
    setToast(`${isArabic ? product.arName : product.name} — ${t.added}`);
  };
  const toggleFavorite = id => setFavorites(current => current.includes(id) ? current.filter(item => item !== id) : [...current, id]);
  const submitNewsletter = event => {
    event.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email.trim())) { setNewsletterMessage(t.emailInvalid); return; }
    setNewsletterMessage(t.subscribed);
    setEmail('');
  };

  return (
    <div className={`site-shell ${isArabic ? 'arabic' : ''}`}>
      <div className="announcement-bar"><span className="announcement-dot" />{t.announcement}</div>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Nabta home"><span className="brand-mark"><Icon name="leaf" size={20} /></span><span>nabta<span className="brand-period">.</span></span></a>
        <nav className="main-nav" aria-label="Main navigation"><a href="#shop">{t.navShop}</a><a href="#care">{t.navCare}</a><a href="#story">{t.navStory}</a></nav>
        <div className="header-actions"><button type="button" className="language-toggle" onClick={() => setLang(isArabic ? 'en' : 'ar')}>{t.language}</button><button type="button" className="bag-button" onClick={() => setBagOpen(true)} aria-label={`${t.bagTitle}, ${cartCount} items`}><Icon name="bag" size={20} /><span className="bag-label">{isArabic ? 'السلة' : 'Bag'}</span><span className="bag-count">{cartCount}</span></button></div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-content">
            <p className="eyebrow"><span className="eyebrow-line" />{t.eyebrow}</p>
            <h1>{t.titleA}<br /><em>{t.titleB}</em></h1>
            <p className="hero-description">{t.heroDesc}</p>
            <div className="hero-actions"><a className="button button-dark" href="#shop">{t.shopNow}<Icon name="arrow" size={17} /></a><a className="text-link" href="#care">{t.explore}</a></div>
            <div className="hero-proof"><div className="avatar-stack"><span className="mini-avatar avatar-1">✿</span><span className="mini-avatar avatar-2">✦</span><span className="mini-avatar avatar-3">❋</span></div><div><div className="proof-stars">★★★★★</div><p>{t.heroNote}</p></div></div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-frame"><img src={heroPlantsImage} alt="Sunlit indoor plants and vibrant green foliage" fetchPriority="high" /></div>
            <div className="hero-sticker"><span className="sticker-star">✳</span><span>{t.heroBadge}</span></div>
            <div className="image-caption"><span className="caption-dot" /> 01 / BRING THE OUTSIDE IN</div>
            <div className="hero-scribble" aria-hidden="true">growing<br />together</div>
          </div>
          <span className="hero-side-note" aria-hidden="true">PLANTS WITH PERSONALITY — SINCE 2024</span>
        </section>

        <section className="benefits-row" aria-label="Shopping benefits">
          <div><span className="benefit-icon"><Icon name="leaf" size={19} /></span><span>{t.benefit1}</span></div>
          <div><span className="benefit-icon">✳</span><span>{t.benefit2}</span></div>
          <div><span className="benefit-icon">♡</span><span>{t.benefit3}</span></div>
        </section>

        <section className="shop-section section-wrap" id="shop">
          <div className="section-heading-row"><div><p className="eyebrow"><span className="eyebrow-line" />{t.collectionEyebrow}</p><h2>{t.collectionTitle}</h2><p className="section-description">{t.collectionDesc}</p></div><p className="collection-count">0{visibleProducts.length} <span>/ 06</span></p></div>
          <div className="shop-toolbar">
            <div className="category-tabs" role="group" aria-label="Filter plants by category">{categoryOrder.map(key => <button type="button" key={key} className={`category-tab ${category === key ? 'active' : ''}`} onClick={() => setCategory(key)}>{t[key]}</button>)}</div>
            <div className="shop-controls"><label className="search-box"><Icon name="search" size={18} /><input type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder={t.searchPlaceholder} aria-label={t.searchPlaceholder} /></label><label className="sort-select"><span>{t.sort}</span><select value={sort} onChange={e => setSort(e.target.value)} aria-label={t.sort}><option value="featured">{t.featured}</option><option value="low">{t.priceLow}</option><option value="high">{t.priceHigh}</option></select><Icon name="chevron" size={15} /></label></div>
          </div>
          {visibleProducts.length ? <div className="product-grid">{visibleProducts.map(product => <ProductCard key={product.id} product={product} lang={lang} t={t} onAdd={addToBag} isFavorite={favorites.includes(product.id)} onFavorite={toggleFavorite} />)}</div> : <div className="empty-results"><Icon name="leaf" size={27} /><h3>{t.emptyResults}</h3><p>{t.emptyHelp}</p><button type="button" className="text-link" onClick={() => { setQuery(''); setCategory('all'); }}>{t.all}</button></div>}
          <div className="collection-bottom"><span className="collection-bottom-line" /> <span>{t.sold}</span> <span className="collection-bottom-line" /></div>
        </section>

        <section className="care-banner section-wrap" id="care">
          <div className="care-image"><img src={plantCareImage} alt="A thriving potted plant in a bright home" loading="lazy" /><span className="care-image-label"><Icon name="leaf" size={17} /> A NOTE FROM OUR PLANT PEOPLE</span></div>
          <div className="care-content"><p className="eyebrow"><span className="eyebrow-line" />{t.careEyebrow}</p><h2>{t.careTitle}</h2><p>{t.careDesc}</p><a className="button button-outline" href="#newsletter">{t.careCta}<Icon name="arrow" size={17} /></a><span className="care-decoration" aria-hidden="true">stay<br />rooted.</span></div>
        </section>

        <section className="newsletter-section" id="newsletter"><div className="newsletter-inner"><p className="eyebrow"><span className="eyebrow-line" />{t.newsletterEyebrow}</p><h2>{t.newsletterTitle}</h2><p>{t.newsletterDesc}</p><form className="newsletter-form" onSubmit={submitNewsletter} noValidate><label className="visually-hidden" htmlFor="newsletter-email">{t.emailPlaceholder}</label><input id="newsletter-email" type="email" value={email} onChange={e => { setEmail(e.target.value); setNewsletterMessage(''); }} placeholder={t.emailPlaceholder} /><button className="button button-dark" type="submit">{t.subscribe}<Icon name="arrow" size={17} /></button></form>{newsletterMessage && <p className={`newsletter-feedback ${newsletterMessage === t.emailInvalid ? 'error' : ''}`} role="status">{newsletterMessage}</p>}</div><span className="newsletter-leaf leaf-left" aria-hidden="true">✳</span><span className="newsletter-leaf leaf-right" aria-hidden="true">❋</span></section>
      </main>

      <footer className="site-footer" id="story"><div className="footer-top"><div className="footer-brand"><a className="brand" href="#top"><span className="brand-mark"><Icon name="leaf" size={20} /></span><span>nabta<span className="brand-period">.</span></span></a><p>{t.footerLine}</p></div><div className="footer-column"><h3>{t.footerShop}</h3><a href="#shop">{t.navShop}</a><a href="#care">{t.navCare}</a></div><div className="footer-column"><h3>{t.footerSupport}</h3><a href="#story">{t.returns}</a><a href="mailto:hello@nabta.example">{t.contact}</a></div><div className="footer-column"><h3>{t.footerFollow}</h3><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram ↗</a><a href="https://www.pinterest.com/" target="_blank" rel="noreferrer">Pinterest ↗</a></div></div><div className="footer-bottom"><span>© 2025 NABTA STUDIO</span><span>MADE FOR SLOWER, GREENER DAYS <span className="footer-heart">♥</span></span><a href="#top">BACK TO TOP ↑</a></div></footer>

      {toast && <div className="toast" role="status"><span className="toast-check"><Icon name="check" size={16} /></span>{toast}<button type="button" onClick={() => setBagOpen(true)}>{isArabic ? 'عرض' : 'View bag'}</button></div>}
      {bagOpen && <BagDrawer lang={lang} t={t} cart={cart} setCart={setCart} onClose={() => setBagOpen(false)} />}
    </div>
  );
}
