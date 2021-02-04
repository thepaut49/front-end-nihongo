import React, { useState, useEffect } from "react";
import { getKanjis } from "../../api/kanjiApi";
import "./KanjiPage.css";
import KanjiList from "./KanjiList";
import { Link } from "react-router-dom";

function KanjisPage(props) {
  const [kanjis, setKanjis] = useState([]);

  useEffect(() => {
    getKanjis().then((_kanjis) => setKanjis(_kanjis));
  }, []);
  // le second arg [] empeche de relancer en boucle l'appel à l'api

  return (
    <>
      <h2>Kanjis</h2>
      <Link className="btn btn-primary" to="/kanji">
        Add Kanji
      </Link>
      <KanjiList kanjis={kanjis} />
    </>
  );
}

export default KanjisPage;
