import React from "react";

const blocks = [
  {
    id: "industries",
    title: "Industries",
    text: "Manufacturing, services, tech-enabled ventures, and regulated sectors: solutions tailored to your operating context."
  },
  {
    id: "insights",
    title: "Insights",
    text: "Perspectives on labour law updates, workplace governance, and dispute prevention."
  },
  {
    id: "careers",
    title: "Careers",
    text: "We welcome practitioners who value integrity, rigour, and client outcomes. Reach out via contact."
  }
];

export default function PageAnchors() {
  return (
    <>
      {blocks.map(({ id, title, text }) => (
        <section
          key={id}
          className="anchor-block section-band section-band--white"
          id={id}
          aria-labelledby={`${id}-heading`}
        >
          <div className="section anchor-block__inner">
            <h2 id={`${id}-heading`} className="anchor-block__title">
              {title}
            </h2>
            <p className="anchor-block__text">{text}</p>
          </div>
        </section>
      ))}
    </>
  );
}
