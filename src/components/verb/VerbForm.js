import CustomInput from "../common/CustomInput";
import CustomSelect from "../common/CustomSelect";
import verbConstants from "../common/verbConstants";
import PropTypes from "prop-types";

import React from "react";

const formStyle = {
  backgroundColor: "#4682B4",
  margin: "1em",
  padding: "0.5em",
  borderRadius: "10px",
};

function VerbForm(props) {
  return (
    <form onSubmit={props.onSubmit} style={formStyle}>
      <CustomInput
        id="neutralForm"
        label="Neutral form"
        onChange={props.onChange}
        name="neutralForm"
        value={props.verb.neutralForm}
        error={props.errors.neutralForm}
      />

      <CustomInput
        id="pronunciation"
        label="Pronunciation"
        onChange={props.onChange}
        name="pronunciation"
        value={props.verb.pronunciation}
        error={props.errors.pronunciation}
      />

      <CustomInput
        id="meaning"
        label="Meaning"
        onChange={props.onChange}
        name="meaning"
        value={props.verb.meaning}
        error={props.errors.meaning}
      />

      <CustomSelect
        id="groupe"
        label="Group"
        onChange={props.onChange}
        step="1"
        name="groupe"
        value={props.verb.groupe}
        listOfValues={verbConstants.verbGroupList}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

VerbForm.propTypes = {
  verb: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default VerbForm;
