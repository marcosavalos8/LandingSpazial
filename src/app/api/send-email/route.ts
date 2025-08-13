// app/api/send-email/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const nombre = formData.get("nombre") as string;
    const email = formData.get("email") as string;
    const puesto = formData.get("puesto") as string;
    const file = formData.get("file") as File;

    if (!nombre || !email || !puesto || !file) {
      return NextResponse.json(
        { error: "Faltan datos en el formulario" },
        { status: 400 }
      );
    }

    // Convertir archivo a buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Configuración del transporte SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.serviciodecorreo.es", // servidor SMTP de tu empresa
      port: 465,
      secure: true, // SSL
      auth: {
        user: "marcos.avalos@implementalsystems.com", // tu correo
        pass: "", // tu contraseña o app password
      },
    });

    // Enviar el correo
    await transporter.sendMail({
      from: '"Pagina Web Spazial" <marcos.avalos@implementalsystems.com>',
      to: "marcos.avalos@implementalsystems.com", // receptor (puede ser otro correo)
      subject: `Nuevo CV de ${nombre}`,
      html: `
        <h3>Nuevo mensaje de formulario</h3>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Puesto:</strong> ${puesto}</p>
      `,
      attachments: [
        {
          filename: file.name,
          content: buffer,
        },
      ],
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error al enviar correo:", error);
    return NextResponse.json(
      { error: "Error al enviar el correo" },
      { status: 500 }
    );
  }
}
