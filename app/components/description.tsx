"use client";

export default function Description() {
  return (
    <section className="relative max-w-6xl mx-auto px-6 py-32">
      <div
        className="
          relative grid grid-cols-1 md:grid-cols-2 gap-14
          overflow-hidden rounded-3xl
          bg-[#FFFFFF]
          ring-1 ring-[#5784BA]/15
          shadow-[0_20px_50px_rgba(0,0,0,0.25)]
          px-10 py-14 md:px-16 md:py-20
        "
      >
        {/* grain / trame rétro */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.22] mix-blend-multiply">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(0,0,0,0.18),transparent_45%),radial-gradient(circle_at_85%_30%,rgba(0,0,0,0.14),transparent_55%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.07)_1px,transparent_1px)] bg-[size:56px_56px]" />
        </div>

        {/* TEXTE */}
        <div className="relative flex flex-col justify-center">
          <p className="text-[11px] tracking-[0.35em] uppercase text-[#0F172A]">
            À propos
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-[#2563EB] leading-tight">
            Développement.<br />
            Cybersécurité.<br />
            DevOps.
          </h2>

          <div className="mt-6 h-[2px] w-24 bg-[#FF6B4A]" />

          <p className="mt-8 text-[17px] md:text-[18px] leading-relaxed text-[#0F172A]">
            Je construis des projets techniques avec une approche structurée,
            orientée sécurité, performance et cohérence visuelle.
          </p>

          <p className="mt-6 text-[15px] text-[#0F172A]">
            Développement web, bases DevOps, cybersécurité —  
            apprendre vite, comprendre en profondeur, livrer proprement.
          </p>
        </div>

        {/* HERO PHOTO */}
        <div className="relative flex items-center justify-center">
          <div
            className="
              relative w-full max-w-sm aspect-[3/4]
              rounded-2xl overflow-hidden
              bg-[#DCE9FF]/80
              ring-1 ring-[#5784BA]/20
              shadow-[0_16px_40px_rgba(0,0,0,0.35)]
            "
          >
            {/* Remplace par ta photo */}
            <img
              src="assets/hero.png"
              alt="Portrait"
              className="absolute inset-0 h-full w-full object-contain  contrast-110"
            />

            {/* surcouche rétro */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#5784BA]/25 via-transparent to-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
