import React from "react";

const why = [
  {
    title: "Prevention over cure",
    text: "We work to eliminate disputes before they arise."
  },
  {
    title: "Integrated expertise",
    text: "HR, IR & legal perspective under one roof."
  },
  {
    title: "Deep industry experience",
    text: "Proven in manufacturing and complex environments."
  },
  {
    title: "Compliance assurance",
    text: "Audit-ready, risk-aware operations."
  },
  {
    title: "Industrial harmony",
    text: "Stable, union-sensitive workforce management."
  },
  {
    title: "Practical approach",
    text: "Ground-level, implementable solutions, not theory alone."
  },
  {
    title: "Cost optimisation",
    text: "Improve efficiency without unnecessary overhead."
  },
  {
    title: "Leadership alignment",
    text: "Partnering with CXOs for strategic outcomes."
  },
  {
    title: "End-to-end ownership",
    text: "From policy design through execution."
  }
];

export default function ValueProps() {
  return (
    <section className="section why-us" id="why" aria-labelledby="why-heading">
      <h2 id="why-heading" className="section__title section__title--center">
        Why LawYal HR Advisors
      </h2>
      <p className="section__subtitle why-us__subtitle">
        Compliance assured. Disputes prevented. Future-ready organisations.
      </p>
      <ul className="why-grid">
        {why.map((item) => (
          <li key={item.title} className="why-card">
            <h3 className="why-card__title">{item.title}</h3>
            <p className="why-card__text">{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
