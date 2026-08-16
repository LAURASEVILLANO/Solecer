import { NextRequest, NextResponse } from "next/server";

// Este endpoint recibe las solicitudes del formulario de contacto.
// Conéctalo a tu CRM, correo transaccional (Resend, SendGrid, etc.)
// o base de datos antes de pasar a producción.
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // TODO: enviar `body` a tu CRM o servicio de correo.
    console.log("Nueva solicitud de cotización:", body);

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
