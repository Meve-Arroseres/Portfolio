import Navbar from "./components/navbar";
import Competences from "./components/competences";
import Projets from "./components/projets";
import Description from "./components/description";
import Experiences from "./components/experiences";
import Contact from "./components/contact";
import Parallax from "./components/parallax";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#E5E7EB] dark:bg-black">
      {/* 1. Ma Barre de navigation */}
      <Navbar />

      {/* 2. Ma section d'introduction (ton texte sur "annoyed") */}
      <section className="flex h-[60vh] items-center justify-center font-sans">
        <blockquote className="text-center text-2xl font-semibold italic text-gray-900 dark:text-white">
          Mève Arroseres, {" "}
          <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-pink-500">
            <span className="relative text-white dark:text-gray-950">Développeuse</span>
          </span>{" "}
          junior.
        </blockquote>
      </section>

      <section id="description" className="py-20">
        <Description />
      </section>

      <section id="experiences" className="py-20">
        <Experiences />
      </section>

      {/* 3. Ma section Compétences */}
      <section id="competences" className="py-20">
        <Competences />
      </section>
      
      {/* Tu pourras ajouter tes autres sections ici plus tard */}
      <section id="projets" className="py-20">
        <Projets />
      </section>

      <section id="contact" className="py-20">
        <Contact />
      </section>


    </main>
  );
}
