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

      <div className="mx-auto max-w-3xl px-6 pb-28 pt-32">
        <Link
          href="/"
          className="mb-10 inline-block text-sm text-accent transition-opacity hover:opacity-80"
        >
          ‹ Back to home
        </Link>

        <h1 className="mb-2 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          {title}
        </h1>
        <p className="mb-12 text-sm text-muted">
          Effective date: {effectiveDate}
        </p>

        <p className="mb-12 leading-relaxed text-muted">{intro}</p>

        <div className="space-y-12">
          {sections.map((section, i) => (
            <section key={i}>
              <h2 className="mb-3 text-xl font-semibold tracking-tight text-foreground">
                {section.heading}
              </h2>
              <div className="space-y-3">
                {section.body.split("\n\n").map((para, j) => (
                  <p key={j} className="leading-relaxed text-muted">
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
