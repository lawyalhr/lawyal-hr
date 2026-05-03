import React from "react";

const coreServices = [
  {
    title: "New Labour Codes — Gap Analysis & Implementation",
    text: "Wage restructuring, standing orders revision, policy alignment, compliance readiness audits, and end-to-end implementation roadmap under the four New Labour Codes."
  },
  {
    title: "Statutory Compliance & Risk Management",
    text: "Central & State labour law audits, PF, ESI, Bonus, Gratuity, Contract Labour compliance, employer liability advisory, and statutory documentation."
  },
  {
    title: "Domestic Enquiry & Disciplinary Frameworks",
    text: "Drafting charge sheets, conducting domestic enquiries, acting as Independent Enquiry Officer, and providing legally sustainable termination advisory."
  },
  {
    title: "HR Policies & Governance",
    text: "HR policy review, employee handbooks, code of conduct, performance management systems, compensation benchmarking, and executive employment contracts."
  },
  {
    title: "Industrial Relations Strategy",
    text: "Union negotiations, collective bargaining, grievance handling, discipline management, and structured dispute resolution frameworks."
  },
  {
    title: "Government Liaisoning",
    text: "Representation before Labour Departments, inspections handling, registrations, approvals, and statutory responses across Gurgaon, NCR, Uttarakhand, and Pan India."
  },
  {
    title: "Litigation & Court Representation",
    text: "Appearances before Industrial Tribunals and conciliation proceedings, plus labour dispute advisory across Gurgaon, NCR, Uttarakhand, and Pan India."
  }
];

const engagementModels = [
  { title: "Retainer-based HR & IR Advisory", text: "Ongoing strategic advisory on a monthly retainer — your dedicated HR and IR counsel." },
  { title: "Project-based Labour Code Implementation", text: "Scoped engagement to assess, plan, and implement compliance under the New Labour Codes." },
  { title: "Domestic Enquiry Assignments", text: "End-to-end domestic enquiry support as Independent Enquiry Officer or advisory counsel." },
  { title: "Compliance Audit Mandates", text: "Structured audits of Central and State labour law compliance, with gap reports and remediation plans." },
  { title: "IR Crisis Intervention", text: "Rapid response support during union disputes, strikes, or escalating industrial relations situations." },
  { title: "Tribunal Representation", text: "Representation before Industrial Tribunals, Labour Courts, and conciliation authorities across India." }
];

const trainingAudit = [
  { title: "POSH Compliance & Training", text: "Prevention of Sexual Harassment Act 2013 — ICC setup, awareness training, investigations, and annual reporting." },
  { title: "Shopfloor Discipline & Misconduct", text: "Practical training on Labour Codes, misconduct handling, and disciplinary procedure for HR and line managers." },
  { title: "Domestic Enquiry & Natural Justice", text: "Training on Principles of Natural Justice, enquiry conduct, and legally defensible disciplinary outcomes." },
  { title: "Grievance Handling & Communication", text: "Structured grievance redressal, employee communication skills, and conflict de-escalation." },
  { title: "IR Sensitisation", text: "Industrial Relations awareness for managers — union dynamics, collective bargaining, and workmen engagement." },
  { title: "Documentation & Legal Risk", text: "HR documentation practices, legal risk identification, and building audit-ready records." },
  { title: "New Labour Codes Audit", text: "Gap analysis on Code on Wages, Industrial Relations Code, Social Security Code, and OSH Code — with actionable remediation." },
  { title: "HR Risk & Shopfloor Audit", text: "Assessment of payroll structures, service conditions, HR policies/manual, health, safety & welfare compliance, and grievance redressal mechanisms." }
];

export default function Services() {
  return (
    <section className="section services" id="services" aria-labelledby="services-heading">

      <h2 id="services-heading" className="section__title section__title--center">
        Core Practice Areas
      </h2>
      <p className="services__tagline">HR, IR &amp; Labour Law — end to end</p>
      <div className="services__grid services__grid--hr">
        {coreServices.map((item) => (
          <article key={item.title} className="service-card service-card--legal">
            <h3 className="service-card__title">{item.title}</h3>
            <p className="service-card__body">{item.text}</p>
          </article>
        ))}
      </div>

      <h3 className="section__title section__title--center services__legal-title" id="engagement-heading">
        Engagement Models
      </h3>
      <p className="section__subtitle services__legal-lede">
        Flexible mandates designed around how you need support — from ongoing retainers to crisis intervention.
      </p>
      <div className="services__grid services__grid--legal">
        {engagementModels.map((item) => (
          <article key={item.title} className="service-card service-card--legal">
            <h3 className="service-card__title">{item.title}</h3>
            <p className="service-card__body">{item.text}</p>
          </article>
        ))}
      </div>

      <h3 className="section__title section__title--center services__legal-title" id="training-heading">
        Training &amp; Audit
      </h3>
      <p className="section__subtitle services__legal-lede">
        Preventive training programmes and compliance audits that build long-term organisational resilience.
      </p>
      <div className="services__grid services__grid--legal">
        {trainingAudit.map((item) => (
          <article key={item.title} className="service-card service-card--legal">
            <h3 className="service-card__title">{item.title}</h3>
            <p className="service-card__body">{item.text}</p>
          </article>
        ))}
      </div>

    </section>
  );
}
