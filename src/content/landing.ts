import type { LucideIcon } from "lucide-react";
import {
  Bike,
  ClipboardList,
  CreditCard,
  MapPinned,
  Pill,
  ShoppingBasket,
  UtensilsCrossed,
  Wallet,
} from "lucide-react";

export interface Step {
  title: string;
  body: string;
  icon: LucideIcon;
}

export const steps: Step[] = [
  {
    title: "Elige qué quieres",
    body: "Comida, farmacia, abasto, o escribe el mandao en tus palabras con un presupuesto máximo.",
    icon: ClipboardList,
  },
  {
    title: "Di cómo pagas",
    body: "Efectivo en dólares o bolívares, Pago Móvil o Zelle. Si pagas en efectivo, nos dices con cuánto y el rider lleva tu vuelto.",
    icon: Wallet,
  },
  {
    title: "Sigue al rider",
    body: "Ves en el mapa dónde va, su nombre y su número de chaleco. Le escribes por WhatsApp con un toque.",
    icon: MapPinned,
  },
  {
    title: "Llegó",
    body: "Recibes en la puerta. Si algo salió mal, hablas con una persona de Mandaíto, no con un robot.",
    icon: Bike,
  },
];

export interface Category {
  slug: string;
  title: string;
  body: string;
  icon: LucideIcon;
  tone: "mandao" | "morro" | "sun" | "ink";
}

export const categories: Category[] = [
  {
    slug: "comida",
    title: "Comida",
    body: "Hamburguesas, pollo, pizza, comida criolla.",
    icon: UtensilsCrossed,
    tone: "mandao",
  },
  {
    slug: "farmacia",
    title: "Farmacia",
    body: "Medicinas, cuidado personal, bebés.",
    icon: Pill,
    tone: "morro",
  },
  {
    slug: "abasto",
    title: "Abasto",
    body: "Charcutería, víveres, hielo, bebidas.",
    icon: ShoppingBasket,
    tone: "sun",
  },
  {
    slug: "mandados",
    title: "Mandados",
    body: "Una cola, un documento, lo que no está en catálogo.",
    icon: CreditCard,
    tone: "ink",
  },
];

export const paymentMethods = ["Efectivo USD", "Efectivo Bs", "Pago Móvil", "Zelle"] as const;

export const coverageZones = [
  "Centro",
  "Urb. Rómulo Gallegos",
  "Urb. La Morera",
  "Los Laureles",
  "Las Palmas",
  "Av. Bolívar y alrededores",
] as const;

export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: "¿Cuánto cuesta el envío?",
    answer:
      "Durante el piloto, 1 USD en el centro y las urbanizaciones. Después, entre 1,50 y 2,50 USD según la zona. Siempre lo ves antes de confirmar.",
  },
  {
    question: "¿Puedo pagar en efectivo?",
    answer:
      "Sí, en dólares o en bolívares. Nos dices con cuánto pagas y el rider sale con tu vuelto exacto. También aceptamos Pago Móvil y Zelle.",
  },
  {
    question: "¿Qué es un mandao?",
    answer:
      "Cualquier cosa que no está en catálogo: hacer una cola, retirar un documento, comprar algo específico. Lo describes en tus palabras, pones un presupuesto máximo y el rider lo resuelve.",
  },
  {
    question: "¿En qué zonas entregan?",
    answer:
      "Arrancamos en San Juan de los Morros urbano: centro, urbanizaciones y avenidas principales. Iremos ampliando a medida que sumemos riders.",
  },
  {
    question: "¿Quiénes son los riders?",
    answer:
      "Motorizados de San Juan que trabajan con nuestro operador aliado: uniformados con chaleco Mandaíto, con documentos al día y un número visible para que sepas quién te atiende.",
  },
];

export const merchantBenefits = [
  {
    title: "Vende a domicilio sin comprar una moto",
    body: "Publicamos tu catálogo, te traemos los pedidos y un rider los recoge. Tú cocinas o despachas.",
  },
  {
    title: "Te pagamos diario",
    body: "Si superas 10 pedidos al día cobras cada día; si no, cada semana. Por Pago Móvil o en efectivo, como prefieras.",
  },
  {
    title: "Comisión justa, sin letra pequeña",
    body: "12 % durante el piloto sobre los productos vendidos, o una cuota fija mensual si tu negocio es pequeño.",
  },
  {
    title: "Sin pantalla en la cocina, sin problema",
    body: "Los pedidos te llegan por WhatsApp y respondes con un 1 para aceptar. Si quieres, también tienes un portal web.",
  },
];

