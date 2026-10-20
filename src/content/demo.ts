/**
 * Scripted scenarios for the "Pídelo en una frase" demo on the landing.
 * They simulate what the in-app assistant returns; prices and merchants are the example catalog.
 */
export interface DemoItem {
  qty: number;
  name: string;
  merchant: string;
  price: number;
}

export interface DemoStep {
  label: string;
}

export interface DemoScenario {
  id: string;
  phrase: string;
  kind: "pedido" | "mandado";
  items?: DemoItem[];
  steps?: DemoStep[];
  delivery: number;
  service: number;
  payment: string;
  paysWith?: number;
  note: string;
  alternatives: string[];
}

export const demoScenarios: DemoScenario[] = [
  {
    id: "combos",
    phrase: "dos combos de la esquina, un acetaminofén y hielo, pago con 20",
    kind: "pedido",
    items: [
      { qty: 2, name: "Combo Esquina", merchant: "Burger La Esquina", price: 13 },
      { qty: 1, name: "Acetaminofén 500 mg", merchant: "Farmacia San Juan", price: 1.2 },
      { qty: 1, name: "Hielo 2 kg", merchant: "Abasto Los Morros", price: 1.5 },
    ],
    delivery: 1,
    service: 0.5,
    payment: "Efectivo USD",
    paysWith: 20,
    note: "3 comercios: llega en dos entregas, 35 a 45 min",
    alternatives: ["Solo la comida", "Combo Doble +$1,50", "Pago Móvil"],
  },
  {
    id: "cola",
    phrase: "hazme la cola en CANTV y paga la factura de mi abuela",
    kind: "mandado",
    steps: [
      { label: "Ir a la oficina de CANTV del centro" },
      { label: "Hacer la cola y pagar la factura" },
      { label: "Traerte el comprobante a la puerta" },
    ],
    delivery: 2.5,
    service: 0.5,
    payment: "Pago Móvil por adelantado para la factura",
    note: "Mandado: 60 a 90 min. Tú fijas el tope de lo que el rider puede pagar",
    alternatives: ["Yo pongo el efectivo", "Solo la cola, sin pagar", "Mañana temprano"],
  },
  {
    id: "noche",
    phrase: "hielo, dos refrescos de litro y medio y pan para esta noche",
    kind: "pedido",
    items: [
      { qty: 1, name: "Hielo 2 kg", merchant: "Abasto Los Morros", price: 1.5 },
      { qty: 2, name: "Refresco 1,5 L", merchant: "Abasto Los Morros", price: 4.4 },
      { qty: 1, name: "Pan canilla × 4", merchant: "Panadería La Espiga", price: 1.6 },
    ],
    delivery: 1,
    service: 0.5,
    payment: "Pago Móvil",
    note: "2 comercios vecinos: una sola entrega, 25 a 35 min",
    alternatives: ["Hielo extra", "Efectivo Bs", "Pan de sándwich"],
  },
];
