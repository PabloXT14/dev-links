import type { FC } from "react"
import type { Content } from "@prismicio/client"
import type { SliceComponentProps } from "@prismicio/react"
import { PrismicNextLink } from "@prismicio/next"

import { Button } from "@/components/button"

/**
 * Props for `Links`.
 */
export type LinksProps = SliceComponentProps<Content.LinksSlice>

/**
 * Component for "Links" Slices.
 */
const Links: FC<LinksProps> = ({ slice }) => (
  <section
    data-slice-type={slice.slice_type}
    data-slice-variation={slice.variation}
    className="flex flex-col gap-4 p-6"
  >
    {slice.primary.url.map((url) => (
      <PrismicNextLink key={url.key} field={url} target="_blank">
        <Button>{url.text}</Button>
      </PrismicNextLink>
    ))}
  </section>
)

export default Links
