import Container from "../layout/Container";

export default function Testimonials() {
  return (
    <section className="py-20">
      <Container>
        <h2 className="text-3xl font-bold text-primary text-center">
          Depoimentos
        </h2>
        <div className="mt-10 bg-gray-100 p-8 rounded-2xl text-center">
          <p className="italic">
            Após minha cirurgia no joelho, o atendimento domiciliar foi
            essencial para minha recuperação.
          </p>
          <span className="block mt-4 font-semibold">
            Maria S., 68 anos
          </span>
        </div>
      </Container>
    </section>
  );
}