import Link from "next/link"

export const Footer = () => (
  <footer className="flex items-center justify-center p-6">
    <p className="text-body-sm text-foreground">
      Feito com ♥ por{" "}
      <Link
        href="https://pabloalan.com"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer underline"
      >
        Pablo Alan
      </Link>
    </p>
  </footer>
)
