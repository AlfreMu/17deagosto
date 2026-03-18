"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Users } from "lucide-react"

export function MobileStickyCta() {
  const pathname = usePathname()

  if (pathname === "/asociarme") return null

  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 px-4 pb-6 pt-8"
      style={{
        background:
          "linear-gradient(to top, rgba(10,15,30,0.88) 60%, rgba(10,15,30,0.0) 100%)",
        backdropFilter: "blur(2px)",
      }}
    >
      <Link href="/asociarme" className="block w-full">
        <button
          className="
            flex w-full items-center justify-center gap-2
            rounded-xl px-4 py-3.5
            text-base font-bold text-white
            shadow-2xl
            transition-transform active:scale-95
          "
          style={{
            background: "var(--club-blue-700)",
            boxShadow: "0 4px 24px rgba(10,15,30,0.6)",
          }}
        >
          <Users className="size-5" />
          QUIERO ASOCIARME
        </button>
      </Link>
    </div>
  )
}
