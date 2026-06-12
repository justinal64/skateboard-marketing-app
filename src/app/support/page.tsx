import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function SupportPage() {
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
          Support
        </h1>
        <p className="mb-12 text-sm text-muted">We&apos;re here to help.</p>

        <div className="space-y-12">
          <section>
            <h2 className="mb-3 text-xl font-semibold tracking-tight text-foreground">
              Contact us
            </h2>
            <p className="leading-relaxed text-muted">
              Have a question, bug report, or feedback? Reach us at{" "}
              <a
                href="mailto:support@boltsapp.com"
                className="text-accent transition-opacity hover:opacity-80"
              >
                support@boltsapp.com
              </a>
              . We aim to respond within 2 business days.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold tracking-tight text-foreground">
              Remove me from the waitlist
            </h2>
            <p className="leading-relaxed text-muted">
              To remove your email from our waitlist or delete any personal data
              we hold, email us at{" "}
              <a
                href="mailto:support@boltsapp.com"
                className="text-accent transition-opacity hover:opacity-80"
              >
                support@boltsapp.com
              </a>{" "}
              with the subject line &quot;Delete my data.&quot; We will process
              your request within 30 days.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold tracking-tight text-foreground">
              Delete your account
            </h2>
            <p className="leading-relaxed text-muted">
              Once BOLTS launches, you can delete your account and all
              associated data directly from the app under{" "}
              <span className="font-medium text-foreground">
                Settings → Account → Delete Account
              </span>
              . You can also email{" "}
              <a
                href="mailto:support@boltsapp.com"
                className="text-accent transition-opacity hover:opacity-80"
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
