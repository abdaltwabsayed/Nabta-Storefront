import { createContext, useEffect, useMemo, useState } from "react";
import Header from "components/layout/Header"
import plantCareImage from "./assets/plant-care.jpg";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import BagDrawer from "./components/cart/BagDrawer";
import Icon from "./components/icon";
import { products } from './data/products';
import NewSletterSection from "./components/sections/NewSletterSection";



const copy = {
  en: {
    announcement: "A little green goes a long way. Free delivery over $60.",
    navShop: "Shop plants",
    navCare: "Plant care",
    navStory: "Our story",
    language: "عربي",
    eyebrow: "THE LITTLE GREEN THINGS",
    titleA: "Make room for",
    titleB: "a little green.",
    heroDesc:
      "Thoughtfully chosen plants to bring calm, color, and a little more life into your everyday.",
    shopNow: "Shop the collection",
    explore: "Find your plant",
    heroNote: "Good things grow here",
    heroBadge: "GROWN WITH CARE",
    benefit1: "Plants that feel like home",
    benefit2: "Packed with care, always",
    benefit3: "Here when you need us",
    collectionEyebrow: "THE GREEN COLLECTION",
    collectionTitle: "Find your new favorite.",
    collectionDesc: "A few good leaves can change the whole feeling of a room.",
    searchPlaceholder: "Search plants…",
    all: "All plants",
    easy: "Easy care",
    low: "Low light",
    pet: "Pet friendly",
    sort: "Sort by",
    featured: "Featured",
    priceLow: "Price: low to high",
    priceHigh: "Price: high to low",
    add: "Add to bag",
    added: "Added to bag",
    sold: "A little green for every corner",
    catalogCount: "plants to fall for",
    careEyebrow: "NEW TO PLANTS?",
    careTitle: "You bring the space. We’ll help with the green.",
    careDesc:
      "Every plant comes with simple care tips and a little support from our plant people. No green thumb required.",
    careCta: "Explore plant care",
    newsletterEyebrow: "NOTES FROM THE GREEN SIDE",
    newsletterTitle: "A little plant joy, in your inbox.",
    newsletterDesc:
      "Care tips, new arrivals, and thoughtful things for your space.",
    emailPlaceholder: "Your email address",
    subscribe: "Count me in",
    subscribed: "You’re on the list — thank you!",
    emailInvalid: "Please enter a valid email address.",
    footerLine: "Thoughtfully grown. Happily rooted.",
    footerShop: "Shop",
    footerSupport: "Support",
    footerFollow: "Say hello",
    returns: "Shipping & returns",
    contact: "Contact us",
    bagTitle: "Your bag",
    emptyBag: "Your bag is ready for a little green.",
    emptyCta: "Browse plants",
    subtotal: "Subtotal",
    shippingNote: "Shipping and taxes calculated at checkout.",
    checkout: "Continue to checkout",
    remove: "Remove",
    close: "Close bag",
    quantity: "Quantity",
    emptyResults: "No plants found",
    emptyHelp: "Try a different search or category.",
  },
  ar: {
    announcement:
      "القليل من الخضرة يصنع فرقًا كبيرًا. توصيل مجاني للطلبات فوق ٦٠ دولارًا.",
    navShop: "تسوّق النباتات",
    navCare: "العناية بالنباتات",
    navStory: "قصتنا",
    language: "English",
    eyebrow: "تفاصيل خضراء صغيرة",
    titleA: "اترك مساحة",
    titleB: "لقليل من الخضرة.",
    heroDesc: "نباتات مختارة بعناية لتضيف الهدوء واللون والحياة إلى يومك.",
    shopNow: "تسوّق المجموعة",
    explore: "اعثر على نبتتك",
    heroNote: "أشياء جميلة تنمو هنا",
    heroBadge: "نمت بكل عناية",
    benefit1: "نباتات تشبه دفء المنزل",
    benefit2: "تغليف بعناية دائمًا",
    benefit3: "نحن هنا لمساعدتك",
    collectionEyebrow: "المجموعة الخضراء",
    collectionTitle: "اعثر على نبتتك المفضلة.",
    collectionDesc: "بعض الأوراق الجميلة قادرة على تغيير أجواء الغرفة بالكامل.",
    searchPlaceholder: "ابحث عن نبات…",
    all: "كل النباتات",
    easy: "سهلة العناية",
    low: "إضاءة منخفضة",
    pet: "آمنة للحيوانات",
    sort: "ترتيب حسب",
    featured: "الأبرز",
    priceLow: "السعر: من الأقل للأعلى",
    priceHigh: "السعر: من الأعلى للأقل",
    add: "أضف إلى السلة",
    added: "تمت الإضافة",
    sold: "نبتة جميلة لكل زاوية",
    catalogCount: "نباتات تستحق الحب",
    careEyebrow: "جديد في عالم النباتات؟",
    careTitle: "أنت توفر المساحة، ونحن نساعدك في اختيار الخضرة.",
    careDesc:
      "كل نبتة تأتي مع إرشادات بسيطة للعناية ومساعدة من فريقنا. لست بحاجة إلى خبرة سابقة.",
    careCta: "اكتشف نصائح العناية",
    newsletterEyebrow: "رسائل من الجانب الأخضر",
    newsletterTitle: "قليل من بهجة النباتات في بريدك.",
    newsletterDesc: "نصائح للعناية، ونباتات جديدة، وأفكار جميلة لمساحتك.",
    emailPlaceholder: "بريدك الإلكتروني",
    subscribe: "سجّلني",
    subscribed: "تم تسجيلك في القائمة، شكرًا لك!",
    emailInvalid: "أدخل بريدًا إلكترونيًا صحيحًا.",
    footerLine: "نباتات مختارة بعناية، وبيوت مليئة بالحياة.",
    footerShop: "تسوّق",
    footerSupport: "المساعدة",
    footerFollow: "تواصل معنا",
    returns: "الشحن والاسترجاع",
    contact: "اتصل بنا",
    bagTitle: "سلة التسوق",
    emptyBag: "سلتك مستعدة لاستقبال بعض الخضرة.",
    emptyCta: "تصفّح النباتات",
    subtotal: "المجموع الفرعي",
    shippingNote: "يُحسب الشحن والضرائب عند إتمام الطلب.",
    checkout: "المتابعة لإتمام الطلب",
    remove: "إزالة",
    close: "إغلاق السلة",
    quantity: "الكمية",
    emptyResults: "لم نعثر على نباتات",
    emptyHelp: "جرّب بحثًا أو تصنيفًا مختلفًا.",
  },
};

