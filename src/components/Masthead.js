import React from "react";
import BrandValuesStrip from "./BrandValuesStrip";

const ICON_SRC = "/images/logo-icon.png";

export default function Masthead() {
  return (
    <div className="masthead" id="top">
      <div className="masthead__inner">
        <div className="masthead__logo-slot">
          <img
            className="masthead__logo-img"
            src={ICON_SRC}
            alt="Lawyal HR &amp; Legal Advisors"
            width="1166"
            height="510"
            loading="eager"
            decoding="async"
          />
        </div>
        <div className="masthead__divider" aria-hidden="true" />
        <div className="masthead__brand-text">
          <span className="masthead__brand-primary">LAWYAL</span>
          <span className="masthead__brand-sub">
            <span className="masthead__brand-sub-hr">HR</span> &amp; Legal Advisors
          </span>
          <span className="masthead__brand-tagline">
            <span className="masthead__brand-rule" aria-hidden="true" />
            HR Solutions. Legally Strong.
            <span className="masthead__brand-rule" aria-hidden="true" />
          </span>
        </div>
        <div className="masthead__divider" aria-hidden="true" />
        <BrandValuesStrip />
      </div>
    </div>
  );
}
