import Link from "next/link"

import type { IconType } from "react-icons"

type SocialLinkProps = {
  href: string
  icon: IconType
}

export const SocialLink = ({ href, icon: Icon }: SocialLinkProps) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex size-14 items-center justify-center rounded-full bg-transparent transition-colors hover:bg-highlight"
  >
    <Icon className="size-6 text-foreground" />
  </Link>
)
