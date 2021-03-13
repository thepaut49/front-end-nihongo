import Part from "./Part";
import Kanji from "./Kanji";
import { useState } from "react";

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
};

const listOfPartsToHideStyle = {
  display: "grid",
  padding: "0.4em",
  margin: "0.4em",
  gridTemplateColumns: "repeat(auto-fill,15em)",
};

const showbuttonGroupStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "1em",
};

const ListOfParts = (props) => {
  const _listOfParts = props.list;
  const [listOfParts, setListOfParts] = useState(_listOfParts);
  const listOfKanjis = props.listOfKanjis;
  const handlePartChange = (part) => {
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
          listOfParts.map((part, index) => {
            return (
              <Part part={part} key={index} onPartChange={handlePartChange} />
            );
          })}
      </div>

      <div id="ListOfKanjisToHide" style={listOfKanjisToHideStyle}>
        {listOfKanjis &&
          listOfKanjis.map((kanji, index) => {
            return <Kanji kanji={kanji} key={index} />;
          })}
      </div>
    </div>
  );
};

export default ListOfParts;
