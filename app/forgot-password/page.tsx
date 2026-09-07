import type { Metadata } from "next";
import { AuthLayout } from "@/components/app/auth-layout";
import { ForgotPasswordForm } from "@/components/app/auth-forms";

export const metadata: Metadata = { title: "Reset password | Viaro" };

export default function ForgotPasswordPage() {
  return (
    <AuthLayout
      title="Reset your password"
      description="Enter your email and we'll send you a link."
    >
      <ForgotPasswordForm />
    </AuthLayout>
  );
}
