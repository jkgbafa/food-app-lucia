import Link from "next/link";
import { notFound } from "next/navigation";
import { ROLES, youtubeSearch } from "@/lib/wife";

export function generateStaticParams() {
  return ROLES.map((r) => ({ slug: r.slug }));
}

export default async function RolePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const role = ROLES.find((r) => r.slug === slug);
  if (!role) notFound();

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

      <p className="text-[15px] font-semibold text-muted">{role.n}</p>
      <h1 className="text-[28px] font-semibold leading-tight tracking-tight">{role.title}</h1>
      <p className="mt-1 text-[15px] text-muted">{role.tagline}</p>

      <section className="mt-6">
        <h2 className="mb-2 text-[17px] font-semibold">Her duties</h2>
        <ul className="overflow-hidden rounded-3xl border border-black/10">
          {role.duties.map((d, i) => (
            <li key={i} className="flex gap-3 border-b border-black/5 px-4 py-3 text-[14px] leading-relaxed last:border-b-0">
              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
              {d}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="mb-2 text-[17px] font-semibold">Remember</h2>
        <div className="space-y-3">
          {role.oneLiners.map((q, i) => (
            <blockquote key={i} className="rounded-3xl bg-fill p-4 text-[15px] font-medium leading-relaxed">
              &ldquo;{q}&rdquo;
            </blockquote>
          ))}
        </div>
      </section>

      <section className="mt-6">
        <h2 className="mb-2 text-[17px] font-semibold">Listen</h2>
        <div className="overflow-hidden rounded-3xl border border-black/10">
          {role.listen.map((l) => (
            <a
              key={l.label}
              href={youtubeSearch(l.query)}
              target="_blank"
              rel="noreferrer"
              className="flex cursor-pointer items-center gap-3 border-b border-black/5 px-4 py-3.5 transition-colors duration-150 last:border-b-0 hover:bg-fill active:bg-fill"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-fill">
                <svg viewBox="0 0 24 24" className="ml-0.5 h-4 w-4 fill-foreground">
                  <path d="M8 5.5v13l11-6.5z" />
                </svg>
              </span>
              <span className="flex-1 text-[15px] font-medium">{l.label}</span>
              <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 stroke-black/25" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </a>
          ))}
        </div>
      </section>

      <section className="mt-6">
        <h2 className="mb-2 text-[17px] font-semibold">Read</h2>
        <ul className="overflow-hidden rounded-3xl border border-black/10">
          {role.read.map((b) => (
            <li key={b} className="border-b border-black/5 px-4 py-3 text-[14px] last:border-b-0">
              {b}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
