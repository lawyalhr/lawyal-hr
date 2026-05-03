import React from "react";

const items = [
  {
    title: "HR Advisory",
    text: "People Strategy | HR Policies | Organization Effectiveness",
    icon: "people"
  },
  {
    title: "Labour Law Advisory",
    text: "Compliance | Risk Management | Contract Labour | Audits",
    icon: "scales"
  },
  {
    title: "Litigation & Disputes",
    text: "Industrial Disputes | Claims | Representations | Proceedings",
    icon: "document"
  },
  {
    title: "Industrial Relations",
    text: "Union Management | Negotiations | Settlement Support",
    icon: "handshake"
  },
  {
    title: "Compliance & Governance",
    text: "Policies | Training | Investigations | Ethics & Conduct",
    icon: "shield"
  },
  {
    title: "Industry Solutions",
    text: "Tailored Solutions for Diverse Industries",
    icon: "buildings"
  }
];

function ExpertiseIcon({ name }) {
  const stroke = "currentColor";
  const common = { fill: "none", stroke, strokeWidth: 1.65, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "people":
      return (
        <svg viewBox="0 0 24 24" width="36" height="36" aria-hidden>
          <circle {...common} cx="9" cy="8" r="2.5" />
          <circle {...common} cx="15" cy="9" r="2.5" />
          <path {...common} d="M5 20v-1a4 4 0 014-4h0a4 4 0 014 4v1M13 20v-1a4 4 0 013.7-4" />
        </svg>
      );
    case "scales":
      return (
        <svg viewBox="0 0 24 24" width="36" height="36" aria-hidden>
          <path {...common} d="M12 3v18M5 7l3 6h8l3-6M9 13h6M8 21h8" />
        </svg>
      );
    case "document":
      return (
        <svg viewBox="0 0 24 24" width="36" height="36" aria-hidden>
          <path {...common} d="M14 2H8a2 2 0 00-2 2v16l4-2 4 2V4a2 2 0 00-2-2zM10 9h4M10 13h4" />
        </svg>
      );
    case "handshake":
      return (
        <svg viewBox="0 0 24 24" width="36" height="36" aria-hidden>
          <path
            {...common}
            d="M4 14l3.5 3.5a2 2 0 002.8 0l1.4-1.4M10 12l2 2M14 10l2 2M16 8l2 2M18 6l2 2M8 16l-4-4"
          />
        </svg>
      );
    case "shield":
      return (
        <svg viewBox="0 0 24 24" width="36" height="36" aria-hidden>
          <path {...common} d="M12 3l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V7l8-4z" />
        </svg>
      );
    case "buildings":
      return (
        <svg viewBox="0 0 24 24" width="36" height="36" aria-hidden>
          <path {...common} d="M4 21V8l4-2v15M8 6l8-3v18M8 6v15M16 3v18M12 21h8" />
        </svg>
      );
    default:
      return null;
  }
}

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
        {items.map(({ title, text, icon }) => (
          <li key={title} className="expertise-card">
            <div className="expertise-card__icon">
              <ExpertiseIcon name={icon} />
            </div>
            <h3 className="expertise-card__title">{title}</h3>
            <p className="expertise-card__body">{text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
