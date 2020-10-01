import React from "react";
import PropTypes from "prop-types";

function InputForm({ label, placeholder, type, value, onInput }) {
  return (
    <>
      <label>
        {label}
        <input
          placeholder={placeholder}
          autoComplete="off"
          type={type}
          value={value}
          onChange={(e) => onInput(e.target.value)}
        ></input>
      </label>
    </>
  );
}

InputForm.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onInput: PropTypes.func.isRequired,
};

export default InputForm;
