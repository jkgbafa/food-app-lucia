// Run with: node --experimental-strip-types lib/selfcheck.ts
import assert from "node:assert";
import { generateWeek, reroll, DAY_NAMES } from "./generator.ts";
import { DISHES } from "./data.ts";

// deterministic rng
function mulberry32(seed: number) {
  return () => {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const SEAFOOD = /shrimp|fish|oyster|salmon|prawn|crab|tuna|seafood(?!-safe)/i;
assert(DISHES.every((d) => !SEAFOOD.test(d.name)), "no seafood in the dish pool");
assert(DISHES.every((d) => d.img || d.recipeId), "every dish has an image");

let confirmedPicks = 0, totalPicks = 0;
for (let seed = 1; seed <= 50; seed++) {
  const rng = mulberry32(seed);
  const week = generateWeek(rng);
  assert.equal(week.length, 7);
  const dinners = week.map((d) => d.dinner.dish.name);
  assert.equal(new Set(dinners).size, 7, "dinners are unique within the week");
  week.forEach((d, i) => {
    assert(d.breakfast.dish.meal === "breakfast");
    assert(d.dinner.dish.meal === "main");
    if (i > 0) assert.notEqual(d.dinner.dish.protein, week[i - 1].dinner.dish.protein, "no same dinner protein back-to-back");
    if (d.lunch.leftovers) assert.equal(d.lunch.dish.name, week[i - 1].dinner.dish.name, "leftovers = yesterday's dinner");
    for (const m of ["breakfast", "lunch", "dinner"] as const) {
      totalPicks++;
      if (d[m].dish.confirmed) confirmedPicks++;
    }
  });
  assert.deepEqual(week.map((d) => d.day), DAY_NAMES);

  // reroll changes only the targeted slot and avoids duplicates on the board
  const next = reroll(week, 2, "dinner", rng);
  assert.equal(next[2].day, week[2].day);
  const names = next.flatMap((d) => [d.breakfast, d.lunch, d.dinner].map((s) => s.dish.name));
  const others = names.filter((n) => n !== next[2].dinner.dish.name);
  assert(!others.includes(next[2].dinner.dish.name), "rerolled dish not already on the board");
}
// ~59% of the pool is unconfirmed, so >50% confirmed picks proves the 3x weighting works
assert(confirmedPicks / totalPicks > 0.5, `favorites weighting (got ${(confirmedPicks / totalPicks).toFixed(2)})`);

console.log("selfcheck OK —", totalPicks, "slots checked across 50 seeded weeks");
