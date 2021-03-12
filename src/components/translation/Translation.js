import "./Translation.css";
import ListObject from "./ListObject";
import ListOfParts from "./ListOfParts";
import React, { useState, useEffect } from "react";
import * as translationApi from "../../api/translationApi";
import CustomSelect from "../common/CustomSelect";
import CustomIntegerSelect from "../common/CustomIntegerSelect";
import TranslationArea from "./TranslationArea";
import { translateRomajiToKana } from "../common/TranslateRomajiToKana";
import translationConstants from "../common/translationConstants";
import kanjiStore from "../../stores/kanjiStore";
import verbStore from "../../stores/verbStore";
import naAdjectiveStore from "../../stores/naAdjectiveStore";
import iAdjectiveStore from "../../stores/iAdjectiveStore";
import nameStore from "../../stores/nameStore";
import wordStore from "../../stores/wordStore";
import { loadKanjis } from "../../actions/kanjiActions";
import { loadVerbs } from "../../actions/verbActions";
import { loadNaAdjectives } from "../../actions/naAdjectiveActions";
import { loadIAdjectives } from "../../actions/iAdjectiveActions";
import { loadNames } from "../../actions/nameActions";
import { loadWords } from "../../actions/wordActions";
import { extractListOfKanji, extractParts } from "./translationAction";

const typeSelectListOfValue = [
  translationConstants.TYPE_KANJI,
  translationConstants.TYPE_VERB,
  translationConstants.TYPE_NA_ADJECTIVE,
  translationConstants.TYPE_I_ADJECTIVE,
  translationConstants.TYPE_NAME,
  translationConstants.TYPE_WORD,
];

const quantityListOfValue = translationConstants.quantityListOfValue;

