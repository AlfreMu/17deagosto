import Link from "next/link"
import { Instagram, Phone, Mail, MapPin } from "lucide-react"
import {
  CLUB_NAME,
  CLUB_ADDRESS,
  CLUB_PHONE,
  CLUB_EMAIL,
  CLUB_INSTAGRAM,
} from "@/lib/data"

export function Footer() {
  return (
    <footer className="bg-[var(--navy)] text-white">
      <div className="mx-auto max-w-6xl px-4 py-10 lg:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-3">
            <h3 className="font-heading text-base font-bold text-white">{CLUB_NAME}</h3>
            <div className="flex flex-col gap-2.5 text-sm text-gray-300">
              <div className="flex items-start gap-2">
                <MapPin className="size-4 shrink-0 mt-0.5 text-[var(--celeste)]" />
                <span>{CLUB_ADDRESS}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="size-4 shrink-0 text-[var(--celeste)]" />
                <span>{CLUB_PHONE}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="size-4 shrink-0 text-[var(--celeste)]" />
                <a
                  href={`mailto:${CLUB_EMAIL}`}
                  className="hover:text-[var(--celeste)] transition-colors"
                >
                  {CLUB_EMAIL}
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-heading text-base font-bold text-white">Enlaces</h3>
            <nav className="flex flex-col gap-1.5 text-sm text-gray-300">
              {[
                { label: "Inicio", href: "/" },
                { label: "Actividades", href: "/actividades" },
                { label: "Colonia de Vacaciones", href: "/colonia" },
                { label: "Institucional", href: "/institucional" },
                { label: "Contacto", href: "/contacto" },
                { label: "Asociarme", href: "/asociarme" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-[var(--celeste)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-heading text-base font-bold text-white">Redes Sociales</h3>
            <div className="flex gap-3">
              <a
                href={CLUB_INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-md bg-white/10 px-4 py-2 text-sm text-gray-300 transition-colors hover:bg-white/20 hover:text-white"
              >
                <Instagram className="size-5" />
                <span>Instagram</span>
              </a>
            </div>
            <p className="text-sm text-gray-400">
              Segui nuestras redes para enterarte de las novedades del club.
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-5 text-center text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} {CLUB_NAME}. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
