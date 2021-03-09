import "./Translation.css";
import ListObject from "./ListObject";
import ListOfParts from "./ListOfParts";
import React, { useState } from "react";
import * as translationApi from "../../api/translationApi";
import CustomSelect from "../common/CustomSelect";
import CustomIntegerSelect from "../common/CustomIntegerSelect";
import TranslationArea from "./TranslationArea";
import { translateRomajiToKana } from "../common/TranslateRomajiToKana";
import translationConstants from "../common/translationConstants";

const typeSelectListOfValue = translationConstants.typeSelectListOfValue;

const quantityListOfValue = translationConstants.quantityListOfValue;

const Translation = () => {
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
  const [listParts, setListParts] = useState([]);

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
    setListObjects(translationApi.getMostUsedObject(_typeSelect, _quantity));
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
