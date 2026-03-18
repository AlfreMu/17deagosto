"use client"

import { useState } from "react"
import Image, { ImageProps } from "next/image"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"

export function ImageWithSkeleton({
  className,
  alt,
  ...props
}: ImageProps & { className?: string }) {
  const [loading, setLoading] = useState(true)

  return (
    <div className={cn("relative overflow-hidden w-full h-full", className)}>
      {loading && (
        <Skeleton className="absolute inset-0 w-full h-full rounded-none" />
      )}
      <Image
        alt={alt}
        className={cn(
          "transition-opacity duration-300 w-full h-full object-cover",
          loading ? "opacity-0" : "opacity-100",
          className
        )}
        onLoad={() => setLoading(false)}
        {...props}
      />
    </div>
  )
}
