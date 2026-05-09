import Container from "../layout/Container";

const whatsappUrl =
  "https://wa.me/5573981693945?text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20em%20ilh%C3%A9us";
const instagramUrl = "https://www.instagram.com/rebecavasconcelloss.fisio";

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
              className="inline-flex w-full items-center justify-center rounded-lg bg-accent px-7 py-4 text-sm font-bold text-white transition hover:bg-[#cf7426] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary sm:w-auto"
            >
              Falar no WhatsApp
            </a>

            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center rounded-lg border border-white bg-white px-7 py-4 text-sm font-bold text-text transition hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary sm:w-auto"
            >
              Conheça nossos trabalhos no Instagram
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
