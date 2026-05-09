"use client";

const features = [
  {
    id: 1,
    icon: "🛹",
    title: "Trick Logger",
    description:
      "Tap to log any trick you land. Tag it by type, difficulty, and location. Never lose track of what you've learned.",
    accentColor: "#FF00FF",
    accentGlow: "rgba(255,0,255,0.3)",
    borderHover: "rgba(255,0,255,0.6)",
    glowHover: "0 8px 32px rgba(255,0,255,0.35)",
  },
  {
    id: 2,
    icon: "📈",
    title: "Progress Tracking",
    description:
      "See your growth over days, weeks, and months. Streaks, milestones, and a full history of every session.",
    accentColor: "#00FFFF",
    accentGlow: "rgba(0,255,255,0.25)",
    borderHover: "rgba(0,255,255,0.5)",
    glowHover: "0 8px 32px rgba(0,255,255,0.25)",
  },
  {
    id: 3,
    icon: "🎯",
    title: "Goal Setting",
    description:
      "Set a trick as your next goal and BOLTS walks you through it — tips, checkpoints, and a celebration when you land it.",
    accentColor: "#00FFFF",
    accentGlow: "rgba(0,255,255,0.25)",
    borderHover: "rgba(0,255,255,0.5)",
    glowHover: "0 8px 32px rgba(0,255,255,0.25)",
  },
  {
    id: 4,
    icon: "📊",
    title: "Personal Stats",
    description:
      "Your total tricks landed, favorite spots, best streak, and a breakdown of every category in your arsenal.",
    accentColor: "#FF00FF",
    accentGlow: "rgba(255,0,255,0.2)",
    borderHover: "rgba(255,0,255,0.5)",
    glowHover: "0 8px 32px rgba(255,0,255,0.2)",
  },
];

export default function Features() {
  return (
    <section id="features" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <div
            className="mb-3 inline-block rounded-xl border-2 px-4 py-1"
            style={{
              borderColor: "#FF00FF",
              backgroundColor: "rgba(255,0,255,0.08)",
              boxShadow: "0 0 10px rgba(255,0,255,0.2)",
            }}
          >
            <p
              className="text-sm font-black uppercase tracking-widest"
              style={{
                color: "#FFCCFF",
                textShadow: "0 0 8px rgba(255,0,255,0.7)",
              }}
            >
              Features
            </p>
          </div>
          <h2 className="text-4xl font-black tracking-tight text-foreground md:text-5xl">
            Everything You Need to Level Up
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group relative cursor-default overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1"
              style={{ backgroundColor: "#1A1A3A", borderColor: "#2A2A4A" }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = feature.borderHover;
                el.style.boxShadow = feature.glowHover;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "#2A2A4A";
                el.style.boxShadow = "none";
              }}
            >
              <div
                className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl text-2xl"
                style={{
                  backgroundColor: `${feature.accentColor}18`,
                  boxShadow: `0 0 16px ${feature.accentGlow}`,
                }}
              >
                {feature.icon}
              </div>
              <h3
                className="mb-2 text-lg font-bold text-foreground"
              >
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-dim opacity-70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
