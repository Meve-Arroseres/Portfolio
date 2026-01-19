"use client";

import { useState } from "react";

const projets = [
  {
    title: "TryHackMe",
    desc: "Formation et challenges en cybersécurité.",
    img: "/assets/tryhackme.png",
    link: "#",
    tags: ["Cybersécurité", "OSINT", "Docker"],
  },
  {
    title: "Infrastructure as Code - Game Server",
    desc: "Déploiement automatisé d'un serveur de jeu via Ansible et Terraform sur infrastructure cloud OVH.",
    img: "/assets/IAC.jpg",
    link: "#",
    tags: ["DevOps", "Cloud", "Ansible", "Terraform"],
  },
  {
    title: "Portfolio CV",
    desc: "Premier Portfolio en ligne.",
    img: "/assets/portfolio1.png",
    link: "https://leportfolio1-de-meve.netlify.app/",
    tags: ["HTML", "CSS", "JavaScript", "Frontend", "Design"],
  },
  {
    title: "Portfolio Style Nintendo DS",
    desc: "Portfolio avec design rétro / jeux video.",
    img: "assets/DS.png",
    link: "https://portfolio-ds-meve1.netlify.app/index.html",
    tags: ["HTML", "CSS", "JavaScript", "Frontend", "Design"],
  },
  {
    title: "Dev-Jobs",
    desc: "Job Board / Application de recherche d'emploi.",
    img: "assets/DEVJOBS.png",
    link: "https://drive.google.com/file/d/1BKLVmnyco-p4mY2KVUz5WXvaKdYwF2fj/view?usp=drive_link",
    tags: ["API", "Node.js", "Frontend", "Backend", "Base de données"],
  },
  {
    title: "EPI-MAN",
    desc: "Jeu d'arcade en 2D inspiré de Pac-Man.",
    img: "/assets/persoleft01.png",
    link: "#",
    tags: ["JAVA", "OOP", "Design", "Jeu vidéo"],
  },
  {
    title: "Popeye",
    desc: "Dockerisation d'un application web.",
    img: "/assets/popeye.webp",
    link: "#",
    tags: ["DevOps", "Docker"],
  },
  {
    title: "My-Marvin",
    desc: "Automatisation et pipelines CI/CD.",
    img: "/assets/mymarvin.png",
    link: "#",
    tags: ["DevOps", "Jenkins", "Docker"],
  },
];

const filters = [
  "Tous",
  "Frontend",
  "OOP",
  "Cybersécurité",
  "DevOps",
];

export default function Projets() {
  const [activeFilter, setActiveFilter] = useState("Tous");

  const filteredProjects =
    activeFilter === "Tous"
      ? projets
      : projets.filter((p) => p.tags.includes(activeFilter));

  return (
    <section className="relative max-w-6xl mx-auto px-6 py-40">
      {/* Header */}
      <div className="mb-20 text-center">
        <p className="text-[11px] tracking-[0.35em] uppercase text-black/55">
          Sélection
        </p>
        <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-[#2563EB]">
          Projets
        </h2>
        <div className="mt-6 mx-auto h-[2px] w-28 bg-[#FF6B4A]" />
      </div>

      {/* Barre de filtres */}
      <div className="mb-16 flex flex-wrap justify-center gap-4">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`
              px-6 py-2 rounded-full text-sm tracking-wide
              transition-all duration-300
              ring-1
              ${
                activeFilter === filter
                  ? "bg-[#FF6B4A] text-white ring-[#FF6B4A] shadow-[0_8px_20px_rgba(0,0,0,0.35)]"
                  : "bg-[#cfd8e355] text-black/80 ring-black/20 hover:ring-black/40"
              }
            `}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Grid projets */}
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((projet, index) => (
          <div
            key={index}
            className="
              group relative overflow-hidden
              rounded-3xl
              bg-[#FFFFFF]
              ring-1 ring-black/15
              shadow-[0_16px_40px_rgba(0,0,0,0.22)]
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-[#FF6B4A]/[0.35]
            "
          >
            {/* image */}
          <div className="relative h-56 overflow-hidden">
            <img
              src={projet.img}
              alt={projet.title}
              className="
                h-full w-full object-cover
                object-top
                grayscale contrast-110
                transition-transform duration-500
                group-hover:scale-105
                group-hover:grayscale-0
              "
            />

            <div
              className="
                absolute inset-0
                bg-gradient-to-tr
                from-black/40 via-transparent to-white/10
                transition-opacity duration-300
                group-hover:opacity-0
              "
            />
          </div>


            {/* grain */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-multiply">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,0,0,0.18),transparent_45%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.07)_1px,transparent_1px)] bg-[size:56px_56px]" />
            </div>

            {/* contenu */}
            <div className="relative p-7">
              <h3 className="text-xl font-semibold text-[#2563EB]">
                {projet.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#0F172A]">
                {projet.desc}
              </p>

              {/* tags */}
              <div className="mt-5 flex flex-wrap gap-2">
                {projet.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-black/10 text-[#0F172A]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={projet.link}
                className="mt-6 inline-block text-sm font-medium text-[#FF6B4A] underline underline-offset-4 hover:opacity-70"
              >
                Voir le projet →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
