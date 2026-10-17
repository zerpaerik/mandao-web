"use client";

import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const statuses = ["Aceptado", "Preparando", "En camino", "Llegó"] as const;

/** Path the rider follows on the mini map (in the 320x200 viewBox). */
const route: Array<[number, number]> = [
  [36, 160],
  [110, 160],
  [110, 100],
  [200, 100],
  [200, 48],
  [284, 48],
];

const headlines: Record<(typeof statuses)[number], string> = {
  Aceptado: "Burger La Esquina aceptó tu pedido",
  Preparando: "Están preparando tu mandao",
  "En camino": "Tu mandao va en camino",
  Llegó: "Llegó. ¡Buen provecho!",
};

/**
 * Animated phone card: cycles through the order states while the rider dot travels the route.
 * Pure illustration, no real data.
 */
export function OrderTrackingCard({ className }: { className?: string }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setStep((s) => (s + 1) % statuses.length), 3200);
    return () => window.clearInterval(id);
  }, []);

  const status = statuses[step];
  const progress = step / (statuses.length - 1);
  const pointIndex = Math.round(progress * (route.length - 1));
  const [cx, cy] = route[pointIndex];
  const minutes = [28, 19, 12, 0][step];

  return (
    <div
      className={cn(
        "w-[320px] overflow-hidden rounded-[32px] border border-line bg-cream shadow-float",
        className,
      )}
      aria-hidden="true"
    >
      <div className="relative h-[200px] bg-[#EDE3D6]">
        <svg viewBox="0 0 320 200" className="absolute inset-0 h-full w-full">
          <path d="M0 60h320M0 120h320M60 0v200M150 0v200M240 0v200" stroke="#FFFFFF" strokeWidth="10" />
          <polyline
            points={route.map((p) => p.join(",")).join(" ")}
            fill="none"
            stroke="#E8611A"
            strokeWidth="4"
            strokeDasharray="8 6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx={36} cy={160} r="9" fill="#1F6B4F" stroke="#FFF3E8" strokeWidth="3" />
          <circle cx={284} cy={48} r="9" fill="#2B2724" stroke="#FFF3E8" strokeWidth="3" />
          <motion.g animate={{ x: cx, y: cy }} transition={{ type: "spring", stiffness: 60, damping: 16 }}>
            <circle r="16" fill="#E8611A" className="animate-pulse-soft" opacity="0.35" />
            <circle r="13" fill="#E8611A" stroke="#FFF3E8" strokeWidth="4" />
            <circle r="5" fill="#FFF3E8" />
          </motion.g>
        </svg>
        <span className="absolute left-12 top-[150px] rounded-lg bg-cream px-2 py-1 text-[11px] font-extrabold text-morro">
          Burger La Esquina
        </span>
        <span className="absolute left-[226px] top-[14px] rounded-lg bg-ink px-2 py-1 text-[11px] font-extrabold text-cream">
          Tu casa
        </span>
      </div>

      <div className="-mt-5 flex flex-col gap-4 rounded-t-[28px] bg-cream p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex min-h-[52px] flex-col gap-1">
            <span className="text-[12px] font-bold text-ink-soft">Pedido #1042</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={status}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3 }}
                className="text-[18px] font-black leading-tight"
              >
                {headlines[status]}
              </motion.span>
            </AnimatePresence>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[26px] font-black leading-none text-mandao">{minutes}</span>
            <span className="text-[11px] font-bold text-ink-soft">min aprox.</span>
          </div>
        </div>

        <ol className="grid grid-cols-4 gap-1.5">
          {statuses.map((s, i) => (
            <li key={s} className="flex flex-col gap-1.5">
              <span
                className={cn(
                  "h-1.5 rounded-full transition-colors duration-500",
                  i < step ? "bg-morro" : i === step ? "bg-mandao" : "bg-line",
                )}
              />
              <span
                className={cn(
                  "text-[10px] font-extrabold",
                  i < step ? "text-morro" : i === step ? "text-mandao" : "text-ink-muted",
                )}
              >
                {s}
              </span>
            </li>
          ))}
        </ol>

        <div className="flex items-center gap-3 rounded-2xl bg-white p-3">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-sun text-[13px] font-black text-[#633806]">
            JR
          </span>
          <div className="flex flex-1 flex-col">
            <span className="text-[13px] font-extrabold">José R. · chaleco #07</span>
            <span className="text-[11px] font-bold text-ink-soft">Vuelto $5,50 listo</span>
          </div>
          <span className="grid h-9 w-9 place-items-center rounded-full bg-cream text-ink">
            <Phone size={16} />
          </span>
          <span className="grid h-9 w-9 place-items-center rounded-full bg-morro text-cream">
            <MessageCircle size={16} />
          </span>
        </div>
      </div>
    </div>
  );
}
