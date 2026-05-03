import React from "react";
import Masthead from "./components/Masthead";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OurExpertise from "./components/OurExpertise";
import PageAnchors from "./components/PageAnchors";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="site">
      <Masthead />
      <Navbar />
      <main className="main">
        <div className="section-band section-band--hero-pair">
          <Hero />
        </div>
        <div className="section-band section-band--white">
          <OurExpertise />
        </div>
        <PageAnchors />
      </main>
      <Footer />
    </div>
  );
}
