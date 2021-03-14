import React, { useState, useEffect } from "react";
import VerbForm from "./VerbForm";
import { toast } from "react-toastify";
import verbStore from "../../stores/verbStore";
import { Prompt } from "react-router-dom";
import * as verbActions from "../../actions/verbActions";
import VerbConjugationTable from "./VerbConjugationTable";
import { translateRomajiToKana } from "../common/TranslateRomajiToKana";

const ManageVerbPage = (props) => {
  const [modified, setModified] = useState(false);
  const [errors, setErrors] = useState({});
  const [verb, setVerb] = useState({
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
    setVerb({
      ...verb,
      pronunciation: verb.pronunciation + event.target.innerText,
    });
  };

  const handleTranslateClick = (event) => {
    event.preventDefault();
    let input = document.getElementById("pronunciation");
    const newValue = translateRomajiToKana(input.value);
    input.value = newValue;
    setVerb({
      ...verb,
      pronunciation: newValue,
    });
  };

  useEffect(() => {
    const neutralForm = props.match.params.neutralForm; // from the path /verbs/:verb
    if (neutralForm) {
      // on récupère le verb du store et on le transforme pour qu'il corresponde au formulaire
      let tempVerb = verbStore.getVerbByNeutralForm(neutralForm);
      let newPronunciation = tempVerb.pronunciation[0];
      for (let i = 1; i < tempVerb.pronunciation.length; i++) {
        newPronunciation = newPronunciation + "・" + tempVerb.pronunciation[i];
      }

      let newMeaning = tempVerb.meaning[0];
      for (let i = 1; i < tempVerb.meaning.length; i++) {
        newMeaning = newMeaning + ";" + tempVerb.meaning[i];
      }
      const verbForm = {
        id: tempVerb.id,
        neutralForm: tempVerb.neutralForm,
        pronunciation: newPronunciation,
        meaning: newMeaning,
        groupe: tempVerb.groupe,
        numberOfUse: tempVerb.numberOfUse,
        version: tempVerb.version,
      };
      setVerb(verbForm);
    }
  }, [props.match.params.neutralForm]);

  function handleChange(event) {
    setVerb({ ...verb, [event.target.name]: event.target.value });
    setModified(true);
  }

  function formIsValid() {
    const _errors = {};
    if (!verb.neutralForm)
      _errors.neutralForm = "Neutral form of the verb is required";
    if (!verb.pronunciation)
      _errors.pronunciation = "Pronunciation is required";
    if (!verb.meaning) _errors.meaning = "Meaning is required";
    if (!verb.groupe) _errors.groupe = "Group is required";

    setErrors(_errors);
    // form is valid if the erros object has no properties
    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    setModified(false);
    // on transforme les chaine de caractères en liste de chaines
    let newPronunciation = verb.pronunciation.split("・");
    for (let i = 0; i < newPronunciation.length; i++) {
      newPronunciation[i] = newPronunciation[i].replace("・", "");
    }

    let newMeaning = verb.meaning.split(";");
    for (let j = 0; j < newMeaning.length; j++) {
      newMeaning[j] = newMeaning[j].replace(";", "");
    }
    const savedVerb = {
      id: verb.id,
      neutralForm: verb.neutralForm,
      pronunciation: newPronunciation,
      meaning: newMeaning,
      groupe: verb.groupe,
      numberOfUse: verb.numberOfUse,
      version: verb.version,
    };
    verbActions.saveVerb(savedVerb).then(() => {
      props.history.push("/verbs");
      toast.success("Verb saved.");
    });
  }

  const displayConjugationTable = verb.id && verb.neutralForm.length >= 2;

  return (
    <>
      <h2>Manage Verb</h2>
      <Prompt when={modified} message="Are you sure you want to leave ?" />
      <VerbForm
        errors={errors}
        verb={verb}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onMiddlePointClick={onMiddlePointClick}
        onTranslateClick={handleTranslateClick}
      />
      {displayConjugationTable && <VerbConjugationTable verb={verb} />}
    </>
  );
};

export default ManageVerbPage;
