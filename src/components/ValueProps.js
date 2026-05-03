import React from "react";

const why = [
  {
    title: "Corporate HR leadership + statutory expertise",
    text: "Our founders led HR at MNCs and large manufacturers for 30+ years — combining boardroom insight with deep knowledge of Central and State Labour Laws."
  },
  {
    title: "Preventive approach",
    text: "We build systems that eliminate disputes before they arise — avoiding litigation, regulatory scrutiny, and industrial unrest proactively."
  },
  {
    title: "Implementation-driven advisory",
    text: "Practical, ground-level solutions you can actually deploy — not theoretical compliance checklists or generic legal opinions."
  },
  {
    title: "Unionised manufacturing experience",
    text: "Proven in complex, unionised manufacturing environments where IR stability and shopfloor discipline are business-critical."
  },
  {
    title: "Litigation-ready documentation",
    text: "Defensible HR systems, audit-ready registers, and charge-sheet frameworks that withstand tribunal and regulatory scrutiny."
  },
  {
    title: "Business-aligned compliance",
    text: "Statutory obligations integrated with operational continuity — ensuring organisations remain protected without disrupting business flow."
  }
];

export default function ValueProps() {
  return (
    <section className="section why-us" id="why" aria-labelledby="why-heading">
      <h2 id="why-heading" className="section__title section__title--center">
        What Sets Us Apart
      </h2>
      <p className="section__subtitle why-us__subtitle">
        Strong compliance. Structured discipline. Industrial harmony.
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
