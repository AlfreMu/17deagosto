"use client"

import { useState, useRef, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { activities } from "@/lib/data"

const ESCUDO_CLUB = "/escudoclub.png"
const ESCUDO_FUTSAL =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Escudofutsal-DUKSCdvtyubsmoGy8AISiFVFniJVuV.jpg"
const ESCUDO_BASQUET =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/escudobasquet-IeV91djbhvEawD7DxG9xLqTaiCHJTH.png"

function getCrest(pathname: string) {
  if (pathname === "/futsal") return ESCUDO_FUTSAL
  if (pathname === "/basquet") return ESCUDO_BASQUET
  return ESCUDO_CLUB
}

export function Navbar() {
  const pathname = usePathname()
  const crest = getCrest(pathname)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileAccordion, setMobileAccordion] = useState(false)

  const [dropdownOpen, setDropdownOpen] = useState(false)
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const openDropdown = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
    setDropdownOpen(true)
  }, [])

  const closeDropdown = useCallback(() => {
    closeTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false)
    }, 150)
  }, [])

  const navLinkClass = (href: string) => {
    const isActive =
      pathname === href || (href !== "/" && pathname.startsWith(href))
    return `inline-flex h-10 items-center px-3 py-2 text-sm font-bold tracking-widest uppercase transition-colors
      ${
        isActive
          ? "text-[var(--navy)] border-b-2 border-[var(--navy)]"
          : "text-[var(--navy)]/60 hover:text-[var(--navy)]"
      }`
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-[var(--navy)]/10 shadow-sm">
      <div className="mx-auto flex h-[100px] max-w-7xl items-center justify-between px-4 lg:px-8">

        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-4 shrink-0">
          <div className="relative w-[100px] h-[100px] shrink-0">
            <Image
              src={crest}
              alt="Escudo Club 17 de Agosto"
              fill
              className="object-contain"
              priority
            />
          </div>
          {/* Dos líneas apiladas, mismo peso, mismo tamaño — efecto "block" */}
          <div className="hidden sm:flex flex-col leading-none">
          <span className="font-heading text-[1.55rem] font-extrabold tracking-tight text-[var(--titulo)] uppercase leading-tight">
         Club 17
        </span>
        <span className="font-heading text-[1.55rem] font-extrabold tracking-tight text-[var(--titulo)] uppercase leading-tight">
         de Agosto
        </span>
          </div>
        </Link>

        {/* ── Desktop nav ── */}
        <nav className="hidden lg:flex items-center gap-0">
          <Link href="/" className={navLinkClass("/")}>
            Inicio
          </Link>

          {/* Actividades hover dropdown */}
          <div
            className="relative"
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdown}
          >
            <div className="flex items-center">
              <Link
                href="/actividades"
                className={`${navLinkClass("/actividades")} pr-1`}
              >
                Actividades
              </Link>
              <button
                onMouseEnter={openDropdown}
                className="inline-flex h-10 w-5 items-center justify-center text-[var(--navy)]/50 hover:text-[var(--navy)] transition-colors"
                aria-label="Ver disciplinas"
              >
                <ChevronDown
                  className={`size-3.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                />
              </button>
            </div>

            {dropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 z-50 mt-0 w-[580px] rounded-b-xl border border-[var(--navy)]/10 bg-white p-3 shadow-xl animate-in fade-in-0 slide-in-from-top-1 duration-150">
                <div className="grid grid-cols-2 gap-1">
                  {activities.map((activity) => (
                    <Link
                      key={activity.slug}
                      href={`/${activity.slug}`}
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-[var(--navy)]/5 group"
                    >
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[var(--navy)]/5 group-hover:bg-[var(--navy)]/10">
                        <activity.icon className="size-4 text-[var(--navy)]" />
                      </div>
                      <div className="min-w-0">
                        <div className="font-bold text-[var(--navy)] uppercase tracking-wide text-xs">
                          {activity.name}
                        </div>
                        <p className="truncate text-xs text-[var(--navy)]/50">
                          {activity.tagline}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="mt-2 border-t border-[var(--navy)]/10 pt-2">
                  <Link
                    href="/actividades"
                    onClick={() => setDropdownOpen(false)}
                    className="flex items-center justify-center gap-1 rounded-md px-3 py-2 text-xs font-bold uppercase tracking-widest text-[var(--navy)]/50 transition-colors hover:text-[var(--navy)] hover:bg-[var(--navy)]/5"
                  >
                    Ver todas las actividades
                    <ChevronRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link href="/colonia" className={navLinkClass("/colonia")}>
            Colonia
          </Link>
          <Link href="/institucional" className={navLinkClass("/institucional")}>
            Institucional
          </Link>
          <Link href="/contacto" className={navLinkClass("/contacto")}>
            Contacto
          </Link>

          {/* CTA botón outline estilo Arquitectura */}
          <Link href="/asociarme" className="ml-6 shrink-0">
            <Button
              variant="outline"
              className="border-2 border-[var(--titulo)] bg-[var(--titulo)] text-white hover:bg-white hover:text-[var(--titulo)] ..."
            >
              QUIERO ASOCIARME
            </Button>
          </Link>
        </nav>

        {/* ── Mobile hamburger ── */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="text-[var(--navy)]">
              <Menu className="size-6" />
              <span className="sr-only">Abrir menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80 overflow-y-auto bg-white border-r border-[var(--navy)]/10">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-3">
                <div className="relative w-12 h-12 shrink-0">
                  <Image src={crest} alt="Escudo" fill className="object-contain" />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="font-heading text-base font-extrabold tracking-tight text-[var(--navy)] uppercase">Club 17</span>
                  <span className="font-heading text-base font-extrabold tracking-tight text-[var(--navy)] uppercase">de Agosto</span>
                </div>
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-0.5 px-2 pt-6">
              <Link href="/" onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-2.5 text-sm font-bold uppercase tracking-wide text-[var(--navy)]/70 hover:bg-[var(--navy)]/5 hover:text-[var(--navy)]">
                Inicio
              </Link>
              <div>
                <div className="flex items-center">
                  <Link href="/actividades" onClick={() => setMobileOpen(false)} className="flex-1 rounded-md px-3 py-2.5 text-sm font-bold uppercase tracking-wide text-[var(--navy)]/70 hover:bg-[var(--navy)]/5 hover:text-[var(--navy)]">
                    Actividades
                  </Link>
                  <button
                    onClick={() => setMobileAccordion((v) => !v)}
                    className="flex size-10 items-center justify-center rounded-md text-[var(--navy)]/40 hover:bg-[var(--navy)]/5 hover:text-[var(--navy)] transition-colors"
                    aria-label="Expandir actividades"
                  >
                    <ChevronDown className={`size-4 transition-transform duration-200 ${mobileAccordion ? "rotate-180" : ""}`} />
                  </button>
                </div>
                {mobileAccordion && (
                  <div className="flex flex-col gap-0.5 pb-1 pl-3 animate-in slide-in-from-top-1 duration-150">
                    {activities.map((a) => (
                      <Link key={a.slug} href={`/${a.slug}`} onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5 rounded-md px-3 py-2 text-sm text-[var(--navy)]/60 hover:bg-[var(--navy)]/5 hover:text-[var(--navy)]">
                        <a.icon className="size-4 text-[var(--navy)]/50" />
                        {a.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link href="/colonia" onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-2.5 text-sm font-bold uppercase tracking-wide text-[var(--navy)]/70 hover:bg-[var(--navy)]/5 hover:text-[var(--navy)]">
                Colonia de Vacaciones
              </Link>
              <Link href="/institucional" onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-2.5 text-sm font-bold uppercase tracking-wide text-[var(--navy)]/70 hover:bg-[var(--navy)]/5 hover:text-[var(--navy)]">
                Institucional
              </Link>
              <Link href="/contacto" onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-2.5 text-sm font-bold uppercase tracking-wide text-[var(--navy)]/70 hover:bg-[var(--navy)]/5 hover:text-[var(--navy)]">
                Contacto
              </Link>
              <div className="mt-4 border-t border-[var(--navy)]/10 pt-4">
                <Link href="/asociarme" onClick={() => setMobileOpen(false)}>
                  <Button className="w-full border-2 border-[var(--navy)] bg-transparent text-[var(--navy)] hover:bg-[var(--navy)] hover:text-white font-extrabold uppercase tracking-widest rounded-sm">
                    Quiero Asociarme
                  </Button>
                </Link>
              </div>
            </nav>
          </SheetContent>
        </Sheet>

      </div>
    </header>
  )
}
