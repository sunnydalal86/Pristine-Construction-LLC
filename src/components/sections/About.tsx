"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";
import SectionLabel from "../ui/SectionLabel";

const STATS = [
  { value: "10+", label: "Years Experience" },
  { value: "200+", label: "Projects Completed" },
  { value: "100%", label: "Referral-Based" },
];

const ABOUT_VIDEO_ID = "YxqfAF3UspU";

export default function About() {
  return (
    <SectionWrapper id="about" bg="tan">
      <div className="max-w-3xl">
        <SectionLabel>About Pristine</SectionLabel>
        <h2 className="mt-4 font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.15] tracking-[-0.02em]">
          Quality You Can See.
          <br />
          Craftsmanship You Can Trust.
        </h2>
        <div className="mt-8 space-y-5 text-[1.125rem] leading-[1.75] text-forest/70">
          <p>
            Founded in San Jose, Pristine Construction was built on a simple
            belief: every home deserves the same care and precision that goes
            into building something from scratch. What started as a hands-on
            operation has grown into a trusted name across the Bay Area — not
            through advertising, but through word of mouth.
          </p>
          <p>
            Our in-house team handles every project from start to finish. No
            subcontracting, no shortcuts. From the initial consultation through
            the final walkthrough, you work directly with the people building
            your space.
          </p>
          <p>
            We specialize in bathroom and kitchen remodels, whole-home
            renovations, and custom ADUs — delivering the kind of results that
            make our clients call us back, and refer us to their friends.
          </p>
        </div>

        <p className="mt-8 border-l-2 border-olive/35 pl-5 text-[1.0625rem] font-medium leading-snug text-forest/85">
          Fully licensed &amp; insured. Trusted by homeowners across the Bay
          Area.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-3 gap-8 border-t border-olive/20 pt-12 lg:mt-16 lg:pt-14">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <div className="font-serif text-[clamp(2rem,3vw,2.75rem)] tracking-[-0.02em] text-olive">
              {stat.value}
            </div>
            <div className="mt-1 text-sm text-forest/50">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="relative mt-16 w-screen max-w-none left-1/2 -translate-x-1/2 md:mt-20 lg:mt-24">
        <div className="relative aspect-video w-full overflow-hidden bg-forest/10">
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
