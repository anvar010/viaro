import type { Metadata, Viewport } from "next";
import { Archivo, Playfair_Display } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { getDictionary } from "@/lib/get-dictionary";
import { readTokens } from "@/lib/auth/session";
import { ScrollReveal } from "@/components/scroll-reveal";
import { QuoteButton } from "@/components/quote-button";
import { RatingGate } from "@/components/app/rating-gate";
import "./globals.css";
import { Suspense } from "react";

/**
 * Brand typeface.
 *
 * The design calls for Roc Grotesk Extrawide, but the files in public/Demo_Fonts are
 * Fontspring DEMO releases: evaluation-only, unlicensed for a live site, and they
 * render a "DEMO" watermark over the text — which is what was showing up on headings.
 *
 * Archivo is the closest freely licensed substitute: the same grotesque skeleton, and
 * a variable width axis that reaches the expanded width the design uses (see the
 * `--font-roc-grotesk` rule in globals.css).
 *
 * To restore the real face once it is licensed, drop the .woff2 files into
 * public/fonts and swap this back to next/font/local pointing at them. Nothing else
 * needs to change — the whole site reads the CSS variable below.
 */
const brandFont = Archivo({
  subsets: ["latin"],
  // No `weight` here on purpose: naming weights pins a static cut, and the width axis
  // is only available on the variable font.
  axes: ["wdth"],
  display: "swap",
  variable: "--font-roc-grotesk",
});

/**
 * `font-serif` is used on 67 elements across the site, but tailwind.config.ts points it
 * at `--font-serif`, which nothing ever defined — so every one of them was falling back
 * to Georgia. Playfair Display is a high-contrast display serif that suits the black and
 * blue palette; change this import to swap it for the licensed brand serif.
 */
const serifFont = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Viaro",
  description: "Premium executive and luxury transportation service.",
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    const dict = (await getDictionary()) as any;

  /**
   * Read on the server so the navbar can show the right links without any token
   * reaching the browser. The role cookie is readable and is used for routing only.
   */
  const { accessToken, refreshToken, role } = await readTokens();
  const auth = {
    signedIn: Boolean(accessToken || refreshToken),
    // Non-passenger roles are handed off at /portal; they have no home on this site.
    home: role === "customer" ? "/account" : "/portal",
  };
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${brandFont.variable} ${serifFont.variable} antialiased`}>
        <ScrollReveal />
        <Navbar dict={dict} auth={auth} />

        {children}

        <Suspense fallback={null}>
          <QuoteButton label={dict.cta_button || "Get Quote"} />
        </Suspense>

        {/* Asks for a rating on any page once a trip is finished. Renders nothing for
            signed-out visitors, and nothing when there is no unrated trip. */}
        <Suspense fallback={null}>
          <RatingGate />
        </Suspense>
        <Footer dict={dict.footer} />
      </body>
    </html>
  );
}
