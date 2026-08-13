import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { ProfileAvatar } from "@/components/ui/ProfileAvatar";
import { SocialIcons } from "@/components/ui/SocialIcons";

const stats = [
  { value: 1, label: "Years of", sublabel: "experience" },
  { value: 2, label: "Projects", sublabel: "completed" },
  { value: 6, label: "Technologies", sublabel: "learned" },
  { value: 45, label: "Code", sublabel: "commits" },
];

const socials = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "#" },
  { label: "Email", href: "mailto:simon@example.com" },
];

function StatItem({ value, label, sublabel }: (typeof stats)[0]) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1800;
    const steps = 40;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="bg-card border border-border rounded-2xl p-4 sm:p-5 text-center hover:border-accent/40 transition-colors duration-200">
      <span className="text-3xl sm:text-4xl font-bold text-accent leading-none tabular-nums block mb-2">
        {count}
      </span>
      <div className="font-mono text-[10px] sm:text-xs text-muted leading-snug uppercase tracking-wide">
        <p>{label}</p>
        <p>{sublabel}</p>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-4.25rem)] max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col justify-center hero-glow">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div className="flex justify-center lg:justify-start order-1 animate-fade-in">
          <ProfileAvatar size="lg" />
        </div>

        <div className="order-2 text-center lg:text-left">
          <p className="inline-block font-mono text-xs sm:text-sm text-accent-secondary bg-accent-secondary/10 px-3 py-1 rounded-full mb-4 animate-fade-in">
            Web Developer
          </p>

          <h1 className="font-display text-3xl sm:text-5xl lg:text-5xl font-bold leading-tight mb-4 animate-fade-in-delay">
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-accent to-accent-secondary">
              Simon
            </span>
          </h1>

          <p className="text-muted text-sm sm:text-base leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0 animate-fade-in-delay">
            I&apos;m a BSIT student building modern websites with React and Tailwind CSS.
            I love turning ideas into clean, responsive pages and learning something new every week.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in-delay-2">
            <Link to="/skills">
              <Button variant="primary">View My Work</Button>
            </Link>
            <Link to="/contact">
              <Button variant="secondary">Contact Me</Button>
            </Link>
          </div>

          <div className="mt-8 flex justify-center lg:justify-start animate-fade-in-delay-2">
            <SocialIcons links={socials} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 lg:mt-16">
        {stats.map((stat) => (
          <StatItem key={`${stat.label}-${stat.sublabel}`} {...stat} />
        ))}
      </div>
    </section>
  );
}
