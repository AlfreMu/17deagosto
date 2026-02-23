import type { Metadata } from "next"
import { activities } from "@/lib/data"
import { ActivityPageTemplate } from "@/components/activity-page-template"

export const metadata: Metadata = { title: "Futsal" }

const activity = activities.find((a) => a.slug === "futsal")!

export default function FutsalPage() {
  return (
    <ActivityPageTemplate
      activity={activity}
      schedules={[
        { day: "Lunes", time: "17:00 - 18:00", category: "Escuelita" },
        { day: "Lunes", time: "18:00 - 19:30", category: "Infantiles" },
        { day: "Martes", time: "18:00 - 19:30", category: "Cadetes" },
        { day: "Martes", time: "19:30 - 21:00", category: "Juveniles" },
        { day: "Miercoles", time: "17:00 - 18:00", category: "Escuelita" },
        { day: "Miercoles", time: "18:00 - 19:30", category: "Infantiles" },
        { day: "Jueves", time: "19:30 - 21:00", category: "Reserva" },
        { day: "Jueves", time: "21:00 - 23:00", category: "Primera" },
        { day: "Viernes", time: "18:00 - 19:30", category: "Femenino" },
        { day: "Sabado", time: "Segun fixture", category: "Partidos oficiales" },
      ]}
      staff={[
        { name: "Carlos Fernandez", role: "Coordinador General" },
        { name: "Pablo Suarez", role: "DT Primera / Reserva" },
        { name: "Ana Martinez", role: "Profesora Formativas" },
      ]}
      requirements={[
        "Apto medico vigente",
        "Ser socio del club",
        "Zapatillas de futsal",
        "Canilleras",
        "DNI al dia",
      ]}
      faqs={[
        { q: "A partir de que edad se puede empezar?", a: "A partir de los 4 anios en la Escuelita. Cada categoria agrupa por edades." },
        { q: "Se juegan torneos oficiales?", a: "Si, participamos en torneos de AFA y la Liga Metropolitana de Futsal en todas las categorias." },
        { q: "Hay futsal femenino?", a: "Si, contamos con categoria femenina con entrenamientos los viernes." },
        { q: "Necesito traer pelota?", a: "No, el club provee las pelotas para los entrenamientos. Para partidos oficiales se usan las del torneo." },
        { q: "Como es el proceso de incorporacion?", a: "Primero te asocias al club, luego te sumas a los entrenamientos con tu apto medico. Los profes te ubican en la categoria correspondiente." },
      ]}
    />
  )
}
