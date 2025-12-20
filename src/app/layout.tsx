import type { Metadata } from "next"

import "@/styles/globals.css"

import { inter } from "./fonts"

export const metadata: Metadata = {
  title: "Dev Links",
  description: "A agregador de links de redes sociais.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // dark temporário até switch de tema ser implementado
    <html lang="pt-BR" className="dark">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  )
}
