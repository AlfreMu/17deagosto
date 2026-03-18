"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Sun,
  Calendar,
  Clock,
  Users,
  Waves,
  Dribbble,
  Music,
  Palette,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const EASE = [0.22, 1, 0.36, 1] as const

const fadeUpProps = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.6, delay, ease: EASE }
})

const edades = [
  { range: "3 a 5 años", desc: "Grupo Patitos - actividades ludicas y recreativas adaptadas." },
  { range: "6 a 8 años", desc: "Grupo Delfines - juegos deportivos, pileta y talleres." },
  { range: "9 a 12 años", desc: "Grupo Tiburones - deportes, competencias y campamentos." },
]

const actividades = [
  { icon: Waves, label: "Natacion y juegos acuaticos" },
  { icon: Dribbble, label: "Mini deportes (futbol, basquet, voley)" },
  { icon: Palette, label: "Talleres de arte y manualidades" },
  { icon: Music, label: "Musica y expresion corporal" },
  { icon: Sun, label: "Juegos al aire libre" },
  { icon: Users, label: "Actividades grupales y de integracion" },
]

export default function ColoniaPage() {
  return (
    <>
      {/* Hero */}
      <section 
        className="relative overflow-hidden h-[45vh] min-h-[320px] max-h-[480px] w-full flex items-center justify-center"
        style={{ background: 'linear-gradient(to bottom right, #1a3a6b, #1a3a6b, #162682)' }}
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '32px 32px' }} />
        </div>
        <div className="relative inset-0 flex items-center justify-center z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7, ease: EASE }}
            className="text-center px-4 max-w-3xl"
          >
            <p className="text-xs md:text-sm uppercase tracking-wider font-bold mb-3" style={{ color: 'var(--club-pink)' }}>
              Verano e Invierno
            </p>
            <h1 className="font-heading text-4xl font-extrabold text-white sm:text-5xl md:text-6xl tracking-tight mb-4">
              Colonia de Vacaciones
            </h1>
            <p className="text-base text-white/90 sm:text-lg text-pretty leading-relaxed">
              El mejor lugar para tus hijos. Un entorno seguro, con docentes especializados, deportes, juegos y muchísima diversión en el club.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-16 lg:px-6">
        
        {/* Edades */}
        <section className="mb-20">
          <motion.div className="text-center mb-10" {...fadeUpProps(0)}>
            <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl tracking-tight">
              Grupos separados por edad
            </h2>
          </motion.div>
          
          <div className="grid gap-5 sm:grid-cols-3">
            {edades.map((e, i) => (
              <motion.div
                key={i}
                {...fadeUpProps(i * 0.1)}
                className="rounded-2xl border border-border bg-card p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_4px_20px_rgb(0,0,0,0.08)] transition-all duration-300"
              >
                <div className="flex size-12 items-center justify-center rounded-full mb-4" style={{ background: 'var(--surface-secondary)' }}>
                  <Users className="size-5" style={{ color: 'var(--club-pink)' }} strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {e.range}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {e.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Temporada & Horarios */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.section {...fadeUpProps(0)} className="rounded-3xl bg-[var(--surface-secondary)] p-8">
            <h2 className="flex items-center gap-3 font-heading text-2xl font-bold text-foreground mb-6">
              <Calendar className="size-6" style={{ color: 'var(--club-blue-600)' }} />
              Temporadas
            </h2>
            <div className="grid gap-4">
              <div className="rounded-xl border border-[rgba(0,0,0,0.08)] bg-white p-5 shadow-sm">
                <p className="text-base font-bold text-foreground mb-1">Temporada de Verano</p>
                <p className="text-sm text-muted-foreground">
                  Diciembre a Febrero. Turnos de 2 o 4 semanas. Pileta climatizada descubierta.
                </p>
              </div>
              <div className="rounded-xl border border-[rgba(0,0,0,0.08)] bg-white p-5 shadow-sm">
                <p className="text-base font-bold text-foreground mb-1">Colonia de Invierno</p>
                <p className="text-sm text-muted-foreground">
                  Julio (receso invernal). Turno de 2 semanas. Gimnasio y salones calefaccionados.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section {...fadeUpProps(0.2)} className="rounded-3xl bg-[rgba(244,114,182,0.04)] p-8 border border-[rgba(244,114,182,0.15)]">
            <h2 className="flex items-center gap-3 font-heading text-2xl font-bold text-foreground mb-6">
              <Clock className="size-6" style={{ color: 'var(--club-pink)' }} />
              Horarios
            </h2>
            <div className="grid gap-4">
              <div className="rounded-xl border border-white/50 bg-white/80 p-5 shadow-sm backdrop-blur-sm">
                <p className="text-base font-bold text-foreground mb-1">Turno Mañana</p>
                <p className="text-sm text-muted-foreground">
                  09:00 a 13:00 hs — Incluye snacks saludables de media mañana.
                </p>
              </div>
              <div className="rounded-xl border border-white/50 bg-white/80 p-5 shadow-sm backdrop-blur-sm">
                <p className="text-base font-bold text-foreground mb-1">Turno Completo</p>
                <p className="text-sm text-muted-foreground">
                  09:00 a 17:00 hs — Incluye almuerzo balanceado (prep. por nutricionista) y merienda.
                </p>
              </div>
            </div>
          </motion.section>
        </div>

        {/* Actividades */}
        <section className="mb-20">
          <motion.div className="text-center mb-10" {...fadeUpProps(0)}>
            <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl tracking-tight">
              ¿Qué hacemos en la colonia?
            </h2>
          </motion.div>
          
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {actividades.map((a, i) => (
              <motion.div
                key={i}
                {...fadeUpProps(i * 0.08)}
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 shadow-sm hover:border-[var(--club-pink)] transition-colors"
              >
                <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-full" style={{ background: 'rgba(244,114,182,0.1)' }}>
                  <a.icon className="size-5" style={{ color: 'var(--club-pink)' }} />
                </div>
                <span className="text-sm font-bold text-foreground">
                  {a.label}
                </span>
              </motion.div>
            ))}
          </div>
        </section>

      {/* Galeria */}
        <motion.section {...fadeUpProps(0.2)} className="mb-20">
          <h2 className="font-heading text-2xl font-bold text-foreground tracking-tight mb-6">
            Galería de la Colonia
          </h2>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {[
              "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/portada-coloniadevacaciones.jpg-kGFox31dEscAsM2ejlcq5j9VeGh05d.png",
              "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/portada-coloniadevacaciones.jpg-kGFox31dEscAsM2ejlcq5j9VeGh05d.png",
              "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/portada-coloniadevacaciones.jpg-kGFox31dEscAsM2ejlcq5j9VeGh05d.png"
            ].map(
              (img, i) => (
                <div
                  key={i}
                  className={`relative overflow-hidden rounded-2xl group ${i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"}`}
                >
                  <Image
                    src={img}
                    alt={`Colonia galeria ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />
                </div>
              )
            )}
          </div>
        </motion.section>

        {/* CTAs */}
        <section className="grid gap-5 sm:grid-cols-2">
          <motion.div {...fadeUpProps(0)}>
            <Link
              href="/asociarme"
              className="flex h-full flex-col justify-between rounded-3xl p-8 text-center transition-transform hover:-translate-y-1 shadow-xl"
              style={{ background: 'linear-gradient(135deg, var(--club-blue-700), var(--club-blue-900))' }}
            >
              <div>
                <h3 className="font-heading text-2xl font-bold text-white mb-3 tracking-tight">¡Quiero inscribir a mi hijo/a!</h3>
                <p className="text-sm text-white/80 leading-relaxed mb-6">
                  Completá nuestro formulario de pre-inscripción online marcando la opción Colonia.
                </p>
              </div>
              <Button size="lg" className="w-full rounded-xl bg-[var(--club-pink)] text-white hover:bg-[var(--club-pink-hover)] font-bold text-sm shadow-[0_4px_14px_rgba(244,114,182,0.4)]">
                Empezar inscripción
              </Button>
            </Link>
          </motion.div>
          
          <motion.div {...fadeUpProps(0.2)}>
            <Link
              href="/contacto"
              className="flex h-full flex-col justify-between rounded-3xl p-8 text-center transition-transform hover:-translate-y-1 border border-border"
              style={{ background: 'var(--surface-secondary)' }}
            >
              <div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-3 tracking-tight">¿Tenés alguna duda?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Escribinos por WhatsApp o acercate a la administración para resolver todas tus consultas de manera directa y personalizada.
                </p>
              </div>
              <Button variant="outline" size="lg" className="w-full rounded-xl border-2 border-[var(--club-blue-600)] text-[var(--club-blue-600)] bg-transparent hover:bg-[var(--club-blue-600)] hover:text-white font-bold text-sm">
                Contactar administración
              </Button>
            </Link>
          </motion.div>
        </section>

      </div>
    </>
  )
}
