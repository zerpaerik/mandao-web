"use server";

export type LeadKind = "comercio" | "rider";

export interface LeadState {
  status: "idle" | "ok" | "error";
  message?: string;
  errors?: Record<string, string>;
}

const PHONE_RE = /^\+?\d[\d\s-]{8,14}$/;

function text(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

/**
 * Receives merchant and rider sign-up requests from the public site.
 *
 * TODO: persist leads (Google Sheet, Notion or the Mandao admin API) and notify by WhatsApp/email.
 * For now the lead is validated and logged on the server so nothing is silently lost during the pilot.
 */
export async function submitLead(_prev: LeadState, formData: FormData): Promise<LeadState> {
  // Honeypot: real users never fill this hidden field.
  if (text(formData, "website")) {
    return { status: "ok", message: "Recibido." };
  }

  const kind = text(formData, "kind") as LeadKind;
  const errors: Record<string, string> = {};

  const name = text(formData, "name");
  const phone = text(formData, "phone");
  const zone = text(formData, "zone");

  if (name.length < 2) errors.name = "Dinos tu nombre.";
  if (!PHONE_RE.test(phone)) errors.phone = "Escribe un teléfono válido, por ejemplo 0412 000 0000.";
  if (!zone) errors.zone = "Indica tu zona de San Juan.";

  if (kind === "comercio") {
    if (text(formData, "business").length < 2) errors.business = "Dinos el nombre del negocio.";
    if (!text(formData, "category")) errors.category = "Elige un rubro.";
  } else if (kind === "rider") {
    if (!text(formData, "vehicle")) errors.vehicle = "Elige tu vehículo.";
    if (formData.get("documents") !== "on") errors.documents = "Necesitamos que tengas los documentos al día.";
  } else {
    return { status: "error", message: "Formulario no reconocido. Recarga la página e intenta de nuevo." };
  }

  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Revisa los campos marcados.", errors };
  }

  const lead = Object.fromEntries(
    [...formData.entries()].filter(([key]) => key !== "website" && typeof key === "string"),
  );
  console.info("[mandao-web] nuevo lead", { kind, receivedAt: new Date().toISOString(), ...lead });

  return {
    status: "ok",
    message:
      kind === "comercio"
        ? "Recibimos tu solicitud. Te escribimos por WhatsApp en menos de 24 horas para visitarte y cargar tu catálogo."
        : "Recibimos tu solicitud. Nuestro operador aliado te contacta por WhatsApp para la entrevista y el chaleco.",
  };
}
