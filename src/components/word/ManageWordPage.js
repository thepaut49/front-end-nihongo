import React, { useState, useEffect } from "react";
import WordForm from "./WordForm";
import { toast } from "react-toastify";
import wordStore from "../../stores/wordStore";
import { Prompt } from "react-router-dom";
import * as wordActions from "../../actions/wordActions";
import { translateRomajiToKana } from "../common/TranslateRomajiToKana";

const ManageWordPage = (props) => {
  const [modified, setModified] = useState(false);
  const [errors, setErrors] = useState({});
  const [word, setWord] = useState({
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
    setWord({
      ...word,
      pronunciation: word.pronunciation + event.target.innerText,
    });
  };

  const handleTranslateClick = (event) => {
    event.preventDefault();
    let input = document.getElementById("pronunciation");
    const newValue = translateRomajiToKana(input.value);
    input.value = newValue;
    setWord({
      ...word,
      pronunciation: newValue,
    });
  };

  useEffect(() => {
    const kanjis = props.match.params.kanjis; // from the path /words/:word
    if (kanjis) {
      // on récupère le word du store et on le transforme pour qu'il corresponde au formulaire
      let tempWord = wordStore.getWordByKanjis(kanjis);
      let newPronunciation = tempWord.pronunciation[0];
      for (let i = 1; i < tempWord.pronunciation.length; i++) {
        newPronunciation = newPronunciation + "・" + tempWord.pronunciation[i];
      }
      let newMeaning = tempWord.meaning[0];
      for (let i = 1; i < tempWord.meaning.length; i++) {
        newMeaning = newMeaning + ";" + tempWord.meaning[i];
      }
      const wordForm = {
        id: tempWord.id,
        kanjis: tempWord.kanjis,
        pronunciation: newPronunciation,
        meaning: newMeaning,
        numberOfUse: tempWord.numberOfUse,
        version: tempWord.version,
      };
      setWord(wordForm);
    }
  }, [props.match.params.kanjis]);

  function handleChange(event) {
    setWord({ ...word, [event.target.name]: event.target.value });
    setModified(true);
  }

  function formIsValid() {
    const _errors = {};
    if (!word.kanjis) _errors.kanjis = "Kanjis of the word is required";
    if (!word.pronunciation)
      _errors.pronunciation = "Pronunciation is required";
    if (!word.meaning) _errors.meaning = "Meaning is required";

    setErrors(_errors);
    // form is valid if the erros object has no properties
    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    setModified(false);
    // on transforme les chaine de caractères en liste de chaines
    let newPronunciation = word.pronunciation.split("・");
    for (let i = 0; i < newPronunciation.length; i++) {
      newPronunciation[i] = newPronunciation[i].replace("・", "");
    }
    let newMeaning = word.meaning.split(";");
    for (let j = 0; j < newMeaning.length; j++) {
      newMeaning[j] = newMeaning[j].replace(";", "");
    }
    const savedWord = {
      id: word.id,
      kanjis: word.kanjis,
      pronunciation: newPronunciation,
      meaning: newMeaning,
      numberOfUse: word.numberOfUse,
      version: word.version,
    };
    wordActions.saveWord(savedWord).then(() => {
      props.history.push("/words");
      toast.success("Word saved.");
    });
  }

  return (
    <>
      <h2>Manage Word</h2>
      <Prompt when={modified} message="Are you sure you want to leave ?" />
      <WordForm
        errors={errors}
        word={word}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onMiddlePointClick={onMiddlePointClick}
        onTranslateClick={handleTranslateClick}
      />
    </>
  );
};

export default ManageWordPage;
