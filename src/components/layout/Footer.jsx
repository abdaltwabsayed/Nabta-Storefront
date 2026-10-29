import Icon from "../icon";


export default function Footer({ t }) {
  return (
    <footer className="site-footer" id="story">
        <div className="footer-top">
          <div className="footer-brand">
            <a className="brand" href="#top">
              <span className="brand-mark">
                <Icon name="leaf" size={20} />
              </span>
              <span>
                nabta<span className="brand-period">.</span>
              </span>
            </a>
            <p>{t.footerLine}</p>
          </div>
          <div className="footer-column">
            <h3>{t.footerShop}</h3>
            <a href="#shop">{t.navShop}</a>
            <a href="#care">{t.navCare}</a>
          </div>
          <div className="footer-column">
            <h3>{t.footerSupport}</h3>
            <a href="#story">{t.returns}</a>
            <a href="mailto:hello@nabta.example">{t.contact}</a>
          </div>
          <div className="footer-column">
            <h3>{t.footerFollow}</h3>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram ↗
            </a>
            <a
              href="https://www.pinterest.com/"
              target="_blank"
              rel="noreferrer"
            >
              Pinterest ↗
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 NABTA STUDIO</span>
          <span>
            MADE FOR SLOWER, GREENER DAYS{" "}
            <span className="footer-heart">♥</span>
          </span>
          <a href="#top">BACK TO TOP ↑</a>
        </div>
      </footer>
  )
}
