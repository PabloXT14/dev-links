import Image, { type ImageProps } from "next/image"

type AvatarProps = ImageProps

export const Avatar = (props: AvatarProps) => (
  <Image
    className="size-28 rounded-full border-2 border-stroke bg-linear-to-r from-fuchsia-500 via-violet-500 to-cyan-500 bg-origin-border object-cover object-center"
    width={112}
    height={112}
    {...props}
  />
)
