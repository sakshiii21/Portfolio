
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const from = 'Portfolio <onboarding@resend.dev>'
const to = 'sakshisingh2124@gmail.com'

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const name = String(body.name || '').trim()
    const email = String(body.email || '').trim()
    const message = String(body.message || '').trim()
    const botField = String(body['bot-field'] || '').trim()

    // Honeypot spam protection
    if (botField) {
      return NextResponse.json(
        { error: 'Spam detected' },
        { status: 400 }
      )
    }

    // Required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safeMessage = escapeHtml(message)

    const { data, error } =
      await resend.emails.send({
        from,
        to: [to],
        subject: `New contact request from ${safeName}`,
        html: `
          <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111;">
            <h2>New Portfolio Contact Message</h2>

            <p>
              <strong>Name:</strong>
              ${safeName}
            </p>

            <p>
              <strong>Email:</strong>
              <a href="mailto:${safeEmail}">
                ${safeEmail}
              </a>
            </p>

            <p>
              <strong>Message:</strong>
            </p>

            <div style="padding:16px;background:#f4f4f4;border-radius:10px;white-space:pre-wrap;">
              ${safeMessage}
            </div>
          </div>
        `,
        text: `
New Portfolio Contact Message

Name: ${name}
Email: ${email}

Message:
${message}
        `,
        replyTo: email,
      })

    if (error) {
      console.error(
        'Error sending email:',
        error
      )

      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    console.log('Email sent successfully!')
    console.log('Email ID:', data?.id)

    return NextResponse.json({
      success: true,
    })
  } catch (error) {
    console.error(
      'Contact API error:',
      error
    )

    return NextResponse.json(
      {
        error:
          'Unable to send message. Please try again later.',
      },
      { status: 500 }
    )
  }
}
