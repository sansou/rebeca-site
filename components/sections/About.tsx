import Container from "../layout/Container";

export default function About() {
  return (
    <section className="bg-soft py-28">
      <Container>
        <h2 className="text-3xl font-bold text-dark text-center">
          Sobre Rebeca Santos Vasconcelos
        </h2>

        <p className="mt-8 text-lg leading-relaxed text-gray-700 text-center max-w-3xl mx-auto">
          Fisioterapeuta especializada em traumato-ortopedia, com foco em
          recuperação funcional e atendimento domiciliar em Ilhéus - Bahia.
          Experiência no tratamento de idosos e pacientes pós-cirúrgicos.
        </p>
      </Container>
    </section>
  );
}