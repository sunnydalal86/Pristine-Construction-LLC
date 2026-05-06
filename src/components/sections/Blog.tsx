"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "../ui/SectionWrapper";
import SectionLabel from "../ui/SectionLabel";

const POSTS = [
  {
    title: "Why Bathroom Remodels Are the Best ROI for Bay Area Homes",
    excerpt:
      "A well-executed bathroom renovation can return 60–70% of your investment while transforming your daily routine. Here's what drives that value.",
    date: "March 2024",
    image: "/images/bathroom-remodel.jpg",
    readTime: "4 min read",
  },
  {
    title: "How to Vet a Contractor in the Bay Area",
    excerpt:
      "Not all contractors are created equal. License verification, insurance, crew structure, and communication style — here's what actually matters.",
    date: "January 2024",
    image: "/images/kitchen-remodel.jpg",
    readTime: "5 min read",
  },
  {
    title: "The ADU Permit Process in California",
    excerpt:
      "Navigating permits doesn't have to be painful. A clear breakdown of timelines, requirements, and what to expect when building an ADU.",
    date: "December 2023",
    image: "/images/general-construction.jpg",
    readTime: "6 min read",
  },
];

export default function Blog() {
  return (
    <SectionWrapper id="blog">
      <div className="text-center">
        <div className="mx-auto mb-6 flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-olive/25" />
          <SectionLabel>Insights</SectionLabel>
          <div className="h-px w-12 bg-olive/25" />
        </div>
        <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] tracking-[-0.02em]">
          From the Field
        </h2>
        <p className="mx-auto mt-4 max-w-md text-[0.95rem] leading-relaxed text-forest/50">
          Practical knowledge from over a decade of Bay Area residential construction.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-3 lg:mt-20 lg:gap-10">
        {POSTS.map((post, i) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg ring-1 ring-tan/20 transition-all duration-500 group-hover:ring-olive/30 group-hover:shadow-md">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="mt-5">
              <div className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.1em] text-olive/60">
                <time>{post.date}</time>
                <span className="h-0.5 w-0.5 rounded-full bg-olive/40" />
                <span>{post.readTime}</span>
              </div>
              <h3 className="mt-2.5 font-serif text-lg leading-snug tracking-[-0.01em] transition-colors duration-300 group-hover:text-olive">
                {post.title}
              </h3>
              <p className="mt-2 text-[0.85rem] leading-relaxed text-forest/50">
                {post.excerpt}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
