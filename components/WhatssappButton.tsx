const whatsappUrl =
  "https://wa.me/5573981693945?text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20em%20ilh%C3%A9us";
const instagramUrl = "https://www.instagram.com/rebecavasconcelloss.fisio";

export default function WhatsappButton() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <a
        href={instagramUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Abrir Instagram de Rebeca"
        className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-black text-white shadow-[0_10px_28px_rgba(0,0,0,0.24)] transition hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
        >
          <rect
            width="16"
            height="16"
            x="4"
            y="4"
            rx="4"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle
            cx="12"
            cy="12"
            r="3.5"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle cx="17" cy="7" r="1.2" fill="currentColor" />
        </svg>
      </a>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar com Rebeca pelo WhatsApp"
        className="rounded-lg bg-[#25D366] px-4 py-3 text-sm font-bold text-white shadow-[0_10px_28px_rgba(37,211,102,0.35)] transition hover:bg-[#1fb457] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      >
        WhatsApp
      </a>
    </div>
  );
}
