import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function SupportPage() {
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
          Support
        </h1>
        <p className="mb-12 text-sm text-text-dim opacity-50">
          We&apos;re here to help.
        </p>

        <div className="space-y-10">
          <section>
            <h2
              className="mb-3 text-lg font-bold uppercase tracking-widest"
              style={{ color: "#00FFFF" }}
            >
              Contact Us
            </h2>
            <p className="mb-4 leading-relaxed text-text-dim opacity-80">
              [Placeholder — add a support email address or contact form here.]
            </p>
          </section>

          <section>
            <h2
              className="mb-3 text-lg font-bold uppercase tracking-widest"
              style={{ color: "#00FFFF" }}
            >
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "[Placeholder question 1]",
                  a: "[Placeholder answer 1]",
                },
                {
                  q: "[Placeholder question 2]",
                  a: "[Placeholder answer 2]",
                },
                {
                  q: "[Placeholder question 3]",
                  a: "[Placeholder answer 3]",
                },
              ].map((item, i) => (
                <div key={i}>
                  <p className="mb-1 font-semibold text-foreground">{item.q}</p>
                  <p className="leading-relaxed text-text-dim opacity-80">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2
              className="mb-3 text-lg font-bold uppercase tracking-widest"
              style={{ color: "#00FFFF" }}
            >
              Delete Your Account
            </h2>
            <p className="leading-relaxed text-text-dim opacity-80">
              [Placeholder — both app stores require a clear account deletion path. Describe how users can request deletion of their account and data.]
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
