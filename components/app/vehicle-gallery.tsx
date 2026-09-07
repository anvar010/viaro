"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import type { VehiclePhoto } from "@/lib/constants";

/**
 * Full-screen photo viewer for a vehicle class.
 *
 * ⚠ RENDERED THROUGH A PORTAL, and it has to be. The vehicle cards live inside `Panel`,
 * which carries `backdrop-blur-sm`. A `backdrop-filter` on an ancestor establishes a
 * containing block, so a `position: fixed` child resolves against THAT element rather
 * than the viewport — the dialog rendered as a small box pinned inside the card instead
 * of covering the screen. Portalling to document.body escapes the containing block; any
 * other fix (removing the blur, transforms, `will-change`) only moves the problem.
 *
 * Three ways out, because a modal with one is a trap: the close button, a click on the
 * backdrop, and Escape. Arrow keys step through, focus is trapped while open and handed
 * back to the trigger on close.
 */
export function VehicleGallery({
  open,
  photos,
  title,
  startIndex = 0,
  onClose,
}: {
  open: boolean;
  photos: VehiclePhoto[];
  title: string;
  startIndex?: number;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(startIndex);
  const [mounted, setMounted] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  // Where focus came from, so it can be handed back exactly there.
  const openerRef = useRef<Element | null>(null);

  const count = photos.length;
  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count]);

  // document.body does not exist while rendering on the server.
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (open) setIndex(startIndex);
  }, [open, startIndex]);

  useEffect(() => {
    if (!open) return;

    openerRef.current = document.activeElement;
    closeRef.current?.focus();

    // The page behind must not scroll under the overlay.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        next();
        return;
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        prev();
        return;
      }
      if (event.key !== "Tab") return;

      // Focus trap: cycle within the dialog rather than escaping to the page below.
      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      (openerRef.current as HTMLElement | null)?.focus?.();
    };
  }, [open, onClose, next, prev]);

  if (!open || !mounted) return null;

  const photo = photos[index];

  return createPortal(
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`${title} photos`}
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6"
    >
      {/*
        The backdrop is a real button, not a div with onClick: it has to be reachable
        and announced, and "click the background to dismiss" is otherwise invisible to
        anyone not using a mouse.
      */}
      <button
        type="button"
        aria-label="Close photos"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-black/85 backdrop-blur-sm"
      />

      {/* The dialog itself. Clicks inside must not reach the backdrop. */}
      <div className="relative flex max-h-full w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 shadow-2xl">
        <div className="flex shrink-0 items-center gap-3 border-b border-white/10 px-4 py-3">
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-white">{title}</p>
            <p className="text-xs text-white/50">
              {photo.caption} · {index + 1} of {count}
            </p>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close photos"
            className="ml-auto inline-flex h-9 items-center gap-1.5 rounded-full bg-white/10 px-3.5 text-xs font-medium text-white transition-colors hover:bg-white/20"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
            Close
          </button>
        </div>

        <div className="relative min-h-0 flex-1 bg-black">
          <div className="relative mx-auto aspect-[16/10] max-h-[65vh] w-full">
            <Image
              key={photo.src + index}
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 1024px) 64rem, 100vw"
              // `contain` so the whole car is visible — a lightbox that crops
              // defeats its own purpose.
              className="object-contain"
              priority
            />
          </div>

          {count > 1 ? (
            <>
              <GalleryArrow side="left" onClick={prev} />
              <GalleryArrow side="right" onClick={next} />
            </>
          ) : null}
        </div>

        {count > 1 ? (
          <div className="shrink-0 border-t border-white/10 px-4 py-3">
            <ul className="flex justify-center gap-2">
              {photos.map((item, i) => (
                <li key={item.src + i}>
                  <button
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Show ${item.caption}`}
                    aria-current={i === index}
                    className={`relative block h-12 w-16 overflow-hidden rounded-md border transition-all sm:h-14 sm:w-20 ${
                      i === index
                        ? "border-primary opacity-100"
                        : "border-white/15 opacity-55 hover:opacity-90"
                    }`}
                  >
                    <Image src={item.src} alt="" fill sizes="80px" className="object-cover" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </div>,
    document.body,
  );
}

function GalleryArrow({ side, onClick }: { side: "left" | "right"; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={side === "left" ? "Previous photo" : "Next photo"}
      className={`absolute top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 ${
        side === "left" ? "left-2 sm:left-3" : "right-2 sm:right-3"
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        className={`h-5 w-5 ${side === "left" ? "rotate-180" : ""}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m9 6 6 6-6 6" />
      </svg>
    </button>
  );
}
