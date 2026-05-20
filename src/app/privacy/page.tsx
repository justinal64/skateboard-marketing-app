import LegalLayout from "@/components/LegalLayout";

const sections = [
  {
    heading: "1. Information We Collect",
    body: "We collect the following information when you sign up for our waitlist or create an account: your first name, last name, and email address. We do not collect device identifiers, location data, payment information, or any other personal information at this time.",
  },
  {
    heading: "2. How We Use Your Information",
    body: "We use your name and email address solely to notify you when BOLTS launches and to send you updates about the app. We will not send you marketing emails unrelated to BOLTS, and you can unsubscribe at any time by contacting us.",
  },
  {
    heading: "3. Data Sharing",
    body: "We do not sell, rent, or share your personal information with third parties for their own marketing purposes. Your data is stored securely using Google Firebase (Firestore), a cloud database service. Firebase processes data in accordance with Google's privacy and security standards. No other third parties have access to your personal information.",
  },
  {
    heading: "4. Data Retention",
    body: "We retain your information for as long as you remain on our waitlist or have an active account. You may request deletion of your data at any time by contacting us at the email address below. We will delete your information within 30 days of receiving your request.",
  },
  {
    heading: "5. Your Rights",
    body: "You have the right to access, correct, or delete the personal information we hold about you. If you are located in California, you have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what data we collect and the right to opt out of any sale of your data (we do not sell your data). If you are located in the EU or UK, you have rights under the GDPR including access, rectification, erasure, and data portability. To exercise any of these rights, please contact us.",
  },
  {
    heading: "6. Children's Privacy",
    body: "BOLTS is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us immediately and we will delete it.",
  },
  {
    heading: "7. Security",
    body: "We take reasonable technical and organizational measures to protect your personal information against unauthorized access, loss, or misuse. Your data is stored in Google Firebase, which uses industry-standard encryption in transit and at rest.",
  },
  {
    heading: "8. Changes to This Policy",
    body: "We may update this Privacy Policy from time to time. When we do, we will revise the effective date at the top of this page. If changes are material, we will notify you by email using the address you provided. Continued use of BOLTS after changes are posted constitutes your acceptance of the updated policy.",
  },
  {
    heading: "9. Contact Us",
    body: "If you have questions about this Privacy Policy or want to exercise your data rights, please contact us via our Support page.",
  },
];

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      effectiveDate="May 19, 2026"
      intro={'Bolts ("we," "our," or "us") operates the BOLTS skateboarding app and this marketing website. This Privacy Policy explains what personal information we collect, how we use it, and your rights regarding that information. By using our site or app, you agree to the practices described here.'}
      sections={sections}
    />
  );
}
