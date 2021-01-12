import React from "react";

const DropDownOption = ({
  name,
  nombre,
  type,
  handleChange,
  placeholder,
  value = "",
  ...props
}) => (
  <div className="uk-margin">
    <label className="uk-form-label uk-text-capitalize" htmlFor={name}>
      {name}:
    </label>
    <select className="uk-form-controls">
      <option
        onChange={handleChange}
        name={nombre}
        className="uk-input"
        id={name}
        type={type}
        value={value}
        placeholder={placeholder}
        {...props}
      />
    </select>
  </div>
);

export default DropDownOption;