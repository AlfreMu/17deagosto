"use client"

import { useState } from "react"
import { toast } from "sonner"
import { motion } from "framer-motion"
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
  Activity,
  Users2,
  Clock,
  CalendarDays
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

const EASE = [0.22, 1, 0.36, 1] as const

const fadeUpProps = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.6, delay, ease: EASE }
})

const benefits = [
  {
    icon: Activity,
    title: "Multiples actividades",
    desc: "Gimnasio, pileta, basquet, futsal y mas opciones para entrenar."
  },
  {
    icon: Users2,
    title: "Comunidad unida",
    desc: "Un ambiente familiar y deportivo donde vas a sentirte en casa."
  },
  {
    icon: Clock,
    title: "Horarios flexibles",
    desc: "Amplia banda horaria para que elijas cuando desarrollar tu deporte."
  },
  {
    icon: CalendarDays,
    title: "Eventos exclusivos",
    desc: "Torneos, colonia de vacaciones y actividades sociales todo el ano."
  }
]

const steps = [
  {
    icon: ClipboardList,
    title: "Completa el formulario",
    desc: "Ingresa tus datos personales y elegi la actividad que mas te interese.",
  },
  {
    icon: Phone,
    title: "Te contactamos",
    desc: "En 24-48 hs habiles nos comunicamos para coordinar todo.",
  },
  {
    icon: FileText,
    title: "Presentas requisitos",
    desc: "DNI, apto medico y foto carnet. Te detallamos todo paso a paso.",
  },
  {
    icon: CheckCircle,
    title: "Confirmacion y alta",
    desc: "¡Listo! Una vez aprobada tu documentacion ya sos parte del club.",
  },
]

const requisitos = [
  "DNI (original y copia)",
  "Apto medico vigente",
  "Foto carnet 4x4",
  "Comprobante de domicilio",
  "Menores: autorizacion de madre/padre/tutor",
]

const categorias = [
  {
    title: "Adulto",
    desc: "Mayores de 18 anios. Acceso total a las instalaciones y actividades.",
  },
  {
    title: "Menor",
    desc: "Menores de 18 anios. Requiere la autorizacion de un tutor legal.",
  },
  {
    title: "Grupo Familiar",
    desc: "Plan especial para el grupo familiar con descuentos preferenciales.",
  },
]

