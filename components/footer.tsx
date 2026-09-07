"use client";

import { usePathname } from "next/navigation";

interface FooterProps {
  dict: any;
}

export function Footer({ dict}: FooterProps) {
  const toSlug = (text: string) =>
    text
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");

  const base = "";
  

   const serviceLinks = [
    { label: dict.footer_service_airport      ?? "Airport Transfers",        slug: "airport-transfers" },
    { label: dict.footer_service_corporate    ?? "Corporate Transportation", slug: "corporate-transportation" },
    { label: dict.footer_service_fbo          ?? "FBO Crew Transportation",  slug: "fbo-crew-transportation" },
    { label: dict.footer_service_cruise       ?? "Cruise Port Transfers",    slug: "cruise-port-transfers" },
    { label: dict.footer_service_hourly       ?? "Hourly Chauffeur Hire",    slug: "hourly-chauffeur-hire" },
  ];

  const companyLinks = [
    { label: dict.footer_company_about   ?? "About Us", slug: "about-us" },
    { label: dict.footer_company_contact ?? "Contact",  slug: "contact" },
    { label: dict.footer_company_blog    ?? "Blog",     slug: "blog" },
    { label: dict.footer_company_faq     ?? "FAQ",      slug: "faq" },
  ];

  const socialLinks = [
    { name: "Instagram", url: "https://www.instagram.com/all_black_limo/?hl=es" },
    { name: "Facebook",  url: "https://www.facebook.com/ALLBLACKLIMO/" },
    { name: "LinkedIn",  url: "https://linkedin.com/company/allblacklimo-llc/about/" },
  ];


   return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <img src="/Logo/Logo.png" alt="Viaro Logo" className="h-12 w-auto" />
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground">
              {dict.footer_services_title ?? "Services"}
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <li key={link.slug}>
                  <a
                    href={`${base}/black-car-service/${link.slug}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground">
              {dict.footer_company_title ?? "Company"}
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.slug}>
                 <a 
                    href={`${base}/${link.slug}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground">
              {dict.footer_hours_title ?? "Hours"}
            </h4>
            <p className="mt-4 text-xs text-primary font-semibold uppercase tracking-widest">
              {dict.footer_hours_value ?? "24/7 Service"}
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Viaro. {dict.footer_rights ?? "All rights reserved."}
          </p>
         <div className="flex items-center gap-6">
  <a
    href={`${base}/terms-condition`}
    className="text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
  >
    {dict.footer_terms ?? "Terms & Conditions"}
  </a>
  {socialLinks.map((social) => ( 
    <a
    key={social.name}
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
    >
      {social.name}
    </a>
  ))}
</div>
        </div>
      </div>
    </footer>
  );
}