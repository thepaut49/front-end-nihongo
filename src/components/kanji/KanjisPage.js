import React, { useState, useEffect } from "react";
import kanjiStore from "../../stores/kanjiStore";
import "./KanjisPage.css";
import KanjiList from "./KanjiList";
import { Link } from "react-router-dom";
import {
  loadKanjis,
  deleteKanji,
  filterKanjis,
} from "../../actions/kanjiActions";
import KanjiCriteriaForm from "./KanjiCriteriaForm";
import { radicals as radicalsList } from "../common/Radicals";
import { translateRomajiToKana } from "../common/TranslateRomajiToKana";

function KanjisPage(props) {
  const [kanjis, setKanjis] = useState(kanjiStore.getKanjis());
  const [kanjiCriteria, setKanjiCriteria] = useState({
    kanjiCriteria: "",
    pronunciationCriteria: "",
    meaningCriteria: "",
    strokeNumberCriteria: null,
    minStrokeNumber: null,
    maxStrokeNumber: null,
    radicalsCriteria: "",
    numberOfUse: null,
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    kanjiStore.addChangeListener(onChange);
    if (
      kanjiStore.getKanjis().length === 0 &&
      !kanjiCriteria.kanjiCriteria &&
      !kanjiCriteria.pronunciationCriteria &&
      !kanjiCriteria.meaningCriteria &&
      !kanjiCriteria.strokeNumberCriteria &&
      !kanjiCriteria.minStrokeNumber &&
      !kanjiCriteria.maxStrokeNumber &&
      !kanjiCriteria.radicalsCriteria
    )
      loadKanjis();
    return function () {
      kanjiStore.removeChangeListener(onChange); //cleanup on unmount
    };
  }, [kanjis.length, kanjiCriteria]);
  // le second arg [] empeche de relancer en boucle l'appel à l'api

  function onChange() {
    setKanjis(kanjiStore.getKanjis());
  }

  // fonction for criteria form
  function handleChange(event) {
    let newValue = event.target.value;
    if (event.target.name === "pronunciationCriteria") {
      newValue = translateRomajiToKana(newValue);
      let input = document.getElementById("pronunciationCriteria");
      input.value = newValue;
    }
    setKanjiCriteria({
      ...kanjiCriteria,
      [event.target.name]: newValue,
    });
  }

  function formIsValid() {
    const _errors = {};
    if (kanjiCriteria.radicalsCriteria.length > 0) {
      for (let i = 0; i < kanjiCriteria.radicalsCriteria.length; i++) {
        if (radicalsList.indexOf(kanjiCriteria.radicalsCriteria[i]) === -1) {
          _errors.radicals = "Some of the characters are not radicals.";
          break;
        }
      }
    }

    setErrors(_errors);
    // form is valid if the erros object has no properties
    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    const _kanji = {
      kanji: kanjiCriteria.kanjiCriteria,
      pronunciation: kanjiCriteria.pronunciationCriteria,
      meaning: kanjiCriteria.meaningCriteria,
      strokeNumber: kanjiCriteria.strokeNumberCriteria,
      minStrokeNumber: kanjiCriteria.minStrokeNumber,
      maxStrokeNumber: kanjiCriteria.maxStrokeNumber,
      radicals: kanjiCriteria.radicalsCriteria,
    };
    filterKanjis(_kanji);
  }

  function handleClick(event) {
    event.preventDefault();
    if (kanjiCriteria.radicalsCriteria.indexOf(event.target.innerText) > -1)
      setKanjiCriteria({
        ...kanjiCriteria,
        radicalsCriteria: kanjiCriteria.radicalsCriteria.replace(
          event.target.innerText,
          ""
        ),
      });
    else {
      setKanjiCriteria({
        ...kanjiCriteria,
        radicalsCriteria:
          kanjiCriteria.radicalsCriteria + event.target.innerText,
      });
    }
  }

  function handleReset(event) {
    // ne marche pas
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    setKanjiCriteria({
      kanjiCriteria: "",
      pronunciationCriteria: "",
      meaningCriteria: "",
      strokeNumberCriteria: null,
      minStrokeNumber: null,
      maxStrokeNumber: null,
      radicalsCriteria: "",
      numberOfUse: null,
    });
  }

  return (
    <div className="kanjisPage">
      <h2>Kanjis</h2>
      <KanjiCriteriaForm
        kanjiCriteria={kanjiCriteria}
        errors={errors}
        onChange={handleChange}
        onClick={handleClick}
        onSubmit={handleSubmit}
        onReset={handleReset}
      />
      <Link className="btn btn-primary" to="/kanji">
        Add Kanji
      </Link>
      <KanjiList kanjis={kanjis} deleteKanji={deleteKanji} />
    </div>
  );
}

export default KanjisPage;
