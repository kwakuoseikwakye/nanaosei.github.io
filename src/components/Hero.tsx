
"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";
import { Mail, ArrowRight, Download } from "lucide-react";

export const Hero = () => {
    return (
        <section className="flex flex-col items-center text-center pt-20 pb-12 space-y-8">
            {/* Avatar */}
            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-300 to-blue-300 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
                <div className="relative p-1 bg-white rounded-full">
                    <Image
                        width={180}
                        height={180}
                        quality={100}
                        src="/kwaku.png"
                        alt="Kwaku Osei Kwakye"
                        className="rounded-full size-32 md:size-44 object-cover"
                        priority
                    />
                </div>
                <div className="absolute bottom-2 right-2 bg-emerald-100 p-2 rounded-full border-2 border-white" title="Open for work">
                    <div className="size-3 bg-emerald-500 rounded-full animate-pulse"></div>
                </div>
            </div>

            {/* Intro Text */}
            <div className="space-y-4 max-w-2xl mx-auto px-4">
                <div className="flex items-center justify-center gap-2 text-zinc-600 font-medium bg-zinc-50 w-fit mx-auto px-4 py-1.5 rounded-full border border-zinc-100">
                    <span>👋</span>
                    <span>Hello, I'm Kwaku</span>
                </div>

                <h1 className="font-heading font-bold text-4xl md:text-6xl text-zinc-900 tracking-tight leading-tight">
                    Building digital <br />
                    <span className="text-zinc-500">experiences that matter.</span>
                </h1>

                <p className="text-zinc-500 text-lg md:text-xl max-w-lg mx-auto leading-relaxed">
                    I'm a Software Engineer focused on building accessible, pixel-perfect, and performant web applications.
                </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link
                    href="mailto:kwakuoseikwakye@gmail.com"
                    className="flex items-center gap-2 bg-zinc-900 text-white px-8 py-3.5 rounded-full font-medium hover:bg-zinc-800 hover:scale-105 transition-all duration-300 shadow-xl shadow-zinc-900/10"
                >
                    <Mail className="size-4" />
                    Contact Me
                </Link>
                <Link
                    href="/resume.pdf"
                    target="_blank"
                    className="flex items-center gap-2 bg-white text-zinc-900 border border-zinc-200 px-8 py-3.5 rounded-full font-medium hover:bg-zinc-50 hover:border-zinc-300 transition-all duration-300"
                >
                    <Download className="size-4" />
                    Download CV
                </Link>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-6 pt-4">
                <Link href="https://github.com/kwakuoseikwakye" target="_blank" className="text-zinc-400 hover:text-zinc-900 transition-colors">
                    <FaGithub className="size-6" />
                </Link>
                <Link href="https://linkedin.com/in/kwaku-osei-kwakye-2a5280132" target="_blank" className="text-zinc-400 hover:text-[#0077b5] transition-colors">
                    <FaLinkedin className="size-6" />
                </Link>
                <Link href="https://stackoverflow.com/users/13247079/kwaku" target="_blank" className="text-zinc-400 hover:text-[#f48024] transition-colors">
                    <FaStackOverflow className="size-6" />
                </Link>
            </div>
        </section>
    );
};
