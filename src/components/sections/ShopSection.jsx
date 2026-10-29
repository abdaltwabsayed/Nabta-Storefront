import { useContext, useMemo, useState } from "react";
import { products } from "../../data/products";
import Icon from "../icon";
import ProductCard from "../product/ProductCard";
import { AppContext } from "../../App";

const categoryOrder = ["all", "easy", "low", "pet"];

export default function ShopSection() {
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("featured");
  const [favorites, setFavorites] = useState([]);
  const { t, lang } = useContext(AppContext);

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

  return (
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
  );
}
