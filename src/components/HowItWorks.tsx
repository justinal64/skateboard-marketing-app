const steps = [
  {
    number: "01",
    title: "Download BOLTS",
    description: "Available on iOS and Android. Free to download, no account required to start.",
    color: "#FF00FF",
    glow: "rgba(255,0,255,0.4)",
  },
  {
    number: "02",
    title: "Log Your Session",
    description: "After each session, tap the tricks you landed. Takes under a minute.",
    color: "#00FFFF",
    glow: "rgba(0,255,255,0.4)",
  },
  {
    number: "03",
    title: "Set Your Next Goal",
    description: "Pick a trick you want to learn. BOLTS tracks your attempts and celebrates the land.",
    color: "#FF00FF",
    glow: "rgba(255,0,255,0.4)",
  },
  {
    number: "04",
    title: "Watch Yourself Grow",
    description: "Your stats build over time — see streaks, milestones, and how your trick library expands.",
    color: "#00FFFF",
    glow: "rgba(0,255,255,0.4)",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="px-6 py-24"
      style={{ borderTop: "1px solid #2A2A4A" }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <div
            className="mb-3 inline-block rounded-xl border-2 px-4 py-1"
            style={{
              borderColor: "#00FFFF",
              backgroundColor: "rgba(0,255,255,0.07)",
              boxShadow: "0 0 10px rgba(0,255,255,0.2)",
            }}
          >
            <p
              className="text-sm font-black uppercase tracking-widest"
              style={{
                color: "#CCFFFF",
                textShadow: "0 0 8px rgba(0,255,255,0.8)",
              }}
            >
              How It Works
            </p>
          </div>
          <h2 className="text-4xl font-black tracking-tight text-foreground md:text-5xl">
            Simple as Dropping In
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {i < steps.length - 1 && (
                <div
                  className="absolute left-[calc(50%+2rem)] top-6 hidden h-px w-full md:block"
                  style={{
                    background: `linear-gradient(90deg, ${step.color}40, transparent)`,
                  }}
                />
              )}
              <div
                className="mb-4 text-5xl font-black"
                style={{
                  color: step.color,
                  textShadow: `0 0 20px ${step.glow}`,
                }}
              >
                {step.number}
              </div>
              <h3 className="mb-2 text-lg font-bold text-foreground">{step.title}</h3>
              <p className="text-sm leading-relaxed text-text-dim opacity-70">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
