import Link from "next/link";

export default function Nav() {
  return (
    <nav
      className="fixed top-0 z-50 w-full border-b border-white/10 backdrop-blur-xl backdrop-saturate-150"
      style={{ backgroundColor: "rgba(13,13,37,0.72)" }}
    >
      <div className="mx-auto flex h-12 max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-sm font-semibold tracking-[0.18em] text-foreground transition-opacity hover:opacity-70"
        >
          BOLTS
        </Link>
        <ul className="hidden items-center gap-9 text-xs text-foreground/80 md:flex">
          <li>
            <a href="#features" className="transition-colors hover:text-foreground">
              Features
            </a>
          </li>
          <li>
            <a href="#how-it-works" className="transition-colors hover:text-foreground">
              How it works
            </a>
          </li>
          <li>
            <Link href="/support" className="transition-colors hover:text-foreground">
              Support
            </Link>
          </li>
        </ul>
        <a
          href="#waitlist"
          className="rounded-full bg-accent-button px-3.5 py-1.5 text-xs font-medium text-white shadow-[0_0_14px_rgba(255,0,255,0.3)] transition-colors hover:bg-accent-button-hover"
        >
          Join waitlist
        </a>
      </div>
    </nav>
  );
}
