import Container from "../layout/Container";

export default function Location() {
  return (
    <section className="bg-gray-50 py-20 text-center">
      <Container>
        <h2 className="text-3xl font-bold text-primary">
          Atendimento em Ilhéus - BA
        </h2>
        <p className="mt-4">
          Atendimento domiciliar com agendamento prévio.
        </p>
        <div className="mt-8">
          <iframe
            src="https://www.google.com/maps?q=Ilhéus,+Bahia&output=embed"
            width="100%"
            height="300"
            loading="lazy"
            className="rounded-2xl"
          />
        </div>
      </Container>
    </section>
  );
}