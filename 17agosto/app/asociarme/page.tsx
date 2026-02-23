"use client"

import { useState } from "react"
import { toast } from "sonner"
import {
  FileText,
  Phone,
  CheckCircle,
  UserPlus,
  CreditCard,
  Banknote,
  ArrowRightLeft,
  ClipboardList,
  Mail,
  Instagram,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { activities, CLUB_PHONE, CLUB_EMAIL, CLUB_INSTAGRAM } from "@/lib/data"

const steps = [
  {
    icon: ClipboardList,
    title: "Completa el formulario",
    desc: "Llena el formulario con tus datos personales y la actividad que te interesa.",
  },
  {
    icon: Phone,
    title: "Te contactamos",
    desc: "En 24-48 hs habiles nos comunicamos para coordinar los proximos pasos.",
  },
  {
    icon: FileText,
    title: "Presentas requisitos",
    desc: "DNI, apto medico y foto carnet. Te detallamos todo por email.",
  },
  {
    icon: CheckCircle,
    title: "Confirmacion y alta",
    desc: "Una vez aprobada tu documentacion, ya sos socio del club.",
  },
]

const requisitos = [
  "DNI (original y copia)",
  "Apto medico vigente",
  "Foto carnet 4x4",
  "Comprobante de domicilio",
  "Menores: autorizacion del tutor",
]

const categorias = [
  {
    title: "Adulto",
    desc: "Mayores de 18 anios. Acceso completo a las instalaciones y actividades.",
  },
  {
    title: "Menor",
    desc: "Menores de 18 anios. Requiere autorizacion de tutor legal.",
  },
  {
    title: "Grupo Familiar",
    desc: "Plan especial para familias. Descuentos por grupo conviviente.",
  },
]

export default function AsociarmePage() {
  const [selectedActivities, setSelectedActivities] = useState<string[]>([])
  const [loading, setLoading] = useState(false)

  function toggleActivity(slug: string) {
    setSelectedActivities((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    )
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const form = e.currentTarget
    const data = new FormData(form)

    // Agregamos las actividades seleccionadas como campo de texto
    data.append("actividades", selectedActivities.join(", "))

    try {
      const res = await fetch("https://formspree.io/f/xnjboloj", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      })

      if (res.ok) {
        toast.success("Gracias! Te vamos a contactar en las proximas 24-48 hs habiles.")
        form.reset()
        setSelectedActivities([])
      } else {
        toast.error("Hubo un error al enviar. Intentalo de nuevo.")
      }
    } catch {
      toast.error("Hubo un error al enviar. Intentalo de nuevo.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--navy)] py-14 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-heading text-3xl font-extrabold text-white sm:text-4xl">
            Quiero asociarme
          </h1>
          <p className="mt-3 text-sm text-gray-300 text-pretty leading-relaxed sm:text-base">
            Unite a nuestra familia deportiva. Completa el formulario y te
            contactamos para que puedas empezar cuanto antes.
          </p>
          <a href="#formulario">
            <Button
              size="lg"
              className="mt-6 bg-[var(--celeste)] text-white hover:bg-white hover:text-[var(--navy)] font-bold text-sm"
            >
              Iniciar tramite
            </Button>
          </a>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-12 lg:px-6">

        {/* Steps */}
        <section className="mb-12">
          <h2 className="text-center font-heading text-xl font-bold text-foreground sm:text-2xl">
            Como es el proceso
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div
                key={i}
                className="flex flex-col items-center rounded-xl border border-border bg-card p-5 text-center shadow-sm"
              >
                <div className="flex size-12 items-center justify-center rounded-full bg-accent">
                  <step.icon className="size-6 text-[var(--celeste)]" />
                </div>
                <span className="mt-2 text-xs font-bold text-[var(--celeste)]">
                  Paso {i + 1}
                </span>
                <h3 className="mt-1 text-sm font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Requisitos */}
        <section className="mb-12">
          <h2 className="font-heading text-xl font-bold text-foreground">
            Requisitos
          </h2>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {requisitos.map((req, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-lg border border-border bg-card p-3"
              >
                <CheckCircle className="size-4 text-[var(--celeste)] shrink-0" />
                <span className="text-sm text-foreground">{req}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Categorias */}
        <section className="mb-12">
          <h2 className="font-heading text-xl font-bold text-foreground">
            Categorias
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {categorias.map((cat, i) => (
              <div
                key={i}
                className="rounded-xl border border-border bg-card p-5 shadow-sm"
              >
                <h3 className="text-sm font-bold text-foreground">{cat.title}</h3>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                  {cat.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Aranceles */}
        <section className="mb-12 rounded-xl bg-secondary p-6">
          <h2 className="font-heading text-xl font-bold text-foreground">
            Aranceles
          </h2>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            Los valores de la cuota social y aranceles de cada actividad se
            informan por email, telefono o Instagram. Contactanos para recibir
            la informacion actualizada.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <a
              href={`tel:${CLUB_PHONE}`}
              className="flex items-center gap-2 rounded-md bg-card px-3 py-2 text-xs font-medium border border-border hover:bg-accent transition-colors text-foreground"
            >
              <Phone className="size-3.5 text-[var(--celeste)]" />
              {CLUB_PHONE}
            </a>
            <a
              href={`mailto:${CLUB_EMAIL}`}
              className="flex items-center gap-2 rounded-md bg-card px-3 py-2 text-xs font-medium border border-border hover:bg-accent transition-colors text-foreground"
            >
              <Mail className="size-3.5 text-[var(--celeste)]" />
              {CLUB_EMAIL}
            </a>
            <a
              href={CLUB_INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md bg-card px-3 py-2 text-xs font-medium border border-border hover:bg-accent transition-colors text-foreground"
            >
              <Instagram className="size-3.5 text-[var(--celeste)]" />
              Instagram
            </a>
          </div>
        </section>

        {/* Medios de pago */}
        <section className="mb-12">
          <h2 className="font-heading text-xl font-bold text-foreground">
            Medios de pago
          </h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {[
              { icon: Banknote, label: "Efectivo" },
              { icon: ArrowRightLeft, label: "Transferencia" },
              { icon: CreditCard, label: "Debito" },
            ].map((m, i) => (
              <div
                key={i}
                className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5"
              >
                <m.icon className="size-4 text-[var(--celeste)]" />
                <span className="text-sm font-medium text-foreground">{m.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Formulario */}
        <section id="formulario" className="scroll-mt-24">
          <h2 className="font-heading text-xl font-bold text-foreground">
            Formulario de inscripcion
          </h2>
          <form
            onSubmit={handleSubmit}
            className="mt-4 grid gap-4 rounded-xl border border-border bg-card p-5 shadow-sm sm:grid-cols-2"
          >
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="nombre" className="text-sm text-foreground">Nombre y apellido</Label>
              <Input id="nombre" name="nombre" required placeholder="Juan Perez" />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="dni" className="text-sm text-foreground">DNI</Label>
              <Input id="dni" name="dni" required placeholder="12345678" />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="email" className="text-sm text-foreground">Email</Label>
              <Input id="email" name="email" type="email" required placeholder="juan@email.com" />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="telefono" className="text-sm text-foreground">Telefono</Label>
              <Input id="telefono" name="telefono" required placeholder="11-1234-5678" />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="nacimiento" className="text-sm text-foreground">Fecha de nacimiento</Label>
              <Input id="nacimiento" name="nacimiento" type="date" required />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="direccion" className="text-sm text-foreground">Direccion</Label>
              <Input id="direccion" name="direccion" required placeholder="Calle 123, CABA" />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="categoria" className="text-sm text-foreground">Categoria</Label>
              <Select name="categoria" required>
                <SelectTrigger id="categoria">
                  <SelectValue placeholder="Selecciona una categoria" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="adulto">Adulto</SelectItem>
                  <SelectItem value="menor">Menor</SelectItem>
                  <SelectItem value="familiar">Grupo Familiar</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <Label className="text-sm text-foreground">Actividad de interes</Label>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {activities.map((a) => (
                  <label
                    key={a.slug}
                    className="flex items-center gap-2 rounded-md border border-border px-3 py-2 text-xs cursor-pointer text-foreground has-[:checked]:bg-accent has-[:checked]:border-[var(--celeste)]"
                  >
                    <Checkbox
                      checked={selectedActivities.includes(a.slug)}
                      onCheckedChange={() => toggleActivity(a.slug)}
                    />
                    {a.name}
                  </label>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <Label htmlFor="mensaje" className="text-sm text-foreground">Mensaje (opcional)</Label>
              <Textarea
                id="mensaje"
                name="mensaje"
                placeholder="Dejanos tu consulta o comentario..."
                rows={3}
              />
            </div>

            <div className="sm:col-span-2">
              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="w-full bg-[var(--celeste)] text-white hover:bg-[var(--blue)] font-bold text-sm disabled:opacity-60"
              >
                <UserPlus className="mr-2 size-4" />
                {loading ? "Enviando..." : "Enviar solicitud"}
              </Button>
            </div>
          </form>
        </section>

      </div>
    </>
  )
}
