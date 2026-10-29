import React, { useContext } from "react";
import { AppContext } from "../../App";

export default function NewSletterSection() {
    const {newsletterMessage, setNewsletterMessage} = useContext(AppContext);
  return (
    <section className="newsletter-section" id="newsletter">
      <div className="newsletter-inner">
        <p className="eyebrow">
          <span className="eyebrow-line" />
          {t.newsletterEyebrow}
        </p>
        <h2>{t.newsletterTitle}</h2>
        <p>{t.newsletterDesc}</p>
        <form
          className="newsletter-form"
          onSubmit={submitNewsletter}
          noValidate
        >
          <label className="visually-hidden" htmlFor="newsletter-email">
            {t.emailPlaceholder}
          </label>
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setNewsletterMessage("");
            }}
            placeholder={t.emailPlaceholder}
          />
          <button className="button button-dark" type="submit">
            {t.subscribe}
            <Icon name="arrow" size={17} />
          </button>
        </form>
        {newsletterMessage && (
          <p
            className={`newsletter-feedback ${newsletterMessage === t.emailInvalid ? "error" : ""}`}
            role="status"
          >
            {newsletterMessage}
          </p>
        )}
      </div>
      <span className="newsletter-leaf leaf-left" aria-hidden="true">
        ✳
      </span>
      <span className="newsletter-leaf leaf-right" aria-hidden="true">
        ❋
      </span>
    </section>
  );
}
