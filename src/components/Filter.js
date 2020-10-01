import React from "react";

function Filter({ value, onChangeFilter }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChangeFilter(e.target.value)}
    ></input>
  );
}
export default Filter;
