"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "../ui/SectionWrapper";
import SectionLabel from "../ui/SectionLabel";

const POSTS = [
  {
    title: "Why Bathroom Remodels Are the Best ROI for Your Home",
    excerpt:
      "A well-executed bathroom renovation can return 60–70% of your investment while transforming your daily routine.",
    date: "March 14, 2024",
    image: "/images/bathroom-remodel.jpg",
  },
  {
    title: "Choosing the Right Contractor in San Jose",
    excerpt:
      "Not all contractors are created equal. Here's what to look for — and what red flags to avoid — when hiring for your next project.",
    date: "January 29, 2024",
    image: "/images/kitchen-remodel.jpg",
  },
  {
    title: "The ADU Permit Process in California, Explained",
    excerpt:
      "Navigating permits doesn't have to be painful. A step-by-step breakdown of what you need to build an ADU in the Bay Area.",
    date: "December 5, 2023",
    image: "/images/general-construction.jpg",
  },
];

export default function Blog() {
  return (
    <SectionWrapper id="blog">
      <div className="text-center">
        <div className="mx-auto mb-8 flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-olive/30" />
          <SectionLabel>Blog</SectionLabel>
          <div className="h-px w-12 bg-olive/30" />
        </div>
        <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] tracking-[-0.02em]">
          From the Field
        </h2>
      </div>

      <div className="mt-20 grid gap-10 md:grid-cols-3 lg:mt-24 lg:gap-12">
        {POSTS.map((post, i) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg ring-1 ring-tan/30 group-hover:ring-olive/40 transition-all duration-300">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="mt-5">
              <time className="text-xs font-medium uppercase tracking-[0.05em] text-olive">
                {post.date}
              </time>
              <h3 className="mt-2 font-serif text-lg leading-snug tracking-[-0.01em] transition-colors group-hover:text-olive">
                {post.title}
              </h3>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-forest/55">
                {post.excerpt}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
