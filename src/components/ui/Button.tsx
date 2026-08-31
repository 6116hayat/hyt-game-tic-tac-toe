import { motion } from "motion/react";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
}

export function Button({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "font-medium rounded-xl transition-all duration-200 cursor-pointer";

  const variants = {
    primary:
      "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-glow hover:scale-105 active:scale-95",
    secondary:
      "bg-gray-800 text-white hover:bg-gray-700 hover:scale-105 active:scale-95",
    ghost:
      "bg-transparent text-purple-300 hover:text-white hover:bg-purple-900/30 active:scale-95",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      whileHover={
        !disabled
          ? { scale: 1, boxShadow: "0 0 30px rgba(124, 58, 237, 0.5)" }
          : {}
      }
      whileTap={!disabled ? { scale: 0.98 } : {}}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
}
