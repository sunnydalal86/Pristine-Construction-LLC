"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Button from "../ui/Button";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Team", href: "#team" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow,border-color] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolled
            ? "bg-cream-light/95 backdrop-blur-md shadow-sm border-b border-tan/20"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8 md:py-5">
          <a href="#" className="relative z-50 flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Pristine Construction"
              width={794}
              height={183}
              className="h-14 w-auto md:h-16"
              priority
            />
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-[0.8rem] font-medium tracking-wide transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  scrolled
                    ? "text-forest/55 hover:text-olive"
                    : "text-cream/70 hover:text-cream"
                }`}
              >
                {link.label}
              </a>
            ))}
            <Button href="#contact" variant="solid" className="ml-2">
              Start a Project
            </Button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-50 flex flex-col gap-1.5 md:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${
                mobileOpen
                  ? "translate-y-2 rotate-45 bg-forest"
                  : scrolled
                  ? "bg-forest"
                  : "bg-cream"
              }`}
            />
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${
                mobileOpen
                  ? "opacity-0"
                  : scrolled
                  ? "bg-forest"
                  : "bg-cream"
              }`}
            />
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${
                mobileOpen
                  ? "-translate-y-2 -rotate-45 bg-forest"
                  : scrolled
                  ? "bg-forest"
                  : "bg-cream"
              }`}
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-[72px] left-0 right-0 z-40 overflow-hidden border-b border-tan/20 bg-cream-light/98 backdrop-blur-md shadow-lg md:hidden"
          >
            <div className="flex flex-col px-6 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-tan/10 py-3 text-[0.85rem] font-medium text-forest/70 transition-colors hover:text-olive last:border-0"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4">
                <Button
                  href="#contact"
                  variant="solid"
                  onClick={() => setMobileOpen(false)}
                  className="w-full text-center"
                >
                  Start a Project
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
