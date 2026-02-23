import type { Metadata } from "next"
import { activities } from "@/lib/data"
import { ActivityPageTemplate } from "@/components/activity-page-template"

export const metadata: Metadata = { title: "Buceo" }

const activity = activities.find((a) => a.slug === "buceo")!

export default function BuceoPage() {
  return (
    <ActivityPageTemplate
      activity={activity}
      schedules={[
        { day: "Martes", time: "19:00 - 21:00", category: "Teorico" },
        { day: "Jueves", time: "19:00 - 21:00", category: "Practico en pileta" },
        { day: "Sabado", time: "09:00 - 12:00", category: "Bautismo submarino" },
        { day: "Sabado", time: "Segun calendario", category: "Salidas a aguas abiertas" },
        { day: "Lunes", time: "20:00 - 21:30", category: "Nivelacion" },
        { day: "Miercoles", time: "20:00 - 21:30", category: "Avanzados" },
      ]}
      staff={[
        { name: "Gustavo Perez", role: "Director de Escuela / Instructor PADI" },
        { name: "Laura Vega", role: "Instructora" },
        { name: "Diego Romero", role: "Asistente / Divemaster" },
      ]}
      requirements={[
        "Apto medico especifico para buceo",
        "Saber nadar",
        "Mayor de 12 anios (menores con autorizacion)",
        "Equipo basico (provisto para cursos iniciales)",
      ]}
      faqs={[
        { q: "Necesito saber nadar?", a: "Si, es requisito saber nadar para poder participar de los cursos de buceo." },
        { q: "El club provee el equipo?", a: "Para los cursos iniciales y el bautismo submarino, el club provee todo el equipo necesario. Los alumnos avanzados pueden traer su equipo propio." },
        { q: "Que certificaciones se otorgan?", a: "Otorgamos certificaciones PADI reconocidas internacionalmente, desde Open Water hasta Rescue Diver." },
        { q: "Se hacen salidas al mar?", a: "Si, organizamos salidas mensuales a distintas locaciones de aguas abiertas, tanto en rios como en el mar." },
        { q: "Puedo hacer un bautismo sin compromiso?", a: "Si, los sabados ofrecemos bautismos submarinos en pileta para quienes quieran probar la experiencia." },
      ]}
    />
  )
}
