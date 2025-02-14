import React from 'react'

const InputField = ({ label, type, value, onChange, placeholder, icon, required }) => (
  <div className="input-group">
    <label htmlFor={label}>{label} {required && <span>*</span>}</label>
    <div className="input-field">
      {icon && icon}
      <input
        type={type}
        id={label}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </div>
  </div>
);

export default InputField;
