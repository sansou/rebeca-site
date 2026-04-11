const whatsappUrl =
  "https://wa.me/5500000000000?text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o";

export default function WhatsappButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com Rebeca pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 rounded-lg bg-[#25D366] px-4 py-3 text-sm font-bold text-white shadow-[0_10px_28px_rgba(37,211,102,0.35)] transition hover:bg-[#1fb457] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
    >
      WhatsApp
    </a>
  );
}
