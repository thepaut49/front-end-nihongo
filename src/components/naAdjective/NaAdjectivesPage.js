import React, { useState, useEffect } from "react";
import naAdjectiveStore from "../../stores/naAdjectiveStore";
import "./NaAdjectivesPage.css";
import NaAdjectiveList from "./NaAdjectiveList";
import { Link } from "react-router-dom";
import {
  loadNaAdjectives,
  deleteNaAdjective,
  filterNaAdjectives,
} from "../../actions/naAdjectiveActions";
import NaAdjectiveCriteriaForm from "./NaAdjectiveCriteriaForm";
import { translateRomajiToKana } from "../common/TranslateRomajiToKana";

function NaAdjectivesPage(props) {
  const [naAdjectives, setNaAdjectives] = useState(
    naAdjectiveStore.getNaAdjectives()
  );
  const [naAdjectiveCriteria, setNaAdjectiveCriteria] = useState({
    kanjisCriteria: "",
    pronunciationCriteria: "",
    meaningCriteria: "",
  });

  useEffect(() => {
    naAdjectiveStore.addChangeListener(onChange);
    if (
      naAdjectiveStore.getNaAdjectives().length === 0 &&
      !naAdjectiveCriteria.kanjisCriteria &&
      !naAdjectiveCriteria.pronunciationCriteria &&
      !naAdjectiveCriteria.meaningCriteria
    )
      loadNaAdjectives();
    return function () {
      naAdjectiveStore.removeChangeListener(onChange); //cleanup on unmount
    };
  }, [naAdjectives.length, naAdjectiveCriteria]);
  // le second arg [] empeche de relancer en boucle l'appel à l'api

  function onChange() {
    setNaAdjectives(naAdjectiveStore.getNaAdjectives());
  }

  // fonction for criteria form

  function handleChange(event) {
    let newValue = event.target.value;
    if (event.target.name === "pronunciationCriteria") {
      newValue = translateRomajiToKana(newValue);
      let input = document.getElementById("pronunciationCriteria");
      input.value = newValue;
    }
    setNaAdjectiveCriteria({
      ...naAdjectiveCriteria,
      [event.target.name]: newValue,
    });
  }

  function handleReset(event) {
    // ne marche pas
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    setNaAdjectiveCriteria({
      kanjisCriteria: "",
      pronunciationCriteria: "",
      meaningCriteria: "",
    });
  }

  function handleClick(event) {
    let input = document.getElementById("pronunciationCriteria");
    input.value = input.value + event.target.innerText;
    setNaAdjectiveCriteria({
      ...naAdjectiveCriteria,
      pronunciationCriteria:
        naAdjectiveCriteria.pronunciationCriteria + event.target.innerText,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const _naAdjective = {
      kanjis: naAdjectiveCriteria.kanjisCriteria,
      pronunciation: naAdjectiveCriteria.pronunciationCriteria,
      meaning: naAdjectiveCriteria.meaningCriteria,
    };
    filterNaAdjectives(_naAdjective);
  }

  return (
    <div className="naAdjectivesPage">
      <h2>Na-Adjectives</h2>
      <NaAdjectiveCriteriaForm
        naAdjectiveCriteria={naAdjectiveCriteria}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onClick={handleClick}
        onReset={handleReset}
      />
      <Link className="btn btn-primary" to="/naAdjective">
        Add NaAdjective
      </Link>
      <NaAdjectiveList
        naAdjectives={naAdjectives}
        deleteNaAdjective={deleteNaAdjective}
      />
    </div>
  );
}

export default NaAdjectivesPage;
