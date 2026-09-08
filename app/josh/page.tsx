"use client";

import { useState } from "react";
import { DONT_MAKE, VERY_SAFE, CATEGORIES, PANTRY, type Category } from "@/lib/data";

const MEAL_FILTERS = ["All", "Breakfast", "Lunch & Dinner", "Dessert"] as const;

function CategoryDetails({ cat }: { cat: Category }) {
  return (
    <details className="group border-b border-black/5 last:border-b-0">
      <summary className="flex cursor-pointer items-center gap-3 px-4 py-4 transition-colors duration-150 hover:bg-fill active:bg-fill">
        <span className="flex-1 text-[15px] font-semibold">{cat.title}</span>
        <svg viewBox="0 0 24 24" className="chevron h-4 w-4 fill-none stroke-black/30 transition-transform" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 6l6 6-6 6" />
        </svg>
      </summary>
      <div className="px-4 pb-5">
        {cat.intro && <p className="mb-2 text-[13px] leading-relaxed text-muted">{cat.intro}</p>}
        {cat.groups.map((group) => (
          <div key={group.label} className="mt-3.5">
            <h3
              className={`text-[12px] font-semibold uppercase tracking-wide ${
                group.label.startsWith("No") || group.label.startsWith("Generally avoids") ? "text-danger" : "text-muted"
              }`}
            >
              {group.label}
            </h3>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className={`rounded-full bg-fill px-3 py-1.5 text-[13px] ${
                    group.label.startsWith("No") || group.label.startsWith("Generally avoids")
                      ? "text-muted line-through"
                      : ""
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </details>
  );
}

function FlatCategory({ cat }: { cat: Category }) {
  return (
    <section className="mb-7">
      <h2 className="text-[17px] font-semibold">{cat.title}</h2>
      {cat.intro && <p className="mt-1 text-[13px] leading-relaxed text-muted">{cat.intro}</p>}
      {cat.groups.map((group) => (
        <div key={group.label} className="mt-3.5">
          <h3
            className={`text-[12px] font-semibold uppercase tracking-wide ${
              group.label.startsWith("No") || group.label.startsWith("Generally avoids") ? "text-danger" : "text-muted"
            }`}
          >
            {group.label}
          </h3>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {group.items.map((item) => (
              <span
                key={item}
                className={`rounded-full bg-fill px-3 py-1.5 text-[13px] ${
                  group.label.startsWith("No") || group.label.startsWith("Generally avoids")
                    ? "text-muted line-through"
                    : ""
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default function JoshPage() {
  const [meal, setMeal] = useState<(typeof MEAL_FILTERS)[number]>("All");
  const shown = CATEGORIES.filter(
    (c) =>
      meal === "All" ||
      (meal === "Lunch & Dinner"
        ? c.meals.includes("lunch") || c.meals.includes("dinner")
        : c.meals.includes(meal.toLowerCase() as never))
  );

  return (
    <div>
      <header className="mb-4 pt-4">
        <p className="text-[17px] text-muted">Made for Lucia</p>
        <h1 className="text-[26px] font-semibold leading-tight tracking-tight">Josh&apos;s Guide</h1>
      </header>

      <div className="scrollbar-none -mx-4 mb-5 flex gap-2 overflow-x-auto px-4 pb-1">
        {MEAL_FILTERS.map((f) => {
          const active = meal === f;
          return (
            <button
              key={f}
              onClick={() => setMeal(f)}
              className={`shrink-0 cursor-pointer rounded-full border px-4 py-2 text-[14px] font-medium transition-colors duration-200 ${
                active ? "border-foreground bg-foreground text-white" : "border-black/15 bg-white hover:border-black/30"
              }`}
            >
              {f}
            </button>
          );
        })}
      </div>

      {meal === "All" && (
        <section className="mb-6">
          <h2 className="text-[17px] font-semibold">Very safe choices</h2>
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {VERY_SAFE.map((item) => (
              <span key={item} className="rounded-full bg-fill px-3 py-1.5 text-[13px] font-medium">
                {item}
              </span>
            ))}
          </div>
        </section>
      )}

      {meal === "All" ? (
        <div className="overflow-hidden rounded-3xl border border-black/10">
          {shown.map((cat) => (
            <CategoryDetails key={cat.title} cat={cat} />
          ))}
        </div>
      ) : (
        <div>
          {shown.map((cat) => (
            <FlatCategory key={cat.title} cat={cat} />
          ))}
        </div>
      )}

      <h2 className="mb-3 mt-10 text-[20px] font-semibold tracking-tight">Ingredient bank</h2>
      <div className="overflow-hidden rounded-3xl border border-black/10">
        <CategoryDetails cat={PANTRY} />
      </div>

      <section className="mt-10">
        <h2 className="text-[20px] font-semibold tracking-tight">Please don&apos;t make this</h2>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {DONT_MAKE.dislikes.map((item) => (
            <span key={item} className="rounded-full bg-fill px-3 py-1.5 text-[13px] font-medium text-muted line-through">
              {item}
            </span>
          ))}
        </div>
        <h3 className="mt-5 text-[13px] font-semibold uppercase tracking-wide text-muted">
          Not a hard no, but don&apos;t default to it
        </h3>
        <ul className="mt-2 space-y-2">
          {DONT_MAKE.depends.map((item) => (
            <li key={item} className="text-[14px] leading-relaxed text-muted">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-8 text-center text-[13px] text-muted">Made with love, for everyday use.</p>
    </div>
  );
}
