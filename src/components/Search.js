import React from "react";



const SearchField = ({
  name,
  type,
  nombre,
  handleChange,
  placeholder,
  value = "",
  ...props
}) => (
  <div className="uk-margin">
    <label className="uk-form-label uk-text-capitalize" htmlFor={nombre}>
      {nombre}:
    </label>
    <div className="uk-form-controls">
      <input
        onChange= {handleChange}
        name={name}
        className="uk-input"
        id={name}
        type={type}
        value={value}
        placeholder={placeholder}
        {...props}
      />
    </div>
  </div>
);

export default SearchField;