export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,0,255,0.18) 0%, rgba(0,255,255,0.06) 50%, transparent 75%)",
        }}
      />

      <div className="relative z-10 max-w-4xl text-center">
        <div
          className="mb-6 inline-block rounded-xl border-2 px-4 py-1.5"
          style={{
            borderColor: "#00FFFF",
            backgroundColor: "rgba(0,255,255,0.07)",
            boxShadow: "0 0 14px rgba(0,255,255,0.25)",
          }}
        >
          <p
            className="text-sm font-black uppercase tracking-widest"
            style={{
              color: "#CCFFFF",
              textShadow: "0 0 10px rgba(0,255,255,0.8)",
            }}
          >
            Coming Soon — iOS & Android
          </p>
        </div>

        <h1 className="mb-6 text-6xl font-black leading-none tracking-tight md:text-8xl">
          TRACK EVERY{" "}
          <span
            className="text-primary"
            style={{ textShadow: "0 0 24px rgba(255,0,255,0.8)" }}
          >
            TRICK
          </span>
        </h1>
        <p className="mx-auto mb-10 max-w-xl text-lg text-text-dim">
          Log the tricks you land, track your progress over time, and set goals
          that push your skating forward. Built by skaters, for skaters.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#waitlist"
            className="w-full rounded-full px-8 py-4 text-base font-bold uppercase tracking-widest text-background transition-all sm:w-auto"
            style={{
              backgroundColor: "#FF00FF",
              boxShadow: "0 0 20px rgba(255,0,255,0.55)",
            }}
          >
            Join the Waitlist
          </a>
          <a
            href="#features"
            className="w-full rounded-full border-2 px-8 py-4 text-base font-bold uppercase tracking-widest transition-all sm:w-auto"
            style={{
              borderColor: "#00FFFF",
              color: "#00FFFF",
              boxShadow: "0 0 12px rgba(0,255,255,0.2)",
            }}
          >
            See Features
          </a>
        </div>

        <div className="mt-16 flex items-center justify-center gap-3 opacity-50">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-text-dim">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          <span className="text-xs font-semibold uppercase tracking-widest text-text-dim">App Store</span>
          <span className="text-text-dim opacity-40">·</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-text-dim">
            <path d="M3.18 23.76c.3.17.65.19.96.04l12.45-6.89-2.68-2.68-10.73 9.53zM.43 1.91C.16 2.24 0 2.72 0 3.34v17.32c0 .62.16 1.1.43 1.43l.07.07 9.7-9.7v-.23L.5 1.84l-.07.07zM20.13 9.37l-2.78-1.54-3.01 3.01 3.01 3.01 2.8-1.55c.8-.44.8-1.17-.02-1.93zM3.18.24L15.63 7.13l-2.68 2.68L2.22.28C2.53.13 2.88.07 3.18.24z"/>
          </svg>
          <span className="text-xs font-semibold uppercase tracking-widest text-text-dim">Google Play</span>
        </div>
      </div>

      <div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce"
        style={{ color: "#2A2A4A" }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
