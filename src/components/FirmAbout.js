import React from "react";

const values = [
  {
    title: "Integrity and ethics",
    text: "We do what is right, not just what is permissible, so you can trust us with sensitive matters."
  },
  {
    title: "Excellence and quality",
    text: "Legal advice and services that draw on deep expertise and aim to exceed expectations."
  },
  {
    title: "Collaboration and teamwork",
    text: "We work as one team with you, bringing diverse skills to solve problems creatively."
  },
  {
    title: "Client-centric approach",
    text: "Your objectives shape our work; we tailor clear, practical solutions that add value."
  },
  {
    title: "Innovation and adaptability",
    text: "We stay ahead of changing law, strategy, and technology in India and the global market."
  },
  {
    title: "Social responsibility",
    text: "Pro bono, community work, and initiatives that promote access to justice and the rule of law."
  }
];

export default function FirmAbout() {
  return (
    <section className="section firm-about" id="about" aria-labelledby="about-heading">
      <div className="firm-about__intro">
        <h2 id="about-heading" className="section__title">
          About LawYal HR Advisors
        </h2>
        <p>
          LawYal HR Advisors is a law firm based in <strong>Gurugram (Haryana)</strong>, providing
          comprehensive legal solutions across a wide range of practice areas. Our team of seasoned
          attorneys and professionals brings a deep understanding of the law and a commitment to
          exceptional service, from corporate and M&amp;A to intellectual property, labour and
          employment, real estate, litigation, arbitration, and more, so we can act as a one-stop
          legal partner for businesses, individuals, and institutions.
        </p>
        <p>
          We work collaboratively to understand your challenges, stay current with a dynamic legal
          landscape in India, and deliver clear, forward-thinking advice. Ethical practice and
          confidentiality are the cornerstone of our firm: we protect and advance your interests
          with professionalism in every matter.
        </p>
      </div>
      <h3 className="firm-about__values-title" id="values-heading">
        Our values
      </h3>
      <ul className="values-grid" aria-labelledby="values-heading">
        {values.map((v) => (
          <li key={v.title} className="value-item">
            <h4 className="value-item__title">{v.title}</h4>
            <p className="value-item__text">{v.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
