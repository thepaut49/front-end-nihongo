import React from "react";
import CustomInput from "../common/CustomInput";
import CustomInputPronunciation from "../common/CustomInputPronunciation";
import PropTypes from "prop-types";

const formStyle = {
  backgroundColor: "#4682B4",
  margin: "1em",
  padding: "0.5em",
  borderRadius: "10px",
};

function NaAdjectiveForm(props) {
  return (
    <form onSubmit={props.onSubmit} style={formStyle}>
      <CustomInput
        id="kanjis"
        label="Kanjis"
        onChange={props.onChange}
        name="kanjis"
        value={props.naAdjective.kanjis}
        error={props.errors.kanjis}
      />

      <CustomInputPronunciation
        id="pronunciation"
        label="Pronunciation"
        onChange={props.onChange}
        name="pronunciation"
        value={props.naAdjective.pronunciation}
        error={props.errors.pronunciation}
        onMiddlePointClick={props.onMiddlePointClick}
        onTranslateClick={props.onTranslateClick}
      />

      <CustomInput
        id="meaning"
        label="Meaning"
        onChange={props.onChange}
        name="meaning"
        value={props.naAdjective.meaning}
        error={props.errors.meaning}
      />
      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

NaAdjectiveForm.propTypes = {
  naAdjective: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  onMiddlePointClick: PropTypes.func.isRequired,
  onTranslateClick: PropTypes.func.isRequired,
};

export default NaAdjectiveForm;
