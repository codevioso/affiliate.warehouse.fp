"use client";

import * as React from "react";
import { NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { CTAButton } from "@/components/CTAButton";

type HeaderProps = {
    onRequestAccess: () => void;
};

const SECTION_IDS = ["top", "problem", "features", "how-it-works", "tracking", "pricing", "trust", "faq", "contact"] as const;

export function Header({ onRequestAccess }: HeaderProps) {
    const [scrolled, setScrolled] = React.useState(false);
    const [activeId, setActiveId] = React.useState<string | null>("top");

    React.useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (!entry.isIntersecting) continue;
                    const id = entry.target.getAttribute("id");
                    if (id) setActiveId(id);
                }
            },
            { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
        );

        SECTION_IDS.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    const navItems = NAV_ITEMS.filter((i) => i.id !== "contact");
    const atTop = !scrolled; // dark at top, light when scrolled

    return (
        <header
            className={cn(
                "fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300",
                atTop
                    ? "border-white/10 bg-slate-900/90 backdrop-blur-xl supports-[backdrop-filter]:bg-slate-900/80"
                    : "border-slate-200/60 bg-white/90 shadow-sm backdrop-blur-xl supports-[backdrop-filter]:bg-white/80"
            )}
        >
            <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
                <a
                    href="#top"
                    className={cn(
                        "group flex items-center gap-2 rounded-xl px-2 py-1 text-base font-bold tracking-tight transition-colors hover:opacity-90",
                        atTop ? "text-white" : "text-slate-900"
                    )}
                    aria-label="Affiliate Warehouse"
                >
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 via-orange-500 to-orange-600 shadow-md shadow-orange-500/30 transition group-hover:shadow-orange-500/40">
                        <span className="h-2 w-2 rounded-full bg-white" />
                    </span>
                    <span className="hidden sm:inline">
                        <span className={atTop ? "text-white" : "text-slate-900"}>Affiliate</span>
                        <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent"> Warehouse</span>
                    </span>
                    <span className="sm:hidden">
                        <span className={atTop ? "text-white" : "text-slate-900"}>A</span>
                        <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">W</span>
                    </span>
                </a>

                <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
                    {navItems.map((item) => {
                        const sectionId = item.href.slice(1);
                        const isActive = activeId === sectionId;
                        return (
                            <a
                                key={item.id}
                                href={item.href}
                                className={cn(
                                    "relative rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                                    atTop
                                        ? "text-slate-300 hover:bg-white/10 hover:text-white"
                                        : "text-slate-600 hover:bg-orange-50 hover:text-orange-700",
                                    isActive && atTop && "text-amber-400 before:absolute before:bottom-1 before:left-2 before:right-2 before:h-0.5 before:rounded-full before:bg-amber-400 before:content-['']",
                                    isActive && !atTop && "text-orange-600 before:absolute before:bottom-1 before:left-2 before:right-2 before:h-0.5 before:rounded-full before:bg-gradient-to-r before:from-amber-500 before:to-orange-500 before:content-['']"
                                )}
                            >
                                {item.label}
                            </a>
                        );
                    })}
                </nav>

                <div className="flex items-center gap-2">
                    <a
                        href="#contact"
                        className={cn(
                            "hidden rounded-lg px-3 py-2 text-sm font-semibold transition sm:inline-flex",
                            atTop
                                ? "text-slate-300 hover:bg-white/10 hover:text-white"
                                : "text-slate-700 hover:bg-orange-50 hover:text-orange-700",
                            activeId === "contact" && atTop && "text-amber-400",
                            activeId === "contact" && !atTop && "text-orange-600"
                        )}
                    >
                        Contact
                    </a>
                    <CTAButton variant="orange" onClick={onRequestAccess}>
                        Request Preferred Contractor Access
                    </CTAButton>
                </div>
            </div>
        </header>
    );
}
