import type { Metadata } from "next"
import { Phone, Mail, MapPin, Instagram, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  CLUB_NAME,
  CLUB_ADDRESS,
  CLUB_PHONE,
  CLUB_EMAIL,
  CLUB_INSTAGRAM,
} from "@/lib/data"

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contacta al Club 17 de Agosto. Direccion, telefono, email y redes sociales.",
}

export default function ContactoPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--navy)] py-12 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-heading text-3xl font-extrabold text-white sm:text-4xl">
            Contacto
          </h1>
          <p className="mt-2 text-sm text-gray-300 sm:text-base">
            Estamos para ayudarte. Comunicate por cualquiera de estos medios.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-12 lg:px-6">
        {/* Contact cards */}
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center rounded-xl border border-border bg-card p-5 text-center shadow-sm">
            <div className="flex size-11 items-center justify-center rounded-full bg-accent">
              <MapPin className="size-5 text-[var(--celeste)]" />
            </div>
            <h3 className="mt-2 text-sm font-semibold text-foreground">Direccion</h3>
            <p className="mt-1 text-xs text-muted-foreground">
              {CLUB_ADDRESS}
            </p>
          </div>

          <div className="flex flex-col items-center rounded-xl border border-border bg-card p-5 text-center shadow-sm">
            <div className="flex size-11 items-center justify-center rounded-full bg-accent">
              <Phone className="size-5 text-[var(--celeste)]" />
            </div>
            <h3 className="mt-2 text-sm font-semibold text-foreground">Telefono</h3>
            <a
              href={`tel:${CLUB_PHONE}`}
              className="mt-1 text-xs text-[var(--celeste)] hover:underline"
            >
              {CLUB_PHONE}
            </a>
          </div>

          <div className="flex flex-col items-center rounded-xl border border-border bg-card p-5 text-center shadow-sm">
            <div className="flex size-11 items-center justify-center rounded-full bg-accent">
              <Mail className="size-5 text-[var(--celeste)]" />
            </div>
            <h3 className="mt-2 text-sm font-semibold text-foreground">Email</h3>
            <a
              href={`mailto:${CLUB_EMAIL}`}
              className="mt-1 text-xs text-[var(--celeste)] hover:underline"
            >
              {CLUB_EMAIL}
            </a>
          </div>

          <div className="flex flex-col items-center rounded-xl border border-border bg-card p-5 text-center shadow-sm">
            <div className="flex size-11 items-center justify-center rounded-full bg-accent">
              <Instagram className="size-5 text-[var(--celeste)]" />
            </div>
            <h3 className="mt-2 text-sm font-semibold text-foreground">Instagram</h3>
            <a
              href={CLUB_INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 text-xs text-[var(--celeste)] hover:underline"
            >
              @17a.oficial
            </a>
          </div>
        </section>

        {/* Como llegar */}
        <section className="mt-12">
          <h2 className="font-heading text-xl font-bold text-foreground">
            Como llegar
          </h2>
          <div className="mt-4 overflow-hidden rounded-xl border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.0422899829937!2d-58.51317992367211!3d-34.577796472963534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb7ab112b71eb%3A0x98ed6bf139ffe7cd!2sClub%2017%20De%20Agosto!5e0!3m2!1ses!2sar!4v1772223387296!5m2!1ses!2sar"
              width="100%"
              height="360"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicacion del Club 17 de Agosto"
            />
          </div>
          <div className="mt-3 flex items-start gap-2 text-xs text-muted-foreground">
            <MapPin className="size-3.5 shrink-0 mt-0.5 text-[var(--celeste)]" />
            <span>{CLUB_ADDRESS}</span>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <a href={`tel:${CLUB_PHONE}`}>
              <Button variant="outline" size="sm" className="border-[var(--blue)] text-[var(--blue)] hover:bg-[var(--blue)] hover:text-white">
                <Phone className="mr-1.5 size-3.5" />
                Llamar {CLUB_PHONE}
              </Button>
            </a>
            <a href={`mailto:${CLUB_EMAIL}`}>
              <Button variant="outline" size="sm" className="border-[var(--blue)] text-[var(--blue)] hover:bg-[var(--blue)] hover:text-white">
                <Mail className="mr-1.5 size-3.5" />
                Enviar email
              </Button>
            </a>
            <a href={CLUB_INSTAGRAM} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="border-[var(--blue)] text-[var(--blue)] hover:bg-[var(--blue)] hover:text-white">
                <Instagram className="mr-1.5 size-3.5" />
                Instagram
              </Button>
            </a>
          </div>
        </section>

        {/* Horarios */}
        <section className="mt-12 rounded-xl bg-secondary p-6">
          <h2 className="flex items-center gap-2 font-heading text-xl font-bold text-foreground">
            <Clock className="size-5 text-[var(--celeste)]" />
            Horarios de atencion
          </h2>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-4">
              <p className="text-sm font-semibold text-foreground">Lunes a Viernes</p>
              <p className="text-xs text-muted-foreground">08:00 a 21:00 hs</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <p className="text-sm font-semibold text-foreground">Sabados</p>
              <p className="text-xs text-muted-foreground">09:00 a 13:00 hs</p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
