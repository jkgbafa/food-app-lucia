"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Idea } from "@/lib/data";

// ponytail: v1 saves the link + notes to localStorage. Real caption/video
// synthesis needs a server route + an AI API key — upgrade path is a
// POST /api/import that fetches the post and asks Claude to structure it.
export default function ImportPage() {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [saved, setSaved] = useState(false);

  // PWA share_target lands here as /import?url=...&text=... — prefill the form.
  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    const shared = p.get("url") || p.get("text") || "";
    const match = shared.match(/https?:\/\/\S+/);
    if (match) setUrl(match[0]);
    else if (shared) setTitle(shared);
  }, []);

  const submit = () => {
    if (!url.trim() && !title.trim()) return;
    const idea: Idea = {
      title: title.trim() || url.trim(),
      emoji: "",
      note: "Saved from Instagram",
      ig: url.trim() || undefined,
    };
    const ideas = JSON.parse(localStorage.getItem("jt-ideas") ?? "[]");
    localStorage.setItem("jt-ideas", JSON.stringify([idea, ...ideas]));
    setSaved(true);
    setUrl("");
    setTitle("");
  };

  return (
    <div>
      <Link
        href="/"
        aria-label="Back to recipes"
        className="mb-4 mt-2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-fill"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-foreground" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M11 6l-6 6 6 6" />
        </svg>
      </Link>

      <h1 className="text-[26px] font-semibold leading-tight tracking-tight">Save a recipe</h1>
      <p className="mt-1 text-[15px] text-muted">Paste an Instagram link.</p>

      <div className="mt-5 space-y-3">
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://www.instagram.com/reel/…"
          inputMode="url"
          className="w-full rounded-2xl bg-fill px-4 py-3.5 text-[15px] outline-none placeholder:text-muted focus:ring-2 focus:ring-foreground/20"
        />
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="What is it?"
          className="w-full rounded-2xl bg-fill px-4 py-3.5 text-[15px] outline-none placeholder:text-muted focus:ring-2 focus:ring-foreground/20"
        />
        <button
          onClick={submit}
          className="w-full cursor-pointer rounded-full bg-foreground py-4 text-[16px] font-semibold text-white transition-transform duration-150 active:scale-[0.98] disabled:opacity-40"
          disabled={!url.trim() && !title.trim()}
        >
          Save to idea bank
        </button>
        {saved && (
          <p className="rounded-2xl bg-fill p-4 text-center text-[14px] font-medium">
            Saved — it&apos;s at the top of the idea bank.
          </p>
        )}
      </div>
    </div>
  );
}
