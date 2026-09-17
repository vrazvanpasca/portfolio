import "../styles/globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Providers from "@/components/Providers"
import { Plus_Jakarta_Sans } from "@next/font/google"

const sans = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={sans.variable} suppressHydrationWarning>
      <head />
      <body className={`${sans.className} bg-stone-50 text-stone-900 antialiased dark:bg-stone-950 dark:text-stone-100`}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
