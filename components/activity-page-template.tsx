import Image from "next/image"
import Link from "next/link"
import {
  Instagram,
  Phone,
  Mail,
  Clock,
  Users,
  Target,
  ShieldCheck,
  FileText,
  HelpCircle,
  AlertTriangle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { CLUB_PHONE, CLUB_EMAIL, CLUB_INSTAGRAM, type Activity } from "@/lib/data"
import { ScrollAnimation, HeroAnimation } from "./scroll-animation"

type Schedule = { day: string; time: string; category: string }
type Staff = { name: string; role: string }
type FAQ = { q: string; a: string }

type ActivityPageProps = {
  activity: Activity
  schedules: Schedule[]
  staff: Staff[]
  requirements: string[]
  faqs: FAQ[]
}

export function ActivityPageTemplate({
  activity,
  schedules,
  staff,
  requirements,
  faqs,
}: ActivityPageProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[320px] max-h-[480px] w-full overflow-hidden">
        <Image
          src={activity.image}
          alt={activity.name}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface-dark)]/95 via-[var(--surface-dark)]/60 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <HeroAnimation className="text-center px-4 max-w-4xl">
            <p className="text-xs md:text-sm uppercase tracking-wider font-bold mb-3" style={{ color: 'var(--club-pink)' }}>
              Disciplina Oficial
            </p>
            <h1 className="font-heading text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl lg:text-7xl mb-4">
              {activity.name}
            </h1>
            <p className="mt-2 text-base md:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
              {activity.tagline}
            </p>
          </HeroAnimation>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-16 lg:px-6">
        
        {/* Aviso especial GYM */}
        {activity.slug === "gym" && (
          <ScrollAnimation delay={0} className="mb-10 rounded-2xl border-2 p-5 flex items-start gap-4 shadow-sm" style={{ borderColor: 'var(--club-pink-light)', backgroundColor: 'var(--surface-secondary)' }}>
            <AlertTriangle className="size-6 shrink-0 mt-0.5" style={{ color: 'var(--club-pink)' }} />
            <div>
              <h3 className="font-bold text-foreground text-sm uppercase tracking-wider mb-1" style={{ color: 'var(--club-pink)' }}>
                Arancel Adicional
              </h3>
              <p className="text-sm text-foreground leading-relaxed">
                El acceso a la sala de musculación **no está incluido en la cuota social base**. La habilitación del Gym requiere abonar un arancel mensual adicional de <strong className="font-bold text-[var(--club-blue-600)]">$40.000</strong>.
              </p>
            </div>
          </ScrollAnimation>
        )}

        {/* Descripcion */}
        <ScrollAnimation as="section" delay={0} className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex size-10 items-center justify-center rounded-xl bg-[var(--surface-secondary)]">
              <FileText className="size-5" style={{ color: 'var(--club-blue-600)' }} />
            </div>
            <h2 className="font-heading text-2xl font-bold text-foreground">
              Propuesta Deportiva
            </h2>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 md:p-8 shadow-sm">
            <p className="text-base leading-relaxed text-muted-foreground">
              {activity.description}
            </p>
          </div>
        </ScrollAnimation>

        {/* Categorias */}
        {activity.categories && activity.categories.length > 0 && (
          <ScrollAnimation as="section" delay={0.1} className="mb-16">
            <h2 className="flex items-center gap-3 font-heading text-xl font-bold text-foreground mb-5">
              <Users className="size-5" style={{ color: 'var(--club-pink)' }} />
              Grilla de Categorías
            </h2>
            <div className="flex flex-wrap gap-2">
              {activity.categories.map((cat) => (
                <Badge
                  key={cat}
                  variant="secondary"
                  className="bg-[var(--surface-secondary)] border border-border hover:bg-accent text-foreground px-4 py-1.5 text-sm font-semibold rounded-full"
                >
                  {cat}
                </Badge>
              ))}
            </div>
          </ScrollAnimation>
        )}

        {/* Horarios */}
        <ScrollAnimation as="section" delay={0.1} className="mb-16">
          <h2 className="flex items-center gap-3 font-heading text-2xl font-bold text-foreground mb-6">
            <Clock className="size-6" style={{ color: 'var(--club-blue-600)' }} />
            Días y Horarios
          </h2>
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_4px_20px_rgb(0,0,0,0.03)]">
            <Table>
              <TableHeader>
                <TableRow className="bg-[var(--surface-secondary)] hover:bg-[var(--surface-secondary)]">
                  <TableHead className="text-foreground font-bold text-sm h-12">Día</TableHead>
                  <TableHead className="text-foreground font-bold text-sm h-12">Horario</TableHead>
                  <TableHead className="text-foreground font-bold text-sm h-12">Categoría</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {schedules.map((s, i) => (
                  <TableRow key={i} className="hover:bg-accent/50 transition-colors">
                    <TableCell className="text-sm font-semibold text-foreground">{s.day}</TableCell>
                    <TableCell className="text-sm text-muted-foreground font-medium">{s.time}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">{s.category}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </ScrollAnimation>

        {/* Staff & Requisitos */}
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-8 mb-16">
          <ScrollAnimation as="section" delay={0.1}>
            <h2 className="flex items-center gap-3 font-heading text-xl font-bold text-foreground mb-5">
              <ShieldCheck className="size-5" style={{ color: 'var(--club-pink)' }} />
              Requisitos Previos
            </h2>
            <div className="grid gap-3">
              {requirements.map((req, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-xl border border-[rgba(244,114,182,0.2)] bg-[rgba(244,114,182,0.03)] p-3.5 hover:bg-[rgba(244,114,182,0.06)] transition-colors"
                >
                  <ShieldCheck className="size-4 shrink-0" style={{ color: 'var(--club-pink)' }} />
                  <span className="text-sm font-medium text-foreground">{req}</span>
                </div>
              ))}
            </div>
          </ScrollAnimation>

          <ScrollAnimation as="section" delay={0.2}>
            <h2 className="flex items-center gap-3 font-heading text-xl font-bold text-foreground mb-5">
              <Users className="size-5" style={{ color: 'var(--club-blue-600)' }} />
              Cuerpo Técnico
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {staff.map((s, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-border bg-card p-4 flex flex-col items-center text-center shadow-sm"
                >
                  <div className="flex size-10 items-center justify-center rounded-full bg-[var(--surface-secondary)] mb-3">
                    <Users className="size-4" style={{ color: 'var(--club-blue-600)' }} />
                  </div>
                  <p className="text-sm font-bold text-foreground leading-tight">{s.name}</p>
                  <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider font-semibold">{s.role}</p>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>

        {/* Competencias */}
        {activity.competitions && activity.competitions.length > 0 && (
          <ScrollAnimation as="section" delay={0.1} className="mb-16 rounded-3xl bg-[var(--surface-secondary)] p-8 border border-border">
            <h2 className="flex items-center gap-3 font-heading text-2xl font-bold text-foreground mb-5">
              <Target className="size-6" style={{ color: 'var(--club-blue-600)' }} />
              {activity.slug === "gym"
                ? "Objetivos y Propuesta"
                : activity.slug === "buceo"
                  ? "Niveles y Certificaciones"
                  : activity.slug === "natacion"
                    ? "Niveles y Objetivos"
                    : "Torneos y Competencias"}
            </h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {activity.competitions.map((c, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 rounded-xl bg-white p-4 shadow-sm border border-[rgba(0,0,0,0.04)]"
                >
                  <div className="mt-1 size-2 shrink-0 rounded-full" style={{ background: 'var(--club-pink)' }} />
                  <span className="text-sm font-medium text-foreground leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>
          </ScrollAnimation>
        )}

        {/* FAQ & Contacto */}
        <div className="grid md:grid-cols-[1.5fr_1fr] gap-8 mb-16">
          <ScrollAnimation as="section" delay={0}>
            <h2 className="flex items-center gap-3 font-heading text-2xl font-bold text-foreground mb-6">
              <HelpCircle className="size-6" style={{ color: 'var(--club-pink)' }} />
              Dudas comunes
            </h2>
            <Accordion type="single" collapsible className="rounded-2xl border border-border p-2 bg-card">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-b last:border-0 px-3">
                  <AccordionTrigger className="text-left text-sm font-bold text-foreground hover:no-underline py-4">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollAnimation>

          <ScrollAnimation as="section" delay={0.2}>
            <h2 className="flex items-center gap-3 font-heading text-2xl font-bold text-foreground mb-6">
              <Phone className="size-6" style={{ color: 'var(--club-blue-600)' }} />
              Secretaría
            </h2>
            <div className="flex flex-col gap-3">
              <a
                href={`tel:${CLUB_PHONE}`}
                className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 text-sm font-semibold text-foreground transition-all duration-300 hover:shadow-md hover:border-[var(--club-blue-600)]"
              >
                <div className="bg-[var(--surface-secondary)] p-2 rounded-full">
                  <Phone className="size-4" style={{ color: 'var(--club-blue-600)' }} />
                </div>
                {CLUB_PHONE}
              </a>
              <a
                href={`mailto:${CLUB_EMAIL}`}
                className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 text-sm font-semibold text-foreground transition-all duration-300 hover:shadow-md hover:border-[var(--club-blue-600)]"
              >
                <div className="bg-[var(--surface-secondary)] p-2 rounded-full">
                  <Mail className="size-4" style={{ color: 'var(--club-blue-600)' }} />
                </div>
                {CLUB_EMAIL}
              </a>
              <a
                href={CLUB_INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 text-sm font-semibold text-foreground transition-all duration-300 hover:shadow-md hover:border-[var(--club-pink)]"
              >
                <div className="bg-[rgba(244,114,182,0.1)] p-2 rounded-full">
                  <Instagram className="size-4" style={{ color: 'var(--club-pink)' }} />
                </div>
                Instagram
              </a>
            </div>
          </ScrollAnimation>
        </div>

        {/* Galeria */}
        <ScrollAnimation as="section" delay={0.2} className="mb-16">
          <h2 className="font-heading text-2xl font-bold text-foreground tracking-tight mb-6">
            En acción
          </h2>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {[activity.image, activity.image, activity.image].map(
              (img, i) => (
                <div
                  key={i}
                  className={`relative overflow-hidden rounded-2xl group ${i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"}`}
                >
                  <Image
                    src={img}
                    alt={`${activity.name} galeria ${i + 1}`}
                    fill
                    sizes={i === 0 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 50vw, 33vw"}
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />
                </div>
              )
            )}
          </div>
        </ScrollAnimation>

        {/* CTA */}
        <ScrollAnimation as="section" delay={0} className="rounded-[32px] p-10 md:p-14 text-center relative overflow-hidden shadow-2xl" style={{ background: 'linear-gradient(135deg, var(--club-blue-700), var(--club-blue-900))' }}>
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
          <div className="relative z-10 max-w-2xl mx-auto">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-[var(--club-pink-light)] mb-3">La cancha te espera</p>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
              ¿Querés ser parte del plantel?
            </h2>
            <p className="text-base md:text-lg text-white/80 leading-relaxed mb-8">
              Preparate para entrenar al máximo nivel. Obtené tu carnet de socio y vení a representar los colores de nuestro club en la cancha.
            </p>
            <Link href="/asociarme" className="inline-block">
              <Button
                size="lg"
                className="h-14 px-10 rounded-xl font-bold text-base shadow-[0_4px_20px_rgba(244,114,182,0.4)] transition-all hover:scale-105"
                style={{ backgroundColor: 'var(--club-pink)', color: 'var(--club-blue-700)' }}
              >
                Comenzar proceso de asociación
              </Button>
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </>
  )
}
