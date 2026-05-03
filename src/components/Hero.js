import React from "react";
import { HERO_MEETING_IMAGE_SRC } from "../heroImage";

/** Visible hero messaging is only from this markup, never from the PNG. */
export default function Hero() {
  return (
    <section className="hero-pair" aria-labelledby="hero-heading">
      <div className="hero-pair__shell">
        <div
          className="hero-pair__media-bg"
          role="img"
          aria-label="Professionals collaborating in a modern workplace"
          style={{ backgroundImage: `url(${HERO_MEETING_IMAGE_SRC})` }}
        />
        <div className="hero-pair__copy">
          <div className="hero-pair__copy-inner">
            <h1 id="hero-heading" className="hero-pair__title">
              <span className="hero-pair__title-line hero-pair__title-line--white">
                Strategic HR &amp; Legal Solutions.
              </span>{" "}
              <span className="hero-pair__title-line hero-pair__title-line--gold">
                Trusted Advisors.
              </span>
            </h1>
            <span className="hero-pair__title-rule" aria-hidden="true" />
            <p className="hero-pair__lede">
              We help organizations navigate complex laws, strengthen workplaces and drive sustainable
              growth through practical, compliant and people-centric solutions.
            </p>
          </div>
          <div className="hero-pair__actions">
            <a className="btn btn--gold btn--hero-primary" href="#services">
              OUR SERVICES
            </a>
          </div>
        </div>
        <div className="hero-pair__about" id="about">
          <div className="hero-pair__about-inner">
            <h2 className="hero-pair__about-title">ABOUT US</h2>
            <p className="hero-pair__about-text">
              Lawyal HR &amp; Legal Advisors partners with organisations across India to strengthen HR
              foundations, industrial relations, and statutory compliance. We combine practical HR
              advisory with labour-law depth so leadership teams can act with clarity and confidence.
            </p>
          </div>
          <a className="btn btn--gold btn--hero-primary hero-pair__about-cta" href="#contact">
            CONSULT WITH US
          </a>
        </div>
      </div>
    </section>
  );
}
