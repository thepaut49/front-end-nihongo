import React from "react";
import { hiraganaMapToDisplay } from "../common/hiragana";

const hiraganaListStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(5,max-content)",
  margin: "auto",
};

const hiraganaStyle = {
  display: "grid",
  grid: "1fr 1fr / 3.5em",
  fontSize: "xx-large",
  backgroundColor: "rgba(38, 113, 22, 0.48)",
  margin: "0.5em",
  padding: "0.5em",
  textAlign: "center",
  fontWeight: "bold",
  borderRadius: "10px",
};

const HiraganasPage = () => {
  const listOfHiraganaKeys = [];
  const listOfHiraganaValues = [];
  hiraganaMapToDisplay.forEach((values, keys) => {
    listOfHiraganaKeys.push(values[0]);
    listOfHiraganaValues.push(values[1]);
  });

  return (
    <>
      <h2>Hiragana (平仮名, ひらがな)</h2>
      <div style={hiraganaListStyle}>
        {listOfHiraganaKeys.map((hiraganaKey, index) => {
          return (
            <div style={hiraganaStyle} key={index}>
              <div>{hiraganaKey}</div>
              <div>{listOfHiraganaValues[index]}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HiraganasPage;
