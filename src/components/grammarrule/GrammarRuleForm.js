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

function GrammarRuleForm(props) {
  return (
    <form onSubmit={props.onSubmit} style={formStyle}>
      <CustomInput
        id="title"
        label="Title"
        onChange={props.onChange}
        name="title"
        value={props.grammarRule.title}
        error={props.errors.title}
      />

      <CustomTextArea
        id="htmlDescription"
        label="Html description"
        name="htmlDescription"
        cols={70}
        rows={15}
        value={props.grammarRule.htmlDescription}
        onChange={props.onChange}
        error={props.errors.htmlDescription}
      />

      <CustomInput
        id="firstKeyWord"
        label="First keyword"
        onChange={props.onChange}
        name="firstKeyWord"
        value={props.grammarRule.firstKeyWord}
        error={props.errors.firstKeyWord}
      />

      <CustomInput
        id="secondKeyWord"
        label="Second keyword"
        onChange={props.onChange}
        name="secondKeyWord"
        value={props.grammarRule.secondKeyWord}
        error={props.errors.secondKeyWord}
      />

      <CustomInput
        id="thirdKeyWord"
        label="Third keyword"
        onChange={props.onChange}
        name="thirdKeyWord"
        value={props.grammarRule.thirdKeyWord}
        error={props.errors.thirdKeyWord}
      />

      <CustomInput
        id="FourthKeyWord"
        label="Fourth keyword"
        onChange={props.onChange}
        name="FourthKeyWord"
        value={props.grammarRule.FourthKeyWord}
        error={props.errors.FourthKeyWord}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

GrammarRuleForm.propTypes = {
  grammarRule: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default GrammarRuleForm;
