import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata: Metadata = { title: "Política de privacidad" };

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Política de privacidad"
      intro="Este texto es un borrador de trabajo y debe ser revisado por un abogado antes del lanzamiento."
      sections={[
        {
          heading: "Qué datos usamos",
          body: "Nombre, teléfono y dirección de entrega para poder llevarte el pedido y contactarte. Nunca guardamos datos de tarjetas: los pagos digitales ocurren en tu banco o en Zelle.",
        },
        {
          heading: "Con quién los compartimos",
          body: "Con el comercio que prepara tu pedido y con el rider que lo entrega, solo lo necesario para esa entrega. No vendemos datos a terceros.",
        },
        {
          heading: "Tus derechos",
          body: "Puedes pedir que corrijamos o eliminemos tus datos escribiéndonos por WhatsApp.",
        },
        {
          heading: "Pendiente de revisión legal",
          body: "[BASE LEGAL, CONSERVACIÓN, SEGURIDAD Y CONTACTO DEL RESPONSABLE]",
        },
      ]}
    />
  );
}
