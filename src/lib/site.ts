/**
 * Single source of truth for brand, contact and link data.
 * Change values here, never inside components.
 */
export const site = {
  name: "Mandaíto",
  tagline: "Lo pides, te llega.",
  description:
    "Comida, farmacia, abasto o ese mandao que no te da tiempo de hacer. Un rider de San Juan de los Morros te lo lleva a la puerta en menos de 40 minutos. Pagas en efectivo, Pago Móvil o Zelle.",
  domain: "mandaito.com.ve",
  url: "https://mandaito.com.ve",
  city: "San Juan de los Morros",
  state: "Guárico",
  locale: "es-VE",

  /** TODO: replace with the real business WhatsApp number (digits only, country code first). */
  whatsapp: {
    number: "584120000000",
    display: "+58 412 000 0000",
  },

  social: {
    instagram: "https://instagram.com/mandaito.ve",
    tiktok: "https://tiktok.com/@mandaito.ve",
  },

  /** TODO: point to the Play Store listing once published. */
  app: {
    android: "#descargar",
    web: "#descargar",
  },

  /**
   * Drop the real photo at /public/images/morros.jpg and set this to "/images/morros.jpg".
   * While null, the site renders an illustrated silhouette of Los Morros instead.
   */
  images: {
    morrosPhoto: "/images/morros.jpg" as string | null,
  },

  pilot: {
    deliveryFeeUsd: 1,
    regularDeliveryFeeUsd: 1.5,
    maxMinutes: 40,
    commissionPercent: 12,
  },
} as const;

export function whatsappLink(message: string): string {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { href: "/#como-funciona", label: "Cómo funciona" },
  { href: "/#categorias", label: "Qué pedir" },
  { href: "/comercios", label: "Para comercios" },
  { href: "/riders", label: "Para riders" },
] as const;
