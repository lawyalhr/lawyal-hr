import React from "react";
import { Users, Scale, FilePen, Handshake, ShieldCheck, Building2 } from "lucide-react";

const items = [
  {
    title: "HR Advisory",
    text: "HR Policies | Handbooks | Compensation Benchmarking | Performance Management",
    Icon: Users
  },
  {
    title: "Labour Law Advisory",
    text: "New Labour Codes | PF & ESI | Bonus & Gratuity | Contract Labour",
    Icon: Scale
  },
  {
    title: "Litigation & Disputes",
    text: "Industrial Tribunals | Conciliation Proceedings | Gurgaon / NCR / Pan India",
    Icon: FilePen
  },
  {
    title: "Industrial Relations",
    text: "Union Negotiations | Collective Bargaining | Grievance Handling | Discipline",
    Icon: Handshake
  },
  {
    title: "Compliance & Governance",
    text: "POSH Compliance | Workplace Ethics | Statutory Audits | Risk Management",
    Icon: ShieldCheck
  },
  {
    title: "Industry Solutions",
    text: "Manufacturing | Shopfloor Excellence | Unionised Environments | MNCs",
    Icon: Building2
  }
];

export default function OurExpertise() {
  return (
    <section className="expertise" id="expertise" aria-labelledby="expertise-heading">
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
            <ul className="expertise-card__bullets">
              {text.split(" | ").map(b => <li key={b}>{b}</li>)}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
