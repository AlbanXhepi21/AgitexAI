"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/common/Button";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#portfolio" },
  { label: "Process", href: "/#process" },
  { label: "Insights", href: "/#insights" },
  { label: "Contact", href: "/#contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastYRef = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > lastYRef.current && y > 100);
      lastYRef.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="navbar"
      className={`fixed w-full z-[100] transition-transform duration-300 ease-out ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } border-b border-[var(--border-subtle)] bg-[rgba(5,14,26,0.85)] backdrop-blur-[24px] supports-[backdrop-filter]:bg-[rgba(5,14,26,0.75)]`}
    >
      <nav className="container mx-auto max-w-[1140px] px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-display font-extrabold text-xl text-[var(--text-primary)] tracking-tight flex items-center gap-2.5"
        >
          <span className="relative flex h-8 w-8 items-center justify-center rounded-[7px] border border-[var(--border-hover)] bg-[var(--navy-card)] text-base font-extrabold text-white overflow-hidden">
            A
            <span
              className="absolute bottom-0.5 right-0.5 text-[11px] font-extrabold leading-none text-[var(--accent)]"
              aria-hidden
            >
              ×
            </span>
          </span>
          Agitex<span className="text-[var(--accent-bright)]">AI</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Button
            href="/#contact"
            variant="primary"
            size="sm"
            className="!px-5 !py-2 !text-[13px] !rounded-md !min-h-0 !shadow-none hover:!shadow-accent-glow"
          >
            Book a call
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="md:hidden p-2 text-[var(--text-primary)]"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-[var(--border-subtle)] bg-[var(--navy)] shadow-2xl"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-medium py-2"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                className="mt-2 inline-flex items-center justify-center font-semibold font-body bg-[var(--accent)] hover:bg-[var(--accent-bright)] text-white shadow-md hover:shadow-accent-glow hover:-translate-y-0.5 transition-all duration-200 rounded-lg px-7 py-3.5 text-[15px] min-h-[48px]"
                onClick={() => setMobileOpen(false)}
              >
                Book a call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
