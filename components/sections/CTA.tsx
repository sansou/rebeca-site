import Container from "../layout/Container";

export default function CTA() {
  return (
    <section className="bg-primary py-28">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">
            Agende sua avaliação e recupere sua qualidade de vida
          </h2>

          <a
            href="https://wa.me/55SEUNUMERO?text=Olá,%20gostaria%20de%20agendar%20uma%20avaliação"
            className="mt-10 inline-block bg-accent text-white px-8 py-4 rounded-full shadow-soft hover:opacity-90 transition"
          >
            Falar no WhatsApp
          </a>
        </div>
      </Container>
    </section>
  );
}