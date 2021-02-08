import React from "react";
import PropTypes from "prop-types";
import { specialKanas } from "./TranslateRomajiToKana";

function CustomInputPronunciation(props) {
  const styleButtons = {
    display: "grid",
    "grid-template-columns": "1fr 1fr 1fr 1fr 1fr 1fr",
    gap: "1em 1em",
  };
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
          type="text"
          onChange={props.onChange}
          name={props.name}
          className="form-control"
          value={props.value}
          maxLength={props.maxLength}
        />
        <div style={styleButtons}>
          {specialKanas.map((kana) => {
            return (
              <button className="btn btn-primary" onClick={props.onClick}>
                {kana}
              </button>
            );
          })}
        </div>
      </div>
      {props.error && <div className="alert alert-danger">{props.error}</div>}
    </div>
  );
}

CustomInputPronunciation.defaultProps = {
  error: "",
  maxLength: "",
};

CustomInputPronunciation.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.string,
  maxLength: PropTypes.string,
};

export default CustomInputPronunciation;
