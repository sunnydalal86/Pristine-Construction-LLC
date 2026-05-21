"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "../ui/SectionWrapper";

interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  image: string | null;
  bio: string;
}

const TEAM: TeamMember[] = [
  {
    name: "Allan Garcia",
    role: "CEO / Founder",
    specialty: "Project Management",
    image: "/images/team-allan.jpg",
    bio: "Allan is the driving force behind Pristine Construction. His journey began with a deep-rooted interest in the construction industry, shaped by family connections. Under his stewardship, the company has flourished — embracing innovative practices and maintaining an unwavering commitment to delivering exceptional results.",
  },
  {
    name: "Armando",
    role: "",
    specialty: "",
    image: "/images/team-armando.jpg",
    bio: "",
  },
  {
    name: "Jose",
    role: "Plaster & Drywall Expert",
    specialty: "Interior Finishes",
    image: "/images/team-jose.jpg",
    bio: "Jose's expertise ensures that every wall and ceiling is finished to the highest standard. His skillful craftsmanship in plastering and drywall has been pivotal in transforming residential spaces into beautiful, functional homes.",
  },
  {
    name: "Manuel",
    role: "Master Plumber",
    specialty: "Plumbing & Water Systems",
    image: "/images/team-manuel.jpg",
    bio: "Manuel brings unparalleled plumbing expertise to every project. From advanced water filtration systems to eco-friendly layouts, his work is characterized by meticulous attention to detail and a focus on sustainability.",
  },
  {
    name: "Victor",
    role: "Master Electrician",
    specialty: "Electrical Systems",
    image: "/images/team-victor.jpg",
    bio: "Victor specializes in residential electrical projects. From energy-efficient lighting to cutting-edge smart home technology, he ensures every home is both functional and modern. He also takes pride in educating homeowners about sustainable energy.",
  },
  {
    name: "Zinnia",
    role: "",
    specialty: "",
    image: "/images/team-zinnia.jpg",
    bio: "",
  },
];

function AvatarPlaceholder({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-mist">
      <svg
        className="mb-2 h-14 w-14 text-olive/30"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
      </svg>
      <span className="text-base font-serif text-forest/40">{initials}</span>
    </div>
  );
}

function TeamBioModal({
  member,
  onClose,
}: {
  member: TeamMember;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="team-bio-title"
      initial={false}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <button
        type="button"
        className="absolute inset-0 bg-forest/80 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close bio"
      />
      <motion.div
        className="relative z-10 max-h-[min(90vh,40rem)] w-full max-w-lg overflow-y-auto rounded-xl border border-tan/30 bg-cream-light p-7 shadow-2xl sm:p-9 md:max-w-xl"
        initial={false}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-md p-2 text-forest/40 transition-colors hover:bg-mist hover:text-forest"
          aria-label="Close"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {member.specialty ? (
          <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-olive/60">
            {member.specialty}
          </span>
        ) : null}
        <p
          id="team-bio-title"
          className={`pr-10 font-serif text-xl leading-tight tracking-[-0.02em] text-forest sm:text-2xl${member.specialty ? " mt-2" : ""}`}
        >
          {member.name}
        </p>
        {member.role ? (
          <p className="mt-1 text-sm text-olive">{member.role}</p>
        ) : null}
        {member.bio ? (
          <>
            <div className="mt-5 h-px w-12 bg-olive/20" />
            <p className="mt-5 text-[0.95rem] leading-[1.75] text-forest/70">
              {member.bio}
            </p>
          </>
        ) : null}
      </motion.div>
    </motion.div>
  );
}

function TeamCard({
  member,
  index,
  onOpenBio,
}: {
  member: TeamMember;
  index: number;
  onOpenBio: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.05, duration: 0.5, ease: "easeOut" }}
    >
      <button
        type="button"
        className="group relative aspect-[3/4] w-full cursor-pointer overflow-hidden rounded-lg text-left outline-none ring-olive/50 transition-all duration-500 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-light"
        onClick={onOpenBio}
      >
        {member.image ? (
          <Image
            src={member.image}
            alt={member.role ? `${member.name}, ${member.role}` : member.name}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-[1.04]"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          />
        ) : (
          <AvatarPlaceholder name={member.name} />
        )}

        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-4 pb-4 pt-20 transition-all duration-300 group-hover:from-black/85">
          <p className="font-serif text-base leading-tight text-cream-light lg:text-lg">
            {member.name}
          </p>
          {member.specialty ? (
            <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.12em] text-sage-light/80">
              {member.specialty}
            </p>
          ) : null}
        </div>
      </button>
    </motion.div>
  );
}

export default function Team() {
  const [bioMember, setBioMember] = useState<TeamMember | null>(null);

  return (
    <SectionWrapper id="team" bg="cream">
      <div className="text-center">
        <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-olive/50">
          03 / Team
        </p>
        <div className="mx-auto mt-8 flex justify-center">
          <div className="h-px w-14 bg-olive/22" />
        </div>
        <h2 className="mt-8 font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.15] tracking-[-0.02em]">
          Every Tradesperson Works for Us.
          <br />
          <span className="text-olive/70">Directly.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-[1rem] leading-relaxed text-forest/55">
          No subcontractors. No temp crews. Our team brings decades of combined
          experience and shows up on every project because they&rsquo;re ours.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:mt-20 lg:grid-cols-3 lg:gap-6">
        {TEAM.map((member, i) => (
          <TeamCard
            key={member.name}
            member={member}
            index={i}
            onOpenBio={() => setBioMember(member)}
          />
        ))}
      </div>

      {bioMember ? (
        <TeamBioModal member={bioMember} onClose={() => setBioMember(null)} />
      ) : null}

      <motion.div
        className="mx-auto mt-16 max-w-3xl overflow-hidden rounded-lg lg:mt-20"
        initial={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
          <Image
            src="/images/team-group.jpg"
            alt="The Pristine Construction team on site"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
