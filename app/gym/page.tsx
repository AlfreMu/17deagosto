import type { Metadata } from "next"
import { activities } from "@/lib/data"
import { ActivityPageTemplate } from "@/components/activity-page-template"

export const metadata: Metadata = { title: "Gym - 17 FIT" }

const activity = activities.find((a) => a.slug === "gym")!

export default function GymPage() {
  return (
    <ActivityPageTemplate
      activity={activity}
      schedules={[
        { day: "Lunes a Viernes", time: "07:00 - 09:00", category: "Musculacion - Turno maniana" },
        { day: "Lunes a Viernes", time: "09:00 - 11:00", category: "Funcional" },
        { day: "Lunes a Viernes", time: "17:00 - 19:00", category: "Musculacion - Turno tarde" },
        { day: "Lunes a Viernes", time: "19:00 - 21:00", category: "Musculacion - Turno noche" },
        { day: "Martes y Jueves", time: "08:00 - 09:00", category: "HIIT" },
        { day: "Sabado", time: "09:00 - 12:00", category: "Libre" },
      ]}
      staff={[
        { name: "Nicolas Torres", role: "Coordinador 17 FIT" },
        { name: "Jimena Alvarez", role: "Profesora Funcional / HIIT" },
        { name: "Matias Herrera", role: "Profesor Musculacion" },
      ]}
      requirements={[
        "Apto medico vigente",
        "Ser socio del club",
        "Toalla personal",
        "Ropa deportiva y zapatillas",
      ]}
      faqs={[
        { q: "Que horarios tiene el gym?", a: "El gym funciona de lunes a viernes de 7 a 21hs y sabados de 9 a 12hs." },
        { q: "Incluye clases grupales?", a: "Si, incluye clases de funcional y HIIT sin costo adicional." },
        { q: "Tienen rutinas personalizadas?", a: "Si, nuestros profesores arman rutinas personalizadas segun tus objetivos." },
        { q: "El arancel del gym es aparte de la cuota social?", a: "Si, el gym tiene un arancel adicional a la cuota social. Contactanos para conocer los precios." },
        { q: "Puedo hacer una clase de prueba?", a: "Si, podes venir a una clase de prueba sin compromiso. Comunicate con nosotros para coordinar." },
      ]}
    />
  )
}
