import Container from "../layout/Container";

const whatsappUrl =
  "https://wa.me/5573981693945?text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20em%20Ilh%C3%A9us";
const instagramUrl = "https://www.instagram.com/rebecavasconcelloss.fisio";

function WhatsappIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="currentColor"
    >
      <path d="M12.04 2a9.86 9.86 0 00-8.48 14.9L2.5 22l5.24-1.02A9.9 9.9 0 1012.04 2zm5.77 14.08c-.24.67-1.36 1.28-1.9 1.34-.5.05-1.12.07-1.8-.12-.42-.12-.96-.31-1.65-.6-2.9-1.25-4.8-4.16-4.95-4.35-.14-.2-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.42.27-.3.6-.37.8-.37h.57c.18 0 .43-.07.67.51.24.58.82 2 .9 2.14.07.15.12.32.02.51-.1.2-.15.32-.3.49-.15.17-.32.38-.45.51-.15.15-.3.31-.13.6.17.3.75 1.24 1.61 2.01 1.1.99 2.04 1.3 2.33 1.45.3.15.47.12.65-.07.2-.23.75-.88.95-1.18.2-.3.4-.25.67-.15.27.1 1.72.82 2.02.97.3.15.5.22.57.35.07.12.07.72-.17 1.39z" />
    </svg>
  );
}

export default function CTA() {
  return (
    <section id="contato" className="bg-primary py-20 text-white sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center" data-scroll-reveal>
          <p className="text-sm font-semibold uppercase text-white">
            Agendamento
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
            Dê o primeiro passo para voltar a se movimentar melhor.
          </h2>
          <p className="mt-5 text-lg leading-8 text-white">
            Envie uma mensagem e conte brevemente o que você precisa. A
            avaliação orienta o plano de cuidado mais adequado para o seu caso.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-accent px-7 text-sm font-bold text-white shadow-[0_14px_30px_rgba(54,52,53,0.2)] transition hover:bg-[#cf7426] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary sm:w-auto"
            >
              <WhatsappIcon />
              Falar no WhatsApp
            </a>

            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-lg border border-white bg-white/10 px-7 text-sm font-bold text-white transition hover:bg-white hover:text-text focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary sm:w-auto"
            >
              Ver Instagram
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
