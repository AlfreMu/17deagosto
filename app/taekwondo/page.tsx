import type { Metadata } from "next"
import { activities } from "@/lib/data"
import { ActivityPageTemplate } from "@/components/activity-page-template"

export const metadata: Metadata = { title: "Taekwondo" }

const activity = activities.find((a) => a.slug === "taekwondo")!

export default function TaekwondoPage() {
  return (
    <ActivityPageTemplate
      activity={activity}
      schedules={[
        { day: "Lunes", time: "17:00 - 18:00", category: "Infantil (5-8)" },
        { day: "Lunes", time: "18:00 - 19:30", category: "Cadetes (9-12)" },
        { day: "Martes", time: "18:00 - 19:30", category: "Juvenil (13-17)" },
        { day: "Martes", time: "19:30 - 21:00", category: "Adultos" },
        { day: "Miercoles", time: "17:00 - 18:00", category: "Infantil (5-8)" },
        { day: "Miercoles", time: "18:00 - 19:30", category: "Cadetes (9-12)" },
        { day: "Jueves", time: "18:00 - 19:30", category: "Juvenil (13-17)" },
        { day: "Jueves", time: "19:30 - 21:00", category: "Adultos" },
      ]}
      staff={[
        { name: "Maestro Ricardo Kim", role: "Director de Escuela / 5to Dan" },
        { name: "Profesor Lucas Paredes", role: "Instructor / 3er Dan" },
        { name: "Profesora Carla Benitez", role: "Instructora Infantil / 2do Dan" },
      ]}
      requirements={[
        "Apto medico vigente",
        "Ser socio del club",
        "Dobok (uniforme de taekwondo)",
        "Protecciones para combate (categorias avanzadas)",
      ]}
      faqs={[
        { q: "A que edad se puede empezar?", a: "A partir de los 5 anios en la categoria Infantil." },
        { q: "Necesito comprar el uniforme desde el primer dia?", a: "No, las primeras clases se pueden hacer con ropa comoda. El dobok se solicita luego de confirmar la inscripcion." },
        { q: "Cada cuanto son los examenes de cinturon?", a: "Los examenes se realizan aproximadamente cada 3-4 meses, dependiendo del nivel y la dedicacion del alumno." },
        { q: "Se participa en torneos?", a: "Si, participamos en torneos federados. La participacion es optativa y depende del nivel del alumno." },
        { q: "Es peligroso para los chicos?", a: "No, las clases infantiles se enfocan en la tecnica, coordinacion y valores. El contacto fisico es minimo y siempre supervisado." },
      ]}
    />
  )
}
