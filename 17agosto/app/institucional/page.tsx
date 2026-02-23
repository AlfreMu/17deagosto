import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Heart, Users, Trophy, Handshake, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Institucional",
  description: "Historia, valores y comision directiva del Club 17 de Agosto.",
}

const valores = [
  {
    icon: Heart,
    title: "Pasion por el deporte",
    desc: "Fomentamos la practica deportiva como herramienta de desarrollo personal y social.",
  },
  {
    icon: Users,
    title: "Comunidad",
    desc: "Somos un club de barrio donde las familias encuentran un lugar de pertenencia.",
  },
  {
    icon: Trophy,
    title: "Excelencia",
    desc: "Buscamos la mejora continua en cada actividad y disciplina que ofrecemos.",
  },
  {
    icon: Handshake,
    title: "Compromiso",
    desc: "Trabajamos con dedicacion para brindar el mejor servicio a nuestros socios.",
  },
  {
    icon: Shield,
    title: "Respeto e inclusion",
    desc: "Promovemos un ambiente de respeto, inclusion y convivencia para todos.",
  },
]

const comision = [
  { name: "Juan Carlos Lopez", role: "Presidente" },
  { name: "Maria Elena Rodriguez", role: "Vicepresidenta" },
  { name: "Roberto Sanchez", role: "Secretario" },
  { name: "Ana Maria Fernandez", role: "Tesorera" },
  { name: "Miguel Angel Torres", role: "Vocal Titular 1ro" },
  { name: "Laura Beatriz Gomez", role: "Vocal Titular 2da" },
]

export default function InstitucionalPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[38vh] min-h-[280px] max-h-[420px] w-full">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/edificio-wj21KqWlQ31TauzPGNZ597c00HYZLn.jpg"
          alt="Club 17 de Agosto"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[var(--navy)]/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-heading text-3xl font-extrabold text-white sm:text-4xl">
              Institucional
            </h1>
            <p className="mt-2 text-sm text-gray-200 sm:text-base">
              Conoce nuestra historia, valores y quienes somos.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-12 lg:px-6">
        {/* Historia */}
        <section className="mb-12">
          <h2 className="font-heading text-xl font-bold text-foreground sm:text-2xl">
            Nuestra Historia
          </h2>
          <div className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground leading-relaxed">
            <p>
              El Club Cultural y Deportivo 17 de Agosto fue fundado en el barrio de Villa Pueyrredon, Ciudad Autonoma de Buenos Aires, con el objetivo de ofrecer un espacio deportivo y social para las familias del barrio.
            </p>
            <p>
              A lo largo de los anios, el club fue creciendo y sumando disciplinas deportivas, siempre con el foco puesto en la formacion integral de sus socios. Hoy contamos con mas de 8 actividades deportivas, una pileta climatizada, un gimnasio de ultima generacion y espacios sociales para eventos.
            </p>
            <p>
              Nuestro futsal compite en torneos de AFA y la Liga Metropolitana, mientras que el basquet participa en FEBAMBA. El club tambien se destaca en gimnasia deportiva, patin artistico, taekwondo, natacion y buceo, con participacion en competencias federadas a nivel local y nacional.
            </p>
            <p>
              El Club 17 de Agosto es un orgullo del barrio y un ejemplo de lo que una comunidad unida puede lograr. Te invitamos a ser parte de nuestra historia.
            </p>
          </div>
        </section>

        {/* Valores */}
        <section className="mb-12">
          <h2 className="font-heading text-xl font-bold text-foreground sm:text-2xl">
            Nuestros Valores
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {valores.map((v, i) => (
              <div
                key={i}
                className="flex flex-col items-center rounded-xl border border-border bg-card p-5 text-center shadow-sm"
              >
                <div className="flex size-11 items-center justify-center rounded-full bg-accent">
                  <v.icon className="size-5 text-[var(--celeste)]" />
                </div>
                <h3 className="mt-2.5 text-sm font-semibold text-foreground">
                  {v.title}
                </h3>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Comision Directiva */}
        <section className="mb-12">
          <h2 className="font-heading text-xl font-bold text-foreground sm:text-2xl">
            Comision Directiva
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {comision.map((m, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-sm"
              >
                <div className="flex size-10 items-center justify-center rounded-full bg-accent">
                  <Users className="size-4 text-[var(--celeste)]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{m.name}</p>
                  <p className="text-xs text-muted-foreground">{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-xl bg-[var(--navy)] p-8 text-center">
          <h2 className="font-heading text-xl font-bold text-white">
            Se parte de nuestra historia
          </h2>
          <p className="mt-1.5 text-sm text-gray-300">
            Asociate y vivi el club desde adentro.
          </p>
          <Link href="/asociarme" className="mt-5 inline-block">
            <Button
              size="lg"
              className="bg-[var(--celeste)] text-white hover:bg-white hover:text-[var(--navy)] font-bold text-sm"
            >
              QUIERO ASOCIARME
            </Button>
          </Link>
        </section>
      </div>
    </>
  )
}
