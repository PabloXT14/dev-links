import { PrismicNextImage, type PrismicNextImageProps } from "@prismicio/next"

type AvatarProps = PrismicNextImageProps

export const Avatar = async (props: AvatarProps) => (
  <PrismicNextImage
    className="size-28 rounded-full border-2 border-stroke bg-linear-to-r from-fuchsia-500 via-violet-500 to-cyan-500 bg-origin-border object-cover object-center"
    quality={80}
    {...props}
  />
)
