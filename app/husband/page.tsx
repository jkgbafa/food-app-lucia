import Link from "next/link";
import { HUSBAND_NOTES as N } from "@/lib/husband";

export const metadata = { title: "From Your Husband — The Total Wife" };

export default function HusbandPage() {
  return (
    <div>
      <Link
        href="/"
        aria-label="Back to The Total Wife"
        className="mb-4 mt-2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-fill"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-foreground" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M11 6l-6 6 6 6" />
        </svg>
      </Link>

      <div className="rounded-3xl bg-[#181614] p-6 text-[#f3efe7]">
        <p className="text-[12px] tracking-[0.25em] text-white/40">✦ {N.eyebrow.toUpperCase()}</p>
        <h1 className="mt-2 font-serif text-[28px] font-medium leading-tight">{N.title}</h1>
        <blockquote className="mt-4 border-l-2 border-white/25 pl-3 text-[14px] leading-relaxed text-white/70">
          &ldquo;{N.anchor.verse}&rdquo;
          <span className="mt-1 block text-[12px] text-white/45">{N.anchor.ref}</span>
        </blockquote>
      </div>

      <p className="mt-4 rounded-3xl bg-fill p-4 text-[15px] font-medium leading-relaxed">{N.intro}</p>

      {/* The Evil of Ignorance */}
      <section className="mt-8">
        <h2 className="text-[20px] font-semibold tracking-tight">{N.ignorance.title}</h2>
        <blockquote className="mt-3 rounded-3xl bg-fill p-4 text-[15px] leading-relaxed">
          &ldquo;{N.ignorance.verse}&rdquo;
          <span className="mt-1 block text-[12px] font-semibold uppercase tracking-wide text-muted">
            {N.ignorance.ref}
          </span>
        </blockquote>
        {N.ignorance.terms.map((t) => (
          <div key={t.word} className="mt-3 rounded-3xl border border-black/10 p-4">
            <p className="text-[16px] font-semibold">
              {t.word} <span className="text-[13px] font-normal text-muted">({t.pos})</span>
            </p>
            <p className="mt-1 text-[14px] leading-relaxed">{t.definition}</p>
            <p className="mt-3 text-[12px] font-semibold uppercase tracking-wide text-muted">{t.synLabel}</p>
            <p className="mt-1 text-[13px] leading-relaxed text-muted">{t.synonyms}</p>
            {t.antonyms && (
              <>
                <p className="mt-3 text-[12px] font-semibold uppercase tracking-wide text-muted">{t.antLabel}</p>
                <p className="mt-1 text-[13px] leading-relaxed text-muted">{t.antonyms}</p>
              </>
            )}
          </div>
        ))}
        <p className="mt-4 text-[15px] leading-relaxed">{N.ignorance.teaching}</p>
      </section>

      {/* Why teach my wife */}
      <section className="mt-8">
        <h2 className="text-[20px] font-semibold tracking-tight">{N.whyTeach.title}</h2>
        <ul className="mt-3 space-y-3">
          {N.whyTeach.points.map((p, i) => (
            <li key={i} className="flex gap-3 text-[14px] leading-relaxed">
              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
              {p}
            </li>
          ))}
        </ul>
      </section>

      {/* 11 times Paul fought ignorance */}
      <section className="mt-8">
        <h2 className="mb-3 text-[20px] font-semibold tracking-tight">{N.paul.title}</h2>
        <div className="overflow-hidden rounded-3xl border border-black/10">
          {N.paul.items.map((item, i) => (
            <details key={i} className="group border-b border-black/5 last:border-b-0">
              <summary className="flex cursor-pointer items-center gap-3 px-4 py-3.5 transition-colors duration-150 hover:bg-fill active:bg-fill">
                <span className="text-[13px] font-semibold text-muted">{String(i + 1).padStart(2, "0")}</span>
                <span className="flex-1 text-[14px] font-semibold leading-snug">{item.heading}</span>
                <svg viewBox="0 0 24 24" className="chevron h-4 w-4 shrink-0 fill-none stroke-black/30 transition-transform" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </summary>
              <div className="px-4 pb-4">
                <blockquote className="rounded-2xl bg-fill p-3 text-[13px] leading-relaxed">
                  &ldquo;{item.verse}&rdquo;
                  <span className="mt-1 block text-[11px] font-semibold uppercase tracking-wide text-muted">
                    {item.ref} KJV
                  </span>
                </blockquote>
                <p className="mt-2 text-[13px] leading-relaxed text-muted">{item.note}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Must not be ignorant about */}
      <section className="mt-8">
        <h2 className="mb-3 text-[20px] font-semibold tracking-tight">{N.mustKnow.title}</h2>
        <ol className="overflow-hidden rounded-3xl border border-black/10">
          {N.mustKnow.items.map((item, i) => (
            <li key={i} className="border-b border-black/5 px-4 py-3.5 last:border-b-0">
              <div className="flex gap-3">
                <span className="text-[13px] font-semibold text-muted">{String(i + 1).padStart(2, "0")}</span>
                <div className="min-w-0 flex-1">
                  {item.link ? (
                    <Link href={item.link} className="cursor-pointer text-[14px] font-semibold leading-snug underline underline-offset-2">
                      {item.heading}
                    </Link>
                  ) : (
                    <p className="text-[14px] font-semibold leading-snug">{item.heading}</p>
                  )}
                  {item.notes.map((n, j) => (
                    <p key={j} className="mt-1.5 text-[13px] leading-relaxed text-muted">
                      {n}
                    </p>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <p className="mt-8 text-center text-[13px] text-muted">With love — Josh.</p>
    </div>
  );
}
