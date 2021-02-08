import CustomInput from "../common/CustomInput";
import CustomInputPronunciation from "../common/CustomInputPronunciation";
import CustomSelect from "../common/CustomSelect";
import { verbGroupList } from "../common/verbConstants";
import PropTypes from "prop-types";
import "./verbCriteriaForm.css";

import React from "react";

function VerbCriteriaForm(props) {
  return (
    <div>
      <h3>Filters</h3>
      <form onSubmit={props.onSubmit}>
        <div className="grid-container-form-criteria-verb">
          <CustomInput
            id="neutralFormCriteria"
            label="Neutral form"
            onChange={props.onChange}
            name="neutralFormCriteria"
            value={props.verbCriteria.neutralForm}
          />

          <CustomInputPronunciation
            id="pronunciationCriteria"
            label="PronunciationCriteria"
            onChange={props.onChange}
            name="pronunciationCriteria"
            value={props.verbCriteria.pronunciation}
            onClick={props.onClick}
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
            listOfValues={verbGroupList}
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

VerbCriteriaForm.propTypes = {
  verbCriteria: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default VerbCriteriaForm;
