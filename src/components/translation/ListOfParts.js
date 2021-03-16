import React, { useState, useEffect } from "react";
import Part from "./Part";
import Kanji from "./Kanji";
import PropTypes from "prop-types";

const listOfPartsStyle = {
  height: "100%",
};

const showListOfParts = (event) => {
  event.preventDefault();
  let listOfPartsToHide = document.getElementById("ListOfPartsToHide");
  let listOfKanjisToHide = document.getElementById("ListOfKanjisToHide");
  listOfKanjisToHide.style.display = "none";
  listOfPartsToHide.style.display = "grid";
};

const showListOfKanjis = (event) => {
  event.preventDefault();
  let listOfPartsToHide = document.getElementById("ListOfPartsToHide");
  let listOfKanjisToHide = document.getElementById("ListOfKanjisToHide");
  listOfPartsToHide.style.display = "none";
  listOfKanjisToHide.style.display = "block";
};

const listOfKanjisToHideStyle = {
  display: "none",
  padding: "0.4em",
  margin: "0.4em",
  gap: "0.2em",
};

const listOfPartsToHideStyle = {
  display: "grid",
  padding: "0.4em",
  margin: "0.4em",
  gap: "0.2em",
  gridTemplateColumns: "repeat(auto-fill,15em)",
};

const showbuttonGroupStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "1em",
};

const ListOfParts = (props) => {
  const [listOfParts, setListOfParts] = useState(props.list);
  const listOfKanjis = props.listOfKanjis;

  useEffect(() => {
    setListOfParts(props.list);
  }, [props.list]);

  const handlePartChange = (part) => {
    if (part) {
      for (let index = 0; index < listOfParts.length; index++) {
        if (listOfParts[index].currentIndex === part.currentIndex) {
          listOfParts[index] = part;
          break;
        }
      }
      setListOfParts(listOfParts);
      if (props.onPronunciationChange) {
        props.onPronunciationChange(listOfParts);
      }
    }
  };

  const handleSplitPart = (oldPart, firstPart, secondPart) => {
    if (oldPart) {
      let newList = [];
      listOfParts.forEach((part) => {
        if (part.kanjis === oldPart.kanjis) {
          newList.push(firstPart);
          newList.push(secondPart);
        } else {
          newList.push(part);
        }
      });
      setListOfParts(newList);
      props.onSplitPart(newList);
    }
  };

  return (
    <div id="ListOfParts" style={listOfPartsStyle}>
      <div style={showbuttonGroupStyle}>
        <button
          id="buttonListOfParts"
          onClick={showListOfParts}
          className="btn btn-success"
        >
          List of parts
        </button>

        <button
          id="buttonListOfKanji"
          onClick={showListOfKanjis}
          className="btn btn-success"
        >
          List of Kanjis
        </button>
      </div>

      <div id="ListOfPartsToHide" style={listOfPartsToHideStyle}>
        {listOfParts &&
          listOfParts.length > 0 &&
          listOfParts.map((part, index) => {
            return (
              <Part
                part={part}
                key={index}
                onPartChange={handlePartChange}
                onSplitPart={handleSplitPart}
              />
            );
          })}
      </div>

      <div id="ListOfKanjisToHide" style={listOfKanjisToHideStyle}>
        {listOfKanjis &&
          listOfKanjis.length > 0 &&
          listOfKanjis.map((kanji, index) => {
            return <Kanji kanji={kanji} key={index} />;
          })}
      </div>
    </div>
  );
};

ListOfParts.prototypes = {
  list: PropTypes.arrayOf(Object).isRequired,
  listOfKanjis: PropTypes.arrayOf(Object).isRequired,
  onSplitPart: PropTypes.func.isRequired,
  onPronunciationChange: PropTypes.func.isRequired,
};

export default ListOfParts;
