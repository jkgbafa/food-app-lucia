// GitHub Pages serves the app under /food-app-lucia — plain <img> tags need the prefix manually.
export const BASE = "/food-app-lucia";

// Free lookup for a dish photo when Lucia adds her own meal or saved post (themealdb.com, no key needed).
export async function findPhoto(name: string): Promise<string | undefined> {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(name)}`,
      { signal: AbortSignal.timeout(4000) }
    );
    const data = await res.json();
    return data.meals?.[0]?.strMealThumb ?? undefined;
  } catch {
    return undefined;
  }
}
