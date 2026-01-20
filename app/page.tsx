import Navbar from "./components/navbar";
import Competences from "./components/competences";
import Projets from "./components/projets";
import Description from "./components/description";
import Experiences from "./components/experiences";
import Contact from "./components/contact";

import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#EAF2FF] dark:bg-black">
      {/* Navbar */}
      <Navbar />

      {/* HERO */}
      <section className="flex min-h-[100vh] flex-col items-center justify-center font-sans text-center">
        <p className="text-5xl font-semibold italic text-[#2563EB] dark:text-[#F7F6CF]">
          Bonjour, je suis{" "}
          <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-[#2563EB]">
            <span className="relative text-[#ffffff] dark:text-gray-950">
              Mève Arroseres
            </span>
          </span>
        </p>

        <h3 className="mt-8 text-2xl font-bold text-[#2563EB] dark:text-[#F7F6CF]">
          Développeuse Junior Passionnée.
        </h3>

        {/* ICONES CONTACT */}
        <div className="mt-10 flex gap-6">
          <a
            href="mailto:meve.arroseres@epitech.eu"
            aria-label="Email"
            className="
              flex h-12 w-12 items-center justify-center
              rounded-full bg-[#FFFFFF]
              ring-1 ring-[#2563EB]/15
              shadow-[0_10px_25px_rgba(0,0,0,0.25)]
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-[#2563EB]/[0.35]
            "
          >
            <HiMail className="text-xl text-[#FF6B4A]" />
          </a>

          <a
            href="https://www.linkedin.com/in/m%C3%A8ve-arroseres-77663a24b/"
            target="_blank"
            aria-label="LinkedIn"
            className="
              flex h-12 w-12 items-center justify-center
              rounded-full bg-[#FFFFFF]
              ring-1 ring-[#2563EB]/15
              shadow-[0_10px_25px_rgba(0,0,0,0.25)]
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-[#2563EB]/[0.35]
    
            "
          >
            <FaLinkedinIn className="text-lg text-[#FF6B4A]" />
          </a>

          <a
            href="https://github.com/Meve-Arroseres"
            target="_blank"
            aria-label="GitHub"
            className="
              flex h-12 w-12 items-center justify-center
              rounded-full bg-[#FFFFFF]
              ring-1 ring-[#2563EB]/15
              shadow-[0_10px_25px_rgba(0,0,0,0.25)]
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-[#2563EB]/[0.35]
            "
          >
            <FaGithub className="text-lg text-[#FF6B4A]" />
          </a>
        </div>
      </section>

      {/* SECTIONS */}
      <section id="description" className="py-20">
        <Description />
      </section>

      <section id="competences" className="py-8">
        <Competences />
      </section>

      <section id="experiences" className="py-8">
        <Experiences />
      </section>

      <section id="projets" className="py-8">
        <Projets />
      </section>

      <section id="contact" className="py-8">
        <Contact />
      </section>
    </main>
  );
}
