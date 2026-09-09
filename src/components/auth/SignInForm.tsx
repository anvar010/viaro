"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TextField } from "@/components/ui/TextField";
import { useAuth } from "@/lib/auth/AuthProvider";

/** Uses the same /api/auth/login route handler as the customer app. */
export function SignInForm() {
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      await login(email, password);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not sign you in");
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-3">
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        autoComplete="email"
        required
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        autoComplete="current-password"
        required
      />

      {/*
        * role="alert" (an assertive live region) so a screen reader announces a failed
        * sign-in. As a plain paragraph the message appeared silently: a user who could not
        * see it got no feedback at all that the attempt had been rejected.
        */}
      {error && (
        <p role="alert" className="text-link font-bold text-danger">
          {error}
        </p>
      )}

      <Button type="submit" variant="accent" loading={submitting}>
        Sign in
      </Button>
    </form>
  );
}
