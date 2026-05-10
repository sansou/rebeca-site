import Container from "../layout/Container";
import type { CSSProperties } from "react";

const services = [
  {
    title: "Traumato-ortopedia",
    text: "Condutas para dor, mobilidade, força e retorno gradual às atividades.",
    icon: "M5 12h14M12 5v14",
  },
  {
    title: "Pós-operatório ortopédico",
    text: "Acompanhamento para uma recuperação mais organizada e segura.",
    icon: "M6 12l4 4 8-8",
  },
  {
    title: "Atendimento domiciliar",
    text: "Sessões em casa para quem precisa de cuidado prático e confortável.",
    icon: "M4 11l8-6 8 6v8H4z",
  },
  {
    title: "Terapia manual",
    text: "Recursos manuais aplicados de acordo com a avaliação fisioterapêutica.",
    icon: "M7 12h10M9 8h6M10 16h4",
  },
  {
    title: "Massagem terapêutica",
    text: "Cuidado complementar para tensão, conforto e bem-estar corporal.",
    icon: "M7 15c2-4 8-4 10 0M6 10c3-3 9-3 12 0",
  },
  {
    title: "Pilates clínico",
    text: "Exercícios orientados para controle, estabilidade e consciência corporal.",
    icon: "M12 5a7 7 0 100 14 7 7 0 000-14z",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-neutral py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center" data-scroll-reveal>
          <p className="text-sm font-semibold uppercase text-accent">
            Especialidades
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-text sm:text-4xl">
            Tratamentos pensados para recuperar movimento e confiança.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="min-h-52 rounded-lg border border-[#d6d8d8] bg-background p-6 shadow-[0_14px_34px_rgba(54,52,53,0.08)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(54,52,53,0.12)]"
              data-scroll-reveal="zoom"
              style={
                {
                  "--reveal-delay": `${index * 80}ms`,
                } as CSSProperties
              }
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#f3e9df] text-accent">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d={service.icon} />
                </svg>
              </div>
              <h3 className="mt-5 text-xl font-bold text-primary">
                {service.title}
              </h3>
              <p className="mt-4 leading-7 text-[#5b5859]">{service.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
