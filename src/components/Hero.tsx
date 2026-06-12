"use client";

import { motion } from "motion/react";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

function FadeUp({
  children,
  delay,
  className,
}: {
  children: React.ReactNode;
  delay: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-28 pt-36 md:pt-44">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 110%, rgba(255,0,255,0.12) 0%, rgba(0,255,255,0.05) 45%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <FadeUp delay={0}>
          <p className="mb-4 text-base font-semibold text-accent md:text-lg">
            Coming soon to iOS and Android
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h1 className="mb-6 bg-gradient-to-r from-[#ff5cff] via-white to-[#5cffff] bg-clip-text text-5xl font-semibold tracking-tight text-transparent md:text-7xl">
            Track every trick.
          </h1>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="mx-auto mb-9 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
            Log what you land. Set the next goal. Watch your skating grow,
            session after session.
          </p>
        </FadeUp>
        <FadeUp
          delay={0.3}
          className="flex flex-col items-center justify-center gap-5 sm:flex-row"
        >
          <a
            href="#waitlist"
            className="rounded-full bg-accent-button px-6 py-3 text-base font-medium text-white shadow-[0_0_24px_rgba(255,0,255,0.35)] transition-all hover:bg-accent-button-hover hover:shadow-[0_0_32px_rgba(255,0,255,0.5)]"
          >
            Join the waitlist
          </a>
          <a
            href="#features"
            className="group text-base font-medium text-accent"
          >
            See what it does{" "}
            <span className="inline-block transition-transform group-hover:translate-x-0.5">
              ›
            </span>
          </a>
        </FadeUp>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 48 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.45, ease }}
        className="relative mx-auto mt-20 w-[290px] md:mt-24"
      >
        <div
          className="rounded-[3rem] border border-white/15 bg-surface-elevated p-2.5"
          style={{
            boxShadow:
              "0 30px 80px rgba(0,0,0,0.6), 0 0 60px rgba(255,0,255,0.12), 0 0 90px rgba(0,255,255,0.08)",
          }}
        >
          <div className="overflow-hidden rounded-[2.4rem] bg-background">
            <div className="px-6 pb-10 pt-5">
              <div className="mx-auto mb-7 h-6 w-24 rounded-full bg-surface-elevated" />

              <p className="text-xs text-muted">Today&apos;s session</p>
              <p className="mt-1 text-3xl font-semibold tracking-tight text-foreground">
                14 tricks
              </p>
              <p className="mt-0.5 text-xs text-muted">
                Best session this month
              </p>

              <div className="mt-6 space-y-2">
                {[
                  { name: "Kickflip", note: "Clean" },
                  { name: "Heelflip", note: "Landed" },
                  { name: "Tre flip", note: "New" },
                ].map((trick) => (
                  <div
                    key={trick.name}
                    className="flex items-center justify-between rounded-2xl bg-surface px-4 py-3"
                  >
                    <span className="text-sm font-medium text-foreground">
                      {trick.name}
                    </span>
                    <span
                      className={`text-xs ${
                        trick.note === "New" ? "text-accent" : "text-muted"
                      }`}
                    >
                      {trick.note}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <div className="mb-2 flex items-baseline justify-between">
                  <span className="text-xs font-medium text-foreground">
                    Goal · Hardflip
                  </span>
                  <span className="text-xs text-muted">80%</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-surface">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "80%" }}
                    transition={{ duration: 1.2, delay: 1.1, ease }}
                    className="h-full rounded-full bg-gradient-to-r from-accent-button to-accent"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
