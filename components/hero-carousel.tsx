"use client"

import { useCallback, useEffect, useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { activities } from "@/lib/data"

// Welcome slide data
const welcomeSlide = {
  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/edificio-wj21KqWlQ31TauzPGNZ597c00HYZLn.jpg",
  title: "Bienvenido al Club 17 de Agosto",
  subtitle: "Un club de barrio familiar y deportivo. Sumate a nuestra comunidad.",
  cta: "Quiero asociarme",
  href: "/asociarme",
  isWelcome: true,
}

// Combine welcome + activity slides
const allSlides = [
  welcomeSlide,
  ...activities.map((activity) => ({
    image: activity.image,
    title: activity.name,
    subtitle: activity.tagline,
    cta: "Ver más",
    href: `/${activity.slug}`,
    isWelcome: false,
  })),
]

export function HeroCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])

  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  const scrollPrev = useCallback(() => api?.scrollPrev(), [api])
  const scrollNext = useCallback(() => api?.scrollNext(), [api])

  useEffect(() => {
    if (!api) return
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())
    api.on("select", () => setCurrent(api.selectedScrollSnap()))
  }, [api])

  useEffect(() => {
    if (!api) return
    const timer = setInterval(() => api.scrollNext(), 5500)
    return () => clearInterval(timer)
  }, [api])

  return (
    <section ref={containerRef} className="relative w-full overflow-hidden">
      <Carousel setApi={setApi} opts={{ loop: true }} className="w-full">
        <CarouselContent className="ml-0">
          {allSlides.map((slide, i) => (
            <CarouselItem
              key={i}
              className="relative min-h-[75vh] md:min-h-[85vh] pl-0 flex items-center justify-center"
            >
              {/* Background Image with Parallax */}
              <motion.div style={{ y }} className="absolute inset-0 z-0">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={i === 0}
                />
              </motion.div>

              {/* Overlay - Minimal for legibility */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />

              {/* Content */}
              <div className="relative z-10 container-club text-center">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  key={current} // Re-trigger animation on slide change
                  className="mx-auto max-w-3xl"
                >
                  {/* Small label - only on welcome slide */}
                  {slide.isWelcome && (
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="label text-white/90 mb-4"
                    >
                      Villa Pueyrredon, Buenos Aires
                    </motion.p>
                  )}

                  {/* Title */}
                  <h1
                    className={`
                      font-heading font-bold text-white leading-tight tracking-tight
                      ${slide.isWelcome 
                        ? 'text-4xl md:text-6xl lg:text-7xl mb-6' 
                        : 'text-5xl md:text-6xl lg:text-7xl mb-5'
                      }
                    `}
                  >
                    {slide.title}
                  </h1>

                  {/* Subtitle */}
                  <p className="text-lg md:text-xl text-white/95 mb-8 leading-relaxed max-w-2xl mx-auto">
                    {slide.subtitle}
                  </p>

                  {/* CTA Button - HIGH CONTRAST */}
                  <Link href={slide.href}>
                    <Button
                      size="lg"
                      className={`
                        h-14 px-10 rounded-lg
                        font-semibold text-base
                        transition-all duration-300
                        ${slide.isWelcome
                          ? 'bg-white text-club-blue-700 border-2 border-white shadow-2xl hover:bg-neutral-50 hover:scale-105'
                          : 'bg-white/10 text-white border-2 border-white backdrop-blur-sm shadow-xl hover:bg-white hover:text-club-blue-700 hover:scale-105'
                        }
                      `}
                    >
                      {slide.cta}
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Arrows - Larger and more visible */}
        <button
          onClick={scrollPrev}
          className="
            absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20
            flex size-12 md:size-14 items-center justify-center
            rounded-full bg-white/20 text-white backdrop-blur-md
            border-2 border-white/30
            transition-all duration-200
            hover:bg-white/30 hover:scale-110
            focus:outline-none focus:ring-2 focus:ring-white/50
          "
          aria-label="Anterior"
        >
          <ChevronLeft className="size-6 md:size-7" />
        </button>
        <button
          onClick={scrollNext}
          className="
            absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20
            flex size-12 md:size-14 items-center justify-center
            rounded-full bg-white/20 text-white backdrop-blur-md
            border-2 border-white/30
            transition-all duration-200
            hover:bg-white/30 hover:scale-110
            focus:outline-none focus:ring-2 focus:ring-white/50
          "
          aria-label="Siguiente"
        >
          <ChevronRight className="size-6 md:size-7" />
        </button>

        {/* Dot Indicators - Larger and more visible */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2.5 z-20">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              aria-label={`Ir a slide ${i + 1}`}
              className={`
                rounded-full transition-all duration-300
                ${i === current
                  ? 'w-8 h-3 bg-white'
                  : 'size-3 bg-white/40 hover:bg-white/70'
                }
              `}
            />
          ))}
        </div>
      </Carousel>
    </section>
  )
}
