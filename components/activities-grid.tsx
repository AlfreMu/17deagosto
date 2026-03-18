"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { activities } from "@/lib/data"

// ── Tipos ───────────────────────────────────────────────────────────────────
type CardSize = "large" | "medium" | "small"

interface ActivityCardData {
  slug: string
  name: string
  tagline: string
  image: string
  size: CardSize
}

// ── Orden y tamaño de cards ─────────────────────────────────────────────────
// Fútsal + Básquet = grandes. El resto, medianas/pequeñas.
const CARD_SIZES: Record<string, CardSize> = {
  futsal: "large",
  basquet: "large",
  natacion: "medium",
  gym: "medium",
  "gimnasia-deportiva": "medium",
  taekwondo: "small",
  "patin-artistico": "small",
  buceo: "small",
}

const CARD_ORDER = [
  "futsal",
  "basquet",
  "natacion",
  "gym",
  "gimnasia-deportiva",
  "taekwondo",
  "patin-artistico",
  "buceo",
]

function buildGrid(): ActivityCardData[] {
  return CARD_ORDER.map((slug) => {
    const activity = activities.find((a) => a.slug === slug)!
    return {
      slug: activity.slug,
      name: activity.name,
      tagline: activity.tagline,
      image: activity.image,
      size: CARD_SIZES[slug] ?? "small",
    }
  })
}

const EASE = [0.22, 1, 0.36, 1] as const

// ── Activity Card ───────────────────────────────────────────────────────────
function ActivityCard({
  card,
  index,
  inView,
}: {
  card: ActivityCardData
  index: number
  inView: boolean
}) {
  const [hovered, setHovered] = useState(false)

  const isLarge = card.size === "large"
  const isMedium = card.size === "medium"

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.07, ease: EASE }}
      className={[
        "relative rounded-2xl overflow-hidden cursor-pointer group",
        // Desktop grid placement via col/row span
        isLarge ? "md:row-span-2" : "",
        // Heights
        isLarge
          ? "h-[340px] md:h-full"
          : isMedium
          ? "h-[220px] md:h-full"
          : "h-[190px] md:h-full",
      ]
        .filter(Boolean)
        .join(" ")}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => {
        setHovered(true)
        setTimeout(() => setHovered(false), 1200)
      }}
    >
      <Link href={`/${card.slug}`} className="absolute inset-0 z-20" aria-label={card.name}>
        <span className="sr-only">Ver {card.name}</span>
      </Link>

      {/* ── Imagen de fondo con zoom ── */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{ scale: hovered ? 1.06 : 1 }}
        transition={{ duration: 0.55, ease: EASE }}
      >
        <Image
          src={card.image}
          alt={card.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* ── Overlay base ── */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to top, rgba(5,10,24,0.92) 0%, rgba(5,10,24,0.45) 50%, rgba(5,10,24,0.15) 100%)",
        }}
      />

      {/* ── Overlay adicional en hover ── */}
      <motion.div
        className="absolute inset-0 z-10"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.35 }}
        style={{ background: "rgba(5,10,24,0.28)" }}
      />

      {/* ── Contenido de la card ── */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end p-5 md:p-6">

        {/* Nombre de la disciplina */}
        <motion.h3
          className="font-heading font-bold text-white leading-tight mb-2"
          style={{ fontSize: isLarge ? "clamp(1.5rem, 3vw, 2rem)" : "clamp(1.1rem, 2vw, 1.35rem)" }}
          animate={{
            y: hovered ? 2 : 0,
            opacity: 1,
          }}
          transition={{ duration: 0.4, ease: EASE }}
        >
          {card.name}
        </motion.h3>

        {/* Tagline (solo visible en hover o en large siempre) */}
        <motion.p
          className="text-white/75 leading-snug"
          style={{ fontSize: "clamp(0.78rem, 1.5vw, 0.9rem)" }}
          animate={{
            opacity: hovered ? 1 : isLarge ? 0.7 : 0,
            y: hovered ? 0 : isLarge ? 0 : 8,
            height: hovered ? "auto" : isLarge ? "auto" : 0,
          }}
          transition={{ duration: 0.38, ease: EASE }}
        >
          {card.tagline}
        </motion.p>

        {/* CTA "Ver más" — aparece en hover */}
        <motion.div
          className="flex items-center gap-1.5 mt-3"
          animate={{
            opacity: hovered ? 1 : 0,
            y: hovered ? 0 : 10,
          }}
          transition={{ duration: 0.35, delay: hovered ? 0.06 : 0, ease: EASE }}
        >
          <span
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: "var(--club-pink)" }}
          >
            Ver más
          </span>
          <ArrowRight
            className="size-3.5"
            style={{ color: "var(--club-pink)" }}
            strokeWidth={2.5}
          />
        </motion.div>
      </div>

      {/* ── Badge de categoría (top-left) ── */}
      <div
        className="absolute top-4 left-4 z-10 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest"
        style={{
          background: "rgba(10,15,30,0.55)",
          border: "1px solid rgba(255,255,255,0.15)",
          color: "rgba(255,255,255,0.85)",
          backdropFilter: "blur(8px)",
        }}
      >
        {card.size === "large" ? "⭐ Destacada" : "Disciplina"}
      </div>
    </motion.div>
  )
}

