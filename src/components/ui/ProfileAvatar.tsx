import { useState } from "react";
import { cn } from "@/lib/cn";

type ProfileAvatarProps = {
  size?: "md" | "lg";
  className?: string;
};

export function ProfileAvatar({ size = "lg", className }: ProfileAvatarProps) {
  const [hasError, setHasError] = useState(false);

  const sizes = {
    md: "w-44 h-52 sm:w-52 sm:h-60",
    lg: "w-56 h-64 sm:w-64 sm:h-72 lg:w-72 lg:h-80",
  };

  return (
    <div className={cn("relative flex items-center justify-center group animate-float", className)}>
      <div className="absolute -inset-3 rounded-3xl bg-linear-to-br from-accent/40 via-accent-secondary/30 to-transparent blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

      <div
        className={cn(
          "relative rounded-3xl overflow-hidden bg-card border-2 border-accent/30 flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.03] group-hover:border-accent/60 shadow-2xl",
          sizes[size],
        )}
      >
        {!hasError ? (
          <img
            src="/profile.jpg"
            alt="Simon profile"
            className="w-full h-full object-cover object-[center_20%]"
            onError={() => setHasError(true)}
          />
        ) : (
          <div className="w-full h-full bg-linear-to-br from-accent/30 to-accent-secondary/20 flex items-center justify-center">
            <span className="text-6xl font-bold text-accent">S</span>
          </div>
        )}
      </div>
    </div>
  );
}
