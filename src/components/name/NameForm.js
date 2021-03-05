import CustomInput from "../common/CustomInput";
import PropTypes from "prop-types";

import React from "react";

function NameForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <CustomInput
        id="kanjis"
        label="Kanjis"
        onChange={props.onChange}
        name="kanjis"
        value={props.name.kanjis}
        error={props.errors.kanjis}
      />

      <CustomInput
        id="pronunciation"
        label="Pronunciation"
        onChange={props.onChange}
        name="pronunciation"
        value={props.name.pronunciation}
        error={props.errors.pronunciation}
      />

      <CustomInput
        id="meaning"
        label="Meaning"
        onChange={props.onChange}
        name="meaning"
        value={props.name.meaning}
        error={props.errors.meaning}
      />
      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

NameForm.propTypes = {
  name: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default NameForm;