// ── Componente principal ────────────────────────────────────────────────────
export function ActivitiesGrid() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: "-60px" })
  const cards = buildGrid()

  return (
    <section ref={sectionRef} className="section-spacing" style={{ background: "var(--surface-secondary)" }}>
      <div className="container-club">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-10 md:mb-12"
        >
          <p
            className="text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: "var(--club-pink)" }}
          >
            Lo que hacemos
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
            <h2
              className="font-heading font-bold text-foreground leading-tight tracking-tight"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
            >
              Elegí tu deporte
            </h2>
            <Link
              href="/actividades"
              className="group inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200"
              style={{ color: "var(--club-blue-600)" }}
            >
              Ver todas las disciplinas
              <ArrowRight
                className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                strokeWidth={2.5}
              />
            </Link>
          </div>
        </motion.div>

        {/* ── DESKTOP: Bento Grid asimétrico con posicionamiento explícito ── */}
        {/*
          Layout:
          Col1      | Col2      | Col3
          [Futsal]  | [Básquet] | [Natación]
          [Futsal]  | [Básquet] | [Gym]
          [GimDep]  | [Tkwondo] | [Patín] | [Buceo] → col3 span2
        */}
        <div
          className="hidden md:grid gap-4"
          style={{
            gridTemplateColumns: "1fr 1fr 1fr",
            gridTemplateRows: "240px 240px 200px 180px",
          }}
        >
          {/* Fútsal — col 1, rows 1-2 */}
          <div style={{ gridColumn: "1", gridRow: "1 / 3" }}>
            <ActivityCard card={cards[0]} index={0} inView={inView} />
          </div>

          {/* Básquet — col 2, rows 1-2 */}
          <div style={{ gridColumn: "2", gridRow: "1 / 3" }}>
            <ActivityCard card={cards[1]} index={1} inView={inView} />
          </div>

          {/* Natación — col 3, row 1 */}
          <div style={{ gridColumn: "3", gridRow: "1" }}>
            <ActivityCard card={cards[2]} index={2} inView={inView} />
          </div>

          {/* Gym — col 3, row 2 */}
          <div style={{ gridColumn: "3", gridRow: "2" }}>
            <ActivityCard card={cards[3]} index={3} inView={inView} />
          </div>

          {/* Gimnasia Deportiva — col 1, row 3 */}
          <div style={{ gridColumn: "1", gridRow: "3" }}>
            <ActivityCard card={cards[4]} index={4} inView={inView} />
          </div>

          {/* Taekwondo — col 2, row 3 */}
          <div style={{ gridColumn: "2", gridRow: "3" }}>
            <ActivityCard card={cards[5]} index={5} inView={inView} />
          </div>

          {/* Patín Artístico — col 3, row 3 */}
          <div style={{ gridColumn: "3", gridRow: "3" }}>
            <ActivityCard card={cards[6]} index={6} inView={inView} />
          </div>

          {/* Buceo — row 4 full-width (3 cols) */}
          <div style={{ gridColumn: "1 / 4", gridRow: "4" }}>
            <ActivityCard card={{ ...cards[7], size: "medium" }} index={7} inView={inView} />
          </div>
        </div>


        {/* ── MOBILE: Grid 2 columnas para principales + grid para resto ── */}
        <div className="md:hidden">
          {/* Fútsal + Básquet: 2 columnas visibles simultáneamente */}
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">
            Principales disciplinas
          </p>
          <div className="grid grid-cols-2 gap-3">
            {cards.slice(0, 2).map((card, i) => (
              <ActivityCard
                key={card.slug}
                card={{ ...card, size: "medium" }}
                index={i}
                inView={inView}
              />
            ))}
          </div>

          {/* Resto: grid 2 columnas */}
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mt-6 mb-3">
            También tenemos
          </p>
          <div className="grid grid-cols-2 gap-3">
            {cards.slice(2).map((card, i) => (
              <ActivityCard key={card.slug} card={{ ...card, size: "small" }} index={i + 2} inView={inView} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
