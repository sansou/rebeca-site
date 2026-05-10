import Image from "next/image";
import Container from "../layout/Container";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[calc(82vh-4rem)] items-center overflow-hidden bg-text py-20 text-white">
      <Image
        src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1800&q=80"
        alt="Fisioterapeuta orientando atendimento de reabilitação"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[rgba(54,52,53,0.68)]" />

      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase text-neutral">
            Fisioterapia domiciliar em Ilhéus
          </p>

          <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Reabilitação com cuidado próximo, escuta e plano individual.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-neutral sm:text-lg">
            Atendimento para adultos e idosos em recuperação ortopédica,
            pós-operatória e funcional, com acompanhamento feito no conforto da
            sua casa.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contato"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-accent px-6 text-sm font-bold text-white shadow-[0_14px_30px_rgba(229,137,52,0.28)] transition hover:bg-[#cf7426] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-text"
            >
              Agendar avaliação
            </a>
            <a
              href="#servicos"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/80 bg-white/10 px-6 text-sm font-bold text-white backdrop-blur transition hover:bg-white hover:text-text focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-text"
            >
              Ver especialidades
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
