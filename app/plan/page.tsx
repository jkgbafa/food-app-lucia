"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { generateWeek, reroll, type DayPlan } from "@/lib/generator";

const MEALS = [
  { key: "breakfast", label: "Breakfast", icon: "☀️" },
  { key: "lunch", label: "Lunch", icon: "🥪" },
  { key: "dinner", label: "Dinner", icon: "🌙" },
] as const;

export default function PlanPage() {
  const [week, setWeek] = useState<DayPlan[] | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("jt-week");
      if (saved) setWeek(JSON.parse(saved));
    } catch {}
    setLoaded(true);
  }, []);

  const save = (w: DayPlan[]) => {
    setWeek(w);
    localStorage.setItem("jt-week", JSON.stringify(w));
  };

  return (
    <div>
      <header className="mb-5">
        <p className="text-[17px] text-muted">Joshua&apos;s Table</p>
        <h1 className="text-[32px] font-bold leading-tight tracking-tight">Meal Plan</h1>
        <p className="mt-1 text-[15px] text-muted">
          One tap plans Josh&apos;s whole week — favorites weighted up, seafood impossible.
        </p>
      </header>

      <button
        onClick={() => save(generateWeek())}
        className="mb-5 w-full rounded-full bg-foreground py-4 text-[17px] font-semibold text-white transition-transform active:scale-[0.98]"
      >
        {week ? "✨ Regenerate the week" : "✨ Plan this week"}
      </button>

      {loaded && !week && (
        <div className="rounded-3xl border border-black/10 bg-card p-8 text-center">
          <p className="text-5xl">🍽️</p>
          <p className="mt-3 text-[15px] text-muted">
            No plan yet. Tap the button and Lucia never has to wonder what to cook.
          </p>
        </div>
      )}

      <AnimatePresence mode="popLayout">
        {week?.map((day, di) => (
          <motion.section
            key={`${day.day}-${day.dinner.dish.name}`}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: di * 0.05, duration: 0.3 }}
            className="mb-3 overflow-hidden rounded-3xl border border-black/10 bg-card"
          >
            <h2 className="border-b border-black/5 px-4 py-2.5 text-[15px] font-bold">{day.day}</h2>
            {MEALS.map(({ key, label, icon }) => {
              const slot = day[key];
              return (
                <div key={key} className="flex items-center gap-3 border-b border-black/5 px-4 py-2.5 last:border-b-0">
                  <span className="w-7 text-center text-lg">{slot.leftovers ? "🍱" : slot.dish.emoji}</span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-muted">
                      {icon} {label}
                    </p>
                    <p className="truncate text-[15px] font-medium">
                      {slot.leftovers ? `Leftovers — ${slot.dish.name}` : slot.dish.name}
                      {slot.dish.confirmed && !slot.leftovers && <span className="ml-1">⭐</span>}
                    </p>
                  </div>
                  {slot.dish.recipeId && (
                    <Link href={`/recipes/${slot.dish.recipeId}`} className="text-[13px] font-semibold text-accent">
                      Recipe
                    </Link>
                  )}
                  <button
                    aria-label={`Shuffle ${label.toLowerCase()} for ${day.day}`}
                    onClick={() => save(reroll(week, di, key))}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-fill text-muted transition-transform active:rotate-180"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4v6h6M20 20v-6h-6" />
                      <path d="M20 9a8 8 0 0 0-14.9-3M4 15a8 8 0 0 0 14.9 3" />
                    </svg>
                  </button>
                </div>
              );
            })}
          </motion.section>
        ))}
      </AnimatePresence>

      {week && (
        <p className="mt-4 text-center text-[13px] text-muted">
          ⭐ = confirmed favorite · 🍱 lunch leftovers because Josh loves big portions
        </p>
      )}
    </div>
  );
}
