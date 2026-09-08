"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { RECIPES, IDEA_BANK, type Idea } from "@/lib/data";

const FILTERS = [
  { label: "All", emoji: "", tag: null },
  { label: "Chicken", emoji: "🍗", tag: "Chicken" },
  { label: "Beef", emoji: "🥩", tag: "Beef" },
  { label: "Pasta", emoji: "🍝", tag: "Pasta" },
  { label: "Breakfast", emoji: "🍳", tag: "Breakfast" },
  { label: "Dessert", emoji: "🍰", tag: "Dessert" },
];

export default function RecipesPage() {
  const [userIdeas, setUserIdeas] = useState<Idea[]>([]);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<string | null>(null);
  useEffect(() => {
    try {
      setUserIdeas(JSON.parse(localStorage.getItem("jt-ideas") ?? "[]"));
    } catch {}
  }, []);

  const shown = RECIPES.filter(
    (r) =>
      (!filter || r.tags.includes(filter)) &&
      (!query || r.title.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div>
      <header className="mb-4">
        <p className="text-[17px] text-muted">Joshua&apos;s Table</p>
        <h1 className="text-[28px] font-bold leading-tight tracking-tight">
          You have {RECIPES.length + userIdeas.length + IDEA_BANK.length} saved recipes
        </h1>
      </header>

      <label className="mb-4 flex items-center gap-2.5 rounded-full bg-fill px-4 py-3">
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-muted" strokeWidth="2" strokeLinecap="round">
          <circle cx="11" cy="11" r="7" />
          <path d="M20 20l-3.5-3.5" />
        </svg>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search recipes"
          className="w-full bg-transparent text-[16px] outline-none placeholder:text-muted"
        />
      </label>

      <div className="scrollbar-none -mx-4 mb-5 flex gap-2 overflow-x-auto px-4 pb-1">
        {FILTERS.map((f) => {
          const active = filter === f.tag;
          return (
            <button
              key={f.label}
              onClick={() => setFilter(f.tag)}
              className={`shrink-0 rounded-full border px-4 py-2 text-[14px] font-medium transition-colors ${
                active ? "border-foreground bg-foreground text-white" : "border-black/15 bg-white"
              }`}
            >
              {f.emoji && <span className="mr-1.5">{f.emoji}</span>}
              {f.label}
            </button>
          );
        })}
      </div>

      <div className="space-y-4">
        {shown.map((r, i) => (
          <motion.div
            key={r.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04, duration: 0.3 }}
          >
            <Link
              href={`/recipes/${r.id}`}
              className="relative block h-60 overflow-hidden rounded-3xl transition-transform active:scale-[0.98]"
              style={{ background: `linear-gradient(135deg, ${r.colors[0]}, ${r.colors[1]})` }}
            >
              <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-foreground" strokeWidth="2" strokeLinejoin="round">
                  <path d="M6 4h12v17l-6-4-6 4z" />
                </svg>
              </span>
              <span className="absolute inset-0 flex items-center justify-center pb-10 text-7xl">{r.emoji}</span>
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent px-4 pb-4 pt-12">
                <span className="block text-[19px] font-bold leading-snug text-white">{r.title}</span>
                <span className="mt-0.5 block text-[13px] font-medium text-white/80">{r.tags.join(" · ")}</span>
              </span>
            </Link>
          </motion.div>
        ))}
        {shown.length === 0 && (
          <p className="py-10 text-center text-[15px] text-muted">Nothing matches — try another filter.</p>
        )}
      </div>

      <h2 className="mb-1 mt-8 text-[22px] font-bold tracking-tight">Idea bank</h2>
      <p className="mb-3 text-[14px] text-muted">
        Saved posts to revisit — open the original when you&apos;re ready to cook one.
      </p>
      <div className="overflow-hidden rounded-3xl border border-black/10">
        {[...userIdeas, ...IDEA_BANK].map((idea, i) => (
          <a
            key={`${idea.title}-${i}`}
            href={idea.ig}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 border-b border-black/5 px-4 py-3.5 last:border-b-0 active:bg-fill"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-fill text-2xl">
              {idea.emoji}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[15px] font-semibold">{idea.title}</span>
              <span className="block truncate text-[13px] text-muted">{idea.note}</span>
            </span>
            {idea.ig && (
              <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 stroke-muted" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 6l6 6-6 6" />
              </svg>
            )}
          </a>
        ))}
      </div>

      <Link
        href="/import"
        aria-label="Import from Instagram"
        className="fixed bottom-24 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-foreground text-white shadow-lg transition-transform active:scale-90 sm:right-[max(1.25rem,calc(50vw-21rem))]"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-none stroke-current" strokeWidth="2.5" strokeLinecap="round">
          <path d="M12 5v14M5 12h14" />
        </svg>
      </Link>
    </div>
  );
}
