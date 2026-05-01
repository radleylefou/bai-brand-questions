"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    router.push("/admin");
    router.refresh();
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-bg px-6">
      <div className="w-full max-w-xs">
        <div className="mb-10">
          <span className="font-mono text-xs uppercase tracking-widest text-muted">
            Ferraz Creative
          </span>
          <h1 className="mt-2 text-lg font-medium text-ink">
            Brand Discovery OS
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              autoFocus
              className="w-full border-0 border-b border-[var(--line-mid)] bg-transparent py-2 text-sm text-ink outline-none placeholder:text-muted focus:border-accent transition-colors"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              className="w-full border-0 border-b border-[var(--line-mid)] bg-transparent py-2 text-sm text-ink outline-none placeholder:text-muted focus:border-accent transition-colors"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p className="font-mono text-xs text-danger">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-2 w-full bg-accent py-3 text-sm font-medium text-[var(--accent-fg)] transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}
