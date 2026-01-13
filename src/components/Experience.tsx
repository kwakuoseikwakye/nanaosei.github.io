

const experiences = [
    {
        company: "Kirirom Digital",
        role: "Software/AI Engineer",
        period: "2024 — Present",
        location: "Tokyo",
        description: "Leading development of scalable web applications using Next.js and React. Designed and implemented high-performance REST APIs and integrated AI orchestration systems. Mentoring junior developers and implementing best practices for code quality and performance.",
        skills: ["React", "Next.js", "TypeScript", "Node.js"],
        current: true
    },
    {
        company: "PaySwitch",
        role: "Software Engineer",
        period: "2023 — 2024",
        location: "Accra",
        description: "Developed and maintained fintech solutions. Integrated multiple payment gateways and improved transaction processing speed by 40%.",
        skills: ["PHP", "Laravel", "MySQL", "Redis"],
        current: false
    },
    {
        company: "GitPlus",
        role: "Full Stack Developer",
        period: "2019 — 2023",
        location: "Accra",
        description: "Delivered custom web solutions for various clients. Specialized in e-commerce platforms and content management systems.",
        skills: ["WordPress", "PHP", "JavaScript", "CSS"],
        current: false
    }
]

export const Experience = () => {
    return (
        <div className="space-y-4">
            {experiences.map((exp, i) => (
                <div key={i} className="flex flex-col sm:flex-row gap-4 sm:gap-6 group">
                    {/* Date - Left Side */}
                    <div className="w-48 flex-shrink-0 pt-1">
                        <span className="text-zinc-400 font-medium text-sm tabular-nums tracking-wide">
                            {exp.period}
                        </span>
                    </div>

                    {/* Content - Right Side */}
                    <div className="flex-1 space-y-2 pb-8 border-b border-zinc-100 last:border-0">
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                            <h3 className="text-zinc-900 font-bold text-lg group-hover:text-zinc-600 transition-colors">
                                {exp.role}
                            </h3>
                            <span className="text-zinc-500 font-medium text-sm">
                                {exp.company}
                            </span>
                        </div>

                        <p className="text-zinc-500 text-sm leading-relaxed max-w-xl">
                            {exp.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}
