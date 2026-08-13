import React from "react";
import { cn } from "@/lib/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
};

export function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
  const variantStyles = {
    primary: "bg-accent text-accent-fg hover:bg-accent/90 hover:scale-[1.03] shadow-lg shadow-accent/20",
    secondary: "bg-accent-secondary/10 text-accent-secondary border border-accent-secondary/40 hover:bg-accent-secondary/20 hover:scale-[1.03]",
    outline: "bg-transparent text-accent border border-accent hover:bg-accent/10 hover:scale-[1.03]",
  };

  return (
    <button
      className={cn(
        "cursor-pointer inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent/30 px-6 py-2.5 rounded-xl text-sm",
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
