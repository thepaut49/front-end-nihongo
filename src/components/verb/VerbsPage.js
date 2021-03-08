import React, { useState, useEffect } from "react";
import verbStore from "../../stores/verbStore";
import "./VerbsPage.css";
import VerbList from "./VerbList";
import { Link } from "react-router-dom";
import { loadVerbs, deleteVerb, filterVerbs } from "../../actions/verbActions";
import VerbCriteriaForm from "./VerbCriteriaForm";
import { translateRomajiToKana } from "../common/TranslateRomajiToKana";

function VerbsPage(props) {
  const [verbs, setVerbs] = useState(verbStore.getVerbs());
  const [verbCriteria, setVerbCriteria] = useState({
    neutralFormCriteria: "",
    pronunciationCriteria: "",
    meaningCriteria: "",
    groupeCriteria: "",
  });

  useEffect(() => {
    verbStore.addChangeListener(onChange);
    if (
      verbStore.getVerbs().length === 0 &&
      !verbCriteria.neutralFormCriteria &&
      !verbCriteria.pronunciationCriteria &&
      !verbCriteria.meaningCriteria &&
      !verbCriteria.groupeCriteria
    )
      loadVerbs();
    return function () {
      verbStore.removeChangeListener(onChange); //cleanup on unmount
    };
  }, [verbs.length, verbCriteria]);
  // le second arg [] empeche de relancer en boucle l'appel à l'api

  function onChange() {
    setVerbs(verbStore.getVerbs());
  }

  // fonction for criteria form

  function handleChange(event) {
    let newValue = event.target.value;
    if (event.target.name === "pronunciationCriteria") {
      newValue = translateRomajiToKana(newValue);
      let input = document.getElementById("pronunciationCriteria");
      input.value = newValue;
    }
    setVerbCriteria({
      ...verbCriteria,
      [event.target.name]: newValue,
    });
  }

  function handleReset(event) {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    Array.from(document.querySelectorAll("select")).forEach(
      (select) => (select.value = "")
    );
    setVerbCriteria({
      neutralFormCriteria: "",
      pronunciationCriteria: "",
      meaningCriteria: "",
      groupeCriteria: "",
    });
  }

  function handleClick(event) {
    let input = document.getElementById("pronunciationCriteria");
    input.value = input.value + event.target.innerText;
    setVerbCriteria({
      ...verbCriteria,
      pronunciationCriteria:
        verbCriteria.pronunciationCriteria + event.target.innerText,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const _verb = {
      neutralForm: verbCriteria.neutralFormCriteria,
      pronunciation: verbCriteria.pronunciationCriteria,
      meaning: verbCriteria.meaningCriteria,
      groupe: verbCriteria.groupeCriteria,
    };
    filterVerbs(_verb);
  }

  return (
    <div className="verbsPage">
      <h2>Verbs</h2>
      <VerbCriteriaForm
        verbCriteria={verbCriteria}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onClick={handleClick}
        onReset={handleReset}
      />
      <Link className="btn btn-primary" to="/verb">
        Add Verb
      </Link>
      <VerbList verbs={verbs} deleteVerb={deleteVerb} />
    </div>
  );
}

export default VerbsPage;
