"use client"

import Link from "next/link"
import { activities } from "@/lib/data"
import { motion, Variants } from "framer-motion"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
}

export function ActivitiesRow() {
  return (
    <section className="section-spacing">
      <div className="container-club">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-3 tracking-tight">
            Nuestras actividades
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Encontrá la disciplina que más te guste
          </p>
        </div>

        {/* Activities Grid - 4 columns on desktop */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-gap-club max-w-6xl mx-auto"
        >
          {activities.map((activity) => (
            <motion.div key={activity.slug} variants={itemVariants} className="h-full">
              <Link
                href={`/${activity.slug}`}
                className="
                  group flex flex-col items-center
                  rounded-2xl border border-border bg-card
                  p-8 md:p-10 h-full
                  transition-all duration-300 ease-out
                  hover:border-club-blue-600 hover:border-2
                  hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.01]
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-club-blue-600/60
                "
              >
              {/* Icon */}
              <div className="mb-6">
                <div
                  className="
                    inline-flex items-center justify-center
                    size-16 md:size-20
                    rounded-xl
                    bg-club-blue-600/10
                    transition-colors duration-250
                    group-hover:bg-club-blue-600/15
                  "
                  style={{ backgroundColor: 'rgba(37, 99, 235, 0.1)' }}
                >
                  <activity.icon className="size-8 md:size-10" style={{ color: '#1a3a6b' }} />
                </div>
              </div>

              {/* Title - Sentence case */}
              <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-6 leading-tight text-center">
                {activity.name}
              </h3>

              {/* Ver más link */}
              <div className="mt-auto pt-4 border-t border-transparent group-hover:border-border transition-colors duration-250 w-full text-center">
                <span className="text-base font-semibold group-hover:text-club-blue-700 transition-colors" style={{ color: '#2563eb' }}>
                  Ver más →
                </span>
              </div>
            </Link>
          </motion.div>
          ))}
        </motion.div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            href="/actividades"
            className="
              inline-flex items-center gap-2
              text-base font-semibold
              hover:text-club-blue-700
              transition-colors duration-200
              border-b-2 border-transparent hover:border-club-blue-600
              pb-1
            "
            style={{ color: '#2563eb' }}
          >
            Ver todas las actividades
          </Link>
        </div>
      </div>
    </section>
  )
}