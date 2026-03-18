import type { Metadata, Viewport } from "next"
import { Inter, Outfit, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "sonner"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MobileStickyCta } from "@/components/mobile-sticky-cta"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600"],
  variable: "--font-inter"
})

const outfit = Outfit({ 
  subsets: ["latin"], 
  weight: ["600", "700"],
  variable: "--font-outfit"
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"], 
  weight: ["600", "700"],
  variable: "--font-space-grotesk"
})

export const metadata: Metadata = {
  title: {
    default: "Club 17 de Agosto - Villa Pueyrredon, CABA",
    template: "%s | Club 17 de Agosto",
  },
  description:
    "Club deportivo y social de Villa Pueyrredon. Futsal, basquet, natacion, gimnasia, taekwondo, patin artistico, buceo y gym. Asociate hoy.",
}

export const viewport: Viewport = {
  themeColor: "#1a3a6b",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${outfit.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased pb-20 md:pb-0">
        <Navbar />
        <main className="pt-[110px]">{children}</main>
        <Footer />
        <MobileStickyCta />
        <Toaster position="top-center" richColors />
        <Analytics />
      </body>
    </html>
  )
}
