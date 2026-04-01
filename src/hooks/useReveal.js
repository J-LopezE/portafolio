/**
 * @fileoverview Scroll reveal hook
 * @description Uses IntersectionObserver to add 'visible' class
 * to elements with 'reveal' class when they enter the viewport.
 * @module hooks/useReveal
 */

import { useEffect } from "react";

/**
 * Activates scroll reveal animations on elements with class 'reveal'
 * @returns {void}
 */
const useReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll(".reveal").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
};

export default useReveal;
