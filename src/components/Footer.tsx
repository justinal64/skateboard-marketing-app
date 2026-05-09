"use client";

export default function Footer() {
  return (
    <footer className="px-6 py-12" style={{ borderTop: "1px solid #2A2A4A" }}>
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <span
            className="text-2xl font-black tracking-widest text-primary"
            style={{ textShadow: "0 0 12px rgba(255,0,255,0.7)" }}
          >
            BOLTS
          </span>
          <div className="flex gap-8 text-sm font-semibold uppercase tracking-widest text-text-dim opacity-60">
            {["Features", "How It Works", "Privacy", "Contact"].map((link) => (
              <a
                key={link}
                href="#"
                className="transition-colors hover:opacity-100"
                style={{ color: "inherit" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color =
                    "#00FFFF")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color =
                    "inherit")
                }
              >
                {link}
              </a>
            ))}
          </div>
          <p className="text-sm text-text-dim opacity-30">
            &copy; {new Date().getFullYear()} Bolts. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
