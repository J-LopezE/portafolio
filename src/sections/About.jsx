/**
 * @fileoverview About section component
 * @description Presents personal bio, stats and tech stack.
 * Two-column grid layout — stacks to single column on mobile.
 * @module sections/About
 */

import { useThemeContext } from "../store/ThemeContext";

/**
 * Tech stack chips data
 * @type {string[]}
 */
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

/**
 * Personal stats data
 * @type {Array<{number: string, label: string}>}
 */
const STATS = [
  { number: "2+", label: "Years building" },
  { number: "5+", label: "Projects live" },
  { number: "∞", label: "Coffee consumed" },
];

/**
 * About component
 * @returns {JSX.Element}
 */
const About = () => {
  const { isDark } = useThemeContext();

  return (
    <section className="about section-wrap" id="about">
      {/* Section header */}
      <div className="section-header reveal">
        <span className="section-label">About me</span>
        <h2 className="section-title">
          Passionate about <span className="gradient-text">crafting</span>
          <br />
          great software
        </h2>
      </div>

      {/* Two column grid */}
      <div className="about__grid reveal">
        {/* Left — Bio + Stats */}
        <div className="about__bio">
          <p className="about__text">
            I'm a <strong>Full Stack Developer</strong> focused on building
            clean, scalable, production-ready applications with a sharp eye for
            UX and performance.
          </p>
          <p className="about__text">
            Currently building <strong>CE Energy</strong> — a real-time energy
            monitoring SaaS — and <strong>Gym Manager</strong>, donated to a
            real gym, both integrating AI agents via Claude API.
          </p>
          <p className="about__text">Always learning. Always shipping.</p>

          {/* Stats */}
          <div className="about__stats">
            {STATS.map((stat) => (
              <div key={stat.label} className="about__stat">
                <span className="about__stat-number">{stat.number}</span>
                <span className="about__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Tech Stack */}
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
