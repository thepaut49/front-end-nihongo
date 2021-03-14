import React from "react";
import { GridList, GridListTile } from "@material-ui/core";
import { radicals, nbrOfStrokesString } from "../common/Radicals";
import CustomInput from "../common/CustomInput";
import CustomIntegerInput from "../common/CustomIntegerInput";
import PropTypes from "prop-types";
import "./kanjiCriteriaForm.css";

function KanjiCriteriaForm(props) {
  const gridListStyle = { width: "100%" };
  const numberStyle = {
    backgroundColor: "blue",
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  };

  const filterStyle = {
    backgroundColor: "#4682B4",
    borderRadius: "10px",
    padding: "0.4em",
  };

  const buttonFiltersStyle = {
    margin: "0.4em",
  };

  const buttonSearchClearStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  };

  const hideFilters = (event) => {
    event.preventDefault();
    let formFiltersKanji = document.getElementById("formFiltersKanji");
    if (getComputedStyle(formFiltersKanji).display !== "none") {
      formFiltersKanji.style.display = "none";
    } else {
      formFiltersKanji.style.display = "block";
    }
  };

  return (
    <div style={filterStyle}>
      <button
        id="buttonFiltersKanji"
        onClick={hideFilters}
        className="btn btn-success"
        style={buttonFiltersStyle}
      >
        Filters
      </button>

      <form onSubmit={props.onSubmit} id="formFiltersKanji">
        <div className="grid-container-form-criteria">
          <CustomInput
            id="kanjiCriteria"
            label="Kanji"
            onChange={props.onChange}
            name="kanjiCriteria"
            value={props.kanjiCriteria.kanji}
            maxLength="1"
          />

          <CustomInput
            id="pronunciationCriteria"
            label="PronunciationCriteria"
            onChange={props.onChange}
            name="pronunciationCriteria"
            value={props.kanjiCriteria.pronunciation}
          />

          <CustomInput
            id="meaningCriteria"
            label="MeaningCriteria"
            onChange={props.onChange}
            name="meaningCriteria"
            value={props.kanjiCriteria.meaning}
          />

          <CustomIntegerInput
            id="strokeNumberCriteria"
            label="Strokes"
            onChange={props.onChange}
            step="1"
            name="strokeNumberCriteria"
            value={props.kanjiCriteria.strokeNumber}
          />

          <CustomIntegerInput
            id="minStrokeNumber"
            label="Min strokes"
            onChange={props.onChange}
            step="1"
            name="minStrokeNumber"
            value={props.kanjiCriteria.minStrokeNumber}
          />

          <CustomIntegerInput
            id="maxStrokeNumber"
            label="Max strokes"
            onChange={props.onChange}
            step="1"
            name="maxStrokeNumber"
            value={props.kanjiCriteria.maxStrokeNumber}
          />

          <CustomInput
            id="radicalsCriteria"
            label="Radicals"
            typeInput="text"
            onChange={props.onChange}
            name="radicalsCriteria"
            value={props.kanjiCriteria.radicalsCriteria}
            error={props.errors.radicals}
          />
        </div>

        <GridList cellHeight={"auto"} cols={20} style={gridListStyle}>
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
        <br />
        <br />
        <div className="buttons" style={buttonSearchClearStyle}>
          <input type="submit" value="Search" className="btn btn-primary" />
          <button onClick={props.onReset} className="btn btn-primary">
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}

KanjiCriteriaForm.propTypes = {
  kanjiCriteria: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default KanjiCriteriaForm;
