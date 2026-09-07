"use client";

import { ArrowRight, Phone, Mail, MapPin, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { send, type FormState } from "@/lib/email";
import { useParams } from "next/navigation";
import { useEffect, useState, useActionState } from "react";
import { getDictionary } from "@/lib/get-dictionary";

const initialState: FormState = { success: false };

export function CtaSection() {
  const params  = useParams();
    const [dict, setDict] = useState<any>(null);
  const [state, action, pending] = useActionState(send, initialState);

  useEffect(() => {
    getDictionary().then(setDict);
  }, []);

  if (!dict) return null;
  const t = dict.cta;

  return (
    <section id="contact-us" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ── Left column ── */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              {t.sectionTitle}
            </p>
            <h2 className="mt-4 font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {t.heading}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {t.description}
            </p>

            <div className="mt-10 flex flex-col gap-6">
              {[
                { icon: Phone, ...t.info.phone },
                { icon: Mail,  ...t.info.email },
                { icon: MapPin,...t.info.office },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  {/* Icon badge — rounded */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
                    <p className="mt-1 text-foreground">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right column — card ── */}
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-10">
            <h3 className="font-serif text-2xl font-semibold text-card-foreground">
              {t.form.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">{t.form.subtitle}</p>

            {state.success && (
              <div className="mt-6 flex items-center gap-2 rounded-xl border border-green-500/40 bg-green-500/10 px-4 py-3 text-sm text-green-400">
                <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                {t.form.successMessage ?? "Message sent! We'll be in touch soon."}
              </div>
            )}
            {!state.success && state.message && (
              <div className="mt-6 flex items-center gap-2 rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                <AlertCircle className="h-4 w-4 flex-shrink-0" />
                {state.message}
              </div>
            )}

            <form action={action} className="mt-8 flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  id="fullName"
                  name="fullName"
                  type="text"
                  label={t.form.fields.fullName}
                  placeholder={t.form.fields.placeholders.fullName}
                  error={state.errors?.fullName?.[0]}
                />
                <Field
                  id="phone"
                  name="phone"
                  type="tel"
                  label={t.form.fields.phone}
                  placeholder={t.form.fields.placeholders.phone}
                  error={state.errors?.phone?.[0]}
                />
              </div>
              <Field
                id="email"
                name="email"
                type="email"
                label={t.form.fields.email}
                placeholder={t.form.fields.placeholders.email}
                error={state.errors?.email?.[0]}
              />
              <Field
                id="message"
                name="message"
                type="textarea"
                label={t.form.fields.message}
                placeholder={t.form.fields.placeholders.message}
                error={state.errors?.message?.[0]}
                rows={4}
              />

              <button
                type="submit"
                disabled={pending}
                className="bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed rounded-full uppercase tracking-widest text-xs font-semibold h-14 w-full flex items-center justify-center transition-opacity"
              >
                {pending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {t.form.sending ?? "Sending..."}
                  </>
                ) : (
                  <>
                    {t.form.button}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  id, name, type, label, placeholder, error, rows,
}: {
  id: string;
  name: string;
  type: "text" | "tel" | "email" | "textarea";
  label: string;
  placeholder: string;
  error?: string;
  rows?: number;
}) {
  const base =
    "w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none transition-colors " +
    (error
      ? "border-red-500 focus:border-red-400"
      : "border-border focus:border-primary");

  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground"
      >
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          rows={rows ?? 4}
          placeholder={placeholder}
          className={`${base} resize-none`}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          className={base}
        />
      )}
      {error && (
        <p className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
          <AlertCircle className="h-3 w-3 flex-shrink-0" />
          {error}
        </p>
      )}
    </div>
  );
}