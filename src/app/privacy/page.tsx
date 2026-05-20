import LegalLayout from "@/components/LegalLayout";

const sections = [
  {
    heading: "1. Information We Collect",
    body: "[Placeholder — describe what data is collected: account info, usage data, device identifiers, location, etc.]",
  },
  {
    heading: "2. How We Use Your Information",
    body: "[Placeholder — explain how collected data is used: app functionality, analytics, communication, etc.]",
  },
  {
    heading: "3. Data Sharing",
    body: "[Placeholder — describe any third-party services (Firebase, analytics providers) and what data they receive.]",
  },
  {
    heading: "4. Data Retention",
    body: "[Placeholder — explain how long data is kept and the process for deletion.]",
  },
  {
    heading: "5. Your Rights",
    body: "[Placeholder — explain user rights: access, correction, deletion, opt-out. Include CCPA/GDPR notes as applicable.]",
  },
  {
    heading: "6. Children's Privacy",
    body: "[Placeholder — state your minimum age requirement and COPPA compliance stance.]",
  },
  {
    heading: "7. Security",
    body: "[Placeholder — describe the security measures in place to protect user data.]",
  },
  {
    heading: "8. Changes to This Policy",
    body: "[Placeholder — describe how users will be notified of policy changes.]",
  },
  {
    heading: "9. Contact Us",
    body: "[Placeholder — provide a contact email or link to the support page for privacy-related questions.]",
  },
];

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      effectiveDate="[Date]"
      intro="[Placeholder — brief opening paragraph explaining who you are, what this policy covers, and how to contact you with questions.]"
      sections={sections}
    />
  );
}
