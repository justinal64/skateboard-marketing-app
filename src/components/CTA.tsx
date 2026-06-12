"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    const res = await fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (res.ok) {
      setStatus("success");
      setEmail("");
    } else {
      setStatus("error");
      setMessage(data.error ?? "Something went wrong. Try again.");
    }
  }

  return (
    <section id="waitlist" className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
        <div className="relative overflow-hidden rounded-[1.75rem] border border-hairline/60 bg-surface px-8 py-20 text-center md:px-12 md:py-24">
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse 60% 60% at 50% 115%, rgba(255,0,255,0.14) 0%, rgba(0,255,255,0.06) 45%, transparent 70%)",
            }}
          />

          <div className="relative">
            <h2 className="mb-4 bg-gradient-to-b from-white to-[#b8b8e0] bg-clip-text text-4xl font-semibold tracking-tight text-transparent md:text-5xl">
              Be first to drop in.
            </h2>
            <p className="mx-auto mb-10 max-w-md text-lg leading-relaxed text-muted">
              BOLTS is launching soon on iOS and Android. Join the waitlist and
              get notified the moment it drops.
            </p>

            {status === "success" ? (
              <div className="mx-auto max-w-md">
                <p className="text-lg font-medium text-foreground">
                  You&apos;re on the list.
                </p>
                <p className="mt-1 text-sm text-muted">
                  We&apos;ll let you know the moment BOLTS launches.
                </p>
              </div>
            ) : (
              <form
                className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
                onSubmit={handleSubmit}
              >
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  required
                  disabled={status === "loading"}
                  className={`flex-1 rounded-full border bg-background/60 px-5 py-3 text-sm text-foreground placeholder:text-muted/70 outline-none transition-colors focus:border-accent disabled:opacity-50 ${
                    status === "error" ? "border-red-400/60" : "border-hairline"
                  }`}
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="rounded-full bg-accent-button px-6 py-3 text-sm font-medium text-white shadow-[0_0_20px_rgba(255,0,255,0.35)] transition-all hover:bg-accent-button-hover hover:shadow-[0_0_28px_rgba(255,0,255,0.5)] disabled:opacity-60"
                >
                  {status === "loading" ? "Joining…" : "Notify me"}
                </button>
              </form>
            )}

            {status === "error" && (
              <p className="mt-3 text-sm text-red-400/90">{message}</p>
            )}

            {status !== "success" && (
              <p className="mt-6 text-xs text-muted/70">
                No spam. Just a note when we launch.
              </p>
            )}
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
}
