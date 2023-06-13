import React from "react";

const Input = ({ handleChange, name, placeholder }) => {
  return (
    <input onChange={handleChange} name={name} placeholder={placeholder} />
  );
};

export default Input;
