import React from "react";
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

export default InputForm;
