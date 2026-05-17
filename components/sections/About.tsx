import Image from "next/image";
import rebecaPhoto from "../../img/rebeca.jpeg";
import Container from "../layout/Container";

const highlights = [
  ["Foco", "Ortopedia"],
  ["Formato", "Domiciliar"],
  ["Público", "Adultos e idosos"],
];

export default function About() {
  return (
    <section id="sobre" className="bg-background py-20 sm:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Image
            src={rebecaPhoto}
            alt="Rebeca Santos Vasconcelos"
            width={720}
            height={480}
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="h-[360px] w-full rounded-lg border border-[#e8e3df] bg-white object-cover shadow-[0_14px_34px_rgba(54,52,53,0.08)]"
            data-scroll-reveal="fade-left"
          />

          <div data-scroll-reveal="fade-right">
            <p className="text-sm font-semibold uppercase text-accent">
              Sobre a profissional
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-text sm:text-4xl">
              Rebeca Santos Vasconcelos
            </h2>

            <p className="mt-6 text-base leading-8 text-[#5b5859] sm:text-lg">
              Fisioterapeuta com atuação em traumato-ortopedia, reabilitação
              funcional, atendimento domiciliar e cuidado com pacientes em
              recuperação pós-cirúrgica.
            </p>

            <p className="mt-4 text-base leading-8 text-[#5b5859] sm:text-lg">
              Cada atendimento considera a rotina, as limitações e os objetivos
              de quem precisa voltar a se mover com mais segurança e autonomia.
            </p>

            <dl className="mt-8 grid gap-3 sm:grid-cols-3">
              {highlights.map(([term, detail]) => (
                <div
                  key={term}
                  className="rounded-lg border border-[#e1dfdb] bg-[#fbfaf8] p-4"
                >
                  <dt className="text-xs font-bold uppercase text-accent">
                    {term}
                  </dt>
                  <dd className="mt-1 text-sm font-bold text-text">{detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
