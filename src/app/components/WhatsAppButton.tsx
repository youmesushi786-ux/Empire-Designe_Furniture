import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const phoneNumber = '254702694794';
  const message = encodeURIComponent(
    'Hello! I would like to inquire about your furniture.'
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-[0_10px_30px_rgba(37,211,102,0.35)] ring-4 ring-white/70 transition-all duration-300 hover:scale-105 hover:bg-[#20BD5A] hover:shadow-[0_14px_35px_rgba(37,211,102,0.45)]">
        <span className="hidden sm:inline text-sm font-medium tracking-wide">
          WhatsApp
        </span>
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
          <MessageCircle className="h-5 w-5" fill="currentColor" />
        </span>
      </div>
    </a>
  );
}