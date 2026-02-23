import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CtaBanner() {
  return (
    <section className="relative bg-[var(--navy)] py-10 md:py-14">
      {/* fondo con gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="rounded-3xl bg-white/10 p-6 md:p-10 backdrop-blur-sm border border-white/10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="font-heading text-2xl md:text-4xl font-extrabold uppercase tracking-wider text-white">
                ASOCIATE HOY
              </h3>
              <p className="mt-2 text-sm md:text-base text-white/85 max-w-2xl">
                Comenzá ahora mismo el trámite para asociarte y ser parte del Club 17 de Agosto.
              </p>
            </div>

            <Button
              asChild
              className="
                h-12 md:h-14 px-8 md:px-10 rounded-xl
                bg-[var(--celeste)] text-white hover:bg-[var(--blue)]
                font-semibold uppercase tracking-wide
                shadow-sm transition-all duration-200
                hover:shadow-md hover:-translate-y-[1px]
              "
            >
              <Link href="/asociarme">QUIERO ASOCIARME</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}