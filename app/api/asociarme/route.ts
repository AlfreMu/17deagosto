import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const {
      nombre,
      dni,
      email,
      telefono,
      nacimiento,
      direccion,
      categoria,
      actividades,
      mensaje,
    } = body ?? {}

    if (!nombre || !dni || !email || !telefono || !categoria) {
      return NextResponse.json(
        { ok: false, error: "Faltan campos obligatorios." },
        { status: 400 }
      )
    }

    const to = process.env.CONTACT_TO_EMAIL
    const from = process.env.CONTACT_FROM_EMAIL

    if (!to || !from) {
      return NextResponse.json(
        {
          ok: false,
          error: "Falta configurar CONTACT_TO_EMAIL o CONTACT_FROM_EMAIL.",
        },
        { status: 500 }
      )
    }

    const actividadesText = Array.isArray(actividades)
      ? actividades.join(", ")
      : String(actividades ?? "")

    const subject = `Nueva solicitud de asociación: ${nombre}`

    const text = [
      "Nueva solicitud de asociación",
      "--------------------------",
      `Nombre: ${nombre}`,
      `DNI: ${dni}`,
      `Email: ${email}`,
      `Teléfono: ${telefono}`,
      nacimiento ? `Nacimiento: ${nacimiento}` : null,
      direccion ? `Dirección: ${direccion}` : null,
      `Categoría: ${categoria}`,
      actividadesText
        ? `Actividades: ${actividadesText}`
        : "Actividades: (no seleccionadas)",
      mensaje ? `Mensaje: ${mensaje}` : null,
    ]
      .filter(Boolean)
      .join("\n")

    await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject,
      text,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json(
      { ok: false, error: "Error enviando email." },
      { status: 500 }
    )
  }
}