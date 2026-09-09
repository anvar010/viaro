"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Scroll-reveal animation, applied without fighting hydration.
 *
 * The previous version ran its `querySelectorAll` pass on a 120 ms timer and added a
 * `.reveal` class to nearly every element on the page. With streamed RSC content that
 * timer regularly fired while React was still hydrating, so React found DOM nodes
 * carrying classes its own render did not produce — a hydration mismatch logged on every
 * fresh page load, on every page. It also injected its stylesheet with
 * `document.createElement("style")` at runtime, which is more markup React does not know
 * about.
 *
 * Two changes fix it:
 *   - the CSS lives in globals.css, so no style element is created at runtime;
 *   - the DOM pass is deferred past hydration with `requestAnimationFrame` (double-RAF,
 *     which lands after React has committed) instead of a guessed timeout.
 *
 * `prefers-reduced-motion` is honoured by skipping the effect entirely — the content is
 * then simply visible, which is the correct reduced-motion behaviour.
 */

declare global {
  interface Window {
    __scrollRevealObserver?: IntersectionObserver;
  }
}

const REVEAL_SELECTOR =
  "section, h1, h2, h3, p, img, a:not(.fixed), button, li, [data-reveal]";

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    window.__scrollRevealObserver?.disconnect();

    let frame = 0;
    let observer: IntersectionObserver | undefined;

    // Double-RAF: the second callback runs after React has committed this render, so
    // adding classes here can no longer race hydration.
    frame = requestAnimationFrame(() => {
      frame = requestAnimationFrame(() => {
        document.querySelectorAll(".reveal, .visible").forEach((el) => {
          el.classList.remove("reveal", "visible");
        });

        const elements = Array.from(
          document.querySelectorAll<Element>(REVEAL_SELECTOR),
        );
        elements.forEach((el) => el.classList.add("reveal"));

        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              entry.target.classList.add("visible");
              observer?.unobserve(entry.target);
            });
          },
          { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
        );

        elements.forEach((el) => observer?.observe(el));
        window.__scrollRevealObserver = observer;
      });
    });

    return () => {
      cancelAnimationFrame(frame);
      observer?.disconnect();
      window.__scrollRevealObserver = undefined;
    };
  }, [pathname]);

  return null;
}
