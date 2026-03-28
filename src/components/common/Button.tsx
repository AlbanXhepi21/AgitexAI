"use client";

import Link from "next/link";
import { type ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
};

const variantStyles = {
  primary:
    "bg-[var(--accent)] hover:bg-[var(--accent-bright)] text-white shadow-md hover:shadow-accent-glow hover:-translate-y-0.5 transition-all duration-200 rounded-lg",
  secondary:
    "bg-transparent border border-[var(--border-hover)] text-[var(--text-primary)] hover:border-[var(--accent-dim)] hover:text-[var(--accent-bright)] transition-all duration-250 rounded-lg",
  ghost:
    "text-[var(--accent-bright)] hover:bg-[var(--accent-glow)] transition-colors duration-200 rounded-lg",
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm min-h-[40px]",
  md: "px-7 py-3.5 text-[15px] min-h-[48px]",
  lg: "px-8 py-4 text-lg min-h-[52px]",
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold font-body";

  const combined = `${base} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combined}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combined}
    >
      {children}
    </button>
  );
}
