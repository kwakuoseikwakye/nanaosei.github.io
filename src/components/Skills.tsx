import {
    SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiRedux, SiVuedotjs,
    SiNodedotjs, SiExpress, SiPhp, SiLaravel, SiGo, SiPython, SiPostgresql, SiMysql, SiMongodb,
    SiGit, SiDocker, SiAmazon, SiLinux, SiNginx, SiTerraform, SiGooglecloud,
    SiJavascript
} from "react-icons/si";
import { Code2, Database, Layout, Terminal } from "lucide-react";

interface Skill {
    name: string;
    icon: React.ElementType;
    color?: string; // Optional custom color
}

const skillGroups = [
    {
        title: "Frontend",
        icon: <Layout className="size-4" />,
        skills: [
            { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
            { name: "Next.js", icon: SiNextdotjs, color: "text-black" }, // Handle dark mode elsewhere if needed
            { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
            { name: "Redux", icon: SiRedux, color: "text-[#764ABC]" },
            { name: "Vue.js", icon: SiVuedotjs, color: "text-[#4FC08D]" },
        ]
    },
    {
        title: "Backend",
        icon: <Database className="size-4" />,
        skills: [
            { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
            { name: "Express", icon: SiExpress, color: "text-black" },
            { name: "PHP", icon: SiPhp, color: "text-[#777BB4]" },
            { name: "Laravel", icon: SiLaravel, color: "text-[#FF2D20]" },
            { name: "GoLang", icon: SiGo, color: "text-[#00ADD8]" },
            { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
            { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]" },
            { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]" },
            { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" }
        ]
    },
    {
        title: "Tools & DevOps",
        icon: <Terminal className="size-4" />,
        skills: [
            { name: "Git", icon: SiGit, color: "text-[#F05032]" },
            { name: "Docker", icon: SiDocker, color: "text-[#2496ED]" },
            { name: "AWS", icon: SiAmazon, color: "text-[#FF9900]" },
            { name: "Terraform", icon: SiTerraform, color: "text-[#623CE4]" },
            { name: "GCP", icon: SiGooglecloud, color: "text-[#4285F4]" },
            { name: "Linux", icon: SiLinux, color: "text-black" },
            { name: "Nginx", icon: SiNginx, color: "text-[#009639]" }
        ]
    }
]

export const Skills = () => {
    return (
        <div className="space-y-12">
            {skillGroups.map((group, i) => (
                <div key={i} className="space-y-4">
                    <div className="flex items-center gap-2 text-zinc-400 font-medium text-sm uppercase tracking-wider">
                        {group.icon}
                        {group.title}
                    </div>
                    <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                        {group.skills.map((skill) => (
                            <div
                                key={skill.name}
                                className="flex flex-col items-center justify-center p-4 rounded-2xl bg-zinc-50 border border-zinc-100/50 hover:border-zinc-200 transition-colors group"
                            >
                                <skill.icon className={`size-8 mb-2 ${skill.color} filter grayscale group-hover:grayscale-0 transition-all duration-300`} />
                                <span className="text-sm font-medium text-zinc-600 group-hover:text-zinc-900 transition-colors">
                                    {skill.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}