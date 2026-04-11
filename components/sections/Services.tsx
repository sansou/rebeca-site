import Container from "../layout/Container";

const services = [
  {
    title: "Traumato-ortopedia",
    text: "Condutas para dor, mobilidade, força e retorno gradual às atividades.",
  },
  {
    title: "Pós-operatório ortopédico",
    text: "Acompanhamento para uma recuperação mais organizada e segura.",
  },
  {
    title: "Atendimento domiciliar",
    text: "Sessões em casa para quem precisa de cuidado prático e confortável.",
  },
  {
    title: "Terapia manual",
    text: "Recursos manuais aplicados de acordo com a avaliação fisioterapêutica.",
  },
  {
    title: "Massagem terapêutica",
    text: "Cuidado complementar para tensão, conforto e bem-estar corporal.",
  },
  {
    title: "Pilates clínico",
    text: "Exercícios orientados para controle, estabilidade e consciência corporal.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-neutral py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase text-accent">
            Especialidades
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-text sm:text-4xl">
            Tratamentos pensados para recuperar movimento e confiança.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="min-h-48 rounded-lg border border-[#d6d8d8] bg-background p-6 shadow-[0_14px_34px_rgba(54,52,53,0.08)]"
            >
              <h3 className="text-xl font-bold text-primary">{service.title}</h3>
              <p className="mt-4 leading-7 text-[#5b5859]">{service.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
