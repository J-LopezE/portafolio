/**
 * @fileoverview About section component
 * @module sections/About
 */

import { useTranslation } from "react-i18next";

const TECH_STACK = [
  "React.js",
  "Node.js",
  "Vite",
  "TypeScript",
  "Tailwind",
  "PostgreSQL",
  "Prisma",
  "Express",
  "Claude API",
  "Git/GitHub",
  "Vercel",
  "Docker",
];

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="about section-wrap" id="about">
      <div className="section-header reveal">
        <span className="section-label">{t("about.label")}</span>
        <h2 className="section-title">
          {t("about.title")}{" "}
          <span className="gradient-text">{t("about.titleHighlight")}</span>
          <br />
          {t("about.titleEnd")}
        </h2>
      </div>

      <div className="about__grid reveal">
        <div className="about__bio">
          <p className="about__text">{t("about.bio1")}</p>
          <p className="about__text">{t("about.bio2")}</p>
          <p className="about__text">{t("about.bio3")}</p>
          <div className="about__stats">
            <div className="about__stat">
              <span className="about__stat-number">
                {t("about.stat1.number")}
              </span>
              <span className="about__stat-label">
                {t("about.stat1.label")}
              </span>
            </div>
            <div className="about__stat">
              <span className="about__stat-number">
                {t("about.stat2.number")}
              </span>
              <span className="about__stat-label">
                {t("about.stat2.label")}
              </span>
            </div>
            <div className="about__stat">
              <span className="about__stat-number">
                {t("about.stat3.number")}
              </span>
              <span className="about__stat-label">
                {t("about.stat3.label")}
              </span>
            </div>
          </div>
        </div>

        <div className="about__stack">
          {TECH_STACK.map((tech) => (
            <span key={tech} className="tech-chip">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
