import React from "react";

const Input = ({ handleChange, name, placeholder }) => {
  return (
    <input
      type="text"
      onChange={handleChange}
      name={name}
      placeholder={placeholder}
    />
  );
};

export default Input;
