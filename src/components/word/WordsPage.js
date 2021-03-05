import React, { useState, useEffect } from "react";
import wordStore from "../../stores/wordStore";
import "./WordsPage.css";
import WordList from "./WordList";
import { Link } from "react-router-dom";
import { loadWords, deleteWord, filterWords } from "../../actions/wordActions";
import WordCriteriaForm from "./WordCriteriaForm";
import { translateRomajiToKana } from "../common/TranslateRomajiToKana";

function WordsPage(props) {
  const [words, setWords] = useState(wordStore.getWords());
  const [wordCriteria, setWordCriteria] = useState({
    kanjisCriteria: "",
    pronunciationCriteria: "",
    meaningCriteria: "",
  });

  useEffect(() => {
    wordStore.addChangeListener(onChange);
    if (
      wordStore.getWords().length === 0 &&
      !wordCriteria.kanjisCriteria &&
      !wordCriteria.pronunciationCriteria &&
      !wordCriteria.meaningCriteria
    )
      loadWords();
    return function () {
      wordStore.removeChangeListener(onChange); //cleanup on unmount
    };
  }, [words.length, wordCriteria]);
  // le second arg [] empeche de relancer en boucle l'appel à l'api

  function onChange() {
    setWords(wordStore.getWords());
  }

  // fonction for criteria form

  function handleChange(event) {
    let newValue = event.target.value;
    if (event.target.name === "pronunciationCriteria") {
      newValue = translateRomajiToKana(newValue);
      let input = document.getElementById("pronunciationCriteria");
      input.value = newValue;
    }
    setWordCriteria({
      ...wordCriteria,
      [event.target.name]: newValue,
    });
  }

  function handleReset(event) {
    // ne marche pas
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    setWordCriteria({
      kanjisCriteria: "",
      pronunciationCriteria: "",
      meaningCriteria: "",
    });
  }

  function handleClick(event) {
    let input = document.getElementById("pronunciationCriteria");
    input.value = input.value + event.target.innerText;
    setWordCriteria({
      ...wordCriteria,
      pronunciationCriteria:
        wordCriteria.pronunciationCriteria + event.target.innerText,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const _word = {
      kanjis: wordCriteria.kanjisCriteria,
      pronunciation: wordCriteria.pronunciationCriteria,
      meaning: wordCriteria.meaningCriteria,
    };
    filterWords(_word);
  }

  return (
    <div className="wordsPage">
      <h2>Words</h2>
      <WordCriteriaForm
        wordCriteria={wordCriteria}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onClick={handleClick}
        onReset={handleReset}
      />
      <Link className="btn btn-primary" to="/word">
        Add Word
      </Link>
      <WordList words={words} deleteWord={deleteWord} />
    </div>
  );
}

export default WordsPage;
