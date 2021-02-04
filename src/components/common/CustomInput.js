import React from "react";
import PropTypes from "prop-types";

function CustomInput(props) {
  let wrapperClass = "form-group";
  if (props.error.length > 0) {
    wrapperClass += "has-error";
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={props.id}>{props.label}</label>
      <div className="field">
        <input
          id={props.id}
          type={props.typeInput}
          onChange={props.onChange}
          name={props.name}
          className="form-control"
          value={props.value}
          step={props.step}
        />
      </div>
      {props.error && <div className="alert alert-danger">{props.error}</div>}
    </div>
  );
}

CustomInput.defaultProps = {
  error: "",
  step: "",
};

CustomInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  typeInput: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.string,
  step: PropTypes.string,
};

export default CustomInput;
