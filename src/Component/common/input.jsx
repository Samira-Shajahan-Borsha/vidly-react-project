import React from "react";

const Input = ({name, label, value, onChange }) => {
  return (
    <div className="form-group mb-4 col">
      <label htmlFor={name}>{label}</label>
      <input
        /* autoFocus */
        //   ref={this.username}
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        type="text"
        className="form-control"
      />
    </div>
  );
};

export default Input;
