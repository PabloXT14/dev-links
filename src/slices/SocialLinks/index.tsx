import type { FC } from "react"
import type { Content } from "@prismicio/client"
import type { SliceComponentProps } from "@prismicio/react"
import { PrismicNextLink } from "@prismicio/next"

import { ICONS_MAP } from "@/shared/utils/icons-map"

/**
 * Props for `SocialLinks`.
 */
export type SocialLinksProps = SliceComponentProps<Content.SocialLinksSlice>

/**
 * Component for "SocialLinks" Slices.
 */
const SocialLinks: FC<SocialLinksProps> = ({ slice }) => (
  <section
    data-slice-type={slice.slice_type}
    data-slice-variation={slice.variation}
    className="flex w-full items-center justify-center gap-4 px-6"
  >
    {slice.primary.social_group?.map((item) => {
      const Icon = ICONS_MAP[item.icon_name as keyof typeof ICONS_MAP]

      if (!Icon) {
        return null
      }

      return (
        <PrismicNextLink
          key={item.url.text}
          field={item.url}
          className="flex size-14 items-center justify-center rounded-full bg-transparent transition-colors hover:bg-highlight"
        >
          <Icon className="size-6 text-foreground" />
        </PrismicNextLink>
      )
    })}
  </section>
)

export default SocialLinks
