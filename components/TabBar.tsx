"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const TABS = [
  {
    href: "/",
    label: "Recipes",
    icon: (
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15.5a2.5 2.5 0 0 1-2.5 2.5H6.5A2.5 2.5 0 0 1 4 18.5v-13ZM6.5 5A.5.5 0 0 0 6 5.5V16c.16-.03.33-.05.5-.05H18V5H6.5ZM6 18.5a.5.5 0 0 0 .5.5H18v-1H6.5a.5.5 0 0 0-.5.5Z" />
    ),
  },
  {
    href: "/plan",
    label: "Meal Plan",
    icon: (
      <path d="M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1h1a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h1V3a1 1 0 0 1 1-1Zm13 8H4v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8ZM7 13.5A1.5 1.5 0 1 1 7 16.5a1.5 1.5 0 0 1 0-3Z" />
    ),
  },
  {
    href: "/josh",
    label: "Josh's Guide",
    icon: (
      <path d="M12 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0 9c4.42 0 8 2.24 8 5v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2c0-2.76 3.58-5 8-5Zm0 2c-3.5 0-6 1.65-6 3v1h12v-1c0-1.35-2.5-3-6-3Z" />
    ),
  },
];

export default function TabBar() {
  const pathname = usePathname();
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-black/5 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-2xl items-stretch justify-around pb-[env(safe-area-inset-bottom)]">
        {TABS.map((tab) => {
          const active =
            tab.href === "/" ? pathname === "/" || pathname.startsWith("/recipes") || pathname === "/import" : pathname.startsWith(tab.href);
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`flex flex-1 flex-col items-center gap-0.5 py-2.5 text-[11px] font-medium transition-colors ${
                active ? "text-accent" : "text-muted"
              }`}
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                {tab.icon}
              </svg>
              {tab.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
