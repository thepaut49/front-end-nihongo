import { GridList, GridListTile } from "@material-ui/core";
import { radicals } from "../common/Radicals";
import CustomInput from "../common/CustomInput";
import CustomIntegerInput from "../common/CustomIntegerInput";
import PropTypes from "prop-types";
import "./kanjiCriteriaForm.css";

import React from "react";

function KanjiCriteriaForm(props) {
  const gridListStyle = { width: "100%" };

  return (
    <div>
      <h3>Filters</h3>
      <form onSubmit={props.onSubmit}>
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
                <button onClick={props.onClick}>{radical}</button>
              </GridListTile>
            );
          })}
        </GridList>
        <br />
        <br />
        <input type="submit" value="Search" className="btn btn-primary" />
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
