import React from "react";

const TextArea = (props) => {
  // ref.current.focus();
  const { value, defaultValue, name, type, onChange, refs } = props;
  return (
    <div>
      <label>{props.name}</label>
      <textarea
        value={value}
        className="form-control"
        defaultValue={defaultValue}
        name={name}
        type={type}
        onChange={onChange}
        ref={refs}
        required
        rows="5"
      />
    </div>
  );
};

export default TextArea;
