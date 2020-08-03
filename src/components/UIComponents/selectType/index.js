import React from "react";

const Select = (props) => {
  // ref.current.focus();
  const { value, defaultValue, name, type, onChange, refs } = props;
  return (
    <div>
      <label>{props.name}</label>

      <select name={name} className="form-control" ref={refs}>
        <option value="Enterprise">Enterprise</option>
        <option value="Normal">Normal</option>
      </select>

    </div>
  );
};

export default Select;
