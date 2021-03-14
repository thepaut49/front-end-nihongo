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
        label="Kanjis"
        onChange={props.onChange}
        name="kanjis"
        value={props.particule.kanjis}
        error={props.errors.kanjis}
      />

      <CustomTextArea
        id="htmlDescription"
        label="Html description : "
        name="htmlDescription"
        cols={70}
        rows={50}
        value={props.particule.htmlDescription}
        onChange={props.onChange}
        error={props.errors.htmlDescription}
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
