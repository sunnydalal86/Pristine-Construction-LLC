"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "../ui/SectionWrapper";
import SectionLabel from "../ui/SectionLabel";

interface TeamMember {
  name: string;
  role: string;
  image: string | null;
  bio: string;
}

const TEAM: TeamMember[] = [
  {
    name: "Allan Garcia",
    role: "CEO / Founder",
    image: "/images/team-allan.jpg",
    bio: "Allan is the driving force behind Pristine Construction. His journey began with a deep-rooted interest in the construction industry, shaped by family connections. Under his stewardship, the company has flourished — embracing innovative practices and maintaining an unwavering commitment to delivering exceptional results.",
  },
  {
    name: "Victor",
    role: "Master Electrician",
    image: "/images/team-victor.jpg",
    bio: "Victor specializes in residential electrical projects. From energy-efficient lighting to cutting-edge smart home technology, he ensures every home is both functional and modern. He also takes pride in educating homeowners about sustainable energy.",
  },
  {
    name: "Manuel",
    role: "Master Plumber",
    image: "/images/team-manuel.jpg",
    bio: "Manuel brings unparalleled plumbing expertise to every project. From advanced water filtration systems to eco-friendly layouts, his work is characterized by meticulous attention to detail and a focus on sustainability.",
  },
  {
    name: "Pil",
    role: "Master Tradesman",
    image: "/images/team-pil.jpg",
    bio: "Pil is a master of multiple residential subtrades — from carpentry and masonry to plumbing and electrical. His versatility and mentorship have been a guiding influence in shaping Pristine Construction's foundation.",
  },
  {
    name: "Jose",
    role: "Plaster & Drywall Expert",
    image: "/images/team-jose.jpg",
    bio: "Jose's expertise ensures that every wall and ceiling is finished to the highest standard. His skillful craftsmanship in plastering and drywall has been pivotal in transforming residential spaces into beautiful, functional homes.",
  },
  {
    name: "Axel",
    role: "Multi-Trade Apprentice",
    image: "/images/team-axel.jpg",
    bio: "Axel brings boundless energy and a positive attitude to every job site. Whether assisting with carpentry, plumbing, or drywall, his eagerness to learn makes him an invaluable and versatile part of our team.",
  },
  {
    name: "Arminio",
    role: "Master Tile Setter & Carpenter",
    image: "/images/team-arminio.jpg",
    bio: "Arminio has mastered both tile setting and carpentry, bringing exceptional craftsmanship to each. His intricate tile designs and flawless finishes are consistently among the most striking features of our projects.",
  },
  {
    name: "Milton",
    role: "Painter",
    image: "/images/team-milton.jpg",
    bio: "Milton brings artistry to every surface. From crisp, clean walls to intricate decorative finishes, his keen eye for color and detail creates results that are both visually stunning and enduring.",
  },
  {
    name: "Bhavik",
    role: "Architect",
    image: "/images/team-bhavik.jpg",
    bio: "Bhavik brings a unique blend of creativity and technical expertise to every project. He translates client visions into detailed designs, integrating modern trends with timeless elements for spaces that are both contemporary and enduring.",
  },
  {
    name: "Yelena",
    role: "Interior Designer",
    image: null,
    bio: "Yelena crafts interiors that are both aesthetically pleasing and practical. Her work curating color palettes, selecting furnishings, and designing layouts ensures every home feels personalized, refined, and perfectly balanced.",
  },
];

function AvatarPlaceholder({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-tan">
      <svg
        className="mb-2 h-16 w-16 text-olive/40"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
      </svg>
      <span className="text-lg font-serif text-forest/50">{initials}</span>
    </div>
  );
}

function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.05, duration: 0.5, ease: "easeOut" }}
    >
      {/* Photo card */}
      <div
        className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-lg"
        onClick={() => setOpen((prev) => !prev)}
      >
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          />
        ) : (
          <AvatarPlaceholder name={member.name} />
        )}

        {/* Default state: name + role at bottom */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent px-4 pb-4 pt-16 transition-opacity duration-300 group-hover:opacity-0">
          <p className="font-serif text-lg leading-tight text-cream-light">
            {member.name}
          </p>
          <p className="mt-0.5 text-xs tracking-wide text-tan-light/80">
            {member.role}
          </p>
        </div>

        {/* Hover overlay — desktop only */}
        <div className="absolute inset-0 hidden flex-col justify-end bg-forest/90 p-4 opacity-0 transition-all duration-300 group-hover:opacity-100 lg:flex">
          <div className="translate-y-3 transition-transform duration-300 group-hover:translate-y-0">
            <div className="mb-2 h-0.5 w-8 bg-sage" />
            <p className="font-serif text-lg leading-tight text-cream-light">
              {member.name}
            </p>
            <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-sage">
              {member.role}
            </p>
            <p className="mt-3 text-[0.8rem] leading-relaxed text-cream-light/80">
              {member.bio}
            </p>
          </div>
        </div>
      </div>

      {/* Expanded bio — mobile only, appears below the photo */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out lg:hidden ${
          open ? "mt-3 max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="rounded-lg bg-forest/90 p-4">
          <div className="mb-2 h-0.5 w-8 bg-sage" />
          <p className="font-serif text-base leading-tight text-cream-light">
            {member.name}
          </p>
          <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-sage">
            {member.role}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-cream-light/80">
            {member.bio}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Team() {
  return (
    <SectionWrapper id="team" bg="cream">
      <div className="text-center">
        <div className="flex justify-center">
          <SectionLabel>Our Team</SectionLabel>
        </div>
        <h2 className="mt-4 font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.15] tracking-[-0.02em]">
          The People Behind Pristine
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[1.0625rem] leading-relaxed text-forest/60">
          Our in-house team of skilled tradespeople brings decades of combined
          experience to every project — no subcontracting, no shortcuts.
        </p>
      </div>

      <div className="mt-20 grid grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-6 lg:mt-24 lg:grid-cols-5 lg:gap-8">
        {TEAM.map((member, i) => (
          <TeamCard key={member.name} member={member} index={i} />
        ))}
      </div>

      {/* Full team photo */}
      <motion.div
        className="mx-auto mt-20 max-w-3xl overflow-hidden rounded-lg lg:mt-24"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
          <Image
            src="/images/team-yelena.webp"
            alt="The Pristine Construction team"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
