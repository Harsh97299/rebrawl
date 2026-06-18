"use client"
import Image from "next/image"
import { useState } from "react"

interface BrawlerImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

export default function BrawlerImage({ src, alt, width, height, className }: BrawlerImageProps) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div
        className={`${className ?? ""} flex items-center justify-center text-3xl bg-bg-elevated`}
        style={{ width, height }}
      >
        🎮
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={() => setError(true)}
    />
  )
}
