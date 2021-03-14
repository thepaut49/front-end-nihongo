import React from "react";
import CustomInput from "../common/CustomInput";
import PropTypes from "prop-types";
import "./NaAdjectiveCriteriaForm.css";

const filterStyle = {
  backgroundColor: "#4682B4",
  borderRadius: "10px",
  padding: "0.3em",
};

const buttonFiltersStyle = {
  margin: "0.4em",
};

const buttonSearchClearStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "1em",
};

const hideFilters = (event) => {
  event.preventDefault();
  let formFiltersNaAdjective = document.getElementById(
    "formFiltersNaAdjective"
  );
  if (getComputedStyle(formFiltersNaAdjective).display !== "none") {
    formFiltersNaAdjective.style.display = "none";
  } else {
    formFiltersNaAdjective.style.display = "block";
  }
};

function NaAdjectiveCriteriaForm(props) {
  return (
    <div style={filterStyle}>
      <button
        id="buttonFiltersNaAdjective"
        onClick={hideFilters}
        className="btn btn-success"
        style={buttonFiltersStyle}
      >
        Filters
      </button>
      <form onSubmit={props.onSubmit} id="formFiltersNaAdjective">
        <div className="grid-container-form-criteria-na-adjective">
          <CustomInput
            id="kanjisCriteria"
            label="Kanjis"
            onChange={props.onChange}
            name="kanjisCriteria"
            value={props.naAdjectiveCriteria.kanjis}
          />

          <CustomInput
            id="pronunciationCriteria"
            label="PronunciationCriteria"
            onChange={props.onChange}
            name="pronunciationCriteria"
            value={props.naAdjectiveCriteria.pronunciation}
          />

          <CustomInput
            id="meaningCriteria"
            label="MeaningCriteria"
            onChange={props.onChange}
            name="meaningCriteria"
            value={props.naAdjectiveCriteria.meaning}
          />
        </div>
        <div style={buttonSearchClearStyle}>
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
