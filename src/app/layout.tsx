import type { Metadata } from "next"

import "@/styles/globals.css"

import { inter } from "./fonts"

import { ThemeProvider } from "@/contexts/theme-provider"

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
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
