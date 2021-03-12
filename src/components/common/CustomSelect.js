import React from "react";
import PropTypes from "prop-types";

function CustomSelect(props) {
  let wrapperClass = "form-group";
  if (props.error.length > 0) {
    wrapperClass += "has-error";
  }

  const listOfValues = props.listOfValues;
  return (
    <div id={"div" + props.id} className={wrapperClass}>
      <label htmlFor={props.id}>{props.label}</label>
      <div className="field">
        <select
          id={props.id}
          type="text"
          onChange={props.onChange}
          name={props.name}
          className="form-control"
          value={props.value}
        >
          <option value="" />
          {listOfValues &&
            listOfValues.map((item) => {
              return (
                <option key={item} value={item}>
                  {item}
                </option>
              );
            })}
        </select>
      </div>
      {props.error && <div className="alert alert-danger">{props.error}</div>}
    </div>
  );
}

CustomSelect.defaultProps = {
  error: "",
};

CustomSelect.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.string,
  listOfValues: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CustomSelect;
