import React from "react";
import CustomInput from "../common/CustomInput";
import CustomTextArea from "../common/CustomTextArea";
import PropTypes from "prop-types";

const formStyle = {
  backgroundColor: "#4682B4",
  margin: "1em",
  padding: "0.5em",
  borderRadius: "10px",
};

function ParticuleForm(props) {
  return (
    <form onSubmit={props.onSubmit} style={formStyle}>
      <CustomInput
        id="kanjis"
        label="Particle"
        onChange={props.onChange}
        name="kanjis"
        value={props.particule.kanjis}
        error={props.errors.kanjis}
      />

      <CustomInput
        id="summary"
        label="Summary"
        onChange={props.onChange}
        name="summary"
        value={props.particule.summary}
        error={props.errors.summary}
      />

      <CustomTextArea
        id="function"
        label="Function of the particle"
        name="function"
        cols={70}
        rows={5}
        value={props.particule.function}
        onChange={props.onChange}
        error={props.errors.function}
      />

      <CustomTextArea
        id="howToUse"
        label="How to use the particle"
        name="howToUse"
        cols={70}
        rows={5}
        value={props.particule.howToUse}
        onChange={props.onChange}
        error={props.errors.howToUse}
      />

      <CustomTextArea
        id="examples"
        label="Examples sentence for the particle "
        name="examples"
        cols={70}
        rows={20}
        value={props.particule.examples}
        onChange={props.onChange}
        error={props.errors.examples}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

ParticuleForm.propTypes = {
  particule: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default ParticuleForm;
