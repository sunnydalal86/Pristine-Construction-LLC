import Image from "next/image";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
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
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/Pristine-Builders-577460896270063/",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCcQ00tgMg9r12T3xAdVGoMg",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-charcoal text-cream-light">
      <div
        className="pointer-events-none absolute -right-[8%] bottom-0 select-none font-serif text-[clamp(5.5rem,18vw,14rem)] font-light leading-none tracking-[-0.06em] text-cream/[0.03]"
        aria-hidden
      >
        PRISTINE
      </div>

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cream/[0.08] to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6 pb-14 pt-20 md:px-8 md:pb-20 md:pt-24 lg:pb-24 lg:pt-28">
        <div className="grid gap-14 border-b border-cream/[0.06] pb-16 md:grid-cols-12 md:gap-12 md:pb-20 lg:gap-16">
          <div className="md:col-span-5">
            <Image
              src="/images/logo.png"
              alt="Pristine Construction"
              width={1945}
              height={1402}
              className="h-14 w-auto md:h-[4.25rem]"
            />
            <p className="mt-7 max-w-sm text-[0.84rem] font-light leading-[1.75] text-cream/[0.38]">
              Bay Area design-build for kitchens, baths, ADUs, and full-home remodels — led
              in-house with disciplined communication and finish standards that hold up to
              daily life.
            </p>
          </div>

          <div className="grid gap-12 sm:grid-cols-2 md:col-span-7 md:grid-cols-2 md:gap-10 lg:gap-14">
            <div>
              <h4 className="text-[10px] font-medium uppercase tracking-[0.22em] text-cream/[0.28]">
                Navigate
              </h4>
              <div className="mt-6 h-px w-10 bg-sage/[0.22]" />
              <nav className="mt-6 flex flex-col gap-3">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="w-fit text-[0.82rem] font-light text-cream/[0.42] transition-[color,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:translate-x-0.5 hover:text-sage-light"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div>
              <h4 className="text-[10px] font-medium uppercase tracking-[0.22em] text-cream/[0.28]">
                Studio
              </h4>
              <div className="mt-6 h-px w-10 bg-sage/[0.22]" />
              <div className="mt-6 space-y-5 text-[0.82rem] font-light leading-[1.65] text-cream/[0.42]">
                <p>
                  <a
                    href="mailto:office@pristineconstructionllc.com"
                    className="transition-colors duration-500 hover:text-sage-light"
                  >
                    office@pristineconstructionllc.com
                  </a>
                </p>
                <p>
                  <a
                    href="tel:+14084218997"
                    className="transition-colors duration-500 hover:text-sage-light"
                  >
                    (408) 421-8997
                  </a>
                </p>
                <p className="max-w-[14rem] text-cream/[0.36]">
                  2152 Caracas Ct
                  <br />
                  San Jose, CA 95122
                </p>
                <p className="text-[0.75rem] uppercase tracking-[0.14em] text-cream/[0.28]">
                  Mon – Fri · 7am – 6pm
                </p>
              </div>

              <div className="mt-8 flex gap-5">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/[0.1] text-cream/[0.32] transition-[color,border-color,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-px hover:border-cream/[0.22] hover:text-sage-light"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 text-[0.68rem] font-light uppercase tracking-[0.14em] text-cream/[0.22] md:flex-row md:items-center">
          <p>&copy; {new Date().getFullYear()} Pristine Construction LLC</p>
          <p className="md:text-right">Licensed · Insured · In-House Team · Bay Area</p>
        </div>
      </div>
    </footer>
  );
}
