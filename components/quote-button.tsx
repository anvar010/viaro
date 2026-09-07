"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

interface QuoteButtonProps {
  label: string;
}

/**
 * Where this floating CTA does not belong.
 *
 * It is a marketing prompt aimed at visitors, and these are the signed-in areas where
 * the visitor has already converted — asking someone managing their account to "get a
 * quote" is noise. It also sits bottom-right at z-9999, which put it directly on top of
 * the rating prompt and the cancel controls, so it was covering the very things a
 * passenger had come to use.
 */
const HIDDEN_ON = [
  "/account",
  "/trips",
  "/wallet",
  "/subscription",
  "/support",
  "/notifications",
  "/favorites",
  "/book",
  "/portal",
  "/verify-phone",
];

export function QuoteButton({ label}: QuoteButtonProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const homeRoute = "/";
  const isHome = pathname === homeRoute || pathname === `${homeRoute}/`;
  const hidden = HIDDEN_ON.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );

  // Escucha el param ?scrollTo=contact-us al llegar a home
  useEffect(() => {
    if (searchParams.get("scrollTo") === "contact-us") {
      const tryScroll = () => {
        const el = document.getElementById("contact-us");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          // Limpia el param de la URL sin recargar
          const url = new URL(window.location.href);
          url.searchParams.delete("scrollTo");
          history.replaceState(null, "", url.toString());
        } else {
          // Si el elemento aún no está, reintenta
          setTimeout(tryScroll, 100);
        }
      };
      tryScroll();
    }
  }, [searchParams]);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isHome) {
      document.getElementById("contact-us")?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `${homeRoute}?scrollTo=contact-us`;
    }
  };

  // After the hooks above, never before them: bailing earlier would change the hook
  // order between renders.
  if (hidden) return null;

  return (
   <button
      onClick={handleClick}
      suppressHydrationWarning
      className="fixed bottom-6 right-6 z-[9999] bg-primary text-white px-6 py-3 rounded-full shadow-xl font-semibold transition-all duration-300 hover:bg-neutral-800 hover:-translate-y-1"
    >
      {label}
    </button>
  );
}