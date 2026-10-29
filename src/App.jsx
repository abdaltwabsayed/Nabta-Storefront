import { createContext, useEffect, useMemo, useState } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import BagDrawer from "./components/cart/BagDrawer";
import Icon from "./components/icon";
import { copy } from "./data/copy";
import NewSletterSection from "./components/sections/NewSletterSection";
import BenefitsRow from "./components/sections/BenefitsRow";
import ShopSection from "./components/sections/ShopSection";
import CareBanner from "./components/sections/CareBanner";


export const AppContext = createContext(null);

export default function App() {
  const [lang, setLang] = useState("en");
  const [cart, setCart] = useState({});
  const [bagOpen, setBagOpen] = useState(false);
  const [toast, setToast] = useState("");
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

  return (
    <AppContext.Provider value={{ lang, setLang, t, isArabic }}>
      <div className={`site-shell ${isArabic ? "arabic" : ""}`}>
        <div className="announcement-bar">
          <span className="announcement-dot" />
          {t.announcement}
        </div>
        <Header
          setBagOpen={setBagOpen}
          cart={cart}
        />

        <main id="top">
          <HeroSection />

          <BenefitsRow />

          <ShopSection />

          <CareBanner />

          <NewSletterSection />
        </main>

        <Footer />

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
