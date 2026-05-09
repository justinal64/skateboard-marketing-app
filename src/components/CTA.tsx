"use client";

export default function CTA() {
  return (
    <section id="waitlist" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div
          className="relative overflow-hidden rounded-3xl px-10 py-20 text-center"
          style={{
            background:
              "linear-gradient(135deg, #1c0530 0%, #0D0D25 50%, #051c1a 100%)",
            border: "1px solid rgba(255,0,255,0.25)",
            boxShadow:
              "0 0 60px rgba(255,0,255,0.08), inset 0 0 60px rgba(0,255,255,0.04)",
          }}
        >
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(255,0,255,0.14) 0%, rgba(0,255,255,0.06) 50%, transparent 70%)",
            }}
          />

          <div
            className="relative mb-4 inline-block rounded-xl border-2 px-4 py-1.5"
            style={{
              borderColor: "#FF00FF",
              backgroundColor: "rgba(255,0,255,0.08)",
              boxShadow: "0 0 12px rgba(255,0,255,0.25)",
            }}
          >
            <p
              className="text-sm font-black uppercase tracking-widest"
              style={{
                color: "#FFCCFF",
                textShadow: "0 0 8px rgba(255,0,255,0.8)",
              }}
            >
              Early Access
            </p>
          </div>

          <h2
            className="relative mb-4 text-4xl font-black tracking-tight md:text-6xl"
            style={{ textShadow: "0 0 30px rgba(255,0,255,0.2)" }}
          >
            Be First to Drop In
          </h2>
          <p className="relative mx-auto mb-10 max-w-lg text-lg text-text-dim opacity-80">
            BOLTS is launching soon on iOS and Android. Join the waitlist and
            get notified the moment it drops — plus early access perks.
          </p>

          <form
            className="relative mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 rounded-full px-5 py-3 text-sm text-white placeholder-text-dim/40 outline-none transition-all"
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid #2A2A4A",
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "#00FFFF";
                e.currentTarget.style.boxShadow =
                  "0 0 14px rgba(0,255,255,0.25)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "#2A2A4A";
                e.currentTarget.style.boxShadow = "none";
              }}
            />
            <button
              type="submit"
              className="rounded-full px-6 py-3 text-sm font-bold uppercase tracking-widest text-background transition-all"
              style={{
                backgroundColor: "#FF00FF",
                boxShadow: "0 0 18px rgba(255,0,255,0.5)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 28px rgba(255,0,255,0.75)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 18px rgba(255,0,255,0.5)";
              }}
            >
              Notify Me
            </button>
          </form>

          <p className="relative mt-6 text-xs text-text-dim opacity-40">
            No spam. Just a ping when we launch.
          </p>
        </div>
      </div>
    </section>
  );
}
