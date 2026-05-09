const riders = [
  {
    id: 1,
    name: 'Marcus "Grind" Rivera',
    specialty: "Street",
    hometown: "Los Angeles, CA",
    initials: "MR",
    avatarBg: "#FF00FF",
    avatarGlow: "0 0 20px rgba(255,0,255,0.6)",
    specialtyColor: "#FF00FF",
  },
  {
    id: 2,
    name: "Zoe Chen",
    specialty: "Park & Vert",
    hometown: "Portland, OR",
    initials: "ZC",
    avatarBg: "#00FFFF",
    avatarGlow: "0 0 20px rgba(0,255,255,0.6)",
    specialtyColor: "#00FFFF",
  },
  {
    id: 3,
    name: "Dev Okafor",
    specialty: "Transition",
    hometown: "Atlanta, GA",
    initials: "DO",
    avatarBg: "#00FF00",
    avatarGlow: "0 0 20px rgba(0,255,0,0.5)",
    specialtyColor: "#00FF00",
  },
];

export default function Team() {
  return (
    <section
      id="team"
      className="px-6 py-24"
      style={{ borderTop: "1px solid #2A2A4A" }}
    >
      <div className="mx-auto max-w-7xl">
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
            Riders
          </p>
        </div>
          <h2 className="mb-2 text-4xl font-black tracking-tight text-foreground md:text-5xl">
            Built With the Community
          </h2>
          <p className="mb-12 max-w-xl text-lg text-text-dim opacity-70">
            BOLTS was built alongside real skaters. These are the riders whose sessions, goals, and feedback shaped the app.
          </p>

        <div className="grid gap-8 md:grid-cols-3">
          {riders.map((rider) => (
            <div
              key={rider.id}
              className="group relative overflow-hidden rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: "#1A1A3A",
                borderColor: "#2A2A4A",
              }}
            >
              <div
                className="mb-6 flex h-20 w-20 items-center justify-center rounded-full text-2xl font-black text-background"
                style={{
                  backgroundColor: rider.avatarBg,
                  boxShadow: rider.avatarGlow,
                }}
              >
                {rider.initials}
              </div>
              <h3 className="text-xl font-bold text-foreground">{rider.name}</h3>
              <p
                className="mt-1 text-sm font-bold uppercase tracking-widest"
                style={{ color: rider.specialtyColor }}
              >
                {rider.specialty}
              </p>
              <p className="mt-1 text-sm text-text-dim opacity-60">
                {rider.hometown}
              </p>
              <a
                href="#"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest transition-colors"
                style={{ color: "#00FFFF" }}
              >
                View Trick Log
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
