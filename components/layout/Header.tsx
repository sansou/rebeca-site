import Container from "./Container";

const navItems = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#atendimento", label: "Atendimento" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#e4e1df] bg-background/94 backdrop-blur">
      <Container>
        <div className="flex min-h-16 items-center justify-between gap-4">
          <a href="#" className="leading-tight">
            <span className="block text-sm font-bold text-text">
              Rebeca Santos
            </span>
            <span className="block text-xs font-semibold uppercase text-primary">
              Fisioterapia
            </span>
          </a>

          <nav
            aria-label="Navegação principal"
            className="hidden items-center gap-6 text-sm font-semibold text-[#5b5859] md:flex"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-4"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contato"
            className="inline-flex min-h-11 items-center justify-center rounded-lg bg-accent px-4 text-sm font-bold text-white transition hover:bg-[#cf7426] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          >
            Agendar
          </a>
        </div>
      </Container>
    </header>
  );
}
