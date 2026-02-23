import Link from "next/link"
import { activities } from "@/lib/data"

export function ActivitiesRow() {
  return (
    <section className="py-8 md:py-12 px-4 lg:px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center font-heading text-3xl md:text-4xl font-extrabold tracking-tight text-foreground text-balance">
          NUESTRAS ACTIVIDADES
        </h2>
        <p className="mt-2 text-center text-sm md:text-base text-muted-foreground">
          Encontra la disciplina que mas te guste
        </p>

        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-8 md:gap-8">
          {activities.map((activity) => (
            <Link
              key={activity.slug}
              href={`/${activity.slug}`}
              className="
                group flex flex-col items-center justify-center gap-3
                rounded-2xl border border-transparent bg-transparent
                p-5 md:p-6 text-center
                transition-all duration-200
                hover:bg-slate-50 hover:-translate-y-[2px]
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--celeste)]/60
              "
            >
              <div
                className="
                  flex items-center justify-center rounded-full
                  size-16 md:size-[72px]
                  bg-[var(--celeste)]/10
                  transition-colors duration-200
                  group-hover:bg-[var(--celeste)]/15
                "
              >
                <activity.icon className="size-7 text-[var(--blue)]" />
              </div>

              <span className="text-xs md:text-sm font-semibold uppercase tracking-wider text-foreground leading-tight">
                {activity.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}