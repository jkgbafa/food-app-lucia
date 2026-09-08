import { DISHES, type Dish } from "./data.ts";

export type Slot = { dish: Dish; leftovers?: boolean };
export type DayPlan = { day: string; breakfast: Slot; lunch: Slot; dinner: Slot };

export const DAY_NAMES = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// Confirmed ⭐ favorites are 3x more likely to be picked than "try it" dishes.
function pick(pool: Dish[], rng: () => number): Dish {
  const weights = pool.map((d) => (d.confirmed ? 3 : 1));
  const total = weights.reduce((a, b) => a + b, 0);
  let r = rng() * total;
  for (let i = 0; i < pool.length; i++) {
    r -= weights[i];
    if (r <= 0) return pool[i];
  }
  return pool[pool.length - 1];
}

export function generateWeek(rng: () => number = Math.random): DayPlan[] {
  const breakfasts = DISHES.filter((d) => d.meal === "breakfast");
  const mains = DISHES.filter((d) => d.meal === "main");
  const usedMains = new Set<string>();
  const usedBreakfasts = new Set<string>();
  const week: DayPlan[] = [];
  let prevDinner: Dish | null = null;

  for (const day of DAY_NAMES) {
    // Breakfast: no repeats within the week (pool is big enough for 7 days)
    const bPool = breakfasts.filter((d) => !usedBreakfasts.has(d.name));
    const breakfast = pick(bPool, rng);
    usedBreakfasts.add(breakfast.name);

    // Dinner: no repeats, and avoid the same protein two nights in a row
    let dPool = mains.filter(
      (d) => !usedMains.has(d.name) && (!prevDinner || d.protein !== prevDinner.protein)
    );
    if (dPool.length === 0) dPool = mains.filter((d) => !usedMains.has(d.name));
    const dinner = pick(dPool, rng);
    usedMains.add(dinner.name);

    // Lunch: Josh loves big portions + leftovers, so ~half the time
    // lunch is yesterday's dinner. Otherwise a fresh (unused) main.
    let lunch: Slot;
    if (prevDinner && rng() < 0.5) {
      lunch = { dish: prevDinner, leftovers: true };
    } else {
      let lPool = mains.filter((d) => !usedMains.has(d.name));
      if (lPool.length === 0) lPool = mains;
      const dish = pick(lPool, rng);
      usedMains.add(dish.name);
      lunch = { dish };
    }

    week.push({ day, breakfast: { dish: breakfast }, lunch, dinner: { dish: dinner } });
    prevDinner = dinner;
  }
  return week;
}

// Re-roll a single slot, avoiding everything else already on the board.
export function reroll(week: DayPlan[], dayIdx: number, meal: "breakfast" | "lunch" | "dinner", rng: () => number = Math.random): DayPlan[] {
  const used = new Set<string>();
  week.forEach((d, i) => {
    for (const m of ["breakfast", "lunch", "dinner"] as const) {
      if (!(i === dayIdx && m === meal)) used.add(d[m].dish.name);
    }
  });
  const wantBreakfast = meal === "breakfast";
  let pool = DISHES.filter((d) => (d.meal === (wantBreakfast ? "breakfast" : "main")) && !used.has(d.name));
  if (pool.length === 0) pool = DISHES.filter((d) => d.meal === (wantBreakfast ? "breakfast" : "main"));
  const next = week.map((d) => ({ ...d }));
  next[dayIdx] = { ...next[dayIdx], [meal]: { dish: pick(pool, rng) } };
  return next;
}
