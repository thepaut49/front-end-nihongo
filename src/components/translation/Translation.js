import "./Translation.css";
import ListObject from "./ListObject";
import ListOfParts from "./ListOfParts";
import React, { useState } from "react";
import * as translationApi from "../../api/translationApi";
import CustomSelect from "../common/CustomSelect";
import CustomIntegerSelect from "../common/CustomIntegerSelect";
import TranslationArea from "./TranslationArea";
import { translateRomajiToKana } from "../common/TranslateRomajiToKana";

const typeSelectListOfValue = [
  "Kanjis",
  "Verbs",
  "Na-Adjectives",
  "I-Adjectives",
  "Names",
  "Words",
];

const quantityListOfValue = [50, 100, 200, 500];

const Translation = () => {
  const [sentence, setSentence] = useState("");
  const [quantity, setQuantity] = useState(50);
  const [typeSelect, setTypeSelect] = useState("Kanjis");
  let typeSelectField = document.querySelectorAll("typeSelect");
  typeSelectField.value = "Kanji";
  const [listObjects, setListObjects] = useState(
    translationApi.getMostUsedObject(typeSelect, quantity)
  );
  const [listParts, setListParts] = useState([]);

  const handleListClick = (event) => {
    setSentence(sentence + event.target.innerText);
  };

  const handleSelectChange = (event) => {
    if (event.target.name === "typeSelect") {
      setTypeSelect(event.target.value);
    } else {
      setQuantity(event.target.value);
    }

    setListObjects(translationApi.getMostUsedObject(typeSelect, quantity));
  };

  const handleTranslateClick = (event) => {
    event.preventDefault();
  };

  const handleClearClick = (event) => {
    event.preventDefault();
    setSentence("");
    Array.from(document.querySelectorAll("textarea")).forEach(
      (textarea) => (textarea.value = "")
    );
    setListParts([]);
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
          <ListObject list={listObjects} onClick={handleListClick} />
        </div>
        <TranslationArea
          sentence={sentence}
          onSentenceChange={handleSentenceChange}
          onTranslateClick={handleTranslateClick}
          onClearClick={handleClearClick}
          onKanaClick={handleKanaClick}
        />
        <ListOfParts list={listParts} />
      </div>
    </>
  );
};

export default Translation;
