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

    const subject = `Solicitud de asociación - ${nombre}`

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
        <div style="background-color: #1e3a8a; padding: 24px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: bold;">Club 17 de Agosto</h1>
          <p style="color: #bfdbfe; margin: 8px 0 0 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Nueva Solicitud de Alta</p>
        </div>
        
        <div style="padding: 32px; background-color: #ffffff;">
          <h2 style="color: #0f172a; font-size: 20px; font-weight: 700; margin-top: 0; margin-bottom: 24px; border-bottom: 2px solid #f1f5f9; padding-bottom: 12px;">
            Datos del Solicitante
          </h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tbody>
              <tr><td style="padding: 8px 0; color: #64748b; width: 140px; font-weight: 600;">Nombre:</td><td style="padding: 8px 0; color: #0f172a; font-weight: 500;">${nombre}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748b; font-weight: 600;">DNI:</td><td style="padding: 8px 0; color: #0f172a; font-weight: 500;">${dni}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748b; font-weight: 600;">Email:</td><td style="padding: 8px 0; color: #2563eb; font-weight: 500;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td></tr>
              <tr><td style="padding: 8px 0; color: #64748b; font-weight: 600;">Teléfono:</td><td style="padding: 8px 0; color: #0f172a; font-weight: 500;">${telefono}</td></tr>
              ${nacimiento ? `<tr><td style="padding: 8px 0; color: #64748b; font-weight: 600;">Nacimiento:</td><td style="padding: 8px 0; color: #0f172a; font-weight: 500;">${nacimiento}</td></tr>` : ''}
              ${direccion ? `<tr><td style="padding: 8px 0; color: #64748b; font-weight: 600;">Dirección:</td><td style="padding: 8px 0; color: #0f172a; font-weight: 500;">${direccion}</td></tr>` : ''}
            </tbody>
          </table>

          <h2 style="color: #0f172a; font-size: 20px; font-weight: 700; margin-top: 32px; margin-bottom: 24px; border-bottom: 2px solid #f1f5f9; padding-bottom: 12px;">
            Inscripción
          </h2>
          
          <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
            <p style="margin: 0 0 8px 0; color: #64748b; font-size: 14px; font-weight: 600; text-transform: uppercase;">Categoría Solicitada</p>
            <p style="margin: 0; color: #0f172a; font-size: 18px; font-weight: 700;">${String(categoria).toUpperCase()}</p>
          </div>

          <div style="background-color: #fdf2f8; border: 1px solid #fbcfe8; border-radius: 8px; padding: 16px;">
            <p style="margin: 0 0 8px 0; color: #64748b; font-size: 14px; font-weight: 600; text-transform: uppercase;">Actividades de Interés</p>
            <p style="margin: 0; color: #be185d; font-size: 16px; font-weight: 600;">
              ${actividadesText || "Ninguna actividad seleccionada"}
            </p>
          </div>

          ${mensaje ? `
          <div style="margin-top: 32px; background-color: #f1f5f9; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; border-left: 4px solid #3b82f6;">
            <p style="margin: 0 0 8px 0; color: #475569; font-size: 14px; font-weight: 600;">Mensaje Adicional</p>
            <p style="margin: 0; color: #334155; font-size: 14px; line-height: 1.5; white-space: pre-wrap;">${mensaje}</p>
          </div>
          ` : ''}
        </div>
        
        <div style="background-color: #f1f5f9; padding: 16px; text-align: center; color: #64748b; font-size: 13px;">
          Este mensaje fue enviado automáticamente desde el formulario web de <strong style="color:#0f172a;">Club 17 de Agosto</strong>.<br>Contacte al solicitante a la brevedad.
        </div>
      </div>
    `

    const { data, error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject,
      html,
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