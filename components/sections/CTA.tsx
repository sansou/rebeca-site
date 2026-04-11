import Container from "../layout/Container";

const whatsappUrl =
  "https://wa.me/5500000000000?text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o";

export default function CTA() {
  return (
    <section id="contato" className="bg-primary py-20 text-white sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
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

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center justify-center rounded-lg bg-accent px-7 py-4 text-sm font-bold text-white transition hover:bg-[#cf7426] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
          >
            Falar no WhatsApp
          </a>
        </div>
      </Container>
    </section>
  );
}
