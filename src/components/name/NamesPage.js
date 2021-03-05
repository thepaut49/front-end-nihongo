import React, { useState, useEffect } from "react";
import nameStore from "../../stores/nameStore";
import "./NamesPage.css";
import NameList from "./NameList";
import { Link } from "react-router-dom";
import { loadNames, deleteName, filterNames } from "../../actions/nameActions";
import NameCriteriaForm from "./NameCriteriaForm";
import { translateRomajiToKana } from "../common/TranslateRomajiToKana";

function NamesPage(props) {
  const [names, setNames] = useState(nameStore.getNames());
  const [nameCriteria, setNameCriteria] = useState({
    kanjisCriteria: "",
    pronunciationCriteria: "",
    meaningCriteria: "",
  });

  useEffect(() => {
    nameStore.addChangeListener(onChange);
    if (
      nameStore.getNames().length === 0 &&
      !nameCriteria.kanjisCriteria &&
      !nameCriteria.pronunciationCriteria &&
      !nameCriteria.meaningCriteria
    )
      loadNames();
    return function () {
      nameStore.removeChangeListener(onChange); //cleanup on unmount
    };
  }, [names.length, nameCriteria]);
  // le second arg [] empeche de relancer en boucle l'appel à l'api

  function onChange() {
    setNames(nameStore.getNames());
  }

  // fonction for criteria form

  function handleChange(event) {
    let newValue = event.target.value;
    if (event.target.name === "pronunciationCriteria") {
      newValue = translateRomajiToKana(newValue);
      let input = document.getElementById("pronunciationCriteria");
      input.value = newValue;
    }
    setNameCriteria({
      ...nameCriteria,
      [event.target.name]: newValue,
    });
  }

  function handleReset(event) {
    // ne marche pas
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    setNameCriteria({
      kanjisCriteria: "",
      pronunciationCriteria: "",
      meaningCriteria: "",
    });
  }

  function handleClick(event) {
    let input = document.getElementById("pronunciationCriteria");
    input.value = input.value + event.target.innerText;
    setNameCriteria({
      ...nameCriteria,
      pronunciationCriteria:
        nameCriteria.pronunciationCriteria + event.target.innerText,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const _name = {
      kanjis: nameCriteria.kanjisCriteria,
      pronunciation: nameCriteria.pronunciationCriteria,
      meaning: nameCriteria.meaningCriteria,
    };
    filterNames(_name);
  }

  return (
    <div className="namesPage">
      <h2>Names</h2>
      <NameCriteriaForm
        nameCriteria={nameCriteria}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onClick={handleClick}
        onReset={handleReset}
      />
      <Link className="btn btn-primary" to="/name">
        Add Name
      </Link>
      <NameList names={names} deleteName={deleteName} />
    </div>
  );
}

export default NamesPage;
