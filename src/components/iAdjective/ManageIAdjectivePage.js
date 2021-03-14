import React, { useState, useEffect } from "react";
import IAdjectiveForm from "./IAdjectiveForm";
import { toast } from "react-toastify";
import iAdjectiveStore from "../../stores/iAdjectiveStore";
import { Prompt } from "react-router-dom";
import * as iAdjectiveActions from "../../actions/iAdjectiveActions";
import IAdjectiveConjugationTable from "./IAdjectiveConjugationTable";
import { translateRomajiToKana } from "../common/TranslateRomajiToKana";

const ManageIAdjectivePage = (props) => {
  const [modified, setModified] = useState(false);
  const [errors, setErrors] = useState({});
  const [iAdjective, setIAdjective] = useState({
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
    setIAdjective({
      ...iAdjective,
      pronunciation: iAdjective.pronunciation + event.target.innerText,
    });
  };

  const handleTranslateClick = (event) => {
    event.preventDefault();
    let input = document.getElementById("pronunciation");
    const newValue = translateRomajiToKana(input.value);
    input.value = newValue;
    setIAdjective({
      ...iAdjective,
      pronunciation: newValue,
    });
  };

  useEffect(() => {
    const kanjis = props.match.params.kanjis; // from the path /iAdjectives/:iAdjective
    if (kanjis) {
      // on récupère le iAdjective du store et on le transforme pour qu'il corresponde au formulaire
      let tempIAdjective = iAdjectiveStore.getIAdjectiveByKanjis(kanjis);
      let newPronunciation = tempIAdjective.pronunciation.split("・");
      for (let i = 0; i < newPronunciation.length; i++) {
        newPronunciation[i] = newPronunciation[i].replace("・", "");
      }
      let newMeaning = tempIAdjective.meaning[0];
      for (let i = 1; i < tempIAdjective.meaning.length; i++) {
        newMeaning = newMeaning + ";" + tempIAdjective.meaning[i];
      }
      const iAdjectiveForm = {
        id: tempIAdjective.id,
        kanjis: tempIAdjective.kanjis,
        pronunciation: newPronunciation,
        meaning: newMeaning,
        numberOfUse: tempIAdjective.numberOfUse,
        version: tempIAdjective.version,
      };
      setIAdjective(iAdjectiveForm);
    }
  }, [props.match.params.kanjis]);

  function handleChange(event) {
    setIAdjective({ ...iAdjective, [event.target.name]: event.target.value });
    setModified(true);
  }

  function formIsValid() {
    const _errors = {};
    if (!iAdjective.kanjis)
      _errors.kanjis = "Kanjis of the iAdjective is required";
    if (!iAdjective.pronunciation)
      _errors.pronunciation = "Pronunciation is required";
    if (!iAdjective.meaning) _errors.meaning = "Meaning is required";

    setErrors(_errors);
    // form is valid if the erros object has no properties
    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    setModified(false);
    // on transforme les chaine de caractères en liste de chaines
    let newPronunciation = iAdjective.pronunciation.split("・");
    for (let i = 0; i < newPronunciation.length; i++) {
      newPronunciation[i] = newPronunciation[i].replace("・", "");
    }
    let newMeaning = iAdjective.meaning.split(";");
    for (let j = 0; j < newMeaning.length; j++) {
      newMeaning[j] = newMeaning[j].replace(";", "");
    }
    const savedIAdjective = {
      id: iAdjective.id,
      kanjis: iAdjective.kanjis,
      pronunciation: iAdjective.pronunciation,
      meaning: newMeaning,
      numberOfUse: iAdjective.numberOfUse,
      version: iAdjective.version,
    };
    iAdjectiveActions.saveIAdjective(savedIAdjective).then(() => {
      props.history.push("/iAdjectives");
      toast.success("IAdjective saved.");
    });
  }

  const displayConjugationTable =
    iAdjective.id && iAdjective.kanjis.length >= 2;

  return (
    <>
      <h2>Manage IAdjective</h2>
      <Prompt when={modified} message="Are you sure you want to leave ?" />
      <IAdjectiveForm
        errors={errors}
        iAdjective={iAdjective}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onMiddlePointClick={onMiddlePointClick}
        onTranslateClick={handleTranslateClick}
      />
      {displayConjugationTable && (
        <IAdjectiveConjugationTable iAdjective={iAdjective} />
      )}
    </>
  );
};

export default ManageIAdjectivePage;
