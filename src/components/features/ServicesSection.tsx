import { SectionHeader } from "@/components/ui/SectionHeader";

const services = [
  {
    icon: "💻",
    title: "Web Development",
    description:
      "Creating responsive websites with React, TypeScript, and Tailwind CSS using a clean component structure.",
  },
  {
    icon: "🎨",
    title: "UI Design",
    description:
      "Designing layouts that are easy to read, mobile-friendly, and visually balanced for a good user experience.",
  },
  {
    icon: "⚡",
    title: "Frontend Development",
    description:
      "Building interactive pages with routing, reusable components, animations, and light/dark mode support.",
  },
  {
    icon: "📚",
    title: "School Projects",
    description:
      "Completing class requirements while practicing proper folder structure and following project rubrics.",
  },
];

export function ServicesSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <SectionHeader
        label="Services"
        title="What I Offer"
        description="Skills and services I can help with as a student developer."
        centered
      />

      <div className="grid sm:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div
            key={service.title}
            className="group bg-card border border-border rounded-2xl p-7 hover:border-accent/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <span className="text-3xl mb-4 block">{service.icon}</span>
            <h3 className="text-xl font-bold text-fg group-hover:text-accent transition-colors duration-200 mb-3">
              {service.title}
            </h3>
            <p className="text-muted text-sm leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
