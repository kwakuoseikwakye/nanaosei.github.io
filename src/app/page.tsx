import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutMe } from "@/components/AboutMe";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-black selection:text-white pb-20">
      <Navbar />

      <main className="container-width pt-8 space-y-20">
        <Hero />

        {/* About Me Section */}
        <section id="about" className="scroll-mt-24 space-y-4">
          <h2 className="text-2xl font-bold font-heading">About</h2>
          <AboutMe />
        </section>

        {/* Experience Section */}
        <section id="experience" className="scroll-mt-24 space-y-4">
          <h2 className="text-2xl font-bold font-heading">Work Experience</h2>
          <Experience />
        </section>

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-24 space-y-4">
          <h2 className="text-2xl font-bold font-heading">Projects</h2>
          <Projects />
        </section>

        {/* Skills Section */}
        <section id="skills" className="scroll-mt-24 space-y-4">
          <h2 className="text-2xl font-bold font-heading">Skills</h2>
          <Skills />
        </section>
      </main>
    </div>
  );
}
