import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/SectionHeader";

const contactInfo = [
  {
    icon: "📞",
    label: "Phone",
    value: "(+63) 912 000 0000",
  },
  {
    icon: "✉️",
    label: "Email",
    value: "simon@example.com",
    href: "mailto:simon@example.com",
  },
  {
    icon: "📍",
    label: "Address",
    value: "Philippines",
  },
];

export function ContactSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <SectionHeader
        label="Contact"
        title="Get In Touch"
        description="Send me a message if you want to connect or talk about a project."
        centered
      />

      <div className="grid lg:grid-cols-2 gap-10 items-start mt-4">
        <div className="bg-card rounded-2xl p-8 border border-border animate-fade-in">
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="firstname" className="block text-xs text-muted mb-2 font-mono">
                  First name
                </label>
                <input id="firstname" type="text" placeholder="Simon" className="input-field" />
              </div>
              <div>
                <label htmlFor="lastname" className="block text-xs text-muted mb-2 font-mono">
                  Last name
                </label>
                <input id="lastname" type="text" placeholder="Doe" className="input-field" />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-xs text-muted mb-2 font-mono">
                Email
              </label>
              <input id="email" type="email" placeholder="simon@example.com" className="input-field" />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs text-muted mb-2 font-mono">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Write your message here..."
                className="input-field resize-none"
              />
            </div>

            <Button type="submit" variant="primary" className="w-full">
              Send Message
            </Button>
          </form>
        </div>

        <div className="space-y-5 animate-fade-in-delay">
          {contactInfo.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-5 bg-card border border-border rounded-2xl p-5 hover:border-accent/40 transition-all duration-200 group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div>
                <p className="text-muted text-xs font-mono mb-1">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="text-fg font-medium hover:text-accent transition-colors">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-fg font-medium">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
