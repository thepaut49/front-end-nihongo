import React, { useState, useEffect } from "react";
import iAdjectiveStore from "../../stores/iAdjectiveStore";
import "./IAdjectivesPage.css";
import IAdjectiveList from "./IAdjectiveList";
import { Link } from "react-router-dom";
import {
  loadIAdjectives,
  deleteIAdjective,
  filterIAdjectives,
} from "../../actions/iAdjectiveActions";
import IAdjectiveCriteriaForm from "./IAdjectiveCriteriaForm";
import { translateRomajiToKana } from "../common/TranslateRomajiToKana";

function IAdjectivesPage(props) {
  const [iAdjectives, setIAdjectives] = useState(
    iAdjectiveStore.getIAdjectives()
  );
  const [iAdjectiveCriteria, setIAdjectiveCriteria] = useState({
    kanjisCriteria: "",
    pronunciationCriteria: "",
    meaningCriteria: "",
  });

  useEffect(() => {
    iAdjectiveStore.addChangeListener(onChange);
    if (
      iAdjectiveStore.getIAdjectives().length === 0 &&
      !iAdjectiveCriteria.kanjisCriteria &&
      !iAdjectiveCriteria.pronunciationCriteria &&
      !iAdjectiveCriteria.meaningCriteria
    )
      loadIAdjectives();
    return function () {
      iAdjectiveStore.removeChangeListener(onChange); //cleanup on unmount
    };
  }, [iAdjectives.length, iAdjectiveCriteria]);
  // le second arg [] empeche de relancer en boucle l'appel à l'api

  function onChange() {
    setIAdjectives(iAdjectiveStore.getIAdjectives());
  }

  // fonction for criteria form

  function handleChange(event) {
    let newValue = event.target.value;
    if (event.target.name === "pronunciationCriteria") {
      newValue = translateRomajiToKana(newValue);
      let input = document.getElementById("pronunciationCriteria");
      input.value = newValue;
    }
    setIAdjectiveCriteria({
      ...iAdjectiveCriteria,
      [event.target.name]: newValue,
    });
  }

  function handleReset(event) {
    // ne marche pas
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    setIAdjectiveCriteria({
      kanjisCriteria: "",
      pronunciationCriteria: "",
      meaningCriteria: "",
    });
  }

  function handleClick(event) {
    let input = document.getElementById("pronunciationCriteria");
    input.value = input.value + event.target.innerText;
    setIAdjectiveCriteria({
      ...iAdjectiveCriteria,
      pronunciationCriteria:
        iAdjectiveCriteria.pronunciationCriteria + event.target.innerText,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const _iAdjective = {
      kanjis: iAdjectiveCriteria.kanjisCriteria,
      pronunciation: iAdjectiveCriteria.pronunciationCriteria,
      meaning: iAdjectiveCriteria.meaningCriteria,
    };
    filterIAdjectives(_iAdjective);
  }

  return (
    <div className="iAdjectivesPage">
      <h2>I-Adjectives</h2>
      <IAdjectiveCriteriaForm
        iAdjectiveCriteria={iAdjectiveCriteria}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onClick={handleClick}
        onReset={handleReset}
      />
      <Link className="btn btn-primary" to="/iAdjective">
        Add IAdjective
      </Link>
      <IAdjectiveList
        iAdjectives={iAdjectives}
        deleteIAdjective={deleteIAdjective}
      />
    </div>
  );
}

export default IAdjectivesPage;
