import { Avatar } from "@/components/avatar"
import { ThemeSwitch } from "@/components/theme-switch"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[url(/bg-mobile-light.svg)] bg-center bg-cover bg-no-repeat py-14 sm:bg-[url(/bg-desktop-light.svg)] dark:bg-[url(/bg-mobile.svg)] dark:sm:bg-[url(/bg-desktop.svg)]">
      {/* CONTENT */}
      <div className="w-full max-w-147">
        {/* PROFILE */}
        <div className="flex w-full flex-col items-center gap-2 p-6">
          <Avatar src="/profile.png" alt="Avatar of Pablo Alan" />

          <span className="text-base text-text-primary">@pabloalan</span>
        </div>

        {/* THEME SWITCH */}
        <div className="flex justify-center">
          <ThemeSwitch />
        </div>
      </div>
    </main>
  )
}
