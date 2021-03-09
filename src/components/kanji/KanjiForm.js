import { GridList, GridListTile } from "@material-ui/core";
import { radicals, nbrOfStrokesString } from "../common/Radicals";
import CustomInput from "../common/CustomInput";
import CustomIntegerInput from "../common/CustomIntegerInput";
import PropTypes from "prop-types";

import React from "react";

function KanjiForm(props) {
  const gridListStyle = { width: "60%" };
  const numberStyle = {
    backgroundColor: "blue",
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  };

  const formStyle = {
    backgroundColor: "#4682B4",
    margin: "1em",
    padding: "0.5em",
    borderRadius: "10px",
  };

  return (
    <form onSubmit={props.onSubmit} style={formStyle}>
      <CustomInput
        id="kanji"
        label="Kanji"
        onChange={props.onChange}
        name="kanji"
        value={props.kanji.kanji}
        maxLength="1"
        error={props.errors.kanji}
      />

      <CustomInput
        id="pronunciation"
        label="Pronunciation"
        onChange={props.onChange}
        name="pronunciation"
        value={props.kanji.pronunciation}
        error={props.errors.pronunciation}
      />

      <CustomInput
        id="meaning"
        label="Meaning"
        onChange={props.onChange}
        name="meaning"
        value={props.kanji.meaning}
        error={props.errors.meaning}
      />

      <CustomIntegerInput
        id="strokeNumber"
        label="Strokes"
        onChange={props.onChange}
        step="1"
        name="strokeNumber"
        value={props.kanji.strokeNumber}
      />

      <CustomInput
        id="radicals"
        label="Radicals"
        typeInput="text"
        onChange={props.onChange}
        name="radicals"
        value={props.kanji.radicals}
        error={props.errors.radicals}
      />

      <input type="submit" value="Save" className="btn btn-primary" />

      <br />
      <br />
      <GridList cellHeight={"auto"} cols={10} style={gridListStyle}>
        {radicals.map((radical) => {
          return (
            <GridListTile key={radical} cols={1}>
              {nbrOfStrokesString.includes(radical) ? (
                <button style={numberStyle}>{radical}</button>
              ) : (
                <button onClick={props.onClick}>{radical}</button>
              )}
            </GridListTile>
          );
        })}
      </GridList>
    </form>
  );
}

KanjiForm.propTypes = {
  kanji: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default KanjiForm;
