import Link from "next/link";
import { notFound } from "next/navigation";
import { RECIPES } from "@/lib/data";
import { BASE } from "@/lib/base";
import Checklist from "@/components/Checklist";

export function generateStaticParams() {
  return RECIPES.map((r) => ({ id: r.id }));
}

export default async function RecipePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const recipe = RECIPES.find((r) => r.id === id);
  if (!recipe) notFound();

  const ingredientCount = recipe.ingredients.reduce((n, g) => n + g.items.length, 0);

  return (
    <div>
      <Link
        href="/"
        aria-label="Back to recipes"
        className="mb-4 mt-2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-fill"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-foreground" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M11 6l-6 6 6 6" />
        </svg>
      </Link>

      <img src={`${BASE}/photos/${recipe.id}.jpg`} alt={recipe.title} className="h-60 w-full rounded-3xl object-cover" />

      <h1 className="mt-4 text-[24px] font-semibold leading-tight tracking-tight">{recipe.title}</h1>
      <p className="mt-1 text-[14px] text-muted">
        {ingredientCount} ingredients · {recipe.steps.length} step{recipe.steps.length === 1 ? "" : "s"} · {recipe.tags.join(" · ")}
      </p>
      {recipe.ig && (
        <a
          href={recipe.ig}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-block cursor-pointer rounded-full bg-foreground px-4 py-2 text-[13px] font-semibold text-white"
        >
          View original post
        </a>
      )}

      {recipe.note && (
        <div className="mt-5 rounded-2xl bg-fill p-4">
          <p className="text-[12px] font-semibold uppercase tracking-wide text-muted">Note</p>
          <p className="mt-1 text-[14px] leading-relaxed">{recipe.note}</p>
        </div>
      )}

      {recipe.shopNote && (
        <div className="mt-3 rounded-2xl bg-fill p-4">
          <p className="text-[12px] font-semibold uppercase tracking-wide text-muted">Shopping in Accra</p>
          <p className="mt-1 text-[14px] leading-relaxed">{recipe.shopNote}</p>
        </div>
      )}

      {recipe.ingredients.map((group) => (
        <section key={group.label} className="mt-5">
          <h2 className="mb-1 text-[17px] font-semibold">{group.label}</h2>
          <Checklist items={group.items} />
        </section>
      ))}

      <section className="mt-6">
        <h2 className="mb-3 text-[17px] font-semibold">Method</h2>
        <ol className="space-y-4">
          {recipe.steps.map((step, i) => (
            <li key={i} className="flex gap-3.5">
              <span className="mt-0.5 text-[14px] font-semibold text-muted">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-[15px] leading-relaxed">{step}</span>
            </li>
          ))}
        </ol>
      </section>

    </div>
  );
}