export const riderBenefits = [
  {
    title: "Pedidos sin llamadas",
    body: "Te llegan por la app con la ruta, cuánto cobrar y cuánto ganas. Aceptas en dos minutos o pasa al siguiente.",
  },
  {
    title: "Cobras y cuadras sin errores",
    body: "La app te dice cuánto recibir y cuánto devolver. Un tope de efectivo te protege en la calle.",
  },
  {
    title: "Pago semanal garantizado",
    body: "Liquidas con tu operador al cierre del día y cobras tu semana cada lunes, sin fallar.",
  },
  {
    title: "Chaleco, bolso y respaldo",
    body: "Mandaíto te da el uniforme y soporte por WhatsApp mientras trabajas. Tú pones la moto y las ganas.",
  },
];

/** Short promotional lines for the moving strip under the hero. Edit freely; keep them under ~45 characters. */
export const promoLines = [
  "Envío a $1 en el centro durante el piloto",
  "Entrega en menos de 40 minutos",
  "Pagas en efectivo, Pago Móvil o Zelle",
  "El rider lleva tu vuelto exacto",
  "Mandados: una cola, un documento, lo que sea",
  "Comercios de San Juan, riders de San Juan",
] as const;

export interface Merchant {
  name: string;
  category: string;
  zone: string;
  initials: string;
  tone: "mandao" | "morro" | "sun" | "ink" | "coral";
  badge?: string;
}

/**
 * Merchants shown in the "ya están en Mandaíto" strip.
 * EXAMPLE DATA: replace with the real partners before launch (the design canvas uses the same names).
 */
export const featuredMerchants: Merchant[] = [
  { name: "Burger La Esquina", category: "Hamburguesas", zone: "Av. Bolívar", initials: "BE", tone: "mandao", badge: "Top ventas" },
  { name: "Farmacia San Juan", category: "Farmacia", zone: "Centro", initials: "FS", tone: "morro" },
  { name: "Abasto Los Morros", category: "Abasto y charcutería", zone: "Urb. La Morera", initials: "AM", tone: "sun" },
  { name: "Pizzería Don Cheo", category: "Pizzas", zone: "Urb. Rómulo Gallegos", initials: "DC", tone: "coral", badge: "Nuevo" },
  { name: "Panadería La Espiga", category: "Panadería", zone: "Centro", initials: "LE", tone: "sun" },
  { name: "Pollos El Guariqueño", category: "Pollo a la brasa", zone: "Los Laureles", initials: "PG", tone: "mandao" },
  { name: "Licorería El Morro", category: "Licorería", zone: "Las Palmas", initials: "LM", tone: "ink" },
  { name: "Sushi Llanero", category: "Sushi", zone: "Centro", initials: "SL", tone: "morro", badge: "Nuevo" },
];

/** The paid spotlight. One per week; sold to merchants from the pilot's month 4 on. */
export const sponsoredSpot = {
  /** Set to true once a real merchant has bought the weekly spot. */
  enabled: false,
  label: "Espacio patrocinado",
  merchant: "Burger La Esquina",
  headline: "2 × 1 en Combo Esquina los martes",
  body: "Pide dos combos por el precio de uno, solo por Mandaíto. Válido en el centro y las urbanizaciones.",
  cta: "Pedir ahora",
  validity: "Martes de octubre · hasta agotar 50 combos",
} as const;

export interface PilotStat {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
}

/**
 * Honest figures from the pilot, shown under the hero once there is something real to show.
 * Keep `enabled` false until the first week of operation; update the numbers weekly by hand.
 */
export const pilotStats = {
  enabled: false,
  updatedLabel: "Actualizado el [FECHA]",
  items: [
    { label: "Comercios activos", value: 0 },
    { label: "Pedidos entregados", value: 0 },
    { label: "Tiempo promedio de entrega", value: 0, suffix: " min" },
    { label: "Riders en turno", value: 0 },
  ] as PilotStat[],
};
