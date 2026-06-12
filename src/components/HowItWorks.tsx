import Reveal from "@/components/Reveal";

const steps = [
  {
    number: "01",
    title: "Download BOLTS",
    description:
      "Available on iOS and Android. Free to download, no account required to start.",
  },
  {
    number: "02",
    title: "Log your session",
    description:
      "After each session, tap the tricks you landed. Takes under a minute.",
  },
  {
    number: "03",
    title: "Set your next goal",
    description:
      "Pick a trick you want to learn. BOLTS tracks your attempts and celebrates the land.",
  },
  {
    number: "04",
    title: "Watch yourself grow",
    description:
      "Your stats build over time — streaks, milestones, and an expanding trick library.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="mb-3 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            Simple as dropping in.
          </h2>
          <p className="mb-12 max-w-xl text-lg text-muted">
            From download to your first logged trick in minutes.
          </p>
        </Reveal>

        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 md:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.08}>
              <div className="border-t border-hairline pt-6">
                <p className="mb-4 text-sm font-medium text-accent">
                  {step.number}
                </p>
                <h3 className="mb-2 text-lg font-semibold tracking-tight text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
