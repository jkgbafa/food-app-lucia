"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ROLES, PRINCIPLES, FOUNDATION } from "@/lib/wife";

export default function HomePage() {
  const [splash, setSplash] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem("tw-splash")) setSplash(true);
  }, []);

  const enter = () => {
    sessionStorage.setItem("tw-splash", "1");
    setFading(true);
    setTimeout(() => setSplash(false), 600);
  };

  return (
    <div>
      {splash && (
        <div
          className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#181614] transition-opacity duration-500 ${
            fading ? "pointer-events-none opacity-0" : "opacity-100"
          }`}
        >
          <p className="tw-fade-up text-[14px] tracking-[0.35em] text-white/50" style={{ animationDelay: "0.2s" }}>
            FOR LUCIA
          </p>
          <h1
            className="tw-fade-up mt-3 font-serif text-[44px] font-medium text-[#f3efe7]"
            style={{ animationDelay: "0.45s" }}
          >
            The Total Wife
          </h1>
          <button
            onClick={enter}
            className="tw-fade-up tw-glow mt-14 cursor-pointer rounded-full border px-14 py-3.5 text-[15px] font-medium tracking-[0.25em] text-[#f3efe7] transition-transform duration-150 active:scale-95"
            style={{ animationDelay: "1.1s, 1.6s" }}
          >
            ENTER
          </button>
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
            href={r.slug === "cook" ? "/recipes" : `/wife/${r.slug}`}
            className="cursor-pointer rounded-3xl border border-black/10 p-4 transition-colors duration-150 hover:bg-fill active:bg-fill"
          >
            <p className="text-[13px] font-semibold text-muted">{r.n}</p>
            <h3 className="mt-1 text-[16px] font-semibold leading-snug">{r.title}</h3>
            <p className="mt-1 line-clamp-2 text-[12px] leading-snug text-muted">{r.tagline}</p>
          </Link>
        ))}
        <Link
          href="/husband"
          className="cursor-pointer rounded-3xl bg-foreground p-4 text-white transition-transform duration-150 active:scale-[0.98]"
        >
          <p className="text-[13px] font-semibold text-white/50">✦</p>
          <h3 className="mt-1 text-[16px] font-semibold leading-snug">From Your Husband</h3>
          <p className="mt-1 line-clamp-2 text-[12px] leading-snug text-white/60">
            Things I need my wife to learn &amp; know
          </p>
        </Link>
      </div>

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
