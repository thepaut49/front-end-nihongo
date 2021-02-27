import CustomInput from "../common/CustomInput";
import CustomInputPronunciation from "../common/CustomInputPronunciation";
import PropTypes from "prop-types";
import "./NaAdjectiveCriteriaForm.css";

import React from "react";

function NaAdjectiveCriteriaForm(props) {
  return (
    <div>
      <h3>Filters</h3>
      <form onSubmit={props.onSubmit}>
        <div className="grid-container-form-criteria-na-adjective">
          <CustomInput
            id="kanjisCriteria"
            label="Kanjis"
            onChange={props.onChange}
            name="kanjisCriteria"
            value={props.naAdjectiveCriteria.kanjis}
          />

          <CustomInputPronunciation
            id="pronunciationCriteria"
            label="PronunciationCriteria"
            onChange={props.onChange}
            name="pronunciationCriteria"
            value={props.naAdjectiveCriteria.pronunciation}
            onClick={props.onClick}
          />

          <CustomInput
            id="meaningCriteria"
            label="MeaningCriteria"
            onChange={props.onChange}
            name="meaningCriteria"
            value={props.naAdjectiveCriteria.meaning}
          />
        </div>
        <div className="buttons">
          <input type="submit" value="Search" className="btn btn-primary" />
          <button onClick={props.onReset} className="btn btn-primary">
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}

NaAdjectiveCriteriaForm.propTypes = {
  naAdjectiveCriteria: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default NaAdjectiveCriteriaForm;
