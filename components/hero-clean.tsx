"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroClean() {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/edificio-wj21KqWlQ31TauzPGNZ597c00HYZLn.jpg"
        alt="Club 17 de Agosto"
        fill
        className="object-cover"
        priority
      />
      
      {/* Minimal Overlay - Only for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30" />
      
      {/* Content */}
      <div className="relative z-10 container-club text-center">
        <div className="mx-auto max-w-3xl">
          {/* Small label */}
          <p className="label text-white/90 mb-4">
            Villa Pueyrredon, Buenos Aires
          </p>
          
          {/* Main Title - Outfit, Sentence case */}
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            Bienvenido al Club 17 de Agosto
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/95 mb-8 leading-relaxed max-w-2xl mx-auto">
            Un club de barrio familiar y deportivo. Sumate a nuestra comunidad.
          </p>
          
          {/* CTA Button - Clean style */}
          <Link href="/asociarme">
            <Button
              size="lg"
              className="
                h-14 px-10 rounded-lg
                bg-club-blue-600 text-white 
                hover:bg-club-blue-700
                font-semibold text-base
                transition-all duration-250
                shadow-lg hover:shadow-xl
              "
            >
              Quiero asociarme
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 animate-bounce">
        <span className="text-xs uppercase tracking-wider font-medium">Descubrí más</span>
        <ChevronDown className="size-5" />
      </div>
    </section>
  )
}
