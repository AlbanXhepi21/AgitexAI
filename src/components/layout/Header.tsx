"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/common/Button";

const navLinks = [
  { label: "What We Do", href: "#services" },
  { label: "Why AgitexAI?", href: "#why-us" },
  { label: "Our Work", href: "#portfolio" },
  { label: "Get Started", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-5 md:px-6 py-3 md:py-4 flex items-center justify-between">
        <Link
          href="/"
          className={`font-display font-bold text-lg md:text-xl transition-colors ${
            scrolled
              ? "text-[#0D3B66]"
              : "text-white"
          }`}
        >
          Agitex<span className={scrolled ? "text-[#3B82F6]" : "text-[#93C5FD]"}>AI</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? "text-gray-600 hover:text-[#0D3B66]"
                  : "text-[#E2E8F0] hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Button
            href="#contact"
            variant={scrolled ? "primary" : "secondary"}
            size="md"
          >
            Start Your Project
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className={`md:hidden p-2 transition-colors ${scrolled ? "text-[#0D3B66]" : "text-white"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-xl"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-[var(--primary-deep-blue)] font-medium py-2"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                href="#contact"
                variant="primary"
                size="md"
                className="mt-4"
              >
                Start Your Project
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
