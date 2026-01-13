import Link from "next/link";
import {
    SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiRedux, SiVuedotjs,
    SiNodedotjs, SiExpress, SiPhp, SiLaravel, SiGo, SiPython, SiPostgresql, SiMysql, SiMongodb,
    SiGit, SiDocker, SiAmazon, SiLinux, SiNginx, SiTerraform, SiGooglecloud,
    SiOracle, SiJenkins, SiDatadog, SiPrometheus, SiRender, SiSupabase
} from "react-icons/si";
import { Database, Layout, Terminal } from "lucide-react";

const skillGroups = [
    {
        title: "Frontend",
        icon: <Layout className="size-4" />,
        skills: [
            { name: "React", icon: SiReact, color: "text-[#61DAFB]", url: "https://react.dev" },
            { name: "Next.js", icon: SiNextdotjs, color: "text-black", url: "https://nextjs.org" }, // Handle dark mode elsewhere if needed
            { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]", url: "https://www.typescriptlang.org" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]", url: "https://tailwindcss.com" },
            { name: "Redux", icon: SiRedux, color: "text-[#764ABC]", url: "https://redux.js.org" },
            { name: "Vue.js", icon: SiVuedotjs, color: "text-[#4FC08D]", url: "https://vuejs.org" },
        ]
    },
    {
        title: "Backend",
        icon: <Database className="size-4" />,
        skills: [
            { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]", url: "https://nodejs.org" },
            { name: "Express", icon: SiExpress, color: "text-black", url: "https://expressjs.com" },
            { name: "PHP", icon: SiPhp, color: "text-[#777BB4]", url: "https://www.php.net" },
            { name: "Laravel", icon: SiLaravel, color: "text-[#FF2D20]", url: "https://laravel.com" },
            { name: "GoLang", icon: SiGo, color: "text-[#00ADD8]", url: "https://go.dev" },
            { name: "Python", icon: SiPython, color: "text-[#3776AB]", url: "https://www.python.org" },
            { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]", url: "https://www.postgresql.org" },
            { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]", url: "https://www.mysql.com" },
            { name: "Supabase", icon: SiSupabase, color: "text-[#3ECF8E]", url: "https://supabase.com" },
            { name: "Oracle", icon: SiOracle, color: "text-[#F80000]", url: "https://www.oracle.com/database" },
            { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]", url: "https://www.mongodb.com" }
        ]
    },
    {
        title: "Tools & DevOps",
        icon: <Terminal className="size-4" />,
        skills: [
            { name: "Git", icon: SiGit, color: "text-[#F05032]", url: "https://git-scm.com" },
            { name: "Docker", icon: SiDocker, color: "text-[#2496ED]", url: "https://www.docker.com" },
            { name: "AWS", icon: SiAmazon, color: "text-[#FF9900]", url: "https://aws.amazon.com" },
            { name: "Terraform", icon: SiTerraform, color: "text-[#623CE4]", url: "https://www.terraform.io" },
            { name: "GCP", icon: SiGooglecloud, color: "text-[#4285F4]", url: "https://cloud.google.com" },
            { name: "Render", icon: SiRender, color: "text-[#46E3B7]", url: "https://render.com" },
            { name: "Jenkins", icon: SiJenkins, color: "text-[#D24939]", url: "https://www.jenkins.io" },
            { name: "Datadog", icon: SiDatadog, color: "text-[#632CA6]", url: "https://www.datadoghq.com" },
            { name: "Prometheus", icon: SiPrometheus, color: "text-[#E6522C]", url: "https://prometheus.io" },
            { name: "Laravel Nightwatch", icon: SiLaravel, color: "text-[#FF2D20]", url: "https://laravel.com/docs/11.x/dusk" }, // Linking to Dusk as it's the closest official testing tool
            { name: "Laravel Cloud", icon: SiLaravel, color: "text-[#FF2D20]", url: "https://cloud.laravel.com" },
            { name: "Linux", icon: SiLinux, color: "text-black", url: "https://www.linux.org" },
            { name: "Nginx", icon: SiNginx, color: "text-[#009639]", url: "https://nginx.org" }
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
                            <Link
                                key={skill.name}
                                href={skill.url}
                                target="_blank"
                                className="flex flex-col items-center justify-center p-4 rounded-2xl bg-zinc-50 border border-zinc-100/50 hover:border-zinc-200 transition-colors group"
                            >
                                <skill.icon className={`size-8 mb-2 ${skill.color} filter grayscale group-hover:grayscale-0 transition-all duration-300`} />
                                <span className="text-sm font-medium text-zinc-600 group-hover:text-zinc-900 transition-colors">
                                    {skill.name}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}