const Translation = () => {
  // récupération des listes de chaques type de mots
  const [kanjis, setKanjis] = useState(kanjiStore.getKanjis());
  const [verbs, setVerbs] = useState(verbStore.getVerbs());
  const [naAdjectives, setNaAdjectives] = useState(
    naAdjectiveStore.getNaAdjectives()
  );
  const [iAdjectives, setIAdjectives] = useState(
    iAdjectiveStore.getIAdjectives()
  );
  const [names, setNames] = useState(nameStore.getNames());
  const [words, setWords] = useState(wordStore.getWords());
  // variables locales
  const [sentence, setSentence] = useState("");
  const [quantity, setQuantity] = useState(50);
  const [typeSelect, setTypeSelect] = useState(
    translationConstants.DEFAULT_TYPE
  );
  let typeSelectField = document.querySelectorAll("typeSelect");
  typeSelectField.value = translationConstants.DEFAULT_TYPE;
  const [listObjects, setListObjects] = useState(
    translationApi.getMostUsedObject(typeSelect, quantity)
  );
  const [listObjectsStyle, setListObjectsStyle] = useState({
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,3em)",
  });
  const [listParts, setListParts] = useState([]);
  const [listOfKanjis, setListOfKanjis] = useState([]);

  useEffect(() => {
    kanjiStore.addChangeListener(onChangeKanjis);
    verbStore.addChangeListener(onChangeVerbs);
    naAdjectiveStore.addChangeListener(onChangeNaAdjectives);
    iAdjectiveStore.addChangeListener(onChangeIAdjectives);
    nameStore.addChangeListener(onChangeNames);
    wordStore.addChangeListener(onChangeWords);

    if (kanjiStore.getKanjis().length === 0) loadKanjis();
    if (verbStore.getVerbs().length === 0) loadVerbs();
    if (naAdjectiveStore.getNaAdjectives().length === 0) loadNaAdjectives();
    if (iAdjectiveStore.getIAdjectives().length === 0) loadIAdjectives();
    if (nameStore.getNames().length === 0) loadNames();
    if (wordStore.getWords().length === 0) loadWords();

    return function () {
      kanjiStore.removeChangeListener(onChangeKanjis); //cleanup on unmount
      verbStore.removeChangeListener(onChangeVerbs);
      naAdjectiveStore.removeChangeListener(onChangeNaAdjectives);
      iAdjectiveStore.removeChangeListener(onChangeIAdjectives);
      nameStore.removeChangeListener(onChangeNames);
      wordStore.removeChangeListener(onChangeWords);
    };
  }, [
    kanjis.length,
    verbs.length,
    naAdjectives.length,
    iAdjectives.length,
    names.length,
    words.length,
  ]);

  function onChangeKanjis() {
    setKanjis(kanjiStore.getKanjis());
  }

  function onChangeVerbs() {
    setVerbs(verbStore.getVerbs());
  }

  function onChangeNaAdjectives() {
    setNaAdjectives(naAdjectiveStore.getNaAdjectives());
  }

  function onChangeIAdjectives() {
    setIAdjectives(iAdjectiveStore.getIAdjectives());
  }

  function onChangeNames() {
    setNames(nameStore.getNames());
  }

  function onChangeWords() {
    setWords(wordStore.getWords());
  }

  const handleListClick = (event) => {
    setSentence(sentence + event.target.innerText);
    translationApi.updateNumberOfUse(typeSelect, event.target.id);
  };

  const handleSelectChange = (event) => {
    let _typeSelect = "";
    let _quantity = 0;
    if (event.target.name === "typeSelect") {
      setTypeSelect(event.target.value);
      _typeSelect = event.target.value;
      _quantity = quantity;
    } else {
      setQuantity(event.target.value);
      _typeSelect = typeSelect;
      _quantity = event.target.value;
    }
    if (!_typeSelect || _typeSelect === translationConstants.TYPE_KANJI) {
      setListObjectsStyle({
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,3em)",
      });
    } else {
      setListObjectsStyle({
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,10em)",
      });
    }
    setListObjects(translationApi.getMostUsedObject(_typeSelect, _quantity));
  };

  const handleTranslateClick = (event) => {
    event.preventDefault();
    setListOfKanjis(extractListOfKanji(sentence, kanjis));
    setListParts(
      extractParts(sentence, verbs, naAdjectives, iAdjectives, names, words)
    );
  };

  const handleClearClick = (event) => {
    event.preventDefault();
    setSentence("");
    Array.from(document.querySelectorAll("textarea")).forEach(
      (textarea) => (textarea.value = "")
    );
    setListParts([]);
    setListOfKanjis([]);
  };

  const handleSentenceChange = (event) => {
    event.preventDefault();
    let newValue = event.target.value;
    newValue = translateRomajiToKana(newValue);
    let textArea = document.getElementById("textToTranslate");
    textArea.value = newValue;
    setSentence(newValue);
  };

  const handleKanaClick = (event) => {
    event.preventDefault();
    let textArea = document.getElementById("textToTranslate");
    textArea.value = textArea.value + event.target.innerHTML;
    setSentence(textArea.value);
  };

  return (
    <>
      <h2>Translation</h2>
      <div id="translation">
        <div id="ListOfObjects">
          <div id="select-group">
            <CustomSelect
              id="typeSelect"
              label="Type"
              onChange={handleSelectChange}
              name="typeSelect"
              value={typeSelect}
              listOfValues={typeSelectListOfValue}
            />
            <CustomIntegerSelect
              id="quantity"
              label="Quantity"
              onChange={handleSelectChange}
              name="quantity"
              value={quantity}
              listOfValues={quantityListOfValue}
            />
          </div>
          <ListObject
            list={listObjects}
            onClick={handleListClick}
            style={listObjectsStyle}
          />
        </div>
        <TranslationArea
          sentence={sentence}
          onSentenceChange={handleSentenceChange}
          onTranslateClick={handleTranslateClick}
          onClearClick={handleClearClick}
          onKanaClick={handleKanaClick}
        />
        <ListOfParts list={listParts} listOfKanjis={listOfKanjis} />
      </div>
    </>
  );
};

export default Translation;
