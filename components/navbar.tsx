"use client"

import { useState, useRef, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
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

  // Floating & Scroll hiding logic
  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious()
    if (previous && latest > 150 && latest > previous) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  // Dropdown logic
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
    return `relative inline-flex h-10 items-center px-4 py-2 text-xs font-bold tracking-widest uppercase transition-colors rounded-full
      ${
        isActive
          ? "text-[var(--club-blue-700)] bg-[var(--surface-secondary)]"
          : "text-[var(--club-blue-700)]/70 hover:text-[var(--club-blue-700)] hover:bg-[var(--surface-secondary)]"
      }`
  }

  return (
    <motion.header 
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-150%", opacity: 0 },
      }}
      animate={hidden && !dropdownOpen ? "hidden" : "visible"}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 left-4 right-4 z-50 mx-auto max-w-6xl rounded-[2rem] bg-white/85 backdrop-blur-md border border-[var(--club-blue-700)]/5 shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
    >
      <div className="flex h-[76px] items-center justify-between px-6 lg:px-8">

        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <div className="relative w-14 h-14 shrink-0 transition-transform duration-300 group-hover:scale-105">
            <Image
              src={crest}
              alt="Escudo Club 17 de Agosto"
              fill
              className="object-contain drop-shadow-sm"
              priority
            />
          </div>
          <div className="hidden sm:flex flex-col leading-none">
            <span className="font-heading text-lg font-extrabold tracking-tight text-[var(--club-blue-700)] uppercase leading-tight">
              Club 17
            </span>
            <span className="font-heading text-lg font-extrabold tracking-tight text-[var(--club-blue-700)] uppercase leading-tight">
              de Agosto
            </span>
          </div>
        </Link>

        {/* ── Desktop nav ── */}
        <nav className="hidden lg:flex items-center gap-1">
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
                className={navLinkClass("/actividades")}
              >
                Actividades
                <ChevronDown
                  className={`ml-1 -mr-1 size-3.5 transition-transform duration-300 ${dropdownOpen ? "rotate-180 text-[var(--club-pink)]" : "text-[var(--club-blue-700)]/50"}`}
                />
              </Link>
            </div>

            {dropdownOpen && (
              <div className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 z-50 w-[600px] rounded-3xl border border-[var(--club-blue-700)]/5 bg-white/95 backdrop-blur-xl p-4 shadow-[0_20px_40px_rgba(0,0,0,0.08)] animate-in fade-in-0 zoom-in-95 duration-200">
                <div className="grid grid-cols-2 gap-2">
                  {activities.map((activity) => (
                    <Link
                      key={activity.slug}
                      href={`/${activity.slug}`}
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-center gap-3.5 rounded-2xl px-3 py-3 text-sm transition-all duration-200 hover:bg-[var(--surface-secondary)] hover:scale-[1.02] group"
                    >
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm border border-[var(--surface-secondary)] group-hover:border-[var(--club-pink-light)] group-hover:shadow-md transition-all">
                        <activity.icon className="size-5 text-[var(--club-blue-600)] group-hover:text-[var(--club-pink)] transition-colors" />
                      </div>
                      <div className="min-w-0">
                        <div className="font-bold text-[var(--club-blue-700)] uppercase tracking-wide text-[11px] mb-0.5">
                          {activity.name}
                        </div>
                        <p className="truncate text-xs text-muted-foreground font-medium">
                          {activity.tagline}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="mt-3 border-t border-[var(--club-blue-700)]/5 pt-3">
                  <Link
                    href="/actividades"
                    onClick={() => setDropdownOpen(false)}
                    className="flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-[var(--club-blue-700)]/70 transition-colors hover:text-[var(--club-blue-700)] hover:bg-[var(--surface-secondary)]"
                  >
                    Ver todas las disciplinas
                    <ChevronRight className="size-4" />
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

          {/* CTA moderno estilo Premium */}
          <Link href="/asociarme" className="ml-4 shrink-0">
            <Button
              className="h-11 px-6 rounded-full font-bold text-xs tracking-widest shadow-[0_4px_14px_rgba(244,114,182,0.4)] transition-all hover:scale-105"
              style={{ backgroundColor: 'var(--club-pink)', color: 'var(--club-blue-700)' }}
            >
              ALTA SOCIO
            </Button>
          </Link>
        </nav>

        {/* ── Mobile hamburger ── */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="text-[var(--club-blue-700)] hover:bg-[var(--surface-secondary)] rounded-full">
              <Menu className="size-6" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[85vw] sm:w-96 overflow-y-auto bg-white/95 backdrop-blur-xl border-l border-[var(--club-blue-700)]/10 p-0">
            <SheetHeader className="p-6 border-b border-[var(--club-blue-700)]/5 text-left">
              <SheetTitle className="flex items-center gap-4">
                <div className="relative w-14 h-14 shrink-0">
                  <Image src={crest} alt="Escudo" fill className="object-contain drop-shadow-sm" />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="font-heading text-lg font-extrabold tracking-tight text-[var(--club-blue-700)] uppercase">Club 17</span>
                  <span className="font-heading text-lg font-extrabold tracking-tight text-[var(--club-blue-700)] uppercase">de Agosto</span>
                </div>
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-2 p-6">
              <Link href="/" onClick={() => setMobileOpen(false)} className="rounded-xl px-4 py-3.5 text-sm font-bold uppercase tracking-widest text-[var(--club-blue-700)]/80 hover:bg-[var(--surface-secondary)] hover:text-[var(--club-blue-700)] transition-colors">
                Inicio
              </Link>
              <div className="bg-[var(--surface-secondary)]/50 rounded-xl overflow-hidden border border-[var(--club-blue-700)]/5">
                <button
                  onClick={() => setMobileAccordion((v) => !v)}
                  className="flex w-full items-center justify-between px-4 py-3.5 shrink-0 text-sm font-bold uppercase tracking-widest text-[var(--club-blue-700)]/80 hover:bg-[var(--surface-secondary)] transition-colors"
                >
                  Actividades
                  <ChevronDown className={`size-4 transition-transform duration-300 ${mobileAccordion ? "rotate-180 text-[var(--club-pink)]" : ""}`} />
                </button>
                {mobileAccordion && (
                  <div className="flex flex-col gap-1 pb-3 px-2 animate-in slide-in-from-top-2 duration-300">
                    {activities.map((a) => (
                      <Link key={a.slug} href={`/${a.slug}`} onClick={() => setMobileOpen(false)} className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-xs font-semibold text-[var(--club-blue-700)]/70 hover:bg-white hover:text-[var(--club-blue-700)] hover:shadow-sm transition-all">
                        <div className="flex size-7 shrink-0 items-center justify-center rounded-md bg-[rgba(244,114,182,0.1)]">
                          <a.icon className="size-3.5 text-[var(--club-pink)]" />
                        </div>
                        {a.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link href="/colonia" onClick={() => setMobileOpen(false)} className="rounded-xl px-4 py-3.5 text-sm font-bold uppercase tracking-widest text-[var(--club-blue-700)]/80 hover:bg-[var(--surface-secondary)] hover:text-[var(--club-blue-700)] transition-colors">
                Colonia de Vacaciones
              </Link>
              <Link href="/institucional" onClick={() => setMobileOpen(false)} className="rounded-xl px-4 py-3.5 text-sm font-bold uppercase tracking-widest text-[var(--club-blue-700)]/80 hover:bg-[var(--surface-secondary)] hover:text-[var(--club-blue-700)] transition-colors">
                Institucional
              </Link>
              <Link href="/contacto" onClick={() => setMobileOpen(false)} className="rounded-xl px-4 py-3.5 text-sm font-bold uppercase tracking-widest text-[var(--club-blue-700)]/80 hover:bg-[var(--surface-secondary)] hover:text-[var(--club-blue-700)] transition-colors">
                Contacto
              </Link>
              
              <div className="mt-8 pt-6 border-t border-[var(--club-blue-700)]/10">
                <Link href="/asociarme" onClick={() => setMobileOpen(false)}>
                  <Button className="w-full h-14 text-sm tracking-[0.2em] font-extrabold uppercase rounded-2xl shadow-[0_4px_20px_rgba(244,114,182,0.3)] transition-all hover:scale-[1.02]" style={{ backgroundColor: 'var(--club-pink)', color: 'var(--club-blue-700)' }}>
                    Asociarme al Club
                  </Button>
                </Link>
              </div>
            </nav>
          </SheetContent>
        </Sheet>

      </div>
    </motion.header>
  )
}
