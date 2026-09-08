"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const TABS = [
  {
    href: "/",
    label: "Home",
    match: (p: string) => p === "/" || p.startsWith("/wife") || p.startsWith("/nursing"),
    icon: <path d="M4 11l8-7 8 7v8a2 2 0 0 1-2 2h-4v-6h-4v6H6a2 2 0 0 1-2-2z" />,
  },
  {
    href: "/josh",
    label: "Josh",
    match: (p: string) => p.startsWith("/josh"),
    icon: <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8c0-3.3 3.1-6 7-6s7 2.7 7 6" />,
  },
  {
    href: "/recipes",
    label: "Recipes",
    match: (p: string) => p.startsWith("/recipes") || p === "/import",
    icon: <path d="M4 19V5a2 2 0 0 1 2-2h12v18H6a2 2 0 0 1-2-2Zm0 0a2 2 0 0 1 2-2h12M8 7h6" />,
  },
  {
    href: "/plan",
    label: "Plan",
    match: (p: string) => p.startsWith("/plan"),
    icon: <path d="M8 3v3m8-3v3M4 8h16M6 5h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />,
  },
];

export default function TabBar() {
  const pathname = usePathname();
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-black/5 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-2xl items-stretch justify-around pb-[env(safe-area-inset-bottom)]">
        {TABS.map((tab) => {
          const active = tab.match(pathname);
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`flex flex-1 cursor-pointer flex-col items-center gap-1 py-2.5 text-[11px] font-medium transition-colors duration-150 ${
                active ? "text-foreground" : "text-muted"
              }`}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6 fill-none stroke-current"
                strokeWidth={active ? 1.9 : 1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
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
