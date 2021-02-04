import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="jumbotron">
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
