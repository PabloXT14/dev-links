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
    <html lang="pt-BR">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  )
}
