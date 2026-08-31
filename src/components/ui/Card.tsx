import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "dark" | "light";
  hover?: boolean;
  glow?: boolean;
}

export function Card({
  children,
  className = "",
  variant = "dark",
  hover = false,
  glow = false,
}: CardProps) {
  const variants = {
    dark: {
      background: "bg-gray-800/50",
      border: "border-gray-700/50",
      hover:
        "hover:border-purple-500/30 hover:shadow-glow hover:bg-gray-800/70",
    },
    light: {
      background: "bg-white/80",
      border: "border-gray-200",
      hover: "hover:border-purple-400/50 hover:shadow-lg hover:bg-white/90",
    },
  };

  const colors = variants[variant];

  return (
    <div
      className={`
        ${colors.background}
        ${colors.border}
        rounded-2xl
        p-6
        transition-all duration-300
        ${hover ? "hover:border-purple-500/30 hover:shadow-glow hover:bg-gray-800/70" : ""}
        ${glow ? "shadow-glow border-purple-500/20" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
