"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { useHeroTheme } from "@/contexts/hero-theme-context";
import { motion } from "framer-motion";

export function HeaderWrapper() {
  const { activeTheme } = useHeroTheme();

  const getHeaderBackground = () => {
    switch (activeTheme) {
      case 'primary':
        return "var(--gradient-primary)";
      case 'accent':
        return "var(--gradient-accent)";
      case 'warm':
        return "var(--gradient-warm)";
      default:
        return "var(--gradient-primary)";
    }
  };

  return (
    <motion.header
      className={`
        fixed top-0 left-0 right-0 z-40 
        backdrop-blur-sm border-b border-border/50
        transition-colors duration-300
      `}
      animate={{
        background: getHeaderBackground(),
      }}
      transition={{
        duration: 0.8,
        ease: "easeInOut"
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <nav className="flex items-center gap-8">
          <Link
            href="/"
            className="font-semibold text-white hover:text-white/80 transition-colors"
            style={{
              fontSize: "var(--s1)",
              transitionDuration: "var(--dur-1)",
              transitionTimingFunction: "var(--ease)",
            }}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-white/70 hover:text-white transition-colors"
            style={{
              fontSize: "var(--s1)",
              transitionDuration: "var(--dur-1)",
              transitionTimingFunction: "var(--ease)",
            }}
          >
            About
          </Link>
        </nav>
        <ThemeToggle />
      </div>
    </motion.header>
  );
}
