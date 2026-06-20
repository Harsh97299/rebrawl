"use client"
import { useState, useEffect, useCallback } from "react"

const COUNTDOWN_SECONDS = 10

export default function DownloadButton({
  href,
  label,
  className,
}: {
  href: string
  label: string
  className: string
}) {
  const [countdown, setCountdown] = useState<number | null>(null)

  const startCountdown = useCallback(() => {
    setCountdown(COUNTDOWN_SECONDS)
  }, [])

  useEffect(() => {
    if (countdown === null) return
    if (countdown === 0) {
      const link = document.createElement("a")
      link.href = href
      link.download = ""
      link.click()
      setCountdown(null)
      return
    }
    const timer = setTimeout(() => setCountdown((c) => (c ?? 1) - 1), 1000)
    return () => clearTimeout(timer)
  }, [countdown, href])

  const active = countdown !== null

  return (
    <button
      type="button"
      onClick={startCountdown}
      disabled={active}
      className={`${className} ${active ? "opacity-80 cursor-wait" : ""}`}
    >
      {active ? (
        <>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            className="animate-spin"
            aria-hidden="true"
          >
            <circle
              cx="10"
              cy="10"
              r="8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeDasharray="40 12"
              strokeLinecap="round"
            />
          </svg>
          Download starts in {countdown}s...
        </>
      ) : (
        <>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 16l-6-6h4V4h4v6h4l-6 6zm-8 2h16v2H4v-2z" />
          </svg>
          {label}
        </>
      )}
    </button>
  )
}
