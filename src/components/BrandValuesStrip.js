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
    <ul className="m-0 list-none p-0 flex flex-col gap-y-[clamp(0.3rem,0.7vw,0.55rem)] ml-auto" aria-label="Core values">
      {pillars.map(({ label, Icon }) => (
        <li key={label} className="flex items-center gap-x-[clamp(0.45rem,0.9vw,0.7rem)]">
          <Icon
            className="size-[clamp(1.1rem,1.8vw,1.45rem)] shrink-0 text-brand-gold"
            strokeWidth={2.2}
            aria-hidden
          />
          <span className="font-['Montserrat',Inter,system-ui,sans-serif] text-[clamp(0.68rem,0.95vw,0.82rem)] font-extrabold uppercase leading-none tracking-[0.1em] text-[#002147]">
            {label}
          </span>
        </li>
      ))}
    </ul>
  );
}
