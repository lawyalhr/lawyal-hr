import React from "react";

const links = [
  { href: "#top", label: "HOME" },
  { href: "#about", label: "ABOUT US" },
  { href: "#services", label: "SERVICES" },
  { href: "#industries", label: "INDUSTRIES" },
  { href: "#insights", label: "INSIGHTS" },
  { href: "#careers", label: "CAREERS" },
  { href: "#contact", label: "CONTACT US" }
];

export default function Navbar() {
  return (
    <nav className="site-nav" aria-label="Main">
      <div className="site-nav__inner">
        {links.map(({ href, label }) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
