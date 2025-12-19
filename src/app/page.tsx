import { PiSun, PiMoonStars } from "react-icons/pi"
import {
  IoLogoTwitter,
  IoLogoTwitch,
  IoLogoGithub,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoYoutube,
  IoLogoLinkedin,
  IoLogoWhatsapp,
  IoLogoTiktok,
} from "react-icons/io5"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-2 bg-background">
      <h1 className="font-bold font-sans text-4xl text-text-primary">
        Dev Links
      </h1>

      <p className="text-body-md">Text 1</p>
      <p className="text-body-sm">Text 2</p>

      <div className="flex gap-2">
        <PiSun className="size-6" />
        <PiMoonStars className="size-6" />

        <IoLogoTwitter className="size-6" />
        <IoLogoTwitch className="size-6" />
        <IoLogoGithub className="size-6" />
        <IoLogoFacebook className="size-6" />
        <IoLogoInstagram className="size-6" />
        <IoLogoYoutube className="size-6" />
        <IoLogoLinkedin className="size-6" />
        <IoLogoWhatsapp className="size-6" />
        <IoLogoTiktok className="size-6" />
      </div>
    </div>
  )
}
