import { SOCIAL_ICONS } from "@/shared/utils/social-icons"
import { SocialLink } from "../social-link"

const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/pabloalan",
    icon: SOCIAL_ICONS["github-icon"],
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/pabloalan/",
    icon: SOCIAL_ICONS["linkedin-icon"],
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/pabloalan/",
    icon: SOCIAL_ICONS["instagram-icon"],
  },
  {
    name: "Twitter",
    url: "https://twitter.com/pabloalan",
    icon: SOCIAL_ICONS["twitter-icon"],
  },
]

export const SocialLinks = () => (
  <div className="flex w-full items-center justify-center gap-4 p-6">
    {SOCIAL_LINKS.map(({ name, url, icon }) => (
      <SocialLink key={name} href={url} icon={icon} />
    ))}
  </div>
)
