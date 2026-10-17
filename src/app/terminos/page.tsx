import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata: Metadata = { title: "Términos y condiciones" };

export default function TermsPage() {
  return (
    <LegalPage
      title="Términos y condiciones"
      intro="Este texto es un borrador de trabajo y debe ser revisado por un abogado antes del lanzamiento."
      sections={[
        {
          heading: "Qué es Mandao",
          body: "Mandao es una plataforma tecnológica que conecta clientes, comercios y repartidores de un operador de flota aliado en San Juan de los Morros. Mandao no prepara los productos ni realiza el transporte directamente.",
        },
        {
          heading: "Pedidos y pagos",
          body: "Los precios se muestran en dólares y en bolívares a la tasa oficial del día, congelada al momento del pedido. El cliente elige el método de pago antes de confirmar. En pagos en efectivo, el vuelto se calcula con el monto que el cliente indica.",
        },
        {
          heading: "Cancelaciones",
          body: "Un pedido puede cancelarse sin costo mientras el comercio no lo haya aceptado. Después de aceptado, aplican las condiciones que se muestran en la app.",
        },
        {
          heading: "Pendiente de revisión legal",
          body: "[RESPONSABILIDAD, RECLAMOS, PROTECCIÓN DE DATOS, LEY APLICABLE Y JURISDICCIÓN]",
        },
      ]}
    />
  );
}
