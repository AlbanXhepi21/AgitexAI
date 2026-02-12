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
    "bg-[#0D3B66] hover:bg-[#1a5a99] text-white shadow-md hover:shadow-lg transition-all duration-200",
  secondary:
    "bg-transparent border border-[#E2E8F0] text-[#FFFFFF] hover:bg-white hover:text-[#0D3B66] transition-all duration-200",
  ghost:
    "text-[var(--primary-deep-blue)] hover:bg-[var(--primary-deep-blue)]/10 transition-colors duration-200",
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-3 text-base rounded-xl",
  lg: "px-8 py-4 text-lg rounded-xl",
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
    "inline-flex items-center justify-center font-semibold font-display min-h-[44px]";

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
