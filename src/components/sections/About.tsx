"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";

const PRINCIPLES = [
  {
    number: "01",
    title: "In-House Team",
    description: "Every tradesperson on your project works for us directly. No subcontractors, no unknown crews, no finger-pointing.",
  },
  {
    number: "02",
    title: "Single Point of Contact",
    description: "One project manager from start to finish. You always know who to call and what's happening next.",
  },
  {
    number: "03",
    title: "Quality Control",
    description: "Because we employ our crew, we control the standard. Every phase is inspected before moving forward.",
  },
];

const STATS = [
  { value: "10+", label: "Years in Business" },
  { value: "200+", label: "Projects Delivered" },
  { value: "100%", label: "Referral-Based Growth" },
];

const ABOUT_VIDEO_ID = "YxqfAF3UspU";

export default function About() {
  return (
    <SectionWrapper id="about" bg="tan">
      <div className="grid gap-16 lg:grid-cols-[1fr,1.1fr] lg:gap-24">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-olive/50">
            01 / About
          </p>
          <div className="mt-8 flex items-center gap-3">
            <div className="h-px w-8 bg-olive/40" />
          </div>
          <h2 className="mt-5 font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.12] tracking-[-0.02em]">
            Your Home Shouldn&rsquo;t Feel
            <br />
            Like a Construction Zone.
          </h2>
          <div className="mt-8 space-y-5 text-[1.05rem] leading-[1.8] text-forest/65">
            <p>
              One missed detail can delay an entire project. One miscommunication
              can cost thousands. We built Pristine Construction to eliminate those
              risks — by keeping everything under one roof.
            </p>
            <p>
              Our in-house team handles every phase from demolition through final
              walkthrough. No subcontracting. No handoffs between strangers. Every
              person on your job site answers directly to us.
            </p>
            <p>
              That&rsquo;s how we&rsquo;ve grown entirely through referrals for over
              a decade — Bay Area homeowners trust us with their kitchens, bathrooms,
              ADUs, and full renovations because we deliver what we promise.
            </p>
          </div>

          <motion.p
            className="mt-8 border-l-2 border-olive/30 pl-5 text-[1rem] italic leading-snug text-forest/75"
            initial={{ opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            &ldquo;The Pristine difference is in the details.&rdquo;
          </motion.p>
        </div>

        <div className="space-y-8 lg:pt-4">
          <div className="space-y-6">
            {PRINCIPLES.map((item, i) => (
              <motion.div
                key={item.number}
                className="group rounded-lg border border-olive/10 bg-cream-light/50 p-6 transition-colors hover:border-olive/25"
                initial={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="flex items-start gap-4">
                  <span className="shrink-0 text-[11px] font-medium tracking-[0.15em] text-olive/50">
                    {item.number}
                  </span>
                  <div>
                    <h3 className="font-serif text-lg tracking-[-0.01em] text-forest">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[0.9rem] leading-relaxed text-forest/55">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-3 gap-8 border-t border-olive/15 pt-14 lg:mt-24 lg:pt-16">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="text-center"
          >
            <div className="font-serif text-[clamp(2rem,3vw,2.75rem)] tracking-[-0.02em] text-olive">
              {stat.value}
            </div>
            <div className="mt-1 text-[0.8rem] uppercase tracking-[0.1em] text-forest/45">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="relative mx-auto mt-16 max-w-3xl md:mt-20 lg:mt-24">
        <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-forest/10 ring-1 ring-tan/20 shadow-sm">
          <iframe
            className="absolute inset-0 h-full w-full border-0"
            src={`https://www.youtube.com/embed/${ABOUT_VIDEO_ID}`}
            title="Pristine Construction project video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
