import LegalLayout from "@/components/LegalLayout";

const sections = [
  {
    heading: "1. Acceptance of Terms",
    body: "By downloading, installing, or using the BOLTS app or this website, you agree to be bound by these Terms of Service. If you do not agree, do not use BOLTS. These Terms apply to all users, including waitlist registrants and app users.",
  },
  {
    heading: "2. Eligibility",
    body: "You must be at least 13 years old to use BOLTS. By using the app, you represent that you meet this age requirement. If you are between 13 and 18, you represent that your parent or legal guardian has reviewed and agreed to these Terms on your behalf.\n\nBOLTS is available to users worldwide, subject to applicable local laws. You are responsible for ensuring your use of the app complies with the laws of your jurisdiction.",
  },
  {
    heading: "3. User Accounts",
    body: "You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. You agree to provide accurate information when creating your account and to keep it up to date.\n\nWe reserve the right to suspend or terminate accounts that violate these Terms, are inactive for an extended period, or for any other reason at our discretion with or without notice. You may delete your account at any time from within the app under Settings → Account → Delete Account.",
  },
  {
    heading: "4. Acceptable Use",
    body: "You agree not to:\n\n— Attempt to reverse engineer, decompile, or extract the source code of BOLTS\n— Scrape, crawl, or systematically access data from the app or its APIs\n— Use BOLTS to transmit harmful, unlawful, abusive, or fraudulent content\n— Attempt to gain unauthorized access to other users' accounts or our systems\n— Interfere with or disrupt the integrity or performance of the app or its infrastructure\n— Use the app in any way that violates applicable local, state, national, or international law\n\nWe reserve the right to terminate access for any user who violates these rules.",
  },
  {
    heading: "5. User-Generated Content",
    body: "You own the content you create in BOLTS, including your trick logs, session notes, and any other data you enter. By using the app, you grant us a limited, non-exclusive license to store and process that content solely for the purpose of providing the service to you.\n\nWe do not claim ownership of your content and will not use it for any purpose beyond operating BOLTS.",
  },
  {
    heading: "6. Intellectual Property",
    body: "All rights in the BOLTS app — including its design, code, branding, trick library, and all other original content — are owned by Bolts and protected by applicable intellectual property laws. Nothing in these Terms transfers any ownership rights to you.\n\nYou are granted a limited, non-exclusive, non-transferable, revocable license to use BOLTS for your personal, non-commercial purposes.",
  },
  {
    heading: "7. Physical Activity Disclaimer",
    body: "Skateboarding is a physical activity that carries inherent risk of injury. BOLTS is a tracking and logging tool — it does not provide coaching, safety instruction, or professional advice of any kind. Nothing in the app should be interpreted as a recommendation to attempt any trick or activity beyond your skill level.\n\nYou assume full responsibility for your physical safety when skateboarding. Always skate within your abilities, wear appropriate protective gear, and follow all applicable rules at your skate location. We are not liable for any injury, accident, or harm resulting from your skateboarding activities.",
  },
  {
    heading: "8. Disclaimers",
    body: 'BOLTS is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that the app will be uninterrupted, error-free, or free of viruses or other harmful components. We make no warranty regarding the accuracy or completeness of any content in the app.\n\nTo the fullest extent permitted by law, we disclaim all implied warranties, including warranties of merchantability, fitness for a particular purpose, and non-infringement.',
  },
  {
    heading: "9. Limitation of Liability",
    body: "To the fullest extent permitted by applicable law, Bolts and its owners, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of BOLTS, even if we have been advised of the possibility of such damages.\n\nOur total liability to you for any claim arising out of these Terms or your use of the app shall not exceed the amount you paid us in the twelve months preceding the claim (or $10 if you have not made any payments).",
  },
  {
    heading: "10. Governing Law",
    body: "These Terms are governed by and construed in accordance with the laws of the State of Tennessee, without regard to its conflict of law principles. Any disputes arising under these Terms shall be resolved exclusively in the state or federal courts located in Tennessee, and you consent to personal jurisdiction in those courts.",
  },
  {
    heading: "11. Changes to Terms",
    body: "We may update these Terms from time to time. When we do, we will update the effective date at the top of this page. If changes are material, we will notify you by email or with an in-app notice. Your continued use of BOLTS after changes are posted constitutes your acceptance of the updated Terms.",
  },
  {
    heading: "12. Contact",
    body: "If you have questions about these Terms, please contact us via our Support page or email us directly.",
  },
];

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      effectiveDate="May 19, 2026"
      intro="These Terms of Service govern your use of the BOLTS skateboarding app and this website, operated by Bolts. Please read them carefully before using BOLTS."
      sections={sections}
    />
  );
}
