"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type ButtonProps = {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: "solid" | "outline";
  className?: string;
};

export function PrimaryButton({
  label,
  href,
  onClick,
  variant = "solid",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm md:text-base font-medium transition-all duration-200";
  const solid =
    "bg-paprika-caramel text-paprika-cream shadow-soft-3d hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0";
  const outline =
    "border border-paprika-caramel text-paprika-caramel bg-paprika-cream/70 hover:bg-paprika-caramel hover:text-paprika-cream";

  const classes = `${base} ${
    variant === "solid" ? solid : outline
  } ${className}`;

  const content = (
    <motion.span
      initial={{ y: 2, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex items-center gap-2"
    >
      <span>{label}</span>
    </motion.span>
  );

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {content}
    </button>
  );
}