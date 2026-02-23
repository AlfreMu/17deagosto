import type { Metadata } from "next"
import { activities } from "@/lib/data"
import { ActivityPageTemplate } from "@/components/activity-page-template"

export const metadata: Metadata = { title: "Patin Artistico" }

const activity = activities.find((a) => a.slug === "patin-artistico")!

export default function PatinArtisticoPage() {
  return (
    <ActivityPageTemplate
      activity={activity}
      schedules={[
        { day: "Lunes", time: "16:00 - 17:00", category: "Escuelita (4-6)" },
        { day: "Lunes", time: "17:00 - 18:30", category: "Infantil" },
        { day: "Martes", time: "17:00 - 19:00", category: "Juvenil / Avanzado" },
        { day: "Miercoles", time: "16:00 - 17:00", category: "Escuelita (4-6)" },
        { day: "Miercoles", time: "17:00 - 18:30", category: "Infantil" },
        { day: "Jueves", time: "17:00 - 19:00", category: "Competitivo" },
        { day: "Viernes", time: "16:00 - 18:00", category: "Practica libre" },
      ]}
      staff={[
        { name: "Patricia Mendez", role: "Coordinadora" },
        { name: "Sofia Gimenez", role: "Profesora Formativas" },
        { name: "Romina Castro", role: "Profesora Competitivo" },
      ]}
      requirements={[
        "Apto medico vigente",
        "Ser socio del club",
        "Patines artisticos en buen estado",
        "Casco y protecciones para principiantes",
      ]}
      faqs={[
        { q: "A que edad se puede empezar?", a: "A partir de los 4 anios en la categoria Escuelita." },
        { q: "Necesito tener patines propios?", a: "Si, es necesario contar con patines artisticos. Para las primeras clases se puede consultar disponibilidad de prestamo." },
        { q: "Participan en competencias?", a: "Si, participamos en competencias federadas y realizamos exhibiciones y galas durante el anio." },
        { q: "Se necesita experiencia?", a: "No, la Escuelita es para principiantes sin experiencia previa." },
        { q: "Los varones pueden participar?", a: "Si, el patin artistico es mixto y tenemos alumnos varones." },
      ]}
    />
  )
}
