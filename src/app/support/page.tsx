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
            <p className="leading-relaxed text-text-dim opacity-80">
              Have a question, bug report, or feedback? Reach us at{" "}
              <a
                href="mailto:support@boltsapp.com"
                className="font-semibold transition-colors"
                style={{ color: "#00FFFF" }}
              >
                support@boltsapp.com
              </a>
              . We aim to respond within 2 business days.
            </p>
          </section>

          <section>
            <h2
              className="mb-3 text-lg font-bold uppercase tracking-widest"
              style={{ color: "#00FFFF" }}
            >
              Remove Me from the Waitlist
            </h2>
            <p className="leading-relaxed text-text-dim opacity-80">
              To remove your email from our waitlist or delete any personal data
              we hold, email us at{" "}
              <a
                href="mailto:support@boltsapp.com"
                className="font-semibold transition-colors"
                style={{ color: "#00FFFF" }}
              >
                support@boltsapp.com
              </a>{" "}
              with the subject line &quot;Delete my data.&quot; We will process
              your request within 30 days.
            </p>
          </section>

          <section>
            <h2
              className="mb-3 text-lg font-bold uppercase tracking-widest"
              style={{ color: "#00FFFF" }}
            >
              Delete Your Account
            </h2>
            <p className="leading-relaxed text-text-dim opacity-80">
              Once BOLTS launches, you can delete your account and all
              associated data directly from the app under{" "}
              <span className="font-semibold text-foreground">
                Settings → Account → Delete Account
              </span>
              . You can also email{" "}
              <a
                href="mailto:support@boltsapp.com"
                className="font-semibold transition-colors"
                style={{ color: "#00FFFF" }}
              >
                support@boltsapp.com
              </a>{" "}
              to request deletion at any time.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
