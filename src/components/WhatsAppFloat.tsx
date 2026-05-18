import { buildWhatsAppLink } from "@/data/contact";

export default function WhatsAppFloat() {
  return (
    <a
      href={buildWhatsAppLink("Olá! Vim pelo site da Ciranda e gostaria de saber mais.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-6px_rgba(37,211,102,0.55)] ring-1 ring-white/40 transition-all duration-300 hover:scale-105 hover:shadow-[0_14px_40px_-6px_rgba(37,211,102,0.75)] md:bottom-7 md:right-7 md:h-16 md:w-16"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40" />
      <svg viewBox="0 0 32 32" className="h-7 w-7 md:h-8 md:w-8" fill="currentColor" aria-hidden>
        <path d="M19.11 17.27c-.27-.13-1.57-.77-1.81-.86-.24-.09-.42-.13-.6.14-.18.27-.69.86-.84 1.04-.16.18-.31.2-.58.07-.27-.13-1.13-.42-2.15-1.33-.79-.71-1.33-1.58-1.49-1.85-.16-.27-.02-.41.12-.55.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.13-.6-1.45-.83-1.99-.22-.52-.44-.45-.6-.46l-.51-.01c-.18 0-.47.07-.71.34-.24.27-.93.91-.93 2.21 0 1.3.95 2.56 1.08 2.74.13.18 1.87 2.86 4.54 4.01.63.27 1.13.43 1.51.55.64.2 1.22.17 1.68.1.51-.08 1.57-.64 1.79-1.26.22-.62.22-1.16.16-1.26-.07-.11-.24-.18-.51-.31zM16.03 5.5c-5.79 0-10.5 4.71-10.5 10.5 0 1.85.49 3.66 1.42 5.25L5 27l5.91-1.92a10.45 10.45 0 0 0 5.12 1.32h.01c5.79 0 10.5-4.71 10.5-10.5S21.83 5.5 16.03 5.5zm0 19.13a8.6 8.6 0 0 1-4.39-1.2l-.32-.19-3.51 1.14 1.16-3.42-.21-.34a8.61 8.61 0 0 1 7.27-13.17c4.76 0 8.63 3.87 8.63 8.63s-3.87 8.55-8.63 8.55z" />
      </svg>
    </a>
  );
}
