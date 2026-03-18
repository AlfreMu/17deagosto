"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Heart, Users, Trophy, Handshake, Shield, History, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

const EASE = [0.22, 1, 0.36, 1] as const

const fadeUpProps = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.6, delay, ease: EASE }
})

const valores = [
  {
    icon: Heart,
    title: "Pasion por el deporte",
    desc: "Fomentamos la practica deportiva como herramienta de contencion y desarrollo personal.",
  },
  {
    icon: Users,
    title: "Comunidad",
    desc: "Somos un club de puertas abiertas donde cada familia encuentra su lugar de pertenencia.",
  },
  {
    icon: Trophy,
    title: "Excelencia y esfuerzo",
    desc: "Acompañamos a nuestros deportistas para que alcancen su maximo potencial.",
  },
  {
    icon: Handshake,
    title: "Compromiso",
    desc: "Trabajamos todos los dias con el corazon para hacer crecer a nuestra institucion.",
  },
  {
    icon: Shield,
    title: "Respeto e inclusion",
    desc: "Los valores fundamentales que rigen en cada rincon de nuestras instalaciones.",
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
              El corazon de Villa Pueyrredón
            </p>
            <h1 className="font-heading text-4xl font-extrabold text-white sm:text-5xl md:text-6xl tracking-tight mb-4">
              Institucional
            </h1>
            <p className="text-base text-white/90 sm:text-lg text-pretty leading-relaxed">
              Más de medio siglo formando deportistas y uniendo familias en un ambiente de compañerismo, respeto y pasión.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-16 lg:px-6">
        
        {/* Historia & Mision */}
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-8 mb-20">
          <motion.section {...fadeUpProps(0)} className="rounded-3xl bg-[var(--surface-secondary)] p-8 md:p-10 border border-border">
            <h2 className="flex items-center gap-3 font-heading text-2xl font-bold text-foreground sm:text-3xl tracking-tight mb-6">
              <History className="size-7" style={{ color: 'var(--club-blue-600)' }} />
              Nuestra Historia
            </h2>
            <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
              <p>
                El Club Cultural y Deportivo 17 de Agosto nació en el corazón de Villa Pueyrredón con un sueño claro: ofrecer un espacio de contención deportiva y social seguro para todas las familias del barrio.
              </p>
              <p>
                Hoy en día, somos una de las instituciones más representativas de la zona. Contamos con equipos de alta competencia en futsal (AFA) y básquet (FEBAMBA), además de brindar una amplia variedad de deportes que van desde la gimnasia y el patín hasta actividades acuáticas de primer nivel gracias a nuestra pileta climatizada.
              </p>
              <p className="font-semibold text-foreground pt-4 border-t border-[rgba(0,0,0,0.08)]">
                Un orgullo genuino de nuestro barrio y un ejemplo de que el trabajo en comunidad lo logra todo.
              </p>
            </div>
          </motion.section>

          <motion.section {...fadeUpProps(0.2)} className="rounded-3xl bg-[var(--club-blue-700)] text-white p-8 md:p-10 shadow-xl flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Shield className="size-40" />
            </div>
            <div className="relative z-10">
              <h2 className="font-heading text-2xl font-bold mb-4 tracking-tight text-white">Nuestra Misión</h2>
              <p className="text-sm md:text-base text-white/90 leading-relaxed mb-6">
                Crear un ambiente donde el deporte sea el vehículo para enseñar valores de vida, alejando a los más jóvenes de la calle e integrando a toda la familia bajo el mismo techo.
              </p>
              <div className="flex items-center gap-3 text-sm font-semibold text-[var(--club-pink-light)]">
                <MapPin className="size-4" />
                Villa Pueyrredón, CABA
              </div>
            </div>
          </motion.section>
        </div>

        {/* Valores */}
        <section className="mb-20">
          <motion.div className="text-center mb-10" {...fadeUpProps(0)}>
            <p className="text-xs md:text-sm uppercase tracking-wider font-bold mb-2" style={{ color: 'var(--club-pink)' }}>Nuestra brújula</p>
            <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl tracking-tight">
              Los pilares del club
            </h2>
          </motion.div>
          
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {valores.map((v, i) => (
              <motion.div
                key={i}
                {...fadeUpProps(i * 0.1)}
                className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
              >
                <div className="flex size-12 items-center justify-center rounded-2xl mb-5" style={{ background: 'rgba(244,114,182,0.1)' }}>
                  <v.icon className="size-6" style={{ color: 'var(--club-pink)' }} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Autoridades */}
        <section className="mb-20">
          <motion.div className="text-center mb-10" {...fadeUpProps(0)}>
            <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl tracking-tight">
              Honorable Comisión Directiva
            </h2>
            <p className="text-muted-foreground mt-3 text-sm">
              Conocé al equipo de trabajo que lidera los proyectos del club.
            </p>
          </motion.div>
          
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {comision.map((m, i) => (
              <motion.div
                key={i}
                {...fadeUpProps(i * 0.05)}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm hover:border-[var(--club-blue-600)] transition-colors"
                style={{ borderLeftWidth: i === 0 || i === 1 ? '4px' : '1px', borderLeftColor: i === 0 || i === 1 ? 'var(--club-blue-600)' : '' }}
              >
                <div className="flex size-11 flex-shrink-0 items-center justify-center rounded-full" style={{ background: 'var(--surface-secondary)' }}>
                  <Users className="size-5" style={{ color: 'var(--club-blue-600)' }} />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground leading-tight mb-1">{m.name}</p>
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">{m.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <motion.section 
          {...fadeUpProps()} 
          className="rounded-[32px] p-10 md:p-14 text-center relative overflow-hidden shadow-2xl"
          style={{ background: 'linear-gradient(135deg, var(--club-blue-700), var(--club-blue-900))' }}
        >
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
              Sé parte de nuestra historia
            </h2>
            <p className="text-base md:text-lg text-white/80 leading-relaxed mb-8">
              No dejes que te lo cuenten. Asociate online, descubrí tu deporte favorito y viví el club desde adentro. Empezá a formar parte de nuestra gran familia.
            </p>
            <Link href="/asociarme" className="inline-block">
              <Button
                size="lg"
                className="h-14 px-10 rounded-xl bg-white text-[var(--club-blue-700)] hover:bg-[var(--club-pink-light)] hover:text-[var(--club-blue-900)] font-bold text-base shadow-[0_4px_20px_rgba(255,255,255,0.2)] transition-all hover:scale-105"
              >
                Quiero asociarme ahora
              </Button>
            </Link>
          </div>
        </motion.section>

      </div>
    </>
  )
}
