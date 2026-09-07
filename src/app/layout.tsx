import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/lib/auth/AuthProvider";
import { ThemeScript } from "@/components/theme/ThemeScript";
import { RequireRole } from "@/components/auth/RequireRole";
import { ConsoleShell, type NavItem } from "@/components/layout/ConsoleShell";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "VIARO · Operations",
  description: "Platform dashboards, city pricing, dispatch and support triage.",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1826" },
  ],
  width: "device-width",
  initialScale: 1,
};

const NAV: NavItem[] = [
  { href: "/", label: "Dashboard", icon: "home" },
  { href: "/trips", label: "Trips", icon: "route" },
  { href: "/users", label: "Users", icon: "users" },
  { href: "/pricing", label: "City pricing", icon: "pricing" },
  { href: "/drivers", label: "Drivers", icon: "car" },
  { href: "/vehicles", label: "Vehicles", icon: "pricing" },
  { href: "/revenue", label: "Revenue", icon: "money" },
  { href: "/reports", label: "Reports", icon: "report" },
  { href: "/support", label: "Support", icon: "support" },
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-full bg-surface font-sans text-fg">
        <AuthProvider>
          <RequireRole>
            <ConsoleShell nav={NAV} title="Operations">
              {children}
            </ConsoleShell>
          </RequireRole>
        </AuthProvider>
      </body>
    </html>
  );
}
