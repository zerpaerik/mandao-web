"use client";

import { AnimatePresence, motion } from "motion/react";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { useActionState, type ReactNode } from "react";
import { submitLead, type LeadKind, type LeadState } from "@/actions/leads";
import { Button } from "@/components/ui/Button";
import { coverageZones } from "@/content/landing";
import { whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

const initialState: LeadState = { status: "idle" };

const merchantCategories = ["Comida preparada", "Farmacia", "Abasto o charcutería", "Licorería", "Panadería", "Otro"];
const vehicles = ["Moto", "Carro", "Bicicleta"];

interface FieldProps {
  label: string;
  name: string;
  error?: string;
  children: ReactNode;
}

function Field({ label, name, error, children }: FieldProps) {
  return (
    <label htmlFor={name} className="flex flex-col gap-1.5">
      <span className="text-[14px] font-extrabold text-ink">{label}</span>
      {children}
      {error ? (
        <span role="alert" className="text-[13px] font-bold text-mandao-dark">
          {error}
        </span>
      ) : null}
    </label>
  );
}

const inputClass =
  "h-12 w-full rounded-2xl border border-line bg-white px-4 text-[15px] font-bold text-ink placeholder:font-semibold placeholder:text-ink-muted focus:border-mandao";

export function LeadForm({ kind }: { kind: LeadKind }) {
  const [state, action, pending] = useActionState(submitLead, initialState);
  const errors = state.errors ?? {};
  const whatsapp = whatsappLink(
    kind === "comercio" ? "Hola Mandaíto, quiero registrar mi comercio." : "Hola Mandaíto, quiero ser rider.",
  );

  return (
    <div className="rounded-[28px] border border-line bg-cream p-6 shadow-card sm:p-8">
      <AnimatePresence mode="wait">
        {state.status === "ok" ? (
          <motion.div
            key="ok"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-start gap-4"
          >
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-morro text-cream">
              <CheckCircle2 size={28} />
            </span>
            <h3 className="text-2xl font-black">Listo, te contactamos</h3>
            <p className="text-[15px] leading-relaxed text-ink-soft">{state.message}</p>
            <Button href={whatsapp} variant="morro">
              <MessageCircle size={18} /> Adelantar por WhatsApp
            </Button>
          </motion.div>
        ) : (
          <motion.form key="form" action={action} className="flex flex-col gap-5" noValidate>
            <input type="hidden" name="kind" value={kind} />
            <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

            {kind === "comercio" ? (
              <>
                <Field label="Nombre del negocio" name="business" error={errors.business}>
                  <input id="business" name="business" className={inputClass} placeholder="Burger La Esquina" required />
                </Field>
                <Field label="Rubro" name="category" error={errors.category}>
                  <select id="category" name="category" className={inputClass} defaultValue="" required>
                    <option value="" disabled>
                      Elige uno
                    </option>
                    {merchantCategories.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </Field>
              </>
            ) : null}

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label={kind === "comercio" ? "Persona de contacto" : "Tu nombre"} name="name" error={errors.name}>
                <input id="name" name="name" className={inputClass} placeholder="Nombre y apellido" required />
              </Field>
              <Field label="Teléfono con WhatsApp" name="phone" error={errors.phone}>
                <input id="phone" name="phone" type="tel" inputMode="tel" className={inputClass} placeholder="0412 000 0000" required />
              </Field>
            </div>

            <Field label="Zona" name="zone" error={errors.zone}>
              <select id="zone" name="zone" className={inputClass} defaultValue="" required>
                <option value="" disabled>
                  ¿Dónde estás?
                </option>
                {coverageZones.map((z) => (
                  <option key={z} value={z}>
                    {z}
                  </option>
                ))}
                <option value="Otra">Otra zona de San Juan</option>
              </select>
            </Field>

            {kind === "rider" ? (
              <>
                <Field label="Vehículo" name="vehicle" error={errors.vehicle}>
                  <select id="vehicle" name="vehicle" className={inputClass} defaultValue="" required>
                    <option value="" disabled>
                      Elige uno
                    </option>
                    {vehicles.map((v) => (
                      <option key={v} value={v}>
                        {v}
                      </option>
                    ))}
                  </select>
                </Field>
                <label className="flex items-start gap-3 rounded-2xl bg-white p-4">
                  <input type="checkbox" name="documents" className="mt-1 h-5 w-5 accent-mandao" />
                  <span className="text-[14px] font-bold leading-snug text-ink">
                    Tengo cédula, licencia y carnet de circulación al día.
                    {errors.documents ? (
                      <span role="alert" className="mt-1 block text-mandao-dark">
                        {errors.documents}
                      </span>
                    ) : null}
                  </span>
                </label>
              </>
            ) : null}

            {state.status === "error" && state.message ? (
              <p role="alert" className="rounded-2xl bg-mandao-soft px-4 py-3 text-[14px] font-extrabold text-[#712B13]">
                {state.message}
              </p>
            ) : null}

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button type="submit" size="lg" disabled={pending} className={cn(pending && "opacity-70")}>
                {pending ? "Enviando…" : kind === "comercio" ? "Quiero vender por Mandaíto" : "Quiero ser rider"}
              </Button>
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[14px] font-extrabold text-morro hover:text-morro-dark"
              >
                <MessageCircle size={16} /> Prefiero escribir por WhatsApp
              </a>
            </div>
            <p className="text-[12px] font-bold text-ink-muted">
              Solo usamos tus datos para contactarte sobre Mandaíto. Nada de spam.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
