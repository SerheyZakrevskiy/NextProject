export const runtime = "nodejs";

export default function PrivacyPage() {
  return (
    <div className="w-full max-w-[1024px] mx-auto px-6 py-8">
      <h1 className="text-2xl font-semibold mb-4">Privacy Policy</h1>

      <p className="mb-4">
        This page provides a short privacy notice for the educational project
        RecipeHub.
      </p>

      <p className="mb-4">
        Full text is available in the repository as{" "}
        <code>PRIVACY_POLICY.md</code>.
      </p>

      <ul className="list-disc pl-6">
        <li>Essential cookies are used for authentication/session.</li>
        <li>Preferences cookie stores your consent choice.</li>
      </ul>
    </div>
  );
}
