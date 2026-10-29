import Icon from "../Icon";

export default function ProductCard({ product, lang, t, onAdd, isFavorite, onFavorite }) {
  const isArabic = lang === "ar";
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img
          className="product-image"
          src={product.image}
          alt={product.alt}
          loading="lazy"
        />
        {product.tag && (
          <span className={`product-tag tag-${product.tagType}`}>
            {isArabic ? product.arTag : product.tag}
          </span>
        )}
        <button
          className={`favorite-button ${isFavorite ? "is-favorite" : ""}`}
          type="button"
          onClick={() => onFavorite(product.id)}
          aria-label={isFavorite ? "Remove from wishlist" : "Add to wishlist"}
          aria-pressed={isFavorite}
        >
          <Icon
            name="heart"
            size={19}
            fill={isFavorite ? "currentColor" : "none"}
          />
        </button>
        <button
          className="quick-add"
          type="button"
          onClick={() => onAdd(product)}
        >
          <Icon name="plus" size={16} /> <span>{t.add}</span>
        </button>
      </div>
      <div className="product-details">
        <div className="product-name-price">
          <h3>{isArabic ? product.arName : product.name}</h3>
          <span className="product-price">${product.price}</span>
        </div>
        <div className="product-meta">
          <span>{isArabic ? product.arSize : product.size}</span>
          {product.oldPrice && (
            <span className="old-price">${product.oldPrice}</span>
          )}
        </div>
      </div>
    </article>
  );
}