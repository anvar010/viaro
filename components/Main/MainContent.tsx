"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Testimonials } from "@/components/testimonials";
import { CtaSection } from "@/components/cta-section";
import { homeTestimonials } from "@/data/Tetimonials";
import { MainFa } from "@/data/Fa";
import { FA } from "../FA";

const inputCls =
  "w-full bg-black/60 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-primary transition-colors";
const selectCls =
  "w-full bg-black/60 border border-white/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary transition-colors";
const labelCls =
  "block text-[10px] uppercase tracking-widest text-white/40 mb-1.5";

const btnPrimary =
  "bg-primary text-white hover:bg-brand2 rounded-full uppercase tracking-widest text-xs font-semibold transition-colors";

type TripType = "oneway" | "roundtrip" | "package" | "multicity";

const TRUST_METRICS = [
  {
    value: { en: "60,000+", es: "60,000+" },
    label: { en: "Rides Completed", es: "Viajes Completados" },
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 17H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3" />
        <circle cx="17" cy="17" r="4" />
        <path d="m21 21-1.5-1.5M17 15v2l1 1" />
        <path d="m9 11 2 2 4-4" />
      </svg>
    ),
  },
  {
    value: { en: "5.0★", es: "5.0★" },
    label: { en: "Average Rating", es: "Calificación Promedio" },
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
      </svg>
    ),
  },
  {
    value: { en: "Licensed", es: "Licencia" },
    label: { en: "& Insured", es: "y Asegurado" },
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    value: { en: "24/7", es: "24/7" },
    label: { en: "Support", es: "Soporte" },
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M12 7v2M12 13h.01" />
      </svg>
    ),
  },
];
function BookingForm({ t }: { t: any }) {
  const [mounted, setMounted] = React.useState(false);
  const [trip, setTrip] = React.useState<TripType>("oneway");
  const [stops, setStops] = React.useState<string[]>(["", ""]);
  const [service, setService] = React.useState("");
  const [pickup, setPickup] = React.useState("");
  const [dropoff, setDropoff] = React.useState("");
  const [date, setDate] = React.useState("");
  const [time, setTime] = React.useState("");
  const [dateReturn, setDateReturn] = React.useState("");
  const [timeReturn, setTimeReturn] = React.useState("");
  const [dateEnd, setDateEnd] = React.useState("");
  const [pkgNotes, setPkgNotes] = React.useState("");
  const [passengers, setPassengers] = React.useState("1");

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const tabs: { key: TripType; label: string }[] = [
    { key: "oneway", label: t.trip_oneway ?? "One Way" },
    { key: "roundtrip", label: t.trip_roundtrip ?? "Round Trip" },
    { key: "package", label: t.trip_package ?? "Package" },
    { key: "multicity", label: t.trip_multicity ?? "Multi-City" },
  ];

  const addStop = () => setStops((s) => [...s, ""]);
  const removeStop = (i: number) =>
    setStops((s) => s.filter((_, idx) => idx !== i));
  const updateStop = (i: number, val: string) =>
    setStops((s) => s.map((v, idx) => (idx === i ? val : v)));

  if (!mounted) return null;

  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/15 rounded-2xl p-6 sm:p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] w-full min-w-0">
      <h3 className="font-serif font-bold text-xl sm:text-2xl mb-1">
        {t.form_title ?? "Book Your Ride"}
      </h3>
      <p className="text-xs text-white/50 uppercase tracking-widest mb-4">
        {t.form_subtitle ?? "Instant quote · No commitment"}
      </p>

      <div className="grid grid-cols-4 gap-1 bg-white/5 rounded-xl p-1 mb-5">
        {tabs.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setTrip(key)}
            className={`py-2 rounded-lg text-[9px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
              trip === key
                ? "bg-primary text-white"
                : "text-white/50 hover:text-white"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <label className={labelCls}>{t.form_service ?? "Service Type"}</label>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className={selectCls}
          >
            <option value="">
              {t.form_service_placeholder ?? "Select a service..."}
            </option>
            <option value="airport">
              {t.form_service_airport ?? "Airport Transfer"}
            </option>
            <option value="corporate">
              {t.form_service_corporate ?? "Corporate / Executive"}
            </option>
            <option value="cruise">
              {t.form_service_cruise ?? "Cruise Port"}
            </option>
            <option value="fbo">
              {t.form_service_fbo ?? "Private Jet / FBO"}
            </option>
            <option value="hourly">
              {t.form_service_hourly ?? "Hourly Charter"}
            </option>
          </select>
        </div>

        {/* ONE WAY */}
        {trip === "oneway" && (
          <>
            <div>
              <label className={labelCls}>
                {t.form_pickup ?? "Pickup Location"}
              </label>
              <input
                type="text"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                placeholder={
                  t.form_pickup_placeholder ?? "Address, airport, hotel..."
                }
                className={inputCls}
              />
            </div>
            <div>
              <label className={labelCls}>
                {t.form_dropoff ?? "Drop-off Location"}
              </label>
              <input
                type="text"
                value={dropoff}
                onChange={(e) => setDropoff(e.target.value)}
                placeholder={t.form_dropoff_placeholder ?? "Destination..."}
                className={inputCls}
              />
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className={labelCls}>{t.form_date ?? "Date"}</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className={inputCls}
                />
              </div>
              <div>
                <label className={labelCls}>{t.form_time ?? "Time"}</label>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className={inputCls}
                />
              </div>
            </div>
          </>
        )}

        {/* ROUND TRIP */}
        {trip === "roundtrip" && (
          <>
            <div>
              <label className={labelCls}>
                {t.form_pickup ?? "Pickup Location"}
              </label>
              <input
                type="text"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                placeholder={
                  t.form_pickup_placeholder ?? "Address, airport, hotel..."
                }
                className={inputCls}
              />
            </div>
            <div>
              <label className={labelCls}>
                {t.form_dropoff ?? "Drop-off Location"}
              </label>
              <input
                type="text"
                value={dropoff}
                onChange={(e) => setDropoff(e.target.value)}
                placeholder={t.form_dropoff_placeholder ?? "Destination..."}
                className={inputCls}
              />
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className={labelCls}>
                  {t.form_date_depart ?? "Departure"}
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className={inputCls}
                />
              </div>
              <div>
                <label className={labelCls}>{t.form_time ?? "Time"}</label>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className={inputCls}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className={labelCls}>
                  {t.form_date_return ?? "Return"}
                </label>
                <input
                  type="date"
                  value={dateReturn}
                  onChange={(e) => setDateReturn(e.target.value)}
                  className={inputCls}
                />
              </div>
              <div>
                <label className={labelCls}>
                  {t.form_time_return ?? "Return Time"}
                </label>
                <input
                  type="time"
                  value={timeReturn}
                  onChange={(e) => setTimeReturn(e.target.value)}
                  className={inputCls}
                />
              </div>
            </div>
          </>
        )}

        {/* PACKAGE */}
        {trip === "package" && (
          <>
            <div>
              <label className={labelCls}>
                {t.form_pickup ?? "Pickup Location"}
              </label>
              <input
                type="text"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                placeholder={
                  t.form_pickup_placeholder ?? "Address, airport, hotel..."
                }
                className={inputCls}
              />
            </div>
            <div>
              <label className={labelCls}>
                {t.form_dropoff ?? "Drop-off Location"}
              </label>
              <input
                type="text"
                value={dropoff}
                onChange={(e) => setDropoff(e.target.value)}
                placeholder={t.form_dropoff_placeholder ?? "Destination..."}
                className={inputCls}
              />
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className={labelCls}>
                  {t.form_date ?? "Start Date"}
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className={inputCls}
                />
              </div>
              <div>
                <label className={labelCls}>
                  {t.form_date_end ?? "End Date"}
                </label>
                <input
                  type="date"
                  value={dateEnd}
                  onChange={(e) => setDateEnd(e.target.value)}
                  className={inputCls}
                />
              </div>
            </div>
            <div>
              <label className={labelCls}>
                {t.form_package_notes ?? "Package Details"}
              </label>
              <input
                type="text"
                value={pkgNotes}
                onChange={(e) => setPkgNotes(e.target.value)}
                placeholder={
                  t.form_package_placeholder ??
                  "E.g. 3-day corporate retreat..."
                }
                className={inputCls}
              />
            </div>
          </>
        )}

        {/* MULTI-CITY */}
        {trip === "multicity" && (
          <>
            {stops.map((val, i) => (
              <div key={i} className="relative">
                <label className={labelCls}>
                  {i === 0
                    ? (t.form_pickup ?? "Pickup Location")
                    : i === stops.length - 1
                      ? (t.form_dropoff ?? "Final Destination")
                      : `${t.form_stop ?? "Stop"} ${i}`}
                </label>
                <div className="flex gap-2 items-center">
                  <input
                    type="text"
                    value={val}
                    onChange={(e) => updateStop(i, e.target.value)}
                    placeholder={
                      i === 0
                        ? (t.form_pickup_placeholder ?? "Starting point...")
                        : (t.form_stop_placeholder ?? "Next destination...")
                    }
                    className={inputCls}
                  />
                  {i > 1 && i === stops.length - 1 && (
                    <button
                      onClick={() => removeStop(i)}
                      className="flex-shrink-0 w-9 h-9 rounded-lg border border-white/20 text-white/40 hover:text-white hover:border-white/50 transition-colors flex items-center justify-center text-lg leading-none"
                    >
                      ×
                    </button>
                  )}
                </div>
              </div>
            ))}
            <button
              onClick={addStop}
              className="text-xs font-semibold uppercase tracking-widest text-primary hover:text-white transition-colors text-left"
            >
              + {t.form_add_stop ?? "Add Stop"}
            </button>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className={labelCls}>{t.form_date ?? "Date"}</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className={inputCls}
                />
              </div>
              <div>
                <label className={labelCls}>{t.form_time ?? "Time"}</label>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className={inputCls}
                />
              </div>
            </div>
          </>
        )}

        {/* Passengers */}
        <div>
          <label className={labelCls}>
            {t.form_passengers ?? "Passengers"}
          </label>
          <select
            value={passengers}
            onChange={(e) => setPassengers(e.target.value)}
            className={selectCls}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <option key={n} value={n}>
                {n}{" "}
                {n === 1
                  ? (t.form_passenger ?? "passenger")
                  : (t.form_passengers_label ?? "passengers")}
              </option>
            ))}
          </select>
        </div>

        <a href="/book" className="mt-2">
          <Button className={`w-full h-12 ${btnPrimary}`}>
            {t.form_cta ?? "Get Instant Quote"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </a>
      </div>
    </div>
  );
}

// ── MAIN CONTENT ──────────────────────────────────────────────────────────────
export default function MainContent({ dict}: { dict: any;}) {
  const t = dict;
  const testimonios = homeTestimonials;

  const services: any[] = t.services || [];
  const fleet: any[] = t.fleet || [];
  const locationsRegions: any[] = t.locations_regions || [];
  const aboutWhy: any[] = t.about_why || [];
  const fa = MainFa;
  const [isMounted, setIsMounted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log("Styles applied?", document.body.style.backgroundColor);
    console.log(
      "MainContent visibility:",
      document.getElementById("MainContent")?.style.display,
    );

    // Forzar visibilidad
    const mainEl = document.getElementById("MainContent");
    if (mainEl) {
      console.log("MainContent found:", mainEl);
      console.log("Computed styles:", window.getComputedStyle(mainEl).display);
    }
  }, []);

  return (
    <section id="MainContent" className="bg-black text-white">
      <main className="">
        <section className="relative w-full  bg-neutral-900">
          <div className="absolute inset-0">
            <Image
              src="/images/ImagenPrincipal.png"
              alt="Viaro black car services: airport pickup with chauffeur, corporate executive travel, cruise port transfer, and private jet FBO transportation."
              fill
              priority
              className="object-cover object-[center_30%] sm:object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pt-32 sm:pt-36 pb-20 sm:pb-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="max-w-2xl min-w-0">
                <p className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-brand [text-shadow:0_1px_3px_rgba(0,0,0,0.9),_0_4px_12px_rgba(0,0,0,0.6)] whitespace-pre-line">
                  {t.hero_top_text}
                </p>
                <h1 className="font-serif font-bold leading-tight text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
                  {t.hero_title}
                </h1>
                <p className="mb-6 mt-2 text-sm font-semibold uppercase tracking-[0.3em]">
                  {t.subtitle}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="/book">
                    <Button
                      className={`px-6 sm:px-8 h-11 sm:h-12 ${btnPrimary}`}
                    >
                      {t.book_now}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                  <a href="tel:+12066728281">
                    <Button
                      variant="outline"
                      className="rounded-full px-6 sm:px-8 uppercase tracking-widest text-xs font-semibold h-11 sm:h-12 border-white text-white hover:bg-white hover:text-black"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      {t.call_cta}
                    </Button>
                  </a>
                </div>
              </div>
              <div className="min-w-0 w-full">
                <BookingForm t={t} />
              </div>
            </div>
          </div>
        </section>

        <section
          style={{
            background: "rgb(30,30,30)",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
            padding: "32px 12px",
            overflow: "hidden",
          }}
        >
          <p
            style={{
              textAlign: "center",
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: "rgba(255,255,255,0.4)",
              marginBottom: 24,
              fontWeight: 500,
            }}
          >
            {"Trusted by thousands across North America"}
          </p>
          <div
            style={{
              maxWidth: 900,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)", // siempre 4 columnas
              gap: 8,
              textAlign: "center",
            }}
          >
            {TRUST_METRICS.map((m) => (
              <div
                key={m.value.en}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 6,
                  padding: "0 4px",
                }}
              >
                {/* icono pequeño igual que antes */}
                <div
                  style={{
                    color: "var(--color-primary, #3b82f6)",
                    width: "clamp(16px, 4.5vw, 28px)",
                    height: "clamp(16px, 4.5vw, 28px)",
                    flexShrink: 0,
                  }}
                >
                  {m.icon}
                </div>
                <span
                  style={{
                    fontSize: "clamp(12px, 3.5vw, 22px)",
                    fontWeight: 700,
                    color: "#fff",
                    lineHeight: 1,
                  }}
                >
                  {m.value.en}
                </span>
                <span
                  style={{
                    fontSize: "clamp(7px, 1.8vw, 11px)",
                    color: "rgba(255,255,255,0.4)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    lineHeight: 1.2,
                  }}
                >
                  {m.label.en}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ── WELCOME ── */}
        <section className="py-16 sm:py-20 bg-neutral-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div className="min-w-0">
                <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight">
                  {t.welcome_title
                    .split("Viaro")
                    .map((part: string, i: number, arr: string[]) => (
                      <React.Fragment key={i}>
                        {part}
                        {i < arr.length - 1 && (
                          <span className="text-muted2">Viaro</span>
                        )}
                      </React.Fragment>
                    ))}
                </h2>
                <p className="mt-6 text-sm sm:text-base text-gray-300 text-justify leading-relaxed whitespace-pre-line">
                  {t.welcome_description}
                </p>
              </div>
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden min-w-0">
                <Image
                  src="/images/Imagen2Home.png"
                  alt="Luxury vehicle"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>
        
      
  {/* ── LOCATIONS ── */}
        <section className="py-16 sm:py-20 bg-black">
          <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight text-center mb-8">
              {t.locations_title}
            </h2>
           <div className="relative w-full aspect-[16/7] rounded-2xl overflow-hidden mb-12">
              <Image
                src="/images/Mapa.png"
                alt="Map showing Viaro luxury black car service locations across the United States."
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 90vw"
              />
            </div>
            <div className="lg:flex lg:items-start lg:gap-16">
              <div className="lg:w-1/3 mb-10 lg:mb-0 lg:sticky lg:top-24">
                {t.locations_subtitle && (
                  <p className="text-sm sm:text-base text-gray-400 text-center lg:text-left">
                    {t.locations_subtitle
                      .split("Viaro")
                      .map((part: string, i: number, arr: string[]) => (
                        <React.Fragment key={i}>
                          {part}
                          {i < arr.length - 1 && (
                            <span className="text-muted2">Viaro</span>
                          )}
                        </React.Fragment>
                      ))}
                  </p>
                )}

                <Link
                  href={`/service-areas`}
                  className="block text-center lg:text-left text-xs font-bold uppercase tracking-widest text-primary hover:underline mt-3"
                >
                  {"See all service areas"}
                </Link>
                {t.locations_cta && (
                  <div className="mt-8 flex justify-center lg:justify-start">
                    <a href="/book">
                      <Button className={`px-8 h-11 sm:h-12 ${btnPrimary}`}>
                        {t.locations_cta}
                      </Button>
                    </a>
                  </div>
                )}
              </div>
              <div className="lg:w-2/3 min-w-0">
                {locationsRegions.length > 0 ? (
                  <div className="grid gap-8 grid-cols-2 xl:grid-cols-4">
                    {locationsRegions.map((r: any, index: number) => (
                      <div
                        key={r.region}
                        className={
                          index === locationsRegions.length - 1
                            ? "xl:col-start-4"
                            : ""
                        }
                      >
                        <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">
                          {r.region}
                        </h3>
                        <ul className="space-y-2">
                          {r.cities.map((c: any) => (
                            <li key={c.slug}>
                              <Link
                                href={`/service-area/${c.slug}`}
                                className="text-sm text-gray-300 hover:text-primary transition-colors"
                              >
                                {c.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "New York",
                      "Los Angeles",
                      "Chicago",
                      "Dallas",
                      "Atlanta",
                      "Washington DC",
                      "Miami",
                      "Boston",
                      "San Francisco",
                      "Seattle",
                      "Las Vegas",
                      "Houston",
                      "Phoenix",
                      "Denver",
                      "San Diego",
                      "Charlotte",
                      "Nashville",
                      "Austin",
                      "Philadelphia",
                      "Orlando",
                    ].map((city) => (
                      <Link
                        key={city}
                        href={`/service-area/${city.toLowerCase().replace(" ", "-")}`}
                      >
                        <button
                          className={`w-full py-3 border-0 ${btnPrimary}`}
                        >
                          {city}
                        </button>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        {/* ── FLEET ── */}
        {fleet.length > 0 && (
          <section id="fleet" className="py-14 sm:py-20 bg-black">
            <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
              <h2 className="text-center font-serif font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight">
                {t.fleet_title}
              </h2>
              <div className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {fleet.map((v: any) => (
                  <div
                    key={v.type}
                    className="flex flex-col border border-primary/60 p-6 sm:p-8 rounded-2xl bg-neutral-900 hover:border-primary transition-all duration-300"
                  >
                    <h3 className="font-serif font-bold text-xl sm:text-2xl text-primary mb-2">
                      {v.type}
                    </h3>
                    <p className="text-sm text-gray-300 mb-6">
                      {Array.isArray(v.models) ? v.models.join(", ") : v.models}
                    </p>

                    <div className="grid grid-cols-3 gap-4 mb-6 border-y border-white/10 py-4">
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                          {t.fleet_passengers ?? "Pasajeros"}
                        </span>
                        <span className="text-sm font-semibold text-white">
                          {v.passengers}
                        </span>
                      </div>
                      <div className="flex flex-col border-l border-white/10 pl-4">
                        <span className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                          {t.fleet_luggage ?? "Equipaje"}
                        </span>
                        <span className="text-sm font-semibold text-white">
                          {v.luggage}
                        </span>
                      </div>
                      <div className="flex flex-col border-l border-white/10 pl-4">
                        <span className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                          {t.pricing_from ?? "From"}
                        </span>
                        <span className=" font-semibold text-2xl text-primary">
                          {v.price}
                        </span>
                      </div>
                    </div>

                    <div className="flex-grow space-y-4">
                      <div>
                        <span className="text-[10px] uppercase tracking-widest text-primary font-bold block mb-1">
                          {t.fleet_best_for ?? "Ideal Para"}
                        </span>
                        <p className="text-sm text-gray-300 italic">
                          {v.bestFor}
                        </p>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-widest text-muted-foreground block mb-1">
                          {t.fleet_features ?? "Características"}
                        </span>
                        <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                          {v.features}
                        </p>
                      </div>
                    </div>

                    <div className="mt-8">
                      <a
                        href="/book"
                      >
                        <Button className={`w-full h-11 sm:h-12 ${btnPrimary}`}>
                          {v.cta || t.book_now}
                        </Button>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── About us ── */}
        {t.about_title && (
          <section className="py-14 sm:py-20 bg-neutral">
            <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
              <h2 className="text-center font-serif font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight">
                {t.about_title
                  .split("Viaro")
                  .map((part: string, i: number, arr: string[]) => (
                    <React.Fragment key={i}>
                      {part}
                      {i < arr.length - 1 && (
                        <span className="text-muted2">Viaro</span>
                      )}
                    </React.Fragment>
                  ))}
              </h2>
              <div className="mb-8">
                {t.about_founder_label && (
                  <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                    {t.about_founder_label}: {t.about_founder_name}
                  </p>
                )}
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-3xl">
                  {t.about_founder_description}
                </p>
              </div>
              <div className="grid gap-8 lg:grid-cols-2 mb-10">
                <div className="flex flex-col gap-6 min-w-0">
                  {t.about_vision && (
                    <div className="border border-primary/30 rounded-xl p-5 flex-1">
                      <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                        {t.about_vision_label}
                      </p>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {t.about_vision}
                      </p>
                    </div>
                  )}
                  {t.about_mission && (
                    <div className="border border-primary/30 rounded-xl p-5 flex-1">
                      <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                        {t.about_mission_label}
                      </p>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {t.about_mission}
                      </p>
                    </div>
                  )}
                </div>
                <div
                  className="relative rounded-2xl overflow-hidden min-w-0"
                  style={{ minHeight: "240px" }}
                >
                  <Image
                    src="/images/Imagen2Home.png"
                    alt="Viaro CEO Bijo Cherian and a professional chauffeur providing service."
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
              {aboutWhy.length > 0 && (
                <>
                  <h3 className="font-serif font-bold text-xl sm:text-2xl mb-5">
                    {t.about_why_title
                      .split("Viaro")
                      .map((part: string, i: number, arr: string[]) => (
                        <React.Fragment key={i}>
                          {part}
                          {i < arr.length - 1 && (
                            <span className="text-muted2">Viaro</span>
                          )}
                        </React.Fragment>
                      ))}
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {aboutWhy.map((w: any) => (
                      <li key={w.label} className="flex gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base text-gray-300">
                          <strong className="text-white">{w.label}:</strong>{" "}
                          {w.desc}
                        </span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
              <div className="flex flex-wrap gap-3 justify-center">
                <a href="/book">
                  <Button className={`px-6 sm:px-8 h-11 sm:h-12 ${btnPrimary}`}>
                    {t.about_cta}
                  </Button>
                </a>
                <a href="tel:+12066728281">
                  <Button
                    variant="outline"
                    className="rounded-full px-6 sm:px-8 uppercase tracking-widest text-xs font-semibold h-11 sm:h-12 border-white text-white hover:bg-white hover:text-black"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    {t.call_cta}
                  </Button>
                </a>
              </div>
            </div>
          </section>
        )}

        <div className="text-center">
          <p className="mt-4 font-serif text-4xl font-bold tracking-tight text-card-foreground sm:text-5xl">
            {t.title}
          </p>
        </div>

        <section className="pt-16 sm:pt-24 overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16 mb-1 text-center">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight">
              {"5-STAR RATED LUXURY TRANSPORTATION REVIEWS"}
            </h2>
          </div>
          <Testimonials data={testimonios} />
        </section>

        <CtaSection />
        <section className="py-16 sm:py-24 bg-black">
          <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight text-center mb-6">
              {"BLACK CAR SERVICE FAQs"}
            </h2>
            <FA data={fa} />
            <div className="mt-12 flex justify-center">
              <a href={`/faq`}>
                <Button
                  variant="outline"
                  className="rounded-full px-6 sm:px-8 uppercase tracking-widest text-xs font-semibold h-11 sm:h-12 border-white text-white hover:bg-white hover:text-black"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  {"Have More Questions? Contact Us"}
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
}
