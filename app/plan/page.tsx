"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { DISHES, type Dish } from "@/lib/data";
import { generateWeek, reroll, type DayPlan } from "@/lib/generator";

const MEALS = [
  { key: "breakfast", label: "Breakfast" },
  { key: "lunch", label: "Lunch" },
  { key: "dinner", label: "Dinner" },
] as const;
type MealKey = (typeof MEALS)[number]["key"];

export default function PlanPage() {
  const [week, setWeek] = useState<DayPlan[] | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [picker, setPicker] = useState<{ dayIdx: number; meal: MealKey } | null>(null);
  const [pickerQuery, setPickerQuery] = useState("");

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

  const setSlot = (dayIdx: number, meal: MealKey, dish: Dish) => {
    if (!week) return;
    const next = week.map((d) => ({ ...d }));
    next[dayIdx] = { ...next[dayIdx], [meal]: { dish } };
    save(next);
    setPicker(null);
    setPickerQuery("");
  };

  const current = picker && week ? week[picker.dayIdx][picker.meal] : null;
  const pool = picker
    ? DISHES.filter(
        (d) =>
          d.meal === (picker.meal === "breakfast" ? "breakfast" : "main") &&
          (!pickerQuery || d.name.toLowerCase().includes(pickerQuery.toLowerCase()))
      )
    : [];

  return (
    <div>
      <header className="mb-5 pt-4">
        <p className="text-[17px] text-muted">Joshua&apos;s Table</p>
        <h1 className="text-[26px] font-semibold leading-tight tracking-tight">Meal Plan</h1>
      </header>

      <button
        onClick={() => save(generateWeek())}
        className="mb-2 w-full cursor-pointer rounded-full bg-foreground py-4 text-[16px] font-semibold text-white transition-transform duration-150 active:scale-[0.98]"
      >
        {week ? "Regenerate the week" : "Plan this week"}
      </button>
      {week && <p className="mb-6 text-center text-[13px] text-muted">Tap any meal to change it</p>}

      {loaded && !week && (
        <div className="mt-4 rounded-3xl border border-black/10 p-10 text-center">
          <p className="text-[15px] text-muted">No plan yet.</p>
        </div>
      )}

      {week?.map((day, di) => (
        <section key={day.day} className="mb-6">
          <h2 className="mb-2 text-[17px] font-semibold">{day.day}</h2>
          <div className="overflow-hidden rounded-3xl border border-black/10">
            {MEALS.map(({ key, label }) => {
              const slot = day[key];
              return (
                <div key={key} className="flex items-center gap-3 border-b border-black/5 px-4 py-3 last:border-b-0">
                  <button
                    onClick={() => setPicker({ dayIdx: di, meal: key })}
                    className="flex min-w-0 flex-1 cursor-pointer items-center gap-3 text-left"
                  >
                    {slot.dish.recipeId ? (
                      <img src={`/photos/${slot.dish.recipeId}.jpg`} alt="" className="h-12 w-12 shrink-0 rounded-xl object-cover" />
                    ) : (
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-fill">
                        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-muted" strokeWidth="1.5" strokeLinecap="round">
                          <path d="M5 3v7a2 2 0 0 0 2 2v9M9 3v7M7 3v7M17 3c-1.5 1.5-2 4-2 6v3h2.5v9" />
                        </svg>
                      </span>
                    )}
                    <span className="min-w-0 flex-1">
                      <span className="block text-[11px] font-semibold uppercase tracking-wide text-muted">{label}</span>
                      <span className="block truncate text-[15px] font-medium">
                        {slot.leftovers ? `Leftovers · ${slot.dish.name}` : slot.dish.name}
                        {slot.dish.confirmed && !slot.leftovers && (
                          <svg viewBox="0 0 24 24" className="ml-1.5 inline h-3 w-3 fill-none stroke-foreground align-baseline" strokeWidth="1.5" strokeLinejoin="round">
                            <path d="M12 3l2.7 5.8 6.3.7-4.7 4.3 1.3 6.2-5.6-3.1-5.6 3.1 1.3-6.2L3 9.5l6.3-.7z" />
                          </svg>
                        )}
                      </span>
                    </span>
                  </button>
                  <button
                    aria-label={`Shuffle ${label.toLowerCase()} for ${day.day}`}
                    onClick={() => save(reroll(week, di, key))}
                    className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full transition-colors duration-150 hover:bg-fill active:bg-fill"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-muted" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4v6h6M20 20v-6h-6" />
                      <path d="M20 9a8 8 0 0 0-14.9-3M4 15a8 8 0 0 0 14.9 3" />
                    </svg>
                  </button>
                </div>
              );
            })}
          </div>
        </section>
      ))}

      {picker && (
        <div className="fixed inset-0 z-50" role="dialog" aria-label="Choose a dish">
          <button
            aria-label="Close"
            onClick={() => {
              setPicker(null);
              setPickerQuery("");
            }}
            className="absolute inset-0 cursor-pointer bg-black/30"
          />
          <div className="absolute inset-x-0 bottom-0 max-h-[75vh] overflow-y-auto rounded-t-3xl bg-white pb-[env(safe-area-inset-bottom)]">
            <div className="sticky top-0 bg-white px-4 pb-3 pt-4">
              <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-black/15" />
              <div className="flex items-center justify-between gap-3">
                <p className="text-[15px] font-semibold">
                  {week?.[picker.dayIdx].day} · {picker.meal.charAt(0).toUpperCase() + picker.meal.slice(1)}
                </p>
                {current?.dish.recipeId && (
                  <Link
                    href={`/recipes/${current.dish.recipeId}`}
                    className="cursor-pointer text-[13px] font-semibold underline underline-offset-2"
                  >
                    Open recipe
                  </Link>
                )}
              </div>
              <label className="mt-3 flex items-center gap-2.5 rounded-full bg-fill px-4 py-2.5">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-muted" strokeWidth="1.5" strokeLinecap="round">
                  <circle cx="11" cy="11" r="7" />
                  <path d="M20 20l-3.5-3.5" />
                </svg>
                <input
                  value={pickerQuery}
                  onChange={(e) => setPickerQuery(e.target.value)}
                  placeholder="Search"
                  className="w-full bg-transparent text-[15px] outline-none placeholder:text-muted"
                />
              </label>
            </div>
            <div className="px-2 pb-4">
              {pool.map((d) => (
                <button
                  key={d.name}
                  onClick={() => setSlot(picker.dayIdx, picker.meal, d)}
                  className="flex w-full cursor-pointer items-center gap-3 rounded-2xl px-3 py-2.5 text-left transition-colors duration-150 hover:bg-fill active:bg-fill"
                >
                  {d.recipeId ? (
                    <img src={`/photos/${d.recipeId}.jpg`} alt="" className="h-10 w-10 shrink-0 rounded-lg object-cover" loading="lazy" />
                  ) : (
                    <span className="h-10 w-10 shrink-0 rounded-lg bg-fill" />
                  )}
                  <span className="flex-1 truncate text-[15px]">{d.name}</span>
                  {d.confirmed && (
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0 fill-none stroke-foreground" strokeWidth="1.5" strokeLinejoin="round">
                      <path d="M12 3l2.7 5.8 6.3.7-4.7 4.3 1.3 6.2-5.6-3.1-5.6 3.1 1.3-6.2L3 9.5l6.3-.7z" />
                    </svg>
                  )}
                </button>
              ))}
              {pool.length === 0 && <p className="py-8 text-center text-[14px] text-muted">Nothing matches.</p>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
