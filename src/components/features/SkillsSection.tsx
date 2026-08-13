import { SectionHeader } from "@/components/ui/SectionHeader";

const skills = [
  { name: "React", level: 75 },
  { name: "TypeScript", level: 60 },
  { name: "Tailwind CSS", level: 80 },
  { name: "Git & GitHub", level: 65 },
];

export function SkillsSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <SectionHeader
        label="Skills"
        title="Tech Stack"
        description="Technologies I'm currently learning and using in my projects."
        centered
      />

      <div className="max-w-2xl mx-auto space-y-6">
        {skills.map((skill, index) => (
          <div key={skill.name} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-fg">{skill.name}</span>
              <span className="font-mono text-xs text-accent">{skill.level}%</span>
            </div>
            <div className="h-2.5 bg-input rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-linear-to-r from-accent to-accent-secondary transition-all duration-1000"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
