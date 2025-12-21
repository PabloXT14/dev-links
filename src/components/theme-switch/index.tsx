"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
// biome-ignore lint/performance/noNamespaceImport: needed for radix switch
import * as Switch from "@radix-ui/react-switch"
import { PiMoonStars, PiSun } from "react-icons/pi"

export const ThemeSwitch = () => {
  const { resolvedTheme, setTheme } = useTheme()

  const isChecked = resolvedTheme === "light"

  // To avoid hydration mismatch, because theme is loaded after component is mounted on client
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Switch.Root
      className="relative flex h-6 w-16 cursor-pointer items-center rounded-full border border-stroke bg-surface transition-all hover:bg-surface-hover"
      checked={isChecked}
      onCheckedChange={(newChecked) => setTheme(newChecked ? "light" : "dark")}
    >
      <Switch.Thumb className="flex size-8 translate-x-0 items-center justify-center rounded-full bg-foreground text-background transition-transform will-change-transform data-[state=checked]:translate-x-8">
        {resolvedTheme === "dark" ? (
          <PiMoonStars size={16} />
        ) : (
          <PiSun size={16} />
        )}
      </Switch.Thumb>
    </Switch.Root>
  )
}
