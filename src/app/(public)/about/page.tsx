import PageContent from "@/components/common/page-content";

const AboutPage = () => {
  return (
    <div>
      <PageContent />
      <main className="mx-auto max-w-4xl px-4 py-12">
        <header className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight">About RecipeHub</h1>
          <p className="mt-4 text-neutral-600 leading-relaxed">
            RecipeHub is a simple place to create, save, and share recipes — so
            your best meals never get lost.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p className="text-neutral-700 leading-relaxed">
            We want cooking to feel clear and enjoyable. RecipeHub helps you
            keep recipes organized in one place: ingredients, steps, and notes —
            all easy to revisit anytime.
          </p>

          <h2 className="pt-6 text-2xl font-semibold">What You Can Do</h2>
          <ul className="list-disc pl-6 text-neutral-700 space-y-2">
            <li>Create your own recipes with ingredients and instructions</li>
            <li>Save your favorites and access them anytime</li>
            <li>Share recipes with other people</li>
            <li>Explore new ideas from the community</li>
          </ul>

          <h2 className="pt-6 text-2xl font-semibold">Who Built It</h2>
          <p className="text-neutral-700 leading-relaxed">
            RecipeHub is developed by{" "}
            <span className="font-semibold text-neutral-900">Sergiliy</span> •{" "}
            <span className="text-neutral-600">01.12.2025</span>
          </p>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
