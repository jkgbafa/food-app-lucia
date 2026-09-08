import { DONT_MAKE, VERY_SAFE, CHEAT_CODE, CATEGORIES } from "@/lib/data";

export const metadata = { title: "Josh's Guide — Joshua's Table" };

export default function JoshPage() {
  return (
    <div>
      <header className="mb-5">
        <p className="text-[17px] text-muted">Made for Lucia 🤍</p>
        <h1 className="text-[32px] font-bold leading-tight tracking-tight">Josh&apos;s Guide</h1>
        <p className="mt-1 text-[15px] text-muted">
          Everything about how Josh eats, so choosing what to cook feels clear, easy and personal.
        </p>
      </header>

      {/* Allergy — always first, always loud */}
      <section className="rounded-3xl bg-danger p-4 text-white">
        <h2 className="text-[17px] font-bold">🚨 Absolute allergy: seafood</h2>
        <p className="mt-1 text-[14px] leading-relaxed opacity-95">
          No seafood of any kind — including seafood-based sauces, seasonings or cross-contact. Check
          every Asian sauce label for fish sauce, oyster extract or shrimp paste.
        </p>
      </section>

      <section className="mt-4 rounded-3xl border border-black/10 bg-card p-4">
        <h2 className="text-[17px] font-semibold">The go-to formula</h2>
        <p className="mt-2 rounded-xl bg-fill p-3 text-center text-[15px] font-semibold">
          Meat + rice / potatoes / pasta / noodles + a good sauce
        </p>
        <p className="mt-2 text-[14px] text-muted">
          Savory, flavorful and hearty usually wins: bold, spicy, garlicky, creamy, tomato-based and
          well-seasoned. Reliable proteins: chicken, beef, pork, goat, eggs, bacon, chorizo. Cook
          generous portions — leftovers for several days are a feature, not a bug.
        </p>
      </section>

      <section className="mt-4 rounded-3xl border border-black/10 bg-card p-4">
        <h2 className="text-[17px] font-semibold">Very safe choices</h2>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {VERY_SAFE.map((item) => (
            <span key={item} className="rounded-full bg-green-100 px-3 py-1 text-[13px] font-medium text-green-900">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-4 rounded-3xl border border-black/10 bg-card p-4">
        <h2 className="text-[17px] font-semibold">Please don&apos;t make this</h2>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {DONT_MAKE.dislikes.map((item) => (
            <span key={item} className="rounded-full bg-red-100 px-3 py-1 text-[13px] font-medium text-red-900">
              {item}
            </span>
          ))}
        </div>
        <h3 className="mt-4 text-[15px] font-semibold text-muted">Not a hard no, but don&apos;t default to it</h3>
        <ul className="mt-1 space-y-1.5">
          {DONT_MAKE.depends.map((item) => (
            <li key={item} className="text-[14px] leading-relaxed text-muted">
              ⚠️ {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-4 rounded-3xl border border-black/10 bg-card p-4">
        <h2 className="text-[17px] font-semibold">The &ldquo;I don&apos;t know what to cook&rdquo; cheat code</h2>
        <p className="mt-1 text-[13px] text-muted">Pick one from each column — dozens of combinations.</p>
        <table className="mt-3 w-full text-[14px]">
          <thead>
            <tr className="text-left text-[12px] font-semibold uppercase tracking-wide text-muted">
              <th className="pb-2">Protein</th>
              <th className="pb-2">Carb</th>
              <th className="pb-2">Flavor / style</th>
            </tr>
          </thead>
          <tbody>
            {CHEAT_CODE.map(([p, c, f], i) => (
              <tr key={i} className="border-t border-black/5">
                <td className="py-2 font-medium">{p}</td>
                <td className="py-2">{c}</td>
                <td className="py-2">{f}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <h2 className="mb-2 mt-8 text-[22px] font-bold tracking-tight">The full guide</h2>
      <div className="overflow-hidden rounded-3xl border border-black/10 bg-card">
        {CATEGORIES.map((cat) => (
          <details key={cat.title} className="group border-b border-black/5 last:border-b-0">
            <summary className="flex items-center gap-3 px-4 py-3.5 active:bg-fill">
              <span className="text-2xl">{cat.emoji}</span>
              <span className="flex-1 text-[16px] font-semibold">{cat.title}</span>
              <svg viewBox="0 0 24 24" className="chevron h-4 w-4 fill-none stroke-muted transition-transform" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </summary>
            <div className="px-4 pb-4">
              {cat.intro && <p className="mb-2 text-[13px] font-medium text-muted">{cat.intro}</p>}
              {cat.groups.map((group) => (
                <div key={group.label} className="mt-3">
                  <h3
                    className={`text-[13px] font-semibold uppercase tracking-wide ${
                      group.label.startsWith("No") ? "text-danger" : "text-muted"
                    }`}
                  >
                    {group.label}
                  </h3>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className={`rounded-full px-3 py-1 text-[13px] ${
                          group.label.startsWith("No")
                            ? "bg-red-100 text-red-900"
                            : "bg-fill text-foreground"
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
        ))}
      </div>

      <p className="mt-6 text-center text-[13px] text-muted">Made with love, for everyday use. 🤍</p>
    </div>
  );
}
