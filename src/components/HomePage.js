import React from "react";
import { Link } from "react-router-dom";

const styleHomePage = {
  height: "100%",
  width: "100%",
  backgroundColor: "rgba(38, 113, 22, 0.48)",
  borderRadius: "30px",
  padding: "1em",
};

function HomePage() {
  return (
    <div style={styleHomePage}>
      <h1>Nihongo tools</h1>
      <ul>
        <li>List of Kanjis with search criteria</li>
        <li>List of Verbs + their conjugation</li>
        <li>List of Na-Adjectives + their conjugation</li>
        <li>List of I-Adjectives + their conjugation</li>
        <li>Grammar rules</li>
        <li>List of Particules</li>
        <li>List of Names</li>
        <li>List of words</li>
        <li>Translation area</li>
      </ul>

      <Link to="about" className="btn btn-primary">
        About
      </Link>
    </div>
  );
}

export default HomePage;
