import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { asImageSrc } from "@prismicio/client"

import { Avatar } from "@/components/avatar"
import { Footer } from "@/components/footer"
import { ThemeSwitch } from "@/components/theme-switch"

import { components } from "@/slices"
import { SliceZone } from "@prismicio/react"
import { createClient } from "@/prismicio"

export default async function Home() {
  const client = createClient()
  const homepage = await client.getSingle("homepage").catch(() => notFound())

  return (
    <main className="flex h-screen flex-col items-center bg-[url(/bg-mobile-light.svg)] bg-center bg-cover bg-no-repeat py-14 sm:bg-[url(/bg-desktop-light.svg)] dark:bg-[url(/bg-mobile.svg)] dark:sm:bg-[url(/bg-desktop.svg)]">
      {/* CONTENT */}
      <div className="w-full max-w-147">
        {/* PROFILE */}
        <div className="flex w-full flex-col items-center gap-2 p-6">
          <Avatar field={homepage.data.avatar} />
          <span className="font-bold text-base text-foreground">
            {homepage.data.username}
          </span>

          <span className="text-center text-foreground/70 text-sm">
            {homepage.data.description}
          </span>
        </div>

        {/* THEME SWITCH */}
        <div className="flex justify-center">
          <ThemeSwitch />
        </div>

        <SliceZone slices={homepage.data.slices} components={components} />

        <Footer />
      </div>
    </main>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient()
  const homepage = await client.getSingle("homepage").catch(() => notFound())

  return {
    title: homepage.data.meta_title,
    description: homepage.data.meta_description,
    openGraph: {
      images: [{ url: asImageSrc(homepage.data.meta_image) ?? "" }],
    },
  }
}
