"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { MessageCircle, Smartphone } from "lucide-react";
import { Morros } from "@/components/illustrations/Morros";
import { OrderTrackingCard } from "@/components/illustrations/OrderTrackingCard";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Counter } from "@/components/ui/Counter";
import { paymentMethods } from "@/content/landing";
import { site, whatsappLink } from "@/lib/site";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
const fade = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease },
});

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Container className="grid items-center gap-12 pb-20 pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:pb-28 lg:pt-16">
        <div className="relative z-10 flex flex-col gap-7">
          <motion.span
            {...fade(0)}
            className="inline-flex w-fit items-center gap-2 rounded-xl bg-white px-3.5 py-2 text-[13px] font-extrabold text-morro shadow-card"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-morro opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-morro" />
            </span>
            Ahora en {site.city}
          </motion.span>

          <motion.h1
            {...fade(0.08)}
            className="text-balance text-[52px] font-black leading-[0.98] tracking-tight sm:text-[68px] lg:text-[80px]"
          >
            Lo pides,
            <br />
            te llega.
          </motion.h1>

          <motion.p {...fade(0.16)} className="max-w-xl text-pretty text-[19px] leading-relaxed text-ink-soft sm:text-[21px]">
            Comida, farmacia, abasto o ese mandao que no te da tiempo de hacer. Un rider de San Juan te lo lleva a la
            puerta en menos de {site.pilot.maxMinutes} minutos. Pagas como quieras.
          </motion.p>

          <motion.div {...fade(0.24)} className="flex flex-wrap gap-3">
            <Button href={site.app.android} size="lg">
              <Smartphone size={20} /> Descargar para Android
            </Button>
            <Button href={whatsappLink("Hola Mandaíto, quiero hacer un pedido.")} variant="secondary" size="lg">
              <MessageCircle size={20} /> Pedir por WhatsApp
            </Button>
          </motion.div>

          <motion.ul {...fade(0.3)} className="flex flex-wrap gap-2" aria-label="Métodos de pago">
            {paymentMethods.map((m) => (
              <li key={m} className="rounded-xl border border-line bg-cream px-3 py-1.5 text-[13px] font-extrabold text-ink">
                {m}
              </li>
            ))}
          </motion.ul>

          <motion.dl {...fade(0.36)} className="mt-2 grid grid-cols-3 gap-6 border-t border-line pt-6">
            <div className="flex flex-col">
              <dt className="order-2 text-[13px] font-bold text-ink-soft">envío en el centro durante el piloto</dt>
              <dd className="order-1 text-[32px] font-black leading-none">
                <Counter to={site.pilot.deliveryFeeUsd} prefix="$" />
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="order-2 text-[13px] font-bold text-ink-soft">minutos o menos, prometido</dt>
              <dd className="order-1 text-[32px] font-black leading-none">
                <Counter to={site.pilot.maxMinutes} />
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="order-2 text-[13px] font-bold text-ink-soft">comisión al comercio, sin letra pequeña</dt>
              <dd className="order-1 text-[32px] font-black leading-none">
                <Counter to={site.pilot.commissionPercent} suffix=" %" />
              </dd>
            </div>
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40, rotate: -2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease }}
          className="relative z-10 flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="absolute -inset-3 -z-10 rounded-[40px] bg-mandao/90 sm:-inset-6" />
            <div className="absolute inset-x-0 -bottom-6 -z-10 h-40 overflow-hidden rounded-b-[40px]">
              <Morros tone="green" />
            </div>
            <div className="animate-float">
              <OrderTrackingCard />
            </div>
          </div>
        </motion.div>
      </Container>

      {site.images.morrosPhoto ? (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-0 h-64 lg:h-[420px]">
          <Image
            src={site.images.morrosPhoto}
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-[center_30%]"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-cream via-cream/75 to-morro/40" />
        </div>
      ) : (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-0 h-48 opacity-[0.12] lg:h-64">
          <Morros />
        </div>
      )}
    </section>
  );
}
