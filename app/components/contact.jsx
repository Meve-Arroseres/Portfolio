"use client";

import { Audiowide, Orbitron, Rajdhani } from "next/font/google";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useForm, ValidationError } from "@formspree/react";

const audiowide = Audiowide({ subsets: ["latin"], weight: "400" });
const orbitron = Orbitron({ subsets: ["latin"], weight: "500" });
const rajdhani = Rajdhani({ subsets: ["latin"], weight: "500" });

export default function Contact() {
  const [state, handleSubmit] = useForm("xeeekakp");

  return (
    <section className="relative max-w-5xl mx-auto px-6 py-40">
      {/* Header */}
      <div className="mb-20 text-center">
        <p className="text-[11px] tracking-[0.35em] uppercase text-black/55">
          Contact
        </p>
        <h2
          className={`mt-4 text-4xl md:text-5xl text-[#2563EB] ${audiowide.className}`}
        >
          Travaillons ensemble
        </h2>
        <div className="mt-6 mx-auto h-[2px] w-28 bg-[#FF6B4A]" />
      </div>

      {/* Contact buttons */}
      <div className="mb-20 flex flex-wrap justify-center gap-6">
        <a
          href="mailto:meve.arroseres@epitech.eu"
          className="
            group flex items-center gap-3
            rounded-full px-6 py-3
            bg-[#FFFFFF]
            ring-1 ring-black/15
            shadow-[0_12px_30px_rgba(0,0,0,0.25)]
            transition-all duration-300
            hover:-translate-y-1
            hover:shadow-[#FF6B4A]/[0.35]
          "
        >
          <HiMail className="text-xl text-black/80" />
          <span className={`${rajdhani.className} text-black/85`}>
            meve.arroseres@epitech.eu
          </span>
        </a>

        <a
          href="https://www.linkedin.com/in/m%C3%A8ve-arroseres-77663a24b/"
          target="_blank"
          className="
            group flex items-center gap-3
            rounded-full px-6 py-3
            bg-[#FFFFFF]
            ring-1 ring-black/15
            shadow-[0_12px_30px_rgba(0,0,0,0.25)]
            transition-all duration-300
            hover:-translate-y-1
            hover:shadow-[#FF6B4A]/[0.35]
          "
        >
          <FaLinkedinIn className="text-lg text-black/80" />
          <span className={`${rajdhani.className} text-black/85`}>
            LinkedIn
          </span>
        </a>

        <a
          href="https://github.com/Meve-Arroseres"
          target="_blank"
          className="
            group flex items-center gap-3
            rounded-full px-6 py-3
            bg-[#FFFFFF]
            ring-1 ring-black/15
            shadow-[0_12px_30px_rgba(0,0,0,0.25)]
            transition-all duration-300
            hover:-translate-y-1
            hover:shadow-[#FF6B4A]/[0.35]
          "
        >
          <FaGithub className="text-lg text-black/80" />
          <span className={`${rajdhani.className} text-black/85`}>
            GitHub
          </span>
        </a>
      </div>

      {/* Form */}
      <div
        className="
          relative overflow-hidden rounded-3xl
          bg-[#FFFFFF]
          ring-1 ring-black/15
          shadow-[0_20px_50px_rgba(0,0,0,0.25)]
          px-10 py-14
          max-w-2xl mx-auto
        "
      >
        {/* grain */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.22] mix-blend-multiply">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,0,0,0.18),transparent_45%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.07)_1px,transparent_1px)] bg-[size:56px_56px]" />
        </div>

        <form
          onSubmit={handleSubmit}
          className="relative grid gap-8"
        >
          <input
            type="text"
            name="name"
            placeholder="Nom"
            required
            className="
              w-full rounded-xl
              bg-black/5
              ring-1 ring-black/20
              px-4 py-3
              text-black
              outline-none
              focus:ring-[#FF6B4A]/40
              focus:bg-[#FF6B4A]/20
            "
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="
              w-full rounded-xl
              bg-black/5
              ring-1 ring-black/20
              px-4 py-3
              text-black
              outline-none
              focus:ring-[#FF6B4A]/40
              focus:bg-[#FF6B4A]/20
            "
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <textarea
            name="message"
            rows={5}
            placeholder="Message…"
            required
            className="
              w-full rounded-xl
              bg-black/5
              ring-1 ring-black/20
              px-4 py-3
              text-black
              outline-none
              resize-none
              focus:ring-[#FF6B4A]/40
              focus:bg-[#FF6B4A]/20
            "
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />

          <button
            type="submit"
            disabled={state.submitting}
            className={`
              mt-4 rounded-full
              bg-[#FF6B4A] text-white
              py-3
              tracking-wide
              transition-all duration-300
              hover:opacity-80
              disabled:opacity-40
              ${orbitron.className}
            `}
          >
            {state.submitting ? "Envoi..." : "Envoyer le message"}
          </button>

          {state.succeeded && (
            <p className="text-center text-green-600 text-sm">
              Message envoyé avec succès ✨
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
