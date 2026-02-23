import type { Metadata } from "next"
import { activities } from "@/lib/data"
import { ActivityPageTemplate } from "@/components/activity-page-template"

export const metadata: Metadata = { title: "Gimnasia Deportiva" }

const activity = activities.find((a) => a.slug === "gimnasia-deportiva")!

export default function GimnasiaDeportivaPage() {
  return (
    <ActivityPageTemplate
      activity={activity}
      schedules={[
        { day: "Lunes", time: "16:00 - 17:00", category: "Iniciacion (4-6)" },
        { day: "Lunes", time: "17:00 - 18:30", category: "Infantil (7-10)" },
        { day: "Martes", time: "17:00 - 19:00", category: "Juvenil / Avanzado" },
        { day: "Miercoles", time: "16:00 - 17:00", category: "Iniciacion (4-6)" },
        { day: "Miercoles", time: "17:00 - 18:30", category: "Infantil (7-10)" },
        { day: "Jueves", time: "17:00 - 19:00", category: "Juvenil / Avanzado" },
        { day: "Viernes", time: "16:00 - 18:00", category: "Competitivo" },
        { day: "Sabado", time: "10:00 - 12:00", category: "Libre / Practica" },
      ]}
      staff={[
        { name: "Valeria Sanchez", role: "Coordinadora" },
        { name: "Camila Rios", role: "Profesora Formativas" },
        { name: "Marina Lopez", role: "Profesora Competitivo" },
      ]}
      requirements={[
        "Apto medico vigente",
        "Ser socio del club",
        "Malla o ropa comoda ajustada",
        "Pelo recogido",
      ]}
      faqs={[
        { q: "A partir de que edad se puede empezar?", a: "A partir de los 4 anios en la categoria Iniciacion." },
        { q: "Se necesita experiencia previa?", a: "No, las clases de Iniciacion e Infantil no requieren experiencia." },
        { q: "Participan en competencias?", a: "Si, nuestras gimnastas participan en competencias federadas GAF y exhibiciones." },
        { q: "Que ropa se necesita?", a: "Para las clases se necesita malla o ropa ajustada comoda. Para competencias se usan mallas de competicion del club." },
        { q: "Los varones pueden participar?", a: "Si, la gimnasia deportiva es para todos. Tenemos alumnos varones en varias categorias." },
      ]}
    />
  )
}
