import {useThemeContext} from "../store/ThemeContext";

const Hero = () => {
  const {isDark} = useThemeContext();

  return (
     <section className="hero" id="hero">
      <div className="hero__badge">
        <span className="hero__badge-dot"></span>
        Open to work · Full Stack + AI
      </div>
      <h1 className="hero__title">
        <span className="hero__name">Jorge Israel López</span>
        <span className="hero__role">Full Stack Developer</span>
      </h1>
      <p className="hero__sub">
        Building <em>scalable web applications</em> and integrating{' '}
        <em>AI agents</em> into real-world products.
        React · Node.js · Claude API
      </p>
      <div className="hero__btns">
        <button className="btn-primary" onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}>
          View My Work
        </button>
        <button className="btn-outline" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>
          Get in Touch
        </button>
      </div>
      <div className="hero__scroll">
        <div className="hero__scroll-line"></div>
        <span className="hero__scroll-label">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;