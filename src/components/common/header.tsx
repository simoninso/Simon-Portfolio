import { useState } from "react";
import { Link, NavLink } from "react-router";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "Resume" },
  { to: "/skills", label: "Work" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-page/80 backdrop-blur-md border-b border-border/40 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-[4.25rem] flex items-center justify-between gap-4">
        <NavLink to="/" className="font-display text-lg sm:text-xl font-extrabold tracking-widest shrink-0">
          <span className="text-accent">SIMON</span>
        </NavLink>

        <nav className="hidden lg:flex items-center gap-1 bg-card/60 border border-border/50 rounded-full px-2 py-1">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                cn(
                  "font-display text-sm px-4 py-1.5 rounded-full transition-all duration-200",
                  isActive
                    ? "bg-accent text-accent-fg font-semibold"
                    : "text-muted hover:text-fg hover:bg-page/50",
                )
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <ThemeToggle />
          <Link to="/contact">
            <Button variant="primary" className="py-2 px-5 text-xs">
              Hire me
            </Button>
          </Link>
        </div>

        <div className="flex lg:hidden items-center gap-2">
          <ThemeToggle />
          <button
            className="text-fg text-xs font-mono border border-border px-3 py-1.5 rounded-xl hover:border-accent transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="lg:hidden border-t border-border px-6 py-4 flex flex-col gap-3 animate-fade-in bg-page">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                cn(
                  "font-display text-sm px-4 py-2 rounded-xl transition-colors duration-200",
                  isActive ? "bg-accent text-accent-fg" : "text-fg hover:bg-card",
                )
              }
            >
              {label}
            </NavLink>
          ))}
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            <Button variant="primary" className="w-full py-2.5 text-xs">
              Hire me
            </Button>
          </Link>
        </nav>
      )}
    </header>
  );
}
