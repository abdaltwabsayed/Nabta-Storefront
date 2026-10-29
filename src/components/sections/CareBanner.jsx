import Icon from "../Icon";
import plantCareImage from "../../assets/plant-care.jpg";
import { useContext } from "react";
import { AppContext } from "../../App";

export default function CareBanner() {
    const { t } = useContext(AppContext);
  return (
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
  );
}
