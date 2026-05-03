import React from "react";

const hrServices = [
  { title: "New Labour Codes: compliance, audit & gap analysis" },
  { title: "Industrial relations & union management" },
  { title: "Disciplinary frameworks & domestic enquiries" },
  { title: "POSH compliance & workplace ethics" },
  { title: "HR policies, manuals & governance frameworks" },
  { title: "Contract labour & vendor compliance" },
  { title: "Health, safety & welfare compliance" },
  { title: "Statutory filings, registers & inspections" },
  { title: "Risk mitigation & litigation prevention" },
  { title: "Domestic enquiry & representation before labour authorities" },
  { title: "Counsel & representation: labour court / industrial tribunal" },
  {
    id: "training",
    title: "Disciplinary & misconduct management training: HR & line managers"
  }
];

const legalAreas = [
  {
    title: "Litigation & dispute resolution",
    text: "Civil and criminal litigation, courts across India, arbitration & mediation."
  },
  { title: "Legal strategy", text: "Long-term alignment, risk foresight, proactive solutions." },
  {
    title: "Due diligence & land acquisition",
    text: "End-to-end verification, regulatory compliance, transaction support."
  },
  {
    title: "Real estate & property",
    text: "Transactions, leasing, financing, development & construction."
  },
  { title: "Technology & media", text: "Data, digital media, software agreements, e-commerce." },
  {
    title: "Intellectual property",
    text: "Patents, trade marks, copyrights, strategy, licensing & enforcement."
  },
  { title: "Family law", text: "Marriage, divorce, custody, inheritance, with discretion." },
  {
    title: "Labour & employment",
    text: "Compliance, relations, policies, terminations, unions, aligned with our HR/ IR core."
  }
];

export default function Services() {
  return (
    <section className="section services" id="services" aria-labelledby="services-heading">
      <h2 id="services-heading" className="section__title section__title--center">
        Core services (HR, IR &amp; compliance)
      </h2>
      <p className="services__tagline">Building future-ready organisations</p>
      <div className="services__grid services__grid--hr">
        {hrServices.map((item) => (
          <article
            key={item.title}
            className="service-card"
            id={item.id}
          >
            <h3 className="service-card__title">{item.title}</h3>
          </article>
        ))}
      </div>

      <h3 className="section__title section__title--center services__legal-title" id="legal-breadth">
        Full-service legal capabilities
      </h3>
      <p className="section__subtitle services__legal-lede">
        As described in our firm profile, we also support clients across the wider legal landscape in
        India, alongside the HR, IR, and compliance work at the heart of our practice.
      </p>
      <div className="services__grid services__grid--legal">
        {legalAreas.map((item) => (
          <article key={item.title} className="service-card service-card--legal">
            <h3 className="service-card__title">{item.title}</h3>
            <p className="service-card__body">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
