const whatsappUrl =
  "https://wa.me/5573981693945?text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20em%20Ilh%C3%A9us";

export default function WhatsappButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com Rebeca pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_rgba(37,211,102,0.35)] transition hover:-translate-y-0.5 hover:bg-[#1fb457] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-7 w-7"
        fill="currentColor"
      >
        <path d="M12.04 2a9.86 9.86 0 00-8.48 14.9L2.5 22l5.24-1.02A9.9 9.9 0 1012.04 2zm5.77 14.08c-.24.67-1.36 1.28-1.9 1.34-.5.05-1.12.07-1.8-.12-.42-.12-.96-.31-1.65-.6-2.9-1.25-4.8-4.16-4.95-4.35-.14-.2-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.42.27-.3.6-.37.8-.37h.57c.18 0 .43-.07.67.51.24.58.82 2 .9 2.14.07.15.12.32.02.51-.1.2-.15.32-.3.49-.15.17-.32.38-.45.51-.15.15-.3.31-.13.6.17.3.75 1.24 1.61 2.01 1.1.99 2.04 1.3 2.33 1.45.3.15.47.12.65-.07.2-.23.75-.88.95-1.18.2-.3.4-.25.67-.15.27.1 1.72.82 2.02.97.3.15.5.22.57.35.07.12.07.72-.17 1.39z" />
      </svg>
    </a>
  );
}
