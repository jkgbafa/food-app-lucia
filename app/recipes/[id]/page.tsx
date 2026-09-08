import Link from "next/link";
import { notFound } from "next/navigation";
import { RECIPES } from "@/lib/data";
import Checklist from "@/components/Checklist";

export function generateStaticParams() {
  return RECIPES.map((r) => ({ id: r.id }));
}

export default async function RecipePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const recipe = RECIPES.find((r) => r.id === id);
  if (!recipe) notFound();

  return (
    <div>
      <Link href="/" className="mb-3 inline-flex items-center gap-1 text-[15px] font-medium text-accent">
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 6l-6 6 6 6" />
        </svg>
        Recipes
      </Link>

      <div
        className="flex h-44 items-center justify-center rounded-3xl text-7xl"
        style={{ background: `linear-gradient(135deg, ${recipe.colors[0]}, ${recipe.colors[1]})` }}
      >
        {recipe.emoji}
      </div>

      <h1 className="mt-4 text-[28px] font-bold leading-tight tracking-tight">{recipe.title}</h1>
      <div className="mt-2 flex flex-wrap items-center gap-1.5">
        {recipe.tags.map((t) => (
          <span key={t} className="rounded-full bg-fill px-2.5 py-1 text-[12px] font-medium text-muted">
            {t}
          </span>
        ))}
        {recipe.ig && (
          <a
            href={recipe.ig}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-foreground px-2.5 py-1 text-[12px] font-semibold text-white"
          >
            Original post ↗
          </a>
        )}
      </div>

      {recipe.note && (
        <div className="mt-4 rounded-2xl bg-amber-100 p-4 text-[14px] font-medium text-amber-900">
          💡 {recipe.note}
        </div>
      )}

      {recipe.ingredients.map((group) => (
        <section key={group.label} className="mt-4 rounded-3xl border border-black/10 bg-card p-4">
          <h2 className="mb-1 text-[17px] font-semibold">{group.label}</h2>
          <Checklist items={group.items} />
        </section>
      ))}

      <section className="mt-4 rounded-3xl border border-black/10 bg-card p-4">
        <h2 className="mb-2 text-[17px] font-semibold">Method</h2>
        <ol className="space-y-3">
          {recipe.steps.map((step, i) => (
            <li key={i} className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-[13px] font-bold text-white">
                {i + 1}
              </span>
              <span className="text-[15px] leading-relaxed">{step}</span>
            </li>
          ))}
        </ol>
      </section>

      <p className="mt-4 rounded-2xl bg-red-50 p-4 text-[13px] font-medium text-danger">
        🚨 Always seafood-free: check every sauce label for fish sauce, oyster extract or shrimp paste.
      </p>
    </div>
  );
}
