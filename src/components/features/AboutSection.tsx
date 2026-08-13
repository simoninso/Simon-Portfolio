import { ProfileAvatar } from "@/components/ui/ProfileAvatar";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function AboutSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <SectionHeader
        label="Resume"
        title="About Simon"
        description="A quick introduction about me and my journey in web development."
        centered
      />

      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start mt-4">
        <div className="flex justify-center animate-fade-in">
          <ProfileAvatar size="md" />
        </div>

        <div className="animate-fade-in-delay space-y-6">
          <div className="space-y-4 text-muted leading-relaxed">
            <p>
              I&apos;m Simon, a BSIT student from the Philippines. I started learning
              web development in class and got interested in building websites that
              look good and work well on any device.
            </p>
            <p>
              I&apos;m still learning, but I enjoy working with React, TypeScript, and
              Tailwind CSS. This portfolio is one of my practice projects to apply what
              our teacher taught us about project structure and clean code.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Name", value: "Simon" },
              { label: "Experience", value: "1 Year" },
              { label: "Location", value: "Philippines" },
              { label: "Role", value: "Student Developer" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-card border border-border rounded-xl p-4 hover:border-accent/30 transition-colors duration-200"
              >
                <p className="text-xs text-accent font-mono uppercase tracking-wide mb-1">
                  {item.label}
                </p>
                <p className="text-fg font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
