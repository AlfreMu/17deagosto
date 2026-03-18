import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaBanner() {
  return (
    <section 
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom right, #1a3a6b, #1a3a6b, #162682)',
        paddingTop: 'clamp(2.5rem, 6vw, 4rem)',
        paddingBottom: 'clamp(2.5rem, 6vw, 4rem)',
      }}
    >
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="relative container-club">
        <div className="text-center max-w-3xl mx-auto">
          {/* Small label */}
          <p className="text-xs md:text-sm uppercase tracking-wider font-semibold text-white/80 mb-4">
            Unite al club
          </p>

          {/* Title - Sentence case, Outfit */}
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-5 tracking-tight leading-tight">
            Sumate a nuestra comunidad
          </h2>
          
          {/* Subtitle */}
          <p className="text-base md:text-lg text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
            Comenzá ahora mismo el trámite para asociarte y ser parte del Club 17 de Agosto.
          </p>

          {/* CTA Button - Enhanced with icon */}
          <Link href="/asociarme">
            <Button
              size="lg"
              className="
                h-16 px-12 rounded-xl
                bg-white
                border-3 border-white
                font-bold text-lg
                transition-all duration-300
                shadow-2xl hover:shadow-[0_20px_60px_rgba(255,255,255,0.3)]
                hover:scale-105 hover:bg-neutral-50
                inline-flex items-center gap-3
              "
              style={{ color: '#1a3a6b' }}
            >
              Quiero asociarme
              <ArrowRight className="size-5" />
            </Button>
          </Link>

          {/* Trust indicator */}
          <p className="mt-8 text-sm text-white/70">
            Más de 2000 socios activos confían en nosotros
          </p>
        </div>
      </div>
    </section>
  )
}