import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/lib/auth/AuthProvider";
import { ThemeScript } from "@/components/theme/ThemeScript";
import { RequireDriver } from "@/components/auth/RequireDriver";
import { PortalShell } from "@/components/layout/PortalShell";

// Same Inter as the customer site — the design uses it on every text node.
const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "VIARO · Driver portal",
  description: "Trips, schedule, earnings and documents for VIARO chauffeurs.",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1826" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-full bg-surface font-sans text-fg">
        <AuthProvider>
          <RequireDriver>
            <PortalShell>{children}</PortalShell>
          </RequireDriver>
        </AuthProvider>
      </body>
    </html>
  );
}
