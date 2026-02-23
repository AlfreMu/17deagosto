"use client"

import { useCallback, useEffect, useState } from "react"
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

const slides = [
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/edificio-wj21KqWlQ31TauzPGNZ597c00HYZLn.jpg",
    title: "Bienvenido al Club 17 de Agosto",
    text: "Un club de barrio familiar y deportivo. Sumate a nuestra comunidad.",
    cta: "ASOCIARME",
    href: "/asociarme",
  },
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/portada-futsal-09gx52jQjOBwbT3W38Q0Ue63smcZ18.jpg",
    title: "FUTSAL",
    text: "Participacion en torneos y entrenamientos de todas sus categorias. Competencias en femenino y masculino.",
    cta: "MÁS INFORMACIÓN",
    href: "/futsal",
  },
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/portada-basquet-1ewsXeQt0mAYt5WHiPoT09VuVahxir.jpg",
      title: "BASQUET",
    text: "Formando personas a traves del deporte. Competencias en femenino y masculino.",
    cta: "MÁS INFORMACIÓN",
    href: "/basquet",
  },
]

export function HeroCarousel() {
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
    const timer = setInterval(() => api.scrollNext(), 6000)
    return () => clearInterval(timer)
  }, [api])

  return (
    <section className="relative w-full">
      <Carousel setApi={setApi} opts={{ loop: true }} className="w-full">
        <CarouselContent className="ml-0">
          {slides.map((slide, i) => (
            <CarouselItem key={i} className="relative min-h-[70vh] md:min-h-[78vh] lg:min-h-[78vh] pl-0">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={i === 0}
              />
              <div className="absolute inset-0 bg-[var(--navy)]/65" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="mx-auto max-w-2xl px-6 text-center">
                  <h1 className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl text-balance leading-tight">
                    {slide.title}
                  </h1>
                  <p className="mt-3 text-base text-gray-200 sm:text-lg text-pretty leading-relaxed">
                    {slide.text}
                  </p>
                  <Link href={slide.href} className="mt-6 inline-block">
                    <Button
                      size="lg"
                      className="bg-[var(--titulo)] text-white hover:bg-[var(--blue)] text-sm font-bold px-8"
                    >
                      {slide.cta}
                    </Button>
                  </Link>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <button
          onClick={scrollPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 flex size-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/40"
          aria-label="Anterior"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 flex size-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/40"
          aria-label="Siguiente"
        >
          <ChevronRight className="size-5" />
        </button>

        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              aria-label={`Ir a slide ${i + 1}`}
              className={`size-2.5 rounded-full transition-all ${
                i === current
                  ? "bg-white scale-125"
                  : "bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </Carousel>
    </section>
  )
}
