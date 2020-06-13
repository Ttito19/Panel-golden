import React from "react";

const Input = (props) => {
  // ref.current.focus();
  const { defaultValue, name, type, onChange, refs } = props;
  return (
    <div className="col-8">
      <label>{props.name}</label>
      <input
        className="form-control"
        defaultValue={defaultValue}
        name={name}
        type={type}
        onChange={onChange}
        ref={refs}
      />
    </div>
  );
};

export default Input;
