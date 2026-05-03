import React from "react";

export default function AboutStrip() {
  return (
    <section className="about-strip section-band section-band--light" id="about" aria-labelledby="about-heading">
      <div className="section about-strip__inner">
        <h2 id="about-heading" className="about-strip__title">
          About us
        </h2>
        <p className="about-strip__text">
          Lawyal HR &amp; Legal Advisors partners with organisations across India to strengthen HR
          foundations, industrial relations, and statutory compliance. We combine practical HR
          advisory with labour-law depth so leadership teams can act with clarity and confidence.
        </p>
      </div>
    </section>
  );
}
