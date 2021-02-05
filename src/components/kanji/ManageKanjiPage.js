import React, { useState, useEffect } from "react";
import KanjiForm from "./KanjiForm";
import * as kanjiApi from "../../api/kanjiApi";
import { toast } from "react-toastify";
import { radicals as radicalsList } from "../common/Radicals";

const ManageKanjiPage = (props) => {
  const [errors, setErrors] = useState({});
  const [kanji, setKanji] = useState({
    id: null,
    kanji: "",
    pronunciation: "",
    meaning: "",
    radicals: "",
    strokeNumber: null,
    version: null,
  });

  useEffect(() => {
    const character = props.match.params.kanji; // from the path /kanjis/:kanji
    if (character) {
      kanjiApi.getKanjiByCharacter(character).then((_kanji) => {
        // on transforme les listes de caractères en une seule chaine
        debugger;
        let newPronunciation = _kanji.pronunciation[0];
        for (let i = 1; i < _kanji.pronunciation.length; i++) {
          newPronunciation = newPronunciation + "・" + _kanji.pronunciation[i];
        }

        let newMeaning = _kanji.meaning[0];
        for (let i = 1; i < _kanji.meaning.length; i++) {
          newMeaning = newMeaning + ";" + _kanji.meaning[i];
        }
        const kanjiForm = {
          id: _kanji.id,
          kanji: _kanji.kanji,
          pronunciation: newPronunciation,
          meaning: newMeaning,
          radicals: _kanji.radicals,
          strokeNumber: _kanji.strokeNumber,
          version: _kanji.version,
        };
        setKanji(kanjiForm);
      });
    }
  }, [props.match.params.kanji]);

  function handleChange(event) {
    setKanji({ ...kanji, [event.target.name]: event.target.value });
  }

  function formIsValid() {
    const _errors = {};
    if (!kanji.kanji) _errors.kanji = "Kanji is required";
    if (!kanji.pronunciation)
      _errors.pronunciation = "Pronunciation is required";
    if (!kanji.meaning) _errors.meaning = "Meaning is required";
    if (kanji.radicals.length > 0) {
      for (let i = 0; i < kanji.radicals.length; i++) {
        if (radicalsList.indexOf(kanji.radicals[i]) === -1) {
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
    // on transforme les chaine de caractères en liste de chaines
    let newPronunciation = kanji.pronunciation.split("・");
    for (let i = 0; i < newPronunciation.length; i++) {
      newPronunciation[i] = newPronunciation[i].replace("・", "");
    }

    let newMeaning = kanji.meaning.split(";");
    for (let j = 0; j < newMeaning.length; j++) {
      newMeaning[j] = newMeaning[j].replace(";", "");
    }
    const savedCourse = {
      id: kanji.id,
      kanji: kanji.kanji,
      pronunciation: newPronunciation,
      meaning: newMeaning,
      radicals: kanji.radicals,
      strokeNumber: kanji.strokeNumber,
      version: kanji.version,
    };
    kanjiApi.saveKanji(savedCourse).then(() => {
      props.history.push("/kanjis");
      toast.success("Kanji saved.");
    });
  }

  function handleClick(event) {
    event.preventDefault();
    let _radicals = kanji.radicals + event.target.innerText;
    setKanji({ ...setKanji, radicals: _radicals });
  }

  return (
    <>
      <h2>Manage Kanji</h2>
      <KanjiForm
        errors={errors}
        kanji={kanji}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onClick={handleClick}
      />
    </>
  );
};

export default ManageKanjiPage;
