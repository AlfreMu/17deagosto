import { Resend } from "resend"
import { NextResponse } from "next/server"

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

    const apiKey = process.env.RESEND_API_KEY
    const to = process.env.CONTACT_TO_EMAIL
    const from = process.env.CONTACT_FROM_EMAIL

    console.log("ENV CHECK", {
      hasApiKey: !!apiKey,
      to,
      from,
    })

    if (!apiKey) {
      return NextResponse.json(
        { ok: false, error: "Falta configurar RESEND_API_KEY." },
        { status: 500 }
      )
    }

    if (!to || !from) {
      return NextResponse.json(
        {
          ok: false,
          error: "Falta configurar CONTACT_TO_EMAIL o CONTACT_FROM_EMAIL.",
        },
        { status: 500 }
      )
    }

    const resend = new Resend(apiKey)

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

    const { data, error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject,
      text,
    })

    if (error) {
      console.error("RESEND ERROR:", error)
      return NextResponse.json(
        { ok: false, error: error.message || "Error de Resend." },
        { status: 500 }
      )
    }

    console.log("EMAIL SENT:", data)

    return NextResponse.json({ ok: true, data })
  } catch (err) {
    console.error("ROUTE ERROR:", err)
    return NextResponse.json(
      { ok: false, error: "Error enviando email." },
      { status: 500 }
    )
  }
}