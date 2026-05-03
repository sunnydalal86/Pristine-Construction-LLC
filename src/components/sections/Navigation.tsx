"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Button from "../ui/Button";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Our Team", href: "#team" },
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

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-cream-light/95 backdrop-blur-md shadow-sm border-b border-tan/30"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8 md:py-5">
          <a href="#" className="relative z-50 flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Pristine Construction"
              width={1945}
              height={1402}
              className="h-12 w-auto md:h-14"
              priority
            />
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                  scrolled
                    ? "text-forest/60 hover:text-olive"
                    : "text-cream/80 hover:text-sage"
                }`}
              >
                {link.label}
              </a>
            ))}
            <Button href="#contact" variant="solid" className="ml-2">
              Get a Quote
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
                  ? "translate-y-2 rotate-45 bg-cream"
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
                  ? "-translate-y-2 -rotate-45 bg-cream"
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-forest"
          >
            <div className="flex flex-col items-center gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="font-serif text-3xl text-cream/90 transition-colors hover:text-sage"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.08, duration: 0.4 }}
              >
                <Button
                  href="#contact"
                  variant="solid"
                  onClick={() => setMobileOpen(false)}
                >
                  Get a Quote
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
