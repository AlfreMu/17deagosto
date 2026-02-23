import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
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

export const metadata: Metadata = {
  title: "Colonia de Vacaciones",
  description:
    "Colonia de vacaciones del Club 17 de Agosto. Actividades deportivas y recreativas para chicos en verano.",
}

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
      <section className="relative h-[45vh] min-h-[320px] max-h-[480px] w-full">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/portada-coloniadevacaciones.jpg-kGFox31dEscAsM2ejlcq5j9VeGh05d.png"
          alt="Colonia de Vacaciones Club 17 de Agosto"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[var(--navy)]/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-heading text-3xl font-extrabold text-white sm:text-4xl">
              Colonia de Vacaciones
            </h1>
            <p className="mt-2 text-sm text-gray-200 sm:text-base text-pretty">
              El mejor verano para tus hijos, con deportes, juegos y diversion en el club.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-12 lg:px-6">
        {/* Edades */}
        <section className="mb-12">
          <h2 className="font-heading text-xl font-bold text-foreground sm:text-2xl">
            Edades
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {edades.map((e, i) => (
              <div
                key={i}
                className="rounded-xl border border-border bg-card p-5 shadow-sm"
              >
                <div className="flex size-9 items-center justify-center rounded-full bg-accent">
                  <Users className="size-4 text-[var(--celeste)]" />
                </div>
                <h3 className="mt-2.5 text-sm font-bold text-foreground">
                  {e.range}
                </h3>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                  {e.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Temporada */}
        <section className="mb-12 rounded-xl bg-secondary p-6">
          <h2 className="flex items-center gap-2 font-heading text-xl font-bold text-foreground">
            <Calendar className="size-5 text-[var(--celeste)]" />
            Temporada
          </h2>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-4">
              <p className="text-sm font-semibold text-foreground">Temporada de Verano</p>
              <p className="text-xs text-muted-foreground">
                Diciembre a Febrero. Turnos de 2 o 4 semanas.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <p className="text-sm font-semibold text-foreground">Colonia de Invierno</p>
              <p className="text-xs text-muted-foreground">
                Julio (vacaciones de invierno). Turno de 2 semanas.
              </p>
            </div>
          </div>
        </section>

        {/* Horarios */}
        <section className="mb-12">
          <h2 className="flex items-center gap-2 font-heading text-xl font-bold text-foreground">
            <Clock className="size-5 text-[var(--celeste)]" />
            Horarios
          </h2>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-4">
              <p className="text-sm font-semibold text-foreground">Turno Mañana</p>
              <p className="text-xs text-muted-foreground">
                08:30 a 12:30 hs
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <p className="text-sm font-semibold text-foreground">Turno Completo</p>
              <p className="text-xs text-muted-foreground">
                08:30 a 17:00 hs (incluye almuerzo)
              </p>1
            </div>
          </div>
        </section>

        {/* Actividades */}
        <section className="mb-12">
          <h2 className="font-heading text-xl font-bold text-foreground">
            Actividades
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {actividades.map((a, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-lg border border-border bg-card p-3.5 shadow-sm"
              >
                <div className="flex size-9 items-center justify-center rounded-full bg-accent">
                  <a.icon className="size-4 text-[var(--celeste)]" />
                </div>
                <span className="text-sm font-medium text-foreground">
                  {a.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* CTAs */}
        <section className="grid gap-4 sm:grid-cols-2">
          <Link
            href="/asociarme"
            className="flex flex-col items-center rounded-xl bg-[var(--navy)] p-7 text-center transition-transform hover:scale-[1.01]"
          >
            <h3 className="font-heading text-lg font-bold text-white">Quiero inscribir a mi hijo/a</h3>
            <p className="mt-1.5 text-xs text-gray-300 leading-relaxed">
              Completa el formulario de asociacion y menciona la colonia.
            </p>
            <Button className="mt-4 bg-[var(--celeste)] text-white hover:bg-white hover:text-[var(--navy)] font-bold text-sm">
              Asociarme
            </Button>
          </Link>
          <Link
            href="/contacto"
            className="flex flex-col items-center rounded-xl bg-[var(--blue)] p-7 text-center transition-transform hover:scale-[1.01]"
          >
            <h3 className="font-heading text-lg font-bold text-white">Tengo consultas</h3>
            <p className="mt-1.5 text-xs text-gray-300 leading-relaxed">
              Comunicate con nosotros para mas informacion sobre la colonia.
            </p>
            <Button className="mt-4 bg-white text-[var(--blue)] hover:bg-[var(--celeste)] hover:text-white font-bold text-sm">
              Contacto
            </Button>
          </Link>
        </section>
      </div>
    </>
  )
}
