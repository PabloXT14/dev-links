import Link from "next/link"

import { Button } from "../button"

const LINKS = [
  {
    href: "https://rocketseat.com.br/nlw",
    label: "Inscreva-se no NLW",
  },
  {
    href: "https://pabloalan.com/e-book",
    label: "Baixe meu e-book",
  },
  {
    href: "https://pabloalan.com/portfolio",
    label: "Veja meu portfólio",
  },
  {
    href: "https://pabloalan.com/curso",
    label: "Conheça meu curso",
  },
]

export const LinksList = () => (
  <ul className="flex flex-col gap-4 p-6">
    {LINKS.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button>{link.label}</Button>
      </Link>
    ))}
  </ul>
)
