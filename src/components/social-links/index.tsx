import { ICONS_MAP } from "@/shared/utils/icons-map"
import { SocialLink } from "../social-link"

const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/pabloalan",
    icon: ICONS_MAP["github"],
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/pabloalan/",
    icon: ICONS_MAP["linkedin"],
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/pabloalan/",
    icon: ICONS_MAP["instagram"],
  },
  {
    name: "Twitter",
    url: "https://twitter.com/pabloalan",
    icon: ICONS_MAP["twitter"],
  },
]

export const SocialLinks = () => (
  <div className="flex w-full items-center justify-center gap-4 px-6">
    {SOCIAL_LINKS.map(({ name, url, icon }) => (
      <SocialLink key={name} href={url} icon={icon} />
    ))}
  </div>
)
