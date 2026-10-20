"use client";

import { AnimatePresence, motion, useInView } from "motion/react";
import { Check, Mic, Sparkles } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { demoScenarios, type DemoScenario } from "@/content/demo";
import { cn, formatUsd } from "@/lib/utils";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

function subtotal(s: DemoScenario): number {
  return (s.items ?? []).reduce((acc, it) => acc + it.price, 0);
}

function total(s: DemoScenario): number {
  return subtotal(s) + s.delivery + s.service;
}

/**
 * Scripted demo of the in-app assistant: pick a phrase, watch it get "typed", then the cart appears.
 * No network calls; scenarios live in src/content/demo.ts.
 */
export function PhraseDemo() {
  const [active, setActive] = useState<DemoScenario>(demoScenarios[0]);
  const [typed, setTyped] = useState("");
  const [stage, setStage] = useState<"idle" | "typing" | "thinking" | "done">("idle");
  const [run, setRun] = useState(0);
  const timers = useRef<number[]>([]);
  const panelRef = useRef<HTMLDivElement>(null);
  const inView = useInView(panelRef, { once: true, margin: "-120px" });

  const clearTimers = useCallback(() => {
    timers.current.forEach((id) => window.clearTimeout(id));
    timers.current = [];
  }, []);

  /** Plays one scenario: types the phrase, pauses, then reveals the cart. All state changes run inside timers. */
  const startRun = useCallback(
    (s: DemoScenario) => {
      clearTimers();
      setActive(s);
      setTyped("");
      setStage("typing");
      setRun((r) => r + 1);
      const step = 34;
      for (let i = 1; i <= s.phrase.length; i += 1) {
        timers.current.push(window.setTimeout(() => setTyped(s.phrase.slice(0, i)), i * step));
      }
      const end = s.phrase.length * step;
      timers.current.push(window.setTimeout(() => setStage("thinking"), end + 60));
      timers.current.push(window.setTimeout(() => setStage("done"), end + 960));
    },
    [clearTimers],
  );

  useEffect(() => {
    if (!inView) return;
    const id = window.setTimeout(() => startRun(demoScenarios[0]), 80);
    return () => window.clearTimeout(id);
  }, [inView, startRun]);

  useEffect(() => clearTimers, [clearTimers]);

  function pick(s: DemoScenario) {
    startRun(s);
  }

  const paysWith = active.paysWith;
  const change = paysWith ? paysWith - total(active) : 0;

  return (
    <section id="pidelo-en-una-frase" className="scroll-mt-24 py-20 lg:py-28">
      <Container className="grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="flex flex-col gap-8">
          <SectionHeading
            eyebrow="Lo nuevo"
            title={
              <>
                Escríbelo como
                <br />
                lo dirías
              </>
            }
            body="Sin navegar categorías ni menús. Escribes o dictas lo que necesitas en una frase y Mandaíto arma el pedido con comercios y precios reales. Tú revisas y tocas Pedir."
          />
          <Reveal delay={0.1}>
            <ul className="flex flex-col gap-3">
              {[
                ["Nunca inventa", "Solo propone productos que existen hoy en el catálogo, con el precio del comercio."],
                ["Nunca confirma sola", "Arma el carrito y espera tu toque. Puedes corregirla con otra frase."],
                ["Entiende los mandados", "Una cola, un documento, una factura: lo convierte en un mandado con presupuesto y pasos."],
              ].map(([t, b]) => (
                <li key={t} className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-card">
                  <span className="grid h-9 w-9 flex-none place-items-center rounded-xl bg-morro text-cream">
                    <Check size={18} />
                  </span>
                  <span className="flex flex-col gap-0.5">
                    <span className="text-[15px] font-black">{t}</span>
                    <span className="text-[14px] leading-relaxed text-ink-soft">{b}</span>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-[13px] font-bold text-ink-muted">
              Demostración con comercios y precios de ejemplo. En la app la frase es tuya.
            </p>
          </Reveal>
        </div>

        <div ref={panelRef} className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Frases de ejemplo">
            {demoScenarios.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => pick(s)}
                className={cn(
                  "rounded-xl border px-3.5 py-2 text-left text-[13px] font-extrabold transition-colors",
                  s.id === active.id ? "border-mandao bg-mandao text-cream" : "border-line bg-white text-ink hover:bg-sand",
                )}
              >
                “{s.phrase}”
              </button>
            ))}
          </div>

          <div className="rounded-[32px] border border-line bg-cream p-4 shadow-float sm:p-5">
            <div className="flex items-center justify-between px-1 pb-3">
              <span className="text-[15px] font-black">Pídelo en una frase</span>
              <span className="rounded-lg bg-morro-soft px-2 py-1 text-[11px] font-black text-morro-dark">Catálogo de hoy</span>
            </div>

            <div className="flex min-h-[420px] flex-col gap-3">
              <div className="flex justify-end">
                <div className="max-w-[88%] rounded-2xl rounded-br-md bg-mandao px-4 py-2.5 text-[15px] font-bold leading-snug text-cream">
                  {typed}
                  {stage === "typing" ? <span className="ml-0.5 inline-block w-[2px] animate-pulse bg-cream">&nbsp;</span> : null}
                </div>
              </div>

              <AnimatePresence mode="wait">
                {stage === "thinking" ? (
                  <motion.div
                    key="thinking"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 text-[13px] font-extrabold text-ink-soft"
                  >
                    <Sparkles size={16} className="text-mandao" /> Buscando en los comercios cercanos…
                  </motion.div>
                ) : null}

                {stage === "done" ? (
                  <motion.div
                    key={`cart-${active.id}-${run}`}
                    initial="hidden"
                    animate="show"
                    variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
                    className="flex flex-col gap-3"
                  >
                    <motion.div
                      variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.45, ease } } }}
                      className="flex flex-col gap-2 rounded-2xl bg-white p-4"
                    >
                      <span className="text-[13px] font-black text-morro">
                        {active.kind === "pedido" ? "Esto es lo que entendí" : "Lo convierto en un mandado"}
                      </span>

                      {active.kind === "pedido"
                        ? active.items?.map((it, i) => (
                            <motion.div
                              key={`${it.name}-${i}`}
                              variants={{ hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0 } }}
                              className="flex items-center justify-between gap-3 text-[14px]"
                            >
                              <span>
                                <b className="font-black">{it.qty} ×</b> {it.name}{" "}
                                <span className="text-ink-soft">· {it.merchant}</span>
                              </span>
                              <b className="font-black">{formatUsd(it.price)}</b>
                            </motion.div>
                          ))
                        : active.steps?.map((st, i) => (
                            <motion.div
                              key={st.label}
                              variants={{ hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0 } }}
                              className="flex items-center gap-3 text-[14px]"
                            >
                              <span className="grid h-6 w-6 flex-none place-items-center rounded-full bg-ink text-[11px] font-black text-cream">
                                {i + 1}
                              </span>
                              {st.label}
                            </motion.div>
                          ))}

                      <div className="mt-1 flex items-end justify-between gap-3 border-t border-line pt-2 text-[12px] font-bold text-ink-soft">
                        <span>
                          {active.payment}
                          {paysWith ? ` · pagas con ${formatUsd(paysWith)} · vuelto ${formatUsd(change)}` : ""}
                          <br />
                          Envío {formatUsd(active.delivery)} · servicio {formatUsd(active.service)}
                        </span>
                        <b className="text-[20px] font-black text-ink">{formatUsd(total(active))}</b>
                      </div>
                      <span className="text-[12px] font-extrabold text-mandao-dark">{active.note}</span>
                      <div className="mt-1 flex gap-2">
                        <span className="flex-1 rounded-xl bg-mandao py-2.5 text-center text-[14px] font-black text-cream">
                          {active.kind === "pedido" ? `Pedir ${formatUsd(total(active))}` : "Enviar el mandado"}
                        </span>
                        <span className="rounded-xl bg-sand px-4 py-2.5 text-[14px] font-black">Editar</span>
                      </div>
                    </motion.div>

                    <motion.div
                      variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.45, ease } } }}
                      className="flex flex-col gap-2 rounded-2xl bg-white p-4"
                    >
                      <span className="text-[13px] font-black">¿Lo quieres distinto?</span>
                      <div className="flex flex-wrap gap-2">
                        {active.alternatives.map((a) => (
                          <span key={a} className="rounded-xl border border-line px-3 py-1.5 text-[12px] font-extrabold">
                            {a}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>

            <div className="mt-3 flex items-center gap-2">
              <div className="flex-1 rounded-2xl border border-line bg-white px-4 py-3 text-[13px] font-bold text-ink-muted">
                Pronto podrás escribir la tuya aquí
              </div>
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-morro text-cream">
                <Mic size={18} />
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
