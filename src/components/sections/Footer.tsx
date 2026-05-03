import Image from "next/image";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/pristineconstruction408",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/Pristine-Builders-577460896270063/",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCcQ00tgMg9r12T3xAdVGoMg",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-forest-light text-cream-light">
      <div className="h-1.5 bg-gradient-to-r from-transparent via-sage to-transparent" />
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-24">
        <div className="grid gap-14 md:grid-cols-3 lg:gap-16">
          <div>
            <Image
              src="/images/logo.png"
              alt="Pristine Construction"
              width={1945}
              height={1402}
              className="h-16 w-auto md:h-20"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-sage/60">
              Premium residential remodeling in the Bay Area. Built with
              precision, designed to last.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.1em] text-tan/50">
              Navigation
            </h4>
            <nav className="mt-4 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-cream/50 transition-colors hover:text-sage"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.1em] text-tan/50">
              Get in Touch
            </h4>
            <div className="mt-4 space-y-3 text-sm text-cream/50">
              <p>
                <a
                  href="mailto:office@pristineconstructionllc.com"
                  className="transition-colors hover:text-sage"
                >
                  office@pristineconstructionllc.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+14084218997"
                  className="transition-colors hover:text-sage"
                >
                  (408) 421-8997
                </a>
              </p>
              <p>2152 Caracas Ct, San Jose, CA 95122</p>
              <p>Mon – Fri: 7am – 6pm</p>
            </div>
            <div className="mt-6 flex gap-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-tan/40 transition-colors hover:text-sage"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-olive/20">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-tan/30 md:flex-row md:px-8">
          <p>&copy; {new Date().getFullYear()} Pristine Construction LLC. All rights reserved.</p>
          <p>
            Website by{" "}
            <a
              href="https://dizzledigital.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-sage/60"
            >
              Dizzle Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
