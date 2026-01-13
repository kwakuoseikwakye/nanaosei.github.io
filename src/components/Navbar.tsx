
"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Home, User, Briefcase, FolderGit2, Mail } from "lucide-react";

const navItems = [
    { name: "Home", href: "#", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Projects", href: "#projects", icon: FolderGit2 },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Contact", href: "mailto:kwakuoseikwakye@gmail.com", icon: Mail },
];

export const Navbar = () => {
    return (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
            <nav className="flex items-center gap-1 p-2 rounded-full bg-white/80 backdrop-blur-md border border-white/20 shadow-sm ring-1 ring-black/5">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                            "p-3 rounded-full text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 transition-all duration-300",
                            "flex items-center justify-center relative group"
                        )}
                        aria-label={item.name}
                    >
                        <item.icon className="size-5" strokeWidth={2} />
                        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-zinc-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                            {item.name}
                        </span>
                    </Link>
                ))}
            </nav>
        </div>
    );
};
