import Container from "../layout/Container";

export default function Location() {
  return (
    <section id="atendimento" className="bg-[#f7f8f5] py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div data-scroll-reveal="fade-left">
            <p className="text-sm font-semibold uppercase text-accent">
              Área de atendimento
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-text sm:text-4xl">
              Atendimento domiciliar em Ilhéus - BA.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#5b5859]">
              Sessões realizadas com agendamento prévio para adultos, idosos e
              pacientes em recuperação ortopédica.
            </p>
            <ul className="mt-6 grid gap-3 text-sm font-semibold text-[#4f4c4d] sm:grid-cols-2 lg:grid-cols-1">
              <li className="rounded-lg bg-white px-4 py-3 shadow-[0_10px_24px_rgba(54,52,53,0.06)]">
                Atendimento no conforto da casa
              </li>
              <li className="rounded-lg bg-white px-4 py-3 shadow-[0_10px_24px_rgba(54,52,53,0.06)]">
                Plano de cuidado definido após avaliação
              </li>
            </ul>
          </div>

          <iframe
            src="https://www.google.com/maps?q=Ilh%C3%A9us,+Bahia&output=embed"
            width="100%"
            height="340"
            loading="lazy"
            title="Mapa de Ilhéus, Bahia"
            className="rounded-lg border-0 shadow-[0_14px_34px_rgba(54,52,53,0.12)]"
            data-scroll-reveal="fade-right"
          />
        </div>
      </Container>
    </section>
  );
}
