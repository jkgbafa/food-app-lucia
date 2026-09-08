"use client";

import Link from "next/link";
import { useState } from "react";
import type { Idea } from "@/lib/data";

// ponytail: v1 saves the link + notes to the idea bank in localStorage.
// Real caption/video synthesis needs a server route + an AI API key — upgrade path
// is a POST /api/import that fetches the post and asks Claude to structure it.
export default function ImportPage() {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [saved, setSaved] = useState(false);

  const submit = () => {
    if (!url.trim() && !title.trim()) return;
    const idea: Idea = {
      title: title.trim() || url.trim(),
      emoji: "📎",
      note: note.trim() || "Imported from Instagram — open the post for the recipe",
      ig: url.trim() || undefined,
    };
    const ideas = JSON.parse(localStorage.getItem("jt-ideas") ?? "[]");
    localStorage.setItem("jt-ideas", JSON.stringify([idea, ...ideas]));
    setSaved(true);
    setUrl("");
    setTitle("");
    setNote("");
  };

  return (
    <div>
      <Link href="/" className="mb-3 inline-flex items-center gap-1 text-[15px] font-medium text-accent">
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 6l-6 6 6 6" />
        </svg>
        Recipes
      </Link>

      <h1 className="text-[32px] font-bold leading-tight tracking-tight">Save from Instagram</h1>
      <p className="mt-1 text-[15px] text-muted">
        Found something Josh would love? Paste the link — it lands in the idea bank.
      </p>

      <div className="mt-5 space-y-3">
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://www.instagram.com/reel/…"
          inputMode="url"
          className="w-full rounded-2xl bg-fill px-4 py-3.5 text-[15px] outline-none placeholder:text-muted focus:ring-2 focus:ring-accent"
        />
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="What is it? (e.g. Garlic butter chicken)"
          className="w-full rounded-2xl bg-fill px-4 py-3.5 text-[15px] outline-none placeholder:text-muted focus:ring-2 focus:ring-accent"
        />
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Notes (optional)"
          rows={3}
          className="w-full resize-none rounded-2xl bg-fill px-4 py-3.5 text-[15px] outline-none placeholder:text-muted focus:ring-2 focus:ring-accent"
        />
        <button
          onClick={submit}
          className="w-full rounded-full bg-foreground py-4 text-[17px] font-semibold text-white transition-transform active:scale-[0.98] disabled:opacity-40"
          disabled={!url.trim() && !title.trim()}
        >
          Save to idea bank
        </button>
        {saved && (
          <p className="rounded-2xl bg-green-100 p-4 text-center text-[14px] font-medium text-green-900">
            ✓ Saved! It&apos;s at the top of the idea bank on the Recipes tab.
          </p>
        )}
        <p className="text-center text-[12px] text-muted">
          Full auto-synthesis of the video &amp; caption into a recipe card is the next upgrade.
        </p>
      </div>
    </div>
  );
}
