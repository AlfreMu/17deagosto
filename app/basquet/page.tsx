import type { Metadata } from "next"
import { activities } from "@/lib/data"
import { ActivityPageTemplate } from "@/components/activity-page-template"

export const metadata: Metadata = { title: "Basquet" }

const activity = activities.find((a) => a.slug === "basquet")!

export default function BasquetPage() {
  return (
    <ActivityPageTemplate
      activity={activity}
      schedules={[
        { day: "Lunes", time: "17:00 - 18:30", category: "Mini" },
        { day: "Lunes", time: "18:30 - 20:00", category: "U13 / U15" },
        { day: "Martes", time: "17:00 - 18:30", category: "U17 / U19" },
        { day: "Martes", time: "20:00 - 22:00", category: "Primera" },
        { day: "Miercoles", time: "17:00 - 18:30", category: "Mini" },
        { day: "Miercoles", time: "18:30 - 20:00", category: "U13 / U15" },
        { day: "Jueves", time: "17:00 - 18:30", category: "U17 / U19" },
        { day: "Jueves", time: "20:00 - 22:00", category: "Primera" },
        { day: "Viernes", time: "18:00 - 19:30", category: "Femenino" },
        { day: "Sabado", time: "10:00 - 12:00", category: "Recreativo" },
      ]}
      staff={[
        { name: "Martin Rodriguez", role: "Coordinador General" },
        { name: "Luciana Gomez", role: "Profesora Formativas" },
        { name: "Federico Diaz", role: "DT Primera" },
      ]}
      requirements={[
        "Apto medico vigente",
        "Ser socio del club",
        "Zapatillas de basquet",
        "DNI al dia",
      ]}
      faqs={[
        { q: "A partir de que edad se puede empezar?", a: "A partir de los 5 anios en la categoria Mini. No se necesita experiencia previa." },
        { q: "Necesito tener experiencia previa?", a: "No, contamos con categorias formativas para quienes recien empiezan." },
        { q: "Se participa en torneos?", a: "Si, participamos en torneos de FEBAMBA en todas las categorias, ademas de amistosos y torneos de verano." },
        { q: "Cual es el costo de la actividad?", a: "El costo depende de la categoria. Contactanos por telefono o email para mas informacion." },
        { q: "Hay basquet femenino?", a: "Si, contamos con categoria femenina con entrenamientos los viernes." },
      ]}
    />
  )
}
