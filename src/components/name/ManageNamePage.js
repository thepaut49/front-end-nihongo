import React, { useState, useEffect } from "react";
import NameForm from "./NameForm";
import { toast } from "react-toastify";
import nameStore from "../../stores/nameStore";
import { Prompt } from "react-router-dom";
import * as nameActions from "../../actions/nameActions";
import { translateRomajiToKana } from "../common/TranslateRomajiToKana";

const ManageNamePage = (props) => {
  const [modified, setModified] = useState(false);
  const [errors, setErrors] = useState({});
  const [name, setName] = useState({
    id: null,
    kanjis: "",
    pronunciation: "",
    meaning: "",
    numberOfUse: null,
    version: null,
  });

  const onMiddlePointClick = (event) => {
    event.preventDefault();
    let input = document.getElementById("pronunciation");
    input.value = input.value + event.target.innerText;
    setName({
      ...name,
      pronunciation: name.pronunciation + event.target.innerText,
    });
  };

  const handleTranslateClick = (event) => {
    event.preventDefault();
    let input = document.getElementById("pronunciation");
    const newValue = translateRomajiToKana(input.value);
    input.value = newValue;
    setName({
      ...name,
      pronunciation: newValue,
    });
  };

  useEffect(() => {
    const kanjis = props.match.params.kanjis; // from the path /names/:name
    if (kanjis) {
      // on récupère le name du store et on le transforme pour qu'il corresponde au formulaire
      let tempName = nameStore.getNameByKanjis(kanjis);
      let newPronunciation = tempName.pronunciation[0];
      for (let i = 1; i < tempName.pronunciation.length; i++) {
        newPronunciation = newPronunciation + "・" + tempName.pronunciation[i];
      }
      let newMeaning = tempName.meaning[0];
      for (let i = 1; i < tempName.meaning.length; i++) {
        newMeaning = newMeaning + ";" + tempName.meaning[i];
      }
      const nameForm = {
        id: tempName.id,
        kanjis: tempName.kanjis,
        pronunciation: newPronunciation,
        meaning: newMeaning,
        numberOfUse: tempName.numberOfUse,
        version: tempName.version,
      };
      setName(nameForm);
    }
  }, [props.match.params.kanjis]);

  function handleChange(event) {
    setName({ ...name, [event.target.name]: event.target.value });
    setModified(true);
  }

  function formIsValid() {
    const _errors = {};
    if (!name.kanjis) _errors.kanjis = "Kanjis of the name is required";
    if (!name.pronunciation)
      _errors.pronunciation = "Pronunciation is required";
    if (!name.meaning) _errors.meaning = "Meaning is required";

    setErrors(_errors);
    // form is valid if the erros object has no properties
    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    setModified(false);
    // on transforme les chaine de caractères en liste de chaines
    let newPronunciation = name.pronunciation.split("・");
    for (let i = 0; i < newPronunciation.length; i++) {
      newPronunciation[i] = newPronunciation[i].replace("・", "");
    }
    let newMeaning = name.meaning.split(";");
    for (let j = 0; j < newMeaning.length; j++) {
      newMeaning[j] = newMeaning[j].replace(";", "");
    }
    const savedName = {
      id: name.id,
      kanjis: name.kanjis,
      pronunciation: newPronunciation,
      meaning: newMeaning,
      numberOfUse: name.numberOfUse,
      version: name.version,
    };
    nameActions.saveName(savedName).then(() => {
      props.history.push("/names");
      toast.success("Name saved.");
    });
  }

  return (
    <>
      <h2>Manage Name</h2>
      <Prompt when={modified} message="Are you sure you want to leave ?" />
      <NameForm
        errors={errors}
        name={name}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onMiddlePointClick={onMiddlePointClick}
        onTranslateClick={handleTranslateClick}
      />
    </>
  );
};

export default ManageNamePage;
