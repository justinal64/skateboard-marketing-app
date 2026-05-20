import LegalLayout from "@/components/LegalLayout";

const sections = [
  {
    heading: "1. Information We Collect",
    body: "We collect the following categories of information:\n\nAccount Data: When you create an account, we collect your email address (used for authentication) and a display name you choose.\n\nUser-Generated Content: BOLTS stores the content you create while using the app, including trick progress status (not started, in progress, or completed) for each trick in our library, practice session logs containing attempt counts and any text notes you write, and your avatar color preference.\n\nUsage Data: Google Firebase, our backend platform, automatically collects certain analytics and crash/performance diagnostic data depending on which Firebase services are active. This may include information such as app session activity and error reports. We do not have direct control over the specific data points Firebase collects internally.\n\nWhat we do NOT collect: location data, contacts, camera or microphone access, payment information, or device identifiers beyond what the Firebase SDK collects internally as described above.",
  },
  {
    heading: "2. How We Use Your Information",
    body: "We use your account data to authenticate you and operate your BOLTS account. Your user-generated content (trick logs, session notes, avatar preference) is used solely to provide the app's core functionality — storing your progress and personalizing your experience. Usage and diagnostic data collected by Firebase is used to monitor app stability and improve performance. We do not use your data for advertising and we do not build advertising profiles.",
  },
  {
    heading: "3. Local Storage",
    body: "In addition to cloud storage, BOLTS caches your trick progress data locally on your device using AsyncStorage. This allows the app to function and display your data while offline. Local data is tied to your device and is separate from your cloud account. Uninstalling the app will remove locally cached data.",
  },
  {
    heading: "4. Third-Party Processors",
    body: "We use Google Firebase (including Firebase Authentication, Firestore, and Cloud Functions) to store and process your data. Firebase acts as our primary data processor and is governed by Google's Privacy Policy and Google's data processing terms. No other third parties receive your personal data.",
  },
  {
    heading: "5. Data Sharing",
    body: "We do not sell, rent, or share your personal information with any third parties for their own purposes. Data is shared with Google Firebase solely to operate the app as described in Section 4.",
  },
  {
    heading: "6. Data Retention and Deletion",
    body: "We retain your data for as long as your account is active. When you delete your account, all account data and user-generated content stored in Firebase Firestore is deleted. Note that Firebase may retain certain internal telemetry data (such as crash logs) for a limited period beyond account deletion, subject to Google's own retention policies. You can request deletion of your account at any time from within the app under Settings → Account → Delete Account, or by contacting us.",
  },
  {
    heading: "7. Your Rights",
    body: "You have the right to access, correct, export, or delete the personal information we hold about you. California residents have additional rights under the CCPA, including the right to know what data is collected and the right to opt out of any sale of personal data — we do not sell your data. EU and UK residents have rights under the GDPR including access, rectification, erasure, restriction, and data portability. To exercise any of these rights, please contact us via our Support page.",
  },
  {
    heading: "8. Children's Privacy",
    body: "BOLTS is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us immediately and we will delete it promptly.",
  },
  {
    heading: "9. Security",
    body: "All data transmitted between the app and Firebase is encrypted in transit using TLS. Data stored in Firebase Firestore is encrypted at rest by Google. We enforce authentication on all Firestore access so that users can only read and write their own data.",
  },
  {
    heading: "10. Changes to This Policy",
    body: "We may update this Privacy Policy from time to time. When we do, we will update the effective date at the top of this page. If changes are material, we will notify you by email. Continued use of BOLTS after an update constitutes acceptance of the revised policy.",
  },
  {
    heading: "11. Contact Us",
    body: "If you have questions about this Privacy Policy or wish to exercise your data rights, please visit our Support page or email us directly.",
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
