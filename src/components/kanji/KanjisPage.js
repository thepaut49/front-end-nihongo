import React, { useState, useEffect } from "react";
import kanjiStore from "../../stores/kanjiStore";
import "./KanjiPage.css";
import KanjiList from "./KanjiList";
import { Link } from "react-router-dom";
import { loadKanjis, deleteKanji } from "../../actions/kanjiActions";

function KanjisPage(props) {
  const [kanjis, setKanjis] = useState(kanjiStore.getKanjis());

  useEffect(() => {
    kanjiStore.addChangeListener(onChange);
    if (kanjiStore.getKanjis().length === 0) loadKanjis();
    return function () {
      kanjiStore.removeChangeListener(onChange); //cleanup on unmount
    };
  }, [kanjis.length]);
  // le second arg [] empeche de relancer en boucle l'appel à l'api

  function onChange() {
    setKanjis(kanjiStore.getKanjis());
  }

  return (
    <>
      <h2>Kanjis</h2>
      <Link className="btn btn-primary" to="/kanji">
        Add Kanji
      </Link>
      <br />
      <br />
      <KanjiList kanjis={kanjis} deleteKanji={deleteKanji} />
    </>
  );
}

export default KanjisPage;
