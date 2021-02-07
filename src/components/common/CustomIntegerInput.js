import React from "react";
import PropTypes from "prop-types";

function CustomIntegerInput(props) {
  let wrapperClass = "form-group";
  if (props.error.length > 0) {
    wrapperClass += "has-error";
  }

  return (
    <div id={"div" + props.id} className={wrapperClass}>
      <label htmlFor={props.id}>{props.label}</label>
      <div className="field">
        <input
          id={props.id}
          type="number"
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

CustomIntegerInput.defaultProps = {
  error: "",
  step: "",
};

CustomIntegerInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number,
  error: PropTypes.string,
  step: PropTypes.string,
};

export default CustomIntegerInput;
