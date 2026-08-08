import { siteConfig } from '@/lib/site';

/**
 * Floating WhatsApp button — fixed bottom-right on every page.
 * Opens a chat with the business number (siteConfig.contact.whatsapp).
 */
export function WhatsAppButton() {
  const message = encodeURIComponent(`Hi ${siteConfig.name}, I'd like to know more about your services.`);

  return (
    <a
      href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:scale-110 focus-visible:scale-110"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8" aria-hidden="true">
        <path d="M12.001 2C6.478 2 2 6.478 2 12c0 1.98.582 3.83 1.578 5.383L2 22l4.783-1.535A9.953 9.953 0 0 0 12.001 22C17.523 22 22 17.522 22 12S17.523 2 12.001 2zm.001 18.06a8.03 8.03 0 0 1-4.09-1.117l-.294-.174-3.043.976.99-3.02-.19-.31A8.03 8.03 0 1 1 20.03 12a8.037 8.037 0 0 1-8.028 8.06z" />
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      </svg>
    </a>
  );
}
