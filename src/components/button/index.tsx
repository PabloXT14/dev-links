import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

type ButtonProps = ComponentProps<"button">

export const Button = ({ className, ...props }: ButtonProps) => (
  <button
    className={cn(
      "flex w-full items-center justify-center gap-2 rounded-lg border border-stroke bg-surface px-6 py-4 text-body-md transition-colors hover:border-foreground hover:bg-surface-hover",
      className
    )}
    {...props}
  />
)
