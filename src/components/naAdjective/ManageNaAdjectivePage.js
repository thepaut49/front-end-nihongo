import React, { useState, useEffect } from "react";
import NaAdjectiveForm from "./NaAdjectiveForm";
import { toast } from "react-toastify";
import naAdjectiveStore from "../../stores/naAdjectiveStore";
import { Prompt } from "react-router-dom";
import * as naAdjectiveActions from "../../actions/naAdjectiveActions";
import NaAdjectiveConjugationTable from "./NaAdjectiveConjugationTable";
import { translateRomajiToKana } from "../common/TranslateRomajiToKana";

const ManageNaAdjectivePage = (props) => {
  const [modified, setModified] = useState(false);
  const [errors, setErrors] = useState({});
  const [naAdjective, setNaAdjective] = useState({
    id: null,
    neutralForm: "",
    pronunciation: "",
    meaning: "",
    groupe: "",
    numberOfUse: null,
    version: null,
  });

  const onMiddlePointClick = (event) => {
    event.preventDefault();
    let input = document.getElementById("pronunciation");
    input.value = input.value + event.target.innerText;
    setNaAdjective({
      ...naAdjective,
      pronunciation: naAdjective.pronunciation + event.target.innerText,
    });
  };

  const handleTranslateClick = (event) => {
    event.preventDefault();
    let input = document.getElementById("pronunciation");
    const newValue = translateRomajiToKana(input.value);
    input.value = newValue;
    setNaAdjective({
      ...naAdjective,
      pronunciation: newValue,
    });
  };

  useEffect(() => {
    const kanjis = props.match.params.kanjis; // from the path /naAdjectives/:naAdjective
    if (kanjis) {
      // on récupère le naAdjective du store et on le transforme pour qu'il corresponde au formulaire
      let tempNaAdjective = naAdjectiveStore.getNaAdjectiveByKanjis(kanjis);
      let newPronunciation = tempNaAdjective.pronunciation[0];
      for (let i = 1; i < tempNaAdjective.pronunciation.length; i++) {
        newPronunciation =
          newPronunciation + "・" + tempNaAdjective.pronunciation[i];
      }

      let newMeaning = tempNaAdjective.meaning[0];
      for (let i = 1; i < tempNaAdjective.meaning.length; i++) {
        newMeaning = newMeaning + ";" + tempNaAdjective.meaning[i];
      }
      const naAdjectiveForm = {
        id: tempNaAdjective.id,
        kanjis: tempNaAdjective.kanjis,
        pronunciation: newPronunciation,
        meaning: newMeaning,
        numberOfUse: tempNaAdjective.numberOfUse,
        version: tempNaAdjective.version,
      };
      setNaAdjective(naAdjectiveForm);
    }
  }, [props.match.params.kanjis]);

  function handleChange(event) {
    setNaAdjective({ ...naAdjective, [event.target.name]: event.target.value });
    setModified(true);
  }

  function formIsValid() {
    const _errors = {};
    if (!naAdjective.kanjis)
      _errors.kanjis = "Kanjis of the naAdjective is required";
    if (!naAdjective.pronunciation)
      _errors.pronunciation = "Pronunciation is required";
    if (!naAdjective.meaning) _errors.meaning = "Meaning is required";

    setErrors(_errors);
    // form is valid if the erros object has no properties
    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    setModified(false);
    // on transforme les chaine de caractères en liste de chaines
    let newPronunciation = naAdjective.pronunciation.split("・");
    for (let i = 0; i < newPronunciation.length; i++) {
      newPronunciation[i] = newPronunciation[i].replace("・", "");
    }
    let newMeaning = naAdjective.meaning.split(";");
    for (let j = 0; j < newMeaning.length; j++) {
      newMeaning[j] = newMeaning[j].replace(";", "");
    }
    const savedNaAdjective = {
      id: naAdjective.id,
      kanjis: naAdjective.kanjis,
      pronunciation: newPronunciation,
      meaning: newMeaning,
      numberOfUse: naAdjective.numberOfUse,
      version: naAdjective.version,
    };
    naAdjectiveActions.saveNaAdjective(savedNaAdjective).then(() => {
      props.history.push("/naAdjectives");
      toast.success("NaAdjective saved.");
    });
  }

  const displayConjugationTable =
    naAdjective.id && naAdjective.kanjis.length >= 2;

  return (
    <>
      <h2>Manage NaAdjective</h2>
      <Prompt when={modified} message="Are you sure you want to leave ?" />
      <NaAdjectiveForm
        errors={errors}
        naAdjective={naAdjective}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onMiddlePointClick={onMiddlePointClick}
        onTranslateClick={handleTranslateClick}
      />
      {displayConjugationTable && (
        <NaAdjectiveConjugationTable naAdjective={naAdjective} />
      )}
    </>
  );
};

export default ManageNaAdjectivePage;
