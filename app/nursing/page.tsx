import Link from "next/link";
import { NURSING_WIFE } from "@/lib/wife";

export const metadata = { title: "The Nursing Wife — The Total Wife" };

export default function NursingPage() {
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
        <p className="text-[13px] tracking-[0.25em] text-white/40">✦ SPECIAL NOTES</p>
        <h1 className="mt-2 font-serif text-[30px] font-medium leading-tight">{NURSING_WIFE.title}</h1>
        <p className="mt-3 text-[14px] leading-relaxed text-white/70">{NURSING_WIFE.note}</p>
      </div>

      <ol className="mt-4 overflow-hidden rounded-3xl border border-black/10">
        {NURSING_WIFE.items.map((item, i) => (
          <li key={i} className="flex gap-4 border-b border-black/5 px-4 py-3.5 text-[15px] leading-relaxed last:border-b-0">
            <span className="font-semibold text-muted">{String(i + 1).padStart(2, "0")}</span>
            {item}
          </li>
        ))}
      </ol>

      <p className="mt-6 text-center text-[13px] text-muted">Kept here, just for Lucia.</p>
    </div>
  );
}
