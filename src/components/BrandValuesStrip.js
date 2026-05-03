import React from "react";
import { Handshake, Scale, ShieldCheck, Users } from "lucide-react";

const pillars = [
  { label: "INTEGRITY", Icon: ShieldCheck },
  { label: "EXPERTISE", Icon: Users },
  { label: "COMPLIANCE", Icon: Scale },
  { label: "COMMITMENT", Icon: Handshake }
];

export default function BrandValuesStrip() {
  return (
    <ul className="m-0 list-none p-0 flex flex-col gap-y-[clamp(0.3rem,0.7vw,0.55rem)]" aria-label="Core values">
      {pillars.map(({ label, Icon }) => (
        <li key={label} className="flex items-center gap-x-[clamp(0.45rem,0.9vw,0.7rem)]">
          <Icon
            className="size-[clamp(0.95rem,1.5vw,1.2rem)] shrink-0 text-brand-gold"
            strokeWidth={1.6}
            aria-hidden
          />
          <span className="font-['Montserrat',Inter,system-ui,sans-serif] text-[clamp(0.6rem,0.85vw,0.72rem)] font-bold uppercase leading-none tracking-[0.1em] text-[#002147]">
            {label}
          </span>
        </li>
      ))}
    </ul>
  );
}
