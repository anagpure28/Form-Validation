import React, { useState } from "react";
import "./FormInput.css";

const FormInput = ({ label, errorMessage, onChange, id, ...input }) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...input}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() => input.name === "confirmPassword" && setFocused(true)}
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
