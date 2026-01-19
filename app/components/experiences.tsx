"use client";

import { useEffect, useRef, useState } from "react";


const formations = [
  {
    year: "2026 - 2028",
    title: "MSc Cybersécurité & Cloud",
    place: "Epitech Marseille",
    desc: "Cybersécurité, cloud, DevOps, architectures sécurisées et automatisation.",
  },
  {
    year: "2025 - 2026",
    title: "Pré-MSc Informatique",
    place: "Epitech Marseille",
    desc: "Bases solides en développement, systèmes et réseaux.",
  },
  {
    year: "2022 - 2024",
    title: "BTS CCST",
    place: "Euridis Business School",
    desc: "Compétences techniques et commerciales.",
  },
];

const experiences = [
  {
    year: "2025",
    title: "Assistante administrative & communication",
    place: "Le Plateau - Montpellier",
    desc: "Administration, communication et coordination.",
  },
  {
    year: "2024 - 2025",
    title: "Assistante administrative & production (Alternance)",
    place: "Les Écrans du Sud - Marseille",
    desc: "Relation entreprise, production et support technique.",
  },
  {
    year: "2023 - 2024",
    title: "Technico-commerciale informatique (Alternance)",
    place: "EVA - Vitrolles",
    desc: "Commercialisation, relation client et IT.",
  },
  {
    year: "2022 - 2023",
    title: "Chasseuse de tête IT (Alternance)",
    place: "Taskforce - Meyreuil",
    desc: "Recrutement, RH, commerce et langages IT.",
  },
];

type Item = {
  year: string;
  title: string;
  place: string;
  desc: string;
};


function Timeline({
  title,
  items,
}: {
  title: string;
  items: Item[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [dotTop, setDotTop] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!containerRef.current) return;

      const viewportCenter = window.innerHeight / 2;
      let closestIndex = 0;
      let minDistance = Infinity;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(cardCenter - viewportCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      const activeCard = cardRefs.current[closestIndex];
      if (activeCard) {
        const cardRect = activeCard.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();

        setDotTop(
          cardRect.top - containerRect.top + cardRect.height / 2
        );
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <h3 className="mb-12 text-2xl font-semibold text-black/85">
        {title}
      </h3>

      {/* Ligne verticale */}
      <div className="absolute left-3 top-[96px] bottom-0 w-px bg-[#FF6B4A]/20" />

      {/* Rond mobile */}
      <div
        className="absolute left-3 -translate-x-1/2 transition-all duration-300"
        style={{ top: dotTop }}
      >
        <div className="h-4 w-4 rounded-full bg-[#FF6B4A] shadow-[0_0_0_6px_rgba(0,0,0,0.15)]" />
      </div>

      {/* Cartes */}
      <div className="space-y-20 pl-12">
        {items.map((item, idx) => (
          <div
            key={idx}
            ref={(el) => (cardRefs.current[idx] = el)}
            className="
              group relative overflow-hidden
              rounded-2xl bg-[#FFFFFF]
              ring-1 ring-[#DCE9FF]/15
              shadow-[0_16px_40px_rgba(0,0,0,0.22)]
              p-7 transition-all duration-300
              hover:-translate-y-1
              hover:shadow-[#FF6B4A]/[0.35]
            "
          >
            <span className="text-xs tracking-[0.3em] uppercase text-[#0F172A]">
              {item.year}
            </span>

            <h4 className="mt-2 text-lg font-semibold text-[#0F172A]/90">
              {item.title}
            </h4>

            <p className="mt-1 text-sm italic text-[#0F172A]/60">
              {item.place}
            </p>

            <p className="mt-4 text-sm leading-relaxed text-[#0F172A]/75">
              {item.desc}
            </p>

            <div className="mt-6 h-[2px] w-full bg-black/15 transition-colors duration-300 group-hover:bg-[#FF6B4A]/40" />
          </div>
        ))}
      </div>
    </div>
  );
}


export default function Experiences() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-40">
      <div className="mb-24 text-center">
        <p className="text-[11px] tracking-[0.35em] uppercase text-[#0F172A]/55">
          Parcours
        </p>
        <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-[#2563EB]">
          Formations & Expériences
        </h2>
        <div className="mt-6 mx-auto h-[2px] w-28 bg-[#FF6B4A]" />
      </div>

      <div className="grid md:grid-cols-2 gap-24">
        <Timeline title="Formations" items={formations} />
        <Timeline title="Expériences" items={experiences} />
      </div>
    </section>
  );
}
