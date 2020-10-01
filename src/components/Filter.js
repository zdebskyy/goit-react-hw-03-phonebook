import React from "react";
import PropTypes from "prop-types";

function Filter({ value, onChangeFilter }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChangeFilter(e.target.value)}
    ></input>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
export default Filter;
