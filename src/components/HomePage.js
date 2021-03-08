import React from "react";
import { Link } from "react-router-dom";

const styleHomePage = {
  height: "100%",
  width: "100%",
  backgroundColor: "#808080",
  borderRadius: "30px",
  padding: "1em",
};

function HomePage() {
  return (
    <div style={styleHomePage}>
      <h1>Nihongo tools</h1>
      <p>
        Dictionnaires de kanji, mot de vocabulaire, verbes, règles de
        grammaires, adjectifs, ...
      </p>
      <Link to="about" className="btn btn-primary">
        About
      </Link>
    </div>
  );
}

export default HomePage;
