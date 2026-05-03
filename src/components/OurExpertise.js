import React from "react";
import { Users, Scale, FilePen, Handshake, ShieldCheck, Building2 } from "lucide-react";

const items = [
  {
    title: "HR Advisory",
    text: "People Strategy | HR Policies | Organization Effectiveness",
    Icon: Users
  },
  {
    title: "Labour Law Advisory",
    text: "Compliance | Risk Management | Contract Labour | Audits",
    Icon: Scale
  },
  {
    title: "Litigation & Disputes",
    text: "Industrial Disputes | Claims | Representations | Proceedings",
    Icon: FilePen
  },
  {
    title: "Industrial Relations",
    text: "Union Management | Negotiations | Settlement Support",
    Icon: Handshake
  },
  {
    title: "Compliance & Governance",
    text: "Policies | Training | Investigations | Ethics & Conduct",
    Icon: ShieldCheck
  },
  {
    title: "Industry Solutions",
    text: "Tailored Solutions for Diverse Industries",
    Icon: Building2
  }
];

export default function OurExpertise() {
  return (
    <section className="expertise section" id="services" aria-labelledby="expertise-heading">
      <div className="expertise__head">
        <span className="expertise__rule" aria-hidden />
        <h2 id="expertise-heading" className="expertise__title">
          OUR EXPERTISE
        </h2>
        <span className="expertise__rule" aria-hidden />
      </div>
      <ul className="expertise__grid">
        {items.map(({ title, text, Icon }) => (
          <li key={title} className="expertise-card">
            <div className="expertise-card__icon">
              <Icon size={44} strokeWidth={1.5} aria-hidden />
            </div>
            <h3 className="expertise-card__title">{title}</h3>
            <p className="expertise-card__body">{text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
