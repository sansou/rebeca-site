import Image from "next/image";
import Container from "../layout/Container";

export default function About() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Image
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1200&q=80"
            alt="Atendimento cuidadoso de fisioterapia"
            width={720}
            height={480}
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="h-[360px] w-full rounded-lg object-cover"
          />

          <div>
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
          </div>
        </div>
      </Container>
    </section>
  );
}
