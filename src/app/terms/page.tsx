import LegalLayout from "@/components/LegalLayout";

const sections = [
  {
    heading: "1. Acceptance of Terms",
    body: "[Placeholder — state that using the app constitutes agreement to these terms.]",
  },
  {
    heading: "2. Eligibility",
    body: "[Placeholder — describe minimum age requirements and any geographic restrictions.]",
  },
  {
    heading: "3. User Accounts",
    body: "[Placeholder — cover account creation, responsibility for credentials, and account termination.]",
  },
  {
    heading: "4. Acceptable Use",
    body: "[Placeholder — list prohibited behaviors: abuse, reverse engineering, scraping, harmful content, etc.]",
  },
  {
    heading: "5. Intellectual Property",
    body: "[Placeholder — clarify ownership of the app, content, and any user-generated content.]",
  },
  {
    heading: "6. Disclaimers",
    body: "[Placeholder — include warranty disclaimers and physical activity / safety disclaimers relevant to skateboarding.]",
  },
  {
    heading: "7. Limitation of Liability",
    body: "[Placeholder — cap your liability and exclude consequential damages to the extent permitted by law.]",
  },
  {
    heading: "8. Governing Law",
    body: "[Placeholder — specify the jurisdiction and governing law for disputes.]",
  },
  {
    heading: "9. Changes to Terms",
    body: "[Placeholder — describe how and when terms may change and how users will be notified.]",
  },
  {
    heading: "10. Contact",
    body: "[Placeholder — provide a contact email for terms-related questions.]",
  },
];

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      effectiveDate="[Date]"
      intro="[Placeholder — opening paragraph summarizing what these terms govern and who they apply to.]"
      sections={sections}
    />
  );
}
