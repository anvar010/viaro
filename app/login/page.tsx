import type { Metadata } from "next";
import { AuthLayout } from "@/components/app/auth-layout";
import { LoginForm } from "@/components/app/auth-forms";

export const metadata: Metadata = { title: "Sign in | Viaro" };

export default function LoginPage() {
  return (
    <AuthLayout title="Sign in" description="Access your trips, wallet and account.">
      <LoginForm />
    </AuthLayout>
  );
}
