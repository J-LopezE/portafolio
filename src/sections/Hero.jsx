/**
 * @fileoverview Hero section component
 * @module sections/Hero
 */

import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero" id="hero">
      <div className="hero__badge">
        <span className="hero__badge-dot"></span>
        {t("hero.badge")}
      </div>
      <h1 className="hero__title">
        <span className="hero__name">{t("hero.name")}</span>
        <span className="hero__role">{t("hero.role")}</span>
      </h1>
      <p className="hero__sub">
        {t("hero.sub")}
        <br />
        <em>{t("hero.stack")}</em>
      </p>
      <div className="hero__btns">
        <button
          className="btn-primary"
          onClick={() =>
            document
              .querySelector("#projects")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          {t("hero.cta1")}
        </button>
        <button
          className="btn-outline"
          onClick={() =>
            document
              .querySelector("#contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          {t("hero.cta2")}
        </button>
      </div>
      <div className="hero__scroll">
        <div className="hero__scroll-line"></div>
        <span className="hero__scroll-label">{t("hero.scroll")}</span>
      </div>
    </section>
  );
};

export default Hero;
