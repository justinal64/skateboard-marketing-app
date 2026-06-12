import Reveal from "@/components/Reveal";

const features = [
  {
    eyebrow: "Trick logger",
    title: "Every trick you land, remembered.",
    description:
      "Tap to log any trick after your session. Tag it by type, difficulty, and spot — your whole bag, in one place.",
    span: "md:col-span-2",
    accent: "text-[#ff5cff]",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
  },
  {
    eyebrow: "Progress",
    title: "See yourself getting better.",
    description:
      "Streaks, milestones, and a full history of every session — over days, weeks, and months.",
    span: "",
    accent: "text-accent",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 17l6-6 4 4 8-8" />
        <path d="M14 7h7v7" />
      </svg>
    ),
  },
  {
    eyebrow: "Goals",
    title: "Pick a trick. Land it.",
    description:
      "Set your next trick as a goal and BOLTS walks you through it — tips, checkpoints, and a celebration when you roll away.",
    span: "",
    accent: "text-accent",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="12" cy="12" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    eyebrow: "Stats",
    title: "Your skating, by the numbers.",
    description:
      "Total tricks landed, favorite spots, best streak, and a breakdown of every category in your arsenal.",
    span: "md:col-span-2",
    accent: "text-[#ff5cff]",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 20V10" />
        <path d="M12 20V4" />
        <path d="M19 20v-7" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="mb-3 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            Get to know BOLTS.
          </h2>
          <p className="mb-12 max-w-xl text-lg text-muted">
            Everything you need to level up, nothing you don&apos;t.
          </p>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal
              key={feature.eyebrow}
              delay={i * 0.08}
              className={feature.span}
            >
              <div className="h-full rounded-[1.75rem] border border-hairline/60 bg-surface p-8 md:p-10">
                <div className={`mb-6 ${feature.accent}`}>{feature.icon}</div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted">
                  {feature.eyebrow}
                </p>
                <h3
                  className={`mb-3 max-w-md text-2xl font-semibold tracking-tight text-foreground ${
                    feature.span ? "md:text-3xl" : ""
                  }`}
                >
                  {feature.title}
                </h3>
                <p className="max-w-md leading-relaxed text-muted">
                  {feature.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
