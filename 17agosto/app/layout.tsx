import type { Metadata, Viewport } from "next"
import { Inter, Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "sonner"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] })
const _montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700", "800"] })

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
    <html lang="es">
      <body className="font-sans antialiased">
        <Navbar />
        <main className="pt-[110px]">{children}</main>
        <Footer />
        <Toaster position="top-center" richColors />
        <Analytics />
      </body>
    </html>
  )
}
