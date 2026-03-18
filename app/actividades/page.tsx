import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ImageWithSkeleton } from "@/components/image-with-skeleton"
import { Button } from "@/components/ui/button"
import { activities } from "@/lib/data"

export const metadata: Metadata = {
  title: "Actividades",
  description:
    "Descubri todas las disciplinas deportivas del Club 17 de Agosto: futsal, basquet, natacion, gimnasia deportiva, gym, patin artistico, buceo y taekwondo.",
}

export default function ActividadesPage() {
  return (
    <>
      <section className="pt-10 pb-16 md:pt-14 md:pb-24">
        <div className="container-club mb-8 md:mb-12">
          <div className="flex items-center gap-4">
            <div className="hidden h-px flex-1 bg-border sm:block" />
            <h1 className="text-center font-heading text-4xl font-extrabold text-foreground sm:text-5xl md:text-6xl tracking-tight">
              Disciplinas Deportivas
            </h1>
            <div className="hidden h-px flex-1 bg-border sm:block" />
          </div>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Explora todas las actividades que ofrece el Club 17 de Agosto
          </p>
        </div>

        <div className="container-club">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[250px] md:auto-rows-[300px] max-w-6xl mx-auto">
            {activities.map((activity) => {
              // Highlight rules: Futsal and Basquet span more columns/rows
              const isHighlight = activity.slug === "futsal" || activity.slug === "basquet"
              
              return (
                <div
                  key={activity.slug}
                  className={`
                    relative group overflow-hidden rounded-2xl border border-border bg-card shadow-sm
                    transition-all duration-300 hover:shadow-2xl hover:-translate-y-1
                    ${isHighlight ? 'md:col-span-2 md:row-span-2' : 'col-span-1 row-span-1'}
                  `}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0">
                    <ImageWithSkeleton
                      src={activity.image}
                      alt={activity.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient Overlay for Text Legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  </div>

                  {/* Content Container */}
                  <div className="relative z-10 flex flex-col justify-end h-full p-6 md:p-8">
                    <div className="mt-auto">
                      <h2 className={`font-heading font-bold text-white mb-1 ${isHighlight ? 'text-3xl' : 'text-xl'}`}>
                        {activity.name}
                      </h2>
                      <p className={`text-white/90 font-medium mb-3 ${isHighlight ? 'text-base' : 'text-sm'}`}>
                        {activity.tagline}
                      </p>
                      {isHighlight && (
                        <p className="text-gray-300 text-sm line-clamp-2 md:line-clamp-3 mb-4 max-w-md">
                          {activity.description}
                        </p>
                      )}
                      
                      <Link href={`/${activity.slug}`} className="inline-block mt-2">
                        <Button
                          variant="outline"
                          size={isHighlight ? "default" : "sm"}
                          className="bg-white/10 text-white border-white/50 backdrop-blur-md hover:bg-white hover:text-black transition-colors"
                        >
                          Ver detalles
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
