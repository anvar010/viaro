import type { Metadata } from "next";
import { AuthLayout } from "@/components/app/auth-layout";
import { RegisterForm } from "@/components/app/auth-forms";

export const metadata: Metadata = { title: "Create account | Viaro" };

export default function RegisterPage() {
  return (
    <AuthLayout
      title="Create your account"
      description="Book a chauffeur in under a minute. No booking fees."
    >
      <RegisterForm />
    </AuthLayout>
  );
}