export default function AsociarmePage() {
  const [selectedActivities, setSelectedActivities] = useState<string[]>([])
  const [categoria, setCategoria] = useState("")
  const [nacimiento, setNacimiento] = useState("")
  const [loading, setLoading] = useState(false)

  function toggleActivity(slug: string) {
    setSelectedActivities((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    )
  }

  function handleNacimientoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value
    setNacimiento(val)
    if (val) {
      const birthDate = new Date(val)
      const today = new Date()
      let age = today.getFullYear() - birthDate.getFullYear()
      const m = today.getMonth() - birthDate.getMonth()
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--
      }
      // Auto-seleccionar categoría (Adulto o Menor). Grupo Familiar queda a elección manual.
      if (age < 18) {
        setCategoria("menor")
      } else {
        setCategoria("adulto")
      }
    } else {
      setCategoria("")
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const form = e.currentTarget
    const data = new FormData(form)
    const payload = Object.fromEntries(data.entries())

    try {
      const res = await fetch("/api/asociarme", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: payload.nombre,
          dni: payload.dni,
          email: payload.email,
          telefono: payload.telefono,
          nacimiento,
          direccion: payload.direccion,
          categoria,
          actividades: selectedActivities,
          mensaje: payload.mensaje,
        }),
      })

      const result = await res.json()

      if (!res.ok || !result.ok) {
        throw new Error(result?.error ?? "Error al enviar el formulario")
      }

      toast.success(
        "¡Gracias! Te vamos a contactar en las próximas 24-48 hs hábiles."
      )
      form.reset()
      setSelectedActivities([])
      setCategoria("")
      setNacimiento("")
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Hubo un error al enviar."
      console.error("Error al enviar formulario:", error)
      toast.error(message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* ── HERO CON FONDO PUNTEADO ── */}
      <section 
        className="relative overflow-hidden section-spacing"
        style={{ background: 'linear-gradient(to bottom right, #1a3a6b, #1a3a6b, #162682)' }}
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '32px 32px' }} />
        </div>
        
        <div className="relative mx-auto max-w-3xl text-center container-club">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }}>
            <p className="text-xs md:text-sm uppercase tracking-wider font-bold mb-4" style={{ color: 'var(--club-pink)' }}>
              Unite a la comunidad
            </p>
            <h1 className="font-heading text-4xl font-extrabold text-white sm:text-5xl md:text-6xl tracking-tight mb-6">
              Quiero asociarme
            </h1>
            <p className="text-base text-white/80 text-pretty leading-relaxed sm:text-lg mb-8 max-w-2xl mx-auto">
              Se parte del Club 17 de Agosto. Completá el formulario hoy mismo y comenzá a disfrutar de todas nuestras actividades e instalaciones.
            </p>
            <a href="#formulario">
              <Button
                size="lg"
                className="h-14 px-8 rounded-xl font-bold text-base transition-transform active:scale-95 shadow-xl hover:shadow-[0_4px_20px_rgba(244,114,182,0.4)]"
                style={{ backgroundColor: 'var(--club-pink)', color: 'var(--club-blue-700)' }}
              >
                Comenzar proceso de alta
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-16 lg:px-6">
        
        {/* ── SECCION BENEFICIOS ── */}
        <section className="mb-20">
          <motion.div className="text-center mb-10" {...fadeUpProps(0)}>
            <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl tracking-tight">
              ¿Por qué asociarse al club?
            </h2>
          </motion.div>
          
          <div className="grid gap-5 sm:grid-cols-2">
            {benefits.map((bene, i) => (
              <motion.div
                key={i}
                {...fadeUpProps(i * 0.1)}
                className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300"
              >
                <div className="flex-shrink-0 flex items-center justify-center size-12 rounded-full" style={{ background: 'rgba(244,114,182,0.1)' }}>
                  <bene.icon className="size-6" style={{ color: 'var(--club-pink)' }} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    {bene.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {bene.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUpProps(0.4)} className="mt-8 text-center flex items-center justify-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: 'var(--club-pink)' }}></span>
              <span className="relative inline-flex rounded-full h-3 w-3" style={{ backgroundColor: 'var(--club-pink)' }}></span>
            </span>
            <p className="text-sm font-semibold text-muted-foreground">
              +2000 socios activos ya conforman el club. ¡Sumate!
            </p>
          </motion.div>
        </section>

        {/* ── COMO ES EL PROCESO ── */}
        <section className="mb-20">
          <motion.h2 {...fadeUpProps()} className="text-center font-heading text-2xl font-bold text-foreground sm:text-3xl tracking-tight mb-10">
            Los pasos a seguir
          </motion.h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                {...fadeUpProps(i * 0.1)}
                className="relative flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center shadow-sm"
              >
                <div className="flex size-14 items-center justify-center rounded-full mb-4" style={{ background: 'var(--surface-secondary)' }}>
                  <step.icon className="size-6" style={{ color: 'var(--club-blue-600)' }} />
                </div>
                <span className="mb-2 text-[10px] font-bold uppercase tracking-widest" style={{ color: 'var(--club-pink)' }}>
                  Paso {i + 1}
                </span>
                <h3 className="mb-2 text-base font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── INFO ADICIONAL (Requisitos, Cat, etc) ── */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          <motion.section {...fadeUpProps(0)}>
            <h2 className="font-heading text-xl font-bold text-foreground mb-5">
              Requisitos obligatorios
            </h2>
            <div className="grid gap-3">
              {requisitos.map((req, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card p-3.5 shadow-sm"
                >
                  <CheckCircle className="size-5 shrink-0" style={{ color: 'var(--club-pink)' }} />
                  <span className="text-sm font-medium text-foreground">{req}</span>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section {...fadeUpProps(0.2)}>
            <h2 className="font-heading text-xl font-bold text-foreground mb-5">
              Nuestras categorías
            </h2>
            <div className="grid gap-4">
              {categorias.map((cat, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-border bg-card p-5 shadow-sm"
                >
                  <h3 className="text-base font-bold text-foreground">{cat.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>
        </div>

        <motion.section {...fadeUpProps()} className="mb-20 rounded-2xl p-8 md:p-10 shadow-sm" style={{ background: 'var(--surface-secondary)' }}>
          <h2 className="font-heading text-2xl font-bold text-foreground tracking-tight">
            Acerca de los aranceles
          </h2>
          <p className="mt-3 text-base text-muted-foreground leading-relaxed max-w-2xl">
            Los valores de la cuota social y aranceles de cada actividad están sujetos a modificaciones. Por favor contactanos a través de estos canales para solicitar el esquema de precios vigente:
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`tel:${CLUB_PHONE}`}
              className="flex items-center gap-2 rounded-xl bg-card px-4 py-3 text-sm font-semibold border border-border hover:shadow-md transition-all text-foreground"
            >
              <Phone className="size-4" style={{ color: 'var(--club-blue-600)' }} />
              {CLUB_PHONE}
            </a>
            <a
              href={`mailto:${CLUB_EMAIL}`}
              className="flex items-center gap-2 rounded-xl bg-card px-4 py-3 text-sm font-semibold border border-border hover:shadow-md transition-all text-foreground"
            >
              <Mail className="size-4" style={{ color: 'var(--club-blue-600)' }} />
              {CLUB_EMAIL}
            </a>
            <a
              href={CLUB_INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-card px-4 py-3 text-sm font-semibold border border-border hover:shadow-md transition-all text-foreground"
            >
              <Instagram className="size-4" style={{ color: 'var(--club-blue-600)' }} />
              Instagram Oficial
            </a>
          </div>
        </motion.section>

        {/* ── FORMULARIO ── */}
        <motion.section {...fadeUpProps()} id="formulario" className="scroll-mt-24 max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-heading text-3xl font-bold text-foreground tracking-tight">
              Solicitud de asociación
            </h2>
            <p className="mt-2 text-muted-foreground">
              Completá tus datos reales para poder darte de alta.
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="grid gap-6 rounded-3xl border border-border bg-card p-6 md:p-10 shadow-xl sm:grid-cols-2"
          >
            <div className="flex flex-col gap-2">
              <Label htmlFor="nombre" className="text-sm font-semibold text-foreground">
                Nombre y apellido
              </Label>
              <Input id="nombre" name="nombre" required minLength={3} placeholder="Ej: Juan Pérez" className="h-12 rounded-xl" />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="dni" className="text-sm font-semibold text-foreground">
                DNI
              </Label>
              <Input id="dni" name="dni" required minLength={7} maxLength={10} pattern="[0-9]*" placeholder="Ej: 12345678" className="h-12 rounded-xl" />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="email" className="text-sm font-semibold text-foreground">
                Correo electrónico
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="juan@ejemplo.com"
                className="h-12 rounded-xl"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="telefono" className="text-sm font-semibold text-foreground">
                Teléfono celular
              </Label>
              <Input
                id="telefono"
                name="telefono"
                required
                minLength={8}
                placeholder="11-xxxx-xxxx"
                className="h-12 rounded-xl"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="nacimiento" className="text-sm font-semibold text-foreground">
                Fecha de nacimiento
              </Label>
              <Input 
                id="nacimiento" 
                name="nacimiento" 
                type="date" 
                required 
                value={nacimiento}
                onChange={handleNacimientoChange}
                className="h-12 rounded-xl" 
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="direccion" className="text-sm font-semibold text-foreground">
                Dirección
              </Label>
              <Input
                id="direccion"
                name="direccion"
                required
                placeholder="Calle, Número, Localidad"
                className="h-12 rounded-xl"
              />
            </div>

            <div className="flex flex-col gap-2 sm:col-span-2">
              <Label htmlFor="categoria" className="text-sm font-semibold text-foreground flex justify-between">
                <span>Categoría a solicitar</span>
                {nacimiento && (
                  <span className="text-[10px] uppercase tracking-wider text-[var(--club-pink)]">Auto detectado</span>
                )}
              </Label>
              <Select value={categoria} onValueChange={setCategoria} required>
                <SelectTrigger id="categoria" className="h-12 rounded-xl">
                  <SelectValue placeholder="Seleccioná una categoría acorde a tu edad" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="adulto">Categoría Adulto (+18)</SelectItem>
                  <SelectItem value="menor">Categoría Menor (hasta 17)</SelectItem>
                  <SelectItem value="familiar">Plan Grupo Familiar</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-3 sm:col-span-2 mt-2">
              <Label className="text-sm font-semibold text-foreground">¿Qué disciplinas te interesan? (Múltiple)</Label>
              <div className="grid gap-3 sm:grid-cols-2">
                {activities.map((a) => (
                  <label
                    key={a.slug}
                    className="
                      flex flex-col rounded-xl border border-border px-4 py-3 cursor-pointer text-foreground 
                      transition-all hover:bg-neutral-50
                      has-[:checked]:bg-[var(--surface-secondary)] has-[:checked]:border-[var(--club-blue-600)]
                    "
                  >
                    <div className="flex items-center gap-3">
                      <Checkbox
                        checked={selectedActivities.includes(a.slug)}
                        onCheckedChange={() => toggleActivity(a.slug)}
                        className="rounded data-[state=checked]:bg-[var(--club-blue-600)] data-[state=checked]:border-[var(--club-blue-600)]"
                      />
                      <span className="text-sm font-medium">{a.name}</span>
                    </div>
                    {a.slug === "gym" && (
                      <div className="pl-7 mt-1.5 text-xs text-muted-foreground">
                        Requiere abonar $40.000 mensual aparte de la membresía.
                      </div>
                    )}
                  </label>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:col-span-2 mt-2">
              <Label htmlFor="mensaje" className="text-sm font-semibold text-foreground">
                Comentarios adicionales (Opcional)
              </Label>
              <Textarea
                id="mensaje"
                name="mensaje"
                placeholder="Si tenés alguna duda sobre horarios o grupos, dejanos tu comentario acá..."
                rows={4}
                className="rounded-xl resize-none"
              />
            </div>

            <div className="sm:col-span-2 mt-4">
              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="w-full h-14 rounded-xl text-white font-bold text-base shadow-xl transition-transform active:scale-95 disabled:opacity-70 disabled:scale-100 disabled:cursor-not-allowed"
                style={{ backgroundColor: 'var(--club-blue-600)' }}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="animate-spin size-5 border-2 border-white/30 border-t-white rounded-full" />
                    Enviando solicitud...
                  </span>
                ) : (
                  <>
                    <UserPlus className="mr-2 size-5" />
                    Enviar solicitud de inscripción
                  </>
                )}
              </Button>
              <p className="text-center text-xs text-muted-foreground mt-4">
                El envío de este formulario implica una solicitud y no genera cargos automáticos. Un asesor del club revisará tus datos.
              </p>
            </div>
          </form>
        </motion.section>

      </div>
    </>
  )
}