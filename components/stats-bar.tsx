"use client"

import {
  useRef,
  useEffect,
  useState,
} from "react"
import { motion, useInView, useMotionValue, useSpring } from "framer-motion"
import { Trophy, Users, Zap, Building2 } from "lucide-react"

// ── Datos de stats ──────────────────────────────────────────────────────────
const stats = [
  {
    icon: Trophy,
    value: 50,
    suffix: "+",
    label: "Años de historia",
    description: "Desde 1973",
  },
  {
    icon: Users,
    value: 2000,
    suffix: "+",
    label: "Socios activos",
    description: "Familias del barrio",
  },
  {
    icon: Zap,
    value: 9,
    suffix: "",
    label: "Disciplinas",
    description: "Para todas las edades",
  },
  {
    icon: Building2,
    value: 3,
    suffix: "",
    label: "Instalaciones",
    description: "Modernas y propias",
  },
]

// ── Componente contador animado ─────────────────────────────────────────────
function AnimatedNumber({
  target,
  suffix,
  started,
}: {
  target: number
  suffix: string
  started: boolean
}) {
  const motionVal = useMotionValue(0)
  const spring = useSpring(motionVal, { stiffness: 60, damping: 22, mass: 1 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!started) return
    motionVal.set(target)
  }, [started, target, motionVal])

  useEffect(() => {
    const unsubscribe = spring.on("change", (v) =>
      setDisplay(Math.round(v))
    )
    return unsubscribe
  }, [spring])

  return (
    <span>
      {display.toLocaleString("es-AR")}
      {suffix}
    </span>
  )
}

// ── Stat Card ───────────────────────────────────────────────────────────────
function StatCard({
  stat,
  index,
  started,
}: {
  stat: (typeof stats)[number]
  index: number
  started: boolean
}) {
  const Icon = stat.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={started ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.65,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex flex-col items-center text-center px-4 py-8 md:py-10 group"
    >
      {/* Ícono */}
      <div
        className="
          mb-4 flex items-center justify-center
          size-11 rounded-xl
          transition-all duration-300
          group-hover:scale-110
        "
        style={{
          background: "rgba(244,114,182,0.12)",
          border: "1px solid rgba(244,114,182,0.25)",
        }}
      >
        <Icon
          className="size-5"
          style={{ color: "var(--club-pink)" }}
          strokeWidth={1.8}
        />
      </div>

      {/* Número */}
      <div
        className="font-heading font-bold leading-none tracking-tighter mb-1"
        style={{
          fontSize: "clamp(2.4rem, 5vw, 3.2rem)",
          color: "var(--club-blue-700)",
        }}
      >
        <AnimatedNumber
          target={stat.value}
          suffix={stat.suffix}
          started={started}
        />
      </div>

      {/* Label principal */}
      <p className="font-semibold text-sm md:text-base text-foreground mb-0.5">
        {stat.label}
      </p>

      {/* Descripción secundaria */}
      <p className="text-xs text-muted-foreground font-medium">
        {stat.description}
      </p>
    </motion.div>
  )
}

// ── Componente principal ────────────────────────────────────────────────────
export function StatsBar() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-y"
      style={{ borderColor: "var(--border-default)" }}
    >
      {/* Fondo sutil con gradiente */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(245,247,255,1) 0%, rgba(255,255,255,1) 50%, rgba(252,231,243,0.25) 100%)",
        }}
      />

      {/* Grid de stats */}
      <div className="relative container-club">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={[
                "relative",
                i < 2 ? "border-b md:border-b-0" : "",
                i % 2 === 0 ? "border-r" : "",
                i === 1 ? "md:border-r" : "",
                i === 2 ? "md:border-r" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              style={{ borderColor: "var(--border-subtle)" }}
            >
              <StatCard stat={stat} index={i} started={isInView} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
