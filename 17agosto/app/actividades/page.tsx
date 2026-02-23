import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
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
      {/* Header */}
      <section className="py-12 px-4 lg:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center gap-4">
            <div className="hidden h-px flex-1 bg-border sm:block" />
            <h1 className="text-center font-heading text-3xl font-extrabold text-foreground sm:text-4xl">
              Disciplinas Deportivas
            </h1>
            <div className="hidden h-px flex-1 bg-border sm:block" />
          </div>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Explora todas las actividades que ofrece el Club 17 de Agosto
          </p>
        </div>
      </section>

      {/* Activity sections */}
      <section className="px-4 pb-16 lg:px-6">
        <div className="mx-auto flex max-w-5xl flex-col gap-16">
          {activities.map((activity, i) => {
            const isEven = i % 2 === 0
            return (
              <div
                key={activity.slug}
                className="relative flex flex-col md:flex-row md:items-center"
              >
                <div
                  className={`relative aspect-[4/3] w-full overflow-hidden rounded-xl md:w-[55%] ${
                    isEven ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <Image
                    src={activity.image}
                    alt={activity.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div
                  className={`relative z-10 -mt-6 mx-4 rounded-xl border border-border bg-card p-6 shadow-lg md:mx-0 md:mt-0 md:w-[48%] md:p-7 ${
                    isEven
                      ? "md:order-2 md:-ml-10"
                      : "md:order-1 md:-mr-10"
                  }`}
                >
                  <h2 className="font-heading text-xl font-bold text-foreground">
                    {activity.name}
                  </h2>
                  <p className="mt-1 text-sm font-semibold text-[var(--celeste)]">
                    {activity.tagline}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {activity.description}
                  </p>
                  <Link href={`/${activity.slug}`} className="mt-4 inline-block">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-[var(--blue)] text-[var(--blue)] hover:bg-[var(--blue)] hover:text-white"
                    >
                      Ver mas
                    </Button>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}
