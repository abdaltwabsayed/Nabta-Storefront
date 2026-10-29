import { useContext } from "react";
import { AppContext } from "../../App";
import Icon from "../Icon";

export default function BagDrawer({ cart, onClose }) {
  const {t, lang, setCart} = useContext(AppContext);
  const isArabic = lang === "ar";
  const items = Object.values(cart);
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const changeQuantity = (id, delta) => {
    setCart((current) => {
      const next = { ...current };
      if (!next[id]) return current;
      const quantity = next[id].quantity + delta;
      if (quantity <= 0) delete next[id];
      else next[id] = { ...next[id], quantity };
      return next;
    });
  };
  return (
    <div
      className="drawer-overlay"
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <aside
        className="bag-drawer"
        role="dialog"
        aria-modal="true"
        aria-label={t.bagTitle}
      >
        <div className="drawer-head">
          <div>
            <span className="eyebrow">NABTA / YOUR ORDER</span>
            <h2>{t.bagTitle}</h2>
          </div>
          <button
            type="button"
            className="icon-button"
            onClick={onClose}
            aria-label={t.close}
          >
            <Icon name="close" size={22} />
          </button>
        </div>
        {items.length === 0 ? (
          <div className="empty-bag">
            <span className="empty-leaf">
              <Icon name="leaf" size={28} />
            </span>
            <p>{t.emptyBag}</p>
            <button
              className="button button-dark"
              type="button"
              onClick={onClose}
            >
              {t.emptyCta}
              <Icon name="arrow" size={17} />
            </button>
          </div>
        ) : (
          <>
            <div className="bag-items">
              {items.map((item) => (
                <div className="bag-item" key={item.id}>
                  <img src={item.image} alt={item.alt} />
                  <div className="bag-item-info">
                    <h3>{isArabic ? item.arName : item.name}</h3>
                    <p>${item.price}</p>
                    <div className="quantity-control">
                      <button
                        type="button"
                        onClick={() => changeQuantity(item.id, -1)}
                        aria-label="Decrease quantity"
                      >
                        <Icon name="minus" size={13} />
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => changeQuantity(item.id, 1)}
                        aria-label="Increase quantity"
                      >
                        <Icon name="plus" size={13} />
                      </button>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="remove-item"
                    onClick={() =>
                      setCart((current) => {
                        const next = { ...current };
                        delete next[item.id];
                        return next;
                      })
                    }
                  >
                    {t.remove}
                  </button>
                </div>
              ))}
            </div>
            <div className="drawer-bottom">
              <div className="subtotal-line">
                <span>{t.subtotal}</span>
                <strong>${subtotal.toFixed(2)}</strong>
              </div>
              <p>{t.shippingNote}</p>
              <button
                type="button"
                className="button button-dark checkout-button"
                onClick={() =>
                  window.alert(
                    lang === "ar"
                      ? "هذه نسخة تجريبية من الواجهة؛ لم يتم ربط الدفع."
                      : "This is a portfolio demo; checkout is not connected yet.",
                  )
                }
              >
                {t.checkout}
                <Icon name="arrow" size={17} />
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}