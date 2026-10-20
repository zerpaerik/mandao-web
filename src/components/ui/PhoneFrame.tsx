import Image from "next/image";
import { cn } from "@/lib/utils";

interface PhoneFrameProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

/** A real app screenshot (390×844) inside a simple dark phone bezel. */
export function PhoneFrame({ src, alt, className, priority = false }: PhoneFrameProps) {
  return (
    <div
      className={cn(
        "relative aspect-[390/844] overflow-hidden rounded-[40px] border-[7px] border-ink bg-ink shadow-float",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 320px, 70vw"
        className="rounded-[32px] object-cover"
        priority={priority}
      />
    </div>
  );
}
