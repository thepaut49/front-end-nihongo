import React, { useState } from "react";
import KanjiForm from "./KanjiForm";
import * as kanjiApi from "../../api/kanjiApi";
import { toast } from "react-toastify";

const ManageKanjiPage = (props) => {
  const [kanji, setKanji] = useState({
    id: null,
    kanji: "",
    pronunciation: "",
    meaning: "",
    radicals: "",
    strokeNumber: null,
  });

  function handleChange(event) {
    setKanji({ ...kanji, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
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
        kanji={kanji}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onClick={handleClick}
      />
    </>
  );
};

export default ManageKanjiPage;
