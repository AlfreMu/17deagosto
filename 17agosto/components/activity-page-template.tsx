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
      <section className="relative h-[45vh] min-h-[320px] max-h-[480px] w-full">
        <Image
          src={activity.image}
          alt={activity.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[var(--navy)]/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-heading text-3xl font-extrabold uppercase tracking-wider text-white sm:text-4xl lg:text-5xl">
              {activity.name}
            </h1>
            <p className="mt-2 text-base text-gray-200 sm:text-lg">
              {activity.tagline}
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 lg:px-6">
        {/* Descripcion */}
        <section className="mb-10">
          <h2 className="flex items-center gap-2 font-heading text-xl font-bold text-foreground">
            <FileText className="size-5 text-[var(--celeste)]" />
            Descripcion
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {activity.description}
          </p>
        </section>

        {/* Categorias */}
        {activity.categories && activity.categories.length > 0 && (
          <section className="mb-10">
            <h2 className="flex items-center gap-2 font-heading text-xl font-bold text-foreground">
              <Users className="size-5 text-[var(--celeste)]" />
              Para quien es
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {activity.categories.map((cat) => (
                <Badge
                  key={cat}
                  variant="secondary"
                  className="bg-accent text-accent-foreground px-3 py-1 text-xs"
                >
                  {cat}
                </Badge>
              ))}
            </div>
          </section>
        )}

        {/* Horarios */}
        <section className="mb-10">
          <h2 className="flex items-center gap-2 font-heading text-xl font-bold text-foreground">
            <Clock className="size-5 text-[var(--celeste)]" />
            Horarios
          </h2>
          <div className="mt-3 overflow-hidden rounded-lg border border-border">
            <Table>
              <TableHeader>
                <TableRow className="bg-secondary">
                  <TableHead className="text-foreground font-semibold text-xs">Dia</TableHead>
                  <TableHead className="text-foreground font-semibold text-xs">Horario</TableHead>
                  <TableHead className="text-foreground font-semibold text-xs">Categoria</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {schedules.map((s, i) => (
                  <TableRow key={i}>
                    <TableCell className="text-sm font-medium text-foreground">{s.day}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">{s.time}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">{s.category}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>

        {/* Staff */}
        <section className="mb-10">
          <h2 className="flex items-center gap-2 font-heading text-xl font-bold text-foreground">
            <Users className="size-5 text-[var(--celeste)]" />
            Profesores / Staff
          </h2>
          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            {staff.map((s, i) => (
              <div
                key={i}
                className="rounded-lg border border-border bg-card p-4 text-center shadow-sm"
              >
                <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-accent">
                  <Users className="size-5 text-[var(--celeste)]" />
                </div>
                <p className="mt-2 text-sm font-semibold text-foreground">{s.name}</p>
                <p className="text-xs text-muted-foreground">{s.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Competencias */}
        {activity.competitions && activity.competitions.length > 0 && (
          <section className="mb-10">
            <h2 className="flex items-center gap-2 font-heading text-xl font-bold text-foreground">
              <Target className="size-5 text-[var(--celeste)]" />
              {activity.slug === "gym"
                ? "Objetivos y Propuesta"
                : activity.slug === "buceo"
                  ? "Niveles y Certificaciones"
                  : activity.slug === "natacion"
                    ? "Niveles y Objetivos"
                    : "Torneos y Competencias"}
            </h2>
            <ul className="mt-3 flex flex-col gap-2">
              {activity.competitions.map((c, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-md bg-secondary p-3"
                >
                  <div className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[var(--celeste)]" />
                  <span className="text-sm text-foreground">{c}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Requisitos */}
        <section className="mb-10">
          <h2 className="flex items-center gap-2 font-heading text-xl font-bold text-foreground">
            <ShieldCheck className="size-5 text-[var(--celeste)]" />
            Requisitos
          </h2>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {requirements.map((req, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-lg border border-border bg-card p-3"
              >
                <ShieldCheck className="size-4 text-[var(--celeste)] shrink-0" />
                <span className="text-sm text-foreground">{req}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Contacto */}
        <section className="mb-10">
          <h2 className="flex items-center gap-2 font-heading text-xl font-bold text-foreground">
            <Phone className="size-5 text-[var(--celeste)]" />
            Contacto
          </h2>
          <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:gap-3">
            <a
              href={`tel:${CLUB_PHONE}`}
              className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              <Phone className="size-4 text-[var(--celeste)]" />
              {CLUB_PHONE}
            </a>
            <a
              href={`mailto:${CLUB_EMAIL}`}
              className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              <Mail className="size-4 text-[var(--celeste)]" />
              {CLUB_EMAIL}
            </a>
            <a
              href={CLUB_INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              <Instagram className="size-4 text-[var(--celeste)]" />
              Instagram
            </a>
          </div>
        </section>

        {/* Galeria */}
        <section className="mb-10">
          <h2 className="font-heading text-xl font-bold text-foreground">
            Galeria
          </h2>
          <div className="mt-3 grid grid-cols-2 gap-2 md:grid-cols-3">
            {[activity.image, activity.image, activity.image, activity.image, activity.image, activity.image].map(
              (img, i) => (
                <div
                  key={i}
                  className="relative aspect-square overflow-hidden rounded-lg"
                >
                  <Image
                    src={img}
                    alt={`${activity.name} galeria ${i + 1}`}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
              )
            )}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="flex items-center gap-2 font-heading text-xl font-bold text-foreground">
            <HelpCircle className="size-5 text-[var(--celeste)]" />
            Preguntas Frecuentes
          </h2>
          <Accordion type="single" collapsible className="mt-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left text-sm text-foreground">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* CTA */}
        <section className="rounded-xl bg-[var(--navy)] p-8 text-center">
          <h2 className="font-heading text-xl font-bold text-white">
            Queres ser parte?
          </h2>
          <p className="mt-1.5 text-sm text-gray-300">
            Asociate al club y empeza a entrenar con nosotros.
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
