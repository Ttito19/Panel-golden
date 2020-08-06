import React from "react";

const Input = (props) => {
  // ref.current.focus();
  const { value, defaultValue, name, type, onChange, refs } = props;
  return (
    <div className="mb-3">
      <label>{props.name}</label>
      <input
        value={value}
        className="form-control"
        defaultValue={defaultValue}
        name={name}
        type={type}
        onChange={onChange}
        ref={refs}
        required
      />
    </div>
  );
};

export default Input;
