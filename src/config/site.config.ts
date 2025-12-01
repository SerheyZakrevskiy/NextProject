import { Content } from "next/font/google";

export const siteConfig = {
  title: "RecipeHub",
  description: `RecipeHub — create, save, and share recipes with others.`,
  navItems: [
    { href: "/", label: "Recipes" },
    { href: "/ingredients", label: "Ingredients" },
    { href: "/about", label: "Us" },
  ],
  pagesContent: {
    "/": {
      content: "",
    },
    "/ingredients": {
      content: "",
    },
    "/about": {
      content: `<header className="mx-auto max-w-5xl px-4 pt-16 pb-10">
  <h1 className="text-4xl md-text-5xl font-bold tracking-tight">
    About RecipeHub
  </h1>

  <p className="mt-4 text-base md:text-lg text-neutral-600 leading-relaxed max-w-2xl">
    RecipeHub is a simple place to create, save, and share recipes — so your best meals never get lost.
  </p>

  <div className="mt-8 grid gap-3 sm:grid-cols-3">
    <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
      <p className="text-sm text-neutral-700">
        <span className="font-semibold text-neutral-900">Save</span> your recipes in one clean library
      </p>
    </div>
    <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
      <p className="text-sm text-neutral-700">
        <span className="font-semibold text-neutral-900">Share</span> them with the community in seconds
      </p>
    </div>
    <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
      <p className="text-sm text-neutral-700">
        <span className="font-semibold text-neutral-900">Discover</span> new ideas from other cooks
      </p>
    </div>
  </div>
</header>

<main className="mx-auto max-w-5xl px-4 pb-20">
  <section className="mt-2 rounded-3xl border border-neutral-200 bg-white p-6 md:p-8 shadow-sm">
    <h2 className="text-2xl font-semibold tracking-tight">Our Mission</h2>
    <p className="mt-3 text-neutral-700 leading-relaxed">
      We believe cooking should feel easy and inspiring — not chaotic. RecipeHub was built to help you keep
      everything organized: ingredients, steps, notes, and the little tricks that make a recipe truly yours.
    </p>
    <p className="mt-3 text-neutral-700 leading-relaxed">
      Whether it’s a 10-minute breakfast or a dish you perfect for years, RecipeHub gives your recipes a home
      you can return to anytime.
    </p>
  </section>

  <section className="mt-10">
    <h2 className="text-2xl font-semibold tracking-tight">What You Can Do</h2>

    <div className="mt-4 grid gap-4 md:grid-cols-2">
      <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold">Create</h3>
        <p className="mt-2 text-neutral-700 leading-relaxed">
          Write recipes with clear ingredients and steps, so they’re easy to repeat.`,
    },
  },
};