const categoryOrder = ["all", "easy", "low", "pet"];

export const AppContext = createContext(null);



export default function App() {
  const [lang, setLang] = useState("en");
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("featured");
  const [cart, setCart] = useState({});
  const [favorites, setFavorites] = useState([]);
  const [bagOpen, setBagOpen] = useState(false);
  const [toast, setToast] = useState("");
  const [email, setEmail] = useState("");
  const [newsletterMessage, setNewsletterMessage] = useState("");
  const t = copy[lang];
  const isArabic = lang === "ar";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
  }, [lang, isArabic]);
  useEffect(() => {
    if (!toast) return undefined;
    const timer = window.setTimeout(() => setToast(""), 2400);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const visibleProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase();
    let result = products.filter((product) => {
      const categoryMatch =
        category === "all" ||
        product.category === category ||
        (category === "pet" && product.id === 3);
      const queryMatch =
        !normalizedQuery ||
        `${product.name} ${product.arName} ${product.category}`
          .toLocaleLowerCase()
          .includes(normalizedQuery);
      return categoryMatch && queryMatch;
    });
    if (sort === "low") result = [...result].sort((a, b) => a.price - b.price);
    if (sort === "high") result = [...result].sort((a, b) => b.price - a.price);
    return result;
  }, [category, query, sort]);

  const addToBag = (product) => {
    setCart((current) => ({
      ...current,
      [product.id]: {
        ...product,
        quantity: (current[product.id]?.quantity || 0) + 1,
      },
    }));
    setToast(`${isArabic ? product.arName : product.name} — ${t.added}`);
  };
  const toggleFavorite = (id) =>
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  const submitNewsletter = (event) => {
    event.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
      setNewsletterMessage(t.emailInvalid);
      return;
    }
    setNewsletterMessage(t.subscribed);
    setEmail("");
  };

  return (
    <AppContext.Provider value={{ lang, setLang, t, isArabic, newsletterMessage, setNewsletterMessage }}>
    <div className={`site-shell ${isArabic ? "arabic" : ""}`}>
      <div className="announcement-bar">
        <span className="announcement-dot" />
        {t.announcement}
      </div>
      <Header></Header>

      <main id="top">
        <HeroSection/>

        <section className="benefits-row" aria-label="Shopping benefits">
          <div>
            <span className="benefit-icon">
              <Icon name="leaf" size={19} />
            </span>
            <span>{t.benefit1}</span>
          </div>
          <div>
            <span className="benefit-icon">✳</span>
            <span>{t.benefit2}</span>
          </div>
          <div>
            <span className="benefit-icon">♡</span>
            <span>{t.benefit3}</span>
          </div>
        </section>

        <section className="shop-section section-wrap" id="shop">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">
                <span className="eyebrow-line" />
                {t.collectionEyebrow}
              </p>
              <h2>{t.collectionTitle}</h2>
              <p className="section-description">{t.collectionDesc}</p>
            </div>
            <p className="collection-count">
              0{visibleProducts.length} <span>/ 06</span>
            </p>
          </div>
          <div className="shop-toolbar">
            <div
              className="category-tabs"
              role="group"
              aria-label="Filter plants by category"
            >
              {categoryOrder.map((key) => (
                <button
                  type="button"
                  key={key}
                  className={`category-tab ${category === key ? "active" : ""}`}
                  onClick={() => setCategory(key)}
                >
                  {t[key]}
                </button>
              ))}
            </div>
            <div className="shop-controls">
              <label className="search-box">
                <Icon name="search" size={18} />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={t.searchPlaceholder}
                  aria-label={t.searchPlaceholder}
                />
              </label>
              <label className="sort-select">
                <span>{t.sort}</span>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  aria-label={t.sort}
                >
                  <option value="featured">{t.featured}</option>
                  <option value="low">{t.priceLow}</option>
                  <option value="high">{t.priceHigh}</option>
                </select>
                <Icon name="chevron" size={15} />
              </label>
            </div>
          </div>
          {visibleProducts.length ? (
            <div className="product-grid">
              {visibleProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  lang={lang}
                  t={t}
                  onAdd={addToBag}
                  isFavorite={favorites.includes(product.id)}
                  onFavorite={toggleFavorite}
                />
              ))}
            </div>
          ) : (
            <div className="empty-results">
              <Icon name="leaf" size={27} />
              <h3>{t.emptyResults}</h3>
              <p>{t.emptyHelp}</p>
              <button
                type="button"
                className="text-link"
                onClick={() => {
                  setQuery("");
                  setCategory("all");
                }}
              >
                {t.all}
              </button>
            </div>
          )}
          <div className="collection-bottom">
            <span className="collection-bottom-line" /> <span>{t.sold}</span>{" "}
            <span className="collection-bottom-line" />
          </div>
        </section>

        <section className="care-banner section-wrap" id="care">
          <div className="care-image">
            <img
              src={plantCareImage}
              alt="A thriving potted plant in a bright home"
              loading="lazy"
            />
            <span className="care-image-label">
              <Icon name="leaf" size={17} /> A NOTE FROM OUR PLANT PEOPLE
            </span>
          </div>
          <div className="care-content">
            <p className="eyebrow">
              <span className="eyebrow-line" />
              {t.careEyebrow}
            </p>
            <h2>{t.careTitle}</h2>
            <p>{t.careDesc}</p>
            <a className="button button-outline" href="#newsletter">
              {t.careCta}
              <Icon name="arrow" size={17} />
            </a>
            <span className="care-decoration" aria-hidden="true">
              stay
              <br />
              rooted.
            </span>
          </div>
        </section>

        <NewSletterSection/>
      </main>

      <Footer></Footer>

      {toast && (
        <div className="toast" role="status">
          <span className="toast-check">
            <Icon name="check" size={16} />
          </span>
          {toast}
          <button type="button" onClick={() => setBagOpen(true)}>
            {isArabic ? "عرض" : "View bag"}
          </button>
        </div>
      )}
      {bagOpen && (
        <BagDrawer
          lang={lang}
          t={t}
          cart={cart}
          setCart={setCart}
          onClose={() => setBagOpen(false)}
        />
      )}
    </div>
    </AppContext.Provider>
  );
}
