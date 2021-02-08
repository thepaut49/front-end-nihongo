import CustomInput from "../common/CustomInput";
import CustomSelect from "../common/CustomSelect";
import { verbGroupList } from "../common/verbConstants";
import PropTypes from "prop-types";

import React from "react";

function VerbForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
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
        listOfValues={verbGroupList}
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
