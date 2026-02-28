import Container from "../layout/Container";

export default function Hero() {
  return (
    <section className="bg-light py-28">
      <Container>
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-dark leading-tight">
            Fisioterapia Domiciliar em Ilhéus
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Reabilitação ortopédica e pós-operatória com atendimento humanizado
            para idosos e adultos.
          </p>

          <button className="mt-10 bg-accent text-white px-8 py-3 rounded-full hover:opacity-90 transition shadow-soft">
            Agendar Consulta
          </button>
        </div>
      </Container>
    </section>
  );
}