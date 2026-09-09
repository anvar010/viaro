"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

/**
 * A `next/image` that degrades to a placeholder instead of a broken box.
 *
 * 260 of the 320 image paths referenced across the marketing pages have no file behind
 * them in `public/images/`, so Next's optimizer answered each one with a 400 — six to
 * eighteen console errors on every service-area page, and an empty gap where the art
 * should be. The filenames are not recoverable by remapping (nothing on disk matches them
 * by case, prefix, or near-name), so the images themselves have to be supplied before
 * those pages are visually complete.
 *
 * Until they are, this keeps a missing file from breaking the layout or filling the
 * console: the first error swaps in a neutral placeholder of the same dimensions.
 */
export const IMAGE_FALLBACK = "/images/placeholder.svg";

export function SafeImage({ src, alt, ...rest }: ImageProps) {
  const [failed, setFailed] = useState(false);

  return (
    <Image
      {...rest}
      src={failed ? IMAGE_FALLBACK : src}
      alt={alt}
      onError={() => setFailed(true)}
      // The placeholder is an SVG; skipping optimization avoids a second failed round-trip.
      {...(failed ? { unoptimized: true } : {})}
    />
  );
}
