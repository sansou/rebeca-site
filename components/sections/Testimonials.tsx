import Container from "../layout/Container";

const testimonials = [
  {
    quote:
      "O atendimento em casa fez muita diferença no meu pós-operatório. A evolução veio com segurança e paciência.",
    author: "Maria S., 68 anos",
  },
  {
    quote:
      "Consegui entender meus limites e voltar às atividades com mais confiança a cada sessão.",
    author: "Paciente de reabilitação ortopédica",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase text-accent">
            Depoimentos
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-text sm:text-4xl">
            Recuperação também é constância, orientação e acolhimento.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.author}
              className="rounded-lg border border-neutral bg-white p-7 shadow-[0_14px_34px_rgba(54,52,53,0.06)]"
            >
              <blockquote className="text-lg leading-8 text-[#4f4c4d]">
                &quot;{testimonial.quote}&quot;
              </blockquote>
              <figcaption className="mt-6 font-bold text-primary">
                {testimonial.author}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
