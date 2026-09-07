"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const styleId = "scroll-reveal-styles";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.textContent = `
        .reveal {
          opacity: 0;
          transform: translateY(32px);
          transition:
            opacity 1.2s cubic-bezier(0.22, 1, 0.36, 1),
            transform 1.4s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: opacity, transform;
        }
        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `;
      document.head.appendChild(style);
    }

    // Disconnect previous observer first
    const prev = (window as any).__scrollRevealObserver;
    if (prev) prev.disconnect();

    // Wait for new page DOM to render
    const timeout = setTimeout(() => {
      // Remove stale classes from previous page
      document.querySelectorAll(".reveal, .visible").forEach((el) => {
        el.classList.remove("reveal", "visible");
      });

      const elements = document.querySelectorAll<Element>(
        "section, h1, h2, h3, p, img, a:not(.fixed), button, li, [data-reveal]"
      );

      elements.forEach((el) => el.classList.add("reveal"));

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                entry.target.classList.add("visible");
              }, Math.random() * 80);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
      );

      elements.forEach((el) => observer.observe(el));
      (window as any).__scrollRevealObserver = observer;
    }, 120);

    return () => {
      clearTimeout(timeout);
      (window as any).__scrollRevealObserver?.disconnect();
    };
  }, [pathname]);

  return null;
}