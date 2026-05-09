export default function Nav() {
  return (
    <nav
      className="fixed top-0 z-50 w-full backdrop-blur-md"
      style={{
        backgroundColor: "rgba(13,13,37,0.85)",
        borderBottom: "1px solid #2A2A4A",
        boxShadow: "0 0 20px rgba(0,255,255,0.08)",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <span
          className="text-2xl font-black tracking-widest text-primary"
          style={{ textShadow: "0 0 12px rgba(255,0,255,0.7)" }}
        >
          BOLTS
        </span>
        <ul className="hidden gap-8 text-sm font-semibold uppercase tracking-widest text-text-dim md:flex">
          <li>
            <a href="#features" className="transition-colors hover:text-secondary">
              Features
            </a>
          </li>
          <li>
            <a href="#how-it-works" className="transition-colors hover:text-secondary">
              How It Works
            </a>
          </li>
          <li>
            <a href="#team" className="transition-colors hover:text-secondary">
              Team
            </a>
          </li>
        </ul>
        <a
          href="#waitlist"
          className="rounded-full px-5 py-2 text-sm font-bold uppercase tracking-widest text-background transition-all"
          style={{
            backgroundColor: "#00FFFF",
            boxShadow: "0 0 14px rgba(0,255,255,0.5)",
          }}
        >
          Join Waitlist
        </a>
      </div>
    </nav>
  );
}
