import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Github, Folder } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const projects = [
    {
        title: "Micholin",
        description: "An AI platform for generating personal videos in different languages. Leveraging advanced TTS and lip-sync technologies.",
        tech: ["TypeScript", "Next.js", "AI", "PostgreSQL"],
        link: "https://www.michol.in",
        github: null,
        image: "/micholin.png"
    },
    {
        title: "Gasppy",
        description: "A comprehensive gift card management platform enabling businesses to create, manage, and track gift cards.",
        tech: ["Next.js", "React", "Node.js", "PostgreSQL"],
        link: "https://gasppy.com",
        github: null,
        image: "/gasppy.png"
    },
    {
        title: "FundPeck",
        description: "A crowdfunding platform empowering creators and startups to raise funds securely and efficiently.",
        tech: ["PHP", "Laravel", "PostgreSQL", "Golang"],
        link: "https://fundpeck.com",
        github: null,
        image: "/fundpeck.png"
    },
    {
        title: "TheTeller Plugin",
        description: "A robust WooCommerce payment gateway plugin for TheTeller, enabling seamless transactions for merchants.",
        tech: ["PHP", "WordPress", "WooCommerce"],
        link: "https://github.com/kwakuoseikwakye/woocommerce-theteller-payment-gateway",
        github: "https://github.com/kwakuoseikwakye/woocommerce-theteller-payment-gateway",
        image: null
    },
    {
        title: "Nanascript Kit",
        description: "A simplified, lightweight Express.js starter kit for building scalable APIs quickly with best practices.",
        tech: ["JavaScript", "Express", "Node.js"],
        link: "https://www.npmjs.com/package/nanascript-express-api-starter-kit",
        github: "https://github.com/kwakuoseikwakye/nanascript-express-api-starter-kit",
        image: null
    },
]

export const Projects = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
                <div key={i} className="group space-y-4">
                    {/* Image Area */}
                    <a href={p.link} target="_blank" className="block overflow-hidden rounded-2xl bg-zinc-100 aspect-video relative group-hover:scale-[1.02] transition-transform duration-300">
                        {p.image ? (
                            <Image
                                src={p.image}
                                alt={p.title}
                                fill
                                className="object-cover"
                            />
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center text-zinc-300 group-hover:text-zinc-400 transition-colors">
                                <Folder className="size-16" strokeWidth={1} />
                            </div>
                        )}
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                    </a>

                    <div className="space-y-2">
                        <div className="flex justify-between items-start">
                            <h3 className="font-bold text-lg text-zinc-900 group-hover:text-zinc-600 transition-colors">
                                <a href={p.link} target="_blank">{p.title}</a>
                            </h3>
                            <div className="flex gap-2">
                                {p.github && (
                                    <Link href={p.github} target="_blank" className="text-zinc-400 hover:text-zinc-900">
                                        <Github className="size-5" />
                                    </Link>
                                )}
                                <Link href={p.link} target="_blank" className="text-zinc-400 hover:text-zinc-900">
                                    <ExternalLink className="size-5" />
                                </Link>
                            </div>
                        </div>
                        <p className="text-zinc-500 text-sm leading-relaxed line-clamp-2">
                            {p.description}
                        </p>
                        <div className="flex flex-wrap gap-2 pt-1">
                            {p.tech.map((t) => (
                                <Badge key={t} variant="secondary" className="bg-zinc-100 text-zinc-600 hover:bg-zinc-200 font-normal">
                                    {t}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}