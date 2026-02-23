import type { Metadata } from "next"
import { activities } from "@/lib/data"
import { ActivityPageTemplate } from "@/components/activity-page-template"

export const metadata: Metadata = { title: "Natacion" }

const activity = activities.find((a) => a.slug === "natacion")!

export default function NatacionPage() {
  return (
    <ActivityPageTemplate
      activity={activity}
      schedules={[
        { day: "Lunes y Miercoles", time: "10:00 - 11:00", category: "Bebes (con adulto)" },
        { day: "Lunes y Miercoles", time: "16:00 - 17:00", category: "Infantil (4-7)" },
        { day: "Lunes y Miercoles", time: "17:00 - 18:00", category: "Infantil (8-12)" },
        { day: "Martes y Jueves", time: "09:00 - 10:00", category: "Adultos mayores" },
        { day: "Martes y Jueves", time: "18:00 - 19:00", category: "Adolescentes" },
        { day: "Martes y Jueves", time: "19:00 - 20:00", category: "Adultos" },
        { day: "Viernes", time: "17:00 - 19:00", category: "Natacion libre" },
        { day: "Sabado", time: "10:00 - 12:00", category: "Recreativa / Familiar" },
      ]}
      staff={[
        { name: "Sergio Molina", role: "Coordinador Natacion" },
        { name: "Florencia Ruiz", role: "Profesora Infantil" },
        { name: "Andres Cabrera", role: "Profesor Adultos" },
      ]}
      requirements={[
        "Apto medico vigente",
        "Ser socio del club",
        "Malla de bano",
        "Gorra de natacion",
        "Antiparras",
        "Ojotas para el borde de la pileta",
      ]}
      faqs={[
        { q: "La pileta es climatizada?", a: "Si, nuestra pileta es climatizada y funciona todo el anio." },
        { q: "A partir de que edad se puede empezar?", a: "A partir de los 6 meses en la categoria de bebes, siempre acompaniados por un adulto." },
        { q: "Hay natacion libre?", a: "Si, los viernes hay horario de natacion libre para socios y los sabados hay recreacion familiar." },
        { q: "Se necesita saber nadar?", a: "No, tenemos clases de ambientacion al agua para principiantes de todas las edades." },
        { q: "Que elementos necesito?", a: "Malla de bano, gorra de natacion, antiparras y ojotas. Algunos elementos adicionales los provee el club." },
      ]}
    />
  )
}
