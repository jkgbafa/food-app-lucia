"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ROLES, PRINCIPLES, FOUNDATION, NURSING_WIFE } from "@/lib/wife";
import { BASE } from "@/lib/base";

export default function HomePage() {
  const [splash, setSplash] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("tw-splash")) return;
    sessionStorage.setItem("tw-splash", "1");
    setSplash(true);
    const t1 = setTimeout(() => setFading(true), 1300);
    const t2 = setTimeout(() => setSplash(false), 1900);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div>
      {splash && (
        <div
          className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#181614] transition-opacity duration-500 ${
            fading ? "opacity-0" : "opacity-100"
          }`}
        >
          <p className="text-[15px] tracking-[0.3em] text-white/50">FOR LUCIA</p>
          <h1 className="mt-3 font-serif text-[44px] font-medium text-[#f3efe7]">The Total Wife</h1>
        </div>
      )}

      <header className="mb-5 pt-6">
        <p className="text-[17px] text-muted">For Lucia</p>
        <h1 className="text-[30px] font-semibold leading-tight tracking-tight">The Total Wife</h1>
      </header>

      <p className="mb-6 rounded-3xl bg-fill p-5 text-[15px] leading-relaxed">
        {FOUNDATION}
        <span className="mt-2 block text-[12px] font-semibold uppercase tracking-wide text-muted">
          Model Marriage — Dag Heward-Mills
        </span>
      </p>

      <h2 className="mb-3 text-[20px] font-semibold tracking-tight">The seven roles</h2>
      <div className="grid grid-cols-2 gap-3">
        {ROLES.map((r) => (
          <Link
            key={r.slug}
            href={`/wife/${r.slug}`}
            className="cursor-pointer rounded-3xl border border-black/10 p-4 transition-colors duration-150 hover:bg-fill active:bg-fill"
          >
            <p className="text-[13px] font-semibold text-muted">{r.n}</p>
            <h3 className="mt-1 text-[16px] font-semibold leading-snug">{r.title}</h3>
            <p className="mt-1 line-clamp-2 text-[12px] leading-snug text-muted">{r.tagline}</p>
          </Link>
        ))}
        <Link
          href="/nursing"
          className="cursor-pointer rounded-3xl bg-foreground p-4 text-white transition-transform duration-150 active:scale-[0.98]"
        >
          <p className="text-[13px] font-semibold text-white/50">✦</p>
          <h3 className="mt-1 text-[16px] font-semibold leading-snug">{NURSING_WIFE.title}</h3>
          <p className="mt-1 line-clamp-2 text-[12px] leading-snug text-white/60">Special notes — just for you</p>
        </Link>
      </div>

      <h2 className="mb-3 mt-10 text-[20px] font-semibold tracking-tight">Feeding Josh</h2>
      <Link href="/recipes" className="group block cursor-pointer">
        <div className="relative overflow-hidden rounded-3xl">
          <img
            src={`${BASE}/photos/garlic-parm-pasta.jpg`}
            alt="Joshua's Table"
            className="h-44 w-full object-cover transition-transform duration-300 group-active:scale-[1.02]"
          />
          <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent px-4 pb-4 pt-12">
            <span className="block text-[19px] font-bold text-white">Joshua&apos;s Table</span>
            <span className="block text-[13px] font-medium text-white/80">
              Recipes · meal plans · everything Josh loves
            </span>
          </span>
        </div>
      </Link>

      <h2 className="mb-3 mt-10 text-[20px] font-semibold tracking-tight">The six principles</h2>
      <ol className="overflow-hidden rounded-3xl border border-black/10">
        {PRINCIPLES.map((p, i) => (
          <li key={i} className="flex gap-3 border-b border-black/5 px-4 py-3 text-[14px] leading-relaxed last:border-b-0">
            <span className="font-semibold text-muted">{i + 1}</span>
            {p}
          </li>
        ))}
      </ol>

      <p className="mt-8 text-center text-[13px] text-muted">Made with love, for everyday use.</p>
    </div>
  );
}
