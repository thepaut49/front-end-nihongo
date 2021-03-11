import CustomInput from "../common/CustomInput";
import PropTypes from "prop-types";

import React from "react";

const formStyle = {
  backgroundColor: "#4682B4",
  margin: "1em",
  padding: "0.5em",
  borderRadius: "10px",
};

function WordForm(props) {
  return (
    <form onSubmit={props.onSubmit} style={formStyle}>
      <CustomInput
        id="kanjis"
        label="Kanjis"
        onChange={props.onChange}
        name="kanjis"
        value={props.word.kanjis}
        error={props.errors.kanjis}
      />

      <CustomInput
        id="pronunciation"
        label="Pronunciation"
        onChange={props.onChange}
        name="pronunciation"
        value={props.word.pronunciation}
        error={props.errors.pronunciation}
      />

      <CustomInput
        id="meaning"
        label="Meaning"
        onChange={props.onChange}
        name="meaning"
        value={props.word.meaning}
        error={props.errors.meaning}
      />
      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

WordForm.propTypes = {
  word: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default WordForm;
