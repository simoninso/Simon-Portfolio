import { cn } from "@/lib/cn";
import { SectionHeader } from "@/components/ui/SectionHeader";

const projects = [
  {
    title: "Simon Portfolio",
    tag: "React",
    description:
      "A personal portfolio built with React, TypeScript, Tailwind CSS, and React Router. Includes light/dark mode and section-based architecture.",
  },
  {
    title: "Class Activity App",
    tag: "JavaScript",
    description:
      "A school activity project that helped me practice DOM manipulation, basic logic, and organizing code into smaller parts.",
  },
  {
    title: "Landing Page Project",
    tag: "HTML/CSS",
    description:
      "A simple landing page focused on layout, spacing, and responsive design using HTML and CSS before moving into React.",
  },
];

export function ProjectsSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 pb-16">
      <SectionHeader
        label="Work"
        title="My Projects"
        description="Projects I've built while learning web development."
      />

      <div className="space-y-5">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={cn(
              "group flex flex-col sm:flex-row gap-5 bg-card border border-border rounded-2xl p-6 sm:p-7",
              "hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 animate-fade-in",
            )}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="w-1 sm:w-1.5 self-stretch rounded-full bg-linear-to-b from-accent to-accent-secondary shrink-0" />
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="text-lg font-bold text-fg group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <span className="text-xs font-mono text-accent-secondary bg-accent-secondary/10 px-2 py-1 rounded-full">
                  {project.tag}
                </span>
              </div>
              <p className="text-muted text-sm leading-relaxed">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
