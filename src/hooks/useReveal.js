import { useCallback } from "react";

export default function useReveal(options = {}) {
  return useCallback(
    (element) => {
      if (!element) return;

      if (options.immediate || typeof IntersectionObserver === "undefined") {
        element.classList.add("reveal-visible");
        return;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            element.classList.add("reveal-visible");
            observer.unobserve(element);
          }
        },
        {
          threshold: options.threshold ?? 0.15,
          rootMargin: options.rootMargin ?? "0px 0px -10% 0px",
        }
      );

      observer.observe(element);
    },
    [options.immediate, options.threshold, options.rootMargin]
  );
}