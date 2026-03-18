"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, MapPin, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const

// Helper para las props de animación de entrada escalonada
function fadeUpProps(delay: number) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: EASE_OUT_EXPO, delay },
  } as const
}

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Parallax scroll en la imagen de fondo
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[100svh] flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "var(--surface-dark)" }}
    >
      {/* ── Imagen de fondo con parallax ── */}
      <motion.div
        style={{ y: imageY }}
        className="absolute inset-0 z-0 will-change-transform"
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/portada-futsal-09gx52jQjOBwbT3W38Q0Ue63smcZ18.jpg"
          alt="Fútsal en el Club 17 de Agosto"
          fill
          priority
          className="object-cover object-center"
        />
      </motion.div>

      {/* ── Overlays para máxima legibilidad ── */}
      <div className="absolute inset-0 z-10 bg-black/55" />
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,15,30,0.3) 0%, rgba(10,15,30,0.0) 40%, rgba(10,15,30,0.7) 100%)",
        }}
      />
      {/* Degradado lateral solo en desktop */}
      <div
        className="absolute inset-0 z-10 hidden md:block"
        style={{
          background:
            "linear-gradient(to right, rgba(10,15,30,0.80) 0%, rgba(10,15,30,0.0) 65%)",
        }}
      />

      {/* ── Contenido principal ── */}
      {/* pb-28 deja espacio a la barra de stats (~80px) + scroll indicator en desktop */}
      <div className="relative z-20 w-full container-club flex flex-col items-center md:items-start text-center md:text-left py-28 md:py-0 md:min-h-[100svh] md:justify-center md:pb-28">

        {/* Badge de ubicación */}
        <motion.div {...fadeUpProps(0.1)} className="inline-flex items-center gap-1.5 mb-6 md:mb-8">
          <span
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest"
            style={{
              background: "rgba(244,114,182,0.15)",
              border: "1px solid rgba(244,114,182,0.4)",
              color: "var(--club-pink)",
            }}
          >
            <MapPin className="size-3" strokeWidth={2.5} />
            Villa Pueyrredón, Buenos Aires
          </span>
        </motion.div>

        {/* Headline principal */}
        <motion.h1
          {...fadeUpProps(0.22)}
          className="font-heading font-bold text-white leading-[1.05] tracking-tight mb-5 md:mb-6"
          style={{ fontSize: "clamp(2.6rem, 8vw, 5.5rem)" }}
        >
          Tu barrio.
          <br />
          <span
            style={{
              background: "linear-gradient(90deg, #ffffff 0%, #93c5fd 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Tu club.
          </span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          {...fadeUpProps(0.35)}
          className="text-white/80 leading-relaxed mb-8 md:mb-10 max-w-md"
          style={{ fontSize: "clamp(1rem, 2.5vw, 1.15rem)" }}
        >
          Más de{" "}
          <strong className="text-white font-semibold">2.000 vecinos</strong>{" "}
          ya son parte del Club 17 de Agosto. Deportes, comunidad y mucho más.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUpProps(0.47)}
          className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
        >
          <Link href="/asociarme" className="w-full sm:w-auto">
            <Button
              size="lg"
              className="
                w-full sm:w-auto h-14 px-8 rounded-xl
                font-bold text-base text-white
                inline-flex items-center justify-center gap-2
                transition-all duration-300
                hover:scale-[1.04] hover:brightness-110
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50
              "
              style={{
                background: "var(--club-blue-700)",
                boxShadow: "0 4px 24px rgba(26,58,107,0.55)",
              }}
            >
              Quiero asociarme
              <ArrowRight className="size-4" strokeWidth={2.5} />
            </Button>
          </Link>

          <Link href="/actividades" className="w-full sm:w-auto">
            <Button
              size="lg"
              variant="outline"
              className="
                w-full sm:w-auto h-14 px-8 rounded-xl
                font-semibold text-base text-white
                border-2 border-white/30
                bg-white/5 backdrop-blur-sm
                transition-all duration-300
                hover:bg-white/15 hover:border-white/55 hover:scale-[1.04]
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50
              "
            >
              Ver actividades
            </Button>
          </Link>
        </motion.div>

        {/* Trust line */}
        <motion.p
          {...fadeUpProps(0.58)}
          className="mt-6 text-sm text-white/45 font-medium"
        >
          Asociación rápida · Sin trámites complicados
        </motion.p>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1"
      >
        <span className="text-white/40 text-xs font-medium uppercase tracking-widest hidden md:block">
          Explorá
        </span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="size-6 text-white/40" strokeWidth={1.5} />
        </motion.div>
      </motion.div>

      {/* ── Barra de stats inline (solo desktop) ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.7, ease: EASE_OUT_EXPO }}
        className="absolute bottom-0 left-0 right-0 z-20 hidden md:block"
        style={{
          background: "rgba(10,15,30,0.72)",
          backdropFilter: "blur(14px)",
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div className="container-club">
          <div className="grid grid-cols-4 divide-x divide-white/10">
            {[
              { value: "50+", label: "Años de historia" },
              { value: "2.000+", label: "Socios activos" },
              { value: "9", label: "Disciplinas" },
              { value: "3", label: "Instalaciones propias" },
            ].map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center py-5 gap-0.5"
              >
                <span className="font-heading font-bold text-white text-2xl leading-none tracking-tight">
                  {stat.value}
                </span>
                <span className="text-white/50 text-xs font-medium uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
