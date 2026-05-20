import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

interface Section {
  heading: string;
  body: string;
}

interface LegalLayoutProps {
  title: string;
  effectiveDate: string;
  intro: string;
  sections: Section[];
}

export default function LegalLayout({
  title,
  effectiveDate,
  intro,
  sections,
}: LegalLayoutProps) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />

      <div className="mx-auto max-w-3xl px-6 pb-24 pt-32">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-text-dim opacity-60 transition-opacity hover:opacity-100"
        >
          ← Back to Home
        </Link>

        <h1
          className="mb-2 text-4xl font-black uppercase tracking-widest text-foreground"
          style={{ textShadow: "0 0 20px rgba(255,0,255,0.4)" }}
        >
          {title}
        </h1>
        <p className="mb-10 text-sm text-text-dim opacity-50">
          Effective date: {effectiveDate}
        </p>

        <p className="mb-10 leading-relaxed text-text-dim">{intro}</p>

        <div className="space-y-10">
          {sections.map((section, i) => (
            <section key={i}>
              <h2
                className="mb-3 text-lg font-bold uppercase tracking-widest"
                style={{ color: "#00FFFF" }}
              >
                {section.heading}
              </h2>
              <div className="space-y-3">
                {section.body.split("\n\n").map((para, j) => (
                  <p key={j} className="leading-relaxed text-text-dim opacity-80">
                    {para}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
