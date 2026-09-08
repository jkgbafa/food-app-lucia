"use client";

import { useState } from "react";

export default function Checklist({ items }: { items: string[] }) {
  const [checked, setChecked] = useState<Set<number>>(new Set());
  return (
    <ul>
      {items.map((item, i) => {
        const done = checked.has(i);
        return (
          <li key={i} className="border-b border-black/5 last:border-b-0">
            <button
              onClick={() =>
                setChecked((prev) => {
                  const next = new Set(prev);
                  if (done) next.delete(i);
                  else next.add(i);
                  return next;
                })
              }
              className="flex w-full items-center gap-3 py-2.5 text-left"
            >
              <span
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                  done ? "border-accent bg-accent" : "border-black/20"
                }`}
              >
                {done && (
                  <svg viewBox="0 0 24 24" className="h-3 w-3 stroke-white" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </span>
              <span className={`text-[15px] ${done ? "text-muted line-through" : ""}`}>{item}</span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
