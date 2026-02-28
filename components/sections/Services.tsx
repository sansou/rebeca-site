import Container from "../layout/Container";

const services = [
  "Fisioterapia Traumato-Ortopédica",
  "Pós-operatório Ortopédico",
  "Atendimento Domiciliar",
  "Terapia Manual",
  "Massagem Terapêutica",
  "Pilates Clínico",
];

export default function Services() {
  return (
    <section className="bg-light py-28">
      <Container>
        <h2 className="text-3xl font-bold text-dark text-center">
          Especialidades
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {services.map((service) => (
            <div
              key={service}
              className="bg-white border border-soft p-6 rounded-2xl shadow-soft text-center hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-primary">
                {service}
              </h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}