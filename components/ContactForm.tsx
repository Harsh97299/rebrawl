"use client"
import { useState, type FormEvent } from "react"

type Status = "idle" | "sending" | "sent" | "error"

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle")
  const [errorMsg, setErrorMsg] = useState("")

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("sending")
    setErrorMsg("")

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const json = await res.json()
        throw new Error(json.error || "Failed to send message.")
      }

      setStatus("sent")
      form.reset()
    } catch (err) {
      setStatus("error")
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.")
    }
  }

  const inputBase =
    "w-full rounded-xl border border-white/10 bg-bg-base px-4 py-3 text-sm text-white placeholder:text-text-muted/50 outline-none transition-all duration-200 focus:border-brand-purple/50 focus:ring-2 focus:ring-brand-purple/20"

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-text-muted mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Your name"
            className={inputBase}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text-muted mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="you@example.com"
            className={inputBase}
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-text-muted mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          placeholder="What's this about?"
          className={inputBase}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text-muted mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us more..."
          className={`${inputBase} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full sm:w-auto px-8 py-3 rounded-xl bg-brand-purple text-white font-bold text-sm transition-all duration-200 hover:bg-brand-purple/90 shadow-lg shadow-brand-purple/30 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      {status === "sent" && (
        <p className="text-success text-sm font-medium flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 12 2 2 4-4" />
            <circle cx="12" cy="12" r="10" />
          </svg>
          Message sent. We&apos;ll get back to you within 24–48 hours.
        </p>
      )}

      {status === "error" && (
        <p className="text-red-400 text-sm font-medium">
          {errorMsg}
        </p>
      )}
    </form>
  )
}
