import {
  Dribbble,
  Waves,
  Goal,
  Dumbbell,
  PersonStanding,
  Snowflake,
  Swords,
  type LucideIcon,
  Volleyball,
  WavesArrowDown,
  Shield,
  CircleStar,
} from "lucide-react"

export const CLUB_NAME = "Club 17 de Agosto"
export const CLUB_ADDRESS = "Av. Albarellos 2935 - Villa Pueyrredón, CABA"
export const CLUB_PHONE = "4835-5051"
export const CLUB_EMAIL = "info@17deagosto.com.ar"
export const CLUB_INSTAGRAM = "https://www.instagram.com/17a.oficial/"

export type Activity = {
  name: string
  slug: string
  icon: LucideIcon
  image: string
  tagline: string
  description: string
  categories?: string[]
  competitions?: string[]
}

export const activities: Activity[] = [
  {
    name: "Basquet",
    slug: "basquet",
    icon: Dribbble,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/portada-basquet-1ewsXeQt0mAYt5WHiPoT09VuVahxir.jpg",
    tagline: "Formando personas a traves del deporte",
    description:
      "El basquet del Club 17 de Agosto cuenta con una larga trayectoria en la formacion de jugadores y personas. Participamos en torneos de FEBAMBA y competencias zonales, con categorias que van desde mini basquet hasta primera division, tanto en rama masculina como femenina.",
    categories: ["Mini", "U13", "U15", "U17", "U19", "Primera", "Femenino", "Recreativo"],
    competitions: [
      "Torneos FEBAMBA en todas las categorias",
      "Competencias zonales y regionales",
      "Amistosos interclubs",
      "Torneos de verano e invitacionales",
    ],
  },
  
  {
    name: "Futsal",
    slug: "futsal",
    icon: Volleyball,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/portada-futsal-09gx52jQjOBwbT3W38Q0Ue63smcZ18.jpg",
    tagline: "Pasion y competencia en cada partido",
    description:
      "El futsal es una de las disciplinas mas importantes del club, con participacion en torneos de AFA y la Liga Metropolitana. Contamos con categorias formativas desde escuelita hasta primera division, incluyendo futsal femenino.",
    categories: ["Escuelita", "Infantiles", "Cadetes", "Juveniles", "Reserva", "Primera", "Femenino"],
    competitions: [
      "Torneos AFA en todas las categorias",
      "Liga Metropolitana de Futsal",
      "Amistosos y triangulares",
      "Torneos de verano",
    ],
  },
  {
    name: "Gimnasia Deportiva",
    slug: "gimnasia-deportiva",
    icon: PersonStanding,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/portada-gimnasiadeportiva.jpg-Enqm8VvxgOXN3g2Vznw4TPgBkHZobX.png",
    tagline: "Disciplina, flexibilidad y fuerza",
    description:
      "La gimnasia deportiva del club trabaja con ninas y adolescentes en el desarrollo de habilidades motrices, flexibilidad y fuerza. Participamos en competencias federadas y eventos de exhibicion a lo largo del anio.",
    categories: ["Iniciacion (4-6 anios)", "Infantil (7-10 anios)", "Juvenil (11-15 anios)", "Avanzado"],
    competitions: [
      "Competencias federadas GAF",
      "Exhibiciones y muestras anuales",
      "Encuentros interclubs",
      "Evaluaciones trimestrales de nivel",
    ],
  },
  {
    name: "Gym",
    slug: "gym",
    icon: Dumbbell,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/portada-gym-6FQkymEFU0r3lMI1o0KSUJ29Pdm3tA.jpg",
    tagline: "Tu mejor version empieza aca",
    description:
      "17 FIT es nuestro gimnasio equipado con maquinas de ultima generacion y un equipo de profesores que te guiaran en tu entrenamiento. Ofrecemos rutinas personalizadas, clases grupales y seguimiento nutricional.",
    categories: ["Musculacion", "Funcional", "Clases grupales", "Entrenamiento personalizado"],
    competitions: [
      "Rutinas personalizadas segun objetivos",
      "Evaluacion fisica inicial y seguimiento",
      "Clases de funcional y HIIT",
      "Asesoramiento nutricional basico",
    ],
  },
  {
    name: "Natacion",
    slug: "natacion",
    icon: Waves,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/portada-natacion-eoLIzZCeskyZBJkuU6orR5Ml22l8hq.jpg",
    tagline: "Aprender y disfrutar el agua",
    description:
      "La escuela de natacion del Club 17 de Agosto ofrece clases para todas las edades y niveles. Desde ambientacion para los mas chicos hasta perfeccionamiento de estilos para adultos, en nuestra pileta climatizada.",
    categories: ["Bebes (6m-3 anios)", "Infantil (4-12 anios)", "Adolescentes", "Adultos", "Adultos mayores"],
    competitions: [
      "Clases de ambientacion al agua",
      "Aprendizaje de los 4 estilos",
      "Perfeccionamiento de tecnica",
      "Natacion libre y recreativa",
    ],
  },
  {
    name: "Patin Artistico",
    slug: "patin-artistico",
    icon: CircleStar,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/portada-patinartistico-w61db5xe4YzthyRu1RjhKyIYhVCH1S.jpg",
    tagline: "Elegancia y destreza sobre ruedas",
    description:
      "El patin artistico del club forma patinadoras y patinadores con tecnica, expresion artistica y disciplina. Participamos en competencias federadas y realizamos exhibiciones durante todo el anio.",
    categories: ["Escuelita (4-6 anios)", "Infantil", "Juvenil", "Avanzado", "Competitivo"],
    competitions: [
      "Competencias federadas de patin artistico",
      "Exhibiciones y galas anuales",
      "Encuentros zonales",
      "Evaluaciones de nivel trimestrales",
    ],
  },
  {
    name: "Taekwondo",
    slug: "taekwondo",
    icon: Shield,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/portada-taekwondo-5b7XcSyPicuHWmB6mIOj4KhacwUEWc.jpg",
    tagline: "Arte marcial, disciplina y respeto",
    description:
      "La escuela de taekwondo del club forma practicantes en todas las edades, desde los mas chicos hasta adultos. Trabajamos valores como la disciplina, el respeto y la superacion personal, con participacion en torneos federados.",
    categories: ["Infantil (5-8 anios)", "Cadetes (9-12 anios)", "Juvenil (13-17 anios)", "Adultos"],
    competitions: [
      "Torneos federados ITF / WT",
      "Examenes de cinturon periodicos",
      "Exhibiciones y demostraciones",
      "Clinics y seminarios con maestros invitados",
    ],
  },
  {
    name: "Buceo",
    slug: "buceo",
    icon: WavesArrowDown,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/portada-buceo-Q1G39RBsqc4c4dQbBpCuM4MVqbVZjt.jpg",
    tagline: "Descubri el mundo submarino",
    description:
      "Nuestra escuela de buceo ofrece cursos para todos los niveles, desde bautismo submarino hasta certificaciones avanzadas. Contamos con pileta propia para las practicas y organizamos salidas a aguas abiertas durante todo el anio.",
    categories: ["Bautismo", "Open Water", "Advanced", "Rescue", "Nivelacion"],
    competitions: [
      "Certificacion PADI / SSI",
      "Salidas a aguas abiertas mensuales",
      "Practicas semanales en pileta",
      "Cursos de especializacion",
    ],
  }
]
