import React from "react";
import CustomInput from "../common/CustomInput";
import CustomSelect from "../common/CustomSelect";
import verbConstants from "../common/verbConstants";
import PropTypes from "prop-types";
import "./verbCriteriaForm.css";

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
  let formFiltersVerb = document.getElementById("formFiltersVerb");
  if (getComputedStyle(formFiltersVerb).display !== "none") {
    formFiltersVerb.style.display = "none";
  } else {
    formFiltersVerb.style.display = "block";
  }
};

function VerbCriteriaForm(props) {
  return (
    <div style={filterStyle}>
      <button
        onClick={hideFilters}
        className="btn btn-success"
        style={buttonFiltersStyle}
      >
        Filters
      </button>
      <form onSubmit={props.onSubmit} id="formFiltersVerb">
        <div className="grid-container-form-criteria-verb">
          <CustomInput
            id="neutralFormCriteria"
            label="Neutral form"
            onChange={props.onChange}
            name="neutralFormCriteria"
            value={props.verbCriteria.neutralForm}
          />

          <CustomInput
            id="pronunciationCriteria"
            label="PronunciationCriteria"
            onChange={props.onChange}
            name="pronunciationCriteria"
            value={props.verbCriteria.pronunciation}
          />

          <CustomInput
            id="meaningCriteria"
            label="MeaningCriteria"
            onChange={props.onChange}
            name="meaningCriteria"
            value={props.verbCriteria.meaning}
          />

          <CustomSelect
            id="groupeCriteria"
            label="Group"
            onChange={props.onChange}
            name="groupeCriteria"
            value={props.verbCriteria.groupe}
            listOfValues={verbConstants.verbGroupList}
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

VerbCriteriaForm.propTypes = {
  verbCriteria: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default VerbCriteriaForm;
