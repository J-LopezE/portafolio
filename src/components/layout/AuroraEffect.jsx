/**
 * @fileoverview Aurora sweep effect component
 * @description Triggers a diagonal light sweep animation when sections
 * enter the viewport. Uses IntersectionObserver for performance.
 * @module components/layout/AuroraEffect
 */

import { useEffect, useRef } from "react";

/**
 * Sections to observe for aurora trigger
 * @type {string[]}
 */
const SECTION_IDS = ["about", "projects", "ai", "github", "contact"];

/**
 * AuroraEffect component
 * @returns {JSX.Element}
 */
const AuroraEffect = () => {
  const flashRef = useRef(null);
  const lastSection = useRef("");

  useEffect(() => {
    /**
     * Fires the aurora flash animation
     * @param {string} sectionId
     */
    const fireAurora = (sectionId) => {
      if (sectionId === lastSection.current) return;
      lastSection.current = sectionId;

      const el = flashRef.current;
      if (!el) return;

      el.classList.remove("aurora--active");
      void el.offsetWidth;
      el.classList.add("aurora--active");
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            fireAurora(entry.target.id);
          }
        });
      },
      { threshold: 0.15 },
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return <div className="aurora" ref={flashRef} />;
};

export default AuroraEffect;
