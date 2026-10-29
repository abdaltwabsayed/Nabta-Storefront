import Icon from "../icon";

export default function BenefitsRow({ t }) {
  return (
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
  );
}
