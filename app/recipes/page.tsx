"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { RECIPES, IDEA_BANK, type Idea } from "@/lib/data";
import { BASE } from "@/lib/base";

const FILTERS = ["All", "Chicken", "Beef", "Pasta", "Breakfast", "Dessert"];

export default function RecipesPage() {
  const [userIdeas, setUserIdeas] = useState<Idea[]>([]);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [view, setView] = useState<"grid" | "list">("grid");
  useEffect(() => {
    try {
      setUserIdeas(JSON.parse(localStorage.getItem("jt-ideas") ?? "[]"));
      const v = localStorage.getItem("jt-view");
      if (v === "list" || v === "grid") setView(v);
    } catch {}
  }, []);
  const setViewPersist = (v: "grid" | "list") => {
    setView(v);
    localStorage.setItem("jt-view", v);
  };

  const shown = RECIPES.filter(
    (r) =>
      (filter === "All" || r.tags.includes(filter)) &&
      (!query || r.title.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div>
      <header className="mb-4 pt-4">
        <p className="text-[17px] text-muted">Joshua&apos;s Table</p>
        <h1 className="text-[26px] font-semibold leading-tight tracking-tight">
          {RECIPES.length + userIdeas.length + IDEA_BANK.length} saved recipes
        </h1>
      </header>

      <div className="mb-3 flex items-center gap-2">
        <label className="flex flex-1 items-center gap-2.5 rounded-full bg-fill px-4 py-3">
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-muted" strokeWidth="1.5" strokeLinecap="round">
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20l-3.5-3.5" />
          </svg>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search"
            className="w-full bg-transparent text-[16px] outline-none placeholder:text-muted"
          />
        </label>
        <button
          aria-label={view === "grid" ? "Switch to list view" : "Switch to grid view"}
          onClick={() => setViewPersist(view === "grid" ? "list" : "grid")}
          className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full bg-fill transition-colors duration-150 active:bg-black/10"
        >
          {view === "grid" ? (
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-foreground" strokeWidth="1.5" strokeLinecap="round">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-foreground" strokeWidth="1.5">
              <rect x="4" y="4" width="7" height="7" rx="1.5" />
              <rect x="13" y="4" width="7" height="7" rx="1.5" />
              <rect x="4" y="13" width="7" height="7" rx="1.5" />
              <rect x="13" y="13" width="7" height="7" rx="1.5" />
            </svg>
          )}
        </button>
      </div>

      <div className="scrollbar-none -mx-4 mb-5 flex gap-2 overflow-x-auto px-4 pb-1">
        {FILTERS.map((f) => {
          const active = filter === f;
          return (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`shrink-0 cursor-pointer rounded-full border px-4 py-2 text-[14px] font-medium transition-colors duration-200 ${
                active ? "border-foreground bg-foreground text-white" : "border-black/15 bg-white hover:border-black/30"
              }`}
            >
              {f}
            </button>
          );
        })}
      </div>

      {view === "grid" ? (
        <div className="grid grid-cols-2 gap-x-3 gap-y-5">
          {shown.map((r, i) => (
            <Link key={r.id} href={`/recipes/${r.id}`} className="cursor-pointer">
              <img
                src={`${BASE}/photos/${r.id}.jpg`}
                alt={r.title}
                className="h-36 w-full rounded-2xl object-cover"
                loading={i > 3 ? "lazy" : "eager"}
              />
              <h2 className="mt-2 line-clamp-2 text-[14px] font-medium leading-snug">{r.title}</h2>
              <p className="mt-0.5 text-[12px] text-muted">{r.steps.length} step{r.steps.length === 1 ? "" : "s"} · {r.tags[0]}</p>
            </Link>
          ))}
        </div>
      ) : (
        <div className="overflow-hidden rounded-3xl border border-black/10">
          {shown.map((r) => (
            <Link
              key={r.id}
              href={`/recipes/${r.id}`}
              className="flex cursor-pointer items-center gap-3 border-b border-black/5 px-3 py-3 transition-colors duration-150 last:border-b-0 hover:bg-fill active:bg-fill"
            >
              <img src={`${BASE}/photos/${r.id}.jpg`} alt="" className="h-14 w-14 shrink-0 rounded-xl object-cover" loading="lazy" />
              <span className="min-w-0 flex-1">
                <span className="block truncate text-[15px] font-medium">{r.title}</span>
                <span className="block text-[13px] text-muted">
                  {r.ingredients.reduce((n, g) => n + g.items.length, 0)} ingredients · {r.steps.length} step{r.steps.length === 1 ? "" : "s"}
                </span>
              </span>
              <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 stroke-black/25" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </Link>
          ))}
        </div>
      )}
      {shown.length === 0 && (
        <p className="py-10 text-center text-[15px] text-muted">Nothing matches.</p>
      )}

      <h2 className="mb-3 mt-10 text-[20px] font-semibold tracking-tight">Idea bank</h2>
      <div className="overflow-hidden rounded-3xl border border-black/10">
        {[...userIdeas, ...IDEA_BANK].map((idea, i) => (
          <a
            key={`${idea.title}-${i}`}
            href={idea.ig}
            target="_blank"
            rel="noreferrer"
            className="flex cursor-pointer items-center gap-3 border-b border-black/5 px-4 py-3.5 transition-colors duration-150 last:border-b-0 hover:bg-fill active:bg-fill"
          >
            {idea.img ? (
              <img
                src={idea.img.startsWith("http") ? idea.img : BASE + idea.img}
                alt=""
                className="h-10 w-10 shrink-0 rounded-xl object-cover"
                loading="lazy"
              />
            ) : (
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-fill">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-muted" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
                </svg>
              </span>
            )}
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[15px] font-medium">{idea.title}</span>
              <span className="block truncate text-[13px] text-muted">{idea.note}</span>
            </span>
            <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 stroke-black/25" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </a>
        ))}
      </div>

      <Link
        href="/import"
        aria-label="Save a recipe from Instagram"
        className="fixed bottom-24 right-5 z-40 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-foreground text-white shadow-lg transition-transform active:scale-90 sm:right-[max(1.25rem,calc(50vw-21rem))]"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" strokeWidth="1.5" strokeLinecap="round">
          <path d="M12 5v14M5 12h14" />
        </svg>
      </Link>
    </div>
  );
}
