import {
  FaHtml5, FaCss3Alt, FaJava, FaNode,
  FaGithubAlt, FaDocker, FaJenkins,
  FaReact, FaPython
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";

const skills = [
  { icon: FaHtml5, name: "HTML5", color: "#E34F26" },
  { icon: FaCss3Alt, name: "CSS3", color: "#1572B6" },
  { icon: IoLogoJavascript, name: "JavaScript", color: "#F7DF1E" },
  { icon: FaJava, name: "Java", color: "#E11F21" },
  { icon: FaNode, name: "Node.js", color: "#339933" },
  { icon: FaReact, name: "React", color: "#61DAFB" },
  { icon: RiTailwindCssFill, name: "Tailwind", color: "#06B6D4" },
  { icon: SiMysql, name: "MySQL", color: "#4479A1" },
  { icon: FaDocker, name: "Docker", color: "#2496ED" },
  { icon: FaJenkins, name: "Jenkins", color: "#D24939" },
  { icon: FaGithubAlt, name: "GitHub", color: "#111111" },
  { icon: FaPython, name: "Python", color: "#3776AB" },
];

export default function Competences() {
  return (
    <section className="relative max-w-6xl mx-auto px-6 py-32">
      {/* Titre rétro éditorial */}
      <div className="mb-20 text-center">
        <p className="text-[11px] tracking-[0.35em] uppercase text-[#0F172A]">
          Stack & outils
        </p>
        <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-wide text-[#2563EB]">
          Compétences
        </h2>
        <div className="mt-6 mx-auto h-[2px] w-28 bg-[#FF6B4A]" />
      </div>

      {/* Grid */}
      <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
        {skills.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <div
              key={index}
              className="
                group relative overflow-hidden rounded-2xl
                bg-[#FFFFFF]
                ring-1 ring-[#DCE9FF]/15
                shadow-[0_16px_40px_rgba(0,0,0,0.22)]
                p-7
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-[#FF6B4A]/[0.35]
              "
            >
              {/* grain / trame */}
              <div className="pointer-events-none absolute inset-0 opacity-[0.22] mix-blend-multiply">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,0,0,0.18),transparent_45%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.07)_1px,transparent_1px)] bg-[size:56px_56px]" />
              </div>

              <div className="relative flex items-center gap-4">
                {/* icône */}
                <div
                  className="
                    grid place-items-center h-12 w-12 rounded-xl
                    bg-[#DCE9FF] ring-1 ring-[#5784BA]/10
                  "
                >
                  <Icon size={26} style={{ color: skill.color }} />
                </div>

                <div>
                  <p className="text-[11px] tracking-[0.25em] uppercase text-[#0F172A]/45">
                    Technologie
                  </p>
                  <p className="mt-1 text-lg font-medium text-[#0F172A]/85">
                    {skill.name}
                  </p>
                </div>
              </div>

              <div className="relative mt-6 h-[2px] w-full bg-[#0F172A]/15 transition-colors duration-300 group-hover:bg-[#FF6B4A]/40" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
