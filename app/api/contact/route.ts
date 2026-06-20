import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY || "re_placeholder_key")

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json()

    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: "All fields are required." },
        { status: 400 }
      )
    }

    const { error } = await resend.emails.send({
      from: `ReBrawl Archive <onboarding@resend.dev>`,
      to: process.env.CONTACT_EMAIL || "placeholder@example.com",
      replyTo: email,
      subject: `[ReBrawl Contact] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
    })

    if (error) {
      return Response.json({ error: error.message }, { status: 500 })
    }

    return Response.json({ success: true })
  } catch {
    return Response.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    )
  }
}
